import {A,If,axes,emit} from './expression.mjs';
import {mergeGroups} from './merge.mjs';
import {minifier} from './minify.mjs';
import {splitStatements} from './chunks.mjs';

const profile='v.compute_profile',slot='v.compute_step';
const flatten=nodes=>[nodes].flat(Infinity);
function assigned(nodes){
  const names=new Set();
  const visit=nodes=>{for(const n of flatten(nodes)){
    if(n.kind==='set')names.add(n.name);
    else if(n.kind==='if'){visit(n.yes);visit(n.no);}
    else visit(n.body);
  }};
  visit(nodes);return names;
}

export function sharingKey(rig){
  return JSON.stringify([
    rig.bodies.map(b=>[b.parent,b.shapes.length]),rig.shapes.map(s=>s.body),
    rig.joints.map(j=>[j.a,j.b]),rig.jointOrder,rig.shapePairs,
    rig.simulation,rig.contactFriction??true,[...rig.outputs].sort(),
  ]);
}

export function compilePrograms(entries,{reservedNames=[]}={}){
  const step=mergeGroups(entries.map(e=>e.frameChunks[1][0].yes),profile);
  const resets=[A(slot,0)];
  const all=[entries.map(e=>[e.initialize,e.frameChunks[0],e.frameChunks.at(-1),
    e.rig.bodies.flatMap((b,i)=>b.parent<0?Array.from({length:6},()=>e.rootOutputs[i]):[])]),
    step,resets,A(profile,0)];
  const frequencyText=emit(all),written=assigned(all);
  const external=[...frequencyText.matchAll(/(?<![\w.])v\.\w+/g)].map(m=>m[0]).filter(n=>!written.has(n));
  const namespace=minifier({frequencyText,reservedNames,externalNames:external});
  const source=(nodes,target='molang')=>target==='molang'?namespace(emit(nodes)):emit(nodes,target);
  const split=(nodes,prefix)=>splitStatements(nodes,source,{limit:63900,target:61500,prefix});
  const computeAnimations={};
  const prefix=`animation.ragdoll.${entries[0].name}.compute`;
  const carrier=(chunks,name)=>chunks.map((nodes,i)=>{
    const id=`${prefix}.${name}.${i}`,text=source(nodes)+'return 0;';
    computeAnimations[id]={loop:true,animation_length:1,anim_time_update:text};
    return {id,nodes,source:text};
  });
  const stepChunks=split([If('v.active&&v.steps>'+slot,step)],'step');
  // 每轮最后一段推进计数；同一组动画按顺序执行三次。
  stepChunks.at(-1).push(A(slot,slot+'+1'));
  const computation=carrier(stepChunks,'step');
  const initialNodes=flatten(entries.map(e=>e.initialize)),initialLast=new Map();
  initialNodes.forEach((n,i)=>{if(n.kind==='set')initialLast.set(n.name,i);});
  const sharedInitial=initialNodes.filter((n,i)=>n.kind!=='set'||initialLast.get(n.name)===i);
  const declared=assigned(sharedInitial);
  const programs=entries.map((entry,index)=>{
    const {rig,rootOutputs}=entry;
    const begin=split([entry.frameChunks[0],resets],'begin'+index);
    const finish=carrier(split(entry.frameChunks.at(-1),'output'+index),'output'+index);
    const execution=[...computation,...computation,...computation,...finish];
    const extra=[...assigned([begin,execution.map(c=>c.nodes),rootOutputs])]
      .filter(n=>n.startsWith('v.')&&!declared.has(n)).map(n=>A(n,0));
    const initialize=flatten([extra,sharedInitial,entry.initialize,A(profile,index),resets]);
    const last=new Map();initialize.forEach((n,i)=>{if(n.kind==='set')last.set(n.name,i);});
    const initial=initialize.filter((n,i)=>n.kind!=='set'||last.get(n.name)===i);
    const initializeChunks=split(initial,'init'+index);
    const frameChunks=[...begin,...execution.map(c=>c.nodes)];
    const animation=(target='molang')=>({loop:true,override_previous_animation:true,bones:Object.fromEntries(rig.bodies.map((body,i)=>[body.bone,{
      ...Object.fromEntries([['position','p'],['rotation','r']].map(([channel,kind])=>[channel,axes.map(k=>{
        const name=`v.out${i}${kind}${k}`,value=target==='molang'?namespace(name):name;
        return body.parent<0?source(rootOutputs[i],target)+'return '+value+';':value;
      })])),scale:[1,1,1],
    }]))});
    return {initialize:initializeChunks.flat(),frameChunks,rootOutputs,source,animation,names:namespace.roots,
      initializeSources:initializeChunks.map(nodes=>source(nodes)),preAnimationSources:begin.map(nodes=>source(nodes)),
      frameSources:[...begin.map(nodes=>source(nodes)),...execution.map(c=>c.source)],
      computeOrder:execution.map(c=>c.id),computeAnimations,computeName:entries[0].name};
  });
  return programs;
}
