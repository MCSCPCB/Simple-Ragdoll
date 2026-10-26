import { OUTPUT_LEVELS } from './core/model.mjs';
import { outputModel } from './core/output.mjs';
import { createProgram } from './core/program.mjs';
import { compilePrograms, sharingKey } from './core/compute.mjs';
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
  const compute=program.computeOrder.map((id,i)=>{
    const alias='ragdoll_compute_'+i;if(alias in animations)fail('alias',[alias]);
    animations[alias]=id;return alias;
  });
  c.scripts={...s,initialize:[...(s.initialize??[]),...program.initializeSources],pre_animation:[...(s.pre_animation??[]),...program.preAnimationSources],animate:[...compute,...animate.map(condition),{[key]:'v.ragdoll_active'}],should_update_bones_and_effects_offscreen:true};
  return result;
}

export function resourceVariables(resources,original){
  const names=new Set(resources.reservedVariables??[]);
  for(const value of [...(resources.json?.values()??[]),original].filter(Boolean))for(const [name] of JSON.stringify(value).matchAll(/\b(?:v|variable)\.\w+/gi))names.add(name.toLowerCase().replace(/^variable\./,'v.'));
  return [...names];
}

const animationFile=animations=>JSON.stringify({format_version:'1.20.60',animations});
const inputFile=JSON.stringify({format_version:'1.8.0',animations:{[INPUT_ANIMATION]:{loop:true,animation_length:1}}});
const byteLength=text=>new TextEncoder().encode(text).byteLength;

export function generateEntities(resources,entities){
  const reservedNames=[...new Set([...resourceVariables(resources),...entities.flatMap(e=>resourceVariables({},e.original))])];
  const entries=entities.map(({config,original})=>{
    const client=original['minecraft:client_entity'].description,rig=outputModel(config,resources,client);
    return {original,rig,name:client.identifier.replaceAll(':','_'),...createProgram(rig,{preview:true,reservedNames})};
  });
  const finish=(entry,program)=>{
    const {original,rig,name}=entry,animationId=`animation.ragdoll.${name}`;
    const definition=JSON.stringify(adaptClient(original,rig,program,animationId));
    const animation=animationFile({[animationId]:program.animation()});
    return {rig,program,name,animationId,definition,animation,bytes:byteLength(definition)+byteLength(animation)};
  };
  const compile=entries=>compilePrograms(entries,{reservedNames}).map((program,i)=>finish(entries[i],program));
  const size=records=>records.reduce((n,r)=>n+r.bytes,0)+byteLength(animationFile(records[0].program.computeAnimations));
  const groups=new Map();
  for(const entry of entries){const key=sharingKey(entry.rig);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(entry);}
  const generated=new Map();
  for(const group of groups.values()){
    let results=group.map(entry=>compile([entry]));
    if(group.length>1){const shared=compile(group);if(size(shared)<results.reduce((n,r)=>n+size(r),0))results=[shared];}
    for(const records of results){
      const bytes=byteLength(animationFile(records[0].program.computeAnimations));
      records.forEach((record,i)=>{record.bytes+=Math.floor(bytes/records.length)+(i<bytes%records.length?1:0);generated.set(record.name,record);});
    }
  }
  const result=entries.map(entry=>generated.get(entry.name)),inputBytes=byteLength(inputFile);
  result.forEach((record,i)=>{record.bytes+=Math.floor(inputBytes/result.length)+(i<inputBytes%result.length?1:0);});
  return result;
}

export function generateEntity(resources,config,original){
  return generateEntities(resources,[{config,original}])[0];
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
  updates.set('animations/simple_ragdoll_input.animation.json',inputFile);
  const entities=[];
  for(const [index,row] of selected.entries()){
    onProgress(row.id,index,selected.length);await new Promise(resolve=>setTimeout(resolve,0));
    if(!row.config)fail('not_configured',[row.id]);
    const record=resources.clients.get(row.id);if(!record)fail('entity_missing',[row.id]);
    if(/v\.(ragdoll_|rg[a-z0-9]+\b)/.test(JSON.stringify(record.value)))fail('already_generated',[row.id]);
    entities.push({config:row.config,original:record.value,record,row});
  }
  const generated=generateEntities(resources,entities);
  for(const [index,{rig,program,name,animationId,definition,animation,bytes}] of generated.entries()){
    const {record,row}=entities[index];
    if(resources.animations.has(animationId))fail('alias',[animationId]);
    for(const id of Object.keys(program.computeAnimations))if(resources.animations.has(id))fail('alias',[id]);
    updates.set(record.file,definition);
    updates.set(`animations/ragdoll_${name}.animation.json`,animation);
    const computeFile=`animations/ragdoll_${program.computeName}.compute.json`;
    if(!updates.has(computeFile))updates.set(computeFile,animationFile(program.computeAnimations));
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
