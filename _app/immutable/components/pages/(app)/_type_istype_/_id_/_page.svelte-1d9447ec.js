import{S as he,i as be,s as de,k as G,l as K,m as Q,h as c,n as le,p as ft,b as I,F as Ie,a4 as Le,_ as D,$ as N,w as v,a as E,x as k,c as R,y as w,a0 as P,f as g,t as h,z as T,U as Xe,q as te,r as ne,D as z,N as Qe,E as _t,ah as Ye,L as Nt,a3 as Pt,O as $t,u as qt,e as Me,g as xe,d as et,o as Ot,a2 as Ct,Y as Bt,J as It,a5 as Ze,a6 as Lt,Z as yt,ag as At}from"../../../../../chunks/index-9adbb703.js";import{I as y,E as Vt,M as Mt,J as mt,t as zt,w as St,K as Ft,L as Ht,N as Et,O as Rt,S as tt,Q as ct,R as Ut,A as gt,z as Wt}from"../../../../../chunks/store-c82e6c5f.js";import{T as nt}from"../../../../../chunks/Toggle-b5f33a20.js";function Gt(n){let t,a,l,i;return{c(){t=G("textarea"),this.h()},l(s){t=K(s,"TEXTAREA",{rows:!0,class:!0}),Q(t).forEach(c),this.h()},h(){le(t,"rows","5"),t.value=a=n[0].join(`\r
`),le(t,"class","svelte-11ze07f"),ft(t,"white-space",n[1]?"wrap":"nowrap")},m(s,e){I(s,t,e),l||(i=Ie(t,"keyup",n[2]),l=!0)},p(s,[e]){e&1&&a!==(a=s[0].join(`\r
`))&&(t.value=a),e&2&&ft(t,"white-space",s[1]?"wrap":"nowrap")},i:Le,o:Le,d(s){s&&c(t),l=!1,i()}}}function Kt(n,t,a){let{value:l=[]}=t,{wrap:i=!1}=t;const s=e=>a(0,l=e.target.value.split(/\r?\n/g));return n.$$set=e=>{"value"in e&&a(0,l=e.value),"wrap"in e&&a(1,i=e.wrap)},n.$$.update=()=>{n.$$.dirty&1&&(l||a(0,l=[]))},[l,i,s]}class jt extends he{constructor(t){super(),be(this,t,Kt,Gt,de,{value:0,wrap:1})}}function Jt(n){let t,a,l;function i(e){n[2](e)}let s={};return n[0].material!==void 0&&(s.selected=n[0].material),t=new Mt({props:s}),D.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.selected=e[0].material,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Qt(n){let t,a,l;function i(e){n[4](e)}let s={};return n[0].lore!==void 0&&(s.value=n[0].lore),t=new jt({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].lore,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Xt(n){let t,a,l,i,s,e,r;t=new y({props:{label:"Icon",tooltip:"The item that represents the "+n[1]+" in GUIs",$$slots:{default:[Jt]},$$scope:{ctx:n}}});function p(_){n[3](_)}let L={label:"CustomModelData",type:"number",intMode:!0,tooltip:"The CustomModelData of the item that represents the "+n[1]+" in GUIs"};return n[0].customModelData!==void 0&&(L.value=n[0].customModelData),l=new y({props:L}),D.push(()=>N(l,"value",p)),e=new y({props:{label:"Icon Lore",tooltip:n[1]==="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values',$$slots:{default:[Qt]},$$scope:{ctx:n}}}),{c(){v(t.$$.fragment),a=E(),v(l.$$.fragment),s=E(),v(e.$$.fragment)},l(_){k(t.$$.fragment,_),a=R(_),k(l.$$.fragment,_),s=R(_),k(e.$$.fragment,_)},m(_,q){w(t,_,q),I(_,a,q),w(l,_,q),I(_,s,q),w(e,_,q),r=!0},p(_,[q]){const M={};q&2&&(M.tooltip="The item that represents the "+_[1]+" in GUIs"),q&33&&(M.$$scope={dirty:q,ctx:_}),t.$set(M);const C={};q&2&&(C.tooltip="The CustomModelData of the item that represents the "+_[1]+" in GUIs"),!i&&q&1&&(i=!0,C.value=_[0].customModelData,P(()=>i=!1)),l.$set(C);const S={};q&2&&(S.tooltip=_[1]==="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values'),q&33&&(S.$$scope={dirty:q,ctx:_}),e.$set(S)},i(_){r||(g(t.$$.fragment,_),g(l.$$.fragment,_),g(e.$$.fragment,_),r=!0)},o(_){h(t.$$.fragment,_),h(l.$$.fragment,_),h(e.$$.fragment,_),r=!1},d(_){T(t,_),_&&c(a),T(l,_),_&&c(s),T(e,_)}}}function Yt(n,t,a){let l;Xe(n,Vt,p=>a(1,l=p));let{icon:i}=t;function s(p){n.$$.not_equal(i.material,p)&&(i.material=p,a(0,i))}function e(p){n.$$.not_equal(i.customModelData,p)&&(i.customModelData=p,a(0,i))}function r(p){n.$$.not_equal(i.lore,p)&&(i.lore=p,a(0,i))}return n.$$set=p=>{"icon"in p&&a(0,i=p.icon)},[i,l,s,e,r]}class Dt extends he{constructor(t){super(),be(this,t,Yt,Xt,de,{icon:0})}}function Zt(n){let t,a,l,i,s,e,r;return{c(){t=G("div"),a=G("input"),l=te(`
  +(
  `),i=G("input"),s=te(`
  )`),this.h()},l(p){t=K(p,"DIV",{class:!0});var L=Q(t);a=K(L,"INPUT",{class:!0,type:!0}),l=ne(L,`
  +(
  `),i=K(L,"INPUT",{class:!0,type:!0}),s=ne(L,`
  )`),L.forEach(c),this.h()},h(){le(a,"class","base svelte-1unqgie"),le(a,"type","number"),le(i,"class","modifier svelte-1unqgie"),le(i,"type","number"),le(t,"class","wrap svelte-1unqgie")},m(p,L){I(p,t,L),z(t,a),Qe(a,n[0].base),z(t,l),z(t,i),Qe(i,n[0].scale),z(t,s),e||(r=[_t(mt.call(null,a,!1)),Ie(a,"input",n[1]),_t(mt.call(null,i,!1)),Ie(i,"input",n[2])],e=!0)},p(p,[L]){L&1&&Ye(a.value)!==p[0].base&&Qe(a,p[0].base),L&1&&Ye(i.value)!==p[0].scale&&Qe(i,p[0].scale)},i:Le,o:Le,d(p){p&&c(t),e=!1,Nt(r)}}}function xt(n,t,a){let{value:l}=t;function i(){l.base=Ye(this.value),a(0,l)}function s(){l.scale=Ye(this.value),a(0,l)}return n.$$set=e=>{"value"in e&&a(0,l=e.value)},[l,i,s]}class ce extends he{constructor(t){super(),be(this,t,xt,Zt,de,{value:0})}}function ht(n,t,a){const l=n.slice();return l[3]=t[a],l[5]=a,l}function bt(n){let t,a=n[3]+"",l,i,s,e;function r(){return n[2](n[5])}return{c(){t=G("div"),l=te(a),i=E(),this.h()},l(p){t=K(p,"DIV",{class:!0});var L=Q(t);l=ne(L,a),i=R(L),L.forEach(c),this.h()},h(){le(t,"class","entry svelte-wejg12"),$t(t,"selected",n[0]&Math.pow(2,n[5]))},m(p,L){I(p,t,L),z(t,l),z(t,i),s||(e=Ie(t,"click",r),s=!0)},p(p,L){n=p,L&2&&a!==(a=n[3]+"")&&qt(l,a),L&1&&$t(t,"selected",n[0]&Math.pow(2,n[5]))},d(p){p&&c(t),s=!1,e()}}}function en(n){let t,a=n[1],l=[];for(let i=0;i<a.length;i+=1)l[i]=bt(ht(n,a,i));return{c(){t=G("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=K(i,"DIV",{class:!0});var s=Q(t);for(let e=0;e<l.length;e+=1)l[e].l(s);s.forEach(c),this.h()},h(){le(t,"class","input svelte-wejg12")},m(i,s){I(i,t,s);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(i,[s]){if(s&3){a=i[1];let e;for(e=0;e<a.length;e+=1){const r=ht(i,a,e);l[e]?l[e].p(r,s):(l[e]=bt(r),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=a.length}},i:Le,o:Le,d(i){i&&c(t),Pt(l,i)}}}function tn(n,t,a){let{value:l=273}=t,{data:i}=t;const s=e=>a(0,l=l^Math.pow(2,e));return n.$$set=e=>{"value"in e&&a(0,l=e.value),"data"in e&&a(1,i=e.data)},[l,i,s]}class nn extends he{constructor(t){super(),be(this,t,tn,en,de,{value:0,data:1})}}function dt(n,t,a){const l=n.slice();return l[22]=t[a],l[23]=t,l[24]=a,l}function vt(n){let t,a,l,i,s,e,r,p,L,_,q,M,C,S,W,B,A,j,F,J,d,V,O,m,$,x,H,se,Y,ge,pe,U=[],ve=new Map,ue,X,$e,ie,ae,fe,Z,_e,oe,ke,we,re,Te;function Ve(u){n[3](u)}let ze={label:"Name",tooltip:"The name of the class. This should not contain color codes"};n[0].name!==void 0&&(ze.value=n[0].name),t=new y({props:ze}),D.push(()=>N(t,"value",Ve));function Fe(u){n[4](u)}let He={label:"Prefix",tooltip:"The prefix given to players who profess as the class which can contain color codes"};n[0].prefix!==void 0&&(He.value=n[0].prefix),i=new y({props:He}),D.push(()=>N(i,"value",Fe));function Ue(u){n[5](u)}let We={label:"Action Bar",tooltip:"The format for the action bar. Leave blank to use the default formatting"};n[0].actionBar!==void 0&&(We.value=n[0].actionBar),r=new y({props:We}),D.push(()=>N(r,"value",Ue));function Ge(u){n[6](u)}let Ke={label:"Group",tooltip:'A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'};n[0].group!==void 0&&(Ke.value=n[0].group),_=new y({props:Ke}),D.push(()=>N(_,"value",Ge));function je(u){n[7](u)}let o={label:"Mana Name",tooltip:"The name the class uses for mana"};n[0].manaName!==void 0&&(o.value=n[0].manaName),C=new y({props:o}),D.push(()=>N(C,"value",je));function b(u){n[8](u)}let Se={label:"Max Level",type:"number",intMode:!0,tooltip:"The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes"};n[0].maxLevel!==void 0&&(Se.value=n[0].maxLevel),B=new y({props:Se}),D.push(()=>N(B,"value",b)),F=new y({props:{label:"Parent",tooltip:"The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter",$$slots:{default:[ln]},$$scope:{ctx:n}}}),d=new y({props:{label:"Permission",tooltip:'Whether the class requires a permission to be professed as. The permission would be "skillapi.class.'+n[0].name.toLowerCase()+'"',$$slots:{default:[an]},$$scope:{ctx:n}}}),O=new y({props:{label:"Exp Sources",tooltip:'The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml',$$slots:{default:[sn]},$$scope:{ctx:n}}}),$=new y({props:{label:"Health",tooltip:"The amount of health the class has",$$slots:{default:[un]},$$scope:{ctx:n}}}),H=new y({props:{label:"Mana",tooltip:"The amount of mana the class has",$$slots:{default:[on]},$$scope:{ctx:n}}});let me=n[0].attributes;const Ee=u=>u[22].name;for(let u=0;u<me.length;u+=1){let f=dt(n,me,u),ee=Ee(f);ve.set(ee,U[u]=kt(ee,f))}function Je(u){n[16](u)}let Re={label:"Mana Regen",type:"number",tooltip:"The amount of mana the class regenerates at each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval"};n[0].manaRegen!==void 0&&(Re.value=n[0].manaRegen),X=new y({props:Re}),D.push(()=>N(X,"value",Je)),ae=new y({props:{label:"Skill Tree",tooltip:"The type of skill tree to use",$$slots:{default:[pn]},$$scope:{ctx:n}}}),Z=new y({props:{label:"Skills",tooltip:"The skills the class is able to use",$$slots:{default:[fn]},$$scope:{ctx:n}}});function De(u){n[19](u)}let Ne={};return n[0].icon!==void 0&&(Ne.icon=n[0].icon),oe=new Dt({props:Ne}),D.push(()=>N(oe,"icon",De)),re=new y({props:{label:"Unusable items",tooltip:"The types of items that the class cannot use",$$slots:{default:[_n]},$$scope:{ctx:n}}}),{c(){v(t.$$.fragment),l=E(),v(i.$$.fragment),e=E(),v(r.$$.fragment),L=E(),v(_.$$.fragment),M=E(),v(C.$$.fragment),W=E(),v(B.$$.fragment),j=E(),v(F.$$.fragment),J=E(),v(d.$$.fragment),V=E(),v(O.$$.fragment),m=E(),v($.$$.fragment),x=E(),v(H.$$.fragment),se=E(),Y=G("div"),ge=te("Drag & Drop your attributes file to use your custom attributes"),pe=E();for(let u=0;u<U.length;u+=1)U[u].c();ue=E(),v(X.$$.fragment),ie=E(),v(ae.$$.fragment),fe=E(),v(Z.$$.fragment),_e=E(),v(oe.$$.fragment),we=E(),v(re.$$.fragment),this.h()},l(u){k(t.$$.fragment,u),l=R(u),k(i.$$.fragment,u),e=R(u),k(r.$$.fragment,u),L=R(u),k(_.$$.fragment,u),M=R(u),k(C.$$.fragment,u),W=R(u),k(B.$$.fragment,u),j=R(u),k(F.$$.fragment,u),J=R(u),k(d.$$.fragment,u),V=R(u),k(O.$$.fragment,u),m=R(u),k($.$$.fragment,u),x=R(u),k(H.$$.fragment,u),se=R(u),Y=K(u,"DIV",{class:!0});var f=Q(Y);ge=ne(f,"Drag & Drop your attributes file to use your custom attributes"),f.forEach(c),pe=R(u);for(let ee=0;ee<U.length;ee+=1)U[ee].l(u);ue=R(u),k(X.$$.fragment,u),ie=R(u),k(ae.$$.fragment,u),fe=R(u),k(Z.$$.fragment,u),_e=R(u),k(oe.$$.fragment,u),we=R(u),k(re.$$.fragment,u),this.h()},h(){le(Y,"class","info svelte-1alyshk")},m(u,f){w(t,u,f),I(u,l,f),w(i,u,f),I(u,e,f),w(r,u,f),I(u,L,f),w(_,u,f),I(u,M,f),w(C,u,f),I(u,W,f),w(B,u,f),I(u,j,f),w(F,u,f),I(u,J,f),w(d,u,f),I(u,V,f),w(O,u,f),I(u,m,f),w($,u,f),I(u,x,f),w(H,u,f),I(u,se,f),I(u,Y,f),z(Y,ge),I(u,pe,f);for(let ee=0;ee<U.length;ee+=1)U[ee].m(u,f);I(u,ue,f),w(X,u,f),I(u,ie,f),w(ae,u,f),I(u,fe,f),w(Z,u,f),I(u,_e,f),w(oe,u,f),I(u,we,f),w(re,u,f),Te=!0},p(u,f){const ee={};!a&&f&1&&(a=!0,ee.value=u[0].name,P(()=>a=!1)),t.$set(ee);const Pe={};!s&&f&1&&(s=!0,Pe.value=u[0].prefix,P(()=>s=!1)),i.$set(Pe);const Oe={};!p&&f&1&&(p=!0,Oe.value=u[0].actionBar,P(()=>p=!1)),r.$set(Oe);const Ce={};!q&&f&1&&(q=!0,Ce.value=u[0].group,P(()=>q=!1)),_.$set(Ce);const Be={};!S&&f&1&&(S=!0,Be.value=u[0].manaName,P(()=>S=!1)),C.$set(Be);const ye={};!A&&f&1&&(A=!0,ye.value=u[0].maxLevel,P(()=>A=!1)),B.$set(ye);const Ae={};f&33554435&&(Ae.$$scope={dirty:f,ctx:u}),F.$set(Ae);const qe={};f&1&&(qe.tooltip='Whether the class requires a permission to be professed as. The permission would be "skillapi.class.'+u[0].name.toLowerCase()+'"'),f&33554433&&(qe.$$scope={dirty:f,ctx:u}),d.$set(qe);const lt={};f&33554433&&(lt.$$scope={dirty:f,ctx:u}),O.$set(lt);const it={};f&33554433&&(it.$$scope={dirty:f,ctx:u}),$.$set(it);const at={};f&33554433&&(at.$$scope={dirty:f,ctx:u}),H.$set(at),f&1&&(me=u[0].attributes,xe(),U=Bt(U,f,Ee,1,u,me,ve,ue.parentNode,yt,kt,ue,dt),et());const st={};!$e&&f&1&&($e=!0,st.value=u[0].manaRegen,P(()=>$e=!1)),X.$set(st);const ut={};f&33554433&&(ut.$$scope={dirty:f,ctx:u}),ae.$set(ut);const ot={};f&33554437&&(ot.$$scope={dirty:f,ctx:u}),Z.$set(ot);const rt={};!ke&&f&1&&(ke=!0,rt.icon=u[0].icon,P(()=>ke=!1)),oe.$set(rt);const pt={};f&33554433&&(pt.$$scope={dirty:f,ctx:u}),re.$set(pt)},i(u){if(!Te){g(t.$$.fragment,u),g(i.$$.fragment,u),g(r.$$.fragment,u),g(_.$$.fragment,u),g(C.$$.fragment,u),g(B.$$.fragment,u),g(F.$$.fragment,u),g(d.$$.fragment,u),g(O.$$.fragment,u),g($.$$.fragment,u),g(H.$$.fragment,u);for(let f=0;f<me.length;f+=1)g(U[f]);g(X.$$.fragment,u),g(ae.$$.fragment,u),g(Z.$$.fragment,u),g(oe.$$.fragment,u),g(re.$$.fragment,u),Te=!0}},o(u){h(t.$$.fragment,u),h(i.$$.fragment,u),h(r.$$.fragment,u),h(_.$$.fragment,u),h(C.$$.fragment,u),h(B.$$.fragment,u),h(F.$$.fragment,u),h(d.$$.fragment,u),h(O.$$.fragment,u),h($.$$.fragment,u),h(H.$$.fragment,u);for(let f=0;f<U.length;f+=1)h(U[f]);h(X.$$.fragment,u),h(ae.$$.fragment,u),h(Z.$$.fragment,u),h(oe.$$.fragment,u),h(re.$$.fragment,u),Te=!1},d(u){T(t,u),u&&c(l),T(i,u),u&&c(e),T(r,u),u&&c(L),T(_,u),u&&c(M),T(C,u),u&&c(W),T(B,u),u&&c(j),T(F,u),u&&c(J),T(d,u),u&&c(V),T(O,u),u&&c(m),T($,u),u&&c(x),T(H,u),u&&c(se),u&&c(Y),u&&c(pe);for(let f=0;f<U.length;f+=1)U[f].d(u);u&&c(ue),T(X,u),u&&c(ie),T(ae,u),u&&c(fe),T(Z,u),u&&c(_e),T(oe,u),u&&c(we),T(re,u)}}}function ln(n){let t,a,l;function i(e){n[10](e)}let s={id:"parent",data:n[1].filter(n[9]),display:mn};return n[0].parent!==void 0&&(s.selected=n[0].parent),t=new tt({props:s}),D.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[9])),!a&&r&1&&(a=!0,p.selected=e[0].parent,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function an(n){let t,a,l;function i(e){n[11](e)}let s={};return n[0].permission!==void 0&&(s.data=n[0].permission),t=new nt({props:s}),D.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].permission,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function sn(n){let t,a,l;function i(e){n[12](e)}let s={data:Ut};return n[0].expSources!==void 0&&(s.value=n[0].expSources),t=new nn({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].expSources,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function un(n){let t,a,l;function i(e){n[13](e)}let s={};return n[0].health!==void 0&&(s.value=n[0].health),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].health,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function on(n){let t,a,l;function i(e){n[14](e)}let s={};return n[0].mana!==void 0&&(s.value=n[0].mana),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].mana,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function rn(n){let t,a,l;function i(e){n[15](e,n[22],n[23],n[24])}let s={};return n[22]!==void 0&&(s.value=n[22]),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){n=e;const p={};!a&&r&1&&(a=!0,p.value=n[22],P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function kt(n,t){let a,l,i;return l=new y({props:{label:ct(t[22].name),tooltip:"The amount of "+t[22].name+" the class has",$$slots:{default:[rn]},$$scope:{ctx:t}}}),{key:n,first:null,c(){a=Me(),v(l.$$.fragment),this.h()},l(s){a=Me(),k(l.$$.fragment,s),this.h()},h(){this.first=a},m(s,e){I(s,a,e),w(l,s,e),i=!0},p(s,e){t=s;const r={};e&1&&(r.label=ct(t[22].name)),e&1&&(r.tooltip="The amount of "+t[22].name+" the class has"),e&33554433&&(r.$$scope={dirty:e,ctx:t}),l.$set(r)},i(s){i||(g(l.$$.fragment,s),i=!0)},o(s){h(l.$$.fragment,s),i=!1},d(s){s&&c(a),T(l,s)}}}function pn(n){let t,a,l,i,s,e,r,p,L,_,q,M,C,S,W;return{c(){t=G("select"),a=G("option"),l=te("Requirement"),i=G("option"),s=te("Basic Horizontal"),e=G("option"),r=te("Basic Vertical"),p=G("option"),L=te("Level Horizontal"),_=G("option"),q=te("Level Vertical"),M=G("option"),C=te("Flood"),this.h()},l(B){t=K(B,"SELECT",{id:!0});var A=Q(t);a=K(A,"OPTION",{});var j=Q(a);l=ne(j,"Requirement"),j.forEach(c),i=K(A,"OPTION",{});var F=Q(i);s=ne(F,"Basic Horizontal"),F.forEach(c),e=K(A,"OPTION",{});var J=Q(e);r=ne(J,"Basic Vertical"),J.forEach(c),p=K(A,"OPTION",{});var d=Q(p);L=ne(d,"Level Horizontal"),d.forEach(c),_=K(A,"OPTION",{});var V=Q(_);q=ne(V,"Level Vertical"),V.forEach(c),M=K(A,"OPTION",{});var O=Q(M);C=ne(O,"Flood"),O.forEach(c),A.forEach(c),this.h()},h(){a.__value="Requirement",a.value=a.__value,i.__value="Basic Horizontal",i.value=i.__value,e.__value="Basic Vertical",e.value=e.__value,p.__value="Level Horizontal",p.value=p.__value,_.__value="Level Vertical",_.value=_.__value,M.__value="Flood",M.value=M.__value,le(t,"id","skill-tree"),n[0].skillTree===void 0&&It(()=>n[17].call(t))},m(B,A){I(B,t,A),z(t,a),z(a,l),z(t,i),z(i,s),z(t,e),z(e,r),z(t,p),z(p,L),z(t,_),z(_,q),z(t,M),z(M,C),Ze(t,n[0].skillTree),S||(W=Ie(t,"change",n[17]),S=!0)},p(B,A){A&1&&Ze(t,B[0].skillTree)},d(B){B&&c(t),S=!1,W()}}}function fn(n){let t,a,l;function i(e){n[18](e)}let s={id:"skills",data:n[2],multiple:"true",display:cn,placeholder:"No Skills"};return n[0].skills!==void 0&&(s.selected=n[0].skills),t=new tt({props:s}),D.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&4&&(p.data=e[2]),!a&&r&1&&(a=!0,p.selected=e[0].skills,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function _n(n){let t,a,l;function i(e){n[20](e)}let s={multiple:!0};return n[0].unusableItems!==void 0&&(s.selected=n[0].unusableItems),t=new Mt({props:s}),D.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.selected=e[0].unusableItems,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function $n(n){let t,a,l=n[0]&&vt(n);return{c(){l&&l.c(),t=Me()},l(i){l&&l.l(i),t=Me()},m(i,s){l&&l.m(i,s),I(i,t,s),a=!0},p(i,[s]){i[0]?l?(l.p(i,s),s&1&&g(l,1)):(l=vt(i),l.c(),g(l,1),l.m(t.parentNode,t)):l&&(xe(),h(l,1,1,()=>{l=null}),et())},i(i){a||(g(l),a=!0)},o(i){h(l),a=!1},d(i){l&&l.d(i),i&&c(t)}}}const mn=n=>n.name,cn=n=>n.name;function gn(n,t,a){let l,i;Xe(n,zt,$=>a(1,l=$)),Xe(n,St,$=>a(2,i=$));let{data:s}=t,e;Ot(()=>{e=Ft.subscribe($=>{const x=[];a(0,s.attributes=s.attributes.filter(H=>$!=null&&$.includes(H.name)?(x.push(H.name),!0):!1),s),$=$.filter(H=>!x.includes(H));for(const H of $)s.attributes.push(new Ht(H,0,0))})}),Ct(()=>{e&&e()});function r($){n.$$.not_equal(s.name,$)&&(s.name=$,a(0,s))}function p($){n.$$.not_equal(s.prefix,$)&&(s.prefix=$,a(0,s))}function L($){n.$$.not_equal(s.actionBar,$)&&(s.actionBar=$,a(0,s))}function _($){n.$$.not_equal(s.group,$)&&(s.group=$,a(0,s))}function q($){n.$$.not_equal(s.manaName,$)&&(s.manaName=$,a(0,s))}function M($){n.$$.not_equal(s.maxLevel,$)&&(s.maxLevel=$,a(0,s))}const C=$=>$!==s;function S($){n.$$.not_equal(s.parent,$)&&(s.parent=$,a(0,s))}function W($){n.$$.not_equal(s.permission,$)&&(s.permission=$,a(0,s))}function B($){n.$$.not_equal(s.expSources,$)&&(s.expSources=$,a(0,s))}function A($){n.$$.not_equal(s.health,$)&&(s.health=$,a(0,s))}function j($){n.$$.not_equal(s.mana,$)&&(s.mana=$,a(0,s))}function F($,x,H,se){H[se]=$,a(0,s)}function J($){n.$$.not_equal(s.manaRegen,$)&&(s.manaRegen=$,a(0,s))}function d(){s.skillTree=Lt(this),a(0,s)}function V($){n.$$.not_equal(s.skills,$)&&(s.skills=$,a(0,s))}function O($){n.$$.not_equal(s.icon,$)&&(s.icon=$,a(0,s))}function m($){n.$$.not_equal(s.unusableItems,$)&&(s.unusableItems=$,a(0,s))}return n.$$set=$=>{"data"in $&&a(0,s=$.data)},n.$$.update=()=>{n.$$.dirty&1&&(s!=null&&s.name&&Et(),Rt())},[s,l,i,r,p,L,_,q,M,C,S,W,B,A,j,F,J,d,V,O,m]}class hn extends he{constructor(t){super(),be(this,t,gn,$n,de,{data:0})}}function wt(n){let t,a,l,i,s,e,r,p,L,_,q,M,C,S,W,B,A,j,F,J,d,V,O,m,$,x,H,se,Y,ge,pe,U,ve,ue,X,$e,ie,ae,fe,Z,_e;function oe(o){n[2](o)}let ke={label:"Name",tooltip:"The name of the skill. This should not contain color codes"};n[0].name!==void 0&&(ke.value=n[0].name),t=new y({props:ke}),D.push(()=>N(t,"value",oe));function we(o){n[3](o)}let re={label:"Type",tooltip:'The flavor text describing the skill such as "AOE utility" or whatever you want it to be'};n[0].type!==void 0&&(re.value=n[0].type),i=new y({props:re}),D.push(()=>N(i,"value",we));function Te(o){n[4](o)}let Ve={label:"Max Level",type:"number",tooltip:"The maximum level the skill can reach"};n[0].maxLevel!==void 0&&(Ve.value=n[0].maxLevel),r=new y({props:Ve}),D.push(()=>N(r,"value",Te)),_=new y({props:{label:"Skill Requirement",tooltip:"The skill that needs to be upgraded before this one can be unlocked",$$slots:{default:[bn]},$$scope:{ctx:n}}});function ze(o){n[7](o)}let Fe={label:"Skill Req Level",type:"number",intMode:!0,tooltip:"The level that the required skill needs to reach before this one can be unlocked"};n[0].skillReqLevel!==void 0&&(Fe.value=n[0].skillReqLevel),M=new y({props:Fe}),D.push(()=>N(M,"value",ze)),W=new y({props:{label:"Permission",tooltip:'Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.'+n[0].name+'"',$$slots:{default:[dn]},$$scope:{ctx:n}}}),A=new y({props:{label:"Level Req",tooltip:"The class level the player needs to be before unlocking or upgrading this skill",$$slots:{default:[vn]},$$scope:{ctx:n}}}),F=new y({props:{label:"Cost",tooltip:"The amount of skill points needed to unlock and upgrade this skill",$$slots:{default:[kn]},$$scope:{ctx:n}}}),d=new y({props:{label:"Cooldown",tooltip:"The time in seconds before the skill can be cast again (only works with the Cast trigger)",$$slots:{default:[wn]},$$scope:{ctx:n}}}),O=new y({props:{label:"Cooldown Message",tooltip:"Whether to send a message when attempting to run the skill while in cooldown",$$slots:{default:[Tn]},$$scope:{ctx:n}}}),$=new y({props:{label:"Mana",tooltip:"The amount of mana it takes to cast the skill (only works with the Cast trigger)",$$slots:{default:[qn]},$$scope:{ctx:n}}}),H=new y({props:{label:"Min Spent",tooltip:"The amount of skill points that need to be spent before upgrading this skill",$$slots:{default:[In]},$$scope:{ctx:n}}});function He(o){n[15](o)}let Ue={label:"Cast Message",tooltip:"The message to display to players around the caster when the skill is cast. The radius of the area is in the config.yml options"};n[0].castMessage!==void 0&&(Ue.value=n[0].castMessage),Y=new y({props:Ue}),D.push(()=>N(Y,"value",He));function We(o){n[16](o)}let Ge={label:"Combo",tooltip:'The click combo to assign the skill (if enabled). Use L, R, S, LS, RS, P, Q and F for the types of clicks separated by spaces. For example, "L L R R" would work for 4 click combos.'};n[0].combo!==void 0&&(Ge.value=n[0].combo),U=new y({props:Ge}),D.push(()=>N(U,"value",We)),X=new y({props:{label:"Indicator",tooltip:'What sort of display to use for cast previews. This applies to the "hover bar" in the casting bars setup',$$slots:{default:[Ln]},$$scope:{ctx:n}}});function Ke(o){n[18](o)}let je={};return n[0].icon!==void 0&&(je.icon=n[0].icon),ie=new Dt({props:je}),D.push(()=>N(ie,"icon",Ke)),Z=new y({props:{label:"Incompatible",tooltip:"List of skills that must not be upgraded in order to upgrade this skill",$$slots:{default:[Mn]},$$scope:{ctx:n}}}),{c(){v(t.$$.fragment),l=E(),v(i.$$.fragment),e=E(),v(r.$$.fragment),L=E(),v(_.$$.fragment),q=E(),v(M.$$.fragment),S=E(),v(W.$$.fragment),B=E(),v(A.$$.fragment),j=E(),v(F.$$.fragment),J=E(),v(d.$$.fragment),V=E(),v(O.$$.fragment),m=E(),v($.$$.fragment),x=E(),v(H.$$.fragment),se=E(),v(Y.$$.fragment),pe=E(),v(U.$$.fragment),ue=E(),v(X.$$.fragment),$e=E(),v(ie.$$.fragment),fe=E(),v(Z.$$.fragment)},l(o){k(t.$$.fragment,o),l=R(o),k(i.$$.fragment,o),e=R(o),k(r.$$.fragment,o),L=R(o),k(_.$$.fragment,o),q=R(o),k(M.$$.fragment,o),S=R(o),k(W.$$.fragment,o),B=R(o),k(A.$$.fragment,o),j=R(o),k(F.$$.fragment,o),J=R(o),k(d.$$.fragment,o),V=R(o),k(O.$$.fragment,o),m=R(o),k($.$$.fragment,o),x=R(o),k(H.$$.fragment,o),se=R(o),k(Y.$$.fragment,o),pe=R(o),k(U.$$.fragment,o),ue=R(o),k(X.$$.fragment,o),$e=R(o),k(ie.$$.fragment,o),fe=R(o),k(Z.$$.fragment,o)},m(o,b){w(t,o,b),I(o,l,b),w(i,o,b),I(o,e,b),w(r,o,b),I(o,L,b),w(_,o,b),I(o,q,b),w(M,o,b),I(o,S,b),w(W,o,b),I(o,B,b),w(A,o,b),I(o,j,b),w(F,o,b),I(o,J,b),w(d,o,b),I(o,V,b),w(O,o,b),I(o,m,b),w($,o,b),I(o,x,b),w(H,o,b),I(o,se,b),w(Y,o,b),I(o,pe,b),w(U,o,b),I(o,ue,b),w(X,o,b),I(o,$e,b),w(ie,o,b),I(o,fe,b),w(Z,o,b),_e=!0},p(o,b){const Se={};!a&&b&1&&(a=!0,Se.value=o[0].name,P(()=>a=!1)),t.$set(Se);const me={};!s&&b&1&&(s=!0,me.value=o[0].type,P(()=>s=!1)),i.$set(me);const Ee={};!p&&b&1&&(p=!0,Ee.value=o[0].maxLevel,P(()=>p=!1)),r.$set(Ee);const Je={};b&2097155&&(Je.$$scope={dirty:b,ctx:o}),_.$set(Je);const Re={};!C&&b&1&&(C=!0,Re.value=o[0].skillReqLevel,P(()=>C=!1)),M.$set(Re);const De={};b&1&&(De.tooltip='Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.'+o[0].name+'"'),b&2097153&&(De.$$scope={dirty:b,ctx:o}),W.$set(De);const Ne={};b&2097153&&(Ne.$$scope={dirty:b,ctx:o}),A.$set(Ne);const u={};b&2097153&&(u.$$scope={dirty:b,ctx:o}),F.$set(u);const f={};b&2097153&&(f.$$scope={dirty:b,ctx:o}),d.$set(f);const ee={};b&2097153&&(ee.$$scope={dirty:b,ctx:o}),O.$set(ee);const Pe={};b&2097153&&(Pe.$$scope={dirty:b,ctx:o}),$.$set(Pe);const Oe={};b&2097153&&(Oe.$$scope={dirty:b,ctx:o}),H.$set(Oe);const Ce={};!ge&&b&1&&(ge=!0,Ce.value=o[0].castMessage,P(()=>ge=!1)),Y.$set(Ce);const Be={};!ve&&b&1&&(ve=!0,Be.value=o[0].combo,P(()=>ve=!1)),U.$set(Be);const ye={};b&2097153&&(ye.$$scope={dirty:b,ctx:o}),X.$set(ye);const Ae={};!ae&&b&1&&(ae=!0,Ae.icon=o[0].icon,P(()=>ae=!1)),ie.$set(Ae);const qe={};b&2097155&&(qe.$$scope={dirty:b,ctx:o}),Z.$set(qe)},i(o){_e||(g(t.$$.fragment,o),g(i.$$.fragment,o),g(r.$$.fragment,o),g(_.$$.fragment,o),g(M.$$.fragment,o),g(W.$$.fragment,o),g(A.$$.fragment,o),g(F.$$.fragment,o),g(d.$$.fragment,o),g(O.$$.fragment,o),g($.$$.fragment,o),g(H.$$.fragment,o),g(Y.$$.fragment,o),g(U.$$.fragment,o),g(X.$$.fragment,o),g(ie.$$.fragment,o),g(Z.$$.fragment,o),_e=!0)},o(o){h(t.$$.fragment,o),h(i.$$.fragment,o),h(r.$$.fragment,o),h(_.$$.fragment,o),h(M.$$.fragment,o),h(W.$$.fragment,o),h(A.$$.fragment,o),h(F.$$.fragment,o),h(d.$$.fragment,o),h(O.$$.fragment,o),h($.$$.fragment,o),h(H.$$.fragment,o),h(Y.$$.fragment,o),h(U.$$.fragment,o),h(X.$$.fragment,o),h(ie.$$.fragment,o),h(Z.$$.fragment,o),_e=!1},d(o){T(t,o),o&&c(l),T(i,o),o&&c(e),T(r,o),o&&c(L),T(_,o),o&&c(q),T(M,o),o&&c(S),T(W,o),o&&c(B),T(A,o),o&&c(j),T(F,o),o&&c(J),T(d,o),o&&c(V),T(O,o),o&&c(m),T($,o),o&&c(x),T(H,o),o&&c(se),T(Y,o),o&&c(pe),T(U,o),o&&c(ue),T(X,o),o&&c($e),T(ie,o),o&&c(fe),T(Z,o)}}}function bn(n){let t,a,l;function i(e){n[6](e)}let s={data:n[1].filter(n[5]),display:En};return n[0].skillReq!==void 0&&(s.selected=n[0].skillReq),t=new tt({props:s}),D.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[5])),!a&&r&1&&(a=!0,p.selected=e[0].skillReq,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function dn(n){let t,a,l;function i(e){n[8](e)}let s={};return n[0].permission!==void 0&&(s.data=n[0].permission),t=new nt({props:s}),D.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].permission,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function vn(n){let t,a,l;function i(e){n[9](e)}let s={};return n[0].levelReq!==void 0&&(s.value=n[0].levelReq),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].levelReq,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function kn(n){let t,a,l;function i(e){n[10](e)}let s={};return n[0].cost!==void 0&&(s.value=n[0].cost),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].cost,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function wn(n){let t,a,l;function i(e){n[11](e)}let s={};return n[0].cooldown!==void 0&&(s.value=n[0].cooldown),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].cooldown,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Tn(n){let t,a,l;function i(e){n[12](e)}let s={};return n[0].cooldownMessage!==void 0&&(s.value=n[0].cooldownMessage),t=new nt({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].cooldownMessage,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function qn(n){let t,a,l;function i(e){n[13](e)}let s={};return n[0].mana!==void 0&&(s.value=n[0].mana),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].mana,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function In(n){let t,a,l;function i(e){n[14](e)}let s={};return n[0].minSpent!==void 0&&(s.value=n[0].minSpent),t=new ce({props:s}),D.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].minSpent,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Ln(n){let t,a,l,i,s,e,r,p,L;return{c(){t=G("select"),a=G("option"),l=te("2D"),i=G("option"),s=te("3D"),e=G("option"),r=te("None"),this.h()},l(_){t=K(_,"SELECT",{});var q=Q(t);a=K(q,"OPTION",{});var M=Q(a);l=ne(M,"2D"),M.forEach(c),i=K(q,"OPTION",{});var C=Q(i);s=ne(C,"3D"),C.forEach(c),e=K(q,"OPTION",{});var S=Q(e);r=ne(S,"None"),S.forEach(c),q.forEach(c),this.h()},h(){a.__value="2D",a.value=a.__value,i.__value="3D",i.value=i.__value,e.__value="None",e.value=e.__value,n[0].indicator===void 0&&It(()=>n[17].call(t))},m(_,q){I(_,t,q),z(t,a),z(a,l),z(t,i),z(i,s),z(t,e),z(e,r),Ze(t,n[0].indicator),p||(L=Ie(t,"change",n[17]),p=!0)},p(_,q){q&1&&Ze(t,_[0].indicator)},d(_){_&&c(t),p=!1,L()}}}function Mn(n){let t,a,l;function i(e){n[20](e)}let s={multiple:!0,data:n[1].filter(n[19]),display:Rn};return n[0].incompatible!==void 0&&(s.selected=n[0].incompatible),t=new tt({props:s}),D.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[19])),!a&&r&1&&(a=!0,p.selected=e[0].incompatible,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Sn(n){let t,a,l=n[0]&&wt(n);return{c(){l&&l.c(),t=Me()},l(i){l&&l.l(i),t=Me()},m(i,s){l&&l.m(i,s),I(i,t,s),a=!0},p(i,[s]){i[0]?l?(l.p(i,s),s&1&&g(l,1)):(l=wt(i),l.c(),g(l,1),l.m(t.parentNode,t)):l&&(xe(),h(l,1,1,()=>{l=null}),et())},i(i){a||(g(l),a=!0)},o(i){h(l),a=!1},d(i){l&&l.d(i),i&&c(t)}}}const En=n=>n.name,Rn=n=>n.name;function Dn(n,t,a){let l;Xe(n,St,m=>a(1,l=m));let{data:i}=t;function s(m){n.$$.not_equal(i.name,m)&&(i.name=m,a(0,i))}function e(m){n.$$.not_equal(i.type,m)&&(i.type=m,a(0,i))}function r(m){n.$$.not_equal(i.maxLevel,m)&&(i.maxLevel=m,a(0,i))}const p=m=>m!==i;function L(m){n.$$.not_equal(i.skillReq,m)&&(i.skillReq=m,a(0,i))}function _(m){n.$$.not_equal(i.skillReqLevel,m)&&(i.skillReqLevel=m,a(0,i))}function q(m){n.$$.not_equal(i.permission,m)&&(i.permission=m,a(0,i))}function M(m){n.$$.not_equal(i.levelReq,m)&&(i.levelReq=m,a(0,i))}function C(m){n.$$.not_equal(i.cost,m)&&(i.cost=m,a(0,i))}function S(m){n.$$.not_equal(i.cooldown,m)&&(i.cooldown=m,a(0,i))}function W(m){n.$$.not_equal(i.cooldownMessage,m)&&(i.cooldownMessage=m,a(0,i))}function B(m){n.$$.not_equal(i.mana,m)&&(i.mana=m,a(0,i))}function A(m){n.$$.not_equal(i.minSpent,m)&&(i.minSpent=m,a(0,i))}function j(m){n.$$.not_equal(i.castMessage,m)&&(i.castMessage=m,a(0,i))}function F(m){n.$$.not_equal(i.combo,m)&&(i.combo=m,a(0,i))}function J(){i.indicator=Lt(this),a(0,i)}function d(m){n.$$.not_equal(i.icon,m)&&(i.icon=m,a(0,i))}const V=m=>m!==i;function O(m){n.$$.not_equal(i.incompatible,m)&&(i.incompatible=m,a(0,i))}return n.$$set=m=>{"data"in m&&a(0,i=m.data)},n.$$.update=()=>{n.$$.dirty&1&&(i!=null&&i.name&&Et(),Rt())},[i,l,s,e,r,p,L,_,q,M,C,S,W,B,A,j,F,J,d,V,O]}class Nn extends he{constructor(t){super(),be(this,t,Dn,Sn,de,{data:0})}}function Tt(n){let t,a,l;return{c(){t=G("a"),a=te("Edit Skill"),this.h()},l(i){t=K(i,"A",{href:!0});var s=Q(t);a=ne(s,"Edit Skill"),s.forEach(c),this.h()},h(){le(t,"href",l="/skill/"+n[0].data.name+"/edit")},m(i,s){I(i,t,s),z(t,a)},p(i,s){s&1&&l!==(l="/skill/"+i[0].data.name+"/edit")&&le(t,"href",l)},d(i){i&&c(t)}}}function Pn(n){let t,a,l;function i(e){n[2](e)}let s={};return n[0].data!==void 0&&(s.data=n[0].data),t=new Nn({props:s}),D.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].data,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function On(n){let t,a,l;function i(e){n[1](e)}let s={};return n[0].data!==void 0&&(s.data=n[0].data),t=new hn({props:s}),D.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].data,P(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Cn(n){var j,F,J;let t,a,l,i=((F=(j=n[0])==null?void 0:j.data)==null?void 0:F.name)+"",s,e,r,p,L,_,q,M,C;document.title=t="ProSkillAPI Dynamic Editor - "+n[0].data.name;let S=((J=n[0])==null?void 0:J.data)instanceof gt&&Tt(n);const W=[On,Pn],B=[];function A(d,V){var O;return((O=d[0])==null?void 0:O.data)instanceof Wt?0:1}return q=A(n),M=B[q]=W[q](n),{c(){a=E(),l=G("h1"),s=te(i),e=E(),S&&S.c(),r=E(),p=G("hr"),L=E(),_=G("div"),M.c(),this.h()},l(d){At("svelte-ufhrov",document.head).forEach(c),a=R(d),l=K(d,"H1",{class:!0});var O=Q(l);s=ne(O,i),e=R(O),S&&S.l(O),O.forEach(c),r=R(d),p=K(d,"HR",{}),L=R(d),_=K(d,"DIV",{class:!0});var m=Q(_);M.l(m),m.forEach(c),this.h()},h(){le(l,"class","svelte-1k1ae1p"),le(_,"class","container svelte-1k1ae1p")},m(d,V){I(d,a,V),I(d,l,V),z(l,s),z(l,e),S&&S.m(l,null),I(d,r,V),I(d,p,V),I(d,L,V),I(d,_,V),B[q].m(_,null),C=!0},p(d,[V]){var m,$,x;(!C||V&1)&&t!==(t="ProSkillAPI Dynamic Editor - "+d[0].data.name)&&(document.title=t),(!C||V&1)&&i!==(i=(($=(m=d[0])==null?void 0:m.data)==null?void 0:$.name)+"")&&qt(s,i),((x=d[0])==null?void 0:x.data)instanceof gt?S?S.p(d,V):(S=Tt(d),S.c(),S.m(l,null)):S&&(S.d(1),S=null);let O=q;q=A(d),q===O?B[q].p(d,V):(xe(),h(B[O],1,1,()=>{B[O]=null}),et(),M=B[q],M?M.p(d,V):(M=B[q]=W[q](d),M.c()),g(M,1),M.m(_,null))},i(d){C||(g(M),C=!0)},o(d){h(M),C=!1},d(d){d&&c(a),d&&c(l),S&&S.d(),d&&c(r),d&&c(p),d&&c(L),d&&c(_),B[q].d()}}}function Bn(n,t,a){let{data:l}=t;function i(e){n.$$.not_equal(l.data,e)&&(l.data=e,a(0,l))}function s(e){n.$$.not_equal(l.data,e)&&(l.data=e,a(0,l))}return n.$$set=e=>{"data"in e&&a(0,l=e.data)},[l,i,s]}class zn extends he{constructor(t){super(),be(this,t,Bn,Cn,de,{data:0})}}export{zn as default};
