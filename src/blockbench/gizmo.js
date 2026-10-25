import { TransformControls } from '../vendor/transform-controls.js';
import { add, sub } from '../core/math.mjs';

const mirror=p=>[-p[0],p[1],p[2]];

// Transform handle for the selected physics object, plus click selection in the viewport.
export class Gizmo {
  constructor(controller){
    this.controller=controller;this.controls=null;this.node=null;this.target=null;this.drag=null;this.down=null;this.step=0;
    this.events=[];
    const listen=(name,fn)=>{document.addEventListener(name,fn,true);this.events.push([name,fn]);};
    listen('pointermove',e=>this.pointer(e,'move'));
    listen('pointerdown',e=>this.pointer(e,'down'));
    listen('pointerup',e=>this.pointer(e,'up'));
    listen('pointercancel',()=>{this.down=null;this.cancel();});
    listen('keydown',e=>{if(e.key==='Escape'&&this.drag){e.stopImmediatePropagation();this.cancel();}});
  }
  clear(){this.controls?.detach();this.node?.removeFromParent();this.node=null;this.target=null;}
  attach(target){
    this.clear();
    const group=Group.all.find(g=>g.name===target.bone);if(!group||!target.mode)return;
    if(!this.controls){
      // Input is forwarded only when a handle is hit, so the controls get a detached element.
      const surface=document.createElement('canvas');
      this.controls=new TransformControls(Preview.selected.camera,surface);
      surface.ownerDocument.removeEventListener('pointerup',this.controls._onPointerUp);
      this.controls.setSize(.8);scene.add(this.controls);
      this.controls.addEventListener('mouseDown',()=>this.begin());
      this.controls.addEventListener('objectChange',()=>this.change());
      this.controls.addEventListener('mouseUp',()=>this.finish());
    }
    this.target=target;this.group=group;
    this.node=new THREE.Object3D();group.mesh.add(this.node);
    this.node.position.fromArray(sub(mirror(target.position),group.origin));
    this.node.quaternion.set(target.quaternion[0],-target.quaternion[1],-target.quaternion[2],target.quaternion[3]);
    this.node.updateMatrixWorld(true);
    // Grid snapping is only meaningful when the bone axes match the world axes.
    this.aligned=Math.abs(Math.abs(group.mesh.getWorldQuaternion(new THREE.Quaternion()).w)-1)<1e-6;
    this.controls.camera=Preview.selected.camera;
    this.controls.setSpace(target.mode==='translate'?'world':'local');
    this.controls.setMode(target.mode);this.controls.attach(this.node);this.controls.updateMatrixWorld(true);
    Transformer.visible=false;
  }
  snap(event){
    this.step=canvasGridSize(event.shiftKey,event.ctrlKey||event.metaKey);
    this.controls.setRotationSnap(this.step*Math.PI/180);
  }
  pointer(event,kind){
    if(!this.controller.active()||this.controller.preview.state)return;
    const preview=this.drag?this.preview:Preview.all.find(p=>!p.offscreen&&p.canvas===event.target);
    if(!preview){if(kind!=='move')this.down=null;return;}
    const rect=preview.canvas.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width*2-1,y=-(event.clientY-rect.top)/rect.height*2+1;
    const controls=this.controls?.object&&this.controls;
    if(controls){
      controls.camera=preview.camera;controls.updateMatrixWorld(true);
      const pointer={x,y,button:kind==='move'?-1:event.button};
      if(!this.drag)controls.pointerHover(pointer);
      const grab=this.drag?true:kind==='down'?event.button===0&&!!controls.axis:kind==='move'&&!!controls.axis;
      if(grab){
        event.stopImmediatePropagation();event.preventDefault();
        if(kind==='down'){this.preview=preview;this.down=null;this.snap(event);controls.pointerDown(pointer);}
        else if(kind==='move'){this.snap(event);controls.pointerMove(pointer);}
        else controls.pointerUp(pointer);
        return;
      }
    }
    // A click without dragging selects; dragging still orbits the camera.
    if(kind==='down'&&event.button===0)this.down={x:event.clientX,y:event.clientY,preview};
    else if(kind==='up'&&this.down){
      const down=this.down;this.down=null;
      if(down.preview===preview&&Math.hypot(event.clientX-down.x,event.clientY-down.y)<5)this.controller.pick(this.controller.overlay.pick(preview,x,y));
    }
  }
  value(){
    const {node,group,target}=this,mode=this.controls.mode,step=this.aligned?this.step:0;
    if(mode==='translate'){
      const position=mirror(add(node.position.toArray(),group.origin));
      return {position:step?position.map((n,i)=>target.position[i]+Math.round((n-target.position[i])/step)*step):position};
    }
    if(mode==='rotate')return {quaternion:[node.quaternion.x,-node.quaternion.y,-node.quaternion.z,node.quaternion.w]};
    return {size:target.size.map((n,i)=>{const raw=n*Math.abs(node.scale.getComponent(i));return Math.max(.01,this.step?n+Math.round((raw-n)/this.step)*this.step:raw);})};
  }
  begin(){this.drag={orbit:this.preview.controls.enabled,edit:null};this.preview.controls.enabled=false;}
  change(){if(!this.drag)return;const edit=this.controller.gizmoEdit(this.value());if(edit){this.drag.edit=edit;this.controller.draft(edit);}}
  finish(){
    if(!this.drag)return;
    const {edit,orbit}=this.drag;this.preview.controls.enabled=orbit;this.drag=null;
    if(!edit){this.controller.refresh();return;}
    try{this.controller.commit(edit);}catch(error){this.controller.refresh();this.controller.showError(error);}
  }
  cancel(){
    if(!this.drag)return;
    this.preview.controls.enabled=this.drag.orbit;this.drag=null;
    if(this.controls){this.controls.dragging=false;this.controls.axis=null;}
    this.controller.refresh();
  }
  dispose(){
    this.cancel();this.clear();this.controls?.removeFromParent();this.controls?.dispose();
    for(const [name,fn] of this.events)document.removeEventListener(name,fn,true);
  }
}
