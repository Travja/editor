import{a2 as b,aj as S,F as T,s as I,W as x}from"./index.3926e6cc.js";const f=[];function O(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let s;const o=new Set;function a(n){if(I(e,n)&&(e=n,s)){const u=!f.length;for(const l of o)l[1](),f.push(l,e);if(u){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function i(n){a(n(e))}function r(n,u=b){const l=[n,u];return o.add(l),o.size===1&&(s=t(a)||b),n(e),()=>{o.delete(l),o.size===0&&s&&(s(),s=null)}}return{set:a,update:i,subscribe:r}}function $(e,t,s){const o=!Array.isArray(e),a=o?[e]:e,i=t.length<2;return O(s,r=>{let n=!1;const u=[];let l=0,_=b;const g=()=>{if(l)return;_();const c=t(o?u[0]:u,r);i?r(c):_=x(c)?c:b},w=a.map((c,h)=>S(c,R=>{u[h]=R,l&=~(1<<h),n&&g()},()=>{l|=1<<h}));return n=!0,g(),function(){T(w),_(),n=!1}})}var y;const U=((y=globalThis.__sveltekit_15v8ad4)==null?void 0:y.base)??"";var A;const L=((A=globalThis.__sveltekit_15v8ad4)==null?void 0:A.assets)??U,N="1680760918267",q="sveltekit:snapshot",K="sveltekit:scroll",z="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const v={...k,"":k.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function W(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!s||!!o||j(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:s,external:a,target:o}}function X(e){let t=null,s=null,o=null,a=null,i=null,r=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=d(n,"preload-code")),a===null&&(a=d(n,"preload-data")),t===null&&(t=d(n,"keepfocus")),s===null&&(s=d(n,"noscroll")),i===null&&(i=d(n,"reload")),r===null&&(r=d(n,"replacestate")),n=E(n);return{preload_code:v[o??"off"],preload_data:v[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:s==="off"?!1:s===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function m(e){const t=p(e);let s=!0;function o(){s=!0,t.update(r=>r)}function a(r){s=!1,t.set(r)}function i(r){let n;return t.subscribe(u=>{(n===void 0||s&&u!==n)&&r(n=u)})}return{notify:o,set:a,subscribe:i}}function V(){const{set:e,subscribe:t}=p(!1);let s;async function o(){clearTimeout(s);const a=await fetch(`${L}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const r=(await a.json()).version!==N;return r&&(e(!0),clearTimeout(s)),r}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:t,check:o}}function j(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let P;function B(e){P=e.client}const F={url:m({}),page:m({}),navigating:p(null),updated:V()};export{z as I,k as P,K as S,q as a,W as b,X as c,D as d,U as e,G as f,C as g,B as h,j as i,P as j,$ as k,F as s,p as w};
