import{a2 as b,aj as T,F as I,s as j,W as x}from"./index.15de7685.js";const f=[];function O(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let n;const o=new Set;function a(s){if(j(e,s)&&(e=s,n)){const u=!f.length;for(const l of o)l[1](),f.push(l,e);if(u){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function i(s){a(s(e))}function r(s,u=b){const l=[s,u];return o.add(l),o.size===1&&(n=t(a)||b),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:r}}function Y(e,t,n){const o=!Array.isArray(e),a=o?[e]:e,i=t.length<2;return O(n,r=>{let s=!1;const u=[];let l=0,_=b;const h=()=>{if(l)return;_();const c=t(o?u[0]:u,r);i?r(c):_=x(c)?c:b},R=a.map((c,g)=>T(c,S=>{u[g]=S,l&=~(1<<g),s&&h()},()=>{l|=1<<g}));return s=!0,h(),function(){I(R),_(),s=!1}})}var y;const U=((y=globalThis.__sveltekit_l3t4qj)==null?void 0:y.base)??"";var A;const q=((A=globalThis.__sveltekit_l3t4qj)==null?void 0:A.assets)??U,L="1684272607452",K="sveltekit:snapshot",$="sveltekit:scroll",z="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const v={...k,"":k.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function W(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||P(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:i}}function X(e){let t=null,n=null,o=null,a=null,i=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),i===null&&(i=d(s,"reload")),r===null&&(r=d(s,"replacestate")),s=E(s);return{preload_code:v[o??"off"],preload_data:v[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function m(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function i(r){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&r(s=u)})}return{notify:o,set:a,subscribe:i}}function N(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${q}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==L;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function P(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let w;function B(e){w=e.client}function F(e){return(...t)=>w[e](...t)}const H={url:m({}),page:m({}),navigating:p(null),updated:N()};export{z as I,k as P,$ as S,K as a,W as b,X as c,D as d,U as e,G as f,C as g,B as h,P as i,F as j,Y as k,H as s,p as w};
