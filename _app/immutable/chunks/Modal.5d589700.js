import{S as z,i as I,s as N,e as b,b as V,E as p,g as h,v as S,d as k,f as F,h as m,a9 as G,G as J,k as y,l as g,m as w,n as v,p as E,C as K,_ as L,J as M,L as O,M as Q,N as Z,P as D,Z as _,F as j,V as A,K as B}from"./index.1ee62562.js";import{o as H,f as q,Q as C}from"./store.dac7fe37.js";function P(o){let s,l,r,f,e,a,u;const c=o[5].default,n=J(c,o,o[4],null);return{c(){s=y("div"),l=y("div"),n&&n.c(),this.h()},l(i){s=g(i,"DIV",{class:!0,draggable:!0});var t=w(s);l=g(t,"DIV",{class:!0});var d=w(l);n&&n.l(d),d.forEach(m),t.forEach(m),this.h()},h(){v(l,"class","modal-content svelte-lczuqy"),E(l,"--width",o[1]),v(s,"class","backdrop svelte-lczuqy"),v(s,"draggable","true")},m(i,t){V(i,s,t),K(s,l),n&&n.m(l,null),e=!0,a||(u=[L(H.call(null,l)),p(l,"outclick",o[2]),p(l,"click",M(o[6])),p(s,"dragstart",M(B(!1)))],a=!0)},p(i,t){n&&n.p&&(!e||t&16)&&O(n,c,i,i[4],e?Z(c,i[4],t,null):Q(i[4]),null),t&2&&E(l,"--width",i[1])},i(i){e||(h(n,i),D(()=>{e&&(r||(r=_(l,q,{y:-200},!0)),r.run(1))}),D(()=>{e&&(f||(f=_(s,C,{},!0)),f.run(1))}),e=!0)},o(i){k(n,i),r||(r=_(l,q,{y:-200},!1)),r.run(0),f||(f=_(s,C,{},!1)),f.run(0),e=!1},d(i){i&&m(s),n&&n.d(i),i&&r&&r.end(),i&&f&&f.end(),a=!1,j(u)}}}function R(o){let s,l,r,f,e=o[0]&&P(o);return{c(){e&&e.c(),s=b()},l(a){e&&e.l(a),s=b()},m(a,u){e&&e.m(a,u),V(a,s,u),l=!0,r||(f=p(window,"keyup",o[3]),r=!0)},p(a,[u]){a[0]?e?(e.p(a,u),u&1&&h(e,1)):(e=P(a),e.c(),h(e,1),e.m(s.parentNode,s)):e&&(S(),k(e,1,1,()=>{e=null}),F())},i(a){l||(h(e),l=!0)},o(a){k(e),l=!1},d(a){e&&e.d(a),a&&m(s),r=!1,f()}}}function T(o,s,l){let{$$slots:r={},$$scope:f}=s,{width:e="auto"}=s,{open:a=!1}=s;const u=G(),c=t=>{var d;l(0,a=!1),u("close"),(d=t==null?void 0:t.detail)==null||d.stopPropagation()},n=t=>{t.key=="Escape"&&(t.preventDefault(),t.stopPropagation(),c())};function i(t){A.call(this,o,t)}return o.$$set=t=>{"width"in t&&l(1,e=t.width),"open"in t&&l(0,a=t.open),"$$scope"in t&&l(4,f=t.$$scope)},[a,e,c,n,f,r,i]}class X extends z{constructor(s){super(),I(this,s,T,R,N,{width:1,open:0})}}export{X as M};
