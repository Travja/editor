import{V as rs,S as lt,i as tt,s as st,k as _,a as k,l as p,m as v,c as E,h as d,n as o,I as Ye,M as el,b as z,E as a,G as B,_ as os,g as ls,t as Ee,d as ts,f as Y,K as al,q as D,r as V,u as Je,Q as cs,B as ll,a1 as us,Y as Fe,J as tl,e as Yt,W as fs,a4 as ds,a5 as _s,a6 as ps,a7 as hs,H as q,a8 as sl,a9 as We,w as je,a3 as vs,x as Xe,y as Ze,aa as Jt,ab as $e,z as xe,R as Kt,o as ms,ac as gs}from"../../../../chunks/index-f8f3fbf8.js";import{b as bs,c as ks,f as Ge}from"../../../../chunks/clickoutside-621d529c.js";import{A as Es,l as Is,n as Ls}from"../../../../chunks/store-ec299772.js";function Ds(l,{from:s,to:e},u={}){const r=getComputedStyle(l),i=r.transform==="none"?"":r.transform,[m,c]=r.transformOrigin.split(" ").map(parseFloat),n=s.left+s.width*m/e.width-(e.left+m),t=s.top+s.height*c/e.height-(e.top+c),{delay:A=0,duration:T=w=>Math.sqrt(w)*120,easing:I=bs}=u;return{delay:A,duration:rs(T)?T(Math.sqrt(n*n+t*t)):T,easing:I,css:(w,M)=>{const R=M*n,U=M*t,N=w+M*s.width/e.width,y=w+M*s.height/e.height;return`transform: ${i} translate(${R}px, ${U}px) scale(${N}, ${y});`}}}function Qt(l,s,e){const u=l.slice();return u[22]=s[e],u}function Wt(l,s,e){const u=l.slice();return u[25]=s[e],u}function Vs(l){let s,e=l[3](l[0])+"",u,r,i,m,c;return{c(){s=_("div"),u=D(e),this.h()},l(n){s=p(n,"DIV",{class:!0,title:!0});var t=v(s);u=V(t,e),t.forEach(d),this.h()},h(){o(s,"class","chip svelte-1o03l68"),o(s,"title","Click to remove")},m(n,t){z(n,s,t),a(s,u),i=!0,m||(c=B(s,"click",l[14]),m=!0)},p(n,t){(!i||t&9)&&e!==(e=n[3](n[0])+"")&&Je(u,e)},i(n){i||(Ye(()=>{r||(r=tl(s,Ge,{y:-25},!0)),r.run(1)}),i=!0)},o(n){r||(r=tl(s,Ge,{y:-25},!1)),r.run(0),i=!1},d(n){n&&d(s),n&&r&&r.end(),m=!1,c()}}}function Ns(l){let s=[],e=new Map,u,r,i=l[0];const m=c=>c[3](c[25]);for(let c=0;c<i.length;c+=1){let n=Wt(l,i,c),t=m(n);e.set(t,s[c]=jt(t,n))}return{c(){for(let c=0;c<s.length;c+=1)s[c].c();u=Yt()},l(c){for(let n=0;n<s.length;n+=1)s[n].l(c);u=Yt()},m(c,n){for(let t=0;t<s.length;t+=1)s[t].m(c,n);z(c,u,n),r=!0},p(c,n){if(n&1033){i=c[0],ls();for(let t=0;t<s.length;t+=1)s[t].r();s=fs(s,n,m,1,c,i,e,u.parentNode,hs,jt,u,Wt);for(let t=0;t<s.length;t+=1)s[t].a();ts()}},i(c){if(!r){for(let n=0;n<i.length;n+=1)Y(s[n]);r=!0}},o(c){for(let n=0;n<s.length;n+=1)Ee(s[n]);r=!1},d(c){for(let n=0;n<s.length;n+=1)s[n].d(c);c&&d(u)}}}function jt(l,s){let e,u=s[3](s[25])+"",r,i,m,c=ll,n,t,A;function T(...I){return s[13](s[25],...I)}return{key:l,first:null,c(){e=_("div"),r=D(u),this.h()},l(I){e=p(I,"DIV",{class:!0,title:!0});var w=v(e);r=V(w,u),w.forEach(d),this.h()},h(){o(e,"class","chip svelte-1o03l68"),o(e,"title","Click to remove"),this.first=e},m(I,w){z(I,e,w),a(e,r),n=!0,t||(A=B(e,"click",T),t=!0)},p(I,w){s=I,(!n||w&9)&&u!==(u=s[3](s[25])+"")&&Je(r,u)},r(){m=e.getBoundingClientRect()},f(){ds(e),c(),_s(e,m)},a(){c(),c=ps(e,m,Ds,{duration:500})},i(I){n||(Ye(()=>{i||(i=tl(e,Ge,{y:-25},!0)),i.run(1)}),n=!0)},o(I){i||(i=tl(e,Ge,{y:-25},!1)),i.run(0),n=!1},d(I){I&&d(e),I&&i&&i.end(),t=!1,A()}}}function Xt(l){let s,e,u;return{c(){s=_("span"),e=D(l[4]),this.h()},l(r){s=p(r,"SPAN",{class:!0});var i=v(s);e=V(i,l[4]),i.forEach(d),this.h()},h(){o(s,"class","placeholder svelte-1o03l68")},m(r,i){z(r,s,i),a(s,e)},p(r,i){i&16&&Je(e,r[4])},i(r){u||Ye(()=>{u=cs(s,Ge,{y:25,delay:250}),u.start()})},o:ll,d(r){r&&d(s)}}}function Zt(l){let s,e,u=l[1],r=[];for(let i=0;i<u.length;i+=1)r[i]=$t(Qt(l,u,i));return{c(){s=_("div"),e=_("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){s=p(i,"DIV",{class:!0});var m=v(s);e=p(m,"DIV",{class:!0});var c=v(e);for(let n=0;n<r.length;n+=1)r[n].l(c);c.forEach(d),m.forEach(d),this.h()},h(){o(e,"class","select svelte-1o03l68"),o(s,"class","select-wrapper")},m(i,m){z(i,s,m),a(s,e);for(let c=0;c<r.length;c+=1)r[c].m(e,null)},p(i,m){if(m&522){u=i[1];let c;for(c=0;c<u.length;c+=1){const n=Qt(i,u,c);r[c]?r[c].p(n,m):(r[c]=$t(n),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=u.length}},d(i){i&&d(s),us(r,i)}}}function $t(l){let s,e=l[3](l[22])+"",u,r,i;function m(){return l[20](l[22])}function c(...n){return l[21](l[22],...n)}return{c(){s=_("div"),u=D(e),this.h()},l(n){s=p(n,"DIV",{tabindex:!0,class:!0});var t=v(s);u=V(t,e),t.forEach(d),this.h()},h(){o(s,"tabindex","0"),o(s,"class","svelte-1o03l68")},m(n,t){z(n,s,t),a(s,u),r||(i=[B(s,"click",m),B(s,"keypress",c)],r=!0)},p(n,t){l=n,t&10&&e!==(e=l[3](l[22])+"")&&Je(u,e)},d(n){n&&d(s),r=!1,al(i)}}}function Ps(l){let s,e,u,r,i,m,c,n,t,A,T,I,w;const M=[Ns,Vs],R=[];function U(b,L){return b[5]?0:b[0]?1:-1}~(u=U(l))&&(r=R[u]=M[u](l));let N=!l[7]&&!l[6]&&(!l[0]||l[0].length==0)&&Xt(l),y=l[1].length>0&&Zt(l);return{c(){s=_("div"),e=_("div"),r&&r.c(),i=k(),N&&N.c(),m=k(),c=_("div"),n=k(),t=_("div"),A=k(),y&&y.c(),this.h()},l(b){s=p(b,"DIV",{id:!0});var L=v(s);e=p(L,"DIV",{id:!0,class:!0});var C=v(e);r&&r.l(C),i=E(C),N&&N.l(C),m=E(C),c=p(C,"DIV",{class:!0,contenteditable:!0});var F=v(c);F.forEach(d),n=E(C),t=p(C,"DIV",{class:!0}),v(t).forEach(d),C.forEach(d),A=E(L),y&&y.l(L),L.forEach(d),this.h()},h(){o(c,"class","input-box svelte-1o03l68"),o(c,"contenteditable",""),l[6]===void 0&&Ye(()=>l[16].call(c)),o(t,"class","clear"),o(e,"id",l[2]),o(e,"class","input svelte-1o03l68"),el(e,"focused",l[7]),o(s,"id","wrapper")},m(b,L){z(b,s,L),a(s,e),~u&&R[u].m(e,null),a(e,i),N&&N.m(e,null),a(e,m),a(e,c),l[15](c),l[6]!==void 0&&(c.textContent=l[6]),a(e,n),a(e,t),a(s,A),y&&y.m(s,null),T=!0,I||(w=[B(c,"input",l[16]),B(c,"focus",l[17]),B(c,"blur",l[18]),B(e,"click",l[19]),os(ks.call(null,s)),B(s,"outclick",l[11])],I=!0)},p(b,[L]){let C=u;u=U(b),u===C?~u&&R[u].p(b,L):(r&&(ls(),Ee(R[C],1,1,()=>{R[C]=null}),ts()),~u?(r=R[u],r?r.p(b,L):(r=R[u]=M[u](b),r.c()),Y(r,1),r.m(e,i)):r=null),!b[7]&&!b[6]&&(!b[0]||b[0].length==0)?N?(N.p(b,L),L&193&&Y(N,1)):(N=Xt(b),N.c(),Y(N,1),N.m(e,m)):N&&(N.d(1),N=null),L&64&&b[6]!==c.textContent&&(c.textContent=b[6]),(!T||L&4)&&o(e,"id",b[2]),(!T||L&128)&&el(e,"focused",b[7]),b[1].length>0?y?y.p(b,L):(y=Zt(b),y.c(),y.m(s,null)):y&&(y.d(1),y=null)},i(b){T||(Y(r),Y(N),T=!0)},o(b){Ee(r),T=!1},d(b){b&&d(s),~u&&R[u].d(),N&&N.d(),l[15](null),y&&y.d(),I=!1,al(w)}}}function ws(l,s,e){let{id:u}=s,{data:r=[]}=s,{display:i=g=>g.toString()}=s,{placeholder:m=""}=s,{multiple:c=!1}=s,{selected:n=void 0}=s,{filtered:t=[]}=s,A=!1,T,I;const w=(g,O)=>{if(!(O&&(O==null?void 0:O.key)!="Enter"&&(O==null?void 0:O.key)!=" ")){if(!c){e(0,n=g),e(6,I="");return}n.includes(g)||(n.push(g),e(0,n=[...n]),e(6,I=""),T.focus())}},M=(g,O)=>{g.stopPropagation(),c?e(0,n=n.filter(He=>He!=O)):e(0,n=void 0)},R=()=>{e(7,A=!1),e(6,I="")},U=(g,O)=>M(O,g),N=g=>M(g,n);function y(g){Fe[g?"unshift":"push"](()=>{T=g,e(8,T)})}function b(){I=this.textContent,e(6,I)}const L=()=>e(7,A=!0),C=()=>e(7,A=!1),F=()=>T.focus(),S=g=>w(g),Ue=(g,O)=>w(g,O);return l.$$set=g=>{"id"in g&&e(2,u=g.id),"data"in g&&e(12,r=g.data),"display"in g&&e(3,i=g.display),"placeholder"in g&&e(4,m=g.placeholder),"multiple"in g&&e(5,c=g.multiple),"selected"in g&&e(0,n=g.selected),"filtered"in g&&e(1,t=g.filtered)},l.$$.update=()=>{l.$$.dirty&4201&&e(1,t=r.filter(g=>{if(!I)return!1;if(i(g).toLowerCase().includes(I.toLowerCase()))return c&&!n.includes(g)||n!=g}))},[n,t,u,i,m,c,I,A,T,w,M,R,r,U,N,y,b,L,C,F,S,Ue]}class xt extends lt{constructor(s){super(),tt(this,s,ws,Ps,st,{id:2,data:12,display:3,placeholder:4,multiple:5,selected:0,filtered:1})}}function ys(l){let s,e,u,r,i,m,c;return{c(){s=_("div"),e=_("input"),u=D(`
  +(
  `),r=_("input"),i=D(`
  )`),this.h()},l(n){s=p(n,"DIV",{class:!0});var t=v(s);e=p(t,"INPUT",{class:!0,type:!0}),u=V(t,`
  +(
  `),r=p(t,"INPUT",{class:!0,type:!0}),i=V(t,`
  )`),t.forEach(d),this.h()},h(){o(e,"class","base svelte-1unqgie"),o(e,"type","number"),o(r,"class","modifier svelte-1unqgie"),o(r,"type","number"),o(s,"class","wrap svelte-1unqgie")},m(n,t){z(n,s,t),a(s,e),q(e,l[0].base),a(s,u),a(s,r),q(r,l[0].scale),a(s,i),m||(c=[B(e,"input",l[1]),B(r,"input",l[2])],m=!0)},p(n,[t]){t&1&&sl(e.value)!==n[0].base&&q(e,n[0].base),t&1&&sl(r.value)!==n[0].scale&&q(r,n[0].scale)},i:ll,o:ll,d(n){n&&d(s),m=!1,al(c)}}}function Ts(l,s,e){let{value:u}=s;function r(){u.base=sl(this.value),e(0,u)}function i(){u.scale=sl(this.value),e(0,u)}return l.$$set=m=>{"value"in m&&e(0,u=m.value)},[u,r,i]}class es extends lt{constructor(s){super(),tt(this,s,Ts,ys,st,{value:0})}}function Ss(l){let s,e,u,r=l[0].class.name+"",i,m,c,n,t,A,T,I,w,M,R,U,N,y,b,L,C,F,S,Ue,g,O,He,ce,il,nl,Ie,J,rl,Le,ol,cl,De,K,ul,fl,ue,dl,_l,te,Q,pl,G,fe,hl,vl,de,ml,gl,_e,bl,kl,Ve,W,El,Ne,Il,Ll,Pe,j,Dl,Vl,we,Nl,Pl,ye,X,wl,yl,pe,Tl,Sl,Te,Z,Bl,he,Al,Ml,Se,H,se,Ol,ae,ql,ie,Cl,ne,Rl,re,Ul,oe,Hl,zl,Be,Fl,Gl,Ae,$,Yl,Jl,ve,Kl,Ql,Me,x,Wl,me,jl,Xl,Oe,ee,Zl,ge,$l,xl,qe,le,be,et,at;document.title=s="ProSkillAPI Dynamic Editor - "+l[0].class.name;function ss(f){l[7](f)}let it={id:"parent",data:l[1],display:Bs};l[0].class.parent!==void 0&&(it.selected=l[0].class.parent),K=new xt({props:it}),Fe.push(()=>We(K,"selected",ss,l[0].class.parent));function as(f){l[12](f)}let nt={};l[0].class.health!==void 0&&(nt.value=l[0].class.health),j=new es({props:nt}),Fe.push(()=>We(j,"value",as,l[0].class.health));function is(f){l[13](f)}let rt={};l[0].class.mana!==void 0&&(rt.value=l[0].class.mana),X=new es({props:rt}),Fe.push(()=>We(X,"value",is,l[0].class.mana));function ns(f){l[16](f)}let ot={id:"skills",data:l[2],multiple:"true",display:As,placeholder:"No Skills"};return l[0].class.skills!==void 0&&(ot.selected=l[0].class.skills),$=new xt({props:ot}),Fe.push(()=>We($,"selected",ns,l[0].class.skills)),{c(){e=k(),u=_("h1"),i=D(r),m=k(),c=_("hr"),n=k(),t=_("div"),A=_("label"),T=D("Name"),I=k(),w=_("div"),M=_("input"),R=k(),U=_("label"),N=D("Prefix"),y=k(),b=_("div"),L=_("input"),C=k(),F=_("label"),S=D("Group"),Ue=k(),g=_("div"),O=_("input"),He=k(),ce=_("label"),il=D("Mana Name"),nl=k(),Ie=_("div"),J=_("input"),rl=k(),Le=_("label"),ol=D("Parent"),cl=k(),De=_("div"),je(K.$$.fragment),fl=k(),ue=_("label"),dl=D("Permission"),_l=k(),te=_("div"),Q=_("input"),pl=k(),G=_("div"),fe=_("div"),hl=D("True"),vl=k(),de=_("div"),ml=D("False"),gl=k(),_e=_("label"),bl=D("Exp Sources"),kl=k(),Ve=_("div"),W=_("input"),El=k(),Ne=_("label"),Il=D("Health"),Ll=k(),Pe=_("div"),je(j.$$.fragment),Vl=k(),we=_("label"),Nl=D("Mana"),Pl=k(),ye=_("div"),je(X.$$.fragment),yl=k(),pe=_("label"),Tl=D("Mana Regen"),Sl=k(),Te=_("div"),Z=_("input"),Bl=k(),he=_("label"),Al=D("Skill Tree"),Ml=k(),Se=_("div"),H=_("select"),se=_("option"),Ol=D("Requirement"),ae=_("option"),ql=D("Basic Horizontal"),ie=_("option"),Cl=D("Basic Vertical"),ne=_("option"),Rl=D("Level Horizontal"),re=_("option"),Ul=D("Level Vertical"),oe=_("option"),Hl=D("Flood"),zl=k(),Be=_("label"),Fl=D("Skills"),Gl=k(),Ae=_("div"),je($.$$.fragment),Jl=k(),ve=_("label"),Kl=D("Icon"),Ql=k(),Me=_("div"),x=_("input"),Wl=k(),me=_("label"),jl=D("CustomModelData"),Xl=k(),Oe=_("div"),ee=_("input"),Zl=k(),ge=_("label"),$l=D("Icon Lore"),xl=k(),qe=_("div"),le=_("input"),this.h()},l(f){vs("svelte-1sxopqz",document.head).forEach(d),e=E(f),u=p(f,"H1",{class:!0});var Ce=v(u);i=V(Ce,r),Ce.forEach(d),m=E(f),c=p(f,"HR",{}),n=E(f),t=p(f,"DIV",{class:!0});var h=v(t);A=p(h,"LABEL",{for:!0,class:!0});var ze=v(A);T=V(ze,"Name"),ze.forEach(d),I=E(h),w=p(h,"DIV",{class:!0});var Re=v(w);M=p(Re,"INPUT",{id:!0,class:!0}),Re.forEach(d),R=E(h),U=p(h,"LABEL",{for:!0,class:!0});var ct=v(U);N=V(ct,"Prefix"),ct.forEach(d),y=E(h),b=p(h,"DIV",{class:!0});var ut=v(b);L=p(ut,"INPUT",{id:!0,class:!0}),ut.forEach(d),C=E(h),F=p(h,"LABEL",{for:!0,class:!0});var ft=v(F);S=V(ft,"Group"),ft.forEach(d),Ue=E(h),g=p(h,"DIV",{class:!0});var dt=v(g);O=p(dt,"INPUT",{id:!0,class:!0}),dt.forEach(d),He=E(h),ce=p(h,"LABEL",{for:!0,class:!0});var _t=v(ce);il=V(_t,"Mana Name"),_t.forEach(d),nl=E(h),Ie=p(h,"DIV",{class:!0});var pt=v(Ie);J=p(pt,"INPUT",{id:!0,class:!0}),pt.forEach(d),rl=E(h),Le=p(h,"LABEL",{class:!0});var ht=v(Le);ol=V(ht,"Parent"),ht.forEach(d),cl=E(h),De=p(h,"DIV",{class:!0});var vt=v(De);Xe(K.$$.fragment,vt),vt.forEach(d),fl=E(h),ue=p(h,"LABEL",{for:!0,class:!0});var mt=v(ue);dl=V(mt,"Permission"),mt.forEach(d),_l=E(h),te=p(h,"DIV",{class:!0});var Ke=v(te);Q=p(Ke,"INPUT",{type:!0,class:!0,id:!0}),pl=E(Ke),G=p(Ke,"DIV",{class:!0});var Qe=v(G);fe=p(Qe,"DIV",{class:!0});var gt=v(fe);hl=V(gt,"True"),gt.forEach(d),vl=E(Qe),de=p(Qe,"DIV",{class:!0});var bt=v(de);ml=V(bt,"False"),bt.forEach(d),Qe.forEach(d),Ke.forEach(d),gl=E(h),_e=p(h,"LABEL",{for:!0,class:!0});var kt=v(_e);bl=V(kt,"Exp Sources"),kt.forEach(d),kl=E(h),Ve=p(h,"DIV",{class:!0});var Et=v(Ve);W=p(Et,"INPUT",{id:!0,class:!0}),Et.forEach(d),El=E(h),Ne=p(h,"LABEL",{class:!0});var It=v(Ne);Il=V(It,"Health"),It.forEach(d),Ll=E(h),Pe=p(h,"DIV",{class:!0});var Lt=v(Pe);Xe(j.$$.fragment,Lt),Lt.forEach(d),Vl=E(h),we=p(h,"LABEL",{class:!0});var Dt=v(we);Nl=V(Dt,"Mana"),Dt.forEach(d),Pl=E(h),ye=p(h,"DIV",{class:!0});var Vt=v(ye);Xe(X.$$.fragment,Vt),Vt.forEach(d),yl=E(h),pe=p(h,"LABEL",{for:!0,class:!0});var Nt=v(pe);Tl=V(Nt,"Mana Regen"),Nt.forEach(d),Sl=E(h),Te=p(h,"DIV",{class:!0});var Pt=v(Te);Z=p(Pt,"INPUT",{id:!0,class:!0}),Pt.forEach(d),Bl=E(h),he=p(h,"LABEL",{for:!0,class:!0});var wt=v(he);Al=V(wt,"Skill Tree"),wt.forEach(d),Ml=E(h),Se=p(h,"DIV",{class:!0});var yt=v(Se);H=p(yt,"SELECT",{id:!0});var ke=v(H);se=p(ke,"OPTION",{});var Tt=v(se);Ol=V(Tt,"Requirement"),Tt.forEach(d),ae=p(ke,"OPTION",{});var St=v(ae);ql=V(St,"Basic Horizontal"),St.forEach(d),ie=p(ke,"OPTION",{});var Bt=v(ie);Cl=V(Bt,"Basic Vertical"),Bt.forEach(d),ne=p(ke,"OPTION",{});var At=v(ne);Rl=V(At,"Level Horizontal"),At.forEach(d),re=p(ke,"OPTION",{});var Mt=v(re);Ul=V(Mt,"Level Vertical"),Mt.forEach(d),oe=p(ke,"OPTION",{});var Ot=v(oe);Hl=V(Ot,"Flood"),Ot.forEach(d),ke.forEach(d),yt.forEach(d),zl=E(h),Be=p(h,"LABEL",{class:!0});var qt=v(Be);Fl=V(qt,"Skills"),qt.forEach(d),Gl=E(h),Ae=p(h,"DIV",{class:!0});var Ct=v(Ae);Xe($.$$.fragment,Ct),Ct.forEach(d),Jl=E(h),ve=p(h,"LABEL",{for:!0,class:!0});var Rt=v(ve);Kl=V(Rt,"Icon"),Rt.forEach(d),Ql=E(h),Me=p(h,"DIV",{class:!0});var Ut=v(Me);x=p(Ut,"INPUT",{id:!0,class:!0}),Ut.forEach(d),Wl=E(h),me=p(h,"LABEL",{for:!0,class:!0});var Ht=v(me);jl=V(Ht,"CustomModelData"),Ht.forEach(d),Xl=E(h),Oe=p(h,"DIV",{class:!0});var zt=v(Oe);ee=p(zt,"INPUT",{id:!0,class:!0}),zt.forEach(d),Zl=E(h),ge=p(h,"LABEL",{for:!0,class:!0});var Ft=v(ge);$l=V(Ft,"Icon Lore"),Ft.forEach(d),xl=E(h),qe=p(h,"DIV",{class:!0});var Gt=v(qe);le=p(Gt,"INPUT",{id:!0,class:!0}),Gt.forEach(d),h.forEach(d),this.h()},h(){o(u,"class","svelte-g99a67"),o(A,"for","name"),o(A,"class","svelte-g99a67"),o(M,"id","name"),o(M,"class","svelte-g99a67"),o(w,"class","input-wrapper svelte-g99a67"),o(U,"for","prefix"),o(U,"class","svelte-g99a67"),o(L,"id","prefix"),o(L,"class","svelte-g99a67"),o(b,"class","input-wrapper svelte-g99a67"),o(F,"for","group"),o(F,"class","svelte-g99a67"),o(O,"id","group"),o(O,"class","svelte-g99a67"),o(g,"class","input-wrapper svelte-g99a67"),o(ce,"for","manaName"),o(ce,"class","svelte-g99a67"),o(J,"id","manaName"),o(J,"class","svelte-g99a67"),o(Ie,"class","input-wrapper svelte-g99a67"),o(Le,"class","svelte-g99a67"),o(De,"class","input-wrapper svelte-g99a67"),o(ue,"for","permission"),o(ue,"class","svelte-g99a67"),o(Q,"type","checkbox"),o(Q,"class","hidden svelte-g99a67"),o(Q,"id","permission"),o(fe,"class","svelte-g99a67"),o(de,"class","svelte-g99a67"),o(G,"class","toggle svelte-g99a67"),el(G,"selected",l[0].class.permission),o(te,"class","input-wrapper svelte-g99a67"),o(_e,"for","expSources"),o(_e,"class","svelte-g99a67"),o(W,"id","expSources"),o(W,"class","svelte-g99a67"),o(Ve,"class","input-wrapper svelte-g99a67"),o(Ne,"class","svelte-g99a67"),o(Pe,"class","input-wrapper svelte-g99a67"),o(we,"class","svelte-g99a67"),o(ye,"class","input-wrapper svelte-g99a67"),o(pe,"for","mana-regen"),o(pe,"class","svelte-g99a67"),o(Z,"id","mana-regen"),o(Z,"class","svelte-g99a67"),o(Te,"class","input-wrapper svelte-g99a67"),o(he,"for","skill-tree"),o(he,"class","svelte-g99a67"),se.__value="Requirement",se.value=se.__value,ae.__value="Basic Horizontal",ae.value=ae.__value,ie.__value="Basic Vertical",ie.value=ie.__value,ne.__value="Level Horizontal",ne.value=ne.__value,re.__value="Level Vertical",re.value=re.__value,oe.__value="Flood",oe.value=oe.__value,o(H,"id","skill-tree"),l[0].class.skillTree===void 0&&Ye(()=>l[15].call(H)),o(Se,"class","input-wrapper svelte-g99a67"),o(Be,"class","svelte-g99a67"),o(Ae,"class","input-wrapper svelte-g99a67"),o(ve,"for","icon"),o(ve,"class","svelte-g99a67"),o(x,"id","icon"),o(x,"class","svelte-g99a67"),o(Me,"class","input-wrapper svelte-g99a67"),o(me,"for","icon-data"),o(me,"class","svelte-g99a67"),o(ee,"id","icon-data"),o(ee,"class","svelte-g99a67"),o(Oe,"class","input-wrapper svelte-g99a67"),o(ge,"for","icon-lore"),o(ge,"class","svelte-g99a67"),o(le,"id","icon-lore"),o(le,"class","svelte-g99a67"),o(qe,"class","input-wrapper svelte-g99a67"),o(t,"class","container svelte-g99a67")},m(f,P){z(f,e,P),z(f,u,P),a(u,i),z(f,m,P),z(f,c,P),z(f,n,P),z(f,t,P),a(t,A),a(A,T),a(t,I),a(t,w),a(w,M),q(M,l[0].class.name),a(t,R),a(t,U),a(U,N),a(t,y),a(t,b),a(b,L),q(L,l[0].class.prefix),a(t,C),a(t,F),a(F,S),a(t,Ue),a(t,g),a(g,O),q(O,l[0].class.group),a(t,He),a(t,ce),a(ce,il),a(t,nl),a(t,Ie),a(Ie,J),q(J,l[0].class.manaName),a(t,rl),a(t,Le),a(Le,ol),a(t,cl),a(t,De),Ze(K,De,null),a(t,fl),a(t,ue),a(ue,dl),a(t,_l),a(t,te),a(te,Q),Q.checked=l[0].class.permission,a(te,pl),a(te,G),a(G,fe),a(fe,hl),a(G,vl),a(G,de),a(de,ml),a(t,gl),a(t,_e),a(_e,bl),a(t,kl),a(t,Ve),a(Ve,W),q(W,l[0].class.expSources),a(t,El),a(t,Ne),a(Ne,Il),a(t,Ll),a(t,Pe),Ze(j,Pe,null),a(t,Vl),a(t,we),a(we,Nl),a(t,Pl),a(t,ye),Ze(X,ye,null),a(t,yl),a(t,pe),a(pe,Tl),a(t,Sl),a(t,Te),a(Te,Z),q(Z,l[0].class.manaRegen),a(t,Bl),a(t,he),a(he,Al),a(t,Ml),a(t,Se),a(Se,H),a(H,se),a(se,Ol),a(H,ae),a(ae,ql),a(H,ie),a(ie,Cl),a(H,ne),a(ne,Rl),a(H,re),a(re,Ul),a(H,oe),a(oe,Hl),Jt(H,l[0].class.skillTree),a(t,zl),a(t,Be),a(Be,Fl),a(t,Gl),a(t,Ae),Ze($,Ae,null),a(t,Jl),a(t,ve),a(ve,Kl),a(t,Ql),a(t,Me),a(Me,x),q(x,l[0].class.icon.material),a(t,Wl),a(t,me),a(me,jl),a(t,Xl),a(t,Oe),a(Oe,ee),q(ee,l[0].class.icon.customModelData),a(t,Zl),a(t,ge),a(ge,$l),a(t,xl),a(t,qe),a(qe,le),q(le,l[0].class.icon.lore),be=!0,et||(at=[B(M,"input",l[3]),B(L,"input",l[4]),B(O,"input",l[5]),B(J,"input",l[6]),B(Q,"change",l[8]),B(fe,"click",l[9]),B(de,"click",l[10]),B(W,"input",l[11]),B(Z,"input",l[14]),B(H,"change",l[15]),B(x,"input",l[17]),B(ee,"input",l[18]),B(le,"input",l[19])],et=!0)},p(f,[P]){(!be||P&1)&&s!==(s="ProSkillAPI Dynamic Editor - "+f[0].class.name)&&(document.title=s),(!be||P&1)&&r!==(r=f[0].class.name+"")&&Je(i,r),P&1&&M.value!==f[0].class.name&&q(M,f[0].class.name),P&1&&L.value!==f[0].class.prefix&&q(L,f[0].class.prefix),P&1&&O.value!==f[0].class.group&&q(O,f[0].class.group),P&1&&J.value!==f[0].class.manaName&&q(J,f[0].class.manaName);const Ce={};P&2&&(Ce.data=f[1]),!ul&&P&1&&(ul=!0,Ce.selected=f[0].class.parent,$e(()=>ul=!1)),K.$set(Ce),P&1&&(Q.checked=f[0].class.permission),(!be||P&1)&&el(G,"selected",f[0].class.permission),P&1&&W.value!==f[0].class.expSources&&q(W,f[0].class.expSources);const h={};!Dl&&P&1&&(Dl=!0,h.value=f[0].class.health,$e(()=>Dl=!1)),j.$set(h);const ze={};!wl&&P&1&&(wl=!0,ze.value=f[0].class.mana,$e(()=>wl=!1)),X.$set(ze),P&1&&Z.value!==f[0].class.manaRegen&&q(Z,f[0].class.manaRegen),P&1&&Jt(H,f[0].class.skillTree);const Re={};P&4&&(Re.data=f[2]),!Yl&&P&1&&(Yl=!0,Re.selected=f[0].class.skills,$e(()=>Yl=!1)),$.$set(Re),P&1&&x.value!==f[0].class.icon.material&&q(x,f[0].class.icon.material),P&1&&ee.value!==f[0].class.icon.customModelData&&q(ee,f[0].class.icon.customModelData),P&1&&le.value!==f[0].class.icon.lore&&q(le,f[0].class.icon.lore)},i(f){be||(Y(K.$$.fragment,f),Y(j.$$.fragment,f),Y(X.$$.fragment,f),Y($.$$.fragment,f),be=!0)},o(f){Ee(K.$$.fragment,f),Ee(j.$$.fragment,f),Ee(X.$$.fragment,f),Ee($.$$.fragment,f),be=!1},d(f){f&&d(e),f&&d(u),f&&d(m),f&&d(c),f&&d(n),f&&d(t),xe(K),xe(j),xe(X),xe($),et=!1,al(at)}}}const Bs=l=>l.name,As=l=>l.name;function Ms(l,s,e){let u,r;Kt(l,Is,S=>e(1,u=S)),Kt(l,Ls,S=>e(2,r=S));let{data:i}=s;ms(()=>{console.log(i.class.serializeYaml())});function m(){i.class.name=this.value,e(0,i)}function c(){i.class.prefix=this.value,e(0,i)}function n(){i.class.group=this.value,e(0,i)}function t(){i.class.manaName=this.value,e(0,i)}function A(S){l.$$.not_equal(i.class.parent,S)&&(i.class.parent=S,e(0,i))}function T(){i.class.permission=this.checked,e(0,i)}const I=()=>e(0,i.class.permission=!0,i),w=()=>e(0,i.class.permission=!1,i);function M(){i.class.expSources=this.value,e(0,i)}function R(S){l.$$.not_equal(i.class.health,S)&&(i.class.health=S,e(0,i))}function U(S){l.$$.not_equal(i.class.mana,S)&&(i.class.mana=S,e(0,i))}function N(){i.class.manaRegen=this.value,e(0,i)}function y(){i.class.skillTree=gs(this),e(0,i)}function b(S){l.$$.not_equal(i.class.skills,S)&&(i.class.skills=S,e(0,i))}function L(){i.class.icon.material=this.value,e(0,i)}function C(){i.class.icon.customModelData=this.value,e(0,i)}function F(){i.class.icon.lore=this.value,e(0,i)}return l.$$set=S=>{"data"in S&&e(0,i=S.data)},l.$$.update=()=>{l.$$.dirty&1&&i!=null&&i.class.name&&Es()},[i,u,r,m,c,n,t,A,T,I,w,M,R,U,N,y,b,L,C,F]}class Rs extends lt{constructor(s){super(),tt(this,s,Ms,Ss,st,{data:0})}}export{Rs as default};
