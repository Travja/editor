import{e as f,j as i,t as c,w as n}from"./store-c82e6c5f.js";import{V as a}from"./index-9adbb703.js";import{r}from"./index-35a671a5.js";const _=!1;async function m({params:t}){const l=t.id;let o,s;if(t.type=="class"){for(const e of a(c))if(s||(s=e),e.name==l){o=e;break}}else if(t.type=="skill"){for(const e of a(n))if(s||(s=e),e.name==l){o=e;break}}if(o)return f.set(o),i.set(t.type=="class"),{data:o};throw s?r(302,`/${t.type}/${s.name}`):r(302,"/")}const d=Object.freeze(Object.defineProperty({__proto__:null,ssr:_,load:m},Symbol.toStringTag,{value:"Module"}));export{d as _,m as l,_ as s};
