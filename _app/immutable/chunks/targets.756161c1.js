var J=Object.defineProperty;var L=(o,n,t)=>n in o?J(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t;var d=(o,n,t)=>(L(o,typeof n!="symbol"?n+"":n,t),t);import{S as N,i as F,s as G,e as j,b as P,E as g,g as _,v as Z,d as k,f as B,h as b,a6 as H,G as Q,k as z,l as S,m as R,n as y,p as Y,C as U,_ as W,J as C,L as X,M as T,N as x,P as M,Z as m,F as $,V as tt,K as et}from"./index.ef5b741f.js";import{c as at,f as I,a as q}from"./ProInput.14936dc5.js";import{w as V}from"./singletons.b8d7a3e4.js";import{J as E,R as v,Y as h}from"./store.98bc953f.js";function A(o){let n,t,e,a,s,r,u;const f=o[5].default,l=Q(f,o,o[4],null);return{c(){n=z("div"),t=z("div"),l&&l.c(),this.h()},l(c){n=S(c,"DIV",{class:!0,draggable:!0});var i=R(n);t=S(i,"DIV",{class:!0});var p=R(t);l&&l.l(p),p.forEach(b),i.forEach(b),this.h()},h(){y(t,"class","modal-content svelte-po3u1h"),Y(t,"--width",o[1]),y(n,"class","backdrop svelte-po3u1h"),y(n,"draggable","true")},m(c,i){P(c,n,i),U(n,t),l&&l.m(t,null),s=!0,r||(u=[W(at.call(null,t)),g(t,"outclick",o[2]),g(t,"click",C(o[6])),g(n,"dragstart",C(et(!1)))],r=!0)},p(c,i){l&&l.p&&(!s||i&16)&&X(l,f,c,c[4],s?x(f,c[4],i,null):T(c[4]),null),i&2&&Y(t,"--width",c[1])},i(c){s||(_(l,c),M(()=>{s&&(e||(e=m(t,I,{y:-200},!0)),e.run(1))}),M(()=>{s&&(a||(a=m(n,q,{},!0)),a.run(1))}),s=!0)},o(c){k(l,c),e||(e=m(t,I,{y:-200},!1)),e.run(0),a||(a=m(n,q,{},!1)),a.run(0),s=!1},d(c){c&&b(n),l&&l.d(c),c&&e&&e.end(),c&&a&&a.end(),r=!1,$(u)}}}function st(o){let n,t,e,a,s=o[0]&&A(o);return{c(){s&&s.c(),n=j()},l(r){s&&s.l(r),n=j()},m(r,u){s&&s.m(r,u),P(r,n,u),t=!0,e||(a=g(window,"keyup",o[3]),e=!0)},p(r,[u]){r[0]?s?(s.p(r,u),u&1&&_(s,1)):(s=A(r),s.c(),_(s,1),s.m(n.parentNode,n)):s&&(Z(),k(s,1,1,()=>{s=null}),B())},i(r){t||(_(s),t=!0)},o(r){k(s),t=!1},d(r){s&&s.d(r),r&&b(n),e=!1,a()}}}function nt(o,n,t){let{$$slots:e={},$$scope:a}=n,{width:s="auto"}=n,{open:r=!1}=n;const u=H(),f=i=>{var p;t(0,r=!1),u("close"),(p=i==null?void 0:i.detail)==null||p.stopPropagation()},l=i=>{i.key=="Escape"&&(i.preventDefault(),i.stopPropagation(),f())};function c(i){tt.call(this,o,i)}return o.$$set=i=>{"width"in i&&t(1,s=i.width),"open"in i&&t(0,r=i.open),"$$scope"in i&&t(4,a=i.$$scope)},[r,s,f,l,a,e,c]}class ut extends N{constructor(n){super(),F(this,n,nt,st,G,{width:1,open:0})}}const dt=(()=>{let o=!1;o=localStorage.getItem("use-symbols")==="true";const{subscribe:n,set:t,update:e}=V(o);return{subscribe:n,set:a=>(localStorage.setItem("use-symbols",String(a)),t(a)),update:e}})(),ft=(()=>{let o=!0;o=localStorage.getItem("animation-enabled")==="true";const{subscribe:n,set:t,update:e}=V(o);return{subscribe:n,set:a=>(localStorage.setItem("animation-enabled",String(a)),t(a)),update:e}})();class ht extends E{constructor(t,e=!1){super("mechanic",t);d(this,"iconKey","");d(this,"countsAsCast",!0);super.isParent=e}toYamlObj(){const t=super.toYamlObj(),e=this.getData();return e.getKeys().length>0&&t.put("data",e),this.components.length>0&&t.put("children",this.components),t}getData(){const t=new h("data");return t.put("icon-key",this.iconKey),t.put("counts",this.countsAsCast),this.data.filter(e=>e.meetsRequirements(this)).forEach(e=>{const a=e.getData();Object.keys(a).forEach(s=>t.put(s,a[s]))}),t}getRawData(){const t=new h("data");return this.data.forEach(e=>{const a=e.getData();Object.keys(a).forEach(s=>t.put(s,a[s]))}),t}deserialize(t){const e=t.get("data");e&&this.data.forEach(a=>a.deserialize(e)),this.components=t.get("children",[],a=>v.deserializeComponents(a))}}const K=class extends E{constructor(t){super("condition",t);d(this,"iconKey","")}toYamlObj(){const t=super.toYamlObj(),e=this.getData();return e.getKeys().length>0&&t.put("data",e),this.components.length>0&&t.put("children",this.components),t}getData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.filter(e=>e.meetsRequirements(this)).forEach(e=>{const a=e.getData();Object.keys(a).forEach(s=>t.put(s,a[s]))}),t}getRawData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.forEach(e=>{const a=e.getData();Object.keys(a).forEach(s=>t.put(s,a[s]))}),t}deserialize(t){const e=t.get("data");this.iconKey=e.get("icon-key"),e&&this.data.forEach(a=>a.deserialize(e)),this.components=t.get("children",[],a=>v.deserializeComponents(a))}};let D=K;d(D,"new",()=>new K({name:"null"}));const O=class extends E{constructor(t){super("target",t);d(this,"iconKey","")}toYamlObj(){const t=super.toYamlObj(),e=this.getData();return e.getKeys().length>0&&t.put("data",e),this.components.length>0&&t.put("children",this.components),t}getData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.filter(e=>e.meetsRequirements(this)).forEach(e=>{const a=e.getData();Object.keys(a).forEach(s=>t.put(s,a[s]))}),t}getRawData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.forEach(e=>{const a=e.getData();Object.keys(a).forEach(s=>t.put(s,a[s]))}),t}deserialize(t){const e=t.get("data");this.iconKey=e.get("icon-key"),e&&this.data.forEach(a=>a.deserialize(e)),this.components=t.get("children",[],a=>v.deserializeComponents(a))}};let w=O;d(w,"new",()=>new O({name:"null"}));export{ut as M,ht as P,ft as a,w as b,D as c,dt as u};