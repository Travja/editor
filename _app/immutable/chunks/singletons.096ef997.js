import{G as b,aj as T,F as x,s as I,$ as O}from"./index.50037c78.js";const f=[];function U(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let n;const o=new Set;function a(s){if(I(e,s)&&(e=s,n)){const i=!f.length;for(const l of o)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){a(s(e))}function r(s,i=b){const l=[s,i];return o.add(l),o.size===1&&(n=t(a)||b),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:a,update:c,subscribe:r}}function Y(e,t,n){const o=!Array.isArray(e),a=o?[e]:e,c=t.length<2;return U(n,r=>{let s=!1;const i=[];let l=0,_=b;const h=()=>{if(l)return;_();const u=t(o?i[0]:i,r);c?r(u):_=O(u)?u:b},R=a.map((u,g)=>T(u,S=>{i[g]=S,l&=~(1<<g),s&&h()},()=>{l|=1<<g}));return s=!0,h(),function(){x(R),_(),s=!1}})}var y;const L=((y=globalThis.__sveltekit_tzxno1)==null?void 0:y.base)??"";var A;const N=((A=globalThis.__sveltekit_tzxno1)==null?void 0:A.assets)??L,j="1693257514238",$="sveltekit:snapshot",q="sveltekit:scroll",G="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function K(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function C(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const v={...k,"":k.hover};function w(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function D(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=w(e)}}function X(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||P(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:c}}function B(e){let t=null,n=null,o=null,a=null,c=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),r===null&&(r=d(s,"replacestate")),s=w(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:v[o??"off"],preload_data:v[a??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(r)}}function m(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function c(r){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&r(s=i)})}return{notify:o,set:a,subscribe:c}}function z(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${N}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==j;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function P(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let E;function F(e){E=e.client}function H(e){return(...t)=>E[e](...t)}const W={url:m({}),page:m({}),navigating:p(null),updated:z()};export{G as I,k as P,q as S,$ as a,X as b,B as c,W as d,L as e,D as f,K as g,F as h,P as i,H as j,Y as k,C as s,p as w};
