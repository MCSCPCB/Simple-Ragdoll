import { fail } from '../i18n.js';

export function capturePose(groups, root, Three) {
  root.updateMatrixWorld(true);
  const inverse=new Three.Matrix4().copy(root.matrixWorld).invert(),poses={};
  for(const group of groups){
    const matrix=new Three.Matrix4().multiplyMatrices(inverse,group.mesh.matrixWorld),position=new Three.Vector3(),rotation=new Three.Quaternion(),scale=new Three.Vector3();
    matrix.decompose(position,rotation,scale);
    if([scale.x,scale.y,scale.z].some(n=>Math.abs(n)<.000001)){
      poses[group.name]={t:{x:-position.x,y:position.y,z:position.z},r:{x:0,y:0,z:0},s:{x:scale.x,y:scale.y,z:scale.z}};
      continue;
    }
    if(Math.min(scale.x,scale.y,scale.z)<=0||Math.max(scale.x,scale.y,scale.z)-Math.min(scale.x,scale.y,scale.z)>1e-5)fail('nonuniform');
    const [x,y,z,w]=[rotation.x,-rotation.y,-rotation.z,rotation.w],sy=Math.max(-1,Math.min(1,2*(w*y-z*x))),k=180/Math.PI;
    const r=Math.abs(sy)<.999999?[-Math.atan2(2*(w*x+y*z),1-2*(x*x+y*y))*k,Math.asin(sy)*k,-Math.atan2(2*(w*z+x*y),1-2*(y*y+z*z))*k]:[-Math.atan2(2*(w*x-y*z),1-2*(x*x+z*z))*k,Math.asin(sy)*k,0];
    poses[group.name]={t:{x:-position.x,y:position.y,z:position.z},r:{x:r[0],y:r[1],z:r[2]},s:{x:scale.x,y:scale.y,z:scale.z}};
  }
  return poses;
}

export function applyTransforms(groups,transforms) {
  const byName=new Map(groups.map(g=>[g.name,g]));
  for(const state of transforms){const mesh=byName.get(state.bone)?.mesh;if(!mesh)continue;
    const base=mesh.fix_position,rotation=mesh.fix_rotation;
    mesh.position.copy(base);mesh.position.x-=state.position[0];mesh.position.y+=state.position[1];mesh.position.z+=state.position[2];
    mesh.rotation.copy(rotation);
    mesh.rotation.x-=state.rotation[0]*Math.PI/180;mesh.rotation.y-=state.rotation[1]*Math.PI/180;mesh.rotation.z+=state.rotation[2]*Math.PI/180;
    mesh.scale.fromArray(state.scale??[1,1,1]);mesh.updateMatrix();
  }
}
