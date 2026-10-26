import { createProgram, testMath } from '../core/program.mjs';
import { outputModel } from '../core/output.mjs';
import { executor } from './evaluator.js';

export function createSimulation(config, resources, client, poses) {
  const model=structuredClone(config);
  model.trigger='q.health<q.max_health'; model.release='0';
  const rig=outputModel(model,resources,client),program=createProgram(rig,{preview:true}),compile=executor({indexed:true});
  const queryPoses=new Map(Object.entries(poses).map(([name,pose])=>[name.toLowerCase(),pose]));
  let seed=12345;
  const q={health:20,max_health:20,is_alive:1,death_ticks:0,is_baby:0,body_y_rotation:0,delta_time:0,life_time:0,frame_alpha:1,
    position:()=>0,bone_orientation_trs:name=>queryPoses.get(name),
    relative_block_has_any_tag:(_x,y,_z,...tags)=>Number(y<0&&!tags.some(t=>t==='water'||t==='lava'))};
  const scope={v:{},t:{},q,c:{},math:{...testMath,random:(a,b)=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return a+(b-a)*seed/4294967296;}}};
  const initialize=compile(program.initialize),steps=program.frameChunks.map(compile),roots=rig.bodies.map((body,i)=>body.parent<0?compile(program.rootOutputs[i]):null);
  compile.prepare(scope);
  const step=dt=>{q.delta_time=dt;q.life_time+=dt;for(const run of steps){compile.resetTemps(scope);run(scope);}for(const run of roots)if(run){compile.resetTemps(scope);run(scope);}};
  initialize(scope);step(0);q.health=19;step(0);
  return {rig,scope,step,transforms(){return rig.bodies.map((body,i)=>({bone:body.bone,position:['x','y','z'].map(k=>scope.v[`out${i}p${k}`]),rotation:['x','y','z'].map(k=>scope.v[`out${i}r${k}`]),scale:Array(3).fill(1-scope.v[`pose${i}hidden`])}));}};
}
