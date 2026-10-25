import { modelRotation } from '../core/math.mjs';
import { shapePosition, jointFrame } from '../rig.js';

const COLOR={shape:0x67b9ef,chosen:0xffd166,joint:0xf18fa4,mismatch:0xff9b3d,center:0xffd166,swing:0x80d677,twist:0xf18fa4};
const mirror=p=>[-p[0],p[1],p[2]];
// Bedrock rotations become three.js rotations by mirroring X.
const threeQuaternion=q=>new THREE.Quaternion(q[0],-q[1],-q[2],q[3]);

export class Overlay {
  constructor(){this.nodes=[];this.picks=[];}
  clear(){
    for(const node of this.nodes){node.removeFromParent();node.traverse(child=>{child.geometry?.dispose();if(Array.isArray(child.material))child.material.forEach(m=>m.dispose());else child.material?.dispose();});}
    this.nodes=[];this.picks=[];
  }
  add(group,node,order=10){node.renderOrder=order;node.traverse(c=>{c.renderOrder=order;if(c.material){c.material.depthTest=false;c.material.transparent=true;}});group.mesh.add(node);this.nodes.push(node);return node;}
  // Bone-local model coordinates relative to the group mesh; group.origin is already in Blockbench coordinates.
  local(group,p){return mirror(p).map((n,i)=>n-group.origin[i]);}
  draw(config,info,variant,selected){
    this.clear();
    const groups=new Map(Group.all.map(g=>[g.name,g]));
    for(const [id,body] of Object.entries(info.bodies)){
      const group=groups.get(body.bone);if(!group)continue;
      const bodySelected=selected.type==='body'&&selected.body===id;
      body.shapes.forEach((box,index)=>{
        const chosen=bodySelected||selected.type==='shape'&&selected.body===id&&selected.index===index;
        const geometry=new THREE.BoxGeometry(...box.size),edges=new THREE.EdgesGeometry(geometry);geometry.dispose();
        const node=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:chosen?COLOR.chosen:COLOR.shape,opacity:chosen?.95:.55}));
        node.position.fromArray(this.local(group,shapePosition(box)));node.quaternion.copy(threeQuaternion(modelRotation(box.rotation??[0,0,0])));
        this.add(group,node,chosen?12:10);this.picks.push({type:'shape',node,half:box.size.map(n=>n/2),body:id,index});
      });
      if(bodySelected)this.add(group,this.marker(this.local(group,body.center),COLOR.center,.3),13);
    }
    for(const id of Object.keys(config.joints)){
      const frame=jointFrame(config,info,variant,id),group=frame&&groups.get(frame.bone);if(!group)continue;
      const chosen=selected.type==='joint'&&selected.joint===id,position=this.local(group,frame.position);
      const node=this.add(group,this.marker(position,frame.mismatch?COLOR.mismatch:COLOR.joint,chosen?.4:.25),chosen?14:11);
      this.picks.push({type:'joint',node,joint:id});
      if(!chosen)continue;
      this.add(group,this.limits(frame,position),13);
      if(frame.mismatch){const other=groups.get(frame.ends.a.body.bone);if(other)this.add(other,this.marker(this.local(other,frame.ends.a.local),COLOR.mismatch,.2),14);}
    }
  }
  marker(position,color,radius){const node=new THREE.Mesh(new THREE.SphereGeometry(radius,8,6),new THREE.MeshBasicMaterial({color}));node.position.fromArray(position);return node;}
  // Swing cone around the frame Y axis and the twist range around the reference direction.
  limits(frame,position){
    const {swing,twist}=frame.ends.joint,root=new THREE.Object3D(),length=3,s=(swing??45)*Math.PI/180,w=(twist??22.5)*Math.PI/180;
    root.position.fromArray(position);root.quaternion.copy(threeQuaternion(frame.quaternion));
    const line=(points,color,segments=false)=>{const g=new THREE.BufferGeometry().setFromPoints(points),m=new THREE.LineBasicMaterial({color,opacity:.8});return segments?new THREE.LineSegments(g,m):new THREE.Line(g,m);};
    const rim=[],spokes=[];
    for(let i=0;i<=48;i++){const a=i/48*Math.PI*2;rim.push(new THREE.Vector3(Math.cos(a)*Math.sin(s)*length,Math.cos(s)*length,Math.sin(a)*Math.sin(s)*length));}
    for(let i=0;i<4;i++)spokes.push(new THREE.Vector3(),rim[i*12]);
    const arc=[new THREE.Vector3()];
    for(let i=0;i<=16;i++){const a=-w+2*w*i/16;arc.push(new THREE.Vector3(Math.cos(a)*length*.8,0,Math.sin(a)*length*.8));}
    arc.push(new THREE.Vector3());
    root.add(line(rim,COLOR.swing),line(spokes,COLOR.swing,true),line(arc,COLOR.twist));
    root.add(new THREE.ArrowHelper(new THREE.Vector3(0,1,0),new THREE.Vector3(),length*1.2,COLOR.swing,.6,.3));
    root.add(new THREE.ArrowHelper(new THREE.Vector3(1,0,0),new THREE.Vector3(),length,COLOR.twist,.5,.25));
    return root;
  }
  // Joints win within a few pixels; otherwise the nearest collision box under the pointer.
  pick(preview,x,y){
    if(!this.picks.length)return null;
    const camera=preview.camera,raycaster=new THREE.Raycaster();raycaster.setFromCamera(new THREE.Vector2(x,y),camera);
    const rect=preview.canvas.getBoundingClientRect();
    let joint=null,best=12;
    for(const pick of this.picks){
      if(pick.type!=='joint')continue;
      const p=pick.node.getWorldPosition(new THREE.Vector3()).project(camera);if(p.z>1)continue;
      const d=Math.hypot((p.x-x)*rect.width/2,(p.y-y)*rect.height/2);if(d<best){best=d;joint=pick;}
    }
    if(joint)return {joint:joint.joint};
    let hit=null,distance=Infinity;
    for(const pick of this.picks){
      if(pick.type!=='shape')continue;
      pick.node.updateWorldMatrix(true,false);
      const ray=raycaster.ray.clone().applyMatrix4(new THREE.Matrix4().copy(pick.node.matrixWorld).invert());
      const point=ray.intersectBox(new THREE.Box3(new THREE.Vector3(...pick.half.map(n=>-n)),new THREE.Vector3(...pick.half)),new THREE.Vector3());
      if(!point)continue;
      const d=point.applyMatrix4(pick.node.matrixWorld).distanceTo(raycaster.ray.origin);if(d<distance){distance=d;hit=pick;}
    }
    return hit&&{body:hit.body,index:hit.index};
  }
}
