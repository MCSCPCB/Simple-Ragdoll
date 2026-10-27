import { t, fail, errorText, RagdollError } from '../i18n.js';
import { importPack, parseJson, descriptionOf, relatedAnimations } from '../resources.js';
import { clone, entityRows, autoConfig, selectModels } from '../config.js';
import { normalizeModel } from '../core/model.mjs';
import { modelRotation, sub } from '../core/math.mjs';
import { estimateOutputLevels, resourceVariables } from '../export.js';
import * as rig from '../rig.js';
import { Preview as SimulationPreview } from './preview.js';
import { Overlay } from './overlay.js';
import { Gizmo } from './gizmo.js';
import { linkDialog, jointDialog, modelsDialog } from './dialogs.js';

import { TRIGGERS, RELEASES, variantLabel } from './labels.js';

// Geometry comparison that ignores fields Blockbench writes differently from hand-written files.
const shapeKey=g=>g&&JSON.stringify(g.bones.map(b=>({name:b.name,parent:b.parent??null,pivot:b.pivot??[0,0,0],rotation:b.rotation??[0,0,0],
  cubes:(b.cubes??[]).map(c=>({origin:c.origin,size:c.size,inflate:c.inflate??0,rotation:c.rotation??[0,0,0],pivot:c.rotation?.some(Boolean)?c.pivot??null:null}))})));

export class Controller {
  constructor(){
    this.resources=null;this.browser=null;this.project=null;this.infos=null;this.overlay=new Overlay();this.snapshots=new WeakMap();this.outputKey=null;this.outputRequest=0;
    this.state={packName:'',rows:[],search:'',current:'',busy:false,progress:'',mode:'',configured:false,canCreate:false,running:false,previewing:false,
      entity:'',variant:0,variants:[],link:'',error:'',missing:[],tree:[],props:null,outputLevels:[],outputPending:false,selected:{type:'entity'},collapsed:[],tool:'move',custom:{trigger:false,release:false}};
    this.preview=new SimulationPreview(()=>{
      this.state.running=this.preview.running;this.state.previewing=!!this.preview.state;
      BarItems.ragdoll_preview?.setIcon(this.preview.running?'pause':'play_arrow');BarItems.ragdoll_preview_animation?.setIcon(this.preview.running?'pause':'accessibility_new');
      this.draw();
    },error=>this.showError(error,'preview_error'));
    this.gizmo=new Gizmo(this);
  }
  showError(error,title='error_title'){console.error(error);Blockbench.showMessageBox({title:t(title),message:errorText(error),buttons:[t('close')]});}
  safe(fn){try{const result=fn();if(result?.catch)result.catch(error=>this.showError(error));return result;}catch(error){this.showError(error);}}
  active(){return Modes.selected?.id==='ragdoll'&&!!Project?.bedrock_ragdoll?.entity;}
  context(){
    const data=Project?.bedrock_ragdoll;if(!data?.entity)return null;
    const resources={geometries:new Map(Object.entries(data.geometries))};
    return {data,config:data.config,client:data.client,variant:data.variant,resources,env:{resources,client:data.client}};
  }
  geometryId(data,v=data.variant){const alias=data.config.variants[v].geometry;return data.client.geometry[alias]??alias;}
  bindings(config){return Object.fromEntries(Object.entries(config.bodies).map(([id,body])=>[id,Group.all.find(g=>g.name===body.bone)?.uuid]));}
  // Projects created from a model alone have a made-up client entity until they are linked to a pack.
  linkState(data){
    if(data.standalone||/^custom:/.test(data.entity)&&!data.client.textures&&!data.client.render_controllers)return 'standalone';
    return this.resources?.clients.has(data.entity)?'linked':'unloaded';
  }
  async importFile(file){
    this.preview.reset();this.state.busy=true;this.state.progress=t('reading');
    try{const resources=await importPack(file.content,JSZip);this.resources=resources;this.outputKey=null;this.state.rows=entityRows(resources);this.state.packName=file.name;this.state.search='';this.state.current='';
      this.attachSavedProjects();this.refresh();
    }finally{this.state.busy=false;this.state.progress='';}
  }
  choosePack(then){
    const open=()=>Blockbench.import({type:t('pack'),extensions:['mcpack','zip'],readtype:'buffer',resource_id:'simple_ragdoll_import_pack'},files=>{if(files[0])this.safe(async()=>{await this.importFile(files[0]);then?.();});});
    if(this.resources)Blockbench.showMessageBox({title:t('pack'),message:t('replace_pack'),buttons:[t('confirm'),t('cancel')]},button=>{if(button===0)open();});else open();
  }
  attachSavedProjects(){
    for(const project of ModelProject.all){const data=project.bedrock_ragdoll;if(!data?.entity||this.linkState(data)==='standalone')continue;
      const row=this.state.rows.find(r=>r.id===data.entity);if(!row)continue;
      row.config=clone(data.config);row.selected=true;
      for(const id of Object.keys(data.geometries))this.writeGeometry(data,id);
    }
  }
  validateRow(row){
    try{normalizeModel(row.config,this.resources,descriptionOf(this.resources.clients.get(row.id)));row.status='ready';delete row.error;}
    catch(error){row.status='invalid';row.error=errorText(error);}
  }
  // Keeps the stored geometry of the shown model in sync with Blockbench edits and writes real edits into the pack.
  syncGeometry(){
    const data=Project?.bedrock_ragdoll;if(!data?.entity||Format?.id!=='bedrock')return;
    const geometry=Codecs.bedrock.compile({raw:true,visible_box:false})['minecraft:geometry'][0],id=this.geometryId(data);
    geometry.description.identifier=id;
    const snapshot=JSON.stringify({bones:geometry.bones,width:Project.texture_width,height:Project.texture_height,visible:Project.visible_box});
    let snapshots=this.snapshots.get(Project);if(!snapshots)this.snapshots.set(Project,snapshots=new Map());
    const previous=snapshots.get(id);
    if(previous===undefined){snapshots.set(id,snapshot);return;}
    const byUUID=new Map(Group.all.map(g=>[g.uuid,g]));
    for(const [body,uuid] of Object.entries(data.bindings??{})){
      const group=byUUID.get(uuid);if(!group||!data.config.bodies[body])continue;
      data.config.bodies[body].bone=group.name;
      for(const variant of data.config.variants)if(variant.bodies?.[body]?.bone)variant.bodies[body].bone=group.name;
    }
    if(snapshot!==previous){
      const old=data.geometries[id]?.description??{};
      geometry.description={...old,...geometry.description};
      if(JSON.stringify(JSON.parse(previous).visible)===JSON.stringify(Project.visible_box)){
        for(const key of ['visible_bounds_width','visible_bounds_height','visible_bounds_offset']){if(old[key]===undefined)delete geometry.description[key];else geometry.description[key]=clone(old[key]);}
      }else{geometry.description.visible_bounds_width=Project.visible_box[0];geometry.description.visible_bounds_height=Project.visible_box[1];geometry.description.visible_bounds_offset=[0,Project.visible_box[2],0];}
      data.geometries[id]=geometry;snapshots.set(id,snapshot);
    }
    this.writeGeometry(data,id);
  }
  writeGeometry(data,id){
    if(this.linkState(data)!=='linked')return;
    const geometry=data.geometries[id];
    if(geometry&&JSON.stringify(this.resources.geometries.get(id))!==JSON.stringify(geometry)){
      this.resources.geometries.set(id,clone(geometry));
      const path=this.resources.geometryFiles.get(id),original=this.resources.json.get(path),document=original?clone(original):null;
      if(document?.['minecraft:geometry']){const index=document['minecraft:geometry'].findIndex(g=>g.description.identifier===id);document['minecraft:geometry'][index]=geometry;}
      else if(document){const value=clone(geometry);delete value.description;document[id]=value;}
      if(document){this.resources.json.set(path,document);this.resources.files.set(path,new TextEncoder().encode(JSON.stringify(document,null,2)));}
    }
    const row=this.state.rows.find(r=>r.id===data.entity);if(row){row.config=clone(data.config);this.validateRow(row);}
  }
  // Parsing appends to the outliner, so callers clear it first. The temporary path keeps Blockbench from merging tabs.
  parseGeometry(geometry,key){
    const path=Project.export_path,width=Project.texture_width,height=Project.texture_height;
    Project.export_path=`ragdoll://${key}`;Project.visible_box.splice(0,3,1,1,0);
    try{Codecs.bedrock.parse({format_version:'1.12.0','minecraft:geometry':[clone(geometry)]},'');}
    finally{Project.export_path=path;}
    if(geometry.description.texture_width===undefined)Project.texture_width=width;
    if(geometry.description.texture_height===undefined)Project.texture_height=height;
  }
  async loadTexture(client){
    const texture=Object.values(client.textures??{}).map(path=>this.resources?.files.get(path+'.png')).find(Boolean);if(!texture)return null;
    const project=Project,dataURL=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(new Blob([texture],{type:'image/png'}));});
    if(Project!==project)return null;
    const tex=new Texture({name:'texture.png',keep_size:true});
    await new Promise(resolve=>{tex.img.addEventListener('error',resolve,{once:true});tex.fromDataURL(dataURL).add(false);tex.load_callback=resolve;});
    return Project===project?tex:null;
  }
  // One project per entity; its models are switched inside the project.
  async openEntity(row){
    if(!row?.config||['missing','unsupported'].includes(row.status))return;
    this.browser?.hide();
    const existing=ModelProject.all.find(p=>p.bedrock_ragdoll?.entity===row.id);
    if(existing){existing.select();Modes.options.ragdoll.select();this.refresh();return;}
    this.state.busy=true;
    try{
      this.preview.reset();this.syncGeometry();
      const record=this.resources?.clients.get(row.id);if(!record)fail('missing_source',[row.id]);
      const client=clone(descriptionOf(record)),config=clone(row.config),variant=config.variants.length-1,id=client.geometry[config.variants[variant].geometry]??config.variants[variant].geometry;
      const geometry=this.resources.geometries.get(id);if(!geometry)fail('geometry',[id]);
      newProject(Formats.bedrock);Project.name=row.id.replace(':','_');this.parseGeometry(geometry,row.id);
      const geometries=Object.fromEntries(Object.values(client.geometry).filter(key=>this.resources.geometries.has(key)).map(key=>[key,clone(this.resources.geometries.get(key))]));
      Project.bedrock_ragdoll={entity:row.id,variant,client,config,geometries,bindings:this.bindings(config)};
      const animations=relatedAnimations(this.resources,client);
      if(Object.keys(animations).length)(typeof AnimationCodec==='undefined'?Animator:AnimationCodec.codecs.bedrock).loadFile({path:'',json:{format_version:'1.8.0',animations}});
      const project=Project,tex=await this.loadTexture(client);if(Project!==project)return;
      if(tex){
        if(geometry.description.texture_width===undefined)Project.texture_width=tex.width||16;
        if(geometry.description.texture_height===undefined)Project.texture_height=tex.height||16;
        tex.uv_width=Project.texture_width;tex.uv_height=Project.texture_height;for(const cube of Cube.all)cube.applyTexture(tex,true);
      }
      this.syncGeometry();
      Preview.selected?.loadAnglePreset?.({position:[-48,32,-48],target:[0,16,0],projection:'perspective'});
      Project.saved=false;Canvas.updateAll();Modes.options.ragdoll.select();this.refresh();
    }finally{this.state.busy=false;}
  }
  switchVariant(index,config){
    const data=Project?.bedrock_ragdoll;index=Number(index);if(!data?.entity||!config&&index===data.variant)return;
    this.preview.reset();this.gizmo.cancel();this.syncGeometry();
    const id=this.geometryId({...data,config:config??data.config},index),geometry=data.geometries[id];if(!geometry)fail('geometry',[id]);
    // Removing a bone also removes its animation channels, so they are kept and attached to the new bones by name.
    for(const animation of Animation.all)for(const group of Group.all)if(animation.animators[group.uuid])animation.animators[group.uuid].name=group.name;
    const stash=Animation.all.map(animation=>[animation,{...animation.animators}]),texture=Texture.getDefault?.()??Texture.all[0];
    for(const node of [...Outliner.root])node.remove(false);
    this.parseGeometry(geometry,data.entity);
    for(const [animation,animators] of stash)for(const [uuid,animator] of Object.entries(animators)){
      if(animation.animators[uuid]===animator)continue;
      const key=(animator instanceof BoneAnimator&&Group.all.find(g=>g.name===animator.name)?.uuid)||uuid;
      if(animation.animators[key])continue;
      animator.uuid=key;animation.animators[key]=animator;
    }
    if(texture)for(const cube of Cube.all)cube.applyTexture(texture,true);
    if(config)data.config=config;
    data.variant=index;data.bindings=this.bindings(data.config);
    // Undo steps refer to the bones of the previous model, so the history starts again like after opening a file.
    Undo.history.length=0;Undo.index=0;
    this.syncGeometry();Project.saved=false;Canvas.updateAll();this.refresh();
  }
  chooseModels(){
    this.preview.reset();this.syncGeometry();
    const context=this.context();if(!context)return;
    const project=Project;
    modelsDialog(context,selected=>{
      if(Project!==project)return false;
      this.setModels(selected);return true;
    });
  }
  setModels(selected){
    this.preview.reset();this.gizmo.cancel();this.syncGeometry();
    const context=this.context();if(!context)return;
    const config=selectModels(context.config,context.env,selected),shown=this.geometryId(context.data);
    const index=config.variants.findIndex(v=>(context.client.geometry[v.geometry]??v.geometry)===shown);
    if(index<0){this.switchVariant(config.variants.length-1,config);this.propagate();return;}
    Undo.initEdit({ragdoll:true});
    context.data.config=config;context.data.variant=index;
    Undo.finishEdit(t('select_models'));
    this.propagate();this.refresh();
  }
  // "Start from a model": a bedrock model opened directly gets a generated ragdoll on request.
  createFromModel(){
    if(!Project||Format?.id!=='bedrock'||Project.bedrock_ragdoll?.entity)return;
    const geometry=Codecs.bedrock.compile({raw:true,visible_box:false})['minecraft:geometry'][0];
    if(!geometry?.bones?.some(b=>b.cubes?.length))fail('empty_model');
    const id=geometry.description.identifier,client={identifier:'custom:'+id.replace(/^geometry\./,'').replace(/[^\w]/g,'_'),geometry:{default:id}};
    const config=autoConfig(client,{geometries:new Map([[id,geometry]])});
    Undo.initEdit({ragdoll:true});
    Project.bedrock_ragdoll={entity:client.identifier,standalone:true,variant:0,client,config,geometries:{[id]:geometry},bindings:this.bindings(config)};
    Undo.finishEdit(t('create_ragdoll'));
    this.snapshots.delete(Project);this.syncGeometry();this.state.selected={type:'entity'};updateInterfacePanels();this.refresh();
  }
  linkEntity(){
    const data=Project?.bedrock_ragdoll;if(!data?.entity)return;
    if(!this.resources){this.choosePack(()=>this.linkEntity());return;}
    this.syncGeometry();
    const id=this.geometryId(data),rows=this.state.rows.filter(row=>Object.values(descriptionOf(this.resources.clients.get(row.id)).geometry??{}).includes(id));
    if(!rows.length){Blockbench.showMessageBox({title:t('link_title'),message:t('link_none',[id]),buttons:[t('close')]});return;}
    linkDialog(rows,row=>this.safe(()=>this.link(row)));
  }
  // The project's config moves to the chosen pack entity; its geometry replaces the pack geometry only if it was edited.
  link(row){
    const data=Project.bedrock_ragdoll,id=this.geometryId(data);
    if(ModelProject.all.some(p=>p!==Project&&p.bedrock_ragdoll?.entity===row.id))fail('link_conflict',[row.id]);
    const client=clone(descriptionOf(this.resources.clients.get(row.id))),config=clone(data.config);
    for(const variant of config.variants){const target=data.client.geometry[variant.geometry]??variant.geometry,alias=Object.keys(client.geometry).find(key=>client.geometry[key]===target);if(alias)variant.geometry=alias;}
    const geometries=Object.fromEntries(Object.values(client.geometry).filter(key=>this.resources.geometries.has(key)).map(key=>[key,clone(this.resources.geometries.get(key))]));
    if(shapeKey(data.geometries[id])!==shapeKey(geometries[id]))geometries[id]=clone(data.geometries[id]);
    normalizeModel(config,{geometries:new Map(Object.entries(geometries))},client);
    const variant=config.variants.findIndex(v=>(client.geometry[v.geometry]??v.geometry)===id);
    Undo.initEdit({ragdoll:true});
    Project.bedrock_ragdoll={entity:row.id,variant:Math.max(0,variant),client,config,geometries,bindings:this.bindings(config)};
    Undo.finishEdit(t('link_title'));
    row.config=clone(config);row.selected=true;this.writeGeometry(Project.bedrock_ragdoll,id);this.refresh();
  }
  refresh(){
    if(this.gizmo.drag)return;
    if(this.preview.state&&Project!==this.preview.state.project)this.preview.reset();
    const s=this.state,context=this.context(),configured=!!context;
    s.mode=Modes.selected?.id??'';s.canCreate=!context&&!!Project&&Format?.id==='bedrock';
    if(s.configured!==configured){s.configured=configured;updateInterfacePanels();}
    if(this.project!==Project){this.project=Project;s.selected={type:'entity'};s.collapsed=[];s.custom={trigger:false,release:false};}
    s.error='';s.missing=[];
    if(!context){Object.assign(s,{entity:'',variants:[],tree:[],props:null,link:'',outputLevels:[],outputPending:false});this.outputKey=null;this.outputRequest++;clearTimeout(this.outputTimer);this.outputWorker?.terminate();this.outputWorker=null;this.infos=null;this.draw();return;}
    const {data,config}=context;
    s.entity=data.entity;s.variant=data.variant;s.link=this.linkState(data);
    s.variants=config.variants.map((v,i)=>({index:i,alias:v.geometry,label:variantLabel(v.geometry),geometry:data.client.geometry[v.geometry]??v.geometry,when:v.when??''}));
    try{this.infos=rig.inspect(config,context.env);}
    catch(error){this.infos=null;s.error=errorText(error);s.missing=Object.keys(config.bodies).filter(id=>!Group.all.some(g=>g.name===config.bodies[id].bone));}
    this.validateSelection(config);
    s.tree=this.buildTree(config);s.props=this.buildProps(config,this.infos);
    if(s.props?.type==='entity'&&!s.error)this.estimateOutput(context);
    this.draw();
  }
  estimateOutput(context){
    const record=this.resources?.clients.get(context.data.entity);
    const original=record?.value??{format_version:'1.10.0','minecraft:client_entity':{description:context.client}};
    const config=clone(context.config);delete config.outputLevel;
    const key=JSON.stringify([config,original,context.data.geometries]);
    if(key===this.outputKey)return;
    const outputResources={...context.resources,reservedVariables:resourceVariables(this.resources??context.resources,original)};
    this.outputKey=key;const request=++this.outputRequest;
    clearTimeout(this.outputTimer);this.outputWorker?.terminate();this.outputWorker=null;this.state.outputLevels=[];this.state.outputPending=true;
    const cancelled=()=>request!==this.outputRequest;
    this.outputTimer=setTimeout(async()=>{
      if(typeof RAGDOLL_OUTPUT_WORKER==='string'&&typeof Worker!=='undefined'){
        try{
          const url=URL.createObjectURL(new Blob([RAGDOLL_OUTPUT_WORKER],{type:'text/javascript'}));
          const worker=new Worker(url);URL.revokeObjectURL(url);this.outputWorker=worker;
          const finish=error=>{worker.terminate();if(!cancelled()){this.outputWorker=null;this.state.outputPending=false;if(error)this.state.error=error;}};
          worker.onmessage=({data})=>{if(cancelled())return;if(data.levels)this.state.outputLevels=data.levels;if(data.done||data.error)finish(data.error?.key?t('error.'+data.error.key,data.error.values):data.error?.message);};
          worker.onerror=event=>{event.preventDefault();finish(event.message);};
          worker.postMessage({resources:outputResources,config,original:clone(original)});
          return;
        }catch(error){this.outputWorker?.terminate();this.outputWorker=null;}
      }
      try{await estimateOutputLevels(outputResources,config,clone(original),{cancelled,update:levels=>{if(!cancelled())this.state.outputLevels=levels;}});}
      catch(error){if(!cancelled())this.state.error=errorText(error);}
      finally{if(!cancelled())this.state.outputPending=false;}
    },180);
  }
  validateSelection(config){
    const s=this.state,sel=s.selected;let next=sel;
    if(sel.type==='body'&&config.bodies[sel.body])next={type:'body',body:sel.body,bone:config.bodies[sel.body].bone};
    else if(sel.type==='bone'||sel.type==='body'){
      const body=Object.keys(config.bodies).find(id=>config.bodies[id].bone===sel.bone);
      next=body?{type:'body',body,bone:sel.bone}:Group.all.some(g=>g.name===sel.bone)?{type:'bone',bone:sel.bone}:{type:'entity'};
    }
    else if(sel.type==='shape')next=config.bodies[sel.body]&&sel.index<this.shapeCount(config,sel.body)?sel:{type:'entity'};
    else if(sel.type==='joint')next=config.joints[sel.joint]?sel:{type:'entity'};
    if(JSON.stringify(next)!==JSON.stringify(sel))s.selected=next;
  }
  shapeCount(config,id){return this.infos?.[this.state.variant]?.bodies[id]?.shapes.length??rig.effective(config,this.state.variant,'bodies',id).shapes?.length??1;}
  // Bones in outliner order; each body lists its joint to the parent body and its collision boxes.
  buildTree(config){
    const s=this.state,sel=s.selected,rows=[],byBone=new Map(Object.entries(config.bodies).map(([id,b])=>[b.bone,id]));
    rows.push({key:'entity',type:'entity',depth:0,label:s.entity,icon:'accessibility_new',selected:sel.type==='entity'});
    const visit=(group,depth)=>{
      const body=byBone.get(group.name),children=group.children.filter(c=>c instanceof Group),folded=s.collapsed.includes(group.name);
      const joints=body?Object.entries(config.joints).filter(([,j])=>j.b===body):[],shapes=body?this.shapeCount(config,body):0;
      rows.push({key:'bone:'+group.name,type:body?'body':'bone',bone:group.name,body,depth,label:group.name,icon:body?'fa-cube':'folder',hasBody:!!body,
        foldable:children.length+joints.length+shapes>0,folded,selected:body?sel.type==='body'&&sel.body===body:sel.type==='bone'&&sel.bone===group.name});
      if(folded)return;
      for(const [id,j] of joints)rows.push({key:'joint:'+id,type:'joint',joint:id,body,depth:depth+1,label:id,detail:t('joint_parent',[j.a]),icon:'adjust',selected:sel.type==='joint'&&sel.joint===id});
      for(let i=0;i<shapes;i++)rows.push({key:`shape:${body}:${i}`,type:'shape',body,index:i,depth:depth+1,label:t('shape_n',[i+1]),icon:'crop_square',selected:sel.type==='shape'&&sel.body===body&&sel.index===i});
      for(const child of children)visit(child,depth+1);
    };
    for(const node of Outliner.root)if(node instanceof Group)visit(node,1);
    return rows;
  }
  // Values for the properties panel, converted to the coordinates Blockbench shows.
  buildProps(config,infos){
    const s=this.state,sel=s.selected,v=s.variant,info=infos?.[v];
    if(sel.type==='entity')return {type:'entity',trigger:config.trigger??TRIGGERS.hurt,release:config.release??RELEASES.healed,
      outputLevel:config.outputLevel??'standard',
      simulation:{frequency:20,iterations:6,contactLimit:128,gravity:9.82,...config.simulation},pairs:(config.collisionPairs??[]).length,
      bodies:Object.keys(config.bodies).length,joints:Object.keys(config.joints).length};
    if(sel.type==='bone')return {type:'bone',bone:sel.bone,owner:info?rig.nearestBody(config,info.bones,sel.bone):null};
    if(!info)return null;
    if(sel.type==='body'){
      const body=info.bodies[sel.body],raw=rig.effective(config,v,'bodies',sel.body);
      return {type:'body',id:sel.body,bone:body.bone,massMode:body.explicitMass?'mass':'density',mass:body.mass,density:body.density,
        center:rig.displayVector(body.center),explicitCenter:body.explicitCenter,friction:body.friction,restitution:body.restitution,
        linearDamping:body.linearDamping,angularDamping:body.angularDamping,shapes:body.shapes.length,
        collisions:Object.keys(config.bodies).filter(id=>id!==sel.body).map(id=>({id,enabled:(config.collisionPairs??[]).some(p=>p.includes(id)&&p.includes(sel.body))})),
        joint:Object.keys(config.joints).find(id=>config.joints[id].b===sel.body)??null,defaults:raw.density===undefined};
    }
    if(sel.type==='shape'){
      const box=info.bodies[sel.body].shapes[sel.index];
      return {type:'shape',body:sel.body,index:sel.index,count:info.bodies[sel.body].shapes.length,position:rig.displayVector(rig.shapePosition(box)),size:[...box.size],rotation:rig.displayRotation(box.rotation??[0,0,0])};
    }
    if(sel.type==='joint'){
      const frame=rig.jointFrame(config,info,v,sel.joint),j=rig.effective(config,v,'joints',sel.joint);if(!frame)return null;
      return {type:'joint',id:sel.joint,a:j.a,b:j.b,bodies:Object.keys(config.bodies),position:rig.displayVector(frame.position),rotation:rig.displayRotation(frame.rotation),
        customPosition:Math.hypot(...sub(frame.position,info.bodies[j.b].pivot))>1e-4,customRotation:frame.rotation.some(n=>Math.abs(n)>1e-4),
        jointType:j.type,swing:j.swing??45,twist:j.twist??22.5,minAngle:j.minAngle??-(j.twist??22.5),maxAngle:j.maxAngle??(j.twist??22.5),mismatch:frame.mismatch};
    }
    return null;
  }
  draw(config,infos,keepGizmo=false){
    if(!keepGizmo)this.gizmo.clear();
    const context=this.context();config??=context?.config;infos??=this.infos;
    if(!this.active()||this.preview.state||!config||!infos?.[this.state.variant]){this.overlay.clear();return;}
    try{
      this.overlay.draw(config,infos[this.state.variant],this.state.variant,this.state.selected);
      if(!keepGizmo){const target=this.gizmoTarget(config,infos);if(target)this.gizmo.attach(target);}
    }catch(error){console.error(error);this.overlay.clear();this.gizmo.clear();}
  }
  // The gizmo follows the active ragdoll tool, like the native transform tools.
  gizmoTarget(config,infos){
    const sel=this.state.selected,tool=this.state.tool,v=this.state.variant,info=infos[v];
    if(sel.type==='shape'){
      const box=info.bodies[sel.body]?.shapes[sel.index];if(!box)return null;
      return {bone:info.bodies[sel.body].bone,position:rig.shapePosition(box),quaternion:modelRotation(box.rotation??[0,0,0]),size:box.size,mode:{move:'translate',resize:'scale',rotate:'rotate'}[tool]};
    }
    if(sel.type==='body'&&tool==='move'){const body=info.bodies[sel.body];return body&&{bone:body.bone,position:body.center,quaternion:[0,0,0,1],mode:'translate'};}
    if(sel.type==='joint'&&tool!=='resize'){
      const frame=rig.jointFrame(config,info,v,sel.joint);
      return frame&&{bone:frame.bone,position:frame.position,quaternion:frame.quaternion,mode:tool==='move'?'translate':'rotate'};
    }
    return null;
  }
  // Turns a gizmo value (bone-local position, quaternion or size) into an edit.
  gizmoEdit(value){
    const sel=this.state.selected;
    if(sel.type==='shape')return (config,{infos,variant})=>rig.setShape(config,infos,variant,sel.body,sel.index,value.size?{size:value.size}:value.quaternion?{rotation:rig.quaternionEuler(value.quaternion)}:{position:value.position});
    if(sel.type==='body')return (config,{variant})=>rig.setBody(config,variant,sel.body,'center',rig.fine(value.position));
    if(sel.type==='joint')return (config,{infos,variant})=>value.quaternion?rig.setJointRotation(config,infos,variant,sel.joint,value.quaternion):rig.setJointPosition(config,infos,variant,sel.joint,value.position);
    return null;
  }
  // Panel fields map to edits; vectors arrive in Blockbench coordinates.
  operation(key,value){
    const sel=this.state.selected,body=sel.body,joint=sel.joint;
    if(key.startsWith('when.')){const i=Number(key.slice(5));return config=>{config.variants[i].when=value;};}
    if(key.startsWith('collision.'))return config=>rig.setCollision(config,body,key.slice(10),value);
    switch(key){
      case 'trigger':case 'release':return config=>{config[key]=value;};
      case 'outputLevel':return config=>{if(value==='standard')delete config.outputLevel;else config.outputLevel=value;};
      case 'frequency':case 'gravity':case 'iterations':case 'contactLimit':return config=>{config.simulation={...config.simulation,[key]:['iterations','contactLimit'].includes(key)?Math.round(value):Number(value)};};
      case 'massMode':return (config,{infos,variant})=>rig.setMassMode(config,infos,variant,body,value);
      case 'mass':return (config,{variant})=>rig.setBody(config,variant,body,'mass',Number(value));
      case 'center':return (config,{variant})=>rig.setBody(config,variant,body,'center',rig.fine(rig.displayVector(value)));
      case 'density':case 'friction':case 'restitution':case 'linearDamping':case 'angularDamping':return config=>rig.setShared(config,'bodies',body,key,Number(value));
      case 'shape.position':return (config,{infos,variant})=>rig.setShape(config,infos,variant,body,sel.index,{position:rig.displayVector(value)});
      case 'shape.size':return (config,{infos,variant})=>rig.setShape(config,infos,variant,body,sel.index,{size:value});
      case 'shape.rotation':return (config,{infos,variant})=>rig.setShape(config,infos,variant,body,sel.index,{rotation:rig.displayRotation(value)});
      case 'joint.position':return (config,{infos,variant})=>rig.setJointPosition(config,infos,variant,joint,rig.displayVector(value));
      case 'joint.rotation':return (config,{infos,variant})=>rig.setJointRotation(config,infos,variant,joint,modelRotation(rig.displayRotation(value)));
      case 'joint.a':case 'joint.b':return (config,{infos})=>rig.setJointBody(config,infos,joint,key.slice(6),value);
      case 'joint.type':return config=>rig.setJointType(config,joint,value);
      case 'swing':case 'twist':case 'minAngle':case 'maxAngle':return config=>rig.setShared(config,'joints',joint,key,Number(value));
    }
    fail('unexpected',[key]);
  }
  change(key,value){this.safe(()=>this.commit(this.operation(key,value)));}
  draftChange(key,value){try{this.draft(this.operation(key,value));}catch(error){console.warn(error);}}
  // Every edit works on a copy that must validate before it becomes one undo step.
  commit(edit,{raw=false}={}){
    this.preview.reset();this.syncGeometry();
    const context=this.context();if(!context)return;
    const config=clone(context.config),before=raw?null:rig.inspect(context.config,context.env);
    edit(config,{env:context.env,infos:before,variant:context.variant});
    rig.prune(config);
    const after=rig.inspect(config,context.env);if(before)rig.keepAnchors(config,before,after);
    normalizeModel(config,context.resources,context.client);
    Undo.initEdit({ragdoll:true});
    Project.bedrock_ragdoll.config=config;Project.bedrock_ragdoll.bindings=this.bindings(config);
    Undo.finishEdit(t('edit_label'));
    this.propagate();this.refresh();
  }
  // Live preview while dragging a value or the gizmo; nothing is stored.
  draft(edit){
    const context=this.context();if(!context||!this.infos)return;
    const config=clone(context.config);
    edit(config,{env:context.env,infos:this.infos,variant:context.variant});
    rig.prune(config);
    const infos=rig.inspect(config,context.env);rig.keepAnchors(config,this.infos,infos);
    this.draw(config,infos,!!this.gizmo.drag);this.state.props=this.buildProps(config,infos);
  }
  select(row){
    const next={entity:{type:'entity'},bone:{type:'bone',bone:row.bone},body:{type:'body',body:row.body,bone:row.bone},shape:{type:'shape',body:row.body,index:row.index},joint:{type:'joint',joint:row.joint}}[row.type];
    this.state.selected=next;this.refresh();
  }
  fold(row){const c=this.state.collapsed,i=c.indexOf(row.bone);if(i<0)c.push(row.bone);else c.splice(i,1);const context=this.context();if(context)this.state.tree=this.buildTree(context.config);}
  pick(hit){
    this.state.selected=hit?.joint?{type:'joint',joint:hit.joint}:hit?{type:'shape',body:hit.body,index:hit.index}:{type:'entity'};
    this.reveal();this.refresh();
  }
  // Unfolds the tree down to the selection.
  reveal(){
    const sel=this.state.selected,config=this.context()?.config,body=sel.body??config?.joints[sel.joint]?.b;if(!body||!config.bodies[body])return;
    let group=Group.all.find(g=>g.name===config.bodies[body].bone);
    while(group instanceof Group){const i=this.state.collapsed.indexOf(group.name);if(i>=0)this.state.collapsed.splice(i,1);group=group.parent;}
  }
  toggleBody(row){if(row.hasBody)this.removeBody(row.body);else this.addBody(row.bone);}
  addBody(bone){this.safe(()=>this.commit((config,{env})=>{const body=rig.addBody(config,env,bone);this.state.selected={type:'body',body,bone};}));}
  removeBody(id){
    const bone=this.context()?.config.bodies[id]?.bone;
    this.safe(()=>this.commit((config,{env})=>{rig.removeBody(config,env,id);this.state.selected={type:'bone',bone};}));
  }
  addShape(body){this.safe(()=>this.commit((config,{infos})=>{const index=rig.addShape(config,infos,body);this.state.selected={type:'shape',body,index};}));}
  removeShape(body,index){this.safe(()=>this.commit((config,{infos})=>{rig.removeShape(config,infos,body,index);this.state.selected={type:'body',body,bone:config.bodies[body].bone};}));}
  refit(body){this.safe(()=>this.commit((config,{infos})=>rig.refitShapes(config,infos,body)));}
  addJoint(body){
    const context=this.context(),info=this.infos?.[this.state.variant];if(!context||!info)return;
    const others=Object.keys(context.config.bodies).filter(id=>id!==body);if(!others.length)return;
    const parent=rig.nearestBody(context.config,info.bones,context.config.bodies[body].bone)??others[0];
    jointDialog(others,parent,a=>this.safe(()=>this.commit((config,{infos})=>{const joint=rig.addJoint(config,infos,a,body);this.state.selected={type:'joint',joint};})));
  }
  removeJoint(joint){
    const body=this.context()?.config.joints[joint]?.b;
    this.safe(()=>this.commit(config=>{rig.removeJoint(config,joint);if(config.bodies[body])this.state.selected={type:'body',body,bone:config.bodies[body].bone};}));
  }
  alignJoint(joint){this.safe(()=>this.commit((config,{infos})=>rig.alignJoint(config,infos,joint)));}
  resetJointPosition(joint){this.safe(()=>this.commit((config,{infos,variant})=>{rig.resetJointPosition(config,variant,joint);rig.alignJoint(config,infos,joint,variant);}));}
  resetJointRotation(joint){this.safe(()=>this.commit((config,{infos})=>{rig.resetJointRotation(config,joint);rig.alignJoint(config,infos,joint);}));}
  resetCenter(body){this.safe(()=>this.commit((config,{variant})=>rig.clearLocal(config,variant,'bodies',body,'center')));}
  autoCollision(){this.safe(()=>this.commit((config,{env})=>{config.collisionPairs=rig.autoCollisionPairs(config,env);}));}
  // Bodies whose bones were deleted in Edit mode make the config invalid, so this edit skips the usual checks before the change.
  dropMissing(){const ids=[...this.state.missing];this.safe(()=>this.commit(config=>{if(ids.length===Object.keys(config.bodies).length)fail('last_body');rig.dropBodies(config,ids);},{raw:true}));}
  rowMenu(row,event){
    if(!row.selected)this.select(row);
    const run=fn=>()=>this.safe(fn),items={
      entity:[{name:t('auto_collision'),icon:'auto_fix_high',click:run(()=>this.autoCollision())},
        {name:t('link_entity'),icon:'link',condition:()=>this.state.link!=='linked',click:run(()=>this.linkEntity())},'_',
        {name:t('import_config'),icon:'file_upload',click:run(()=>this.importConfig())},{name:t('export_config'),icon:'file_download',click:run(()=>this.exportConfig())}],
      bone:[{name:t('add_body'),icon:'add_box',click:run(()=>this.addBody(row.bone))}],
      body:[{name:t('add_shape'),icon:'add',click:run(()=>this.addShape(row.body))},{name:t('refit'),icon:'fit_screen',click:run(()=>this.refit(row.body))},
        {name:t('add_joint'),icon:'adjust',click:run(()=>this.addJoint(row.body))},'_',{name:t('remove_body'),icon:'delete',click:run(()=>this.removeBody(row.body))}],
      shape:[{name:t('remove_shape'),icon:'delete',condition:()=>this.shapeCount(this.context().config,row.body)>1,click:run(()=>this.removeShape(row.body,row.index))}],
      joint:[{name:t('align_joint'),icon:'vertical_align_center',click:run(()=>this.alignJoint(row.joint))},'_',{name:t('remove_joint'),icon:'delete',click:run(()=>this.removeJoint(row.joint))}]
    }[row.type];
    if(items?.length)new Menu(items).open(event);
  }
  canDelete(){return this.active()&&!this.preview.state&&['shape','joint','body'].includes(this.state.selected.type);}
  deleteSelected(){
    const sel=this.state.selected;
    if(sel.type==='shape')this.removeShape(sel.body,sel.index);else if(sel.type==='joint')this.removeJoint(sel.joint);else if(sel.type==='body')this.removeBody(sel.body);
  }
  async play(){
    if(this.state.busy||!['ragdoll','animate'].includes(Modes.selected?.id))return;
    this.state.busy=true;
    try{this.gizmo.cancel();this.syncGeometry();const context=this.context();if(context)await this.preview.play(context);}
    finally{this.state.busy=false;}
  }
  resetPreview(){this.preview.reset();this.refresh();}
  importConfig(){
    const context=this.context();if(!context)return;
    Blockbench.import({type:t('config'),extensions:['json'],readtype:'text',resource_id:'simple_ragdoll_import_config'},files=>{if(!files[0])return;this.safe(()=>{
      const config=parseJson(files[0].content,files[0].name);delete config.$schema;
      config.variants??=[{geometry:'default'}];config.joints??={};config.collisionPairs??=[];
      const shown=this.geometryId(context.data),variant=config.variants.findIndex(v=>(context.client.geometry[v.geometry]??v.geometry)===shown);
      if(variant<0)fail('geometry_reference',[shown]);
      normalizeModel(config,context.resources,context.client);
      this.preview.reset();Undo.initEdit({ragdoll:true});
      Object.assign(Project.bedrock_ragdoll,{config,variant,bindings:this.bindings(config)});
      Undo.finishEdit(t('import_config'));this.propagate();this.refresh();
    });});
  }
  exportConfig(){this.syncGeometry();const context=this.context();if(!context)return;Blockbench.export({type:t('config'),extensions:['json'],resource_id:'simple_ragdoll_export_config',name:context.data.entity.replace(':','_')+'.physics',content:JSON.stringify(context.config,null,2)});}
  async exportPack(options){
    if(this.state.busy)return;
    this.preview.reset();this.syncGeometry();
    for(const project of ModelProject.all){const data=project.bedrock_ragdoll;if(data?.entity)for(const id of Object.keys(data.geometries))this.writeGeometry(data,id);}
    const rows=this.state.rows.filter(row=>row.selected&&row.status==='ready');if(!rows.length)fail('selection');
    this.state.busy=true;
    try{
      const result=await new Promise((resolve,reject)=>{
        const url=URL.createObjectURL(new Blob([RAGDOLL_OUTPUT_WORKER],{type:'text/javascript'}));
        let worker;
        try{worker=new Worker(url);}finally{URL.revokeObjectURL(url);}
        let settled=false;
        const finish=(result,error)=>{if(settled)return;settled=true;worker.terminate();this.cancelExport=null;error?reject(error):resolve(result);};
        this.cancelExport=()=>finish(null);
        worker.onmessage=({data})=>{
          if(data.progress){
            const {id,index,total,stage}=data.progress;
            this.state.progress=stage==='packing'?t('packing',[index]):stage==='sharing'?t('sharing',[id]):t('generating',[id])+` (${index+1}/${total})`;
          }
          if(data.error)finish(null,data.error.key?new RagdollError(data.error.key,data.error.values):new Error(data.error.message));
          else if(data.result)finish(data.result);
        };
        worker.onerror=event=>{event.preventDefault();finish(null,new Error(event.message));};
        worker.onmessageerror=()=>finish(null,new RagdollError('export_response'));
        try{worker.postMessage({task:'export',resources:this.resources,rows:clone(rows),options});}catch(error){finish(null,error);}
      });
      if(!result)return;
      const content=new Blob([result.data],{type:'application/zip'});
      Blockbench.export({type:t('export_title'),extensions:['mcpack'],savetype:'zip',resource_id:'simple_ragdoll_export_pack',name:options.name.replace(/[^\p{L}\p{N}_. -]/gu,'_'),content},()=>Blockbench.showQuickMessage(t('exported',[result.reports.length])));
    }finally{this.state.busy=false;this.state.progress='';}
  }
  propagate(){
    const data=Project?.bedrock_ragdoll;if(!data?.entity)return;
    for(const project of ModelProject.all){if(project!==Project&&project.bedrock_ragdoll?.entity===data.entity){project.bedrock_ragdoll.config=clone(data.config);project.saved=false;}}
    const row=this.linkState(data)==='linked'&&this.state.rows.find(r=>r.id===data.entity);if(row){row.config=clone(data.config);this.validateRow(row);}
  }
  // Ragdoll mode always shows the default pose; the selected bone carries over from the other modes.
  enterMode(){
    this.preview.reset();
    const data=Project?.bedrock_ragdoll;if(!data?.entity)return;
    Animator.showDefaultPose();Project.model_3d?.updateMatrixWorld(true);this.syncGeometry();
    const group=Group.first_selected,body=group&&Object.keys(data.config.bodies).find(id=>data.config.bodies[id].bone===group.name);
    if(group&&this.project===Project)this.state.selected=body?{type:'body',body,bone:group.name}:{type:'bone',bone:group.name};
  }
  leaveMode(){this.gizmo.cancel();this.preview.reset();this.gizmo.clear();this.overlay.clear();}
  modeChanged(){
    this.gizmo.cancel();this.preview.reset();
    if(Project?.bedrock_ragdoll?.entity&&['edit','ragdoll'].includes(Modes.selected?.id)){Animator.showDefaultPose();Project.model_3d?.updateMatrixWorld(true);}
    this.refresh();
  }
  dispose(){this.cancelExport?.();this.outputRequest++;clearTimeout(this.outputTimer);this.outputWorker?.terminate();this.outputWorker=null;this.gizmo.dispose();this.preview.reset();this.overlay.clear();this.browser?.delete();}
}
