import { t, errorText } from '../i18n.js';

const STATUS={ready:'status_ready',invalid:'status_invalid',unconfigured:'status_unconfigured',missing:'status_missing',unsupported:'status_unsupported'};
const openable=row=>!!row.config&&!['missing','unsupported'].includes(row.status);

// Entities of the imported pack; opening one works like opening a file.
export function browserDialog(controller){
  controller.preview.reset();controller.safe(()=>controller.syncGeometry());
  if(controller.browser){controller.browser.show();return;}
  controller.browser=new Dialog('ragdoll_browser',{
    title:t('browser_title'),width:620,
    component:{
      data:()=>({s:controller.state}),
      computed:{rows(){const q=this.s.search.toLowerCase();return this.s.rows.filter(row=>row.id.toLowerCase().includes(q));}},
      methods:{
        t,openable,
        status(row){return t(STATUS[row.status]);},
        detail(row){return row.status==='missing'?t('detail_missing',[row.missing.join(', ')]):row.status==='unsupported'?t('detail_unsupported'):row.error??'';},
        pick(row){this.s.current=row.id;},
        open(row){if(openable(row))controller.safe(()=>controller.openEntity(row));},
        importPack(){controller.choosePack();},
        exportPack(){exportDialog(controller);}
      },
      template:`<div class="rg-browser">
        <div class="rg-browser-bar">
          <i class="material-icons">inventory_2</i>
          <span class="rg-grow rg-ellipsis" :title="s.packName">{{ s.packName || t('no_pack') }}</span>
          <button @click="importPack" :disabled="s.busy">{{ s.packName ? t('replace_pack_button') : t('import_pack_button') }}</button>
          <button @click="exportPack" :disabled="s.busy || !s.rows.length">{{ t('export_button') }}</button>
        </div>
        <search-bar v-model="s.search"></search-bar>
        <ul class="rg-entity-list" role="listbox">
          <li v-for="row in rows" :key="row.id" role="option" :aria-selected="s.current===row.id" :class="{selected: s.current===row.id, 'rg-unavailable': !openable(row)}" :title="detail(row)" @click="pick(row)" @dblclick="open(row)">
            <i class="material-icons">{{ openable(row) ? 'accessibility_new' : 'block' }}</i>
            <div class="rg-grow"><div class="rg-ellipsis">{{ row.id }}</div><div v-if="detail(row)" class="rg-muted rg-ellipsis">{{ detail(row) }}</div></div>
            <span class="rg-status" :class="'rg-status-'+row.status">{{ status(row) }}</span>
          </li>
          <li v-if="!rows.length" class="rg-empty">{{ s.packName ? t('no_entities') : t('no_pack_hint') }}</li>
        </ul>
        <div class="rg-muted">{{ s.progress || t('browser_hint') }}</div>
      </div>`
    },
    buttons:[t('open'),t('close')],
    onConfirm(){const row=controller.state.rows.find(r=>r.id===controller.state.current);if(!row||!openable(row))return false;controller.safe(()=>controller.openEntity(row));}
  });
  controller.browser.show();
}

export function exportDialog(controller){
  if(!controller.resources){
    Blockbench.showMessageBox({title:t('export_title'),message:t('export_no_pack'),buttons:[t('import_pack_button'),t('cancel')]},button=>{if(button===0)controller.choosePack(()=>exportDialog(controller));});
    return;
  }
  controller.preview.reset();
  controller.safe(()=>{controller.syncGeometry();for(const project of ModelProject.all){const data=project.bedrock_ragdoll;if(data?.entity)for(const id of Object.keys(data.geometries))controller.writeGeometry(data,id);}});
  const s=controller.state,rows=s.rows.filter(row=>['ready','invalid'].includes(row.status));
  const unlinked=ModelProject.all.filter(p=>p.bedrock_ragdoll?.entity&&controller.linkState(p.bedrock_ragdoll)==='standalone').map(p=>p.name||p.bedrock_ragdoll.entity);
  new Dialog('ragdoll_export',{
    title:t('export_title'),width:540,part_order:['form','component'],
    form:{
      name:{label:t('pack_name'),type:'text',value:s.packName.replace(/\.(mcpack|zip)$/i,'')+' Ragdoll'}
    },
    component:{
      data:()=>({rows,unlinked}),
      computed:{count(){return this.rows.filter(r=>r.selected&&r.status==='ready').length;}},
      methods:{t,all(value){for(const row of this.rows)if(row.status==='ready')row.selected=value;}},
      template:`<div class="rg-export">
        <div class="rg-export-bar"><span class="rg-grow">{{ t('export_entities', [count]) }}</span><a href="#" @click.prevent="all(true)">{{ t('select_all') }}</a><a href="#" @click.prevent="all(false)">{{ t('deselect_all') }}</a></div>
        <ul class="rg-entity-list rg-export-list">
          <li v-for="row in rows" :key="row.id" :title="row.error || ''" :class="{'rg-unavailable': row.status !== 'ready'}">
            <label class="rg-grow rg-check-row"><input type="checkbox" v-model="row.selected" :disabled="row.status !== 'ready'"><span class="rg-ellipsis">{{ row.id }}</span></label>
            <span v-if="row.status !== 'ready'" class="rg-status rg-status-invalid">{{ t('status_invalid') }}</span>
          </li>
          <li v-if="!rows.length" class="rg-empty">{{ t('no_entities') }}</li>
        </ul>
        <p v-if="unlinked.length" class="rg-note">{{ t('export_unlinked', [unlinked.join(', ')]) }}</p>
      </div>`
    },
    buttons:[t('export_confirm'),t('cancel')],
    onConfirm(result){
      if(!result.name.trim())return false;
      controller.safe(()=>controller.exportPack({name:result.name.trim()}));
    }
  }).show();
}

export function linkDialog(rows,callback){
  new Dialog('ragdoll_link',{title:t('link_title'),width:480,
    form:{info:{type:'info',text:t('link_tip')},entity:{label:t('entity'),type:'select',options:Object.fromEntries(rows.map(r=>[r.id,r.id])),value:rows[0].id}},
    buttons:[t('link_button'),t('cancel')],
    onConfirm(result){const row=rows.find(r=>r.id===result.entity);if(row)callback(row);}
  }).show();
}

export function jointDialog(bodies,parent,callback){
  new Dialog('ragdoll_joint',{title:t('add_joint'),
    form:{parent:{label:t('joint_a'),type:'select',options:Object.fromEntries(bodies.map(id=>[id,id])),value:parent}},
    buttons:[t('confirm'),t('cancel')],onConfirm(result){callback(result.parent);}
  }).show();
}

export function modelsDialog({config,client,resources},callback){
  const variants=new Map(config.variants.map(v=>[v.geometry,v]));
  const aliases=[...new Set([...variants.keys(),...Object.keys(client.geometry)])].filter(alias=>resources.geometries.has(client.geometry[alias]??alias));
  const form={
    default_model:{label:t('default_model'),type:'select',options:Object.fromEntries(aliases.map(alias=>[alias,alias])),value:config.variants.at(-1).geometry}
  };
  aliases.forEach((alias,i)=>{
    form['model'+i]={label:alias,type:'checkbox',value:variants.has(alias),description:client.geometry[alias]??alias,condition:values=>values.default_model!==alias};
    form['when'+i]={label:t('custom_condition'),type:'text',value:variants.get(alias)?.when??'',condition:values=>values.default_model!==alias&&values['model'+i]};
  });
  new Dialog('ragdoll_models',{
    title:t('section_models'),width:540,form,buttons:[t('confirm'),t('cancel')],
    onConfirm(values){
      const selected=aliases.filter((alias,i)=>alias!==values.default_model&&values['model'+i]).map(alias=>({geometry:alias,when:values['when'+aliases.indexOf(alias)].trim()}));
      selected.push({geometry:values.default_model});
      try{return callback(selected);}
      catch(error){Blockbench.showMessageBox({title:t('error_title'),message:errorText(error),buttons:[t('close')]});return false;}
    }
  }).show();
}
