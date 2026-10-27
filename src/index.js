import { registerTranslations, t } from './i18n.js';
import { Controller } from './blockbench/controller.js';
import { registerInterface } from './blockbench/interface.js';
import { clone } from './config.js';

let controller, property, disposeInterface;
const listeners = [];
const on = (event, listener, target = Blockbench) => {target.on(event, listener); listeners.push([target, event, listener]);};

registerTranslations();
Plugin.register('simple_ragdoll', {
  title: t('title'), author: 'MCSCPCB', description: t('description'),
  icon: 'accessibility_new', version: '0.1.2', min_version: '4.12.0', variant: 'both',
  tags: ['Minecraft: Bedrock Edition', 'Animation'],
  onload() {
    property = new Property(ModelProject, 'object', 'bedrock_ragdoll', {
      default: {}, exposed: false,
      merge(project, data) {if(data.bedrock_ragdoll?.entity)project.bedrock_ragdoll=clone(data.bedrock_ragdoll);}
    });
    controller = new Controller();
    disposeInterface = registerInterface(controller);
    on('select_project', () => controller.refresh());
    on('select_no_project', () => controller.refresh());
    on('unselect_project', () => {controller.gizmo.cancel();controller.gizmo.clear();controller.overlay.clear();controller.preview.reset();});
    on('select_mode', () => controller.modeChanged());
    on('save_editor_state', () => controller.safe(() => controller.syncGeometry()));
    on('load_project', () => controller.snapshots.delete(Project));
    on('parsed', () => {controller.safe(() => controller.syncGeometry());controller.refresh();}, Codecs.project);
    on('finished_edit', () => {controller.safe(() => controller.syncGeometry());controller.refresh();});
    on('create_undo_save', ({save, aspects}) => {if (aspects.ragdoll) save.ragdoll = clone(Project.bedrock_ragdoll ?? {});});
    on('load_undo_save', ({save}) => {if (save.ragdoll) {controller.preview.reset(); Project.bedrock_ragdoll = clone(save.ragdoll); controller.propagate(); controller.refresh();}});
    on('undo', () => controller.refresh());
    on('redo', () => controller.refresh());
    on('save_project', ({model}) => {
      if (!Project.bedrock_ragdoll?.entity) return;
      controller.safe(() => controller.syncGeometry());
      model.bedrock_ragdoll = clone(Project.bedrock_ragdoll);
    });
    controller.refresh();
  },
  onunload() {
    for (const [target, event, listener] of listeners.splice(0)) target.removeListener(event, listener);
    disposeInterface?.(); controller?.dispose(); property?.delete();
  }
});
