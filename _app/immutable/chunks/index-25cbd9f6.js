function $(){}const G=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function it(){return Object.create(null)}function S(t){t.forEach(rt)}function M(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Gt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function $t(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return ot(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Qt(t,e,n,s){if(t){const i=ct(t,e,n,s);return t[0](i)}}function ct(t,e,n,s){return t[1]&&s?bt(n.ctx.slice(),t[1](s(e))):n.ctx}function Ut(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],r=Math.max(e.dirty.length,i.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function Vt(t,e,n,s,i,l){if(i){const r=ct(e,n,s,l);t.p(r,i)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Yt(t){return t&&M(t.destroy)?t.destroy:$}const lt=typeof window<"u";let J=lt?()=>window.performance.now():()=>Date.now(),Y=lt?t=>requestAnimationFrame(t):$;const C=new Set;function at(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&Y(at)}function K(t){let e;return C.size===0&&Y(at),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let Q=!1;function xt(){Q=!0}function wt(){Q=!1}function vt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(i>0&&e[n[i]].claim_order<=a?i+1:vt(1,i,h=>e[n[h]].claim_order,a))-1;s[c]=n[f]+1;const _=f+1;n[_]=c,i=Math.max(_,i)}const l=[],r=[];let o=e.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function kt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=_t("style");return St(ut(t),e),e.sheet}function St(t,e){return kt(t.head||t,e),e.sheet}function Ct(t,e){if(Q){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){Q&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function ee(){return Z(" ")}function ne(){return Z("")}function ie(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t){return t===""?null:+t}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,s,i=!1){jt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,i||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return s()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ht(t,e,n,s){return dt(t,i=>i.nodeName===e,i=>{const l=[];for(let r=0;r<i.attributes.length;r++){const o=i.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>i.removeAttribute(r))},()=>s(e))}function oe(t,e,n){return ht(t,e,n,_t)}function ce(t,e,n){return ht(t,e,n,At)}function Dt(t,e){return dt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Z(e),!0)}function le(t){return Dt(t," ")}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e){t.value=e??""}function fe(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function _e(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function de(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function he(t,e,n){t.classList[n?"add":"remove"](e)}function Rt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function me(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(s-=1,n.push(i)):l===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}function pe(t,e){return new t(e)}const I=new Map;let W=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Nt(e),rules:{}};return I.set(t,n),n}function B(t,e,n,s,i,l,r,o=0){const c=16.666/s;let a=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*l(m);a+=m*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Tt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:d}=I.get(h)||Bt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${s}ms linear ${i}ms 1 both`,W+=1,_}function q(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),W-=i,W||qt())}function qt(){Y(()=>{W||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),I.clear())})}function ye(t,e,n,s){if(!e)return $;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return $;const{delay:l=0,duration:r=300,easing:o=G,start:c=J()+l,end:a=c+r,tick:f=$,css:_}=n(t,{from:e,to:i},s);let h=!0,u=!1,d;function p(){_&&(d=B(t,0,1,r,l,o,_)),l||(u=!0)}function m(){_&&q(t,d),h=!1}return K(y=>{if(!u&&y>=c&&(u=!0),u&&y>=a&&(f(1,0),m()),!h)return!1;if(u){const x=y-c,b=0+1*o(x/r);f(b,1-b)}return!0}),p(),f(0,1),m}function ge(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Ot(t,i)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let O;function T(t){O=t}function tt(){if(!O)throw new Error("Function called outside component initialization");return O}function be(t){tt().$$.on_mount.push(t)}function $e(t){tt().$$.after_update.push(t)}function xe(t){tt().$$.on_destroy.push(t)}function we(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const R=[],st=[],H=[],V=[],mt=Promise.resolve();let X=!1;function pt(){X||(X=!0,mt.then(yt))}function ve(){return pt(),mt}function A(t){H.push(t)}function Ee(t){V.push(t)}const U=new Set;let z=0;function yt(){const t=O;do{for(;z<R.length;){const e=R[z];z++,T(e),Pt(e.$$)}for(T(null),R.length=0,z=0;st.length;)st.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];U.has(n)||(U.add(n),n())}H.length=0}while(R.length);for(;V.length;)V.pop()();X=!1,U.clear(),T(t)}function Pt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let D;function et(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function N(t,e,n){t.dispatchEvent(Rt(`${e?"intro":"outro"}${n}`))}const F=new Set;let k;function ke(){k={r:0,c:[],p:k}}function Ne(){k.r||S(k.c),k=k.p}function gt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(F.has(t))return;F.add(t),k.c.push(()=>{F.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const nt={duration:0};function Se(t,e,n){const s={direction:"in"};let i=e(t,n,s),l=!1,r,o,c=0;function a(){r&&q(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=G,tick:p=$,css:m}=i||nt;m&&(r=B(t,0,1,u,h,d,m,c++)),p(0,1);const y=J()+h,x=y+u;o&&o.abort(),l=!0,A(()=>N(t,!0,"start")),o=K(b=>{if(l){if(b>=x)return p(1,0),N(t,!0,"end"),a(),l=!1;if(b>=y){const w=d((b-y)/u);p(w,1-w)}}return l})}let _=!1;return{start(){_||(_=!0,q(t),M(i)?(i=i(s),et().then(f)):f())},invalidate(){_=!1},end(){l&&(a(),l=!1)}}}function Ce(t,e,n){const s={direction:"out"};let i=e(t,n,s),l=!0,r;const o=k;o.r+=1;function c(){const{delay:a=0,duration:f=300,easing:_=G,tick:h=$,css:u}=i||nt;u&&(r=B(t,1,0,f,a,_,u));const d=J()+a,p=d+f;A(()=>N(t,!1,"start")),K(m=>{if(l){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||S(o.c),!1;if(m>=d){const y=_((m-d)/f);h(1-y,y)}}return l})}return M(i)?et().then(()=>{i=i(s),c()}):c(),{end(a){a&&i.tick&&i.tick(1,0),l&&(r&&q(t,r),l=!1)}}}function Ae(t,e,n,s){const i={direction:"both"};let l=e(t,n,i),r=s?0:1,o=null,c=null,a=null;function f(){a&&q(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=G,tick:y=$,css:x}=l||nt,b={start:J()+d,b:u};u||(b.group=k,k.r+=1),o||c?c=b:(x&&(f(),a=B(t,r,u,p,d,m,x)),u&&y(0,1),o=_(b,p),A(()=>N(t,u,"start")),K(w=>{if(c&&w>c.start&&(o=_(c,p),c=null,N(t,o.b,"start"),x&&(f(),a=B(t,r,o.b,o.duration,0,m,l.css))),o){if(w>=o.end)y(r=o.b,1-r),N(t,o.b,"end"),c||(o.b?f():--o.group.r||S(o.group.c)),o=null;else if(w>=o.start){const j=w-o.start;r=o.a+o.d*m(j/o.duration),y(r,1-r)}}return!!(o||c)}))}return{run(u){M(l)?et().then(()=>{l=l(i),h(u)}):h(u)},end(){f(),o=c=null}}}function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Me(t,e){t.f(),zt(t,e)}function je(t,e,n,s,i,l,r,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],y=new Map,x=new Map;for(d=u;d--;){const g=_(i,l,d),v=n(g);let E=r.get(v);E?s&&E.p(g,e):(E=a(v,g),E.c()),y.set(v,m[d]=E),v in p&&x.set(v,Math.abs(d-p[v]))}const b=new Set,w=new Set;function j(g){gt(g,1),g.m(o,f),r.set(g.key,g),f=g.first,u--}for(;h&&u;){const g=m[u-1],v=t[h-1],E=g.key,P=v.key;g===v?(f=g.first,h--,u--):y.has(P)?!r.has(E)||b.has(E)?j(g):w.has(P)?h--:x.get(E)>x.get(P)?(w.add(E),j(g)):(b.add(P),h--):(c(v,r),h--)}for(;h--;){const g=t[h];y.has(g.key)||c(g,r)}for(;u;)j(m[u-1]);return m}function De(t,e,n,s){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,s===void 0&&n(t.$$.ctx[i]))}function Re(t){t&&t.c()}function Te(t,e){t&&t.l(e)}function Ht(t,e,n,s){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),s||A(()=>{const r=t.$$.on_mount.map(rt).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),l.forEach(A)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(R.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Be(t,e,n,s,i,l,r,o=[-1]){const c=O;T(t);const a=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:i,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:it(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&i(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&It(t,_)),h}):[],a.update(),f=!0,S(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){xt();const _=Mt(e.target);a.fragment&&a.fragment.l(_),_.forEach(ft)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),wt(),yt()}T(c)}class qe{$destroy(){Ft(this,1),this.$destroy=$}$on(e,n){if(!M(n))return $;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ce as $,ve as A,$ as B,At as C,ce as D,Ct as E,Gt as F,ie as G,te as H,S as I,Kt as J,Jt as K,ue as L,A as M,Ae as N,we as O,Qt as P,he as Q,Vt as R,qe as S,Xt as T,Ut as U,Se as V,M as W,je as X,zt as Y,st as Z,xe as _,ee as a,G as a0,me as a1,Yt as a2,ge as a3,Ot as a4,ye as a5,Me as a6,re as a7,De as a8,_e as a9,Ee as aa,de as ab,Zt as b,le as c,Ne as d,ne as e,gt as f,ke as g,ft as h,Be as i,$e as j,_t as k,oe as l,Mt as m,se as n,be as o,fe as p,Z as q,Dt as r,Wt as s,Lt as t,ae as u,pe as v,Re as w,Te as x,Ht as y,Ft as z};
