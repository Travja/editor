import{S as ie,i as ce,s as fe,F as Ve,k as y,l as D,m as I,h as v,n as m,b as L,G as h,H as ht,I as T,J as Ne,K as qe,L as Fe,f as O,M as te,N as ue,t as U,D as ae,O as It,w as W,x as Z,y as J,z as X,q as H,a as M,r as z,c as B,P as Ue,e as Q,Q as K,g as se,d as re,R as Ee,T as ye,U as ee,u as be,V as oe,W as St,E as Ct,X as Ae,Y as Te,Z as Pt,p as He,o as vt,_ as Vt,$ as pt,a0 as Oe,B as ne,a1 as ze,a2 as Nt,a3 as De,a4 as Ie,a5 as Ye}from"../../chunks/index-be55c01e.js";import{s as mt,l as qt,a as gt,g as me,b as Le,c as $e,d as he,u as bt,P as pe,i as Pe,e as kt,f as $t,h as wt,j as Ft,k as At,r as Tt,m as Ot,n as Lt,o as Se,p as Mt,q as Ce,t as Bt,v as Rt,w as Ut,x as Ht,y as zt,z as Yt,A as jt,B as Gt,C as Wt,D as Zt}from"../../chunks/store-e6adaee1.js";import{c as Et,f as _e,a as je,s as ge,b as Ge,v as We}from"../../chunks/data-861762c7.js";import{j as de}from"../../chunks/singletons-34c1a203.js";const yt="https://6jgex7frk0.execute-api.us-west-2.amazonaws.com/default/haste-uploader",Jt=s=>typeof s!="string"?Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.')):s===""?Promise.reject(new Error("You cannot send nothing.")):fetch(yt,{method:"POST",body:s,headers:{"Content-Type":"text/plain"}}).then(l=>l.json()).then(l=>{if(!l.url)throw l.error?new Error(l.error):new Error("Did not receive hastebin key.");return l.url}),Xt=async s=>(s.url&&s.url.includes("astebin.com")&&!s.url.includes("raw")&&(s.url=s.url.replace("astebin.com","astebin.com/raw")),await(await fetch(`${yt}?${s.id?"id="+s.id:"url="+s.url}`)).text());function Kt(s){let e,l,t,r,n,i,_;const f=s[2].default,c=Ve(f,s,s[1],null);return{c(){e=y("div"),l=y("div"),c&&c.c(),this.h()},l(u){e=D(u,"DIV",{class:!0});var d=I(e);l=D(d,"DIV",{class:!0});var w=I(l);c&&c.l(w),w.forEach(v),d.forEach(v),this.h()},h(){m(l,"class","modal-content svelte-sk62kv"),m(e,"class","backdrop svelte-sk62kv")},m(u,d){L(u,e,d),h(e,l),c&&c.m(l,null),n=!0,i||(_=[ht(Et.call(null,l)),T(l,"outclick",s[0])],i=!0)},p(u,[d]){c&&c.p&&(!n||d&2)&&Ne(c,f,u,u[1],n?Fe(f,u[1],d,null):qe(u[1]),null)},i(u){n||(O(c,u),te(()=>{t||(t=ue(l,_e,{y:-200},!0)),t.run(1)}),te(()=>{r||(r=ue(e,je,{},!0)),r.run(1)}),n=!0)},o(u){U(c,u),t||(t=ue(l,_e,{y:-200},!1)),t.run(0),r||(r=ue(e,je,{},!1)),r.run(0),n=!1},d(u){u&&v(e),c&&c.d(u),u&&t&&t.end(),u&&r&&r.end(),i=!1,ae(_)}}}function Qt(s,e,l){let{$$slots:t={},$$scope:r}=e;const n=It(),i=()=>{n("close")};return s.$$set=_=>{"$$scope"in _&&l(1,r=_.$$scope)},[i,r,t]}class Dt extends ie{constructor(e){super(),ce(this,e,Qt,Kt,fe,{})}}function xt(s){let e,l,t,r,n,i,_,f,c,u,d,w,E,g,a,o,p,k,b,F,N,V,q,j;return{c(){e=y("div"),l=y("div"),t=y("div"),r=H("Upload File"),n=M(),i=y("label"),_=H("Select File"),f=M(),c=y("input"),u=M(),d=y("div"),w=y("span"),E=H("OR"),g=M(),a=y("div"),o=y("div"),p=H("Import from URL"),k=M(),b=y("input"),F=M(),N=y("div"),V=H("Import"),this.h()},l(S){e=D(S,"DIV",{class:!0});var C=I(e);l=D(C,"DIV",{class:!0});var P=I(l);t=D(P,"DIV",{});var $=I(t);r=z($,"Upload File"),$.forEach(v),n=B(P),i=D(P,"LABEL",{for:!0,class:!0});var R=I(i);_=z(R,"Select File"),R.forEach(v),f=B(P),c=D(P,"INPUT",{id:!0,type:!0,class:!0}),P.forEach(v),u=B(C),d=D(C,"DIV",{class:!0});var G=I(d);w=D(G,"SPAN",{class:!0});var A=I(w);E=z(A,"OR"),A.forEach(v),G.forEach(v),g=B(C),a=D(C,"DIV",{class:!0});var Y=I(a);o=D(Y,"DIV",{});var x=I(o);p=z(x,"Import from URL"),x.forEach(v),k=B(Y),b=D(Y,"INPUT",{class:!0}),F=B(Y),N=D(Y,"DIV",{class:!0});var le=I(N);V=z(le,"Import"),le.forEach(v),Y.forEach(v),C.forEach(v),this.h()},h(){m(i,"for","file-upload"),m(i,"class","button"),m(c,"id","file-upload"),m(c,"type","file"),m(c,"class","hidden svelte-8b3mcy"),c.multiple=!0,m(l,"class","option svelte-8b3mcy"),m(w,"class","svelte-8b3mcy"),m(d,"class","or svelte-8b3mcy"),m(b,"class","svelte-8b3mcy"),m(N,"class","button"),m(a,"class","option svelte-8b3mcy"),m(e,"class","options svelte-8b3mcy")},m(S,C){L(S,e,C),h(e,l),h(l,t),h(t,r),h(l,n),h(l,i),h(i,_),h(l,f),h(l,c),h(e,u),h(e,d),h(d,w),h(w,E),h(e,g),h(e,a),h(a,o),h(o,p),h(a,k),h(a,b),Ue(b,s[1]),h(a,F),h(a,N),h(N,V),q||(j=[T(c,"change",s[4]),T(b,"input",s[5]),T(N,"click",s[3])],q=!0)},p(S,C){C&2&&b.value!==S[1]&&Ue(b,S[1])},d(S){S&&v(e),q=!1,ae(j)}}}function el(s){let e,l;return e=new Dt({props:{$$slots:{default:[xt]},$$scope:{ctx:s}}}),e.$on("close",s[2]),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,[r]){const n={};r&67&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function tl(s,e,l){let t,r;const n=()=>{l(1,t=l(0,r=void 0)),mt(!1)},i=()=>{t&&(t.startsWith("http")||l(1,t="https://"+t),Xt({url:t}).then(c=>{n(),qt(c)}).catch(c=>{console.error(c)}))};function _(){r=this.files,l(0,r)}function f(){t=this.value,l(1,t)}return s.$$.update=()=>{if(s.$$.dirty&1&&r&&r.length>0)for(const c of r)c.name.indexOf(".yml")!=-1&&(gt(c),n())},[r,t,n,i,_,f]}class ll extends ie{constructor(e){super(),ce(this,e,tl,el,fe,{})}}function Ze(s){let e,l,t,r,n,i,_,f,c,u,d,w;return{c(){e=y("div"),l=y("div"),t=y("span"),r=H("save"),i=M(),_=y("div"),f=y("span"),c=H("delete"),this.h()},l(E){e=D(E,"DIV",{class:!0});var g=I(e);l=D(g,"DIV",{class:!0,title:!0});var a=I(l);t=D(a,"SPAN",{class:!0});var o=I(t);r=z(o,"save"),o.forEach(v),a.forEach(v),i=B(g),_=D(g,"DIV",{class:!0,title:!0});var p=I(_);f=D(p,"SPAN",{class:!0});var k=I(f);c=z(k,"delete"),k.forEach(v),p.forEach(v),g.forEach(v),this.h()},h(){m(t,"class","material-symbols-rounded svelte-7wiq77"),m(l,"class","download svelte-7wiq77"),m(l,"title",n="Save "+(s[2].triggers?"Skill":"Class")),m(f,"class","material-symbols-rounded svelte-7wiq77"),m(_,"class","delete svelte-7wiq77"),m(_,"title",u="Delete "+(s[2].triggers?"Skill":"Class")),m(e,"class","buttons svelte-7wiq77")},m(E,g){L(E,e,g),h(e,l),h(l,t),h(t,r),h(e,i),h(e,_),h(_,f),h(f,c),d||(w=[T(l,"click",s[10]),T(_,"click",s[11])],d=!0)},p(E,g){g&4&&n!==(n="Save "+(E[2].triggers?"Skill":"Class"))&&m(l,"title",n),g&4&&u!==(u="Delete "+(E[2].triggers?"Skill":"Class"))&&m(_,"title",u)},d(E){E&&v(e),d=!1,ae(w)}}}function Je(s){let e,l;return e=new Dt({props:{$$slots:{default:[sl]},$$scope:{ctx:s}}}),e.$on("close",s[17]),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const n={};r&262164&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function sl(s){let e,l,t=s[2].name+"",r,n,i,_,f,c,u,d,w,E,g;return{c(){e=y("h3"),l=H("Do you really want to delete "),r=H(t),n=H("?"),i=M(),_=y("div"),f=y("div"),c=H("Cancel"),u=M(),d=y("div"),w=H("Delete"),this.h()},l(a){e=D(a,"H3",{});var o=I(e);l=z(o,"Do you really want to delete "),r=z(o,t),n=z(o,"?"),o.forEach(v),i=B(a),_=D(a,"DIV",{class:!0});var p=I(_);f=D(p,"DIV",{class:!0});var k=I(f);c=z(k,"Cancel"),k.forEach(v),u=B(p),d=D(p,"DIV",{class:!0});var b=I(d);w=z(b,"Delete"),b.forEach(v),p.forEach(v),this.h()},h(){m(f,"class","button svelte-7wiq77"),m(d,"class","button modal-delete svelte-7wiq77"),m(_,"class","buttons modal-buttons svelte-7wiq77")},m(a,o){L(a,e,o),h(e,l),h(e,r),h(e,n),L(a,i,o),L(a,_,o),h(_,f),h(f,c),h(_,u),h(_,d),h(d,w),E||(g=[T(f,"click",s[15]),T(d,"click",s[16])],E=!0)},p(a,o){o&4&&t!==(t=a[2].name+"")&&be(r,t)},d(a){a&&v(e),a&&v(i),a&&v(_),E=!1,ae(g)}}}function rl(s){let e,l,t,r,n,i,_,f,c,u;const d=s[12].default,w=Ve(d,s,s[18],null);let E=s[2]&&Ze(s),g=s[4]&&Je(s);return{c(){e=y("div"),w&&w.c(),l=M(),E&&E.c(),i=M(),g&&g.c(),_=Q(),this.h()},l(a){e=D(a,"DIV",{class:!0,draggable:!0});var o=I(e);w&&w.l(o),l=B(o),E&&E.l(o),o.forEach(v),i=B(a),g&&g.l(a),_=Q(),this.h()},h(){m(e,"class","sidebar-entry svelte-7wiq77"),m(e,"draggable",t=!!s[2]),K(e,"over",s[3]),K(e,"active",s[2]&&s[5]===s[2]),K(e,"in-folder",!!me(s[2]))},m(a,o){L(a,e,o),w&&w.m(e,null),h(e,l),E&&E.m(e,null),L(a,i,o),g&&g.m(a,o),L(a,_,o),f=!0,c||(u=[T(e,"dragstart",s[7]),T(e,"drop",s[8]),T(e,"dragover",s[9]),T(e,"dragleave",s[14]),T(e,"click",s[13])],c=!0)},p(a,[o]){s=a,w&&w.p&&(!f||o&262144)&&Ne(w,d,s,s[18],f?Fe(d,s[18],o,null):qe(s[18]),null),s[2]?E?E.p(s,o):(E=Ze(s),E.c(),E.m(e,null)):E&&(E.d(1),E=null),(!f||o&4&&t!==(t=!!s[2]))&&m(e,"draggable",t),(!f||o&8)&&K(e,"over",s[3]),(!f||o&36)&&K(e,"active",s[2]&&s[5]===s[2]),(!f||o&4)&&K(e,"in-folder",!!me(s[2])),s[4]?g?(g.p(s,o),o&16&&O(g,1)):(g=Je(s),g.c(),O(g,1),g.m(_.parentNode,_)):g&&(se(),U(g,1,1,()=>{g=null}),re())},i(a){f||(O(w,a),te(()=>{n&&n.end(1),r=Ee(e,_e,{x:s[1]==="left"?-100:100,duration:500,delay:s[6]?0:s[0]}),r.start()}),O(g),f=!0)},o(a){U(w,a),r&&r.invalidate(),n=ye(e,ge,{}),U(g),f=!1},d(a){a&&v(e),w&&w.d(a),E&&E.d(),a&&n&&n.end(),a&&v(i),g&&g.d(a),a&&v(_),c=!1,ae(u)}}}function al(s,e,l){let t,r;ee(s,Le,V=>l(5,t=V)),ee(s,$e,V=>l(6,r=V));let{$$slots:n={},$$scope:i}=e,{delay:_=0}=e,{direction:f="left"}=e,{data:c=void 0}=e,u=!1,d=!1;const w=V=>{if(!c){V.preventDefault();return}he.set(c)},E=()=>{var j;const V=oe(he);let q;if(c&&(q=me(c)),(j=me(V))==null||j.remove(V),q){q.add(V),l(3,u=!1),bt();return}V instanceof pe&&(oe(Pe)?kt(V):$t(V),V.parent=void 0),l(3,u=!1)},g=V=>{const q=oe(he);c!==q&&(V.preventDefault(),l(3,u=!0))},a=V=>{V.preventDefault(),V.stopPropagation(),wt(c)},o=V=>{V.preventDefault(),V.stopPropagation(),l(4,d=!0)};function p(V){St.call(this,s,V)}const k=()=>l(3,u=!1),b=()=>l(4,d=!1),F=()=>Ft(c),N=()=>l(4,d=!1);return s.$$set=V=>{"delay"in V&&l(0,_=V.delay),"direction"in V&&l(1,f=V.direction),"data"in V&&l(2,c=V.data),"$$scope"in V&&l(18,i=V.$$scope)},[_,f,c,u,d,t,r,w,E,g,a,o,n,p,k,b,F,N,i]}class ke extends ie{constructor(e){super(),ce(this,e,al,rl,fe,{delay:0,direction:1,data:2})}}const Xe=(s,{delay:e=0,duration:l=500})=>{const r=getComputedStyle(s).width.match(/([\d.]+)(.*)/);if(!r)return{delay:e,duration:l,css:i=>`max-width: unset; width: ${i*100}%;`};const n=Number.parseFloat(r[1]);return{delay:e,duration:l,css:i=>`max-width: unset; width: ${i*n}${r[2]}; min-width: unset;`}};de.disable_scroll_handling;const we=de.goto;de.invalidate;de.invalidateAll;de.preload_data;de.preload_code;de.before_navigate;de.after_navigate;function Ke(s,e,l){const t=s.slice();return t[16]=e[l],t[18]=l,t}function Qe(s){let e,l=[],t=new Map,r,n,i=s[0].data;const _=f=>f[16].key;for(let f=0;f<i.length;f+=1){let c=Ke(s,i,f),u=_(c);t.set(u,l[f]=xe(u,c))}return{c(){e=y("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=D(f,"DIV",{class:!0});var c=I(e);for(let u=0;u<l.length;u+=1)l[u].l(c);c.forEach(v),this.h()},h(){m(e,"class","folder-content svelte-h6frfb")},m(f,c){L(f,e,c);for(let u=0;u<l.length;u+=1)l[u].m(e,null);n=!0},p(f,c){c&1&&(i=f[0].data,se(),l=Ae(l,c,_,1,f,i,t,e,Te,xe,null,Ke),re())},i(f){if(!n){for(let c=0;c<i.length;c+=1)O(l[c]);te(()=>{r||(r=ue(e,ge,{},!0)),r.run(1)}),n=!0}},o(f){for(let c=0;c<l.length;c+=1)U(l[c]);r||(r=ue(e,ge,{},!1)),r.run(0),n=!1},d(f){f&&v(e);for(let c=0;c<l.length;c+=1)l[c].d();f&&r&&r.end()}}}function nl(s){let e,l;function t(){return s[15](s[16])}return e=new ke({props:{data:s[16],$$slots:{default:[il]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){W(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,n){J(e,r,n),l=!0},p(r,n){s=r;const i={};n&1&&(i.data=s[16]),n&524289&&(i.$$scope={dirty:n,ctx:s}),e.$set(i)},i(r){l||(O(e.$$.fragment,r),l=!0)},o(r){U(e.$$.fragment,r),l=!1},d(r){X(e,r)}}}function ol(s){let e,l;return e=new Me({props:{folder:s[16]}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.folder=t[16]),e.$set(n)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function il(s){let e=s[16].name+"",l,t;return{c(){l=H(e),t=M()},l(r){l=z(r,e),t=B(r)},m(r,n){L(r,l,n),L(r,t,n)},p(r,n){n&1&&e!==(e=r[16].name+"")&&be(l,e)},d(r){r&&v(l),r&&v(t)}}}function xe(s,e){let l,t,r,n,i;const _=[ol,nl],f=[];function c(u,d){return u[16].isFolder?0:1}return t=c(e),r=f[t]=_[t](e),{key:s,first:null,c(){l=Q(),r.c(),n=Q(),this.h()},l(u){l=Q(),r.l(u),n=Q(),this.h()},h(){this.first=l},m(u,d){L(u,l,d),f[t].m(u,d),L(u,n,d),i=!0},p(u,d){e=u;let w=t;t=c(e),t===w?f[t].p(e,d):(se(),U(f[w],1,1,()=>{f[w]=null}),re(),r=f[t],r?r.p(e,d):(r=f[t]=_[t](e),r.c()),O(r,1),r.m(n.parentNode,n))},i(u){i||(O(r),i=!0)},o(u){U(r),i=!1},d(u){u&&v(l),f[t].d(u),u&&v(n)}}}function cl(s){let e,l,t,r,n,i,_,f,c,u,d,w,E,g,a,o,p,k,b,F,N,V,q,j,S=s[0].open&&Qe(s);return{c(){e=y("div"),l=y("span"),t=H("folder"),r=M(),n=y("span"),i=M(),_=y("div"),f=y("span"),c=H("add"),u=M(),d=y("div"),w=y("span"),E=H("edit"),g=M(),a=y("div"),o=y("span"),p=H("delete"),F=M(),S&&S.c(),N=Q(),this.h()},l(C){e=D(C,"DIV",{class:!0,draggable:!0});var P=I(e);l=D(P,"SPAN",{class:!0});var $=I(l);t=z($,"folder"),$.forEach(v),r=B(P),n=D(P,"SPAN",{class:!0,contenteditable:!0}),I(n).forEach(v),i=B(P),_=D(P,"DIV",{class:!0,title:!0});var R=I(_);f=D(R,"SPAN",{class:!0});var G=I(f);c=z(G,"add"),G.forEach(v),R.forEach(v),u=B(P),d=D(P,"DIV",{class:!0,title:!0});var A=I(d);w=D(A,"SPAN",{class:!0});var Y=I(w);E=z(Y,"edit"),Y.forEach(v),A.forEach(v),g=B(P),a=D(P,"DIV",{class:!0,title:!0});var x=I(a);o=D(x,"SPAN",{class:!0});var le=I(o);p=z(le,"delete"),le.forEach(v),x.forEach(v),P.forEach(v),F=B(C),S&&S.l(C),N=Q(),this.h()},h(){m(l,"class","material-symbols-rounded folder-icon svelte-h6frfb"),m(n,"class","name svelte-h6frfb"),m(n,"contenteditable","false"),s[0].name===void 0&&te(()=>s[12].call(n)),m(f,"class","material-symbols-rounded svelte-h6frfb"),m(_,"class","icon add svelte-h6frfb"),m(_,"title","Add Folder"),m(w,"class","material-symbols-rounded svelte-h6frfb"),m(d,"class","icon svelte-h6frfb"),m(d,"title","Rename"),m(o,"class","material-symbols-rounded svelte-h6frfb"),m(a,"class","icon delete svelte-h6frfb"),m(a,"title","Delete Folder"),m(e,"class","folder svelte-h6frfb"),m(e,"draggable","true"),K(e,"over",s[2])},m(C,P){L(C,e,P),h(e,l),h(l,t),h(e,r),h(e,n),s[11](n),s[0].name!==void 0&&(n.textContent=s[0].name),h(e,i),h(e,_),h(_,f),h(f,c),h(e,u),h(e,d),h(d,w),h(w,E),h(e,g),h(e,a),h(a,o),h(o,p),L(C,F,P),S&&S.m(C,P),L(C,N,P),V=!0,q||(j=[T(n,"blur",function(){Ct(s[1].contentEditable="false")&&(s[1].contentEditable="false").apply(this,arguments)}),T(n,"input",s[12]),T(n,"keydown",s[5]),T(_,"click",s[7]),T(d,"click",s[4]),T(a,"click",s[6]),T(e,"dragstart",s[8]),T(e,"drop",s[9]),T(e,"dragover",s[10]),T(e,"dragleave",s[13]),T(e,"click",s[14])],q=!0)},p(C,[P]){s=C,P&1&&s[0].name!==n.textContent&&(n.textContent=s[0].name),(!V||P&4)&&K(e,"over",s[2]),s[0].open?S?(S.p(s,P),P&1&&O(S,1)):(S=Qe(s),S.c(),O(S,1),S.m(N.parentNode,N)):S&&(se(),U(S,1,1,()=>{S=null}),re())},i(C){V||(te(()=>{b&&b.end(1),k=Ee(e,ge,{duration:s[3]?0:400}),k.start()}),O(S),V=!0)},o(C){k&&k.invalidate(),b=ye(e,ge,{}),U(S),V=!1},d(C){C&&v(e),s[11](null),C&&b&&b.end(),C&&v(F),S&&S.d(C),C&&v(N),q=!1,ae(j)}}}function fl(s,e,l){let t;ee(s,$e,b=>l(3,t=b));let{folder:r}=e,n,i=b=>{b&&b.stopPropagation(),l(1,n.contentEditable="true",n),n.focus(),setTimeout(()=>{const F=document.createRange();F.setStart(n,0),F.setEnd(n,1);const N=window.getSelection();N.removeAllRanges(),N.addRange(F)},1)};const _=b=>{b.key=="Enter"&&(b.preventDefault(),b.stopPropagation(),n.blur())},f=b=>{b.stopPropagation(),At(r)},c=b=>{b.stopPropagation(),r.createFolder(),l(0,r.open=!0,r),bt()};let u=!1;const d=b=>{he.set(r)},w=()=>{l(2,u=!1);const b=oe(he);if(r.data.includes(b))return;const F=me(b);F?F.remove(b):b instanceof pe&&(Tt(b),b.parent=r),r.add(b)},E=b=>{r!==oe(he)&&(b.preventDefault(),l(2,u=!0))};function g(b){Pt[b?"unshift":"push"](()=>{n=b,l(1,n)})}function a(){r.name=this.textContent,l(0,r)}const o=()=>l(2,u=!1),p=()=>l(0,r.open=!r.open,r),k=b=>we(`/${b.isClass?"class":"skill"}/${b.name}`);return s.$$set=b=>{"folder"in b&&l(0,r=b.folder)},[r,n,u,t,i,_,f,c,d,w,E,g,a,o,p,k]}class Me extends ie{constructor(e){super(),ce(this,e,fl,cl,fe,{folder:0})}}function et(s,e,l){const t=s.slice();return t[34]=e[l],t[30]=l,t}function tt(s,e,l){const t=s.slice();return t[34]=e[l],t}function lt(s,e,l){const t=s.slice();return t[28]=e[l],t[30]=l,t}function st(s,e,l){const t=s.slice();return t[31]=e[l],t}function ul(s){let e,l,t=[],r=new Map,n,i,_,f,c,u=s[8],d=[];for(let a=0;a<u.length;a+=1)d[a]=rt(tt(s,u,a));const w=a=>U(d[a],1,1,()=>{d[a]=null});let E=s[9].filter(s[17]);const g=a=>a[34].key;for(let a=0;a<E.length;a+=1){let o=et(s,E,a),p=g(o);r.set(p,t[a]=at(p,o))}return i=new ke({props:{delay:200+100*(s[9].length+1),direction:"right",$$slots:{default:[hl]},$$scope:{ctx:s}}}),{c(){e=y("div");for(let a=0;a<d.length;a+=1)d[a].c();l=M();for(let a=0;a<t.length;a+=1)t[a].c();n=M(),W(i.$$.fragment),this.h()},l(a){e=D(a,"DIV",{class:!0});var o=I(e);for(let p=0;p<d.length;p+=1)d[p].l(o);l=B(o);for(let p=0;p<t.length;p+=1)t[p].l(o);n=B(o),Z(i.$$.fragment,o),o.forEach(v),this.h()},h(){m(e,"class","items svelte-1uuvaqx")},m(a,o){L(a,e,o);for(let p=0;p<d.length;p+=1)d[p].m(e,null);h(e,l);for(let p=0;p<t.length;p+=1)t[p].m(e,null);h(e,n),J(i,e,null),c=!0},p(a,o){if(o[0]&256){u=a[8];let k;for(k=0;k<u.length;k+=1){const b=tt(a,u,k);d[k]?(d[k].p(b,o),O(d[k],1)):(d[k]=rt(b),d[k].c(),O(d[k],1),d[k].m(e,l))}for(se(),k=u.length;k<d.length;k+=1)w(k);re()}o[0]&514&&(E=a[9].filter(a[17]),se(),t=Ae(t,o,g,1,a,E,r,e,Te,at,n,et),re());const p={};o[0]&512&&(p.delay=200+100*(a[9].length+1)),o[1]&128&&(p.$$scope={dirty:o,ctx:a}),i.$set(p)},i(a){if(!c){for(let o=0;o<u.length;o+=1)O(d[o]);for(let o=0;o<E.length;o+=1)O(t[o]);O(i.$$.fragment,a),te(()=>{f&&f.end(1),_=Ee(e,_e,{x:100}),_.start()}),c=!0}},o(a){d=d.filter(Boolean);for(let o=0;o<d.length;o+=1)U(d[o]);for(let o=0;o<t.length;o+=1)U(t[o]);U(i.$$.fragment,a),_&&_.invalidate(),f=ye(e,_e,{x:100}),c=!1},d(a){a&&v(e),Oe(d,a);for(let o=0;o<t.length;o+=1)t[o].d();X(i),a&&f&&f.end()}}}function dl(s){let e,l,t=[],r=new Map,n,i,_,f,c,u=s[6],d=[];for(let a=0;a<u.length;a+=1)d[a]=nt(st(s,u,a));const w=a=>U(d[a],1,1,()=>{d[a]=null});let E=s[7].filter(s[13]);const g=a=>a[28].key;for(let a=0;a<E.length;a+=1){let o=lt(s,E,a),p=g(o);r.set(p,t[a]=ot(p,o))}return i=new ke({props:{delay:200+100*(s[7].length+1),$$slots:{default:[pl]},$$scope:{ctx:s}}}),{c(){e=y("div");for(let a=0;a<d.length;a+=1)d[a].c();l=M();for(let a=0;a<t.length;a+=1)t[a].c();n=M(),W(i.$$.fragment),this.h()},l(a){e=D(a,"DIV",{class:!0});var o=I(e);for(let p=0;p<d.length;p+=1)d[p].l(o);l=B(o);for(let p=0;p<t.length;p+=1)t[p].l(o);n=B(o),Z(i.$$.fragment,o),o.forEach(v),this.h()},h(){m(e,"class","items svelte-1uuvaqx")},m(a,o){L(a,e,o);for(let p=0;p<d.length;p+=1)d[p].m(e,null);h(e,l);for(let p=0;p<t.length;p+=1)t[p].m(e,null);h(e,n),J(i,e,null),c=!0},p(a,o){if(o[0]&64){u=a[6];let k;for(k=0;k<u.length;k+=1){const b=st(a,u,k);d[k]?(d[k].p(b,o),O(d[k],1)):(d[k]=nt(b),d[k].c(),O(d[k],1),d[k].m(e,l))}for(se(),k=u.length;k<d.length;k+=1)w(k);re()}o[0]&129&&(E=a[7].filter(a[13]),se(),t=Ae(t,o,g,1,a,E,r,e,Te,ot,n,lt),re());const p={};o[0]&128&&(p.delay=200+100*(a[7].length+1)),o[1]&128&&(p.$$scope={dirty:o,ctx:a}),i.$set(p)},i(a){if(!c){for(let o=0;o<u.length;o+=1)O(d[o]);for(let o=0;o<E.length;o+=1)O(t[o]);O(i.$$.fragment,a),te(()=>{f&&f.end(1),_=Ee(e,_e,{x:-100}),_.start()}),c=!0}},o(a){d=d.filter(Boolean);for(let o=0;o<d.length;o+=1)U(d[o]);for(let o=0;o<t.length;o+=1)U(t[o]);U(i.$$.fragment,a),_&&_.invalidate(),f=ye(e,_e,{x:-100}),c=!1},d(a){a&&v(e),Oe(d,a);for(let o=0;o<t.length;o+=1)t[o].d();X(i),a&&f&&f.end()}}}function rt(s){let e,l;return e=new Me({props:{folder:s[34]}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const n={};r[0]&256&&(n.folder=t[34]),e.$set(n)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function _l(s){let e=s[34].name+"",l;return{c(){l=H(e)},l(t){l=z(t,e)},m(t,r){L(t,l,r)},p(t,r){r[0]&514&&e!==(e=t[34].name+"")&&be(l,e)},d(t){t&&v(l)}}}function at(s,e){let l,t,r;function n(){return e[18](e[34])}return t=new ke({props:{data:e[34],direction:"right",delay:200+100*e[30],$$slots:{default:[_l]},$$scope:{ctx:e}}}),t.$on("click",n),{key:s,first:null,c(){l=Q(),W(t.$$.fragment),this.h()},l(i){l=Q(),Z(t.$$.fragment,i),this.h()},h(){this.first=l},m(i,_){L(i,l,_),J(t,i,_),r=!0},p(i,_){e=i;const f={};_[0]&514&&(f.data=e[34]),_[0]&514&&(f.delay=200+100*e[30]),_[0]&514|_[1]&128&&(f.$$scope={dirty:_,ctx:e}),t.$set(f)},i(i){r||(O(t.$$.fragment,i),r=!0)},o(i){U(t.$$.fragment,i),r=!1},d(i){i&&v(l),X(t,i)}}}function hl(s){let e,l,t,r,n,i,_,f;return{c(){e=y("div"),l=y("span"),t=H("New Skill"),r=M(),n=y("span"),i=H("New Folder"),this.h()},l(c){e=D(c,"DIV",{class:!0});var u=I(e);l=D(u,"SPAN",{class:!0});var d=I(l);t=z(d,"New Skill"),d.forEach(v),r=B(u),n=D(u,"SPAN",{class:!0});var w=I(n);i=z(w,"New Folder"),w.forEach(v),u.forEach(v),this.h()},h(){m(l,"class","svelte-1uuvaqx"),m(n,"class","new-folder svelte-1uuvaqx"),m(e,"class","new svelte-1uuvaqx")},m(c,u){L(c,e,u),h(e,l),h(l,t),h(e,r),h(e,n),h(n,i),_||(f=[T(l,"click",s[19]),T(n,"click",s[20])],_=!0)},p:ne,d(c){c&&v(e),_=!1,ae(f)}}}function nt(s){let e,l;return e=new Me({props:{folder:s[31]}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const n={};r[0]&64&&(n.folder=t[31]),e.$set(n)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function vl(s){let e=s[28].name+"",l;return{c(){l=H(e)},l(t){l=z(t,e)},m(t,r){L(t,l,r)},p(t,r){r[0]&129&&e!==(e=t[28].name+"")&&be(l,e)},d(t){t&&v(l)}}}function ot(s,e){let l,t,r;function n(){return e[14](e[28])}return t=new ke({props:{data:e[28],delay:200+100*e[30],$$slots:{default:[vl]},$$scope:{ctx:e}}}),t.$on("click",n),{key:s,first:null,c(){l=Q(),W(t.$$.fragment),this.h()},l(i){l=Q(),Z(t.$$.fragment,i),this.h()},h(){this.first=l},m(i,_){L(i,l,_),J(t,i,_),r=!0},p(i,_){e=i;const f={};_[0]&129&&(f.data=e[28]),_[0]&129&&(f.delay=200+100*e[30]),_[0]&129|_[1]&128&&(f.$$scope={dirty:_,ctx:e}),t.$set(f)},i(i){r||(O(t.$$.fragment,i),r=!0)},o(i){U(t.$$.fragment,i),r=!1},d(i){i&&v(l),X(t,i)}}}function pl(s){let e,l,t,r,n,i,_,f;return{c(){e=y("div"),l=y("span"),t=H("New Class"),r=M(),n=y("span"),i=H("New Folder"),this.h()},l(c){e=D(c,"DIV",{class:!0});var u=I(e);l=D(u,"SPAN",{class:!0});var d=I(l);t=z(d,"New Class"),d.forEach(v),r=B(u),n=D(u,"SPAN",{class:!0});var w=I(n);i=z(w,"New Folder"),w.forEach(v),u.forEach(v),this.h()},h(){m(l,"class","svelte-1uuvaqx"),m(n,"class","new-folder svelte-1uuvaqx"),m(e,"class","new svelte-1uuvaqx")},m(c,u){L(c,e,u),h(e,l),h(l,t),h(e,r),h(e,n),h(n,i),_||(f=[T(l,"click",s[15]),T(n,"click",s[16])],_=!0)},p:ne,d(c){c&&v(e),_=!1,ae(f)}}}function ml(s){let e=!1,l=()=>{e=!1},t,r,n,i,_,f,c,u,d,w,E,g,a,o,p,k=`calc(${s[3]}px - 6rem + min(3.5rem, ${s[4]}px))`,b,F,N;te(s[11]),te(s[12]);const V=[dl,ul],q=[];function j(S,C){return S[5]?0:1}return a=j(s),o=q[a]=V[a](s),{c(){r=y("div"),n=y("div"),i=y("div"),_=y("div"),f=H("Classes"),c=M(),u=y("div"),d=H("Skills"),w=M(),E=y("hr"),g=M(),o.c(),this.h()},l(S){r=D(S,"DIV",{id:!0,class:!0});var C=I(r);n=D(C,"DIV",{class:!0});var P=I(n);i=D(P,"DIV",{id:!0,class:!0});var $=I(i);_=D($,"DIV",{class:!0});var R=I(_);f=z(R,"Classes"),R.forEach(v),c=B($),u=D($,"DIV",{class:!0});var G=I(u);d=z(G,"Skills"),G.forEach(v),$.forEach(v),w=B(P),E=D(P,"HR",{class:!0}),P.forEach(v),g=B(C),o.l(C),C.forEach(v),this.h()},h(){m(_,"class","classes svelte-1uuvaqx"),m(u,"class","skills svelte-1uuvaqx"),m(i,"id","type-selector"),m(i,"class","svelte-1uuvaqx"),K(i,"c-selected",s[5]),m(E,"class","svelte-1uuvaqx"),m(n,"class","type-wrap svelte-1uuvaqx"),m(r,"id","sidebar"),m(r,"class","svelte-1uuvaqx"),He(r,"--height",k)},m(S,C){L(S,r,C),h(r,n),h(n,i),h(i,_),h(_,f),h(i,c),h(i,u),h(u,d),h(n,w),h(n,E),h(r,g),q[a].m(r,null),b=!0,F||(N=[T(window,"resize",s[11]),T(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),s[12]()}),T(_,"click",Ot),T(u,"click",Lt),T(r,"introend",s[21]),T(r,"outroend",s[22]),ht(Et.call(null,r)),T(r,"outclick",s[10])],F=!0)},p(S,C){C[0]&16&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,S[4]),t=setTimeout(l,100)),(!b||C[0]&32)&&K(i,"c-selected",S[5]);let P=a;a=j(S),a===P?q[a].p(S,C):(se(),U(q[P],1,1,()=>{q[P]=null}),re(),o=q[a],o?o.p(S,C):(o=q[a]=V[a](S),o.c()),O(o,1),o.m(r,null)),C[0]&24&&k!==(k=`calc(${S[3]}px - 6rem + min(3.5rem, ${S[4]}px))`)&&He(r,"--height",k)},i(S){b||(O(o),te(()=>{p||(p=ue(r,Xe,{},!0)),p.run(1)}),b=!0)},o(S){U(o),p||(p=ue(r,Xe,{},!1)),p.run(0),b=!1},d(S){S&&v(r),q[a].d(),S&&p&&p.end(),F=!1,ae(N)}}}function gl(s,e,l){let t,r,n,i,_;ee(s,Pe,A=>l(5,t=A)),ee(s,Se,A=>l(6,r=A)),ee(s,Mt,A=>l(7,n=A)),ee(s,Ce,A=>l(8,i=A)),ee(s,Bt,A=>l(9,_=A));let f=[],c,u,d=[],w=[],E,g,a;const o=(A,Y)=>{A instanceof Array&&A.forEach(x=>o(x,Y)),A instanceof pe?o(A.data,Y):(A instanceof Ht||A instanceof zt)&&Y.push(A)},p=A=>{oe(Pe)?(f=A||oe(Se),l(0,d=[]),o(f,d)):(f=A||oe(Ce),l(1,w=[]),o(f,w))};vt(()=>{c=Se.subscribe(p),u=Ce.subscribe(p)}),Vt(p),pt(()=>{c&&c(),u&&u()});const k=A=>{E<500&&(A.detail.stopPropagation(),Yt())};function b(){l(2,E=window.innerWidth),l(3,g=window.innerHeight)}function F(){l(4,a=window.pageYOffset)}return[d,w,E,g,a,t,r,n,i,_,k,b,F,A=>!d.includes(A),A=>we(`/class/${A.name}`),()=>Rt(),()=>kt(new pe),A=>!w.includes(A),A=>we(`/skill/${A.name}`),()=>Ut(),()=>$t(new pe),()=>$e.set(!0),()=>$e.set(!1)]}class bl extends ie{constructor(e){super(),ce(this,e,gl,ml,fe,{},null,[-1,-1])}}function it(s,e,l){const t=s.slice();return t[6]=e[l],t}function ct(s){let e,l=s[6]+"",t;return{c(){e=y("option"),t=H(l),this.h()},l(r){e=D(r,"OPTION",{});var n=I(e);t=z(n,l),n.forEach(v),this.h()},h(){e.__value=s[6].substring(2),e.value=e.__value},m(r,n){L(r,e,n),h(e,t)},p:ne,d(r){r&&v(e)}}}function ft(s){let e,l,t=s[1]==="class"?"Class":"Skill",r,n,i,_;return{c(){e=y("div"),l=H("Share "),r=H(t),this.h()},l(f){e=D(f,"DIV",{class:!0,title:!0});var c=I(e);l=z(c,"Share "),r=z(c,t),c.forEach(v),this.h()},h(){m(e,"class","chip share svelte-xfvurq"),m(e,"title",n="Share "+(s[1]==="class"?"Class":"Skill"))},m(f,c){L(f,e,c),h(e,l),h(e,r),i||(_=T(e,"click",s[2]),i=!0)},p(f,c){c&2&&t!==(t=f[1]==="class"?"Class":"Skill")&&be(r,t),c&2&&n!==(n="Share "+(f[1]==="class"?"Class":"Skill"))&&m(e,"title",n)},d(f){f&&v(e),i=!1,_()}}}function kl(s){let e,l,t,r,n,i,_,f,c,u,d,w,E,g,a,o=Ge,p=[];for(let b=0;b<o.length;b+=1)p[b]=ct(it(s,o,b));let k=s[1]&&ft(s);return{c(){e=y("nav"),l=y("div"),t=y("span"),r=H("menu"),n=M(),i=y("label"),_=H(`Server
    `),f=y("select");for(let b=0;b<p.length;b+=1)p[b].c();c=M(),u=y("div"),d=y("div"),w=H("Import"),E=M(),k&&k.c(),this.h()},l(b){e=D(b,"NAV",{class:!0});var F=I(e);l=D(F,"DIV",{class:!0});var N=I(l);t=D(N,"SPAN",{class:!0});var V=I(t);r=z(V,"menu"),V.forEach(v),N.forEach(v),n=B(F),i=D(F,"LABEL",{class:!0});var q=I(i);_=z(q,`Server
    `),f=D(q,"SELECT",{class:!0});var j=I(f);for(let P=0;P<p.length;P+=1)p[P].l(j);j.forEach(v),q.forEach(v),c=B(F),u=D(F,"DIV",{class:!0});var S=I(u);d=D(S,"DIV",{class:!0,title:!0});var C=I(d);w=z(C,"Import"),C.forEach(v),E=B(S),k&&k.l(S),S.forEach(v),F.forEach(v),this.h()},h(){m(t,"class","material-symbols-rounded"),m(l,"class","chip hamburger svelte-xfvurq"),m(f,"class","svelte-xfvurq"),s[0]===void 0&&te(()=>s[5].call(f)),m(i,"class","server svelte-xfvurq"),m(d,"class","chip import svelte-xfvurq"),m(d,"title","Import Data"),m(u,"class","transfer svelte-xfvurq"),m(e,"class","svelte-xfvurq")},m(b,F){L(b,e,F),h(e,l),h(l,t),h(t,r),h(e,n),h(e,i),h(i,_),h(i,f);for(let N=0;N<p.length;N+=1)p[N].m(f,null);ze(f,s[0]),h(e,c),h(e,u),h(u,d),h(d,w),h(u,E),k&&k.m(u,null),g||(a=[T(l,"click",s[4]),T(f,"change",s[5]),T(d,"click",s[3])],g=!0)},p(b,[F]){if(F&0){o=Ge;let N;for(N=0;N<o.length;N+=1){const V=it(b,o,N);p[N]?p[N].p(V,F):(p[N]=ct(V),p[N].c(),p[N].m(f,null))}for(;N<p.length;N+=1)p[N].d(1);p.length=o.length}F&1&&ze(f,b[0]),b[1]?k?k.p(b,F):(k=ft(b),k.c(),k.m(u,null)):k&&(k.d(1),k=null)},i:ne,o:ne,d(b){b&&v(e),Oe(p,b),k&&k.d(),g=!1,ae(a)}}}function $l(s,e,l){let t,r;ee(s,We,c=>l(0,t=c)),ee(s,jt,c=>l(1,r=c));const n=()=>{let c=oe(Le);if(!c)return;let u=c.serializeYaml().toString();Jt(u).then(d=>{var w;(w=navigator==null?void 0:navigator.clipboard)==null||w.writeText(d),window.open(d)}).catch(d=>console.error(d))},i=()=>{mt(!0)},_=c=>{c.stopPropagation(),Gt()};function f(){t=Nt(this),We.set(t)}return[t,r,n,i,_,f]}class wl extends ie{constructor(e){super(),ce(this,e,$l,kl,fe,{})}}function El(s){let e,l,t;return{c(){e=De("svg"),l=De("g"),t=De("path"),this.h()},l(r){e=Ie(r,"svg",{viewBox:!0,class:!0});var n=I(e);l=Ie(n,"g",{fill:!0});var i=I(l);t=Ie(i,"path",{d:!0}),I(t).forEach(v),i.forEach(v),n.forEach(v),this.h()},h(){m(t,"d","M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"),m(l,"fill","currentColor"),m(e,"viewBox","0 0 30 34"),m(e,"class","logo-3oeRIY svelte-evyltu")},m(r,n){L(r,e,n),h(e,l),h(l,t)},p:ne,i:ne,o:ne,d(r){r&&v(e)}}}class yl extends ie{constructor(e){super(),ce(this,e,null,El,fe,{})}}function Dl(s){let e,l,t,r,n,i,_,f,c,u,d,w,E,g,a,o,p,k,b,F,N,V,q,j,S,C;return d=new yl({}),{c(){e=y("div"),l=y("div"),t=y("h1"),r=H("ProSkillAPI"),n=M(),i=y("h2"),_=H("Dynamic Editor"),f=M(),c=y("div"),u=y("a"),W(d.$$.fragment),w=M(),E=y("a"),g=y("img"),o=M(),p=y("a"),k=y("img"),F=M(),N=y("a"),V=y("span"),q=H("help"),this.h()},l(P){e=D(P,"DIV",{id:!0,class:!0});var $=I(e);l=D($,"DIV",{class:!0});var R=I(l);t=D(R,"H1",{class:!0});var G=I(t);r=z(G,"ProSkillAPI"),G.forEach(v),n=B(R),i=D(R,"H2",{class:!0});var A=I(i);_=z(A,"Dynamic Editor"),A.forEach(v),R.forEach(v),f=B($),c=D($,"DIV",{class:!0});var Y=I(c);u=D(Y,"A",{class:!0,href:!0,title:!0});var x=I(u);Z(d.$$.fragment,x),x.forEach(v),w=B(Y),E=D(Y,"A",{class:!0,href:!0,title:!0});var le=I(E);g=D(le,"IMG",{src:!0,class:!0}),le.forEach(v),o=B(Y),p=D(Y,"A",{class:!0,href:!0,title:!0});var ve=I(p);k=D(ve,"IMG",{src:!0,class:!0}),ve.forEach(v),F=B(Y),N=D(Y,"A",{class:!0,href:!0,title:!0});var Be=I(N);V=D(Be,"SPAN",{class:!0});var Re=I(V);q=z(Re,"help"),Re.forEach(v),Be.forEach(v),Y.forEach(v),$.forEach(v),this.h()},h(){m(t,"class","accent svelte-n9c92r"),m(i,"class","svelte-n9c92r"),m(l,"class","home svelte-n9c92r"),m(u,"class","social discord svelte-n9c92r"),m(u,"href","https://discord.gg/6UzkTe6RvW"),m(u,"title","Join our Discord"),Ye(g.src,a="/github-mark-white.svg")||m(g,"src",a),m(g,"class","svelte-n9c92r"),m(E,"class","social github svelte-n9c92r"),m(E,"href","https://github.com/promcteam/proskillapi"),m(E,"title","Check out our GitHub"),Ye(k.src,b="/spigot.png")||m(k,"src",b),m(k,"class","svelte-n9c92r"),m(p,"class","social spigot svelte-n9c92r"),m(p,"href","https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/"),m(p,"title","Check out our resource on Spigot"),m(V,"class","material-symbols-rounded"),m(N,"class","social wiki svelte-n9c92r"),m(N,"href","https://promcteam.com/wiki/index.php?title=Proskillapi:Proskillapi"),m(N,"title","Wiki"),m(c,"class","socials svelte-n9c92r"),m(e,"id","header"),m(e,"class","svelte-n9c92r")},m(P,$){L(P,e,$),h(e,l),h(l,t),h(t,r),h(l,n),h(l,i),h(i,_),h(e,f),h(e,c),h(c,u),J(d,u,null),h(c,w),h(c,E),h(E,g),h(c,o),h(c,p),h(p,k),h(c,F),h(c,N),h(N,V),h(V,q),j=!0,S||(C=T(l,"click",s[0]),S=!0)},p:ne,i(P){j||(O(d.$$.fragment,P),j=!0)},o(P){U(d.$$.fragment,P),j=!1},d(P){P&&v(e),X(d),S=!1,C()}}}function Il(s){return[()=>we("/")]}class Sl extends ie{constructor(e){super(),ce(this,e,Il,Dl,fe,{})}}function ut(s){let e,l;return e=new bl({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function dt(s){let e,l;return e=new ll({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function _t(s){let e,l,t,r;return{c(){e=y("div"),l=H("Drop to Import"),this.h()},l(n){e=D(n,"DIV",{class:!0});var i=I(e);l=z(i,"Drop to Import"),i.forEach(v),this.h()},h(){m(e,"class","dragging svelte-1u6mxby")},m(n,i){L(n,e,i),h(e,l),t||(r=T(e,"dragleave",s[5]),t=!0)},p:ne,d(n){n&&v(e),t=!1,r()}}}function Cl(s){let e,l,t,r,n,i,_,f,c,u,d,w,E,g,a,o,p,k,b,F,N,V;e=new Sl({}),t=new wl({});let q=s[1]&&ut();const j=s[7].default,S=Ve(j,s,s[6],null);let C=s[3]&&dt(),P=s[0]&&_t(s);return{c(){W(e.$$.fragment),l=M(),W(t.$$.fragment),r=M(),q&&q.c(),n=M(),i=y("div"),_=y("div"),S&&S.c(),f=M(),c=y("div"),u=y("div"),d=y("span"),w=H("cloud_download"),E=M(),g=y("div"),a=y("span"),o=H("save"),p=M(),C&&C.c(),k=M(),P&&P.c(),b=Q(),this.h()},l($){Z(e.$$.fragment,$),l=B($),Z(t.$$.fragment,$),r=B($),q&&q.l($),n=B($),i=D($,"DIV",{id:!0,class:!0});var R=I(i);_=D(R,"DIV",{id:!0,class:!0});var G=I(_);S&&S.l(G),G.forEach(v),R.forEach(v),f=B($),c=D($,"DIV",{id:!0,class:!0});var A=I(c);u=D(A,"DIV",{class:!0,title:!0});var Y=I(u);d=D(Y,"SPAN",{class:!0});var x=I(d);w=z(x,"cloud_download"),x.forEach(v),Y.forEach(v),E=B(A),g=D(A,"DIV",{class:!0,title:!0});var le=I(g);a=D(le,"SPAN",{class:!0});var ve=I(a);o=z(ve,"save"),ve.forEach(v),le.forEach(v),A.forEach(v),p=B($),C&&C.l($),k=B($),P&&P.l($),b=Q(),this.h()},h(){m(_,"id","body"),m(_,"class","svelte-1u6mxby"),K(_,"centered",!s[2]),m(i,"id","body-container"),m(i,"class","svelte-1u6mxby"),K(i,"empty",!s[2]),m(d,"class","material-symbols-rounded svelte-1u6mxby"),m(u,"class","button backup svelte-1u6mxby"),m(u,"title","Backup All Data"),m(a,"class","material-symbols-rounded svelte-1u6mxby"),m(g,"class","button save svelte-1u6mxby"),m(g,"title","Save"),m(c,"id","floating-buttons"),m(c,"class","svelte-1u6mxby")},m($,R){J(e,$,R),L($,l,R),J(t,$,R),L($,r,R),q&&q.m($,R),L($,n,R),L($,i,R),h(i,_),S&&S.m(_,null),L($,f,R),L($,c,R),h(c,u),h(u,d),h(d,w),h(c,E),h(c,g),h(g,a),h(a,o),L($,p,R),C&&C.m($,R),L($,k,R),P&&P.m($,R),L($,b,R),F=!0,N||(V=[T(u,"click",s[4]),T(g,"click",s[8])],N=!0)},p($,[R]){$[1]?q?R&2&&O(q,1):(q=ut(),q.c(),O(q,1),q.m(n.parentNode,n)):q&&(se(),U(q,1,1,()=>{q=null}),re()),S&&S.p&&(!F||R&64)&&Ne(S,j,$,$[6],F?Fe(j,$[6],R,null):qe($[6]),null),(!F||R&4)&&K(_,"centered",!$[2]),(!F||R&4)&&K(i,"empty",!$[2]),$[3]?C?R&8&&O(C,1):(C=dt(),C.c(),O(C,1),C.m(k.parentNode,k)):C&&(se(),U(C,1,1,()=>{C=null}),re()),$[0]?P?P.p($,R):(P=_t($),P.c(),P.m(b.parentNode,b)):P&&(P.d(1),P=null)},i($){F||(O(e.$$.fragment,$),O(t.$$.fragment,$),O(q),O(S,$),O(C),F=!0)},o($){U(e.$$.fragment,$),U(t.$$.fragment,$),U(q),U(S,$),U(C),F=!1},d($){X(e,$),$&&v(l),X(t,$),$&&v(r),q&&q.d($),$&&v(n),$&&v(i),S&&S.d($),$&&v(f),$&&v(c),$&&v(p),C&&C.d($),$&&v(k),P&&P.d($),$&&v(b),N=!1,ae(V)}}}function Pl(s,e,l){let t,r,n;ee(s,Wt,g=>l(1,t=g)),ee(s,Le,g=>l(2,r=g)),ee(s,Zt,g=>l(3,n=g));let{$$slots:i={},$$scope:_}=e,f=!1;vt(()=>{document.addEventListener("dragover",u),document.addEventListener("drop",w)}),pt(()=>{document.removeEventListener("dragover",u),document.removeEventListener("drop",w)});const c=()=>{alert("This feature isn't implemented yet")},u=g=>{var a,o,p;((o=(a=g.dataTransfer)==null?void 0:a.types)==null?void 0:o.length)>0&&((p=g.dataTransfer)==null?void 0:p.types[0])=="Files"&&(g.dataTransfer.dropEffect="copy",g.stopPropagation(),g.preventDefault(),l(0,f=!0))},d=g=>{setTimeout(()=>{l(0,f=!1),console.log("left",g.target)},50)},w=g=>{l(0,f=!1);for(let a=0;a<g.dataTransfer.files.length;a++){const o=g.dataTransfer.files[a];o.name.indexOf(".yml")!=-1&&gt(o)}g.stopPropagation(),g.preventDefault()},E=()=>wt();return s.$$set=g=>{"$$scope"in g&&l(6,_=g.$$scope)},[f,t,r,n,c,d,_,i,E]}class Al extends ie{constructor(e){super(),ce(this,e,Pl,Cl,fe,{})}}export{Al as default};