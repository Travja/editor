import{b as r,i as f,t as a}from"./store.98bc953f.js";import{U as c}from"./index.ef5b741f.js";import{r as l}from"./index.1de1fe79.js";const n=!1;async function d({params:e}){const i=e.id;let t,s;if(e.type=="class")throw l(302,`/${e.type}/${e.id}/edit`);if(e.type=="skill"){for(const o of c(a))if(s||(s=o),o.name==i){t=o;break}}if(t)return r.set(t),f.set(e.type=="class"),{data:t};throw s?l(302,`/${e.type}/${s.name}`):l(302,"/")}const p=Object.freeze(Object.defineProperty({__proto__:null,load:d,ssr:n},Symbol.toStringTag,{value:"Module"}));export{p as _,d as l,n as s};