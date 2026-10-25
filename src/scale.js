import { parseExpression } from './preview/evaluator.js';

const key=node=>JSON.stringify(node);
const functions={abs:Math.abs,min:Math.min,max:Math.max,floor:Math.floor,ceil:Math.ceil,sqrt:Math.sqrt,pow:Math.pow,
  clamp:(n,min,max)=>Math.min(max,Math.max(min,n))};
const operations={'+':(a,b)=>a+b,'-':(a,b)=>a-b,'*':(a,b)=>a*b,'/':(a,b)=>a/b,'%':(a,b)=>a%b,
  '==':(a,b)=>Number(a===b),'!=':(a,b)=>Number(a!==b),'<':(a,b)=>Number(a<b),'>':(a,b)=>Number(a>b),
  '<=':(a,b)=>Number(a<=b),'>=':(a,b)=>Number(a>=b)};

export function inferScale(client,variants,index){
  try{
    const parse=value=>parseExpression(typeof value==='string'?value.trim().toLowerCase().replace(/^return\s+/,'').replace(/;$/,''):value);
    const conditions=new Map(),values=new Map();
    const truth=node=>{if(conditions.has(key(node)))return conditions.get(key(node));const n=value(node);return Number.isFinite(n)?!!n:undefined;};
    const value=node=>{
      if(values.has(key(node)))return values.get(key(node));
      if(node.kind==='value')return typeof node.value==='number'?node.value:undefined;
      if(node.kind==='read')return undefined;
      if(node.kind==='unary'){
        if(node.op==='!'){const t=truth(node.value);return t===undefined?undefined:Number(!t);}
        const n=value(node.value);return n===undefined?undefined:node.op==='-'?-n:n;
      }
      if(node.kind==='if'){
        const t=truth(node.test);if(t!==undefined)return value(t?node.yes:node.no);
        const a=value(node.yes),b=value(node.no);return a===b?a:undefined;
      }
      if(node.kind==='call'){
        const fn=node.path[0]==='math'&&functions[node.path[1]],args=node.args.map(value);
        return fn&&args.every(Number.isFinite)?fn(...args):undefined;
      }
      if(node.op==='&&'||node.op==='||'){
        const a=truth(node.left),b=truth(node.right),short=node.op==='||';
        if(a===short||b===short)return Number(short);
        return a!==undefined&&b!==undefined?Number(!short):undefined;
      }
      const a=value(node.left),b=value(node.right);
      return Number.isFinite(a)&&Number.isFinite(b)?operations[node.op]?.(a,b):undefined;
    };
    const assume=(node,result)=>{
      const existing=truth(node);if(existing!==undefined&&existing!==result)throw new Error('Conflicting model conditions');
      conditions.set(key(node),result);
      if(node.kind==='unary'&&node.op==='!')assume(node.value,!result);
      if(node.kind==='binary'){
        if(node.op==='&&'&&result||node.op==='||'&&!result){assume(node.left,result);assume(node.right,result);}
        if(node.op==='=='&&result||node.op==='!='&&!result){
          for(const [a,b] of [[node.left,node.right],[node.right,node.left]]){
            const n=value(b);if(a.kind==='read'&&Number.isFinite(n))values.set(key(a),n);
          }
        }
      }
    };
    const expression=parse(client.scripts?.scale??1);
    if(value(expression)===undefined)for(let i=0;i<=index;i++)if(variants[i].when!==undefined)assume(parse(variants[i].when),i===index);
    const scale=value(expression);
    return Number.isFinite(scale)&&scale>=.001&&scale<=100?scale:1;
  }catch{return 1;}
}
