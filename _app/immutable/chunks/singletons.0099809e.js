import{K as b,ai as T,J as I,s as x,$ as O}from"./index.f9facb9c.js";const f=[];function U(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let n;const o=new Set;function a(s){if(x(e,s)&&(e=s,n)){const l=!f.length;for(const i of o)i[1](),f.push(i,e);if(l){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function c(s){a(s(e))}function r(s,l=b){const i=[s,l];return o.add(i),o.size===1&&(n=t(a)||b),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:a,update:c,subscribe:r}}function $(e,t,n){const o=!Array.isArray(e),a=o?[e]:e,c=t.length<2;return U(n,r=>{let s=!1;const l=[];let i=0,_=b;const h=()=>{if(i)return;_();const u=t(o?l[0]:l,r);c?r(u):_=O(u)?u:b},R=a.map((u,g)=>T(u,S=>{l[g]=S,i&=~(1<<g),s&&h()},()=>{i|=1<<g}));return s=!0,h(),function(){I(R),_(),s=!1}})}var m;const L=((m=globalThis.__sveltekit_yin7te)==null?void 0:m.base)??"";var A;const N=((A=globalThis.__sveltekit_yin7te)==null?void 0:A.assets)??L,K="1699971408641",j="sveltekit:snapshot",q="sveltekit:scroll",z="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function w(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=w(e)}}function X(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||V(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:c}}function B(e){let t=null,n=null,o=null,a=null,c=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),r===null&&(r=d(s,"replacestate")),s=w(s);function l(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[o??"off"],preload_data:y[a??"off"],keep_focus:l(t),noscroll:l(n),reload:l(c),replace_state:l(r)}}function v(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function c(r){let s;return t.subscribe(l=>{(s===void 0||n&&l!==s)&&r(s=l)})}return{notify:o,set:a,subscribe:c}}function P(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${N}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==K;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function V(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let E;function H(e){E=e.client}function J(e){return(...t)=>E[e](...t)}const W={url:v({}),page:v({}),navigating:p(null),updated:P()};export{z as I,k as P,q as S,j as a,X as b,B as c,W as d,L as e,G as f,C as g,H as h,V as i,J as j,$ as k,D as s,p as w};
