import { t } from '../i18n.js';

// Common Molang conditions offered as presets; anything else is shown as a custom expression.
export const TRIGGERS={hurt:'q.max_health>0&&q.health<q.max_health'};
export const RELEASES={healed:'q.health>=q.max_health'};
export const presetOf=(presets,value)=>Object.keys(presets).find(key=>presets[key]===value)??'custom';
export const variantLabel=alias=>alias==='default'?t('variant_default'):alias;
