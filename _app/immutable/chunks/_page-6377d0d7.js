import{b as r,i as f,p as n,t as c}from"./store-e6adaee1.js";import{V as a}from"./index-be55c01e.js";import{R as p}from"./control-f5b05b5f.js";function i(e,l){return new p(e,l)}const u=!1;async function _({params:e}){const l=e.id;let o,s;if(e.type=="class"){for(const t of a(n))if(s||(s=t),t.name==l){o=t;break}}else if(e.type=="skill"){for(const t of a(c))if(s||(s=t),t.name==l){o=t;break}}if(o)return r.set(o),f.set(e.type=="class"),{data:o};throw s?i(302,`/${e.type}/${s.name}`):i(302,"/")}const y=Object.freeze(Object.defineProperty({__proto__:null,ssr:u,load:_},Symbol.toStringTag,{value:"Module"}));export{y as _,_ as l,u as s};