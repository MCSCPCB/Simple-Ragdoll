import { fail } from '../i18n.js';
import { parseExpression } from '../core/parse.mjs';
export { parseExpression } from '../core/parse.mjs';

function lookup(node, emit, slots, tables) {
  if(!slots||node.kind!=='if')return;
  const index=node.test?.left;
  if(index?.kind!=='read')return;
  const key=index.path.join('.'),leaves=[],bounds=[];
  const visit=node=>{
    if(node.kind!=='if'){leaves.push(node);return true;}
    const test=node.test;
    if(test.kind!=='binary'||test.op!=='<'||test.left.kind!=='read'||test.left.path.join('.')!==key||test.right.kind!=='value'||!Number.isInteger(test.right.value))return false;
    if(!visit(node.yes))return false;
    bounds.push(test.right.value);
    return visit(node.no);
  };
  if(!visit(node)||leaves.length<4||!bounds.every((n,i)=>n===bounds[0]+i))return;
  const root=leaves[0].path?.[0],map=slots[root];
  const reads=map&&leaves.every(n=>n.kind==='read'&&n.path.length===2&&n.path[0]===root);
  if(!reads&&!leaves.every(n=>n.kind==='value'&&typeof n.value==='number'))return;
  const values=leaves.map(n=>{
    if(!reads)return n.value;
    const name=n.path[1];if(!map.has(name))map.set(name,map.size);return map.get(name);
  });
  const start=bounds[0]-1,last=bounds.at(-1),variable=emit(index);
  const selected=`(${variable}<${start}?0:${variable}<${last}?Math.floor(${variable})-(${start}):${leaves.length-1})`;
  const stride=values[1]-values[0];
  let result;
  if(values.every((v,i)=>v===values[0]+i*stride))result=`(${values[0]}+${stride}*${selected})`;
  else {const id=tables.length;tables.push(values);result=`l[${id}][${selected}]`;}
  return reads?`${root}[${result}]`:result;
}

function source(node, slots, tables) {
  if (node.kind==='value') return JSON.stringify(node.value);
  const emit = node => source(node,slots,tables);
  const indexed=lookup(node,emit,slots,tables);
  if(indexed!==undefined)return indexed;
  const path = () => node.path[0]+node.path.slice(1).map((key,i)=>{
    const map=i===0&&slots?.[node.path[0]];
    if(map){if(!map.has(key))map.set(key,map.size);return `[${map.get(key)}]`;}
    return (i?'?.':'')+'['+JSON.stringify(key)+']';
  }).join('');
  if (node.kind==='read') return path();
  if (node.kind==='call') return `(0,${path()})(${node.args.map(emit).join(',')})`;
  if (node.kind==='unary') return node.op==='!'?`+(!${emit(node.value)})`:`(${node.op}(${emit(node.value)}))`;
  if (node.kind==='if') return `(${emit(node.test)}?${emit(node.yes)}:${emit(node.no)})`;
  const a=emit(node.left),b=emit(node.right);
  if (node.op==='&&') return `(${a}?+(!!${b}):0)`;
  if (node.op==='||') return `(${a}?1:+(!!${b}))`;
  if (['==','!=','<','>','<=','>='].includes(node.op)) return `+(${a}${node.op==='=='?'===':node.op==='!='?'!==':node.op}${b})`;
  return `(${a}${node.op}${b})`;
}

export function expression(text) {
  const run=new Function('v','t','q','math','c', '"use strict";return '+source(parseExpression(text))+';');
  return scope=>run(scope.v,scope.t,scope.q,scope.math,scope.c);
}

export function executor({indexed=false}={}) {
  const slots=indexed?{v:new Map(),t:new Map()}:null;
  const cache=new Map(),functions=[],functionIds=new Map(),tables=[],states=new WeakMap();
  const value=text=>{ if (!cache.has(text)) cache.set(text,source(parseExpression(text),slots,tables)); return cache.get(text); };
  const call=code=>{
    if(!functionIds.has(code)){
      functionIds.set(code,functions.length);
      functions.push(new Function('f','l','v','t','q','math','c','"use strict";'+code));
    }
    return `f[${functionIds.get(code)}](f,l,v,t,q,math,c);`;
  };
  const emit=(nodes,depth=0)=>{
    const parts=nodes.flat(Infinity).map(node=>{
    if (node.kind==='set') {
      const target=parseExpression(node.name);
      if (target.kind!=='read'||target.path.length!==2||!['v','t'].includes(target.path[0])) fail('expression',[node.name]);
      return source(target,slots,tables)+'='+value(node.value)+';';
    }
    if (node.kind==='if') return `if(${value(node.test)}){${emit(node.yes,depth)}}${node.no.length?`else{${emit(node.no,depth)}}`:''}`;
    if (node.kind==='loop') return `for(let i${depth}=0,n${depth}=Math.min(4096,Math.max(0,Math.trunc(${value(node.count)})));i${depth}<n${depth};i${depth}++){${emit(node.body,depth+1)}}`;
    fail('expression',[node.kind]);
    });
    if(parts.reduce((n,s)=>n+s.length,0)<=6000)return parts.join('');
    let batch='',result='';
    for(const part of parts){
      if(batch.length+part.length>6000&&batch){result+=call(batch);batch='';}
      batch+=part;
    }
    return result+(batch?call(batch):'');
  };
  const compile=nodes=>{
    // 仅从已校验的语法树生成预览函数。
    const run=new Function('f','l','v','t','q','math','c','"use strict";'+emit(nodes));
    return scope=>{const data=slots?states.get(scope):scope;return run(functions,tables,data.v,data.t,scope.q,scope.math,scope.c);};
  };
  compile.prepare=scope=>{
    if(!slots)return;
    const data={};states.set(scope,data);
    for(const root of ['v','t']){
      const values=Array.from({length:slots[root].size},()=>undefined),original=scope[root];
      for(const [name,i] of slots[root]){
        values[i]=original[name];
        Object.defineProperty(original,name,{enumerable:true,configurable:true,get:()=>values[i],set:value=>{values[i]=value;}});
      }
      data[root]=values;
    }
  };
  compile.resetTemps=scope=>{if(slots)states.get(scope).t.fill(undefined);else scope.t={};};
  return compile;
}
