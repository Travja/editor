import{S as $e,i as ke,s as Ee,k as w,a as T,q,l as S,m as P,c as H,h as u,r as z,n as D,p as Ce,b as I,C as g,E as j,I as ye,f as A,u as we,g as Y,t as M,d as Z,P as Ne,F as Se,N as Q,X as G,a2 as De,Y as Ve,Z as Te,w as U,x,y as ee,$ as He,z as te,O as Ie,a3 as re,e as ce,ag as Me,H as fe,J as ue,R as Oe}from"../../../../../chunks/index-b4b37283.js";import{b as L,I as de,J as _e,K as ne,L as Re,S as qe,M as ze}from"../../../../../chunks/store-477442f6.js";import{M as Be}from"../../../../../chunks/Modal-228ea9eb.js";function me(a,e,n){const l=a.slice();return l[9]=e[n],l[10]=e,l[11]=n,l}function Je(a){let e,n,l;return{c(){e=w("span"),n=q("expand_less"),this.h()},l(s){e=S(s,"SPAN",{class:!0});var r=P(e);n=z(r,"expand_less"),r.forEach(u),this.h()},h(){D(e,"class","material-symbols-rounded svelte-iy3ud6")},m(s,r){I(s,e,r),g(e,n)},i(s){s&&(l||Q(()=>{l=Ie(e,a[4],{duration:400}),l.start()}))},o:re,d(s){s&&u(e)}}}function We(a){let e,n,l;return{c(){e=w("span"),n=q("expand_more"),this.h()},l(s){e=S(s,"SPAN",{class:!0});var r=P(e);n=z(r,"expand_more"),r.forEach(u),this.h()},h(){D(e,"class","material-symbols-rounded svelte-iy3ud6")},m(s,r){I(s,e,r),g(e,n)},i(s){s&&(l||Q(()=>{l=Ie(e,a[4],{duration:400}),l.start()}))},o:re,d(s){s&&u(e)}}}function pe(a){let e,n,l,s,r,f,p=a[0].components,t=[];for(let i=0;i<p.length;i+=1)t[i]=he(me(a,p,i));const d=i=>M(t[i],1,1,()=>{t[i]=null});return{c(){e=w("div");for(let i=0;i<t.length;i+=1)t[i].c();n=T(),l=w("div"),s=q("+ Add Component"),this.h()},l(i){e=S(i,"DIV",{class:!0});var _=P(e);for(let m=0;m<t.length;m+=1)t[m].l(_);n=H(_),l=S(_,"DIV",{class:!0});var c=P(l);s=z(c,"+ Add Component"),c.forEach(u),_.forEach(u),this.h()},h(){D(l,"class","chip svelte-iy3ud6"),D(e,"class","children svelte-iy3ud6")},m(i,_){I(i,e,_);for(let c=0;c<t.length;c+=1)t[c].m(e,null);g(e,n),g(e,l),g(l,s),f=!0},p(i,_){if(_&1){p=i[0].components;let c;for(c=0;c<p.length;c+=1){const m=me(i,p,c);t[c]?(t[c].p(m,_),A(t[c],1)):(t[c]=he(m),t[c].c(),A(t[c],1),t[c].m(e,n))}for(Y(),c=p.length;c<t.length;c+=1)d(c);Z()}},i(i){if(!f){for(let _=0;_<p.length;_+=1)A(t[_]);i&&Q(()=>{r||(r=G(e,L,{},!0)),r.run(1)}),f=!0}},o(i){t=t.filter(Boolean);for(let _=0;_<t.length;_+=1)M(t[_]);i&&(r||(r=G(e,L,{},!1)),r.run(0)),f=!1},d(i){i&&u(e),De(t,i),i&&r&&r.end()}}}function he(a){let e,n,l,s,r;function f(t){a[6](t,a[9],a[10],a[11])}let p={};return a[9]!==void 0&&(p.component=a[9]),n=new Pe({props:p}),Ve.push(()=>Te(n,"component",f)),{c(){e=w("span"),U(n.$$.fragment)},l(t){e=S(t,"SPAN",{});var d=P(e);x(n.$$.fragment,d),d.forEach(u)},m(t,d){I(t,e,d),ee(n,e,null),r=!0},p(t,d){a=t;const i={};!l&&d&1&&(l=!0,i.component=a[9],He(()=>l=!1)),n.$set(i)},i(t){r||(A(n.$$.fragment,t),t&&Q(()=>{s||(s=G(e,L,{},!0)),s.run(1)}),r=!0)},o(t){M(n.$$.fragment,t),t&&(s||(s=G(e,L,{},!1)),s.run(0)),r=!1},d(t){t&&u(e),te(n),t&&s&&s.end()}}}function je(a){let e,n,l,s,r,f,p=a[2]()+"",t,d,i=a[0].name+"",_,c,m,V,C,J;function O(b,k){return b[1]?We:Je}let R=O(a),N=R(a),v=!a[1]&&pe(a);return{c(){e=w("div"),N.c(),n=T(),l=w("div"),s=T(),r=w("div"),f=w("span"),t=q(p),d=q(": "),_=q(i),c=T(),v&&v.c(),this.h()},l(b){e=S(b,"DIV",{draggable:!0,class:!0});var k=P(e);N.l(k),n=H(k),l=S(k,"DIV",{class:!0}),P(l).forEach(u),s=H(k),r=S(k,"DIV",{class:!0});var B=P(r);f=S(B,"SPAN",{class:!0});var F=P(f);t=z(F,p),F.forEach(u),d=z(B,": "),_=z(B,i),B.forEach(u),c=H(k),v&&v.l(k),k.forEach(u),this.h()},h(){D(l,"class","corner svelte-iy3ud6"),D(f,"class","svelte-iy3ud6"),D(r,"class","name svelte-iy3ud6"),D(e,"draggable","true"),D(e,"class","comp-body svelte-iy3ud6"),Ce(e,"--comp-color",a[3]())},m(b,k){I(b,e,k),N.m(e,null),g(e,n),g(e,l),g(e,s),g(e,r),g(r,f),g(f,t),g(r,d),g(r,_),g(e,c),v&&v.m(e,null),V=!0,C||(J=[j(l,"click",a[5]),j(e,"dragstart",ye(a[7])),j(e,"dragend",a[8])],C=!0)},p(b,[k]){R!==(R=O(b))&&(N.d(1),N=R(b),N&&(N.c(),A(N,1),N.m(e,n))),(!V||k&1)&&i!==(i=b[0].name+"")&&we(_,i),b[1]?v&&(Y(),M(v,1,1,()=>{v=null}),Z()):v?(v.p(b,k),k&2&&A(v,1)):(v=pe(b),v.c(),A(v,1),v.m(e,null))},i(b){V||(A(N),A(v),m&&m.end(1),V=!0)},o(b){M(v),m=Ne(e,L,{}),V=!1},d(b){b&&u(e),N.d(),v&&v.d(),b&&m&&m.end(),C=!1,Se(J)}}}function Fe(a,e,n){let{component:l}=e,s=!1;const r=()=>l instanceof de?"Trigger":l instanceof _e?"Condition":"???",f=()=>l instanceof de?"#0083ef":l instanceof _e?"#feac00":"orange";function p(c,{duration:m}){return{duration:m,css:V=>`transform: rotate(${180-Re(V)*180}deg);`}}const t=()=>n(1,s=!s);function d(c,m,V,C){V[C]=c,n(0,l)}const i=()=>ne.set(l),_=()=>ne.set(void 0);return a.$$set=c=>{"component"in c&&n(0,l=c.component)},[l,s,r,f,p,t,d,i,_]}class Pe extends $e{constructor(e){super(),ke(this,e,Fe,je,Ee,{component:0})}}function ge(a,e,n){const l=a.slice();return l[10]=e[n],l}function ve(a){let e,n,l;return n=new Pe({props:{component:a[10]}}),{c(){e=w("div"),U(n.$$.fragment),this.h()},l(s){e=S(s,"DIV",{class:!0});var r=P(e);x(n.$$.fragment,r),r.forEach(u),this.h()},h(){D(e,"class","widget svelte-1tihv6n")},m(s,r){I(s,e,r),ee(n,e,null),l=!0},p(s,r){const f={};r&1&&(f.component=s[10]),n.$set(f)},i(s){l||(A(n.$$.fragment,s),l=!0)},o(s){M(n.$$.fragment,s),l=!1},d(s){s&&u(e),te(n)}}}function be(a){let e,n;return e=new Be({props:{$$slots:{default:[Ke]},$$scope:{ctx:a}}}),e.$on("close",a[9]),{c(){U(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,s){ee(e,l,s),n=!0},p(l,s){const r={};s&8192&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){n||(A(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){te(e,l)}}}function Ke(a){let e,n,l,s,r,f,p;return f=new qe({props:{data:Object.values(ze).map(Xe),display:Ye}}),f.$on("select",a[3]),{c(){e=w("h2"),n=q("Select New Trigger"),l=T(),s=w("hr"),r=T(),U(f.$$.fragment),this.h()},l(t){e=S(t,"H2",{class:!0});var d=P(e);n=z(d,"Select New Trigger"),d.forEach(u),l=H(t),s=S(t,"HR",{}),r=H(t),x(f.$$.fragment,t),this.h()},h(){D(e,"class","modal-header svelte-1tihv6n")},m(t,d){I(t,e,d),g(e,n),I(t,l,d),I(t,s,d),I(t,r,d),ee(f,t,d),p=!0},p:re,i(t){p||(A(f.$$.fragment,t),p=!0)},o(t){M(f.$$.fragment,t),p=!1},d(t){t&&u(e),t&&u(l),t&&u(s),t&&u(r),te(f,t)}}}function Le(a){let e,n,l,s,r=a[0].name+"",f,p,t,d,i,_,c,m,V,C,J,O,R,N,v,b,k,B,F;document.title=e="ProSkillAPI Dynamic Editor - "+a[0].name;let W=a[0].triggers,E=[];for(let o=0;o<W.length;o+=1)E[o]=ve(ge(a,W,o));const Ae=o=>M(E[o],1,1,()=>{E[o]=null});let y=a[1]&&be(a);return{c(){n=T(),l=w("div"),s=w("h2"),f=q(r),p=T(),t=w("div"),d=w("span"),i=q("delete"),_=q(`
    Drag components here to delete`),c=T(),m=w("hr"),V=T(),C=w("div");for(let o=0;o<E.length;o+=1)E[o].c();J=T(),O=w("div"),R=w("span"),N=q("variables"),v=T(),y&&y.c(),b=ce(),this.h()},l(o){Me("svelte-r5m1v8",document.head).forEach(u),n=H(o),l=S(o,"DIV",{class:!0});var $=P(l);s=S($,"H2",{class:!0});var K=P(s);f=z(K,r),K.forEach(u),p=H($),t=S($,"DIV",{class:!0});var le=P(t);d=S(le,"SPAN",{class:!0});var ae=P(d);i=z(ae,"delete"),ae.forEach(u),_=z(le,`
    Drag components here to delete`),le.forEach(u),$.forEach(u),c=H(o),m=S(o,"HR",{}),V=H(o),C=S(o,"DIV",{class:!0});var X=P(C);for(let se=0;se<E.length;se+=1)E[se].l(X);J=H(X),O=S(X,"DIV",{class:!0,title:!0});var oe=P(O);R=S(oe,"SPAN",{class:!0});var ie=P(R);N=z(ie,"variables"),ie.forEach(u),oe.forEach(u),X.forEach(u),v=H(o),y&&y.l(o),b=ce(),this.h()},h(){D(s,"class","svelte-1tihv6n"),D(d,"class","material-symbols-rounded svelte-1tihv6n"),D(t,"class","delete-zone svelte-1tihv6n"),fe(t,"hovered",a[2]),D(l,"class","header svelte-1tihv6n"),D(R,"class","material-symbols-rounded svelte-1tihv6n"),D(O,"class","add-trigger chip svelte-1tihv6n"),D(O,"title","Add Trigger"),D(C,"class","container svelte-1tihv6n")},m(o,h){I(o,n,h),I(o,l,h),g(l,s),g(s,f),g(l,p),g(l,t),g(t,d),g(d,i),g(t,_),I(o,c,h),I(o,m,h),I(o,V,h),I(o,C,h);for(let $=0;$<E.length;$+=1)E[$].m(C,null);g(C,J),g(C,O),g(O,R),g(R,N),I(o,v,h),y&&y.m(o,h),I(o,b,h),k=!0,B||(F=[j(t,"dragover",ue(a[6])),j(t,"dragleave",a[7]),j(t,"drop",ye(ue(a[4]))),j(O,"click",a[8])],B=!0)},p(o,[h]){if((!k||h&1)&&e!==(e="ProSkillAPI Dynamic Editor - "+o[0].name)&&(document.title=e),(!k||h&1)&&r!==(r=o[0].name+"")&&we(f,r),(!k||h&4)&&fe(t,"hovered",o[2]),h&1){W=o[0].triggers;let $;for($=0;$<W.length;$+=1){const K=ge(o,W,$);E[$]?(E[$].p(K,h),A(E[$],1)):(E[$]=ve(K),E[$].c(),A(E[$],1),E[$].m(C,J))}for(Y(),$=W.length;$<E.length;$+=1)Ae($);Z()}o[1]?y?(y.p(o,h),h&2&&A(y,1)):(y=be(o),y.c(),A(y,1),y.m(b.parentNode,b)):y&&(Y(),M(y,1,1,()=>{y=null}),Z())},i(o){if(!k){for(let h=0;h<W.length;h+=1)A(E[h]);A(y),k=!0}},o(o){E=E.filter(Boolean);for(let h=0;h<E.length;h+=1)M(E[h]);M(y),k=!1},d(o){o&&u(n),o&&u(l),o&&u(c),o&&u(m),o&&u(V),o&&u(C),De(E,o),o&&u(v),y&&y.d(o),o&&u(b),B=!1,Se(F)}}}const Xe=a=>new a,Ye=a=>a.name;function Ze(a,e,n){let{data:l}=e,s=l.data,r=!1,f=!1;const p=m=>{s.triggers.push(m.detail),n(0,s.triggers=[...s.triggers],s),setTimeout(()=>n(1,r=!1))},t=()=>{const m=Oe(ne);n(2,f=!1),s.removeComponent(m),n(0,s.triggers=[...s.triggers],s),console.log(m)},d=()=>n(2,f=!0),i=()=>n(2,f=!1),_=()=>n(1,r=!0),c=()=>n(1,r=!1);return a.$$set=m=>{"data"in m&&n(5,l=m.data)},[s,r,f,p,t,l,d,i,_,c]}class xe extends $e{constructor(e){super(),ke(this,e,Ze,Le,Ee,{data:5})}}export{xe as default};
