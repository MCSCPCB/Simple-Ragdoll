import { estimateOutputLevels } from './export.js';

self.onmessage=async({data:{resources,config,original}})=>{
  try{
    await estimateOutputLevels(resources,config,original,{update:levels=>self.postMessage({levels})});
    self.postMessage({done:true});
  }catch(error){self.postMessage({error:{key:error.key,values:error.values,message:error.message}});}
};
