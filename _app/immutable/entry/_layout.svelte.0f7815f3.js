import{S as ie,i as ce,s as fe,y as j,z as W,A as Z,g as O,d as R,B as J,k as S,q as U,a as L,l as C,m as P,r as H,h as p,c as M,n as g,b as B,C as v,D as Re,E as T,F as ae,G as ut,w as Fe,H as dt,I as x,J as $e,K as _e,L as _t,M as ht,N as vt,O as pt,P as le,Q as De,R as Ie,T as Q,U as ne,V as St,u as ge,e as ee,W as Ct,v as se,f as re,X as Ne,Y as qe,Z as we,p as Ue,_ as Pt,o as mt,$ as Vt,a0 as gt,a1 as Ae,a2 as oe,a3 as He,a4 as Ft,a5 as Se,a6 as Ce,a7 as ze}from"../chunks/index.1ee62562.js";import{s as bt,l as Nt,a as kt,g as ve,f as pe,b as me,c as Te,d as Ee,e as de,u as $t,P as he,i as ke,h as wt,j as Et,k as yt,m as qt,n as At,r as Tt,o as Ot,p as Pe,q as Lt,t as Ve,v as Mt,w as Bt,x as Rt,y as Ut,z as Ht,A as zt,B as Ge,C as Ye,D as Gt,E as Yt,F as jt,G as Wt}from"../chunks/store.dac7fe37.js";import{M as Dt}from"../chunks/Modal.5d589700.js";import{j as ue}from"../chunks/singletons.fa678f4f.js";import{T as Zt}from"../chunks/Toggle.5a1895ad.js";const It="https://6jgex7frk0.execute-api.us-west-2.amazonaws.com/default/haste-uploader",Jt=s=>typeof s!="string"?Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.')):s===""?Promise.reject(new Error("You cannot send nothing.")):fetch(It,{method:"POST",body:s,headers:{"Content-Type":"text/plain"}}).then(l=>l.json()).then(l=>{if(!l.url)throw l.error?new Error(l.error):new Error("Did not receive hastebin key.");return l.url}),Xt=async s=>(s.url&&s.url.includes("astebin.com")&&!s.url.includes("raw")&&(s.url=s.url.replace("astebin.com","astebin.com/raw")),await(await fetch(`${It}?${s.id?"id="+s.id:"url="+s.url}`)).text());function Kt(s){let e,l,t,r,a,o,_,u,n,d,c,E,m,y,i,f,h,k,w,A,F,I,D,N;return{c(){e=S("div"),l=S("div"),t=S("div"),r=U("Upload File"),a=L(),o=S("label"),_=U("Select File"),u=L(),n=S("input"),d=L(),c=S("div"),E=S("span"),m=U("OR"),y=L(),i=S("div"),f=S("div"),h=U("Import from URL"),k=L(),w=S("input"),A=L(),F=S("div"),I=U("Import"),this.h()},l($){e=C($,"DIV",{class:!0});var b=P(e);l=C(b,"DIV",{class:!0});var V=P(l);t=C(V,"DIV",{});var z=P(t);r=H(z,"Upload File"),z.forEach(p),a=M(V),o=C(V,"LABEL",{for:!0,class:!0});var G=P(o);_=H(G,"Select File"),G.forEach(p),u=M(V),n=C(V,"INPUT",{id:!0,type:!0,class:!0}),V.forEach(p),d=M(b),c=C(b,"DIV",{class:!0});var Y=P(c);E=C(Y,"SPAN",{class:!0});var X=P(E);m=H(X,"OR"),X.forEach(p),Y.forEach(p),y=M(b),i=C(b,"DIV",{class:!0});var q=P(i);f=C(q,"DIV",{});var K=P(f);h=H(K,"Import from URL"),K.forEach(p),k=M(q),w=C(q,"INPUT",{class:!0}),A=M(q),F=C(q,"DIV",{class:!0});var te=P(F);I=H(te,"Import"),te.forEach(p),q.forEach(p),b.forEach(p),this.h()},h(){g(o,"for","file-upload"),g(o,"class","button"),g(n,"id","file-upload"),g(n,"type","file"),g(n,"class","hidden svelte-8b3mcy"),n.multiple=!0,g(l,"class","option svelte-8b3mcy"),g(E,"class","svelte-8b3mcy"),g(c,"class","or svelte-8b3mcy"),g(w,"class","svelte-8b3mcy"),g(F,"class","button"),g(i,"class","option svelte-8b3mcy"),g(e,"class","options svelte-8b3mcy")},m($,b){B($,e,b),v(e,l),v(l,t),v(t,r),v(l,a),v(l,o),v(o,_),v(l,u),v(l,n),v(e,d),v(e,c),v(c,E),v(E,m),v(e,y),v(e,i),v(i,f),v(f,h),v(i,k),v(i,w),Re(w,s[1]),v(i,A),v(i,F),v(F,I),D||(N=[T(n,"change",s[4]),T(w,"input",s[5]),T(F,"click",s[3])],D=!0)},p($,b){b&2&&w.value!==$[1]&&Re(w,$[1])},d($){$&&p(e),D=!1,ae(N)}}}function Qt(s){let e,l;return e=new Dt({props:{open:!0,$$slots:{default:[Kt]},$$scope:{ctx:s}}}),e.$on("close",s[2]),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,[r]){const a={};r&67&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function xt(s,e,l){let t,r;const a=()=>{l(1,t=l(0,r=void 0)),bt(!1)},o=()=>{t&&(t.startsWith("http")||l(1,t="https://"+t),Xt({url:t}).then(n=>{a(),Nt(n)}).catch(n=>{console.error(n)}))};function _(){r=this.files,l(0,r)}function u(){t=this.value,l(1,t)}return s.$$.update=()=>{if(s.$$.dirty&1&&r&&r.length>0)for(const n of r)n.name.indexOf(".yml")!=-1&&(kt(n),a())},[r,t,a,o,_,u]}class el extends ie{constructor(e){super(),ce(this,e,xt,Qt,fe,{})}}function je(s){let e,l,t,r,a,o,_,u,n,d,c,E;return{c(){e=S("div"),l=S("div"),t=S("span"),r=U("save"),o=L(),_=S("div"),u=S("span"),n=U("delete"),this.h()},l(m){e=C(m,"DIV",{class:!0});var y=P(e);l=C(y,"DIV",{class:!0,title:!0});var i=P(l);t=C(i,"SPAN",{class:!0});var f=P(t);r=H(f,"save"),f.forEach(p),i.forEach(p),o=M(y),_=C(y,"DIV",{class:!0,title:!0});var h=P(_);u=C(h,"SPAN",{class:!0});var k=P(u);n=H(k,"delete"),k.forEach(p),h.forEach(p),y.forEach(p),this.h()},h(){g(t,"class","material-symbols-rounded svelte-7wiq77"),g(l,"class","download svelte-7wiq77"),g(l,"title",a="Save "+(s[2].triggers?"Skill":"Class")),g(u,"class","material-symbols-rounded svelte-7wiq77"),g(_,"class","delete svelte-7wiq77"),g(_,"title",d="Delete "+(s[2].triggers?"Skill":"Class")),g(e,"class","buttons svelte-7wiq77")},m(m,y){B(m,e,y),v(e,l),v(l,t),v(t,r),v(e,o),v(e,_),v(_,u),v(u,n),c||(E=[T(l,"click",$e(_e(s[12]))),T(_,"click",$e(_e(s[13])))],c=!0)},p(m,y){y&4&&a!==(a="Save "+(m[2].triggers?"Skill":"Class"))&&g(l,"title",a),y&4&&d!==(d="Delete "+(m[2].triggers?"Skill":"Class"))&&g(_,"title",d)},d(m){m&&p(e),c=!1,ae(E)}}}function tl(s){let e,l,t=s[2].name+"",r,a,o,_,u,n,d,c,E,m,y;return{c(){e=S("h3"),l=U("Do you really want to delete "),r=U(t),a=U("?"),o=L(),_=S("div"),u=S("div"),n=U("Cancel"),d=L(),c=S("div"),E=U("Delete"),this.h()},l(i){e=C(i,"H3",{});var f=P(e);l=H(f,"Do you really want to delete "),r=H(f,t),a=H(f,"?"),f.forEach(p),o=M(i),_=C(i,"DIV",{class:!0});var h=P(_);u=C(h,"DIV",{class:!0});var k=P(u);n=H(k,"Cancel"),k.forEach(p),d=M(h),c=C(h,"DIV",{class:!0});var w=P(c);E=H(w,"Delete"),w.forEach(p),h.forEach(p),this.h()},h(){g(u,"class","button svelte-7wiq77"),g(c,"class","button modal-delete svelte-7wiq77"),g(_,"class","buttons modal-buttons svelte-7wiq77")},m(i,f){B(i,e,f),v(e,l),v(e,r),v(e,a),B(i,o,f),B(i,_,f),v(_,u),v(u,n),v(_,d),v(_,c),v(c,E),m||(y=[T(u,"click",s[15]),T(c,"click",s[16])],m=!0)},p(i,f){f&4&&t!==(t=i[2].name+"")&&ge(r,t)},d(i){i&&p(e),i&&p(o),i&&p(_),m=!1,ae(y)}}}function ll(s){let e,l,t,r,a,o,_,u,n,d,c;const E=s[10].default,m=ut(E,s,s[18],null);let y=s[2]&&je(s);function i(h){s[17](h)}let f={$$slots:{default:[tl]},$$scope:{ctx:s}};return s[4]!==void 0&&(f.open=s[4]),_=new Dt({props:f}),Fe.push(()=>dt(_,"open",i)),{c(){e=S("div"),m&&m.c(),l=L(),y&&y.c(),o=L(),j(_.$$.fragment),this.h()},l(h){e=C(h,"DIV",{class:!0,draggable:!0});var k=P(e);m&&m.l(k),l=M(k),y&&y.l(k),k.forEach(p),o=M(h),W(_.$$.fragment,h),this.h()},h(){g(e,"class","sidebar-entry svelte-7wiq77"),g(e,"draggable",t=!!s[2]),x(e,"over",s[3]),x(e,"active",s[2]&&s[5]===s[2]),x(e,"in-folder",!!ve(s[2]))},m(h,k){B(h,e,k),m&&m.m(e,null),v(e,l),y&&y.m(e,null),B(h,o,k),Z(_,h,k),n=!0,d||(c=[T(e,"dragstart",s[7]),T(e,"drop",$e(_e(s[8]))),T(e,"dragover",_e(s[9])),T(e,"dragleave",s[14]),T(e,"click",s[11])],d=!0)},p(h,[k]){s=h,m&&m.p&&(!n||k&262144)&&_t(m,E,s,s[18],n?vt(E,s[18],k,null):ht(s[18]),null),s[2]?y?y.p(s,k):(y=je(s),y.c(),y.m(e,null)):y&&(y.d(1),y=null),(!n||k&4&&t!==(t=!!s[2]))&&g(e,"draggable",t),(!n||k&8)&&x(e,"over",s[3]),(!n||k&36)&&x(e,"active",s[2]&&s[5]===s[2]),(!n||k&4)&&x(e,"in-folder",!!ve(s[2]));const w={};k&262164&&(w.$$scope={dirty:k,ctx:s}),!u&&k&16&&(u=!0,w.open=s[4],pt(()=>u=!1)),_.$set(w)},i(h){n||(O(m,h),le(()=>{n&&(a&&a.end(1),r=De(e,pe,{x:s[1]==="left"?-100:100,duration:500,delay:s[6]?0:s[0]}),r.start())}),O(_.$$.fragment,h),n=!0)},o(h){R(m,h),r&&r.invalidate(),a=Ie(e,me,{}),R(_.$$.fragment,h),n=!1},d(h){h&&p(e),m&&m.d(h),y&&y.d(),h&&a&&a.end(),h&&p(o),J(_,h),d=!1,ae(c)}}}function sl(s,e,l){let t,r;Q(s,Te,I=>l(5,t=I)),Q(s,Ee,I=>l(6,r=I));let{$$slots:a={},$$scope:o}=e,{delay:_=0}=e,{direction:u="left"}=e,{data:n=void 0}=e,d=!1,c=!1;const E=I=>{if(!n){I.preventDefault();return}de.set(n)},m=()=>{const I=ne(de);let D;n&&(D=ve(n));const N=ve(I);if(N&&N.remove(I),D){D.add(I),l(3,d=!1),$t();return}I instanceof he&&(ne(ke)?wt(I):Et(I),I.parent=void 0),l(3,d=!1)},y=()=>{const I=ne(de);n!==I&&l(3,d=!0)};function i(I){St.call(this,s,I)}const f=()=>yt(n),h=()=>l(4,c=!0),k=()=>l(3,d=!1),w=()=>l(4,c=!1),A=()=>qt(n);function F(I){c=I,l(4,c)}return s.$$set=I=>{"delay"in I&&l(0,_=I.delay),"direction"in I&&l(1,u=I.direction),"data"in I&&l(2,n=I.data),"$$scope"in I&&l(18,o=I.$$scope)},[_,u,n,d,c,t,r,E,m,y,a,i,f,h,k,w,A,F,o]}class be extends ie{constructor(e){super(),ce(this,e,sl,ll,fe,{delay:0,direction:1,data:2})}}const We=(s,{delay:e=0,duration:l=500})=>{const r=getComputedStyle(s).width.match(/([\d.]+)(.*)/);if(!r)return{delay:e,duration:l,css:o=>`max-width: unset; width: ${o*100}%;`};const a=Number.parseFloat(r[1]);return{delay:e,duration:l,css:o=>`max-width: unset; width: ${o*a}${r[2]}; min-width: unset;`}};ue.disable_scroll_handling;const ye=ue.goto;ue.invalidate;ue.invalidateAll;ue.preload_data;ue.preload_code;ue.before_navigate;ue.after_navigate;function Ze(s,e,l){const t=s.slice();return t[16]=e[l],t[18]=l,t}function Je(s){let e,l=[],t=new Map,r,a,o=s[0].data;const _=u=>u[16].key;for(let u=0;u<o.length;u+=1){let n=Ze(s,o,u),d=_(n);t.set(d,l[u]=Xe(d,n))}return{c(){e=S("div");for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=C(u,"DIV",{class:!0});var n=P(e);for(let d=0;d<l.length;d+=1)l[d].l(n);n.forEach(p),this.h()},h(){g(e,"class","folder-content svelte-h6frfb")},m(u,n){B(u,e,n);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);a=!0},p(u,n){n&1&&(o=u[0].data,se(),l=Ne(l,n,_,1,u,o,t,e,qe,Xe,null,Ze),re())},i(u){if(!a){for(let n=0;n<o.length;n+=1)O(l[n]);le(()=>{a&&(r||(r=we(e,me,{},!0)),r.run(1))}),a=!0}},o(u){for(let n=0;n<l.length;n+=1)R(l[n]);r||(r=we(e,me,{},!1)),r.run(0),a=!1},d(u){u&&p(e);for(let n=0;n<l.length;n+=1)l[n].d();u&&r&&r.end()}}}function rl(s){let e,l;function t(){return s[15](s[16])}return e=new be({props:{data:s[16],$$slots:{default:[nl]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){j(e.$$.fragment)},l(r){W(e.$$.fragment,r)},m(r,a){Z(e,r,a),l=!0},p(r,a){s=r;const o={};a&1&&(o.data=s[16]),a&524289&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(r){l||(O(e.$$.fragment,r),l=!0)},o(r){R(e.$$.fragment,r),l=!1},d(r){J(e,r)}}}function al(s){let e,l;return e=new Oe({props:{folder:s[16]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.folder=t[16]),e.$set(a)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function nl(s){let e=s[16].name+"",l,t;return{c(){l=U(e),t=L()},l(r){l=H(r,e),t=M(r)},m(r,a){B(r,l,a),B(r,t,a)},p(r,a){a&1&&e!==(e=r[16].name+"")&&ge(l,e)},d(r){r&&p(l),r&&p(t)}}}function Xe(s,e){let l,t,r,a,o;const _=[al,rl],u=[];function n(d,c){return d[16].isFolder?0:1}return t=n(e),r=u[t]=_[t](e),{key:s,first:null,c(){l=ee(),r.c(),a=ee(),this.h()},l(d){l=ee(),r.l(d),a=ee(),this.h()},h(){this.first=l},m(d,c){B(d,l,c),u[t].m(d,c),B(d,a,c),o=!0},p(d,c){e=d;let E=t;t=n(e),t===E?u[t].p(e,c):(se(),R(u[E],1,1,()=>{u[E]=null}),re(),r=u[t],r?r.p(e,c):(r=u[t]=_[t](e),r.c()),O(r,1),r.m(a.parentNode,a))},i(d){o||(O(r),o=!0)},o(d){R(r),o=!1},d(d){d&&p(l),u[t].d(d),d&&p(a)}}}function ol(s){let e,l,t,r,a,o,_,u,n,d,c,E,m,y,i,f,h,k,w,A,F,I,D,N,$=s[0].open&&Je(s);return{c(){e=S("div"),l=S("span"),t=U("folder"),r=L(),a=S("span"),o=L(),_=S("div"),u=S("span"),n=U("add"),d=L(),c=S("div"),E=S("span"),m=U("edit"),y=L(),i=S("div"),f=S("span"),h=U("delete"),A=L(),$&&$.c(),F=ee(),this.h()},l(b){e=C(b,"DIV",{class:!0,draggable:!0});var V=P(e);l=C(V,"SPAN",{class:!0});var z=P(l);t=H(z,"folder"),z.forEach(p),r=M(V),a=C(V,"SPAN",{class:!0,contenteditable:!0}),P(a).forEach(p),o=M(V),_=C(V,"DIV",{class:!0,title:!0});var G=P(_);u=C(G,"SPAN",{class:!0});var Y=P(u);n=H(Y,"add"),Y.forEach(p),G.forEach(p),d=M(V),c=C(V,"DIV",{class:!0,title:!0});var X=P(c);E=C(X,"SPAN",{class:!0});var q=P(E);m=H(q,"edit"),q.forEach(p),X.forEach(p),y=M(V),i=C(V,"DIV",{class:!0,title:!0});var K=P(i);f=C(K,"SPAN",{class:!0});var te=P(f);h=H(te,"delete"),te.forEach(p),K.forEach(p),V.forEach(p),A=M(b),$&&$.l(b),F=ee(),this.h()},h(){g(l,"class","material-symbols-rounded folder-icon svelte-h6frfb"),g(a,"class","name svelte-h6frfb"),g(a,"contenteditable","false"),s[0].name===void 0&&le(()=>s[12].call(a)),g(u,"class","material-symbols-rounded svelte-h6frfb"),g(_,"class","icon add svelte-h6frfb"),g(_,"title","Add Folder"),g(E,"class","material-symbols-rounded svelte-h6frfb"),g(c,"class","icon svelte-h6frfb"),g(c,"title","Rename"),g(f,"class","material-symbols-rounded svelte-h6frfb"),g(i,"class","icon delete svelte-h6frfb"),g(i,"title","Delete Folder"),g(e,"class","folder svelte-h6frfb"),g(e,"draggable","true"),x(e,"over",s[2])},m(b,V){B(b,e,V),v(e,l),v(l,t),v(e,r),v(e,a),s[11](a),s[0].name!==void 0&&(a.textContent=s[0].name),v(e,o),v(e,_),v(_,u),v(u,n),v(e,d),v(e,c),v(c,E),v(E,m),v(e,y),v(e,i),v(i,f),v(f,h),B(b,A,V),$&&$.m(b,V),B(b,F,V),I=!0,D||(N=[T(a,"blur",function(){Ct(s[1].contentEditable="false")&&(s[1].contentEditable="false").apply(this,arguments)}),T(a,"input",s[12]),T(a,"keydown",s[5]),T(_,"click",s[7]),T(c,"click",s[4]),T(i,"click",s[6]),T(e,"dragstart",s[8]),T(e,"drop",$e(_e(s[9]))),T(e,"dragover",_e(s[10])),T(e,"dragleave",s[13]),T(e,"click",s[14])],D=!0)},p(b,[V]){s=b,V&1&&s[0].name!==a.textContent&&(a.textContent=s[0].name),(!I||V&4)&&x(e,"over",s[2]),s[0].open?$?($.p(s,V),V&1&&O($,1)):($=Je(s),$.c(),O($,1),$.m(F.parentNode,F)):$&&(se(),R($,1,1,()=>{$=null}),re())},i(b){I||(le(()=>{I&&(w&&w.end(1),k=De(e,me,{duration:s[3]?0:400}),k.start())}),O($),I=!0)},o(b){k&&k.invalidate(),w=Ie(e,me,{}),R($),I=!1},d(b){b&&p(e),s[11](null),b&&w&&w.end(),b&&p(A),$&&$.d(b),b&&p(F),D=!1,ae(N)}}}function il(s,e,l){let t;Q(s,Ee,w=>l(3,t=w));let{folder:r}=e,a,o=w=>{w&&w.stopPropagation(),l(1,a.contentEditable="true",a),a.focus(),setTimeout(()=>{const A=document.createRange();A.setStart(a,0),A.setEnd(a,1);const F=window.getSelection();F.removeAllRanges(),F.addRange(A)},1)};const _=w=>{w.key=="Enter"&&(w.preventDefault(),w.stopPropagation(),a.blur())},u=w=>{w.stopPropagation(),At(r)},n=w=>{w.stopPropagation(),r.createFolder(),l(0,r.open=!0,r),$t()};let d=!1;const c=()=>{de.set(r)},E=()=>{l(2,d=!1);const w=ne(de);if(!w||r.data.includes(w))return;const A=ve(w);A&&A.remove(w),w instanceof he&&(Tt(w),w.parent=r),r.add(w)},m=()=>{r!==ne(de)&&l(2,d=!0)};function y(w){Fe[w?"unshift":"push"](()=>{a=w,l(1,a)})}function i(){r.name=this.textContent,l(0,r)}const f=()=>l(2,d=!1),h=()=>l(0,r.open=!r.open,r),k=w=>ye(`/${w.isClass?"class":"skill"}/${w.name}${w.isClass?"/edit":""}`);return s.$$set=w=>{"folder"in w&&l(0,r=w.folder)},[r,a,d,t,o,_,u,n,c,E,m,y,i,f,h,k]}class Oe extends ie{constructor(e){super(),ce(this,e,il,ol,fe,{folder:0})}}function Ke(s,e,l){const t=s.slice();return t[35]=e[l],t[31]=l,t}function Qe(s,e,l){const t=s.slice();return t[35]=e[l],t}function xe(s,e,l){const t=s.slice();return t[29]=e[l],t[31]=l,t}function et(s,e,l){const t=s.slice();return t[32]=e[l],t}function cl(s){let e,l,t=[],r=new Map,a,o,_,u,n,d=s[8],c=[];for(let i=0;i<d.length;i+=1)c[i]=tt(Qe(s,d,i));const E=i=>R(c[i],1,1,()=>{c[i]=null});let m=s[9].filter(s[18]);const y=i=>i[35].key;for(let i=0;i<m.length;i+=1){let f=Ke(s,m,i),h=y(f);r.set(h,t[i]=lt(h,f))}return o=new be({props:{delay:200+100*(s[9].length+1),direction:"right",$$slots:{default:[dl]},$$scope:{ctx:s}}}),{c(){e=S("div");for(let i=0;i<c.length;i+=1)c[i].c();l=L();for(let i=0;i<t.length;i+=1)t[i].c();a=L(),j(o.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var f=P(e);for(let h=0;h<c.length;h+=1)c[h].l(f);l=M(f);for(let h=0;h<t.length;h+=1)t[h].l(f);a=M(f),W(o.$$.fragment,f),f.forEach(p),this.h()},h(){g(e,"class","items svelte-sqaw72")},m(i,f){B(i,e,f);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);v(e,l);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(e,null);v(e,a),Z(o,e,null),n=!0},p(i,f){if(f[0]&256){d=i[8];let k;for(k=0;k<d.length;k+=1){const w=Qe(i,d,k);c[k]?(c[k].p(w,f),O(c[k],1)):(c[k]=tt(w),c[k].c(),O(c[k],1),c[k].m(e,l))}for(se(),k=d.length;k<c.length;k+=1)E(k);re()}f[0]&514&&(m=i[9].filter(i[18]),se(),t=Ne(t,f,y,1,i,m,r,e,qe,lt,a,Ke),re());const h={};f[0]&512&&(h.delay=200+100*(i[9].length+1)),f[1]&256&&(h.$$scope={dirty:f,ctx:i}),o.$set(h)},i(i){if(!n){for(let f=0;f<d.length;f+=1)O(c[f]);for(let f=0;f<m.length;f+=1)O(t[f]);O(o.$$.fragment,i),le(()=>{n&&(u&&u.end(1),_=De(e,pe,{x:100}),_.start())}),n=!0}},o(i){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)R(c[f]);for(let f=0;f<t.length;f+=1)R(t[f]);R(o.$$.fragment,i),_&&_.invalidate(),u=Ie(e,pe,{x:100}),n=!1},d(i){i&&p(e),Ae(c,i);for(let f=0;f<t.length;f+=1)t[f].d();J(o),i&&u&&u.end()}}}function fl(s){let e,l,t=[],r=new Map,a,o,_,u,n,d=s[6],c=[];for(let i=0;i<d.length;i+=1)c[i]=st(et(s,d,i));const E=i=>R(c[i],1,1,()=>{c[i]=null});let m=s[7].filter(s[14]);const y=i=>i[29].key;for(let i=0;i<m.length;i+=1){let f=xe(s,m,i),h=y(f);r.set(h,t[i]=rt(h,f))}return o=new be({props:{delay:200+100*(s[7].length+1),$$slots:{default:[hl]},$$scope:{ctx:s}}}),{c(){e=S("div");for(let i=0;i<c.length;i+=1)c[i].c();l=L();for(let i=0;i<t.length;i+=1)t[i].c();a=L(),j(o.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var f=P(e);for(let h=0;h<c.length;h+=1)c[h].l(f);l=M(f);for(let h=0;h<t.length;h+=1)t[h].l(f);a=M(f),W(o.$$.fragment,f),f.forEach(p),this.h()},h(){g(e,"class","items svelte-sqaw72")},m(i,f){B(i,e,f);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);v(e,l);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(e,null);v(e,a),Z(o,e,null),n=!0},p(i,f){if(f[0]&64){d=i[6];let k;for(k=0;k<d.length;k+=1){const w=et(i,d,k);c[k]?(c[k].p(w,f),O(c[k],1)):(c[k]=st(w),c[k].c(),O(c[k],1),c[k].m(e,l))}for(se(),k=d.length;k<c.length;k+=1)E(k);re()}f[0]&129&&(m=i[7].filter(i[14]),se(),t=Ne(t,f,y,1,i,m,r,e,qe,rt,a,xe),re());const h={};f[0]&128&&(h.delay=200+100*(i[7].length+1)),f[1]&256&&(h.$$scope={dirty:f,ctx:i}),o.$set(h)},i(i){if(!n){for(let f=0;f<d.length;f+=1)O(c[f]);for(let f=0;f<m.length;f+=1)O(t[f]);O(o.$$.fragment,i),le(()=>{n&&(u&&u.end(1),_=De(e,pe,{x:-100}),_.start())}),n=!0}},o(i){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)R(c[f]);for(let f=0;f<t.length;f+=1)R(t[f]);R(o.$$.fragment,i),_&&_.invalidate(),u=Ie(e,pe,{x:-100}),n=!1},d(i){i&&p(e),Ae(c,i);for(let f=0;f<t.length;f+=1)t[f].d();J(o),i&&u&&u.end()}}}function tt(s){let e,l;return e=new Oe({props:{folder:s[35]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,r){const a={};r[0]&256&&(a.folder=t[35]),e.$set(a)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function ul(s){let e=s[35].name+"",l;return{c(){l=U(e)},l(t){l=H(t,e)},m(t,r){B(t,l,r)},p(t,r){r[0]&514&&e!==(e=t[35].name+"")&&ge(l,e)},d(t){t&&p(l)}}}function lt(s,e){let l,t,r;function a(){return e[19](e[35])}return t=new be({props:{data:e[35],direction:"right",delay:200+100*e[31],$$slots:{default:[ul]},$$scope:{ctx:e}}}),t.$on("click",a),{key:s,first:null,c(){l=ee(),j(t.$$.fragment),this.h()},l(o){l=ee(),W(t.$$.fragment,o),this.h()},h(){this.first=l},m(o,_){B(o,l,_),Z(t,o,_),r=!0},p(o,_){e=o;const u={};_[0]&514&&(u.data=e[35]),_[0]&514&&(u.delay=200+100*e[31]),_[0]&514|_[1]&256&&(u.$$scope={dirty:_,ctx:e}),t.$set(u)},i(o){r||(O(t.$$.fragment,o),r=!0)},o(o){R(t.$$.fragment,o),r=!1},d(o){o&&p(l),J(t,o)}}}function dl(s){let e,l,t,r,a,o,_,u;return{c(){e=S("div"),l=S("span"),t=U("New Skill"),r=L(),a=S("span"),o=U("New Folder"),this.h()},l(n){e=C(n,"DIV",{class:!0});var d=P(e);l=C(d,"SPAN",{class:!0});var c=P(l);t=H(c,"New Skill"),c.forEach(p),r=M(d),a=C(d,"SPAN",{class:!0});var E=P(a);o=H(E,"New Folder"),E.forEach(p),d.forEach(p),this.h()},h(){g(l,"class","svelte-sqaw72"),g(a,"class","new-folder svelte-sqaw72"),g(e,"class","new svelte-sqaw72")},m(n,d){B(n,e,d),v(e,l),v(l,t),v(e,r),v(e,a),v(a,o),_||(u=[T(l,"click",s[20]),T(a,"click",s[21])],_=!0)},p:oe,d(n){n&&p(e),_=!1,ae(u)}}}function st(s){let e,l;return e=new Oe({props:{folder:s[32]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,r){const a={};r[0]&64&&(a.folder=t[32]),e.$set(a)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function _l(s){let e=s[29].name+"",l;return{c(){l=U(e)},l(t){l=H(t,e)},m(t,r){B(t,l,r)},p(t,r){r[0]&129&&e!==(e=t[29].name+"")&&ge(l,e)},d(t){t&&p(l)}}}function rt(s,e){let l,t,r;function a(){return e[15](e[29])}return t=new be({props:{data:e[29],delay:200+100*e[31],$$slots:{default:[_l]},$$scope:{ctx:e}}}),t.$on("click",a),{key:s,first:null,c(){l=ee(),j(t.$$.fragment),this.h()},l(o){l=ee(),W(t.$$.fragment,o),this.h()},h(){this.first=l},m(o,_){B(o,l,_),Z(t,o,_),r=!0},p(o,_){e=o;const u={};_[0]&129&&(u.data=e[29]),_[0]&129&&(u.delay=200+100*e[31]),_[0]&129|_[1]&256&&(u.$$scope={dirty:_,ctx:e}),t.$set(u)},i(o){r||(O(t.$$.fragment,o),r=!0)},o(o){R(t.$$.fragment,o),r=!1},d(o){o&&p(l),J(t,o)}}}function hl(s){let e,l,t,r,a,o,_,u;return{c(){e=S("div"),l=S("span"),t=U("New Class"),r=L(),a=S("span"),o=U("New Folder"),this.h()},l(n){e=C(n,"DIV",{class:!0});var d=P(e);l=C(d,"SPAN",{class:!0});var c=P(l);t=H(c,"New Class"),c.forEach(p),r=M(d),a=C(d,"SPAN",{class:!0});var E=P(a);o=H(E,"New Folder"),E.forEach(p),d.forEach(p),this.h()},h(){g(l,"class","svelte-sqaw72"),g(a,"class","new-folder svelte-sqaw72"),g(e,"class","new svelte-sqaw72")},m(n,d){B(n,e,d),v(e,l),v(l,t),v(e,r),v(e,a),v(a,o),_||(u=[T(l,"click",s[16]),T(a,"click",s[17])],_=!0)},p:oe,d(n){n&&p(e),_=!1,ae(u)}}}function vl(s){let e=!1,l=()=>{e=!1},t,r,a,o,_,u,n,d,c,E,m,y=`calc(${s[3]}px - 6rem + min(3.5rem, ${s[4]}px))`,i,f,h;le(s[11]),le(s[12]);function k(D){s[13](D)}let w={left:"Classes",right:"Skills",color:"#111",inline:!1};s[5]!==void 0&&(w.data=s[5]),o=new Zt({props:w}),Fe.push(()=>dt(o,"data",k));const A=[fl,cl],F=[];function I(D,N){return D[5]?0:1}return c=I(s),E=F[c]=A[c](s),{c(){r=S("div"),a=S("div"),j(o.$$.fragment),u=L(),n=S("hr"),d=L(),E.c(),this.h()},l(D){r=C(D,"DIV",{id:!0,class:!0});var N=P(r);a=C(N,"DIV",{class:!0});var $=P(a);W(o.$$.fragment,$),u=M($),n=C($,"HR",{class:!0}),$.forEach(p),d=M(N),E.l(N),N.forEach(p),this.h()},h(){g(n,"class","svelte-sqaw72"),g(a,"class","type-wrap svelte-sqaw72"),g(r,"id","sidebar"),g(r,"class","svelte-sqaw72"),Ue(r,"--height",y)},m(D,N){B(D,r,N),v(r,a),Z(o,a,null),v(a,u),v(a,n),v(r,d),F[c].m(r,null),i=!0,f||(h=[T(window,"resize",s[11]),T(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),s[12]()}),T(r,"introend",s[22]),T(r,"outroend",s[23]),Pt(Ot.call(null,r)),T(r,"outclick",s[10])],f=!0)},p(D,N){N[0]&16&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,D[4]),t=setTimeout(l,100));const $={};!_&&N[0]&32&&(_=!0,$.data=D[5],pt(()=>_=!1)),o.$set($);let b=c;c=I(D),c===b?F[c].p(D,N):(se(),R(F[b],1,1,()=>{F[b]=null}),re(),E=F[c],E?E.p(D,N):(E=F[c]=A[c](D),E.c()),O(E,1),E.m(r,null)),N[0]&24&&y!==(y=`calc(${D[3]}px - 6rem + min(3.5rem, ${D[4]}px))`)&&Ue(r,"--height",y)},i(D){i||(O(o.$$.fragment,D),O(E),le(()=>{i&&(m||(m=we(r,We,{},!0)),m.run(1))}),i=!0)},o(D){R(o.$$.fragment,D),R(E),m||(m=we(r,We,{},!1)),m.run(0),i=!1},d(D){D&&p(r),J(o),F[c].d(),D&&m&&m.end(),f=!1,ae(h)}}}function pl(s,e,l){let t,r,a,o,_;Q(s,ke,q=>l(5,t=q)),Q(s,Pe,q=>l(6,r=q)),Q(s,Lt,q=>l(7,a=q)),Q(s,Ve,q=>l(8,o=q)),Q(s,Mt,q=>l(9,_=q));let u=[],n,d,c=[],E=[],m,y,i;const f=(q,K)=>{q instanceof Array&&q.forEach(te=>f(te,K)),q instanceof he?f(q.data,K):(q instanceof Ut||q instanceof Ht)&&K.push(q)},h=q=>{ne(ke)?(u=q||ne(Pe),l(0,c=[]),f(u,c)):(u=q||ne(Ve),l(1,E=[]),f(u,E))};mt(()=>{n=Pe.subscribe(h),d=Ve.subscribe(h)}),Vt(h),gt(()=>{n&&n(),d&&d()});const k=q=>{m<500&&(q.detail.stopPropagation(),zt())};function w(){l(2,m=window.innerWidth),l(3,y=window.innerHeight)}function A(){l(4,i=window.pageYOffset)}function F(q){t=q,ke.set(t)}return[c,E,m,y,i,t,r,a,o,_,k,w,A,F,q=>!c.includes(q),q=>ye(`/class/${q.name}/edit`),()=>Bt(),()=>wt(new he),q=>!E.includes(q),q=>ye(`/skill/${q.name}`),()=>Rt(),()=>Et(new he),()=>Ee.set(!0),()=>Ee.set(!1)]}class ml extends ie{constructor(e){super(),ce(this,e,pl,vl,fe,{},null,[-1,-1])}}function at(s,e,l){const t=s.slice();return t[7]=e[l],t}function nt(s){let e,l=s[7]+"",t;return{c(){e=S("option"),t=U(l),this.h()},l(r){e=C(r,"OPTION",{});var a=P(e);t=H(a,l),a.forEach(p),this.h()},h(){e.__value=s[7].substring(2),e.value=e.__value},m(r,a){B(r,e,a),v(e,t)},p:oe,d(r){r&&p(e)}}}function ot(s){let e,l,t=s[1]==="class"?"Class":"Skill",r,a,o,_;return{c(){e=S("div"),l=U("Share "),r=U(t),this.h()},l(u){e=C(u,"DIV",{class:!0,title:!0});var n=P(e);l=H(n,"Share "),r=H(n,t),n.forEach(p),this.h()},h(){g(e,"class","chip share svelte-1oi5qao"),g(e,"title",a="Share "+(s[1]==="class"?"Class":"Skill"))},m(u,n){B(u,e,n),v(e,l),v(e,r),o||(_=T(e,"click",s[3]),o=!0)},p(u,n){n&2&&t!==(t=u[1]==="class"?"Class":"Skill")&&ge(r,t),n&2&&a!==(a="Share "+(u[1]==="class"?"Class":"Skill"))&&g(e,"title",a)},d(u){u&&p(e),o=!1,_()}}}function it(s){let e,l;return e=new ml({}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function gl(s){let e,l,t,r,a,o,_,u,n,d,c,E,m,y,i,f,h,k,w=Ge,A=[];for(let D=0;D<w.length;D+=1)A[D]=nt(at(s,w,D));let F=s[1]&&ot(s),I=s[2]&&it();return{c(){e=S("div"),l=S("nav"),t=S("div"),r=S("span"),a=U("menu"),o=L(),_=S("label"),u=U(`Server
    `),n=S("select");for(let D=0;D<A.length;D+=1)A[D].c();d=L(),c=S("div"),E=S("div"),m=U("Import"),y=L(),F&&F.c(),i=L(),I&&I.c(),this.h()},l(D){e=C(D,"DIV",{class:!0});var N=P(e);l=C(N,"NAV",{class:!0});var $=P(l);t=C($,"DIV",{class:!0});var b=P(t);r=C(b,"SPAN",{class:!0});var V=P(r);a=H(V,"menu"),V.forEach(p),b.forEach(p),o=M($),_=C($,"LABEL",{class:!0});var z=P(_);u=H(z,`Server
    `),n=C(z,"SELECT",{class:!0});var G=P(n);for(let q=0;q<A.length;q+=1)A[q].l(G);G.forEach(p),z.forEach(p),d=M($),c=C($,"DIV",{class:!0});var Y=P(c);E=C(Y,"DIV",{class:!0,title:!0});var X=P(E);m=H(X,"Import"),X.forEach(p),y=M(Y),F&&F.l(Y),Y.forEach(p),i=M($),I&&I.l($),$.forEach(p),N.forEach(p),this.h()},h(){g(r,"class","material-symbols-rounded"),g(t,"class","chip hamburger svelte-1oi5qao"),g(n,"class","svelte-1oi5qao"),s[0]===void 0&&le(()=>s[6].call(n)),g(_,"class","server svelte-1oi5qao"),g(E,"class","chip import svelte-1oi5qao"),g(E,"title","Import Data"),g(c,"class","transfer svelte-1oi5qao"),g(l,"class","svelte-1oi5qao"),g(e,"class","nav-wrap svelte-1oi5qao")},m(D,N){B(D,e,N),v(e,l),v(l,t),v(t,r),v(r,a),v(l,o),v(l,_),v(_,u),v(_,n);for(let $=0;$<A.length;$+=1)A[$]&&A[$].m(n,null);He(n,s[0],!0),v(l,d),v(l,c),v(c,E),v(E,m),v(c,y),F&&F.m(c,null),v(l,i),I&&I.m(l,null),f=!0,h||(k=[T(t,"click",s[5]),T(n,"change",s[6]),T(E,"click",s[4])],h=!0)},p(D,[N]){if(N&0){w=Ge;let $;for($=0;$<w.length;$+=1){const b=at(D,w,$);A[$]?A[$].p(b,N):(A[$]=nt(b),A[$].c(),A[$].m(n,null))}for(;$<A.length;$+=1)A[$].d(1);A.length=w.length}N&1&&He(n,D[0]),D[1]?F?F.p(D,N):(F=ot(D),F.c(),F.m(c,null)):F&&(F.d(1),F=null),D[2]?I?N&4&&O(I,1):(I=it(),I.c(),O(I,1),I.m(l,null)):I&&(se(),R(I,1,1,()=>{I=null}),re())},i(D){f||(O(I),f=!0)},o(D){R(I),f=!1},d(D){D&&p(e),Ae(A,D),F&&F.d(),I&&I.d(),h=!1,ae(k)}}}function bl(s,e,l){let t,r,a;Q(s,Ye,d=>l(0,t=d)),Q(s,Gt,d=>l(1,r=d)),Q(s,Yt,d=>l(2,a=d));const o=()=>{let d=ne(Te);if(!d)return;let c=d.serializeYaml().toString();Jt(c).then(E=>{var m;(m=navigator==null?void 0:navigator.clipboard)==null||m.writeText(E),window.open(E)}).catch(E=>console.error(E))},_=()=>{bt(!0)},u=d=>{d.stopPropagation(),jt()};function n(){t=Ft(this),Ye.set(t)}return[t,r,a,o,_,u,n]}class kl extends ie{constructor(e){super(),ce(this,e,bl,gl,fe,{})}}function $l(s){let e,l,t;return{c(){e=Se("svg"),l=Se("g"),t=Se("path"),this.h()},l(r){e=Ce(r,"svg",{viewBox:!0,class:!0});var a=P(e);l=Ce(a,"g",{fill:!0});var o=P(l);t=Ce(o,"path",{d:!0}),P(t).forEach(p),o.forEach(p),a.forEach(p),this.h()},h(){g(t,"d","M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"),g(l,"fill","currentColor"),g(e,"viewBox","0 0 30 34"),g(e,"class","logo-3oeRIY svelte-evyltu")},m(r,a){B(r,e,a),v(e,l),v(l,t)},p:oe,i:oe,o:oe,d(r){r&&p(e)}}}class wl extends ie{constructor(e){super(),ce(this,e,null,$l,fe,{})}}function El(s){let e,l,t,r,a,o,_,u,n,d,c,E,m,y,i,f,h,k,w,A,F,I,D,N,$,b;return c=new wl({}),{c(){e=S("div"),l=S("div"),t=S("h1"),r=U("ProSkillAPI"),a=L(),o=S("h2"),_=U("Dynamic Editor"),u=L(),n=S("div"),d=S("a"),j(c.$$.fragment),E=L(),m=S("a"),y=S("img"),f=L(),h=S("a"),k=S("img"),A=L(),F=S("a"),I=S("span"),D=U("help"),this.h()},l(V){e=C(V,"DIV",{id:!0,class:!0});var z=P(e);l=C(z,"DIV",{class:!0});var G=P(l);t=C(G,"H1",{class:!0});var Y=P(t);r=H(Y,"ProSkillAPI"),Y.forEach(p),a=M(G),o=C(G,"H2",{class:!0});var X=P(o);_=H(X,"Dynamic Editor"),X.forEach(p),G.forEach(p),u=M(z),n=C(z,"DIV",{class:!0});var q=P(n);d=C(q,"A",{class:!0,href:!0,title:!0});var K=P(d);W(c.$$.fragment,K),K.forEach(p),E=M(q),m=C(q,"A",{class:!0,href:!0,title:!0});var te=P(m);y=C(te,"IMG",{src:!0,class:!0}),te.forEach(p),f=M(q),h=C(q,"A",{class:!0,href:!0,title:!0});var Le=P(h);k=C(Le,"IMG",{src:!0,class:!0}),Le.forEach(p),A=M(q),F=C(q,"A",{class:!0,href:!0,title:!0});var Me=P(F);I=C(Me,"SPAN",{class:!0});var Be=P(I);D=H(Be,"help"),Be.forEach(p),Me.forEach(p),q.forEach(p),z.forEach(p),this.h()},h(){g(t,"class","accent svelte-n9c92r"),g(o,"class","svelte-n9c92r"),g(l,"class","home svelte-n9c92r"),g(d,"class","social discord svelte-n9c92r"),g(d,"href","https://discord.gg/6UzkTe6RvW"),g(d,"title","Join our Discord"),ze(y.src,i="/github-mark-white.svg")||g(y,"src",i),g(y,"class","svelte-n9c92r"),g(m,"class","social github svelte-n9c92r"),g(m,"href","https://github.com/promcteam/proskillapi"),g(m,"title","Check out our GitHub"),ze(k.src,w="/spigot.png")||g(k,"src",w),g(k,"class","svelte-n9c92r"),g(h,"class","social spigot svelte-n9c92r"),g(h,"href","https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/"),g(h,"title","Check out our resource on Spigot"),g(I,"class","material-symbols-rounded"),g(F,"class","social wiki svelte-n9c92r"),g(F,"href","https://promcteam.com/wiki/index.php?title=Proskillapi:Proskillapi"),g(F,"title","Wiki"),g(n,"class","socials svelte-n9c92r"),g(e,"id","header"),g(e,"class","svelte-n9c92r")},m(V,z){B(V,e,z),v(e,l),v(l,t),v(t,r),v(l,a),v(l,o),v(o,_),v(e,u),v(e,n),v(n,d),Z(c,d,null),v(n,E),v(n,m),v(m,y),v(n,f),v(n,h),v(h,k),v(n,A),v(n,F),v(F,I),v(I,D),N=!0,$||(b=T(l,"click",s[0]),$=!0)},p:oe,i(V){N||(O(c.$$.fragment,V),N=!0)},o(V){R(c.$$.fragment,V),N=!1},d(V){V&&p(e),J(c),$=!1,b()}}}function yl(s){return[()=>ye("/")]}class Dl extends ie{constructor(e){super(),ce(this,e,yl,El,fe,{})}}function ct(s){let e,l;return e=new el({}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function ft(s){let e,l,t,r;return{c(){e=S("div"),l=U("Drop to Import"),this.h()},l(a){e=C(a,"DIV",{class:!0});var o=P(e);l=H(o,"Drop to Import"),o.forEach(p),this.h()},h(){g(e,"class","dragging svelte-8v0iul")},m(a,o){B(a,e,o),v(e,l),t||(r=T(e,"dragleave",s[4]),t=!0)},p:oe,d(a){a&&p(e),t=!1,r()}}}function Il(s){let e,l,t,r,a,o,_,u,n,d,c,E,m,y,i,f,h,k,w,A,F;e=new Dl({}),t=new kl({});const I=s[6].default,D=ut(I,s,s[5],null);let N=s[2]&&ct(),$=s[0]&&ft(s);return{c(){j(e.$$.fragment),l=L(),j(t.$$.fragment),r=L(),a=S("div"),o=S("div"),D&&D.c(),_=L(),u=S("div"),n=S("div"),d=S("span"),c=U("cloud_download"),E=L(),m=S("div"),y=S("span"),i=U("save"),f=L(),N&&N.c(),h=L(),$&&$.c(),k=ee(),this.h()},l(b){W(e.$$.fragment,b),l=M(b),W(t.$$.fragment,b),r=M(b),a=C(b,"DIV",{id:!0,class:!0});var V=P(a);o=C(V,"DIV",{id:!0,class:!0});var z=P(o);D&&D.l(z),z.forEach(p),V.forEach(p),_=M(b),u=C(b,"DIV",{id:!0,class:!0});var G=P(u);n=C(G,"DIV",{class:!0,title:!0});var Y=P(n);d=C(Y,"SPAN",{class:!0});var X=P(d);c=H(X,"cloud_download"),X.forEach(p),Y.forEach(p),E=M(G),m=C(G,"DIV",{class:!0,title:!0});var q=P(m);y=C(q,"SPAN",{class:!0});var K=P(y);i=H(K,"save"),K.forEach(p),q.forEach(p),G.forEach(p),f=M(b),N&&N.l(b),h=M(b),$&&$.l(b),k=ee(),this.h()},h(){g(o,"id","body"),g(o,"class","svelte-8v0iul"),x(o,"centered",!s[1]),g(a,"id","body-container"),g(a,"class","svelte-8v0iul"),x(a,"empty",!s[1]),g(d,"class","material-symbols-rounded svelte-8v0iul"),g(n,"class","button backup svelte-8v0iul"),g(n,"title","Backup All Data"),g(y,"class","material-symbols-rounded svelte-8v0iul"),g(m,"class","button save svelte-8v0iul"),g(m,"title","Save"),g(u,"id","floating-buttons"),g(u,"class","svelte-8v0iul")},m(b,V){Z(e,b,V),B(b,l,V),Z(t,b,V),B(b,r,V),B(b,a,V),v(a,o),D&&D.m(o,null),B(b,_,V),B(b,u,V),v(u,n),v(n,d),v(d,c),v(u,E),v(u,m),v(m,y),v(y,i),B(b,f,V),N&&N.m(b,V),B(b,h,V),$&&$.m(b,V),B(b,k,V),w=!0,A||(F=[T(n,"click",s[3]),T(m,"click",s[7])],A=!0)},p(b,[V]){D&&D.p&&(!w||V&32)&&_t(D,I,b,b[5],w?vt(I,b[5],V,null):ht(b[5]),null),(!w||V&2)&&x(o,"centered",!b[1]),(!w||V&2)&&x(a,"empty",!b[1]),b[2]?N?V&4&&O(N,1):(N=ct(),N.c(),O(N,1),N.m(h.parentNode,h)):N&&(se(),R(N,1,1,()=>{N=null}),re()),b[0]?$?$.p(b,V):($=ft(b),$.c(),$.m(k.parentNode,k)):$&&($.d(1),$=null)},i(b){w||(O(e.$$.fragment,b),O(t.$$.fragment,b),O(D,b),O(N),w=!0)},o(b){R(e.$$.fragment,b),R(t.$$.fragment,b),R(D,b),R(N),w=!1},d(b){J(e,b),b&&p(l),J(t,b),b&&p(r),b&&p(a),D&&D.d(b),b&&p(_),b&&p(u),b&&p(f),N&&N.d(b),b&&p(h),$&&$.d(b),b&&p(k),A=!1,ae(F)}}}function Sl(s,e,l){let t,r;Q(s,Te,m=>l(1,t=m)),Q(s,Wt,m=>l(2,r=m));let{$$slots:a={},$$scope:o}=e,_=!1;mt(()=>{document.addEventListener("dragover",n),document.addEventListener("drop",c)}),gt(()=>{document.removeEventListener("dragover",n),document.removeEventListener("drop",c)});const u=()=>{alert("This feature isn't implemented yet")},n=m=>{var y,i,f;((i=(y=m.dataTransfer)==null?void 0:y.types)==null?void 0:i.length)>0&&((f=m.dataTransfer)==null?void 0:f.types[0])=="Files"&&(m.dataTransfer.dropEffect="copy",m.stopPropagation(),m.preventDefault(),l(0,_=!0))},d=()=>{setTimeout(()=>l(0,_=!1),50)},c=m=>{l(0,_=!1);for(let y=0;y<m.dataTransfer.files.length;y++){const i=m.dataTransfer.files[y];i.name.indexOf(".yml")!=-1&&kt(i)}m.stopPropagation(),m.preventDefault()},E=()=>yt();return s.$$set=m=>{"$$scope"in m&&l(5,o=m.$$scope)},[_,t,r,u,d,o,a,E]}class ql extends ie{constructor(e){super(),ce(this,e,Sl,Il,fe,{})}}export{ql as default};
