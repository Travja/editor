import{S as ke,i as be,s as $e,C as Re,D as Le,m as S,h as p,n as v,b as j,E as _,B as Ie,k as w,q as L,a as q,w as se,l as y,r as B,c as O,x as re,F as ct,y as ae,G as M,f as A,t as z,z as ne,H as He,I as ve,J as le,u as Oe,K as De,L as ft,M as de,N as he,e as J,g as oe,d as ce,O as ut,P as Ge,Q as W,R as Ye,T as Ze,U as Je,V as Me,W as Rt,X as We,Y as Ke,Z as Lt,o as Bt,_ as Tt,$ as qt}from"../../chunks/index-25cbd9f6.js";import{t as Ut,a as Ht,b as Qe,s as Ot,c as qe,d as Ce,g as Be,u as Mt,P as Se,i as Fe,e as jt,f as zt,h as Gt,r as Yt,j as Zt,k as Jt,l as dt,m as Wt,n as _t,o as Kt,p as Qt,q as Xt,v as xt,w as el,x as tl,y as ll}from"../../chunks/store-196f1e24.js";import{f as ge,a as ht,s as Te}from"../../chunks/index-24e285a4.js";import{j as pe}from"../../chunks/singletons-49e220e3.js";function sl(s){let e,l,t;return{c(){e=Re("svg"),l=Re("g"),t=Re("path"),this.h()},l(r){e=Le(r,"svg",{viewBox:!0,class:!0});var a=S(e);l=Le(a,"g",{fill:!0});var i=S(l);t=Le(i,"path",{d:!0}),S(t).forEach(p),i.forEach(p),a.forEach(p),this.h()},h(){v(t,"d","M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"),v(l,"fill","currentColor"),v(e,"viewBox","0 0 30 34"),v(e,"class","logo-3oeRIY svelte-evyltu")},m(r,a){j(r,e,a),_(e,l),_(l,t)},p:Ie,i:Ie,o:Ie,d(r){r&&p(e)}}}class rl extends ke{constructor(e){super(),be(this,e,null,sl,$e,{})}}const al="https://6jgex7frk0.execute-api.us-west-2.amazonaws.com/default/haste-uploader",nl=s=>typeof s!="string"?Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.')):s===""?Promise.reject(new Error("You cannot send nothing.")):fetch(al,{method:"POST",body:s,headers:{"Content-Type":"text/plain"}}).then(l=>l.json()).then(l=>{if(!l.url)throw l.error?new Error(l.error):new Error("Did not receive hastebin key.");return l.url});function vt(s,e,l){const t=s.slice();return t[4]=e[l],t}function pt(s){let e,l=s[4]+"",t;return{c(){e=w("option"),t=L(l),this.h()},l(r){e=y(r,"OPTION",{});var a=S(e);t=B(a,l),a.forEach(p),this.h()},h(){e.__value=s[4],e.value=e.__value},m(r,a){j(r,e,a),_(e,t)},p:Ie,d(r){r&&p(e)}}}function mt(s){let e,l,t=s[0]=="class"?"Class":"Skill",r,a,i,f;return{c(){e=w("div"),l=L("Share "),r=L(t),this.h()},l(n){e=y(n,"DIV",{class:!0,title:!0});var c=S(e);l=B(c,"Share "),r=B(c,t),c.forEach(p),this.h()},h(){v(e,"class","chip share svelte-103kkm0"),v(e,"title",a="Share "+(s[0]=="class"?"Class":"Skill"))},m(n,c){j(n,e,c),_(e,l),_(e,r),i||(f=M(e,"click",s[2]),i=!0)},p(n,c){c&1&&t!==(t=n[0]=="class"?"Class":"Skill")&&Oe(r,t),c&1&&a!==(a="Share "+(n[0]=="class"?"Class":"Skill"))&&v(e,"title",a)},d(n){n&&p(e),i=!1,f()}}}function il(s){let e,l,t,r,a,i,f,n,c,u,o,k,D,N,d,h,g,b,m,I,E,$,V,F,C,P,H,K,ee,T,Q,X,x,G,ie,Ee,we,me,fe,Ve;o=new rl({});let ue=s[1],Y=[];for(let R=0;R<ue.length;R+=1)Y[R]=pt(vt(s,ue,R));let Z=s[0]&&mt(s);return{c(){e=w("div"),l=w("div"),t=w("h1"),r=L("ProSkillAPI"),a=q(),i=w("h2"),f=L("Dynamic Editor"),n=q(),c=w("div"),u=w("a"),se(o.$$.fragment),k=q(),D=w("a"),N=w("img"),h=q(),g=w("a"),b=w("img"),I=q(),E=w("a"),$=w("span"),V=L("help"),F=q(),C=w("nav"),P=w("div"),H=w("span"),K=L("menu"),ee=q(),T=w("label"),Q=L(`Server
    `),X=w("select");for(let R=0;R<Y.length;R+=1)Y[R].c();x=q(),G=w("div"),ie=w("div"),Ee=L("Import"),we=q(),Z&&Z.c(),this.h()},l(R){e=y(R,"DIV",{id:!0,class:!0});var te=S(e);l=y(te,"DIV",{class:!0});var U=S(l);t=y(U,"H1",{class:!0});var Pe=S(t);r=B(Pe,"ProSkillAPI"),Pe.forEach(p),a=O(U),i=y(U,"H2",{class:!0});var xe=S(i);f=B(xe,"Dynamic Editor"),xe.forEach(p),U.forEach(p),n=O(te),c=y(te,"DIV",{class:!0});var _e=S(c);u=y(_e,"A",{class:!0,href:!0,title:!0});var et=S(u);re(o.$$.fragment,et),et.forEach(p),k=O(_e),D=y(_e,"A",{class:!0,href:!0,title:!0});var tt=S(D);N=y(tt,"IMG",{src:!0,class:!0}),tt.forEach(p),h=O(_e),g=y(_e,"A",{class:!0,href:!0,title:!0});var lt=S(g);b=y(lt,"IMG",{src:!0,class:!0}),lt.forEach(p),I=O(_e),E=y(_e,"A",{class:!0,href:!0,title:!0});var st=S(E);$=y(st,"SPAN",{class:!0});var rt=S($);V=B(rt,"help"),rt.forEach(p),st.forEach(p),_e.forEach(p),te.forEach(p),F=O(R),C=y(R,"NAV",{class:!0});var ye=S(C);P=y(ye,"DIV",{class:!0});var at=S(P);H=y(at,"SPAN",{class:!0});var nt=S(H);K=B(nt,"menu"),nt.forEach(p),at.forEach(p),ee=O(ye),T=y(ye,"LABEL",{class:!0});var je=S(T);Q=B(je,`Server
    `),X=y(je,"SELECT",{class:!0});var it=S(X);for(let ze=0;ze<Y.length;ze+=1)Y[ze].l(it);it.forEach(p),je.forEach(p),x=O(ye),G=y(ye,"DIV",{class:!0});var Ae=S(G);ie=y(Ae,"DIV",{class:!0,title:!0});var ot=S(ie);Ee=B(ot,"Import"),ot.forEach(p),we=O(Ae),Z&&Z.l(Ae),Ae.forEach(p),ye.forEach(p),this.h()},h(){v(t,"class","accent svelte-103kkm0"),v(i,"class","svelte-103kkm0"),v(l,"class","home svelte-103kkm0"),v(u,"class","social discord svelte-103kkm0"),v(u,"href","https://discord.gg/6UzkTe6RvW"),v(u,"title","Join our Discord"),ct(N.src,d="/github-mark-white.svg")||v(N,"src",d),v(N,"class","svelte-103kkm0"),v(D,"class","social github svelte-103kkm0"),v(D,"href","https://github.com/promcteam/proskillapi"),v(D,"title","Check out our GitHub"),ct(b.src,m="/spigot.png")||v(b,"src",m),v(b,"class","svelte-103kkm0"),v(g,"class","social spigot svelte-103kkm0"),v(g,"href","https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/"),v(g,"title","Check out our resource on Spigot"),v($,"class","material-symbols-rounded"),v(E,"class","social wiki svelte-103kkm0"),v(E,"href","https://promcteam.com/wiki/index.php?title=Proskillapi:Proskillapi"),v(E,"title","Wiki"),v(c,"class","socials svelte-103kkm0"),v(e,"id","header"),v(e,"class","svelte-103kkm0"),v(H,"class","material-symbols-rounded svelte-103kkm0"),v(P,"class","chip hamburger svelte-103kkm0"),v(X,"class","svelte-103kkm0"),v(T,"class","server svelte-103kkm0"),v(ie,"class","chip import svelte-103kkm0"),v(ie,"title","Import Data"),v(G,"class","socials svelte-103kkm0"),v(C,"class","svelte-103kkm0")},m(R,te){j(R,e,te),_(e,l),_(l,t),_(t,r),_(l,a),_(l,i),_(i,f),_(e,n),_(e,c),_(c,u),ae(o,u,null),_(c,k),_(c,D),_(D,N),_(c,h),_(c,g),_(g,b),_(c,I),_(c,E),_(E,$),_($,V),j(R,F,te),j(R,C,te),_(C,P),_(P,H),_(H,K),_(C,ee),_(C,T),_(T,Q),_(T,X);for(let U=0;U<Y.length;U+=1)Y[U].m(X,null);_(C,x),_(C,G),_(G,ie),_(ie,Ee),_(G,we),Z&&Z.m(G,null),me=!0,fe||(Ve=[M(P,"click",Ut),M(ie,"click",s[3])],fe=!0)},p(R,[te]){if(te&2){ue=R[1];let U;for(U=0;U<ue.length;U+=1){const Pe=vt(R,ue,U);Y[U]?Y[U].p(Pe,te):(Y[U]=pt(Pe),Y[U].c(),Y[U].m(X,null))}for(;U<Y.length;U+=1)Y[U].d(1);Y.length=ue.length}R[0]?Z?Z.p(R,te):(Z=mt(R),Z.c(),Z.m(G,null)):Z&&(Z.d(1),Z=null)},i(R){me||(A(o.$$.fragment,R),me=!0)},o(R){z(o.$$.fragment,R),me=!1},d(R){R&&p(e),ne(o),R&&p(F),R&&p(C),He(Y,R),Z&&Z.d(),fe=!1,ve(Ve)}}}function ol(s,e,l){let t;return le(s,Ht,f=>l(0,t=f)),[t,["1.19","1.18","1.17","1.16"],()=>{let f=De(Qe);if(!f)return;let n=JSON.stringify(f,null,2);nl(n).then(c=>{console.log(c),navigator.clipboard.writeText(c),window.open(c)}).catch(c=>{console.error(c)})},()=>{Ot(!0)}]}class cl extends ke{constructor(e){super(),be(this,e,ol,il,$e,{})}}function fl(s){let e,l,t,r,a,i,f,n,c,u,o,k,D,N,d,h,g,b,m,I,E,$,V,F,C,P,H,K,ee;return{c(){e=w("div"),l=w("div"),t=w("div"),r=w("div"),a=w("div"),i=L("Upload File"),f=q(),n=w("label"),c=L("Select File"),u=q(),o=w("input"),k=q(),D=w("div"),N=w("span"),d=L("OR"),h=q(),g=w("div"),b=w("div"),m=L("Import from URL"),I=q(),E=w("input"),$=q(),V=w("div"),F=L("Import"),this.h()},l(T){e=y(T,"DIV",{class:!0});var Q=S(e);l=y(Q,"DIV",{class:!0});var X=S(l);t=y(X,"DIV",{class:!0});var x=S(t);r=y(x,"DIV",{class:!0});var G=S(r);a=y(G,"DIV",{});var ie=S(a);i=B(ie,"Upload File"),ie.forEach(p),f=O(G),n=y(G,"LABEL",{for:!0,class:!0});var Ee=S(n);c=B(Ee,"Select File"),Ee.forEach(p),u=O(G),o=y(G,"INPUT",{id:!0,type:!0,class:!0}),G.forEach(p),k=O(x),D=y(x,"DIV",{class:!0});var we=S(D);N=y(we,"SPAN",{class:!0});var me=S(N);d=B(me,"OR"),me.forEach(p),we.forEach(p),h=O(x),g=y(x,"DIV",{class:!0});var fe=S(g);b=y(fe,"DIV",{});var Ve=S(b);m=B(Ve,"Import from URL"),Ve.forEach(p),I=O(fe),E=y(fe,"INPUT",{class:!0}),$=O(fe),V=y(fe,"DIV",{class:!0});var ue=S(V);F=B(ue,"Import"),ue.forEach(p),fe.forEach(p),x.forEach(p),X.forEach(p),Q.forEach(p),this.h()},h(){v(n,"for","file-upload"),v(n,"class","button svelte-1nuqi4t"),v(o,"id","file-upload"),v(o,"type","file"),v(o,"class","hidden svelte-1nuqi4t"),v(r,"class","option svelte-1nuqi4t"),v(N,"class","svelte-1nuqi4t"),v(D,"class","or svelte-1nuqi4t"),v(E,"class","svelte-1nuqi4t"),v(V,"class","button svelte-1nuqi4t"),v(g,"class","option svelte-1nuqi4t"),v(t,"class","options svelte-1nuqi4t"),v(l,"class","modal-content svelte-1nuqi4t"),v(e,"class","backdrop svelte-1nuqi4t")},m(T,Q){j(T,e,Q),_(e,l),_(l,t),_(t,r),_(r,a),_(a,i),_(r,f),_(r,n),_(n,c),_(r,u),_(r,o),_(t,k),_(t,D),_(D,N),_(N,d),_(t,h),_(t,g),_(g,b),_(b,m),_(g,I),_(g,E),ft(E,s[0]),_(g,$),_(g,V),_(V,F),H=!0,K||(ee=[M(o,"change",s[4]),M(E,"input",s[5]),M(l,"click",s[3]),M(e,"click",s[2])],K=!0)},p(T,[Q]){Q&1&&E.value!==T[0]&&ft(E,T[0])},i(T){H||(de(()=>{C||(C=he(l,ge,{y:-200},!0)),C.run(1)}),de(()=>{P||(P=he(e,ht,{},!0)),P.run(1)}),H=!0)},o(T){C||(C=he(l,ge,{y:-200},!1)),C.run(0),P||(P=he(e,ht,{},!1)),P.run(0),H=!1},d(T){T&&p(e),T&&C&&C.end(),T&&P&&P.end(),K=!1,ve(ee)}}}function ul(s,e,l){let t,r;const a=()=>{l(0,t=l(1,r=void 0)),Ot(!1)},i=c=>c.stopPropagation();function f(){r=this.value,l(1,r)}function n(){t=this.value,l(0,t)}return[t,r,a,i,f,n]}class dl extends ke{constructor(e){super(),be(this,e,ul,fl,$e,{})}}function _l(s){let e,l,t,r,a,i,f;const n=s[11].default,c=Ge(n,s,s[10],null);let u=s[2]&&gt(s);return{c(){e=w("div"),c&&c.c(),l=q(),u&&u.c(),this.h()},l(o){e=y(o,"DIV",{class:!0,draggable:!0});var k=S(e);c&&c.l(k),l=O(k),u&&u.l(k),k.forEach(p),this.h()},h(){v(e,"class","sidebar-entry svelte-1iyc5f0"),v(e,"draggable",t=!!s[2]),W(e,"over",s[4]),W(e,"active",s[5]==s[2])},m(o,k){j(o,e,k),c&&c.m(e,null),_(e,l),u&&u.m(e,null),a=!0,i||(f=[M(e,"dragstart",s[7]),M(e,"drop",s[8]),M(e,"dragover",s[9]),M(e,"dragleave",s[15]),M(e,"click",s[13])],i=!0)},p(o,k){s=o,c&&c.p&&(!a||k&1024)&&Ye(c,n,s,s[10],a?Je(n,s[10],k,null):Ze(s[10]),null),s[2]?u?u.p(s,k):(u=gt(s),u.c(),u.m(e,null)):u&&(u.d(1),u=null),(!a||k&4&&t!==(t=!!s[2]))&&v(e,"draggable",t),(!a||k&16)&&W(e,"over",s[4]),(!a||k&36)&&W(e,"active",s[5]==s[2])},i(o){a||(A(c,o),r||de(()=>{r=Me(e,ge,{x:s[1]=="left"?-100:100,duration:500,delay:s[6]?0:s[0]}),r.start()}),a=!0)},o(o){z(c,o),a=!1},d(o){o&&p(e),c&&c.d(o),u&&u.d(),i=!1,ve(f)}}}function hl(s){let e,l,t,r,a,i,f;const n=s[11].default,c=Ge(n,s,s[10],null);let u=s[2]&&kt(s);return{c(){e=w("div"),c&&c.c(),l=q(),u&&u.c(),this.h()},l(o){e=y(o,"DIV",{class:!0,draggable:!0});var k=S(e);c&&c.l(k),l=O(k),u&&u.l(k),k.forEach(p),this.h()},h(){v(e,"class","sidebar-entry slide svelte-1iyc5f0"),v(e,"draggable",t=!!s[2]),W(e,"over",s[4]),W(e,"active",s[5]==s[2])},m(o,k){j(o,e,k),c&&c.m(e,null),_(e,l),u&&u.m(e,null),a=!0,i||(f=[M(e,"dragstart",s[7]),M(e,"drop",s[8]),M(e,"dragover",s[9]),M(e,"dragleave",s[14]),M(e,"click",s[12])],i=!0)},p(o,k){c&&c.p&&(!a||k&1024)&&Ye(c,n,o,o[10],a?Je(n,o[10],k,null):Ze(o[10]),null),o[2]?u?u.p(o,k):(u=kt(o),u.c(),u.m(e,null)):u&&(u.d(1),u=null),(!a||k&4&&t!==(t=!!o[2]))&&v(e,"draggable",t),(!a||k&16)&&W(e,"over",o[4]),(!a||k&36)&&W(e,"active",o[5]==o[2])},i(o){a||(A(c,o),r||de(()=>{r=Me(e,Te,{}),r.start()}),a=!0)},o(o){z(c,o),a=!1},d(o){o&&p(e),c&&c.d(o),u&&u.d(),i=!1,ve(f)}}}function gt(s){let e,l,t,r;return{c(){e=w("div"),l=w("span"),t=L("save"),this.h()},l(a){e=y(a,"DIV",{class:!0,title:!0});var i=S(e);l=y(i,"SPAN",{class:!0});var f=S(l);t=B(f,"save"),f.forEach(p),i.forEach(p),this.h()},h(){v(l,"class","material-symbols-rounded svelte-1iyc5f0"),v(e,"class","download svelte-1iyc5f0"),v(e,"title",r="Save "+(s[2].triggers?"Skill":"Class"))},m(a,i){j(a,e,i),_(e,l),_(l,t)},p(a,i){i&4&&r!==(r="Save "+(a[2].triggers?"Skill":"Class"))&&v(e,"title",r)},d(a){a&&p(e)}}}function kt(s){let e,l,t,r;return{c(){e=w("div"),l=w("span"),t=L("save"),this.h()},l(a){e=y(a,"DIV",{class:!0,title:!0});var i=S(e);l=y(i,"SPAN",{class:!0});var f=S(l);t=B(f,"save"),f.forEach(p),i.forEach(p),this.h()},h(){v(l,"class","material-symbols-rounded svelte-1iyc5f0"),v(e,"class","download svelte-1iyc5f0"),v(e,"title",r="Save "+(s[2].triggers?"Skill":"Class"))},m(a,i){j(a,e,i),_(e,l),_(l,t)},p(a,i){i&4&&r!==(r="Save "+(a[2].triggers?"Skill":"Class"))&&v(e,"title",r)},d(a){a&&p(e)}}}function vl(s){let e,l,t,r;const a=[hl,_l],i=[];function f(n,c){return n[3]?0:1}return e=f(s),l=i[e]=a[e](s),{c(){l.c(),t=J()},l(n){l.l(n),t=J()},m(n,c){i[e].m(n,c),j(n,t,c),r=!0},p(n,[c]){let u=e;e=f(n),e===u?i[e].p(n,c):(oe(),z(i[u],1,1,()=>{i[u]=null}),ce(),l=i[e],l?l.p(n,c):(l=i[e]=a[e](n),l.c()),A(l,1),l.m(t.parentNode,t))},i(n){r||(A(l),r=!0)},o(n){z(l),r=!1},d(n){i[e].d(n),n&&p(t)}}}function pl(s,e,l){let t,r;le(s,Qe,m=>l(5,t=m)),le(s,qe,m=>l(6,r=m));let{$$slots:a={},$$scope:i}=e,{delay:f=0}=e,{direction:n="left"}=e,{data:c=void 0}=e,{useSlide:u=!1}=e,o=!1;const k=m=>{if(!c){m.preventDefault();return}Ce.set(c)},D=()=>{var E;const m=De(Ce);let I;if(c&&(I=Be(c)),(E=Be(m))==null||E.remove(m),I){I.add(m),l(4,o=!1),Mt();return}m instanceof Se&&(De(Fe)?jt(m):zt(m),m.parent=void 0),l(4,o=!1)},N=m=>{const I=De(Ce);c!==I&&(m.preventDefault(),l(4,o=!0))};function d(m){ut.call(this,s,m)}function h(m){ut.call(this,s,m)}const g=()=>l(4,o=!1),b=()=>l(4,o=!1);return s.$$set=m=>{"delay"in m&&l(0,f=m.delay),"direction"in m&&l(1,n=m.direction),"data"in m&&l(2,c=m.data),"useSlide"in m&&l(3,u=m.useSlide),"$$scope"in m&&l(10,i=m.$$scope)},[f,n,c,u,o,t,r,k,D,N,i,a,d,h,g,b]}class Ne extends ke{constructor(e){super(),be(this,e,pl,vl,$e,{delay:0,direction:1,data:2,useSlide:3})}}const bt=(s,{delay:e=0,duration:l=500})=>{const r=getComputedStyle(s).width.match(/([\d.]+)(.*)/);if(!r)return{delay:e,duration:l,css:i=>`max-width: unset; width: ${i*100}%;`};const a=Number.parseFloat(r[1]);return{delay:e,duration:l,css:i=>`max-width: unset; width: ${i*a}${r[2]}; min-width: unset;`}};pe.disable_scroll_handling;const Ue=pe.goto;pe.invalidate;pe.invalidateAll;pe.preload_data;pe.preload_code;pe.before_navigate;pe.after_navigate;function $t(s,e,l){const t=s.slice();return t[16]=e[l],t[18]=l,t}function Et(s){let e,l=[],t=new Map,r,a=s[0].data;const i=f=>f[16].key;for(let f=0;f<a.length;f+=1){let n=$t(s,a,f),c=i(n);t.set(c,l[f]=wt(c,n))}return{c(){e=w("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=y(f,"DIV",{class:!0});var n=S(e);for(let c=0;c<l.length;c+=1)l[c].l(n);n.forEach(p),this.h()},h(){v(e,"class","folder-content svelte-14h4zue")},m(f,n){j(f,e,n);for(let c=0;c<l.length;c+=1)l[c].m(e,null);r=!0},p(f,n){n&1&&(a=f[0].data,oe(),l=We(l,n,i,1,f,a,t,e,Ke,wt,null,$t),ce())},i(f){if(!r){for(let n=0;n<a.length;n+=1)A(l[n]);r=!0}},o(f){for(let n=0;n<l.length;n+=1)z(l[n]);r=!1},d(f){f&&p(e);for(let n=0;n<l.length;n+=1)l[n].d()}}}function ml(s){let e,l;function t(){return s[15](s[16])}return e=new Ne({props:{data:s[16],useSlide:!0,$$slots:{default:[kl]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){se(e.$$.fragment)},l(r){re(e.$$.fragment,r)},m(r,a){ae(e,r,a),l=!0},p(r,a){s=r;const i={};a&1&&(i.data=s[16]),a&524289&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(r){l||(A(e.$$.fragment,r),l=!0)},o(r){z(e.$$.fragment,r),l=!1},d(r){ne(e,r)}}}function gl(s){let e,l;return e=new Xe({props:{folder:s[16]}}),{c(){se(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.folder=t[16]),e.$set(a)},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function kl(s){let e=s[16].name+"",l,t;return{c(){l=L(e),t=q()},l(r){l=B(r,e),t=O(r)},m(r,a){j(r,l,a),j(r,t,a)},p(r,a){a&1&&e!==(e=r[16].name+"")&&Oe(l,e)},d(r){r&&p(l),r&&p(t)}}}function wt(s,e){let l,t,r,a,i;const f=[gl,ml],n=[];function c(u,o){return u[16].isFolder?0:1}return t=c(e),r=n[t]=f[t](e),{key:s,first:null,c(){l=J(),r.c(),a=J(),this.h()},l(u){l=J(),r.l(u),a=J(),this.h()},h(){this.first=l},m(u,o){j(u,l,o),n[t].m(u,o),j(u,a,o),i=!0},p(u,o){e=u;let k=t;t=c(e),t===k?n[t].p(e,o):(oe(),z(n[k],1,1,()=>{n[k]=null}),ce(),r=n[t],r?r.p(e,o):(r=n[t]=f[t](e),r.c()),A(r,1),r.m(a.parentNode,a))},i(u){i||(A(r),i=!0)},o(u){z(r),i=!1},d(u){u&&p(l),n[t].d(u),u&&p(a)}}}function bl(s){let e,l,t,r,a,i,f,n,c,u,o,k,D,N,d,h,g,b,m,I,E,$,V,F=s[0].open&&Et(s);return{c(){e=w("div"),l=w("span"),t=L("folder"),r=q(),a=w("span"),i=q(),f=w("div"),n=w("span"),c=L("add"),u=q(),o=w("div"),k=w("span"),D=L("edit"),N=q(),d=w("div"),h=w("span"),g=L("delete"),m=q(),F&&F.c(),I=J(),this.h()},l(C){e=y(C,"DIV",{class:!0,draggable:!0});var P=S(e);l=y(P,"SPAN",{class:!0});var H=S(l);t=B(H,"folder"),H.forEach(p),r=O(P),a=y(P,"SPAN",{class:!0,contenteditable:!0}),S(a).forEach(p),i=O(P),f=y(P,"DIV",{class:!0,title:!0});var K=S(f);n=y(K,"SPAN",{class:!0});var ee=S(n);c=B(ee,"add"),ee.forEach(p),K.forEach(p),u=O(P),o=y(P,"DIV",{class:!0,title:!0});var T=S(o);k=y(T,"SPAN",{class:!0});var Q=S(k);D=B(Q,"edit"),Q.forEach(p),T.forEach(p),N=O(P),d=y(P,"DIV",{class:!0,title:!0});var X=S(d);h=y(X,"SPAN",{class:!0});var x=S(h);g=B(x,"delete"),x.forEach(p),X.forEach(p),P.forEach(p),m=O(C),F&&F.l(C),I=J(),this.h()},h(){v(l,"class","material-symbols-rounded folder-icon svelte-14h4zue"),v(a,"class","name svelte-14h4zue"),v(a,"contenteditable","false"),s[0].name===void 0&&de(()=>s[12].call(a)),v(n,"class","material-symbols-rounded svelte-14h4zue"),v(f,"class","icon add svelte-14h4zue"),v(f,"title","Add Folder"),v(k,"class","material-symbols-rounded svelte-14h4zue"),v(o,"class","icon svelte-14h4zue"),v(o,"title","Rename"),v(h,"class","material-symbols-rounded svelte-14h4zue"),v(d,"class","icon delete svelte-14h4zue"),v(d,"title","Delete Folder"),v(e,"class","folder svelte-14h4zue"),v(e,"draggable","true"),W(e,"over",s[2])},m(C,P){j(C,e,P),_(e,l),_(l,t),_(e,r),_(e,a),s[11](a),s[0].name!==void 0&&(a.textContent=s[0].name),_(e,i),_(e,f),_(f,n),_(n,c),_(e,u),_(e,o),_(o,k),_(k,D),_(e,N),_(e,d),_(d,h),_(h,g),j(C,m,P),F&&F.m(C,P),j(C,I,P),E=!0,$||(V=[M(a,"blur",function(){Rt(s[1].contentEditable="false")&&(s[1].contentEditable="false").apply(this,arguments)}),M(a,"input",s[12]),M(a,"keydown",s[5]),M(f,"click",s[7]),M(o,"click",s[4]),M(d,"click",s[6]),M(e,"dragstart",s[8]),M(e,"drop",s[9]),M(e,"dragover",s[10]),M(e,"dragleave",s[13]),M(e,"click",s[14])],$=!0)},p(C,[P]){s=C,P&1&&s[0].name!==a.textContent&&(a.textContent=s[0].name),(!E||P&4)&&W(e,"over",s[2]),s[0].open?F?(F.p(s,P),P&1&&A(F,1)):(F=Et(s),F.c(),A(F,1),F.m(I.parentNode,I)):F&&(oe(),z(F,1,1,()=>{F=null}),ce())},i(C){E||(de(()=>{b||(b=he(e,Te,{duration:s[3]?0:400},!0)),b.run(1)}),A(F),E=!0)},o(C){b||(b=he(e,Te,{duration:s[3]?0:400},!1)),b.run(0),z(F),E=!1},d(C){C&&p(e),s[11](null),C&&b&&b.end(),C&&p(m),F&&F.d(C),C&&p(I),$=!1,ve(V)}}}function $l(s,e,l){let t;le(s,qe,m=>l(3,t=m));let{folder:r}=e,a,i=m=>{m&&m.stopPropagation(),l(1,a.contentEditable="true",a),a.focus(),setTimeout(()=>{const I=document.createRange();I.setStart(a,0),I.setEnd(a,1);const E=window.getSelection();E.removeAllRanges(),E.addRange(I)},1)};const f=m=>{m.key=="Enter"&&(m.preventDefault(),m.stopPropagation(),a.blur())},n=m=>{m.stopPropagation(),Gt(r)},c=m=>{m.stopPropagation(),r.createFolder(),l(0,r.open=!0,r),Mt()};let u=!1;const o=m=>{Ce.set(r)},k=()=>{l(2,u=!1);const m=De(Ce);if(r.data.includes(m))return;const I=Be(m);I?I.remove(m):m instanceof Se&&(Yt(m),m.parent=r),r.add(m)},D=m=>{r!==De(Ce)&&(m.preventDefault(),l(2,u=!0))};function N(m){Lt[m?"unshift":"push"](()=>{a=m,l(1,a)})}function d(){r.name=this.textContent,l(0,r)}const h=()=>l(2,u=!1),g=()=>l(0,r.open=!r.open,r),b=m=>Ue(`/${m.isClass?"class":"skill"}/${m.name}`);return s.$$set=m=>{"folder"in m&&l(0,r=m.folder)},[r,a,u,t,i,f,n,c,o,k,D,N,d,h,g,b]}class Xe extends ke{constructor(e){super(),be(this,e,$l,bl,$e,{folder:0})}}function yt(s,e,l){const t=s.slice();return t[24]=e[l],t[20]=l,t}function St(s,e,l){const t=s.slice();return t[24]=e[l],t}function It(s,e,l){const t=s.slice();return t[18]=e[l],t[20]=l,t}function Dt(s,e,l){const t=s.slice();return t[21]=e[l],t}function El(s){let e,l,t=[],r=new Map,a,i,f,n,c,u=s[5],o=[];for(let d=0;d<u.length;d+=1)o[d]=Ct(St(s,u,d));const k=d=>z(o[d],1,1,()=>{o[d]=null});let D=s[6].filter(s[10]);const N=d=>d[24].key;for(let d=0;d<D.length;d+=1){let h=yt(s,D,d),g=N(h);r.set(g,t[d]=Vt(g,h))}return i=new Ne({props:{delay:200+100*(s[6].length+1),direction:"right",$$slots:{default:[Sl]},$$scope:{ctx:s}}}),{c(){e=w("div");for(let d=0;d<o.length;d+=1)o[d].c();l=q();for(let d=0;d<t.length;d+=1)t[d].c();a=q(),se(i.$$.fragment),this.h()},l(d){e=y(d,"DIV",{class:!0});var h=S(e);for(let g=0;g<o.length;g+=1)o[g].l(h);l=O(h);for(let g=0;g<t.length;g+=1)t[g].l(h);a=O(h),re(i.$$.fragment,h),h.forEach(p),this.h()},h(){v(e,"class","items svelte-1khonx0")},m(d,h){j(d,e,h);for(let g=0;g<o.length;g+=1)o[g].m(e,null);_(e,l);for(let g=0;g<t.length;g+=1)t[g].m(e,null);_(e,a),ae(i,e,null),c=!0},p(d,h){if(h&32){u=d[5];let b;for(b=0;b<u.length;b+=1){const m=St(d,u,b);o[b]?(o[b].p(m,h),A(o[b],1)):(o[b]=Ct(m),o[b].c(),A(o[b],1),o[b].m(e,l))}for(oe(),b=u.length;b<o.length;b+=1)k(b);ce()}h&66&&(D=d[6].filter(d[10]),oe(),t=We(t,h,N,1,d,D,r,e,Ke,Vt,a,yt),ce());const g={};h&64&&(g.delay=200+100*(d[6].length+1)),h&268435456&&(g.$$scope={dirty:h,ctx:d}),i.$set(g)},i(d){if(!c){for(let h=0;h<u.length;h+=1)A(o[h]);for(let h=0;h<D.length;h+=1)A(t[h]);A(i.$$.fragment,d),de(()=>{n&&n.end(1),f=Me(e,ge,{x:100}),f.start()}),c=!0}},o(d){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)z(o[h]);for(let h=0;h<t.length;h+=1)z(t[h]);z(i.$$.fragment,d),f&&f.invalidate(),n=qt(e,ge,{x:100}),c=!1},d(d){d&&p(e),He(o,d);for(let h=0;h<t.length;h+=1)t[h].d();ne(i),d&&n&&n.end()}}}function wl(s){let e,l,t=[],r=new Map,a,i,f,n,c,u=s[3],o=[];for(let d=0;d<u.length;d+=1)o[d]=Pt(Dt(s,u,d));const k=d=>z(o[d],1,1,()=>{o[d]=null});let D=s[4].filter(s[7]);const N=d=>d[18].key;for(let d=0;d<D.length;d+=1){let h=It(s,D,d),g=N(h);r.set(g,t[d]=Nt(g,h))}return i=new Ne({props:{delay:200+100*(s[4].length+1),$$slots:{default:[Dl]},$$scope:{ctx:s}}}),{c(){e=w("div");for(let d=0;d<o.length;d+=1)o[d].c();l=q();for(let d=0;d<t.length;d+=1)t[d].c();a=q(),se(i.$$.fragment),this.h()},l(d){e=y(d,"DIV",{class:!0});var h=S(e);for(let g=0;g<o.length;g+=1)o[g].l(h);l=O(h);for(let g=0;g<t.length;g+=1)t[g].l(h);a=O(h),re(i.$$.fragment,h),h.forEach(p),this.h()},h(){v(e,"class","items svelte-1khonx0")},m(d,h){j(d,e,h);for(let g=0;g<o.length;g+=1)o[g].m(e,null);_(e,l);for(let g=0;g<t.length;g+=1)t[g].m(e,null);_(e,a),ae(i,e,null),c=!0},p(d,h){if(h&8){u=d[3];let b;for(b=0;b<u.length;b+=1){const m=Dt(d,u,b);o[b]?(o[b].p(m,h),A(o[b],1)):(o[b]=Pt(m),o[b].c(),A(o[b],1),o[b].m(e,l))}for(oe(),b=u.length;b<o.length;b+=1)k(b);ce()}h&17&&(D=d[4].filter(d[7]),oe(),t=We(t,h,N,1,d,D,r,e,Ke,Nt,a,It),ce());const g={};h&16&&(g.delay=200+100*(d[4].length+1)),h&268435456&&(g.$$scope={dirty:h,ctx:d}),i.$set(g)},i(d){if(!c){for(let h=0;h<u.length;h+=1)A(o[h]);for(let h=0;h<D.length;h+=1)A(t[h]);A(i.$$.fragment,d),de(()=>{n&&n.end(1),f=Me(e,ge,{x:-100}),f.start()}),c=!0}},o(d){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)z(o[h]);for(let h=0;h<t.length;h+=1)z(t[h]);z(i.$$.fragment,d),f&&f.invalidate(),n=qt(e,ge,{x:-100}),c=!1},d(d){d&&p(e),He(o,d);for(let h=0;h<t.length;h+=1)t[h].d();ne(i),d&&n&&n.end()}}}function Ct(s){let e,l;return e=new Xe({props:{folder:s[24]}}),{c(){se(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),l=!0},p(t,r){const a={};r&32&&(a.folder=t[24]),e.$set(a)},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function yl(s){let e=s[24].name+"",l;return{c(){l=L(e)},l(t){l=B(t,e)},m(t,r){j(t,l,r)},p(t,r){r&66&&e!==(e=t[24].name+"")&&Oe(l,e)},d(t){t&&p(l)}}}function Vt(s,e){let l,t,r;function a(){return e[11](e[24])}return t=new Ne({props:{data:e[24],direction:"right",delay:200+100*e[20],$$slots:{default:[yl]},$$scope:{ctx:e}}}),t.$on("click",a),{key:s,first:null,c(){l=J(),se(t.$$.fragment),this.h()},l(i){l=J(),re(t.$$.fragment,i),this.h()},h(){this.first=l},m(i,f){j(i,l,f),ae(t,i,f),r=!0},p(i,f){e=i;const n={};f&66&&(n.data=e[24]),f&66&&(n.delay=200+100*e[20]),f&268435522&&(n.$$scope={dirty:f,ctx:e}),t.$set(n)},i(i){r||(A(t.$$.fragment,i),r=!0)},o(i){z(t.$$.fragment,i),r=!1},d(i){i&&p(l),ne(t,i)}}}function Sl(s){let e,l,t,r,a,i,f,n;return{c(){e=w("div"),l=w("span"),t=L("New Skill"),r=q(),a=w("span"),i=L("New Folder"),this.h()},l(c){e=y(c,"DIV",{class:!0});var u=S(e);l=y(u,"SPAN",{class:!0});var o=S(l);t=B(o,"New Skill"),o.forEach(p),r=O(u),a=y(u,"SPAN",{class:!0});var k=S(a);i=B(k,"New Folder"),k.forEach(p),u.forEach(p),this.h()},h(){v(l,"class","svelte-1khonx0"),v(a,"class","new-folder svelte-1khonx0"),v(e,"class","new svelte-1khonx0")},m(c,u){j(c,e,u),_(e,l),_(l,t),_(e,r),_(e,a),_(a,i),f||(n=[M(l,"click",xt),M(a,"click",s[12])],f=!0)},p:Ie,d(c){c&&p(e),f=!1,ve(n)}}}function Pt(s){let e,l;return e=new Xe({props:{folder:s[21]}}),{c(){se(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),l=!0},p(t,r){const a={};r&8&&(a.folder=t[21]),e.$set(a)},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function Il(s){let e=s[18].name+"",l;return{c(){l=L(e)},l(t){l=B(t,e)},m(t,r){j(t,l,r)},p(t,r){r&17&&e!==(e=t[18].name+"")&&Oe(l,e)},d(t){t&&p(l)}}}function Nt(s,e){let l,t,r;function a(){return e[8](e[18])}return t=new Ne({props:{data:e[18],delay:200+100*e[20],$$slots:{default:[Il]},$$scope:{ctx:e}}}),t.$on("click",a),{key:s,first:null,c(){l=J(),se(t.$$.fragment),this.h()},l(i){l=J(),re(t.$$.fragment,i),this.h()},h(){this.first=l},m(i,f){j(i,l,f),ae(t,i,f),r=!0},p(i,f){e=i;const n={};f&17&&(n.data=e[18]),f&17&&(n.delay=200+100*e[20]),f&268435473&&(n.$$scope={dirty:f,ctx:e}),t.$set(n)},i(i){r||(A(t.$$.fragment,i),r=!0)},o(i){z(t.$$.fragment,i),r=!1},d(i){i&&p(l),ne(t,i)}}}function Dl(s){let e,l,t,r,a,i,f,n;return{c(){e=w("div"),l=w("span"),t=L("New Class"),r=q(),a=w("span"),i=L("New Folder"),this.h()},l(c){e=y(c,"DIV",{class:!0});var u=S(e);l=y(u,"SPAN",{class:!0});var o=S(l);t=B(o,"New Class"),o.forEach(p),r=O(u),a=y(u,"SPAN",{class:!0});var k=S(a);i=B(k,"New Folder"),k.forEach(p),u.forEach(p),this.h()},h(){v(l,"class","svelte-1khonx0"),v(a,"class","new-folder svelte-1khonx0"),v(e,"class","new svelte-1khonx0")},m(c,u){j(c,e,u),_(e,l),_(l,t),_(e,r),_(e,a),_(a,i),f||(n=[M(l,"click",el),M(a,"click",s[9])],f=!0)},p:Ie,d(c){c&&p(e),f=!1,ve(n)}}}function Cl(s){let e,l,t,r,a,i,f,n,c,u,o,k,D,N,d,h,g;const b=[wl,El],m=[];function I(E,$){return E[2]?0:1}return k=I(s),D=m[k]=b[k](s),{c(){e=w("div"),l=w("div"),t=w("div"),r=w("div"),a=L("Classes"),i=q(),f=w("div"),n=L("Skills"),c=q(),u=w("hr"),o=q(),D.c(),this.h()},l(E){e=y(E,"DIV",{id:!0,class:!0});var $=S(e);l=y($,"DIV",{class:!0});var V=S(l);t=y(V,"DIV",{id:!0,class:!0});var F=S(t);r=y(F,"DIV",{class:!0});var C=S(r);a=B(C,"Classes"),C.forEach(p),i=O(F),f=y(F,"DIV",{class:!0});var P=S(f);n=B(P,"Skills"),P.forEach(p),F.forEach(p),c=O(V),u=y(V,"HR",{class:!0}),V.forEach(p),o=O($),D.l($),$.forEach(p),this.h()},h(){v(r,"class","classes svelte-1khonx0"),v(f,"class","skills svelte-1khonx0"),v(t,"id","type-selector"),v(t,"class","svelte-1khonx0"),W(t,"c-selected",s[2]),v(u,"class","svelte-1khonx0"),v(l,"class","type-wrap svelte-1khonx0"),v(e,"id","sidebar"),v(e,"class","svelte-1khonx0")},m(E,$){j(E,e,$),_(e,l),_(l,t),_(t,r),_(r,a),_(t,i),_(t,f),_(f,n),_(l,c),_(l,u),_(e,o),m[k].m(e,null),d=!0,h||(g=[M(r,"click",Zt),M(f,"click",Jt),M(e,"introend",s[13]),M(e,"outroend",s[14])],h=!0)},p(E,[$]){(!d||$&4)&&W(t,"c-selected",E[2]);let V=k;k=I(E),k===V?m[k].p(E,$):(oe(),z(m[V],1,1,()=>{m[V]=null}),ce(),D=m[k],D?D.p(E,$):(D=m[k]=b[k](E),D.c()),A(D,1),D.m(e,null))},i(E){d||(A(D),de(()=>{N||(N=he(e,bt,{},!0)),N.run(1)}),d=!0)},o(E){z(D),N||(N=he(e,bt,{},!1)),N.run(0),d=!1},d(E){E&&p(e),m[k].d(),E&&N&&N.end(),h=!1,ve(g)}}}function Vl(s,e,l){let t,r,a,i,f;le(s,Fe,I=>l(2,t=I)),le(s,dt,I=>l(3,r=I)),le(s,Wt,I=>l(4,a=I)),le(s,_t,I=>l(5,i=I)),le(s,Kt,I=>l(6,f=I));let n,c,u=[],o=[];return Bt(()=>{n=dt.subscribe(I=>{if(!Fe)return;l(0,u=[]);const E=$=>{$ instanceof Array&&$.forEach(V=>E(V)),$ instanceof Se?E($.data):$ instanceof Qt&&u.push($)};E(I)}),c=_t.subscribe(I=>{if(Fe)return;l(1,o=[]);const E=$=>{$ instanceof Array&&$.forEach(V=>E(V)),$ instanceof Se?E($.data):$ instanceof Xt&&o.push($)};E(I)})}),Tt(()=>{n&&n(),c&&c()}),[u,o,t,r,a,i,f,I=>!u.includes(I),I=>Ue(`/class/${I.name}`),()=>jt(new Se),I=>!o.includes(I),I=>Ue(`/skill/${I.name}`),()=>zt(new Se),()=>qe.set(!0),()=>qe.set(!1)]}class Pl extends ke{constructor(e){super(),be(this,e,Vl,Cl,$e,{})}}function At(s){let e,l;return e=new Pl({}),{c(){se(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),l=!0},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function Ft(s){let e,l;return e=new dl({}),{c(){se(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),l=!0},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function Nl(s){let e,l,t,r,a,i,f,n,c,u,o,k,D,N,d,h,g;e=new cl({});let b=s[0]&&At();const m=s[4].default,I=Ge(m,s,s[3],null);let E=s[2]&&Ft();return{c(){se(e.$$.fragment),l=q(),t=w("div"),b&&b.c(),r=q(),a=w("div"),I&&I.c(),i=q(),f=w("div"),n=w("div"),c=w("span"),u=L("cloud_download"),o=q(),k=w("div"),D=w("span"),N=L("save"),d=q(),E&&E.c(),h=J(),this.h()},l($){re(e.$$.fragment,$),l=O($),t=y($,"DIV",{id:!0,class:!0});var V=S(t);b&&b.l(V),r=O(V),a=y(V,"DIV",{id:!0,class:!0});var F=S(a);I&&I.l(F),F.forEach(p),V.forEach(p),i=O($),f=y($,"DIV",{id:!0,class:!0});var C=S(f);n=y(C,"DIV",{class:!0,title:!0});var P=S(n);c=y(P,"SPAN",{class:!0});var H=S(c);u=B(H,"cloud_download"),H.forEach(p),P.forEach(p),o=O(C),k=y(C,"DIV",{class:!0,title:!0});var K=S(k);D=y(K,"SPAN",{class:!0});var ee=S(D);N=B(ee,"save"),ee.forEach(p),K.forEach(p),C.forEach(p),d=O($),E&&E.l($),h=J(),this.h()},h(){v(a,"id","body"),v(a,"class","svelte-hcs2jf"),W(a,"centered",!s[1]),v(t,"id","body-container"),v(t,"class","svelte-hcs2jf"),v(c,"class","material-symbols-rounded svelte-hcs2jf"),v(n,"class","button backup svelte-hcs2jf"),v(n,"title","Backup All Data"),v(D,"class","material-symbols-rounded svelte-hcs2jf"),v(k,"class","button save svelte-hcs2jf"),v(k,"title","Save"),v(f,"id","floating-buttons"),v(f,"class","svelte-hcs2jf")},m($,V){ae(e,$,V),j($,l,V),j($,t,V),b&&b.m(t,null),_(t,r),_(t,a),I&&I.m(a,null),j($,i,V),j($,f,V),_(f,n),_(n,c),_(c,u),_(f,o),_(f,k),_(k,D),_(D,N),j($,d,V),E&&E.m($,V),j($,h,V),g=!0},p($,[V]){$[0]?b?V&1&&A(b,1):(b=At(),b.c(),A(b,1),b.m(t,r)):b&&(oe(),z(b,1,1,()=>{b=null}),ce()),I&&I.p&&(!g||V&8)&&Ye(I,m,$,$[3],g?Je(m,$[3],V,null):Ze($[3]),null),(!g||V&2)&&W(a,"centered",!$[1]),$[2]?E?V&4&&A(E,1):(E=Ft(),E.c(),A(E,1),E.m(h.parentNode,h)):E&&(oe(),z(E,1,1,()=>{E=null}),ce())},i($){g||(A(e.$$.fragment,$),A(b),A(I,$),A(E),g=!0)},o($){z(e.$$.fragment,$),z(b),z(I,$),z(E),g=!1},d($){ne(e,$),$&&p(l),$&&p(t),b&&b.d(),I&&I.d($),$&&p(i),$&&p(f),$&&p(d),E&&E.d($),$&&p(h)}}}function Al(s,e,l){let t,r,a;le(s,tl,n=>l(0,t=n)),le(s,Qe,n=>l(1,r=n)),le(s,ll,n=>l(2,a=n));let{$$slots:i={},$$scope:f}=e;return s.$$set=n=>{"$$scope"in n&&l(3,f=n.$$scope)},[t,r,a,f,i]}class jl extends ke{constructor(e){super(),be(this,e,Al,Nl,$e,{})}}export{jl as default};
