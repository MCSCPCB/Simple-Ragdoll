import { t } from '../i18n.js';
import { createPanels, styles } from './panels.js';
import { browserDialog, exportDialog } from './dialogs.js';

// Ragdoll mode sits next to Edit and Animate; physics editing happens only there.
export function registerInterface(controller){
  const items=[],handles=[];
  const mode=new Mode('ragdoll',{name:t('mode'),icon:'accessibility_new',default_tool:'ragdoll_move_tool',selectElements:false,
    condition:()=>Format?.id==='bedrock',onSelect:()=>controller.enterMode(),onUnselect:()=>controller.leaveMode()});
  Modes.vue?.$forceUpdate();
  const tool=(id,icon,key,name,value)=>{
    const item=new Tool(id,{name:t(name),description:t(name+'_tip'),icon,category:'tools',modes:['ragdoll'],selectElements:false,transformerMode:'hidden',keybind:new Keybind({key}),
      onSelect(){controller.state.tool=value;controller.draw();}});
    items.push(item);return item;
  };
  [tool('ragdoll_move_tool','icon-gizmo','v','tool_move','move'),tool('ragdoll_resize_tool','open_with','s','tool_resize','resize'),tool('ragdoll_rotate_tool','sync','r','tool_rotate','rotate')]
    .forEach((item,i)=>Toolbars.tools.add(item,i));
  const action=(id,options,menu)=>{const item=new Action(id,{category:'file',...options});items.push(item);if(menu)MenuBar.addAction(item,menu);return item;};
  action('ragdoll_import_pack',{name:t('menu_import'),icon:'accessibility_new',click:()=>controller.choosePack(()=>browserDialog(controller))},'file.import');
  action('ragdoll_export_pack',{name:t('menu_export'),icon:'accessibility_new',click:()=>exportDialog(controller)},'file.export');
  action('ragdoll_browser',{name:t('menu_browser'),icon:'inventory_2',category:'tools',click:()=>browserDialog(controller)},'tools');
  action('ragdoll_preview',{name:t('play_preview'),icon:'play_arrow',category:'animation',keybind:new Keybind({key:32}),
    condition:{modes:['ragdoll'],method:()=>controller.state.configured},click:()=>controller.safe(()=>controller.play())});
  const animation=action('ragdoll_preview_animation',{name:t('preview_animation'),description:t('preview_animation_tip'),icon:'accessibility_new',category:'animation',
    condition:{modes:['animate'],method:()=>controller.state.configured},click:()=>controller.safe(()=>controller.play())});
  const reset=action('ragdoll_reset_animation',{name:t('reset_preview'),icon:'replay',category:'animation',
    condition:{modes:['animate'],method:()=>controller.state.configured},click:()=>controller.resetPreview()});
  const at=Toolbars.timeline.children.findIndex(item=>item?.id==='jump_to_timeline_end');
  Toolbars.timeline.add(animation,at<0?undefined:at+1);Toolbars.timeline.add(reset,at<0?undefined:at+2);
  // Delete removes the selected box, joint or body in Ragdoll mode only.
  handles.push(SharedActions.add('delete',{subject:'ragdoll',priority:1,condition:()=>controller.canDelete(),run:()=>controller.deleteSelected()}));
  const panels=createPanels(controller),css=Blockbench.addCSS(styles);
  return function dispose(){
    if(Modes.selected?.id==='ragdoll')Modes.options.edit.select();
    for(const handle of handles)handle.delete();
    for(const item of items)item.delete();
    for(const panel of panels){panel.vue?.$destroy();panel.delete();}
    css.delete();mode.delete();
    const index=Keybinds.actions.indexOf(mode);if(index>=0)Keybinds.actions.splice(index,1);
    Modes.vue?.$forceUpdate();updateInterfacePanels();
  };
}
