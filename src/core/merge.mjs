import {A,If,Loop,choose,dispatch} from './expression.mjs';
import {parseExpression} from './parse.mjs';
const expr=e=>e.kind==='value'?typeof e.value==='string'?"'"+e.value+"'":String(e.value):e.kind==='read'?e.path.join('.'):e.kind==='call'?e.path.join('.')+'('+e.args.map(expr).join(',')+')':e.kind==='unary'?'('+e.op+expr(e.value)+')':e.kind==='binary'?'('+expr(e.left)+e.op+expr(e.right)+')':'('+expr(e.test)+'?'+expr(e.yes)+':'+expr(e.no)+')';
const same=a=>a.every(x=>JSON.stringify(x)===JSON.stringify(a[0]));
function mergeExpr(values,index){
 if(same(values))return expr(values[0]);
 const first=values[0],kind=first.kind;
 if(values.some(v=>v.kind!==kind))return choose(index,values.map(expr));
 if(kind==='binary'&&values.every(v=>v.op===first.op))return '('+mergeExpr(values.map(v=>v.left),index)+first.op+mergeExpr(values.map(v=>v.right),index)+')';
 if(kind==='unary'&&values.every(v=>v.op===first.op))return '('+first.op+mergeExpr(values.map(v=>v.value),index)+')';
 if(kind==='call'&&values.every(v=>v.path.join('.')===first.path.join('.')&&v.args.length===first.args.length))return first.path.join('.')+'('+first.args.map((_,i)=>mergeExpr(values.map(v=>v.args[i]),index)).join(',')+')';
 if(kind==='if')return '('+mergeExpr(values.map(v=>v.test),index)+'?'+mergeExpr(values.map(v=>v.yes),index)+':'+mergeExpr(values.map(v=>v.no),index)+')';
 return choose(index,values.map(expr));
}
export function mergeGroups(groups,index){
 if(!groups.length)return [];
 groups=groups.map(g=>[g].flat(Infinity));
 if(same(groups))return groups[0];
 if(groups.some(g=>g.length!==groups[0].length))return dispatch(index,groups,g=>g);
 const merge=values=>same(values)?values[0]:mergeExpr(values.map(parseExpression),index);
 return groups[0].map((first,i)=>{
  const nodes=groups.map(g=>g[i]);if(same(nodes))return first;
  if(nodes.some(n=>n.kind!==first.kind)||first.kind==='set'&&!nodes.every(n=>n.name===first.name))return dispatch(index,nodes,n=>n);
  if(first.kind==='set'){
   return A(first.name,merge(nodes.map(n=>n.value)));
  }
  if(first.kind==='if')return If(merge(nodes.map(n=>n.test)),mergeGroups(nodes.map(n=>n.yes),index),mergeGroups(nodes.map(n=>n.no),index));
  return Loop(merge(nodes.map(n=>n.count)),mergeGroups(nodes.map(n=>n.body),index));
 });
}
