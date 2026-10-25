import { createSimulation } from '../preview/simulation.js';
import { capturePose, applyTransforms } from '../preview/transforms.js';
import { variantConfig } from '../config.js';

export class Preview {
  constructor(changed,onError){this.changed=changed;this.onError=onError;this.running=false;this.state=null;this.handle=0;}
  async play(context){
    const mode=Modes.selected?.id;
    if(!['ragdoll','animate'].includes(mode)||!context)return;
    if(this.running){this.running=false;cancelAnimationFrame(this.handle);this.changed();return;}
    if(!this.state){
      const groups=Group.all.slice(),root=Project.model_3d??groups.find(g=>!(g.parent instanceof Group))?.mesh.parent;
      if(!root)return;
      const config=variantConfig(context.config,context.variant);
      Timeline.pause();
      // Ragdoll mode starts from the default pose, Animate mode from the current frame.
      if(mode!=='animate'){Animator.showDefaultPose();root.updateMatrixWorld(true);}
      const saved=groups.map(group=>({mesh:group.mesh,position:group.mesh.position.clone(),rotation:group.mesh.quaternion.clone(),scale:group.mesh.scale.clone()}));
      const project=Project,time=Timeline.time,poses=capturePose(groups,root,THREE);
      await new Promise(resolve=>setTimeout(resolve,0));
      if(Project!==project||Modes.selected?.id!==mode)return;
      const simulation=createSimulation(config,context.resources,context.client,poses);
      this.state={groups,root,saved,time,mode,simulation,project:Project};
      this.draw();
    }
    this.running=true;this.last=performance.now();this.changed();this.handle=requestAnimationFrame(time=>this.frame(time));
  }
  frame(time){
    if(!this.running)return;
    try{
      if(Project!==this.state.project||Modes.selected?.id!==this.state.mode){this.reset();return;}
      Timeline.pause();
      this.state.simulation.step(Math.min((time-this.last)/1000,.15));this.last=time;this.draw();
      this.handle=requestAnimationFrame(next=>this.frame(next));
    }catch(error){this.reset();this.onError(error);}
  }
  draw(){
    if(!this.state)return;
    Animator.showDefaultPose(true);applyTransforms(this.state.groups,this.state.simulation.transforms());this.state.root.updateMatrixWorld(true);
  }
  reset(){
    cancelAnimationFrame(this.handle);this.running=false;
    if(this.state){
      const state=this.state;this.state=null;
      if(Project===state.project){Timeline.pause();Timeline.setTime(state.time);if(Modes.selected?.id==='animate')Animator.preview();}
      for(const saved of state.saved){const mesh=saved.mesh;mesh.position.copy(saved.position);mesh.quaternion.copy(saved.rotation);mesh.scale.copy(saved.scale);mesh.updateMatrix();}
      state.root.updateMatrixWorld(true);
      if(Project===state.project&&['edit','ragdoll'].includes(Modes.selected?.id)){Animator.showDefaultPose();state.root.updateMatrixWorld(true);}
    }
    this.changed();
  }
}
