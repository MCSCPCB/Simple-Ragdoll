import { OUTPUT_LEVELS } from './core/model.mjs';
import { outputModel } from './core/output.mjs';
import { createProgram } from './core/program.mjs';
import { INPUT_ANIMATION } from './core/input.mjs';
import { parseJson } from './resources.js';
import { clone } from './config.js';
import { fail } from './i18n.js';

export function adaptClient(original,rig,program,id){
  const result=clone(original),c=result['minecraft:client_entity'].description,s=c.scripts??={};
  const animations={...c.animations},animate=[...(s.animate??[])];
  for(const [i,entry] of (c.animation_controllers??[]).entries())for(const [name,value] of Object.entries(entry)){
    const alias=`ragdoll_original_${i}_${name}`;animations[alias]=value;animate.push(alias);
  }
  const key='ragdoll_generated';if(key in animations)fail('alias',[key]);
  if('ragdoll_input' in animations)fail('alias',['ragdoll_input']);
  animations[key]=id;animations.ragdoll_input=INPUT_ANIMATION;delete c.animation_controllers;c.animations=animations;
  const atLeast=(version,min)=>version.split('.').map(Number).reduce((a,n,i)=>a||Math.sign(n-(min[i]??0)),0)<0?min.join('.'):version;
  result.format_version=atLeast(String(result.format_version??'1.10.0'),[1,20,60]);c.min_engine_version=atLeast(String(c.min_engine_version??'1.10.0'),[1,26,0]);
  const alias=g=>Object.entries(c.geometry).find(([,value])=>value===g)?.[0];
  let query=`geometry.${alias(rig.variants.at(-1).geometry)}`;
  for(let i=rig.variants.length-2;i>=0;i--)query=`(${rig.variants[i].when})?geometry.${alias(rig.variants[i].geometry)}:(${query})`;
  c.queryable_geometry=query;
  const condition=entry=>typeof entry==='string'?{[entry]:'!v.ragdoll_active'}:Object.fromEntries(Object.entries(entry).map(([name,value])=>[name,`(!v.ragdoll_active)*(${typeof value==='boolean'?Number(value):value})`]));
  c.scripts={...s,initialize:[...(s.initialize??[]),...program.initializeSources],pre_animation:[...(s.pre_animation??[]),...program.frameSources],animate:[...animate.map(condition),{[key]:'v.ragdoll_active'}],should_update_bones_and_effects_offscreen:true};
  return result;
}

export function resourceVariables(resources,original){
  const names=new Set(resources.reservedVariables??[]);
  for(const value of [...(resources.json?.values()??[]),original].filter(Boolean))for(const [name] of JSON.stringify(value).matchAll(/\b(?:v|variable)\.\w+/gi))names.add(name.toLowerCase().replace(/^variable\./,'v.'));
  return [...names];
}

export function generateEntity(resources,config,original){
  const client=original['minecraft:client_entity'].description,rig=outputModel(config,resources,client);
  const program=createProgram(rig,{reservedNames:resourceVariables(resources,original)}),name=client.identifier.replaceAll(':','_'),animationId=`animation.ragdoll.${name}`;
  const definition=JSON.stringify(adaptClient(original,rig,program,animationId));
  return {rig,program,name,animationId,definition,bytes:new TextEncoder().encode(definition).byteLength};
}

export async function estimateOutputLevels(resources,config,original,{cancelled=()=>false,update=()=>{}}={}){
  const levels=[],seen=new Map();
  for(const level of [...OUTPUT_LEVELS].reverse()){
    await new Promise(resolve=>setTimeout(resolve,0));if(cancelled())return;
    const model={...config,outputLevel:level},rig=outputModel(model,resources,original['minecraft:client_entity'].description);
    const signature=JSON.stringify([rig.simulation,rig.shapePairs,rig.contactFriction]);
    if(seen.has(signature)){seen.get(signature).levels.push(level);update(levels.map(entry=>({...entry,levels:[...entry.levels]})).reverse());continue;}
    const {bytes}=generateEntity(resources,model,original);
    const entry={level,bytes,levels:[level]};seen.set(signature,entry);
    levels.push(entry);update(levels.map(entry=>({...entry,levels:[...entry.levels]})).reverse());
  }
  return levels.reverse();
}

export async function generatePack(resources,rows,options,Zip,onProgress=()=>{}){
  const selected=rows.filter(r=>r.selected);if(!selected.length)fail('selection');
  const zip=new Zip(),reports=[],updates=new Map();
  const set=(path,value)=>updates.set(path,JSON.stringify(value));
  set('animations/simple_ragdoll_input.animation.json',{format_version:'1.8.0',animations:{[INPUT_ANIMATION]:{loop:true,animation_length:1}}});
  for(const [index,row] of selected.entries()){
    onProgress(row.id,index,selected.length);await new Promise(resolve=>setTimeout(resolve,0));
    if(!row.config)fail('not_configured',[row.id]);
    const record=resources.clients.get(row.id);if(!record)fail('entity_missing',[row.id]);
    if(/v\.(ragdoll_|rg[a-z0-9]+\b)/.test(JSON.stringify(record.value)))fail('already_generated',[row.id]);
    const {rig,program,name,animationId,definition,bytes}=generateEntity(resources,row.config,record.value);
    if(resources.animations.has(animationId))fail('alias',[animationId]);
    updates.set(record.file,definition);
    set(`animations/ragdoll_${name}.animation.json`,{format_version:'1.20.60',animations:{[animationId]:program.animation()}});
    reports.push({id:row.id,bodies:rig.bodies.length,boxes:rig.shapes.length,joints:rig.joints.length,bytes});
  }
  const manifest=clone(resources.json.get('manifest.json')??{format_version:2,header:{},modules:[]});
  const originalMinimum=manifest.header?.min_engine_version??[0,0,0];
  const minimum=originalMinimum.reduce((comparison,n,i)=>comparison||Math.sign(n-([1,26,0][i]??0)),0)>0?originalMinimum:[1,26,0];
  manifest.header={...manifest.header,name:options.name,description:options.name,uuid:options.uuid??crypto.randomUUID(),version:[1,0,0],min_engine_version:minimum};
  manifest.modules=[{type:'resources',uuid:crypto.randomUUID(),version:[1,0,0]}];
  set('manifest.json',manifest);
  const decoder=new TextDecoder();
  for(const [path,bytes] of resources.files)if(/\.json$/i.test(path)&&!updates.has(path)){
    try{set(path,resources.json.get(path)??parseJson(typeof bytes==='string'?bytes:decoder.decode(bytes),path));}catch{}
  }
  for(const [path,bytes] of resources.files)zip.file(path,bytes);
  for(const [path,text] of updates)zip.file(path,text);
  const data=await zip.generateAsync({type:'uint8array',compression:'DEFLATE',compressionOptions:{level:6}});
  return {data,reports,updates};
}
