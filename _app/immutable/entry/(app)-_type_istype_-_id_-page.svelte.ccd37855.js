import{S as Ye,i as xe,s as et,w as te,H as le,k as E,a as R,q as W,y as Z,l as D,m as M,c as L,h as d,r as z,z as Y,n as T,p as ot,b as g,C as I,A as G,E as U,J as ae,g as j,u as oe,v as ce,d as Q,f as ue,O as se,R as rt,B as X,F as tt,a9 as at,P as fe,Z as ie,a1 as re,a2 as ke,V as ve,Q as lt,x as be,e as we,a8 as ft,U as ct}from"../chunks/index.1ee62562.js";import{T as Ee,H as De,M as Ie,b as ne,I as pe,J as Ve,K as Ce,L as Pe,N as Ae,O as he,Q as ut,R as Me,v as Te}from"../chunks/store.4ea87c14.js";import{M as ge}from"../chunks/Modal.38f0665d.js";import{T as nt}from"../chunks/Toggle.5a1895ad.js";function He(l,e,t){const o=l.slice();return o[35]=e[t],o}function Se(l,e,t){const o=l.slice();return o[38]=e[t],o}function Ne(l,e,t){const o=l.slice();return o[41]=e[t],o}function Re(l,e,t){const o=l.slice();return o[44]=e[t],o[45]=e,o[46]=t,o}function Le(l,e,t){const o=l.slice();return o[47]=e[t],o[48]=e,o[49]=t,o}function _t(l){let e,t,o;return{c(){e=E("span"),t=W("expand_less"),this.h()},l(i){e=D(i,"SPAN",{class:!0});var c=M(e);t=z(c,"expand_less"),c.forEach(d),this.h()},h(){T(e,"class","material-symbols-rounded svelte-3kwxiu")},m(i,c){g(i,e,c),I(e,t)},i(i){i&&(o||fe(()=>{o=lt(e,l[13],{duration:400}),o.start()}))},o:ke,d(i){i&&d(e)}}}function dt(l){let e,t,o;return{c(){e=E("span"),t=W("expand_more"),this.h()},l(i){e=D(i,"SPAN",{class:!0});var c=M(e);t=z(c,"expand_more"),c.forEach(d),this.h()},h(){T(e,"class","material-symbols-rounded svelte-3kwxiu")},m(i,c){g(i,e,c),I(e,t)},i(i){i&&(o||fe(()=>{o=lt(e,l[13],{duration:400}),o.start()}))},o:ke,d(i){i&&d(e)}}}function Oe(l){let e,t,o,i,c,a,u,r,_,s,v,f,$,m,C,h=l[0].components,b=[];for(let w=0;w<h.length;w+=1)b[w]=qe(Le(l,h,w));const J=w=>Q(b[w],1,1,()=>{b[w]=null});let S=l[0].isParent&&ye(l);return{c(){e=E("div"),t=E("div"),o=W("content_copy"),c=R(),a=E("div"),u=W("delete"),_=R(),s=E("div");for(let w=0;w<b.length;w+=1)b[w].c();v=R(),S&&S.c(),this.h()},l(w){e=D(w,"DIV",{class:!0});var N=M(e);t=D(N,"DIV",{class:!0,title:!0});var k=M(t);o=z(k,"content_copy"),k.forEach(d),c=L(N),a=D(N,"DIV",{class:!0,title:!0});var q=M(a);u=z(q,"delete"),q.forEach(d),N.forEach(d),_=L(w),s=D(w,"DIV",{class:!0});var O=M(s);for(let P=0;P<b.length;P+=1)b[P].l(O);v=L(O),S&&S.l(O),O.forEach(d),this.h()},h(){T(t,"class","material-symbols-rounded control copy svelte-3kwxiu"),T(t,"title","Copy"),T(a,"class","material-symbols-rounded control delete svelte-3kwxiu"),T(a,"title","Delete"),T(e,"class","controls svelte-3kwxiu"),T(s,"class","children svelte-3kwxiu")},m(w,N){g(w,e,N),I(e,t),I(t,o),I(e,c),I(e,a),I(a,u),g(w,_,N),g(w,s,N);for(let k=0;k<b.length;k+=1)b[k]&&b[k].m(s,null);I(s,v),S&&S.m(s,null),$=!0,m||(C=[U(t,"click",ae(l[15])),U(a,"click",ae(l[16]))],m=!0)},p(w,N){if(N[0]&3){h=w[0].components;let k;for(k=0;k<h.length;k+=1){const q=Le(w,h,k);b[k]?(b[k].p(q,N),j(b[k],1)):(b[k]=qe(q),b[k].c(),j(b[k],1),b[k].m(s,v))}for(ce(),k=h.length;k<b.length;k+=1)J(k);ue()}w[0].isParent?S?S.p(w,N):(S=ye(w),S.c(),S.m(s,null)):S&&(S.d(1),S=null)},i(w){if(!$){fe(()=>{$&&(i||(i=ie(t,ne,{},!0)),i.run(1))}),fe(()=>{$&&(r||(r=ie(a,ne,{},!0)),r.run(1))});for(let N=0;N<h.length;N+=1)j(b[N]);w&&fe(()=>{$&&(f||(f=ie(s,ne,{},!0)),f.run(1))}),$=!0}},o(w){i||(i=ie(t,ne,{},!1)),i.run(0),r||(r=ie(a,ne,{},!1)),r.run(0),b=b.filter(Boolean);for(let N=0;N<b.length;N+=1)Q(b[N]);w&&(f||(f=ie(s,ne,{},!1)),f.run(0)),$=!1},d(w){w&&d(e),w&&i&&i.end(),w&&r&&r.end(),w&&d(_),w&&d(s),re(b,w),S&&S.d(),w&&f&&f.end(),m=!1,tt(C)}}}function qe(l){let e,t,o,i,c;function a(r){l[17](r,l[47],l[48],l[49])}let u={skill:l[1]};return l[47]!==void 0&&(u.component=l[47]),t=new st({props:u}),te.push(()=>le(t,"component",a)),t.$on("update",l[18]),t.$on("save",l[19]),{c(){e=E("span"),Z(t.$$.fragment)},l(r){e=D(r,"SPAN",{});var _=M(e);Y(t.$$.fragment,_),_.forEach(d)},m(r,_){g(r,e,_),G(t,e,null),c=!0},p(r,_){l=r;const s={};_[0]&2&&(s.skill=l[1]),!o&&_[0]&1&&(o=!0,s.component=l[47],se(()=>o=!1)),t.$set(s)},i(r){c||(j(t.$$.fragment,r),r&&fe(()=>{c&&(i||(i=ie(e,ne,{},!0)),i.run(1))}),c=!0)},o(r){Q(t.$$.fragment,r),r&&(i||(i=ie(e,ne,{},!1)),i.run(0)),c=!1},d(r){r&&d(e),X(t),r&&i&&i.end()}}}function ye(l){let e,t,o,i;return{c(){e=E("div"),t=W("+ Add Component"),this.h()},l(c){e=D(c,"DIV",{class:!0});var a=M(e);t=z(a,"+ Add Component"),a.forEach(d),this.h()},h(){T(e,"class","chip svelte-3kwxiu")},m(c,a){g(c,e,a),I(e,t),o||(i=U(e,"click",ae(l[20])),o=!0)},p:ke,d(c){c&&d(e),o=!1,i()}}}function je(l){let e,t,o,i;return e=new he({props:{label:"Mana",$$slots:{default:[pt]},$$scope:{ctx:l}}}),o=new he({props:{label:"Cooldown",$$slots:{default:[ht]},$$scope:{ctx:l}}}),{c(){Z(e.$$.fragment),t=R(),Z(o.$$.fragment)},l(c){Y(e.$$.fragment,c),t=L(c),Y(o.$$.fragment,c)},m(c,a){G(e,c,a),g(c,t,a),G(o,c,a),i=!0},p(c,a){const u={};a[0]&1|a[1]&524288&&(u.$$scope={dirty:a,ctx:c}),e.$set(u);const r={};a[0]&1|a[1]&524288&&(r.$$scope={dirty:a,ctx:c}),o.$set(r)},i(c){i||(j(e.$$.fragment,c),j(o.$$.fragment,c),i=!0)},o(c){Q(e.$$.fragment,c),Q(o.$$.fragment,c),i=!1},d(c){X(e,c),c&&d(t),X(o,c)}}}function pt(l){let e,t,o;function i(a){l[24](a)}let c={};return l[0].mana!==void 0&&(c.data=l[0].mana),e=new nt({props:c}),te.push(()=>le(e,"data",i)),{c(){Z(e.$$.fragment)},l(a){Y(e.$$.fragment,a)},m(a,u){G(e,a,u),o=!0},p(a,u){const r={};!t&&u[0]&1&&(t=!0,r.data=a[0].mana,se(()=>t=!1)),e.$set(r)},i(a){o||(j(e.$$.fragment,a),o=!0)},o(a){Q(e.$$.fragment,a),o=!1},d(a){X(e,a)}}}function ht(l){let e,t,o;function i(a){l[25](a)}let c={};return l[0].cooldown!==void 0&&(c.data=l[0].cooldown),e=new nt({props:c}),te.push(()=>le(e,"data",i)),{c(){Z(e.$$.fragment)},l(a){Y(e.$$.fragment,a)},m(a,u){G(e,a,u),o=!0},p(a,u){const r={};!t&&u[0]&1&&(t=!0,r.data=a[0].cooldown,se(()=>t=!1)),e.$set(r)},i(a){o||(j(e.$$.fragment,a),o=!0)},o(a){Q(e.$$.fragment,a),o=!1},d(a){X(e,a)}}}function Be(l){let e,t,o,i;function c(r){l[26](r,l[44])}var a=l[44].component;function u(r){let _={color:!0};return r[44].data!==void 0&&(_.data=r[44].data),{props:_}}return a&&(e=be(a,u(l)),te.push(()=>le(e,"data",c)),e.$on("save",l[27])),{c(){e&&Z(e.$$.fragment),o=we()},l(r){e&&Y(e.$$.fragment,r),o=we()},m(r,_){e&&G(e,r,_),g(r,o,_),i=!0},p(r,_){l=r;const s={};if(!t&&_[0]&1&&(t=!0,s.data=l[44].data,se(()=>t=!1)),_[0]&1&&a!==(a=l[44].component)){if(e){ce();const v=e;Q(v.$$.fragment,1,0,()=>{X(v,1)}),ue()}a?(e=be(a,u(l)),te.push(()=>le(e,"data",c)),e.$on("save",l[27]),Z(e.$$.fragment),j(e.$$.fragment,1),G(e,o.parentNode,o)):e=null}else a&&e.$set(s)},i(r){i||(e&&j(e.$$.fragment,r),i=!0)},o(r){e&&Q(e.$$.fragment,r),i=!1},d(r){r&&d(o),e&&X(e,r)}}}function mt(l){let e,t=l[0].name+"",o,i,c,a,u,r,_,s=l[0]instanceof pe&&je(l),v=l[0].data,f=[];for(let m=0;m<v.length;m+=1)f[m]=Be(Re(l,v,m));const $=m=>Q(f[m],1,1,()=>{f[m]=null});return{c(){e=E("h2"),o=W(t),i=R(),c=E("hr"),a=R(),u=E("div"),s&&s.c(),r=R();for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){e=D(m,"H2",{});var C=M(e);o=z(C,t),C.forEach(d),i=L(m),c=D(m,"HR",{}),a=L(m),u=D(m,"DIV",{class:!0});var h=M(u);s&&s.l(h),r=L(h);for(let b=0;b<f.length;b+=1)f[b].l(h);h.forEach(d),this.h()},h(){T(u,"class","component-entry svelte-3kwxiu")},m(m,C){g(m,e,C),I(e,o),g(m,i,C),g(m,c,C),g(m,a,C),g(m,u,C),s&&s.m(u,null),I(u,r);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(u,null);_=!0},p(m,C){if((!_||C[0]&1)&&t!==(t=m[0].name+"")&&oe(o,t),m[0]instanceof pe?s?(s.p(m,C),C[0]&1&&j(s,1)):(s=je(m),s.c(),j(s,1),s.m(u,r)):s&&(ce(),Q(s,1,1,()=>{s=null}),ue()),C[0]&1){v=m[0].data;let h;for(h=0;h<v.length;h+=1){const b=Re(m,v,h);f[h]?(f[h].p(b,C),j(f[h],1)):(f[h]=Be(b),f[h].c(),j(f[h],1),f[h].m(u,null))}for(ce(),h=v.length;h<f.length;h+=1)$(h);ue()}},i(m){if(!_){j(s);for(let C=0;C<v.length;C+=1)j(f[C]);_=!0}},o(m){Q(s),f=f.filter(Boolean);for(let C=0;C<f.length;C+=1)Q(f[C]);_=!1},d(m){m&&d(e),m&&d(i),m&&d(c),m&&d(a),m&&d(u),s&&s.d(),re(f,m)}}}function Je(l){let e,t,o,i,c,a,u,r=l[7],_=[];for(let s=0;s<r.length;s+=1)_[s]=Qe(Ne(l,r,s));return{c(){e=E("hr"),t=R(),o=E("div"),i=E("h3"),c=W("Conditions"),a=R(),u=E("div");for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){e=D(s,"HR",{}),t=L(s),o=D(s,"DIV",{class:!0});var v=M(o);i=D(v,"H3",{class:!0});var f=M(i);c=z(f,"Conditions"),f.forEach(d),v.forEach(d),a=L(s),u=D(s,"DIV",{class:!0});var $=M(u);for(let m=0;m<_.length;m+=1)_[m].l($);$.forEach(d),this.h()},h(){T(i,"class","svelte-3kwxiu"),T(o,"class","comp-modal-header svelte-3kwxiu"),T(u,"class","triggers")},m(s,v){g(s,e,v),g(s,t,v),g(s,o,v),I(o,i),I(i,c),g(s,a,v),g(s,u,v);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(u,null)},p(s,v){if(v[0]&2176){r=s[7];let f;for(f=0;f<r.length;f+=1){const $=Ne(s,r,f);_[f]?_[f].p($,v):(_[f]=Qe($),_[f].c(),_[f].m(u,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=r.length}},d(s){s&&d(e),s&&d(t),s&&d(o),s&&d(a),s&&d(u),re(_,s)}}}function Qe(l){let e,t=l[41].name+"",o,i,c;function a(){return l[30](l[41])}return{c(){e=E("div"),o=W(t),this.h()},l(u){e=D(u,"DIV",{class:!0});var r=M(e);o=z(r,t),r.forEach(d),this.h()},h(){T(e,"class","comp-select")},m(u,r){g(u,e,r),I(e,o),i||(c=U(e,"click",a),i=!0)},p(u,r){l=u,r[0]&128&&t!==(t=l[41].name+"")&&oe(o,t)},d(u){u&&d(e),i=!1,c()}}}function We(l){let e,t,o,i,c,a,u,r=l[6],_=[];for(let s=0;s<r.length;s+=1)_[s]=ze(Se(l,r,s));return{c(){e=E("hr"),t=R(),o=E("div"),i=E("h3"),c=W("Targets"),a=R(),u=E("div");for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){e=D(s,"HR",{}),t=L(s),o=D(s,"DIV",{class:!0});var v=M(o);i=D(v,"H3",{class:!0});var f=M(i);c=z(f,"Targets"),f.forEach(d),v.forEach(d),a=L(s),u=D(s,"DIV",{class:!0});var $=M(u);for(let m=0;m<_.length;m+=1)_[m].l($);$.forEach(d),this.h()},h(){T(i,"class","svelte-3kwxiu"),T(o,"class","comp-modal-header svelte-3kwxiu"),T(u,"class","triggers")},m(s,v){g(s,e,v),g(s,t,v),g(s,o,v),I(o,i),I(i,c),g(s,a,v),g(s,u,v);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(u,null)},p(s,v){if(v[0]&2112){r=s[6];let f;for(f=0;f<r.length;f+=1){const $=Se(s,r,f);_[f]?_[f].p($,v):(_[f]=ze($),_[f].c(),_[f].m(u,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=r.length}},d(s){s&&d(e),s&&d(t),s&&d(o),s&&d(a),s&&d(u),re(_,s)}}}function ze(l){let e,t=l[38].name+"",o,i,c;function a(){return l[31](l[38])}return{c(){e=E("div"),o=W(t),this.h()},l(u){e=D(u,"DIV",{class:!0});var r=M(e);o=z(r,t),r.forEach(d),this.h()},h(){T(e,"class","comp-select")},m(u,r){g(u,e,r),I(e,o),i||(c=U(e,"click",a),i=!0)},p(u,r){l=u,r[0]&64&&t!==(t=l[38].name+"")&&oe(o,t)},d(u){u&&d(e),i=!1,c()}}}function Fe(l){let e,t,o,i,c,a,u,r=l[8],_=[];for(let s=0;s<r.length;s+=1)_[s]=Ke(He(l,r,s));return{c(){e=E("hr"),t=R(),o=E("div"),i=E("h3"),c=W("Mechanics"),a=R(),u=E("div");for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){e=D(s,"HR",{}),t=L(s),o=D(s,"DIV",{class:!0});var v=M(o);i=D(v,"H3",{class:!0});var f=M(i);c=z(f,"Mechanics"),f.forEach(d),v.forEach(d),a=L(s),u=D(s,"DIV",{class:!0});var $=M(u);for(let m=0;m<_.length;m+=1)_[m].l($);$.forEach(d),this.h()},h(){T(i,"class","svelte-3kwxiu"),T(o,"class","comp-modal-header svelte-3kwxiu"),T(u,"class","triggers")},m(s,v){g(s,e,v),g(s,t,v),g(s,o,v),I(o,i),I(i,c),g(s,a,v),g(s,u,v);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(u,null)},p(s,v){if(v[0]&2304){r=s[8];let f;for(f=0;f<r.length;f+=1){const $=He(s,r,f);_[f]?_[f].p($,v):(_[f]=Ke($),_[f].c(),_[f].m(u,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=r.length}},d(s){s&&d(e),s&&d(t),s&&d(o),s&&d(a),s&&d(u),re(_,s)}}}function Ke(l){let e,t=l[35].name+"",o,i,c;function a(){return l[32](l[35])}return{c(){e=E("div"),o=W(t),this.h()},l(u){e=D(u,"DIV",{class:!0});var r=M(e);o=z(r,t),r.forEach(d),this.h()},h(){T(e,"class","comp-select")},m(u,r){g(u,e,r),I(e,o),i||(c=U(e,"click",a),i=!0)},p(u,r){l=u,r[0]&256&&t!==(t=l[35].name+"")&&oe(o,t)},d(u){u&&d(e),i=!1,c()}}}function vt(l){let e,t,o,i,c,a,u,r,_,s,v,f,$,m,C,h,b,J,S,w;function N(n){l[29](n)}let k={placeholder:"Search..."};l[2]!==void 0&&(k.value=l[2]),r=new he({props:k}),te.push(()=>le(r,"value",N));let q=l[7].length>0&&Je(l),O=l[6].length>0&&We(l),P=l[8].length>0&&Fe(l);return{c(){e=E("div"),t=E("div"),o=R(),i=E("h2"),c=W("Add a Component"),a=R(),u=E("div"),Z(r.$$.fragment),s=R(),q&&q.c(),v=R(),O&&O.c(),f=R(),P&&P.c(),$=R(),m=E("hr"),C=R(),h=E("div"),b=W("Cancel"),this.h()},l(n){e=D(n,"DIV",{class:!0});var p=M(e);t=D(p,"DIV",{}),M(t).forEach(d),o=L(p),i=D(p,"H2",{});var y=M(i);c=z(y,"Add a Component"),y.forEach(d),a=L(p),u=D(p,"DIV",{class:!0});var H=M(u);Y(r.$$.fragment,H),H.forEach(d),p.forEach(d),s=L(n),q&&q.l(n),v=L(n),O&&O.l(n),f=L(n),P&&P.l(n),$=L(n),m=D(n,"HR",{}),C=L(n),h=D(n,"DIV",{class:!0});var F=M(h);b=z(F,"Cancel"),F.forEach(d),this.h()},h(){T(u,"class","search-bar"),T(e,"class","modal-header-wrapper"),T(h,"class","cancel")},m(n,p){g(n,e,p),I(e,t),I(e,o),I(e,i),I(i,c),I(e,a),I(e,u),G(r,u,null),g(n,s,p),q&&q.m(n,p),g(n,v,p),O&&O.m(n,p),g(n,f,p),P&&P.m(n,p),g(n,$,p),g(n,m,p),g(n,C,p),g(n,h,p),I(h,b),J=!0,S||(w=U(h,"click",l[33]),S=!0)},p(n,p){const y={};!_&&p[0]&4&&(_=!0,y.value=n[2],se(()=>_=!1)),r.$set(y),n[7].length>0?q?q.p(n,p):(q=Je(n),q.c(),q.m(v.parentNode,v)):q&&(q.d(1),q=null),n[6].length>0?O?O.p(n,p):(O=We(n),O.c(),O.m(f.parentNode,f)):O&&(O.d(1),O=null),n[8].length>0?P?P.p(n,p):(P=Fe(n),P.c(),P.m($.parentNode,$)):P&&(P.d(1),P=null)},i(n){J||(j(r.$$.fragment,n),J=!0)},o(n){Q(r.$$.fragment,n),J=!1},d(n){n&&d(e),X(r),n&&d(s),q&&q.d(n),n&&d(v),O&&O.d(n),n&&d(f),P&&P.d(n),n&&d($),n&&d(m),n&&d(C),n&&d(h),S=!1,w()}}}function gt(l){let e,t,o,i,c,a,u,r=l[10]()+"",_,s,v=l[0].name+"",f,$,m,C,h,b,J,S,w,N,k,q;function O(V,B){return V[5]?dt:_t}let P=O(l),n=P(l),p=!l[5]&&Oe(l);function y(V){l[28](V)}let H={width:"70%",$$slots:{default:[mt]},$$scope:{ctx:l}};l[3]!==void 0&&(H.open=l[3]),h=new ge({props:H}),te.push(()=>le(h,"open",y));function F(V){l[34](V)}let x={width:"70%",$$slots:{default:[vt]},$$scope:{ctx:l}};return l[4]!==void 0&&(x.open=l[4]),S=new ge({props:x}),te.push(()=>le(S,"open",F)),{c(){e=E("div"),t=E("div"),n.c(),o=R(),i=E("div"),c=R(),a=E("div"),u=E("span"),_=W(r),s=W(": "),f=W(v),$=R(),p&&p.c(),C=R(),Z(h.$$.fragment),J=R(),Z(S.$$.fragment),this.h()},l(V){e=D(V,"DIV",{class:!0});var B=M(e);t=D(B,"DIV",{draggable:!0,class:!0});var K=M(t);n.l(K),o=L(K),i=D(K,"DIV",{class:!0}),M(i).forEach(d),c=L(K),a=D(K,"DIV",{class:!0});var ee=M(a);u=D(ee,"SPAN",{class:!0});var de=M(u);_=z(de,r),de.forEach(d),s=z(ee,": "),f=z(ee,v),ee.forEach(d),$=L(K),p&&p.l(K),K.forEach(d),B.forEach(d),C=L(V),Y(h.$$.fragment,V),J=L(V),Y(S.$$.fragment,V),this.h()},h(){T(i,"class","corner svelte-3kwxiu"),T(u,"class","svelte-3kwxiu"),T(a,"class","name svelte-3kwxiu"),T(t,"draggable","true"),T(t,"class","comp-body svelte-3kwxiu"),ot(t,"--comp-color",l[12]()),T(e,"class","wrapper svelte-3kwxiu")},m(V,B){g(V,e,B),I(e,t),n.m(t,null),I(t,o),I(t,i),I(t,c),I(t,a),I(a,u),I(u,_),I(a,s),I(a,f),I(t,$),p&&p.m(t,null),g(V,C,B),G(h,V,B),g(V,J,B),G(S,V,B),N=!0,k||(q=[U(i,"click",ae(l[14])),U(t,"dragstart",ae(l[21])),U(t,"dragend",l[22]),U(t,"click",ae(l[23]))],k=!0)},p(V,B){P!==(P=O(V))&&(n.d(1),n=P(V),n&&(n.c(),j(n,1),n.m(t,o))),(!N||B[0]&1)&&v!==(v=V[0].name+"")&&oe(f,v),V[5]?p&&(ce(),Q(p,1,1,()=>{p=null}),ue()):p?(p.p(V,B),B[0]&32&&j(p,1)):(p=Oe(V),p.c(),j(p,1),p.m(t,null));const K={};B[0]&1|B[1]&524288&&(K.$$scope={dirty:B,ctx:V}),!b&&B[0]&8&&(b=!0,K.open=V[3],se(()=>b=!1)),h.$set(K);const ee={};B[0]&468|B[1]&524288&&(ee.$$scope={dirty:B,ctx:V}),!w&&B[0]&16&&(w=!0,ee.open=V[4],se(()=>w=!1)),S.$set(ee)},i(V){N||(j(n),j(p),m&&m.end(1),j(h.$$.fragment,V),j(S.$$.fragment,V),N=!0)},o(V){Q(p),m=rt(t,ne,{}),Q(h.$$.fragment,V),Q(S.$$.fragment,V),N=!1},d(V){V&&d(e),n.d(),p&&p.d(),V&&m&&m.end(),V&&d(C),X(h,V),V&&d(J),X(S,V),k=!1,tt(q)}}}function kt(l,e,t){let{skill:o}=e,{component:i}=e;const c=at();let a=!1,u=!1,r=!1,_="",s,v,f;const $=()=>i instanceof pe?"Trigger":i instanceof Ve?"Condition":i instanceof Ce?"Target":i instanceof Pe?"Mechanic":"???",m=A=>{t(0,i.components=[...i.components,A],i),t(4,u=!1),t(2,_=""),c("save")},C=()=>i instanceof pe?"#0083ef":i instanceof Ve?"#feac00":i instanceof Ce?"#04af38":i instanceof Pe?"#ff3a3a":"orange",h=(A,{duration:_e})=>({duration:_e,css:me=>`transform: rotate(${180-ut(me)*180}deg);`}),b=()=>t(5,r=!r),J=()=>console.log("clicked copy"),S=()=>{o.removeComponent(i),c("update")};function w(A,_e,me,$e){me[$e]=A,t(0,i)}function N(A){ve.call(this,l,A)}function k(A){ve.call(this,l,A)}const q=()=>t(4,u=!0),O=()=>Ae.set(i),P=()=>Ae.set(void 0),n=()=>t(3,a=!0);function p(A){l.$$.not_equal(i.mana,A)&&(i.mana=A,t(0,i))}function y(A){l.$$.not_equal(i.cooldown,A)&&(i.cooldown=A,t(0,i))}function H(A,_e){l.$$.not_equal(_e.data,A)&&(_e.data=A,t(0,i))}function F(A){ve.call(this,l,A)}function x(A){a=A,t(3,a)}function V(A){_=A,t(2,_)}const B=A=>m(A),K=A=>m(A),ee=A=>m(A),de=()=>t(4,u=!1);function it(A){u=A,t(4,u)}return l.$$set=A=>{"skill"in A&&t(1,o=A.skill),"component"in A&&t(0,i=A.component)},l.$$.update=()=>{l.$$.dirty[0]&4&&(t(6,s=Object.keys(Ee.MAP).filter(A=>A.toLowerCase().includes(_.toLowerCase())).sort().map(A=>Ee.MAP[A].new())),t(7,v=Object.keys(De.MAP).filter(A=>A.toLowerCase().includes(_.toLowerCase())).sort().map(A=>De.MAP[A].new())),t(8,f=Object.keys(Ie.MAP).filter(A=>A.toLowerCase().includes(_.toLowerCase())).sort().map(A=>Ie.MAP[A].new()))),l.$$.dirty[0]&1&&i&&c("save")},[i,o,_,a,u,r,s,v,f,c,$,m,C,h,b,J,S,w,N,k,q,O,P,n,p,y,H,F,x,V,B,K,ee,de,it]}class st extends Ye{constructor(e){super(),xe(this,e,kt,gt,et,{skill:1,component:0},null,[-1,-1])}}function Ue(l,e,t){const o=l.slice();return o[15]=e[t],o}function Ze(l,e,t){const o=l.slice();return o[18]=e[t],o}function Ge(l){let e,t,o;return t=new st({props:{skill:l[1],component:l[18]}}),t.$on("update",l[5]),t.$on("save",l[6]),{c(){e=E("div"),Z(t.$$.fragment),this.h()},l(i){e=D(i,"DIV",{class:!0});var c=M(e);Y(t.$$.fragment,c),c.forEach(d),this.h()},h(){T(e,"class","widget svelte-1tyfxc")},m(i,c){g(i,e,c),G(t,e,null),o=!0},p(i,c){const a={};c&2&&(a.skill=i[1]),c&2&&(a.component=i[18]),t.$set(a)},i(i){o||(j(t.$$.fragment,i),o=!0)},o(i){Q(t.$$.fragment,i),o=!1},d(i){i&&d(e),X(t)}}}function Xe(l){let e,t=l[15].name+"",o,i,c,a;function u(){return l[10](l[15])}return{c(){e=E("div"),o=W(t),i=R(),this.h()},l(r){e=D(r,"DIV",{class:!0});var _=M(e);o=z(_,t),i=L(_),_.forEach(d),this.h()},h(){T(e,"class","comp-select")},m(r,_){g(r,e,_),I(e,o),I(e,i),c||(a=U(e,"click",u),c=!0)},p(r,_){l=r,_&8&&t!==(t=l[15].name+"")&&oe(o,t)},d(r){r&&d(e),c=!1,a()}}}function $t(l){let e,t,o,i,c,a,u,r,_,s,v,f,$,m,C,h,b,J,S,w,N;function k(n){l[9](n)}let q={placeholder:"Search..."};l[0]!==void 0&&(q.value=l[0]),r=new he({props:q}),te.push(()=>le(r,"value",k));let O=l[3],P=[];for(let n=0;n<O.length;n+=1)P[n]=Xe(Ue(l,O,n));return{c(){e=E("div"),t=E("div"),o=R(),i=E("h2"),c=W("Select New Trigger"),a=R(),u=E("div"),Z(r.$$.fragment),s=R(),v=E("hr"),f=R(),$=E("div");for(let n=0;n<P.length;n+=1)P[n].c();m=R(),C=E("hr"),h=R(),b=E("div"),J=W("Cancel"),this.h()},l(n){e=D(n,"DIV",{class:!0});var p=M(e);t=D(p,"DIV",{}),M(t).forEach(d),o=L(p),i=D(p,"H2",{class:!0});var y=M(i);c=z(y,"Select New Trigger"),y.forEach(d),a=L(p),u=D(p,"DIV",{class:!0});var H=M(u);Y(r.$$.fragment,H),H.forEach(d),p.forEach(d),s=L(n),v=D(n,"HR",{}),f=L(n),$=D(n,"DIV",{class:!0});var F=M($);for(let V=0;V<P.length;V+=1)P[V].l(F);F.forEach(d),m=L(n),C=D(n,"HR",{}),h=L(n),b=D(n,"DIV",{class:!0});var x=M(b);J=z(x,"Cancel"),x.forEach(d),this.h()},h(){T(i,"class","modal-header svelte-1tyfxc"),T(u,"class","search-bar"),T(e,"class","modal-header-wrapper"),T($,"class","triggers"),T(b,"class","cancel")},m(n,p){g(n,e,p),I(e,t),I(e,o),I(e,i),I(i,c),I(e,a),I(e,u),G(r,u,null),g(n,s,p),g(n,v,p),g(n,f,p),g(n,$,p);for(let y=0;y<P.length;y+=1)P[y]&&P[y].m($,null);g(n,m,p),g(n,C,p),g(n,h,p),g(n,b,p),I(b,J),S=!0,w||(N=U(b,"click",l[11]),w=!0)},p(n,p){const y={};if(!_&&p&1&&(_=!0,y.value=n[0],se(()=>_=!1)),r.$set(y),p&24){O=n[3];let H;for(H=0;H<O.length;H+=1){const F=Ue(n,O,H);P[H]?P[H].p(F,p):(P[H]=Xe(F),P[H].c(),P[H].m($,null))}for(;H<P.length;H+=1)P[H].d(1);P.length=O.length}},i(n){S||(j(r.$$.fragment,n),S=!0)},o(n){Q(r.$$.fragment,n),S=!1},d(n){n&&d(e),X(r),n&&d(s),n&&d(v),n&&d(f),n&&d($),re(P,n),n&&d(m),n&&d(C),n&&d(h),n&&d(b),w=!1,N()}}}function bt(l){let e,t,o,i,c=l[1].name+"",a,u,r,_,s,v,f,$,m,C,h,b,J,S,w;document.title=e="ProSkillAPI Dynamic Editor - "+l[1].name;let N=l[1].triggers,k=[];for(let n=0;n<N.length;n+=1)k[n]=Ge(Ze(l,N,n));const q=n=>Q(k[n],1,1,()=>{k[n]=null});function O(n){l[12](n)}let P={$$slots:{default:[$t]},$$scope:{ctx:l}};return l[2]!==void 0&&(P.open=l[2]),h=new ge({props:P}),te.push(()=>le(h,"open",O)),{c(){t=R(),o=E("div"),i=E("h2"),a=W(c),u=R(),r=E("hr"),_=R(),s=E("div");for(let n=0;n<k.length;n+=1)k[n].c();v=R(),f=E("div"),$=E("span"),m=W("variables"),C=R(),Z(h.$$.fragment),this.h()},l(n){ft("svelte-r5m1v8",document.head).forEach(d),t=L(n),o=D(n,"DIV",{class:!0});var y=M(o);i=D(y,"H2",{class:!0});var H=M(i);a=z(H,c),H.forEach(d),y.forEach(d),u=L(n),r=D(n,"HR",{}),_=L(n),s=D(n,"DIV",{class:!0});var F=M(s);for(let B=0;B<k.length;B+=1)k[B].l(F);v=L(F),f=D(F,"DIV",{class:!0,title:!0});var x=M(f);$=D(x,"SPAN",{class:!0});var V=M($);m=z(V,"variables"),V.forEach(d),x.forEach(d),F.forEach(d),C=L(n),Y(h.$$.fragment,n),this.h()},h(){T(i,"class","svelte-1tyfxc"),T(o,"class","header svelte-1tyfxc"),T($,"class","material-symbols-rounded svelte-1tyfxc"),T(f,"class","add-trigger chip svelte-1tyfxc"),T(f,"title","Add Trigger"),T(s,"class","container svelte-1tyfxc")},m(n,p){g(n,t,p),g(n,o,p),I(o,i),I(i,a),g(n,u,p),g(n,r,p),g(n,_,p),g(n,s,p);for(let y=0;y<k.length;y+=1)k[y]&&k[y].m(s,null);I(s,v),I(s,f),I(f,$),I($,m),g(n,C,p),G(h,n,p),J=!0,S||(w=U(f,"click",l[8]),S=!0)},p(n,[p]){if((!J||p&2)&&e!==(e="ProSkillAPI Dynamic Editor - "+n[1].name)&&(document.title=e),(!J||p&2)&&c!==(c=n[1].name+"")&&oe(a,c),p&98){N=n[1].triggers;let H;for(H=0;H<N.length;H+=1){const F=Ze(n,N,H);k[H]?(k[H].p(F,p),j(k[H],1)):(k[H]=Ge(F),k[H].c(),j(k[H],1),k[H].m(s,v))}for(ce(),H=N.length;H<k.length;H+=1)q(H);ue()}const y={};p&2097165&&(y.$$scope={dirty:p,ctx:n}),!b&&p&4&&(b=!0,y.open=n[2],se(()=>b=!1)),h.$set(y)},i(n){if(!J){for(let p=0;p<N.length;p+=1)j(k[p]);j(h.$$.fragment,n),J=!0}},o(n){k=k.filter(Boolean);for(let p=0;p<k.length;p+=1)Q(k[p]);Q(h.$$.fragment,n),J=!1},d(n){n&&d(t),n&&d(o),n&&d(u),n&&d(r),n&&d(_),n&&d(s),re(k,n),n&&d(C),X(h,n),S=!1,w()}}}function wt(l,e,t){let{data:o}=e,i,c=!1,a="",u;const r=h=>{i.triggers.push(h.detail),_(),setTimeout(()=>t(2,c=!1))},_=()=>{t(1,i.triggers=[...i.triggers],i),s()},s=()=>Te.set([...ct(Te)]),v=()=>t(2,c=!0);function f(h){a=h,t(0,a)}const $=h=>r({detail:h.clone()}),m=()=>t(2,c=!1);function C(h){c=h,t(2,c)}return l.$$set=h=>{"data"in h&&t(7,o=h.data)},l.$$.update=()=>{l.$$.dirty&128&&o&&t(1,i=o.data),l.$$.dirty&1&&t(3,u=Object.keys(Me.MAP).filter(h=>h.toLowerCase().includes(a.toLowerCase())).sort().map(h=>new Me.MAP[h]))},[a,i,c,u,r,_,s,o,v,f,$,m,C]}class Ct extends Ye{constructor(e){super(),xe(this,e,wt,bt,et,{data:7})}}export{Ct as default};
