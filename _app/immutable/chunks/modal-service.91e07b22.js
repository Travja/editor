var H=Object.defineProperty;var Q=(i,s,t)=>s in i?H(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var f=(i,s,t)=>(Q(i,typeof s!="symbol"?s+"":s,t),t);import{S as G,i as J,s as N,e as M,b as U,I as O,g,v as Z,d as y,f as T,h as m,C as W,P as x,k as w,l as k,m as E,n as S,p as R,G as Y,a3 as $,R as tt,U as et,V as at,W as st,X as A,a2 as b,J as nt,_ as ot,L as K,w as it,D as rt,y as ct,z as lt,A as ut,E as dt,B as ft}from"./index.f9facb9c.js";import{c as pt,f as P,a as q,P as ht}from"./Toggle.25ae4a58.js";import{ab as j,R as z,a9 as p}from"./store.b2f211c7.js";import{w as _}from"./singletons.168485ea.js";function V(i){let s,t,e,a,n,o,c,l;const h=i[5].default,u=x(h,i,i[4],null);return{c(){s=w("div"),t=w("div"),e=w("div"),u&&u.c(),this.h()},l(r){s=k(r,"DIV",{class:!0});var d=E(s);t=k(d,"DIV",{class:!0});var I=E(t);e=k(I,"DIV",{class:!0});var C=E(e);u&&u.l(C),C.forEach(m),I.forEach(m),d.forEach(m),this.h()},h(){S(e,"class","wrapper svelte-16318be"),S(t,"class","modal-content svelte-16318be"),R(t,"--width",i[1]),S(s,"class","backdrop svelte-16318be")},m(r,d){U(r,s,d),Y(s,t),Y(t,e),u&&u.m(e,null),o=!0,c||(l=[$(pt.call(null,t)),O(t,"outclick",i[2]),O(t,"click",tt(i[6]))],c=!0)},p(r,d){u&&u.p&&(!o||d&16)&&et(u,h,r,r[4],o?st(h,r[4],d,null):at(r[4]),null),d&2&&R(t,"--width",r[1])},i(r){o||(g(u,r),A(()=>{o&&(a||(a=b(t,P,{y:-200},!0)),a.run(1))}),A(()=>{o&&(n||(n=b(s,q,{},!0)),n.run(1))}),o=!0)},o(r){y(u,r),a||(a=b(t,P,{y:-200},!1)),a.run(0),n||(n=b(s,q,{},!1)),n.run(0),o=!1},d(r){r&&m(s),u&&u.d(r),r&&a&&a.end(),r&&n&&n.end(),c=!1,nt(l)}}}function mt(i){let s,t,e,a,n=i[0]&&V(i);return{c(){n&&n.c(),s=M()},l(o){n&&n.l(o),s=M()},m(o,c){n&&n.m(o,c),U(o,s,c),t=!0,e||(a=O(window,"keyup",i[3]),e=!0)},p(o,[c]){o[0]?n?(n.p(o,c),c&1&&g(n,1)):(n=V(o),n.c(),g(n,1),n.m(s.parentNode,s)):n&&(Z(),y(n,1,1,()=>{n=null}),T())},i(o){t||(g(n),t=!0)},o(o){y(n),t=!1},d(o){n&&n.d(o),o&&m(s),e=!1,a()}}}function gt(i,s,t){let{$$slots:e={},$$scope:a}=s,{width:n="auto"}=s,{open:o=!1}=s;const c=W(),l=r=>{var d;t(0,o=!1),c("close"),(d=r==null?void 0:r.detail)==null||d.stopPropagation()},h=r=>{r.key=="Escape"&&(r.preventDefault(),r.stopPropagation(),l())};function u(r){ot.call(this,i,r)}return i.$$set=r=>{"width"in r&&t(1,n=r.width),"open"in r&&t(0,o=r.open),"$$scope"in r&&t(4,a=r.$$scope)},[o,n,l,h,a,e,u]}class Et extends G{constructor(s){super(),J(this,s,gt,mt,N,{width:1,open:0})}}class St extends j{constructor(t,e=!1,a=!1){super("mechanic",t);f(this,"iconKey","");f(this,"countsAsCast",!0);super.isParent=e,super.isDeprecated=a}toYamlObj(){const t=super.toYamlObj(),e=this.getData();e.getKeys().length>0&&t.put("data",e);const a=K(this.components);return a.length>0&&t.put("children",a),t}getData(){const t=new p("data");return t.put("icon-key",this.iconKey),t.put("counts",this.countsAsCast),this.data.filter(e=>e.meetsRequirements(this)).forEach(e=>{const a=e.getData();Object.keys(a).forEach(n=>t.put(n,a[n]))}),t}getRawData(){const t=new p("data");return this.data.forEach(e=>{const a=e.getData();Object.keys(a).forEach(n=>t.put(n,a[n]))}),t}deserialize(t){super.deserialize(t);const e=t.get("data");e&&this.data.forEach(a=>a.deserialize(e)),this.iconKey=e.get("icon-key",""),this.countsAsCast=e.get("counts",!0),this.setComponents(t.get("children",[],a=>z.deserializeComponents(a)))}}const v=class v extends j{constructor(t,e=!1){super("condition",t);f(this,"iconKey","");super.isDeprecated=e}toYamlObj(){const t=super.toYamlObj(),e=this.getData();e.getKeys().length>0&&t.put("data",e);const a=K(this.components);return a.length>0&&t.put("children",a),t}getData(){const t=new p("data");return t.put("icon-key",this.iconKey),this.data.filter(e=>e.meetsRequirements(this)).forEach(e=>{const a=e.getData();Object.keys(a).forEach(n=>t.put(n,a[n]))}),t}getRawData(){const t=new p("data");return t.put("icon-key",this.iconKey),this.data.forEach(e=>{const a=e.getData();Object.keys(a).forEach(n=>t.put(n,a[n]))}),t}deserialize(t){super.deserialize(t);const e=t.get("data");this.iconKey=e.get("icon-key"),e&&this.data.forEach(a=>a.deserialize(e)),this.setComponents(t.get("children",[],a=>z.deserializeComponents(a)))}};f(v,"new",()=>new v({name:"null"}));let L=v;const D=class D extends j{constructor(t,e=!1){super("target",t);f(this,"iconKey","");super.isDeprecated=e}toYamlObj(){const t=super.toYamlObj(),e=this.getData();e.getKeys().length>0&&t.put("data",e);const a=K(this.components);return a.length>0&&t.put("children",a),t}getData(){const t=new p("data");return t.put("icon-key",this.iconKey),this.data.filter(e=>e.meetsRequirements(this)).forEach(e=>{const a=e.getData();Object.keys(a).forEach(n=>t.put(n,a[n]))}),t}getRawData(){const t=new p("data");return t.put("icon-key",this.iconKey),this.data.forEach(e=>{const a=e.getData();Object.keys(a).forEach(n=>t.put(n,a[n]))}),t}deserialize(t){super.deserialize(t);const e=t.get("data");this.iconKey=e.get("icon-key"),e&&this.data.forEach(a=>a.deserialize(e)),this.setComponents(t.get("children",[],a=>z.deserializeComponents(a)))}};f(D,"new",()=>new D({name:"null"}));let B=D;function _t(i){let s,t,e;function a(o){i[3](o)}let n={label:i[1],tooltip:i[2]};return i[0]!==void 0&&(n.value=i[0]),s=new ht({props:n}),it.push(()=>rt(s,"value",a)),{c(){ct(s.$$.fragment)},l(o){lt(s.$$.fragment,o)},m(o,c){ut(s,o,c),e=!0},p(o,[c]){const l={};c&2&&(l.label=o[1]),c&4&&(l.tooltip=o[2]),!t&&c&1&&(t=!0,l.value=o[0],dt(()=>t=!1)),s.$set(l)},i(o){e||(g(s.$$.fragment,o),e=!0)},o(o){y(s.$$.fragment,o),e=!1},d(o){ft(s,o)}}}function bt(i,s,t){let{data:e}=s,{name:a=""}=s,{tooltip:n=void 0}=s;const o=W();function c(l){e=l,t(0,e)}return i.$$set=l=>{"data"in l&&t(0,e=l.data),"name"in l&&t(1,a=l.name),"tooltip"in l&&t(2,n=l.tooltip)},i.$$.update=()=>{i.$$.dirty&1&&(e||!e)&&o("save")},[e,a,n,c]}class Ot extends G{constructor(s){super(),J(this,s,bt,_t,N,{data:0,name:1,tooltip:2})}}const Kt=(()=>{let i=!1;i=localStorage.getItem("show-summary-items")==="true";const{subscribe:s,set:t,update:e}=_(i);return{subscribe:s,set:a=>(localStorage.setItem("show-summary-items",String(a)),t(a)),update:e}})(),jt=(()=>{let i=!0;i=localStorage.getItem("use-symbols")==="true";const{subscribe:s,set:t,update:e}=_(i);return{subscribe:s,set:a=>(localStorage.setItem("use-symbols",String(a)),t(a)),update:e}})(),zt=(()=>{let i=!0;i=localStorage.getItem("animation-enabled")==="true";const{subscribe:s,set:t,update:e}=_(i);return{subscribe:s,set:a=>(localStorage.setItem("animation-enabled",String(a)),t(a)),update:e}})(),X=_(void 0),F=_(void 0),It=(i,s)=>{X.set(i),F.set(s)},Ct=()=>{X.set(void 0),F.set(void 0)};export{Et as M,B as P,Ot as S,L as a,St as b,zt as c,Ct as d,X as e,F as m,It as o,Kt as s,jt as u};
