import{S as tt,i as lt,s as nt,w as te,H as le,k as V,a as M,q as F,y as Z,l as C,m as N,c as L,h as _,r as J,z as ee,n as H,p as ct,b as $,C as I,A as G,E as Y,J as ue,g as j,u as oe,v as ae,d as B,f as fe,O as ne,R as ut,B as x,F as it,a8 as _t,o as st,X as dt,P as _e,Z as se,a2 as qe,V as De,Q as ot,Y as pt,a1 as de,e as Ee,x as He,a9 as ht,a0 as mt,U as vt}from"../chunks/index.3926e6cc.js";import{R as me,F as ke,H as Ne,t as Se}from"../chunks/store.412733a5.js";import{M as Ce,b as $e,a as we,P as Ve}from"../chunks/targets.72c6b827.js";import{s as ie,P as ve,b as gt,T as rt}from"../chunks/ProInput.a5acf289.js";function Te(i,e,t){const n=i.slice();return n[42]=e[t],n}function Ae(i,e,t){const n=i.slice();return n[45]=e[t],n}function ye(i,e,t){const n=i.slice();return n[48]=e[t],n}function Re(i,e,t){const n=i.slice();return n[51]=e[t],n[52]=e,n[53]=t,n}function Me(i,e,t){const n=i.slice();return n[54]=e[t],n[55]=e,n[56]=t,n}function bt(i){let e,t,n;return{c(){e=V("span"),t=F("expand_less"),this.h()},l(l){e=C(l,"SPAN",{class:!0});var r=N(e);t=J(r,"expand_less"),r.forEach(_),this.h()},h(){H(e,"class","material-symbols-rounded svelte-crwhqu")},m(l,r){$(l,e,r),I(e,t)},i(l){l&&(n||_e(()=>{n=ot(e,i[13],{duration:400}),n.start()}))},o:qe,d(l){l&&_(e)}}}function kt(i){let e,t,n;return{c(){e=V("span"),t=F("expand_more"),this.h()},l(l){e=C(l,"SPAN",{class:!0});var r=N(e);t=J(r,"expand_more"),r.forEach(_),this.h()},h(){H(e,"class","material-symbols-rounded svelte-crwhqu")},m(l,r){$(l,e,r),I(e,t)},i(l){l&&(n||_e(()=>{n=ot(e,i[13],{duration:400}),n.start()}))},o:qe,d(l){l&&_(e)}}}function Le(i){let e,t,n,l,r,o,u,a,f,s,p=[],d=new Map,b,S,T,K,y,v=i[0].components;const W=m=>m[54].id;for(let m=0;m<v.length;m+=1){let q=Me(i,v,m),w=W(q);d.set(w,p[m]=Oe(w,q))}let h=i[0].isParent&&Ke(i);return{c(){e=V("div"),t=V("div"),n=F("content_copy"),r=M(),o=V("div"),u=F("delete"),f=M(),s=V("div");for(let m=0;m<p.length;m+=1)p[m].c();b=M(),h&&h.c(),this.h()},l(m){e=C(m,"DIV",{class:!0});var q=N(e);t=C(q,"DIV",{class:!0,title:!0});var w=N(t);n=J(w,"content_copy"),w.forEach(_),r=L(q),o=C(q,"DIV",{class:!0,title:!0});var R=N(o);u=J(R,"delete"),R.forEach(_),q.forEach(_),f=L(m),s=C(m,"DIV",{class:!0});var D=N(s);for(let c=0;c<p.length;c+=1)p[c].l(D);b=L(D),h&&h.l(D),D.forEach(_),this.h()},h(){H(t,"class","material-symbols-rounded control copy svelte-crwhqu"),H(t,"title","Copy"),H(o,"class","material-symbols-rounded control delete svelte-crwhqu"),H(o,"title","Delete"),H(e,"class","controls svelte-crwhqu"),H(s,"class","children svelte-crwhqu")},m(m,q){$(m,e,q),I(e,t),I(t,n),I(e,r),I(e,o),I(o,u),$(m,f,q),$(m,s,q);for(let w=0;w<p.length;w+=1)p[w]&&p[w].m(s,null);I(s,b),h&&h.m(s,null),T=!0,K||(y=[Y(t,"click",ue(i[18])),Y(o,"click",ue(i[19]))],K=!0)},p(m,q){q[0]&3&&(v=m[0].components,ae(),p=dt(p,q,W,1,m,v,d,s,pt,Oe,b,Me),fe()),m[0].isParent?h?h.p(m,q):(h=Ke(m),h.c(),h.m(s,null)):h&&(h.d(1),h=null)},i(m){if(!T){_e(()=>{T&&(l||(l=se(t,ie,{},!0)),l.run(1))}),_e(()=>{T&&(a||(a=se(o,ie,{},!0)),a.run(1))});for(let q=0;q<v.length;q+=1)j(p[q]);m&&_e(()=>{T&&(S||(S=se(s,ie,{},!0)),S.run(1))}),T=!0}},o(m){l||(l=se(t,ie,{},!1)),l.run(0),a||(a=se(o,ie,{},!1)),a.run(0);for(let q=0;q<p.length;q+=1)B(p[q]);m&&(S||(S=se(s,ie,{},!1)),S.run(0)),T=!1},d(m){m&&_(e),m&&l&&l.end(),m&&a&&a.end(),m&&_(f),m&&_(s);for(let q=0;q<p.length;q+=1)p[q].d();h&&h.d(),m&&S&&S.end(),K=!1,it(y)}}}function Oe(i,e){let t,n,l,r,o;function u(f){e[20](f,e[54],e[55],e[56])}let a={skill:e[1]};return e[54]!==void 0&&(a.component=e[54]),n=new at({props:a}),te.push(()=>le(n,"component",u)),n.$on("update",e[21]),n.$on("save",e[22]),{key:i,first:null,c(){t=V("span"),Z(n.$$.fragment),this.h()},l(f){t=C(f,"SPAN",{});var s=N(t);ee(n.$$.fragment,s),s.forEach(_),this.h()},h(){this.first=t},m(f,s){$(f,t,s),G(n,t,null),o=!0},p(f,s){e=f;const p={};s[0]&2&&(p.skill=e[1]),!l&&s[0]&1&&(l=!0,p.component=e[54],ne(()=>l=!1)),n.$set(p)},i(f){o||(j(n.$$.fragment,f),f&&_e(()=>{o&&(r||(r=se(t,ie,{},!0)),r.run(1))}),o=!0)},o(f){B(n.$$.fragment,f),f&&(r||(r=se(t,ie,{},!1)),r.run(0)),o=!1},d(f){f&&_(t),x(n),f&&r&&r.end()}}}function Ke(i){let e,t,n,l;return{c(){e=V("div"),t=F("+ Add Component"),this.h()},l(r){e=C(r,"DIV",{class:!0});var o=N(e);t=J(o,"+ Add Component"),o.forEach(_),this.h()},h(){H(e,"class","chip svelte-crwhqu")},m(r,o){$(r,e,o),I(e,t),n||(l=Y(e,"click",ue(i[23])),n=!0)},p:qe,d(r){r&&_(e),n=!1,l()}}}function je(i){let e,t=i[0].description+"",n;return{c(){e=V("div"),n=F(t),this.h()},l(l){e=C(l,"DIV",{class:!0});var r=N(e);n=J(r,t),r.forEach(_),this.h()},h(){H(e,"class","modal-desc svelte-crwhqu")},m(l,r){$(l,e,r),I(e,n)},p(l,r){r[0]&1&&t!==(t=l[0].description+"")&&oe(n,t)},d(l){l&&_(e)}}}function $t(i){let e,t,n;function l(o){i[29](o)}let r={label:"Icon Key",tooltip:'The key used by the component in the Icon Lore. If this is set to "example" and has a value name of "value", it can be referenced using the string "{attr:example.value}"'};return i[0].iconKey!==void 0&&(r.value=i[0].iconKey),e=new ve({props:r}),te.push(()=>le(e,"value",l)),{c(){Z(e.$$.fragment)},l(o){ee(e.$$.fragment,o)},m(o,u){G(e,o,u),n=!0},p(o,u){const a={};!t&&u[0]&1&&(t=!0,a.value=o[0].iconKey,ne(()=>t=!1)),e.$set(a)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),n=!1},d(o){x(e,o)}}}function wt(i){let e,t,n,l;return e=new ve({props:{label:"Mana",tooltip:"Whether this trigger requires the mana cost to activate",$$slots:{default:[Et]},$$scope:{ctx:i}}}),n=new ve({props:{label:"Cooldown",tooltip:"Whether this trigger requires to be off cooldown to activate",$$slots:{default:[It]},$$scope:{ctx:i}}}),{c(){Z(e.$$.fragment),t=M(),Z(n.$$.fragment)},l(r){ee(e.$$.fragment,r),t=L(r),ee(n.$$.fragment,r)},m(r,o){G(e,r,o),$(r,t,o),G(n,r,o),l=!0},p(r,o){const u={};o[0]&1|o[1]&67108864&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const a={};o[0]&1|o[1]&67108864&&(a.$$scope={dirty:o,ctx:r}),n.$set(a)},i(r){l||(j(e.$$.fragment,r),j(n.$$.fragment,r),l=!0)},o(r){B(e.$$.fragment,r),B(n.$$.fragment,r),l=!1},d(r){x(e,r),r&&_(t),x(n,r)}}}function Et(i){let e,t,n;function l(o){i[27](o)}let r={};return i[0].mana!==void 0&&(r.data=i[0].mana),e=new rt({props:r}),te.push(()=>le(e,"data",l)),{c(){Z(e.$$.fragment)},l(o){ee(e.$$.fragment,o)},m(o,u){G(e,o,u),n=!0},p(o,u){const a={};!t&&u[0]&1&&(t=!0,a.data=o[0].mana,ne(()=>t=!1)),e.$set(a)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),n=!1},d(o){x(e,o)}}}function It(i){let e,t,n;function l(o){i[28](o)}let r={};return i[0].cooldown!==void 0&&(r.data=i[0].cooldown),e=new rt({props:r}),te.push(()=>le(e,"data",l)),{c(){Z(e.$$.fragment)},l(o){ee(e.$$.fragment,o)},m(o,u){G(e,o,u),n=!0},p(o,u){const a={};!t&&u[0]&1&&(t=!0,a.data=o[0].cooldown,ne(()=>t=!1)),e.$set(a)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),n=!1},d(o){x(e,o)}}}function We(i){let e,t,n,l;function r(a){i[30](a,i[51])}var o=i[51].component;function u(a){let f={name:a[51].name,tooltip:a[51].tooltip,multiple:a[51].multiple};return a[51].data!==void 0&&(f.data=a[51].data),{props:f}}return o&&(e=He(o,u(i)),te.push(()=>le(e,"data",r)),e.$on("save",i[31])),{c(){e&&Z(e.$$.fragment),n=Ee()},l(a){e&&ee(e.$$.fragment,a),n=Ee()},m(a,f){e&&G(e,a,f),$(a,n,f),l=!0},p(a,f){i=a;const s={};if(f[0]&1&&(s.name=i[51].name),f[0]&1&&(s.tooltip=i[51].tooltip),f[0]&1&&(s.multiple=i[51].multiple),!t&&f[0]&1&&(t=!0,s.data=i[51].data,ne(()=>t=!1)),f[0]&1&&o!==(o=i[51].component)){if(e){ae();const p=e;B(p.$$.fragment,1,0,()=>{x(p,1)}),fe()}o?(e=He(o,u(i)),te.push(()=>le(e,"data",r)),e.$on("save",i[31]),Z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(s)},i(a){l||(e&&j(e.$$.fragment,a),l=!0)},o(a){e&&B(e.$$.fragment,a),l=!1},d(a){a&&_(n),e&&x(e,a)}}}function ze(i){let e=i[51].meetsRequirements(i[0]),t,n,l=e&&We(i);return{c(){l&&l.c(),t=Ee()},l(r){l&&l.l(r),t=Ee()},m(r,o){l&&l.m(r,o),$(r,t,o),n=!0},p(r,o){o[0]&1&&(e=r[51].meetsRequirements(r[0])),e?l?(l.p(r,o),o[0]&1&&j(l,1)):(l=We(r),l.c(),j(l,1),l.m(t.parentNode,t)):l&&(ae(),B(l,1,1,()=>{l=null}),fe())},i(r){n||(j(l),n=!0)},o(r){B(l),n=!1},d(r){l&&l.d(r),r&&_(t)}}}function Dt(i){let e,t=i[0].name+"",n,l,r,o,u,a,f,s,p,d,b=i[0].description&&je(i);const S=[wt,$t],T=[];function K(h,m){return h[0]instanceof ke&&h[0].name!="Cast"&&h[0].name!="Initialize"&&h[0].name!="Cleanup"?0:h[0]instanceof we||h[0]instanceof $e?1:-1}~(f=K(i))&&(s=T[f]=S[f](i));let y=i[0].data,v=[];for(let h=0;h<y.length;h+=1)v[h]=ze(Re(i,y,h));const W=h=>B(v[h],1,1,()=>{v[h]=null});return{c(){e=V("h2"),n=F(t),l=M(),b&&b.c(),r=M(),o=V("hr"),u=M(),a=V("div"),s&&s.c(),p=M();for(let h=0;h<v.length;h+=1)v[h].c();this.h()},l(h){e=C(h,"H2",{});var m=N(e);n=J(m,t),m.forEach(_),l=L(h),b&&b.l(h),r=L(h),o=C(h,"HR",{}),u=L(h),a=C(h,"DIV",{class:!0});var q=N(a);s&&s.l(q),p=L(q);for(let w=0;w<v.length;w+=1)v[w].l(q);q.forEach(_),this.h()},h(){H(a,"class","component-entry svelte-crwhqu")},m(h,m){$(h,e,m),I(e,n),$(h,l,m),b&&b.m(h,m),$(h,r,m),$(h,o,m),$(h,u,m),$(h,a,m),~f&&T[f].m(a,null),I(a,p);for(let q=0;q<v.length;q+=1)v[q]&&v[q].m(a,null);d=!0},p(h,m){(!d||m[0]&1)&&t!==(t=h[0].name+"")&&oe(n,t),h[0].description?b?b.p(h,m):(b=je(h),b.c(),b.m(r.parentNode,r)):b&&(b.d(1),b=null);let q=f;if(f=K(h),f===q?~f&&T[f].p(h,m):(s&&(ae(),B(T[q],1,1,()=>{T[q]=null}),fe()),~f?(s=T[f],s?s.p(h,m):(s=T[f]=S[f](h),s.c()),j(s,1),s.m(a,p)):s=null),m[0]&1){y=h[0].data;let w;for(w=0;w<y.length;w+=1){const R=Re(h,y,w);v[w]?(v[w].p(R,m),j(v[w],1)):(v[w]=ze(R),v[w].c(),j(v[w],1),v[w].m(a,null))}for(ae(),w=y.length;w<v.length;w+=1)W(w);fe()}},i(h){if(!d){j(s);for(let m=0;m<y.length;m+=1)j(v[m]);d=!0}},o(h){B(s),v=v.filter(Boolean);for(let m=0;m<v.length;m+=1)B(v[m]);d=!1},d(h){h&&_(e),h&&_(l),b&&b.d(h),h&&_(r),h&&_(o),h&&_(u),h&&_(a),~f&&T[f].d(),de(v,h)}}}function Be(i){let e,t,n,l,r,o,u,a=i[7],f=[];for(let s=0;s<a.length;s+=1)f[s]=Fe(ye(i,a,s));return{c(){e=V("hr"),t=M(),n=V("div"),l=V("h3"),r=F("Conditions"),o=M(),u=V("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=C(s,"HR",{}),t=L(s),n=C(s,"DIV",{class:!0});var p=N(n);l=C(p,"H3",{class:!0});var d=N(l);r=J(d,"Conditions"),d.forEach(_),p.forEach(_),o=L(s),u=C(s,"DIV",{class:!0});var b=N(u);for(let S=0;S<f.length;S+=1)f[S].l(b);b.forEach(_),this.h()},h(){H(l,"class","svelte-crwhqu"),H(n,"class","comp-modal-header svelte-crwhqu"),H(u,"class","triggers")},m(s,p){$(s,e,p),$(s,t,p),$(s,n,p),I(n,l),I(l,r),$(s,o,p),$(s,u,p);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(u,null)},p(s,p){if(p[0]&2176){a=s[7];let d;for(d=0;d<a.length;d+=1){const b=ye(s,a,d);f[d]?f[d].p(b,p):(f[d]=Fe(b),f[d].c(),f[d].m(u,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=a.length}},d(s){s&&_(e),s&&_(t),s&&_(n),s&&_(o),s&&_(u),de(f,s)}}}function Fe(i){let e,t=i[48].name+"",n,l,r;function o(){return i[34](i[48])}return{c(){e=V("div"),n=F(t),this.h()},l(u){e=C(u,"DIV",{class:!0});var a=N(e);n=J(a,t),a.forEach(_),this.h()},h(){H(e,"class","comp-select")},m(u,a){$(u,e,a),I(e,n),l||(r=Y(e,"click",o),l=!0)},p(u,a){i=u,a[0]&128&&t!==(t=i[48].name+"")&&oe(n,t)},d(u){u&&_(e),l=!1,r()}}}function Je(i){let e,t,n,l,r,o,u,a=i[6],f=[];for(let s=0;s<a.length;s+=1)f[s]=Qe(Ae(i,a,s));return{c(){e=V("hr"),t=M(),n=V("div"),l=V("h3"),r=F("Targets"),o=M(),u=V("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=C(s,"HR",{}),t=L(s),n=C(s,"DIV",{class:!0});var p=N(n);l=C(p,"H3",{class:!0});var d=N(l);r=J(d,"Targets"),d.forEach(_),p.forEach(_),o=L(s),u=C(s,"DIV",{class:!0});var b=N(u);for(let S=0;S<f.length;S+=1)f[S].l(b);b.forEach(_),this.h()},h(){H(l,"class","svelte-crwhqu"),H(n,"class","comp-modal-header svelte-crwhqu"),H(u,"class","triggers")},m(s,p){$(s,e,p),$(s,t,p),$(s,n,p),I(n,l),I(l,r),$(s,o,p),$(s,u,p);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(u,null)},p(s,p){if(p[0]&2112){a=s[6];let d;for(d=0;d<a.length;d+=1){const b=Ae(s,a,d);f[d]?f[d].p(b,p):(f[d]=Qe(b),f[d].c(),f[d].m(u,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=a.length}},d(s){s&&_(e),s&&_(t),s&&_(n),s&&_(o),s&&_(u),de(f,s)}}}function Qe(i){let e,t=i[45].name+"",n,l,r;function o(){return i[35](i[45])}return{c(){e=V("div"),n=F(t),this.h()},l(u){e=C(u,"DIV",{class:!0});var a=N(e);n=J(a,t),a.forEach(_),this.h()},h(){H(e,"class","comp-select")},m(u,a){$(u,e,a),I(e,n),l||(r=Y(e,"click",o),l=!0)},p(u,a){i=u,a[0]&64&&t!==(t=i[45].name+"")&&oe(n,t)},d(u){u&&_(e),l=!1,r()}}}function Ue(i){let e,t,n,l,r,o,u,a=i[8],f=[];for(let s=0;s<a.length;s+=1)f[s]=Xe(Te(i,a,s));return{c(){e=V("hr"),t=M(),n=V("div"),l=V("h3"),r=F("Mechanics"),o=M(),u=V("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=C(s,"HR",{}),t=L(s),n=C(s,"DIV",{class:!0});var p=N(n);l=C(p,"H3",{class:!0});var d=N(l);r=J(d,"Mechanics"),d.forEach(_),p.forEach(_),o=L(s),u=C(s,"DIV",{class:!0});var b=N(u);for(let S=0;S<f.length;S+=1)f[S].l(b);b.forEach(_),this.h()},h(){H(l,"class","svelte-crwhqu"),H(n,"class","comp-modal-header svelte-crwhqu"),H(u,"class","triggers")},m(s,p){$(s,e,p),$(s,t,p),$(s,n,p),I(n,l),I(l,r),$(s,o,p),$(s,u,p);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(u,null)},p(s,p){if(p[0]&2304){a=s[8];let d;for(d=0;d<a.length;d+=1){const b=Te(s,a,d);f[d]?f[d].p(b,p):(f[d]=Xe(b),f[d].c(),f[d].m(u,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=a.length}},d(s){s&&_(e),s&&_(t),s&&_(n),s&&_(o),s&&_(u),de(f,s)}}}function Xe(i){let e,t=i[42].name+"",n,l,r;function o(){return i[36](i[42])}return{c(){e=V("div"),n=F(t),this.h()},l(u){e=C(u,"DIV",{class:!0});var a=N(e);n=J(a,t),a.forEach(_),this.h()},h(){H(e,"class","comp-select")},m(u,a){$(u,e,a),I(e,n),l||(r=Y(e,"click",o),l=!0)},p(u,a){i=u,a[0]&256&&t!==(t=i[42].name+"")&&oe(n,t)},d(u){u&&_(e),l=!1,r()}}}function Vt(i){let e,t,n,l,r,o,u,a,f,s,p,d,b,S,T,K,y,v,W,h;function m(c){i[33](c)}let q={placeholder:"Search..."};i[3]!==void 0&&(q.value=i[3]),a=new ve({props:q}),te.push(()=>le(a,"value",m));let w=i[7].length>0&&Be(i),R=i[6].length>0&&Je(i),D=i[8].length>0&&Ue(i);return{c(){e=V("div"),t=V("div"),n=M(),l=V("h2"),r=F("Add a Component"),o=M(),u=V("div"),Z(a.$$.fragment),s=M(),w&&w.c(),p=M(),R&&R.c(),d=M(),D&&D.c(),b=M(),S=V("hr"),T=M(),K=V("div"),y=F("Cancel"),this.h()},l(c){e=C(c,"DIV",{class:!0});var k=N(e);t=C(k,"DIV",{}),N(t).forEach(_),n=L(k),l=C(k,"H2",{});var Q=N(l);r=J(Q,"Add a Component"),Q.forEach(_),o=L(k),u=C(k,"DIV",{class:!0});var O=N(u);ee(a.$$.fragment,O),O.forEach(_),k.forEach(_),s=L(c),w&&w.l(c),p=L(c),R&&R.l(c),d=L(c),D&&D.l(c),b=L(c),S=C(c,"HR",{}),T=L(c),K=C(c,"DIV",{class:!0});var X=N(K);y=J(X,"Cancel"),X.forEach(_),this.h()},h(){H(u,"class","search-bar"),H(e,"class","modal-header-wrapper"),H(K,"class","cancel")},m(c,k){$(c,e,k),I(e,t),I(e,n),I(e,l),I(l,r),I(e,o),I(e,u),G(a,u,null),$(c,s,k),w&&w.m(c,k),$(c,p,k),R&&R.m(c,k),$(c,d,k),D&&D.m(c,k),$(c,b,k),$(c,S,k),$(c,T,k),$(c,K,k),I(K,y),v=!0,W||(h=Y(K,"click",i[37]),W=!0)},p(c,k){const Q={};!f&&k[0]&8&&(f=!0,Q.value=c[3],ne(()=>f=!1)),a.$set(Q),c[7].length>0?w?w.p(c,k):(w=Be(c),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null),c[6].length>0?R?R.p(c,k):(R=Je(c),R.c(),R.m(d.parentNode,d)):R&&(R.d(1),R=null),c[8].length>0?D?D.p(c,k):(D=Ue(c),D.c(),D.m(b.parentNode,b)):D&&(D.d(1),D=null)},i(c){v||(j(a.$$.fragment,c),v=!0)},o(c){B(a.$$.fragment,c),v=!1},d(c){c&&_(e),x(a),c&&_(s),w&&w.d(c),c&&_(p),R&&R.d(c),c&&_(d),D&&D.d(c),c&&_(b),c&&_(S),c&&_(T),c&&_(K),W=!1,h()}}}function Ct(i){let e,t,n,l,r,o,u,a=i[10]()+"",f,s=" "+i[0].name,p,d,b,S,T,K,y,v,W,h,m,q;function w(P,g){return P[5]?kt:bt}let R=w(i),D=R(i),c=!i[5]&&Le(i);function k(P){i[32](P)}let Q={width:"70%",$$slots:{default:[Dt]},$$scope:{ctx:i}};i[2]!==void 0&&(Q.open=i[2]),T=new Ce({props:Q}),te.push(()=>le(T,"open",k));function O(P){i[38](P)}let X={width:"70%",$$slots:{default:[Vt]},$$scope:{ctx:i}};return i[4]!==void 0&&(X.open=i[4]),v=new Ce({props:X}),te.push(()=>le(v,"open",O)),{c(){e=V("div"),t=V("div"),D.c(),n=M(),l=V("div"),r=M(),o=V("div"),u=V("span"),f=F(a),p=F(s),d=M(),c&&c.c(),S=M(),Z(T.$$.fragment),y=M(),Z(v.$$.fragment),this.h()},l(P){e=C(P,"DIV",{class:!0});var g=N(e);t=C(g,"DIV",{draggable:!0,class:!0});var A=N(t);D.l(A),n=L(A),l=C(A,"DIV",{class:!0}),N(l).forEach(_),r=L(A),o=C(A,"DIV",{class:!0});var U=N(o);u=C(U,"SPAN",{class:!0});var z=N(u);f=J(z,a),z.forEach(_),p=J(U,s),U.forEach(_),d=L(A),c&&c.l(A),A.forEach(_),g.forEach(_),S=L(P),ee(T.$$.fragment,P),y=L(P),ee(v.$$.fragment,P),this.h()},h(){H(l,"class","corner svelte-crwhqu"),H(u,"class","svelte-crwhqu"),H(o,"class","name svelte-crwhqu"),H(t,"draggable","true"),H(t,"class","comp-body svelte-crwhqu"),ct(t,"--comp-color",i[12]()),H(e,"class","wrapper svelte-crwhqu")},m(P,g){$(P,e,g),I(e,t),D.m(t,null),I(t,n),I(t,l),I(t,r),I(t,o),I(o,u),I(u,f),I(o,p),I(t,d),c&&c.m(t,null),$(P,S,g),G(T,P,g),$(P,y,g),G(v,P,g),h=!0,m||(q=[Y(l,"click",ue(i[17])),Y(t,"dragstart",ue(i[24])),Y(t,"dragend",i[25]),Y(t,"click",ue(i[26]))],m=!0)},p(P,g){R!==(R=w(P))&&(D.d(1),D=R(P),D&&(D.c(),j(D,1),D.m(t,n))),(!h||g[0]&1)&&s!==(s=" "+P[0].name)&&oe(p,s),P[5]?c&&(ae(),B(c,1,1,()=>{c=null}),fe()):c?(c.p(P,g),g[0]&32&&j(c,1)):(c=Le(P),c.c(),j(c,1),c.m(t,null));const A={};g[0]&1|g[1]&67108864&&(A.$$scope={dirty:g,ctx:P}),!K&&g[0]&4&&(K=!0,A.open=P[2],ne(()=>K=!1)),T.$set(A);const U={};g[0]&472|g[1]&67108864&&(U.$$scope={dirty:g,ctx:P}),!W&&g[0]&16&&(W=!0,U.open=P[4],ne(()=>W=!1)),v.$set(U)},i(P){h||(j(D),j(c),b&&b.end(1),j(T.$$.fragment,P),j(v.$$.fragment,P),h=!0)},o(P){B(c),b=ut(t,ie,{}),B(T.$$.fragment,P),B(v.$$.fragment,P),h=!1},d(P){P&&_(e),D.d(),c&&c.d(),P&&b&&b.end(),P&&_(S),x(T,P),P&&_(y),x(v,P),m=!1,it(q)}}}function qt(i,e,t){let{skill:n}=e,{component:l}=e;const r=_t();let o=!1,u=!1,a=!1,f="",s={},p={},d={},b,S,T;st(()=>{me.targets.subscribe(E=>t(14,s=E)),me.conditions.subscribe(E=>t(15,p=E)),me.mechanics.subscribe(E=>t(16,d=E))});const K=()=>{{if(l instanceof ke)return"🚩";if(l instanceof $e)return"⚠";if(l instanceof we)return"🎯";if(l instanceof Ve)return"🔧"}return l instanceof ke?"Trigger":l instanceof $e?"Condition":l instanceof we?"Target":l instanceof Ve?"Mechanic":"???"},y=E=>{t(0,l.components=[...l.components,E],l),t(4,u=!1),t(3,f=""),r("save")},v=()=>l instanceof ke?"#0083ef":l instanceof $e?"#feac00":l instanceof we?"#04af38":l instanceof Ve?"#ff3a3a":"orange",W=(E,{duration:he})=>({duration:he,css:Ie=>`transform: rotate(${180-gt(Ie)*180}deg);`}),h=()=>t(5,a=!a),m=()=>console.log("clicked copy"),q=()=>{n.removeComponent(l),r("update")};function w(E,he,Ie,Pe){Ie[Pe]=E,t(0,l)}function R(E){De.call(this,i,E)}function D(E){De.call(this,i,E)}const c=()=>t(4,u=!0),k=()=>Ne.set(l),Q=()=>Ne.set(void 0),O=()=>t(2,o=!0);function X(E){i.$$.not_equal(l.mana,E)&&(l.mana=E,t(0,l))}function P(E){i.$$.not_equal(l.cooldown,E)&&(l.cooldown=E,t(0,l))}function g(E){i.$$.not_equal(l.iconKey,E)&&(l.iconKey=E,t(0,l))}function A(E,he){i.$$.not_equal(he.data,E)&&(he.data=E,t(0,l))}function U(E){De.call(this,i,E)}function z(E){o=E,t(2,o)}function re(E){f=E,t(3,f)}const ge=E=>y(E),be=E=>y(E),ce=E=>y(E),pe=()=>t(4,u=!1);function ft(E){u=E,t(4,u)}return i.$$set=E=>{"skill"in E&&t(1,n=E.skill),"component"in E&&t(0,l=E.component)},i.$$.update=()=>{i.$$.dirty[0]&114696&&(t(6,b=Object.keys(s).filter(E=>E.toLowerCase().includes(f.toLowerCase())).sort().map(E=>s[E].component.new())),t(7,S=Object.keys(p).filter(E=>E.toLowerCase().includes(f.toLowerCase())).sort().map(E=>p[E].component.new())),t(8,T=Object.keys(d).filter(E=>E.toLowerCase().includes(f.toLowerCase())).sort().map(E=>d[E].component.new()))),i.$$.dirty[0]&1&&l&&r("save"),i.$$.dirty[0]&5&&o&&l&&l.data.filter(E=>E.dataSource).forEach(E=>E.init())},[l,n,o,f,u,a,b,S,T,r,K,y,v,W,s,p,d,h,m,q,w,R,D,c,k,Q,O,X,P,g,A,U,z,re,ge,be,ce,pe,ft]}class at extends tt{constructor(e){super(),lt(this,e,qt,Ct,nt,{skill:1,component:0},null,[-1,-1])}}function Ye(i,e,t){const n=i.slice();return n[17]=e[t],n}function Ze(i,e,t){const n=i.slice();return n[20]=e[t],n}function Ge(i){let e,t,n;return t=new at({props:{skill:i[1],component:i[20]}}),t.$on("update",i[5]),t.$on("save",i[6]),{c(){e=V("div"),Z(t.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var r=N(e);ee(t.$$.fragment,r),r.forEach(_),this.h()},h(){H(e,"class","widget svelte-4lo1mc")},m(l,r){$(l,e,r),G(t,e,null),n=!0},p(l,r){const o={};r&2&&(o.skill=l[1]),r&2&&(o.component=l[20]),t.$set(o)},i(l){n||(j(t.$$.fragment,l),n=!0)},o(l){B(t.$$.fragment,l),n=!1},d(l){l&&_(e),x(t)}}}function xe(i){let e,t;return{c(){e=V("div"),t=F("No triggers added yet.")},l(n){e=C(n,"DIV",{});var l=N(e);t=J(l,"No triggers added yet."),l.forEach(_)},m(n,l){$(n,e,l),I(e,t)},d(n){n&&_(e)}}}function et(i){let e,t=i[17].name+"",n,l,r,o;function u(){return i[11](i[17])}return{c(){e=V("div"),n=F(t),l=M(),this.h()},l(a){e=C(a,"DIV",{class:!0});var f=N(e);n=J(f,t),l=L(f),f.forEach(_),this.h()},h(){H(e,"class","comp-select")},m(a,f){$(a,e,f),I(e,n),I(e,l),r||(o=Y(e,"click",u),r=!0)},p(a,f){i=a,f&8&&t!==(t=i[17].name+"")&&oe(n,t)},d(a){a&&_(e),r=!1,o()}}}function Pt(i){let e,t,n,l,r,o,u,a,f,s,p,d,b,S,T,K,y,v,W,h,m;function q(c){i[10](c)}let w={placeholder:"Search..."};i[0]!==void 0&&(w.value=i[0]),a=new ve({props:w}),te.push(()=>le(a,"value",q));let R=i[3],D=[];for(let c=0;c<R.length;c+=1)D[c]=et(Ye(i,R,c));return{c(){e=V("div"),t=V("div"),n=M(),l=V("h2"),r=F("Select New Trigger"),o=M(),u=V("div"),Z(a.$$.fragment),s=M(),p=V("hr"),d=M(),b=V("div");for(let c=0;c<D.length;c+=1)D[c].c();S=M(),T=V("hr"),K=M(),y=V("div"),v=F("Cancel"),this.h()},l(c){e=C(c,"DIV",{class:!0});var k=N(e);t=C(k,"DIV",{}),N(t).forEach(_),n=L(k),l=C(k,"H2",{class:!0});var Q=N(l);r=J(Q,"Select New Trigger"),Q.forEach(_),o=L(k),u=C(k,"DIV",{class:!0});var O=N(u);ee(a.$$.fragment,O),O.forEach(_),k.forEach(_),s=L(c),p=C(c,"HR",{}),d=L(c),b=C(c,"DIV",{class:!0});var X=N(b);for(let g=0;g<D.length;g+=1)D[g].l(X);X.forEach(_),S=L(c),T=C(c,"HR",{}),K=L(c),y=C(c,"DIV",{class:!0});var P=N(y);v=J(P,"Cancel"),P.forEach(_),this.h()},h(){H(l,"class","modal-header svelte-4lo1mc"),H(u,"class","search-bar"),H(e,"class","modal-header-wrapper"),H(b,"class","triggers"),H(y,"class","cancel")},m(c,k){$(c,e,k),I(e,t),I(e,n),I(e,l),I(l,r),I(e,o),I(e,u),G(a,u,null),$(c,s,k),$(c,p,k),$(c,d,k),$(c,b,k);for(let Q=0;Q<D.length;Q+=1)D[Q]&&D[Q].m(b,null);$(c,S,k),$(c,T,k),$(c,K,k),$(c,y,k),I(y,v),W=!0,h||(m=Y(y,"click",i[12]),h=!0)},p(c,k){const Q={};if(!f&&k&1&&(f=!0,Q.value=c[0],ne(()=>f=!1)),a.$set(Q),k&24){R=c[3];let O;for(O=0;O<R.length;O+=1){const X=Ye(c,R,O);D[O]?D[O].p(X,k):(D[O]=et(X),D[O].c(),D[O].m(b,null))}for(;O<D.length;O+=1)D[O].d(1);D.length=R.length}},i(c){W||(j(a.$$.fragment,c),W=!0)},o(c){B(a.$$.fragment,c),W=!1},d(c){c&&_(e),x(a),c&&_(s),c&&_(p),c&&_(d),c&&_(b),de(D,c),c&&_(S),c&&_(T),c&&_(K),c&&_(y),h=!1,m()}}}function Ht(i){let e,t,n,l,r=i[1].name+"",o,u,a,f,s,p,d,b,S,T,K,y,v,W,h,m,q,w,R,D;document.title=e="ProSkillAPI Dynamic Editor - "+i[1].name;let c=i[1].triggers,k=[];for(let g=0;g<c.length;g+=1)k[g]=Ge(Ze(i,c,g));const Q=g=>B(k[g],1,1,()=>{k[g]=null});let O=i[1].triggers.length==0&&xe();function X(g){i[13](g)}let P={$$slots:{default:[Pt]},$$scope:{ctx:i}};return i[2]!==void 0&&(P.open=i[2]),m=new Ce({props:P}),te.push(()=>le(m,"open",X)),{c(){t=M(),n=V("div"),l=V("h2"),o=F(r),u=M(),a=V("a"),f=F("edit"),p=M(),d=V("div"),b=V("span"),S=F("new_label"),T=M(),K=V("hr"),y=M(),v=V("div");for(let g=0;g<k.length;g+=1)k[g].c();W=M(),O&&O.c(),h=M(),Z(m.$$.fragment),this.h()},l(g){ht("svelte-r5m1v8",document.head).forEach(_),t=L(g),n=C(g,"DIV",{class:!0});var U=N(n);l=C(U,"H2",{class:!0});var z=N(l);o=J(z,r),u=L(z),a=C(z,"A",{class:!0,title:!0,href:!0});var re=N(a);f=J(re,"edit"),re.forEach(_),p=L(z),d=C(z,"DIV",{class:!0,title:!0});var ge=N(d);b=C(ge,"SPAN",{class:!0});var be=N(b);S=J(be,"new_label"),be.forEach(_),ge.forEach(_),z.forEach(_),U.forEach(_),T=L(g),K=C(g,"HR",{}),y=L(g),v=C(g,"DIV",{class:!0});var ce=N(v);for(let pe=0;pe<k.length;pe+=1)k[pe].l(ce);W=L(ce),O&&O.l(ce),ce.forEach(_),h=L(g),ee(m.$$.fragment,g),this.h()},h(){H(a,"class","material-symbols-rounded edit-skill chip svelte-4lo1mc"),H(a,"title","Edit"),H(a,"href",s="/skill/"+i[1].name+"/edit"),H(b,"class","material-symbols-rounded"),H(d,"class","add-trigger chip svelte-4lo1mc"),H(d,"title","Add Trigger"),H(l,"class","svelte-4lo1mc"),H(n,"class","header svelte-4lo1mc"),H(v,"class","container svelte-4lo1mc")},m(g,A){$(g,t,A),$(g,n,A),I(n,l),I(l,o),I(l,u),I(l,a),I(a,f),I(l,p),I(l,d),I(d,b),I(b,S),$(g,T,A),$(g,K,A),$(g,y,A),$(g,v,A);for(let U=0;U<k.length;U+=1)k[U]&&k[U].m(v,null);I(v,W),O&&O.m(v,null),$(g,h,A),G(m,g,A),w=!0,R||(D=Y(d,"click",i[9]),R=!0)},p(g,[A]){if((!w||A&2)&&e!==(e="ProSkillAPI Dynamic Editor - "+g[1].name)&&(document.title=e),(!w||A&2)&&r!==(r=g[1].name+"")&&oe(o,r),(!w||A&2&&s!==(s="/skill/"+g[1].name+"/edit"))&&H(a,"href",s),A&98){c=g[1].triggers;let z;for(z=0;z<c.length;z+=1){const re=Ze(g,c,z);k[z]?(k[z].p(re,A),j(k[z],1)):(k[z]=Ge(re),k[z].c(),j(k[z],1),k[z].m(v,W))}for(ae(),z=c.length;z<k.length;z+=1)Q(z);fe()}g[1].triggers.length==0?O||(O=xe(),O.c(),O.m(v,null)):O&&(O.d(1),O=null);const U={};A&8388621&&(U.$$scope={dirty:A,ctx:g}),!q&&A&4&&(q=!0,U.open=g[2],ne(()=>q=!1)),m.$set(U)},i(g){if(!w){for(let A=0;A<c.length;A+=1)j(k[A]);j(m.$$.fragment,g),w=!0}},o(g){k=k.filter(Boolean);for(let A=0;A<k.length;A+=1)B(k[A]);B(m.$$.fragment,g),w=!1},d(g){g&&_(t),g&&_(n),g&&_(T),g&&_(K),g&&_(y),g&&_(v),de(k,g),O&&O.d(),g&&_(h),x(m,g),R=!1,D()}}}function Nt(i,e,t){let{data:n}=e,l,r=!1,o="",u,a,f={};st(()=>{a=me.triggers.subscribe(W=>t(8,f=W));let v;v=me.initialized.subscribe(W=>{W&&(v&&v(),p())})}),mt(()=>{a&&a()});const s=v=>{l.triggers.push(v.detail),p(),setTimeout(()=>t(2,r=!1))},p=()=>{t(1,l.triggers=[...l.triggers],l),d()},d=()=>Se.set([...vt(Se)]),b=()=>t(2,r=!0);function S(v){o=v,t(0,o)}const T=v=>s({detail:v.clone()}),K=()=>t(2,r=!1);function y(v){r=v,t(2,r)}return i.$$set=v=>{"data"in v&&t(7,n=v.data)},i.$$.update=()=>{i.$$.dirty&128&&n&&t(1,l=n.data),i.$$.dirty&257&&t(3,u=Object.keys(f).filter(v=>v.toLowerCase().includes(o.toLowerCase())).sort().map(v=>f[v].component.new()))},[o,l,r,u,s,p,d,n,f,b,S,T,K,y]}class Rt extends tt{constructor(e){super(),lt(this,e,Nt,Ht,nt,{data:7})}}export{Rt as default};
