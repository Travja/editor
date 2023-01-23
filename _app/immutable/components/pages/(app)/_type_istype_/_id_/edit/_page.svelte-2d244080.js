import{S as L,i as M,s as O,k as w,q as T,a as j,l as y,m as D,r as N,h as g,c as A,n as q,p as le,b as P,D as $,u as oe,f as I,g as Q,d as X,t as V,a3 as Y,_ as ae,$ as se,w as Z,x,y as ee,a0 as re,z as te,ag as ie,F as ce,a4 as fe}from"../../../../../../chunks/index-9adbb703.js";import{T as F,U as R}from"../../../../../../chunks/store-c82e6c5f.js";function U(o,e,l){const t=o.slice();return t[5]=e[l],t[6]=e,t[7]=l,t}function G(o){let e,l,t;function f(i){o[4](i,o[5],o[6],o[7])}let _={};return o[5]!==void 0&&(_.component=o[5]),e=new ne({props:_}),ae.push(()=>se(e,"component",f)),{c(){Z(e.$$.fragment)},l(i){x(e.$$.fragment,i)},m(i,p){ee(e,i,p),t=!0},p(i,p){o=i;const m={};!l&&p&1&&(l=!0,m.component=o[5],re(()=>l=!1)),e.$set(m)},i(i){t||(I(e.$$.fragment,i),t=!0)},o(i){V(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function ue(o){let e,l,t,f=o[1]()+"",_,i,p=o[0].name+"",m,b,k,v,E=o[0].components,c=[];for(let r=0;r<E.length;r+=1)c[r]=G(U(o,E,r));const C=r=>V(c[r],1,1,()=>{c[r]=null});return{c(){e=w("div"),l=w("div"),t=w("span"),_=T(f),i=T(": "),m=T(p),b=j(),k=w("div");for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){e=y(r,"DIV",{draggable:!0,class:!0});var d=D(e);l=y(d,"DIV",{class:!0});var a=D(l);t=y(a,"SPAN",{class:!0});var s=D(t);_=N(s,f),s.forEach(g),i=N(a,": "),m=N(a,p),a.forEach(g),b=A(d),k=y(d,"DIV",{class:!0});var B=D(k);for(let n=0;n<c.length;n+=1)c[n].l(B);B.forEach(g),d.forEach(g),this.h()},h(){q(t,"class","svelte-1g74roq"),q(l,"class","name svelte-1g74roq"),q(k,"class","children svelte-1g74roq"),q(e,"draggable","true"),q(e,"class","comp-body svelte-1g74roq"),le(e,"--comp-color",o[2]())},m(r,d){P(r,e,d),$(e,l),$(l,t),$(t,_),$(l,i),$(l,m),$(e,b),$(e,k);for(let a=0;a<c.length;a+=1)c[a].m(k,null);v=!0},p(r,[d]){if((!v||d&1)&&p!==(p=r[0].name+"")&&oe(m,p),d&1){E=r[0].components;let a;for(a=0;a<E.length;a+=1){const s=U(r,E,a);c[a]?(c[a].p(s,d),I(c[a],1)):(c[a]=G(s),c[a].c(),I(c[a],1),c[a].m(k,null))}for(Q(),a=E.length;a<c.length;a+=1)C(a);X()}},i(r){if(!v){for(let d=0;d<E.length;d+=1)I(c[d]);v=!0}},o(r){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)V(c[d]);v=!1},d(r){r&&g(e),Y(c,r)}}}function de(o,e,l){let{component:t}=e,{color:f="#0083ef"}=e;const _=()=>t instanceof F?"Trigger":t instanceof R?"Condition":"???",i=()=>t instanceof F?"#0083ef":t instanceof R?"#feac00":"orange";function p(m,b,k,v){k[v]=m,l(0,t)}return o.$$set=m=>{"component"in m&&l(0,t=m.component),"color"in m&&l(3,f=m.color)},[t,_,i,f,p]}class ne extends L{constructor(e){super(),M(this,e,de,ue,O,{component:0,color:3})}}function J(o,e,l){const t=o.slice();return t[3]=e[l],t}function K(o){let e,l,t;return l=new ne({props:{component:o[3]}}),{c(){e=w("div"),Z(l.$$.fragment),this.h()},l(f){e=y(f,"DIV",{class:!0});var _=D(e);x(l.$$.fragment,_),_.forEach(g),this.h()},h(){q(e,"class","widget svelte-17rj9q")},m(f,_){P(f,e,_),ee(l,e,null),t=!0},p:fe,i(f){t||(I(l.$$.fragment,f),t=!0)},o(f){V(l.$$.fragment,f),t=!1},d(f){f&&g(e),te(l)}}}function _e(o){let e,l,t,f=o[0].name+"",_,i,p,m,b,k,v,E,c,C,r,d;document.title=e="ProSkillAPI Dynamic Editor - "+o[0].name;let a=o[0].triggers,s=[];for(let n=0;n<a.length;n+=1)s[n]=K(J(o,a,n));const B=n=>V(s[n],1,1,()=>{s[n]=null});return{c(){l=j(),t=w("h2"),_=T(f),i=j(),p=w("hr"),m=j(),b=w("div");for(let n=0;n<s.length;n+=1)s[n].c();k=j(),v=w("div"),E=w("span"),c=T("variables"),this.h()},l(n){ie("svelte-r5m1v8",document.head).forEach(g),l=A(n),t=y(n,"H2",{class:!0});var u=D(t);_=N(u,f),u.forEach(g),i=A(n),p=y(n,"HR",{}),m=A(n),b=y(n,"DIV",{class:!0});var S=D(b);for(let H=0;H<s.length;H+=1)s[H].l(S);k=A(S),v=y(S,"DIV",{class:!0,title:!0});var W=D(v);E=y(W,"SPAN",{class:!0});var z=D(E);c=N(z,"variables"),z.forEach(g),W.forEach(g),S.forEach(g),this.h()},h(){q(t,"class","svelte-17rj9q"),q(E,"class","material-symbols-rounded svelte-17rj9q"),q(v,"class","add-trigger chip svelte-17rj9q"),q(v,"title","Add Trigger"),q(b,"class","container svelte-17rj9q")},m(n,h){P(n,l,h),P(n,t,h),$(t,_),P(n,i,h),P(n,p,h),P(n,m,h),P(n,b,h);for(let u=0;u<s.length;u+=1)s[u].m(b,null);$(b,k),$(b,v),$(v,E),$(E,c),C=!0,r||(d=ce(v,"click",o[2]),r=!0)},p(n,[h]){if((!C||h&1)&&e!==(e="ProSkillAPI Dynamic Editor - "+n[0].name)&&(document.title=e),h&1){a=n[0].triggers;let u;for(u=0;u<a.length;u+=1){const S=J(n,a,u);s[u]?(s[u].p(S,h),I(s[u],1)):(s[u]=K(S),s[u].c(),I(s[u],1),s[u].m(b,k))}for(Q(),u=a.length;u<s.length;u+=1)B(u);X()}},i(n){if(!C){for(let h=0;h<a.length;h+=1)I(s[h]);C=!0}},o(n){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)V(s[h]);C=!1},d(n){n&&g(l),n&&g(t),n&&g(i),n&&g(p),n&&g(m),n&&g(b),Y(s,n),r=!1,d()}}}function me(o,e,l){let{data:t}=e,f=t.data;const _=()=>console.log(f.triggers[0].data[0].data);return o.$$set=i=>{"data"in i&&l(1,t=i.data)},[f,t,_]}class pe extends L{constructor(e){super(),M(this,e,me,_e,O,{data:1})}}export{pe as default};
