import { estimateOutputLevels, generatePack } from './export.js';
import JSZip from 'jszip';

self.onmessage=async({data:{task,resources,config,original,rows,options}})=>{
  try{
    if(task==='export'){
      const {data,reports}=await generatePack(resources,rows,options,JSZip,(id,index,total,stage)=>self.postMessage({progress:{id,index,total,stage}}));
      self.postMessage({result:{data,reports}},[data.buffer]);return;
    }
    await estimateOutputLevels(resources,config,original,{update:levels=>self.postMessage({levels})});
    self.postMessage({done:true});
  }catch(error){self.postMessage({error:{key:error.key,values:error.values,message:error.message}});}
};
