import { t } from '../i18n.js';
import { TRIGGERS, RELEASES, presetOf } from './labels.js';
import { browserDialog } from './dialogs.js';
import { BP_API_METHODS } from '../core/api.mjs';

const API_LABELS=['impulse','velocity','force','transform','properties','joints','terrain','environment'];

let numericId=0;
// Blockbench number slider: drag to scrub, click to type. Scrubbing only previews; releasing commits one undo step.
const NumberInput={
  props:['value','min','max','step','axis','label'],
  data(){return {draft:null};},
  mounted(){
    const vm=this;
    this.slider=new NumSlider('ragdoll_value_'+(++numericId),{
      name:this.axis?`${this.label} ${this.axis}`:this.label,private:true,color:this.axis?.toLowerCase(),
      settings:{min:this.min,max:this.max,default:Math.max(this.min??0,0)},
      getInterval(event={}){return (vm.step??.1)*(event.shiftKey?.25:1)*(event.ctrlOrCmd?.1:1);},
      get(){return vm.draft??vm.value??0;},
      onBefore(){vm.start=vm.value??0;vm.draft=vm.start;},
      change(modify){const next=modify(vm.draft??vm.value??0);if(!Number.isFinite(next))return;vm.draft=Math.min(vm.max??Infinity,Math.max(vm.min??-Infinity,next));vm.$emit('preview',vm.draft);},
      onAfter(){const value=vm.draft;vm.draft=null;if(value!==null&&value!==vm.start)vm.$emit('change',value);else vm.$emit('cancel');vm.$nextTick(()=>vm.slider?.update());}
    });
    this.$el.append(this.slider.node);this.slider.update();
  },
  watch:{
    value(){this.slider?.update();},
    min(value){if(this.slider){this.slider.settings.min=value;this.slider.update();}},
    max(value){if(this.slider){this.slider.settings.max=value;this.slider.update();}}
  },
  beforeDestroy(){this.slider?.delete();this.slider=null;},
  template:`<div class="rg-number-input"></div>`
};
const Field={
  components:{'rg-input':NumberInput},props:['label','value','min','max','step','tip'],
  template:`<div class="rg-field" :title="tip"><span>{{ label }}</span><rg-input :label="label" :value="value" :min="min" :max="max" :step="step" @preview="$emit('preview',$event)" @change="$emit('change',$event)" @cancel="$emit('cancel')"></rg-input></div>`
};
// Edits one axis and emits the whole vector.
const Vector={
  components:{'rg-input':NumberInput},props:['label','value','min','step','reset','resetTip','note'],
  methods:{compose(i,n){const v=[...this.value];v[i]=n;return v;}},
  template:`<div class="rg-vector"><div class="rg-vector-label"><span>{{ label }}</span><span v-if="note" class="rg-tag">{{ note }}</span><i v-if="reset" class="material-icons rg-reset" :title="resetTip" @click="$emit('reset')">replay</i></div>
    <div><rg-input v-for="(axis,i) in ['X','Y','Z']" :key="axis" :axis="axis" :label="label" :value="value[i]" :min="min" :step="step" @preview="$emit('preview',compose(i,$event))" @change="$emit('change',compose(i,$event))" @cancel="$emit('cancel')"></rg-input></div></div>`
};

const ENTITY=`<template v-if="p.type==='entity'">
  <h3 class="rg-heading"><i class="material-icons">accessibility_new</i><span class="rg-ellipsis">{{ s.entity }}</span></h3>
  <section><h4>{{ t('section_trigger') }}</h4>
    <template v-for="kind in ['trigger','release']">
      <label class="rg-field" :key="kind"><span>{{ t(kind) }}</span><select-input :value="preset(kind)" :options="options(kind)" @input="choose(kind,$event)"></select-input></label>
      <label v-if="preset(kind)==='custom'" :key="kind+'_custom'" class="rg-expression"><span>{{ t('custom_condition') }}</span><input class="dark_bordered focusable_input" :value="p[kind]" @change="set(kind,$event.target.value)"></label>
    </template>
  </section>
  <section><h4>{{ t('section_simulation') }}</h4>
    <rg-field :label="t('gravity')" :tip="t('gravity_tip')" :value="p.simulation.gravity" :min="0" :max="100" @change="set('gravity',$event)"></rg-field>
  </section>
  <section><h4>{{ t('section_performance') }}</h4><p class="rg-note">{{ t('performance_tip') }}</p>
    <rg-field :label="t('frequency')" :tip="t('frequency_tip')" :value="p.simulation.frequency" :min="5" :max="60" :step="1" @change="set('frequency',$event)"></rg-field>
    <rg-field :label="t('iterations')" :tip="t('iterations_tip')" :value="p.simulation.iterations" :min="1" :max="12" :step="1" @change="set('iterations',$event)"></rg-field>
    <rg-field :label="t('contact_limit')" :tip="t('contact_limit_tip')" :value="p.simulation.contactLimit" :min="8" :max="256" :step="1" @change="set('contactLimit',$event)"></rg-field>
  </section>
  <section class="rg-output"><h4>{{ t('output_size') }}</h4><p class="rg-note">{{ t('output_size_tip') }}</p>
    <div class="rg-output-value"><span>{{ t('output_'+(outputEntry?outputEntry.level:p.outputLevel)) }}</span><span>{{ outputEntry ? (outputEntry.bytes/1000000).toFixed(2)+' MB' : '—' }}</span></div>
    <input type="range" min="0" :max="Math.max(0,s.outputLevels.length-1)" step="1" :value="outputIndex" :disabled="s.outputPending||s.outputLevels.length<2" :aria-label="t('output_size')" @input="outputDraft=Number($event.target.value)" @change="changeOutput($event)">
    <div class="rg-api-bar" :title="t('bp_api_tip')">
      <label for="rg_bp_api" class="rg-grow rg-ellipsis">{{ t('bp_api') }}</label>
      <input id="rg_bp_api" type="checkbox" class="focusable_input" :checked="apiAll" :indeterminate.prop="apiSome&&!apiAll" @change="toggleApi">
      <i class="fa fa-question dialog_form_description" role="button" tabindex="0" :aria-label="t('bp_api_tip')" @click="apiHelp" @keydown.enter.prevent="apiHelp" @keydown.space.prevent="apiHelp"></i>
    </div>
    <details v-if="apiSome" class="rg-api-list"><summary><i class="fa fa-angle-right rg-fold"></i>{{ t('bp_api_select') }}</summary>
      <ul><li v-for="entry in apiEntries" :key="entry.method"><label><input type="checkbox" class="focusable_input" :checked="p.api[entry.method]" @change="changeApi(entry.method,$event.target.checked)"><span class="rg-grow rg-ellipsis">{{ t('bp_api_'+entry.label) }}</span><code>{{ entry.method }}</code></label></li></ul>
    </details>
  </section>
  <section><h4>{{ t('section_collision') }}</h4>
    <div class="rg-row"><span class="rg-grow">{{ t('collision_count',[p.pairs]) }}</span><button @click="run('autoCollision')" :title="t('auto_collision_tip')">{{ t('auto_collision') }}</button></div>
  </section>
  <section><h4>{{ t('section_pack') }}</h4>
    <p class="rg-note">{{ t('link_'+s.link,[s.packName]) }}</p>
    <button v-if="s.link!=='linked'" @click="run(s.link==='unloaded'?'choosePack':'linkEntity')">{{ s.link==='unloaded'?t('import_pack_button'):t('link_entity') }}</button>
  </section>
</template>`;
const BONE=`<template v-else-if="p.type==='bone'">
  <h3 class="rg-heading"><i class="material-icons">folder</i><span class="rg-ellipsis">{{ p.bone }}</span></h3>
  <p class="rg-note">{{ p.owner ? t('bone_follows',[p.owner]) : t('bone_free') }}</p>
  <button @click="run('addBody',p.bone)">{{ t('add_body') }}</button>
</template>`;
const BODY=`<template v-else-if="p.type==='body'">
  <h3 class="rg-heading"><i class="fa fa-cube"></i><span class="rg-ellipsis">{{ p.id }}</span><span class="rg-muted rg-ellipsis">{{ p.bone }}</span></h3>
  <section><h4>{{ t('section_mass') }}</h4>
    <label class="rg-field"><span>{{ t('mass_mode') }}</span><select-input :value="p.massMode" :options="{density:t('mass_density'),mass:t('mass_fixed')}" @input="set('massMode',$event)"></select-input></label>
    <rg-field v-if="p.massMode==='density'" :label="t('density')" :value="p.density" :min=".000001" :step="10" @preview="draft('density',$event)" @cancel="restore" @change="set('density',$event)"></rg-field>
    <rg-field v-else :label="t('mass')" :value="p.mass" :min=".000001" :step="1" @preview="draft('mass',$event)" @cancel="restore" @change="set('mass',$event)"></rg-field>
    <div v-if="p.massMode==='density'" class="rg-field"><span>{{ t('mass') }}</span><span class="rg-value">{{ format(p.mass) }}</span></div>
    <rg-vector :label="t('center')" :value="p.center" :note="p.explicitCenter?'':t('auto')" :reset="p.explicitCenter" :reset-tip="t('reset_auto')" @preview="draft('center',$event)" @cancel="restore" @change="set('center',$event)" @reset="run('resetCenter',p.id)"></rg-vector>
    <p v-if="s.variants.length>1" class="rg-note">{{ t('per_model_note') }}</p>
  </section>
  <section><h4>{{ t('section_material') }}</h4>
    <rg-field :label="t('friction')" :value="p.friction" :min="0" :step=".05" @change="set('friction',$event)"></rg-field>
    <rg-field :label="t('restitution')" :value="p.restitution" :min="0" :max="1" :step=".05" @change="set('restitution',$event)"></rg-field>
    <details><summary>{{ t('section_damping') }}</summary>
      <rg-field :label="t('linear_damping')" :value="p.linearDamping" :min="0" :max=".999999" :step=".01" @change="set('linearDamping',$event)"></rg-field>
      <rg-field :label="t('angular_damping')" :value="p.angularDamping" :min="0" :max=".999999" :step=".01" @change="set('angularDamping',$event)"></rg-field>
    </details>
  </section>
  <section><h4>{{ t('section_self_collision') }}</h4><p class="rg-note">{{ t('self_collision_tip') }}</p>
    <label v-for="c in p.collisions" :key="c.id" class="rg-check-row"><input type="checkbox" :checked="c.enabled" @change="set('collision.'+c.id,$event.target.checked)"><span>{{ c.id }}</span></label>
  </section>
  <div class="rg-buttons"><button @click="run('addShape',p.id)">{{ t('add_shape') }}</button><button @click="run('refit',p.id)" :title="t('refit_tip')">{{ t('refit') }}</button><button @click="run('addJoint',p.id)">{{ t('add_joint') }}</button><button @click="run('removeBody',p.id)">{{ t('remove_body') }}</button></div>
</template>`;
const SHAPE=`<template v-else-if="p.type==='shape'">
  <h3 class="rg-heading"><i class="material-icons">crop_square</i><span>{{ t('shape_n',[p.index+1]) }}</span><span class="rg-muted rg-ellipsis">{{ p.body }}</span></h3>
  <rg-vector :label="t('position')" :value="p.position" :step=".5" @preview="draft('shape.position',$event)" @cancel="restore" @change="set('shape.position',$event)"></rg-vector>
  <rg-vector :label="t('size')" :value="p.size" :min=".01" :step=".5" @preview="draft('shape.size',$event)" @cancel="restore" @change="set('shape.size',$event)"></rg-vector>
  <rg-vector :label="t('rotation')" :value="p.rotation" :step="1" @preview="draft('shape.rotation',$event)" @cancel="restore" @change="set('shape.rotation',$event)"></rg-vector>
  <div class="rg-buttons"><button @click="run('refit',p.body)" :title="t('refit_tip')">{{ t('refit') }}</button><button @click="run('removeShape',p.body,p.index)" :disabled="p.count===1">{{ t('remove_shape') }}</button></div>
</template>`;
const JOINT=`<template v-else-if="p.type==='joint'">
  <h3 class="rg-heading"><i class="material-icons">adjust</i><span class="rg-ellipsis">{{ p.id }}</span></h3>
  <div v-if="p.mismatch" class="rg-warning"><p>{{ t('mismatch') }}</p><button @click="run('alignJoint',p.id)">{{ t('align_joint') }}</button></div>
  <section><h4>{{ t('section_connection') }}</h4>
    <label class="rg-field"><span>{{ t('joint_type') }}</span><select-input :value="p.jointType" :options="{coneTwist:t('joint_ball'),hinge:t('joint_hinge')}" @input="set('joint.type',$event)"></select-input></label>
    <label class="rg-field" :title="t('joint_body_tip')"><span>{{ t('joint_a') }}</span><select-input :value="p.a" :options="others(p.b)" @input="set('joint.a',$event)"></select-input></label>
    <label class="rg-field" :title="t('joint_body_tip')"><span>{{ t('joint_b') }}</span><select-input :value="p.b" :options="others(p.a)" @input="set('joint.b',$event)"></select-input></label>
  </section>
  <section><h4>{{ t('section_frame') }}</h4>
    <rg-vector :label="t('position')" :value="p.position" :step=".5" :note="p.customPosition?'':t('auto')" :reset="p.customPosition" :reset-tip="t('reset_position')" @preview="draft('joint.position',$event)" @cancel="restore" @change="set('joint.position',$event)" @reset="run('resetJointPosition',p.id)"></rg-vector>
    <rg-vector :label="t('orientation')" :value="p.rotation" :step="1" :reset="p.customRotation" :reset-tip="t('reset_rotation')" @preview="draft('joint.rotation',$event)" @cancel="restore" @change="set('joint.rotation',$event)" @reset="run('resetJointRotation',p.id)"></rg-vector>
  </section>
  <section><h4>{{ t('section_limits') }}</h4>
    <template v-if="p.jointType==='hinge'">
      <rg-field :label="t('hinge_min')" :tip="t('hinge_limit_tip')" :value="p.minAngle" :min="-180" :max="p.maxAngle" :step="1" @preview="draft('minAngle',$event)" @cancel="restore" @change="set('minAngle',$event)"></rg-field>
      <rg-field :label="t('hinge_max')" :tip="t('hinge_limit_tip')" :value="p.maxAngle" :min="p.minAngle" :max="180" :step="1" @preview="draft('maxAngle',$event)" @cancel="restore" @change="set('maxAngle',$event)"></rg-field>
    </template>
    <template v-else>
      <rg-field :label="t('swing')" :tip="t('swing_tip')" :value="p.swing" :min="0" :max="180" :step="1" @preview="draft('swing',$event)" @cancel="restore" @change="set('swing',$event)"></rg-field>
      <rg-field :label="t('twist')" :tip="t('twist_tip')" :value="p.twist" :min="0" :max="180" :step="1" @preview="draft('twist',$event)" @cancel="restore" @change="set('twist',$event)"></rg-field>
    </template>
  </section>
  <div class="rg-buttons"><button @click="run('removeJoint',p.id)">{{ t('remove_joint') }}</button></div>
</template>`;
export function createPanels(controller){
  const run=(name,...args)=>controller.safe(()=>controller[name](...args));
  const structure=new Panel('ragdoll_structure',{
    name:t('panel_structure'),icon:'accessibility_new',resizable:true,growable:true,
    condition:{modes:['ragdoll']},default_position:{slot:'right_bar',float_position:[0,0],float_size:[300,400],height:400},
    menu:new Menu([
      {id:'ragdoll_browse',name:t('menu_browser'),icon:'inventory_2',click:()=>browserDialog(controller)},'_',
      {id:'ragdoll_import_config',name:t('import_config'),icon:'file_upload',condition:()=>controller.state.configured,click:()=>run('importConfig')},
      {id:'ragdoll_export_config',name:t('export_config'),icon:'file_download',condition:()=>controller.state.configured,click:()=>run('exportConfig')},
      {id:'ragdoll_auto_collision',name:t('auto_collision'),icon:'auto_fix_high',condition:()=>controller.state.configured,click:()=>run('autoCollision')},
      {id:'ragdoll_link',name:t('link_entity'),icon:'link',condition:()=>controller.state.configured&&controller.state.link!=='linked',click:()=>run('linkEntity')}
    ]),
    component:{
      data:()=>({s:controller.state}),
      computed:{variants(){return Object.fromEntries(this.s.variants.map(v=>[String(v.index),v.label]));}},
      methods:{t,run,browse(){browserDialog(controller);},select(row){controller.select(row);},fold(row){controller.fold(row);},toggle(row){controller.toggleBody(row);},menu(row,event){controller.rowMenu(row,event);}},
      template:`<div class="rg-structure">
        <div v-if="!s.configured" class="rg-empty-state">
          <p>{{ s.canCreate ? t('empty_state_model') : t('empty_state_project') }}</p>
          <button v-if="s.canCreate" @click="run('createFromModel')">{{ t('create_ragdoll') }}</button>
          <button @click="browse">{{ t('menu_browser') }}</button>
        </div>
        <template v-else>
          <div class="rg-bar">
            <div class="tool" :class="{disabled:s.busy}" :title="t(s.running?'pause_preview':'play_preview')" @click="run('play')"><i class="material-icons">{{ s.running?'pause':'play_arrow' }}</i></div>
            <div class="tool" :class="{disabled:!s.previewing}" :title="t('reset_preview')" @click="s.previewing&&run('resetPreview')"><i class="material-icons">replay</i></div>
            <div class="rg-grow"></div>
            <select-input v-if="s.variants.length>1" class="rg-variant" :title="t('variant_tip')" :value="String(s.variant)" :options="variants" @input="run('switchVariant',$event)"></select-input>
          </div>
          <ul class="rg-tree" role="tree">
            <li v-for="row in s.tree" :key="row.key" role="treeitem" :aria-selected="row.selected" class="rg-row" :class="['rg-'+row.type,{selected:row.selected,'rg-dim':row.type==='bone'}]" :style="{'--depth':row.depth}" @click="select(row)" @contextmenu.prevent.stop="menu(row,$event)">
              <i class="fa fa-angle-right rg-fold" :class="{open:!row.folded,hidden:!row.foldable}" @click.stop="fold(row)"></i>
              <dynamic-icon :icon="row.icon"></dynamic-icon>
              <span class="rg-label">{{ row.label }}</span><span v-if="row.detail" class="rg-detail">{{ row.detail }}</span>
              <i v-if="row.type==='bone'||row.type==='body'" class="material-icons rg-toggle" :title="row.hasBody?t('remove_body'):t('add_body')" @click.stop="toggle(row)">{{ row.hasBody?'check_box':'check_box_outline_blank' }}</i>
            </li>
          </ul>
          <div v-if="s.error" class="rg-error">{{ s.error }}</div>
        </template>
      </div>`
    }
  });
  structure.snap_menu=new Menu([...structure.menu.structure,'_',...structure.snap_menu.structure]);
  const properties=new Panel('ragdoll_properties',{
    name:t('panel_properties'),icon:'tune',resizable:true,growable:true,insert_after:'ragdoll_structure',
    condition:{modes:['ragdoll'],method:()=>controller.state.configured},default_position:{slot:'right_bar',float_position:[0,0],float_size:[300,400],height:400},
    component:{
      components:{'rg-field':Field,'rg-vector':Vector},
      data:()=>({s:controller.state,outputDraft:null}),
      computed:{p(){return this.s.props;},key(){return JSON.stringify(this.s.selected)+':'+this.s.variant;},
        apiEntries(){return BP_API_METHODS.map((method,i)=>({method,label:API_LABELS[i]}));},
        apiAll(){return BP_API_METHODS.every(method=>this.p?.api?.[method]);},
        apiSome(){return BP_API_METHODS.some(method=>this.p?.api?.[method]);},
        outputIndex(){return this.outputDraft??Math.max(0,this.s.outputLevels.findIndex(entry=>entry.levels.includes(this.p?.outputLevel)));},
        outputEntry(){return this.s.outputLevels[this.outputIndex];}},
      methods:{
        t,run,
        set(key,value){controller.change(key,value);},
        changeOutput(event){const entry=this.s.outputLevels[Number(event.target.value)];this.outputDraft=null;if(entry)this.set('outputLevel',entry.level);},
        toggleApi(){this.outputDraft=null;this.set('api',Object.fromEntries(BP_API_METHODS.map(method=>[method,!this.apiAll])));},
        apiHelp(){Blockbench.showQuickMessage(t('bp_api_tip'),3600);},
        changeApi(method,value){this.outputDraft=null;this.set('api',{...this.p.api,[method]:value});},
        draft(key,value){controller.draftChange(key,value);},
        restore(){controller.refresh();},
        preset(kind){return this.s.custom[kind]?'custom':presetOf(kind==='trigger'?TRIGGERS:RELEASES,this.p[kind]);},
        options(kind){return kind==='trigger'?{hurt:t('trigger_hurt'),custom:t('custom')}:{healed:t('release_healed'),custom:t('custom')};},
        choose(kind,value){this.s.custom[kind]=value==='custom';if(value!=='custom')this.set(kind,(kind==='trigger'?TRIGGERS:RELEASES)[value]);},
        others(id){return Object.fromEntries(this.p.bodies.filter(b=>b!==id).map(b=>[b,b]));},
        format(n){return Number(n.toPrecision(5)).toString();}
      },
      template:`<div class="rg-properties">
        <div v-if="s.error" class="rg-error"><p>{{ s.error }}</p><button v-if="s.missing.length" @click="run('dropMissing')">{{ t('drop_missing',[s.missing.join(', ')]) }}</button></div>
        <p v-if="s.previewing" class="rg-note rg-locked-note">{{ t('preview_locked') }}</p>
        <div v-if="p" :key="key" :class="{'rg-locked':s.previewing||s.busy}">${ENTITY}${BONE}${BODY}${SHAPE}${JOINT}</div>
      </div>`
    }
  });
  return [structure,properties];
}
export const styles=`
  #panel_ragdoll_structure,#panel_ragdoll_properties {overflow-y:auto; overflow-x:hidden; min-height:0;}
  #panel_ragdoll_structure > .panel_vue_wrapper,#panel_ragdoll_properties > .panel_vue_wrapper {flex:0 0 auto; overflow:visible;}
  .rg-structure {padding:0 0 6px;}
  .rg-bar {display:flex; align-items:center; gap:2px; padding:2px 6px; border-bottom:1px solid var(--color-border);}
  .rg-bar .tool {width:28px; height:28px; display:flex; align-items:center; justify-content:center; cursor:pointer; border-radius:3px;}
  .rg-bar .tool:hover {background:var(--color-button);}
  .rg-bar .tool.disabled {opacity:.4; pointer-events:none;}
  .rg-bar .rg-variant {min-width:90px; max-width:55%; height:24px; line-height:24px;}
  .rg-tree {list-style:none; margin:0; padding:2px 0;}
  .rg-row {display:flex; align-items:center; gap:4px; height:28px; padding:0 6px 0 calc(var(--depth) * 16px + 4px); cursor:pointer; white-space:nowrap; color:var(--color-text);}
  .rg-row:hover {background:var(--color-button);}
  .rg-row.selected {background:var(--color-selected);}
  .rg-row.rg-dim > .icon, .rg-row.rg-dim > i:not(.rg-toggle):not(.rg-fold), .rg-row.rg-dim > .rg-label {opacity:.55;}
  .rg-row .rg-fold {width:12px; text-align:center; transition:transform .1s;}
  .rg-row .rg-fold.open {transform:rotate(90deg);}
  .rg-row .rg-fold.hidden {visibility:hidden;}
  .rg-row .rg-label {flex:0 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis;}
  .rg-row .rg-detail {flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; color:var(--color-subtle_text); font-size:.9em;}
  .rg-row .rg-toggle {margin-left:auto; opacity:.7; font-size:18px;}
  .rg-row .rg-toggle:hover {opacity:1; color:var(--color-light);}
  .rg-shape > i:not(.rg-fold), .rg-joint > i:not(.rg-fold) {font-size:16px;}
  .rg-empty-state {padding:12px; display:flex; flex-direction:column; gap:8px; color:var(--color-subtle_text); white-space:normal;}
  .rg-properties {padding:4px 10px 10px;}
  .rg-properties section {margin:10px 0; padding-top:6px; border-top:1px solid var(--color-border);}
  .rg-properties h4 {margin:0 0 4px; font-size:1em; color:var(--color-subtle_text); font-weight:normal;}
  .rg-heading {display:flex; align-items:center; gap:6px; margin:4px 0 8px; font-size:1.1em; font-weight:normal;}
  .rg-heading .rg-muted {margin-left:auto; font-size:.85em;}
  .rg-field {display:grid; grid-template-columns:minmax(70px,42%) minmax(0,1fr); align-items:center; gap:8px; margin:5px 0; min-height:24px;}
  .rg-field > .bb-select {min-width:0; width:100%; height:24px; line-height:24px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
  .rg-value {text-align:center; color:var(--color-subtle_text);}
  .rg-output-value {display:flex; justify-content:space-between; gap:8px; margin:6px 0; font-variant-numeric:tabular-nums;}
  .rg-output input[type=range] {width:100%; margin:2px 0; accent-color:var(--color-accent);}
  .rg-vector {margin:8px 0;}
  .rg-vector-label {display:flex; align-items:center; gap:6px; margin-bottom:2px; color:var(--color-subtle_text);}
  .rg-vector > div:last-child {display:flex; gap:4px;}
  .rg-tag {font-size:.85em; padding:0 5px; border-radius:3px; background:var(--color-back);}
  .rg-reset {margin-left:auto; font-size:16px; cursor:pointer;}
  .rg-reset:hover {color:var(--color-light);}
  .rg-number-input {display:flex; flex:1; min-width:0;}
  .rg-number-input .nslide_tool {width:100%; min-width:0; margin:0; height:24px;}
  .rg-number-input .nslide {width:100%; min-width:0; height:24px; line-height:24px; text-align:center;}
  .rg-expression {display:block; margin:6px 0;}
  .rg-expression input {display:block; width:100%; margin-top:3px;}
  .rg-note {margin:4px 0; color:var(--color-subtle_text); white-space:normal; font-size:.92em;}
  .rg-warning {margin:6px 0; padding:6px 8px; border-left:3px solid #ff9b3d; background:var(--color-back); white-space:normal;}
  .rg-warning p {margin:0 0 6px;}
  .rg-error {margin:6px 8px; color:var(--color-error); white-space:normal;}
  .rg-buttons, .rg-row-buttons {display:flex; flex-wrap:wrap; gap:4px; margin-top:10px;}
  .rg-properties .rg-row {padding:0; cursor:default; height:auto;}
  .rg-properties .rg-row:hover {background:none;}
  .rg-check-row {display:flex; align-items:center; gap:6px; margin:3px 0; cursor:pointer;}
  .rg-api-bar {display:flex; align-items:center; gap:4px; min-height:30px; margin-top:8px;}
  .rg-api-bar > label {cursor:pointer;}
  .rg-api-bar .dialog_form_description {margin-left:0; padding-top:0; height:auto;}
  .rg-output input[type=checkbox] {padding:0; margin:0; cursor:pointer;}
  .rg-output input[type=checkbox]:indeterminate::before {content:'\\f146'; font-weight:600;}
  .rg-api-list summary {display:flex; align-items:center; gap:4px; height:24px; margin:2px 0;}
  .rg-api-list summary:hover {color:var(--color-light);}
  .rg-api-list[open] .rg-fold {transform:rotate(90deg);}
  .rg-api-list .rg-fold {width:12px; text-align:center; transition:transform .1s;}
  .rg-api-list ul {list-style:none; margin:2px 0 0; padding:2px 0; border:1px solid var(--color-border); background:var(--color-back);}
  .rg-api-list label {display:flex; align-items:center; gap:8px; height:26px; padding:0 8px; cursor:pointer;}
  .rg-api-list label:hover {background:var(--color-button);}
  .rg-api-list code {flex-shrink:0; font-family:var(--font-code); font-size:.85em; color:var(--color-subtle_text);}
  .rg-locked {pointer-events:none; opacity:.55;}
  .rg-properties details summary {cursor:pointer; color:var(--color-subtle_text); margin:6px 0 2px;}
  .rg-grow {flex:1; min-width:0;}
  .rg-ellipsis {overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
  .rg-muted {color:var(--color-subtle_text);}
  .rg-browser, .rg-export {display:flex; flex-direction:column; gap:6px;}
  .rg-browser-bar, .rg-export-bar {display:flex; align-items:center; gap:6px;}
  .rg-export-bar a {color:var(--color-accent);}
  .rg-entity-list {list-style:none; margin:0; padding:0; max-height:48vh; min-height:120px; overflow:auto; border:1px solid var(--color-border); background:var(--color-back);}
  .rg-entity-list li {display:flex; align-items:center; gap:8px; padding:4px 8px; cursor:default;}
  .rg-entity-list li:hover {background:var(--color-button);}
  .rg-entity-list li.selected {background:var(--color-selected);}
  .rg-entity-list li.rg-unavailable {opacity:.55;}
  .rg-entity-list li.rg-empty {justify-content:center; color:var(--color-subtle_text); padding:24px 8px;}
  .rg-export-list {max-height:32vh;}
  .rg-status {font-size:.9em; color:var(--color-subtle_text); white-space:nowrap;}
  .rg-status-invalid, .rg-status-unconfigured {color:var(--color-error);}
`;
