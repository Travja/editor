import{b as r,i as f,p as c,t as n}from"./store.07070b8a.js";import{U as a}from"./index.562f64e3.js";import{r as i}from"./index.1de1fe79.js";const p=!1;async function _({params:t}){const l=t.id;let o,s;if(t.type=="class"){for(const e of a(c))if(s||(s=e),e.name==l){o=e;break}}else if(t.type=="skill"){for(const e of a(n))if(s||(s=e),e.name==l){o=e;break}}if(o)return r.set(o),f.set(t.type=="class"),{data:o};throw s?i(302,`/${t.type}/${s.name}`):i(302,"/")}const d=Object.freeze(Object.defineProperty({__proto__:null,load:_,ssr:p},Symbol.toStringTag,{value:"Module"}));export{d as _,_ as l,p as s};