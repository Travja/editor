function $(){}const G=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function it(){return Object.create(null)}function S(t){t.forEach(rt)}function M(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function Wt(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function xt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return ot(t,n=>e=n)(),e}function Jt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Kt(t,e,n,s){if(t){const i=ct(t,e,n,s);return t[0](i)}}function ct(t,e,n,s){return t[1]&&s?$t(n.ctx.slice(),t[1](s(e))):n.ctx}function Qt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const c=[],r=Math.max(e.dirty.length,i.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|i[o];return c}return e.dirty|i}return e.dirty}function Vt(t,e,n,s,i,c){if(i){const r=ct(e,n,s,c);t.p(r,i)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Yt(t){return t&&M(t.destroy)?t.destroy:$}const at=typeof window<"u";let J=at?()=>window.performance.now():()=>Date.now(),Z=at?t=>requestAnimationFrame(t):$;const C=new Set;function lt(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&Z(lt)}function K(t){let e;return C.size===0&&Z(lt),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let Q=!1;function wt(){Q=!0}function vt(){Q=!1}function Et(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&a.push(f)}e=a}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,f=(i>0&&e[n[i]].claim_order<=l?i+1:Et(1,i,h=>e[n[h]].claim_order,l))-1;s[a]=n[f]+1;const _=f+1;n[_]=a,i=Math.max(_,i)}const c=[],r=[];let o=e.length-1;for(let a=n[i]+1;a!=0;a=s[a-1]){for(c.push(e[a-1]);o>=a;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<r.length;a++){for(;l<c.length&&r[a].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[a],f)}}function Nt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=_t("style");return Ct(ut(t),e),e.sheet}function Ct(t,e){return Nt(t.head||t,e),e.sheet}function At(t,e){if(Q){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){Q&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function ee(){return tt(" ")}function ne(){return tt("")}function ie(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t){return t===""?null:+t}function Dt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,s,i=!1){jt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,i||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,i?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ht(t,e,n,s){return dt(t,i=>i.nodeName===e,i=>{const c=[];for(let r=0;r<i.attributes.length;r++){const o=i.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>i.removeAttribute(r))},()=>s(e))}function oe(t,e,n){return ht(t,e,n,_t)}function ce(t,e,n){return ht(t,e,n,Mt)}function Rt(t,e){return dt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>tt(e),!0)}function ae(t){return Rt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e){t.value=e??""}function fe(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function _e(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function de(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function he(t,e,n){t.classList[n?"add":"remove"](e)}function mt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function me(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const c=i.textContent.trim();c===`HEAD_${t}_END`?(s-=1,n.push(i)):c===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}function pe(t,e){return new t(e)}const U=new Map;let W=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:St(e),rules:{}};return U.set(t,n),n}function B(t,e,n,s,i,c,r,o=0){const a=16.666/s;let l=`{
`;for(let m=0;m<=1;m+=a){const y=e+(n-e)*c(m);l+=m*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Tt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:d}=U.get(h)||Bt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${s}ms linear ${i}ms 1 both`,W+=1,_}function P(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),W-=i,W||Pt())}function Pt(){Z(()=>{W||(U.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),U.clear())})}function ye(t,e,n,s){if(!e)return $;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return $;const{delay:c=0,duration:r=300,easing:o=G,start:a=J()+c,end:l=a+r,tick:f=$,css:_}=n(t,{from:e,to:i},s);let h=!0,u=!1,d;function p(){_&&(d=B(t,0,1,r,c,o,_)),c||(u=!0)}function m(){_&&P(t,d),h=!1}return K(y=>{if(!u&&y>=a&&(u=!0),u&&y>=l&&(f(1,0),m()),!h)return!1;if(u){const x=y-a,b=0+1*o(x/r);f(b,1-b)}return!0}),p(),f(0,1),m}function ge(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,qt(t,i)}}function qt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function T(t){q=t}function O(){if(!q)throw new Error("Function called outside component initialization");return q}function be(t){O().$$.before_update.push(t)}function $e(t){O().$$.on_mount.push(t)}function xe(t){O().$$.after_update.push(t)}function we(t){O().$$.on_destroy.push(t)}function ve(){const t=O();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const c=mt(e,n,{cancelable:s});return i.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const R=[],st=[],F=[],X=[],pt=Promise.resolve();let Y=!1;function yt(){Y||(Y=!0,pt.then(gt))}function ke(){return yt(),pt}function A(t){F.push(t)}function Ne(t){X.push(t)}const V=new Set;let H=0;function gt(){const t=q;do{for(;H<R.length;){const e=R[H];H++,T(e),Ot(e.$$)}for(T(null),R.length=0,H=0;st.length;)st.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];V.has(n)||(V.add(n),n())}F.length=0}while(R.length);for(;X.length;)X.pop()();Y=!1,V.clear(),T(t)}function Ot(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let j;function et(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function N(t,e,n){t.dispatchEvent(mt(`${e?"intro":"outro"}${n}`))}const I=new Set;let k;function Se(){k={r:0,c:[],p:k}}function Ce(){k.r||S(k.c),k=k.p}function bt(t,e){t&&t.i&&(I.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(I.has(t))return;I.add(t),k.c.push(()=>{I.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const nt={duration:0};function Ae(t,e,n){const s={direction:"in"};let i=e(t,n,s),c=!1,r,o,a=0;function l(){r&&P(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=G,tick:p=$,css:m}=i||nt;m&&(r=B(t,0,1,u,h,d,m,a++)),p(0,1);const y=J()+h,x=y+u;o&&o.abort(),c=!0,A(()=>N(t,!0,"start")),o=K(b=>{if(c){if(b>=x)return p(1,0),N(t,!0,"end"),l(),c=!1;if(b>=y){const w=d((b-y)/u);p(w,1-w)}}return c})}let _=!1;return{start(){_||(_=!0,P(t),M(i)?(i=i(s),et().then(f)):f())},invalidate(){_=!1},end(){c&&(l(),c=!1)}}}function Me(t,e,n){const s={direction:"out"};let i=e(t,n,s),c=!0,r;const o=k;o.r+=1;function a(){const{delay:l=0,duration:f=300,easing:_=G,tick:h=$,css:u}=i||nt;u&&(r=B(t,1,0,f,l,_,u));const d=J()+l,p=d+f;A(()=>N(t,!1,"start")),K(m=>{if(c){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||S(o.c),!1;if(m>=d){const y=_((m-d)/f);h(1-y,y)}}return c})}return M(i)?et().then(()=>{i=i(s),a()}):a(),{end(l){l&&i.tick&&i.tick(1,0),c&&(r&&P(t,r),c=!1)}}}function De(t,e,n,s){const i={direction:"both"};let c=e(t,n,i),r=s?0:1,o=null,a=null,l=null;function f(){l&&P(t,l)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=G,tick:y=$,css:x}=c||nt,b={start:J()+d,b:u};u||(b.group=k,k.r+=1),o||a?a=b:(x&&(f(),l=B(t,r,u,p,d,m,x)),u&&y(0,1),o=_(b,p),A(()=>N(t,u,"start")),K(w=>{if(a&&w>a.start&&(o=_(a,p),a=null,N(t,o.b,"start"),x&&(f(),l=B(t,r,o.b,o.duration,0,m,c.css))),o){if(w>=o.end)y(r=o.b,1-r),N(t,o.b,"end"),a||(o.b?f():--o.group.r||S(o.group.c)),o=null;else if(w>=o.start){const D=w-o.start;r=o.a+o.d*m(D/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(u){M(c)?et().then(()=>{c=c(i),h(u)}):h(u)},end(){f(),o=a=null}}}function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function je(t,e){t.f(),zt(t,e)}function Re(t,e,n,s,i,c,r,o,a,l,f,_){let h=t.length,u=c.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],y=new Map,x=new Map;for(d=u;d--;){const g=_(i,c,d),v=n(g);let E=r.get(v);E?s&&E.p(g,e):(E=l(v,g),E.c()),y.set(v,m[d]=E),v in p&&x.set(v,Math.abs(d-p[v]))}const b=new Set,w=new Set;function D(g){bt(g,1),g.m(o,f),r.set(g.key,g),f=g.first,u--}for(;h&&u;){const g=m[u-1],v=t[h-1],E=g.key,L=v.key;g===v?(f=g.first,h--,u--):y.has(L)?!r.has(E)||b.has(E)?D(g):w.has(L)?h--:x.get(E)>x.get(L)?(w.add(E),D(g)):(b.add(L),h--):(a(v,r),h--)}for(;h--;){const g=t[h];y.has(g.key)||a(g,r)}for(;u;)D(m[u-1]);return m}function Te(t,e,n,s){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,s===void 0&&n(t.$$.ctx[i]))}function Be(t){t&&t.c()}function Pe(t,e){t&&t.l(e)}function Ht(t,e,n,s){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,n),s||A(()=>{const r=t.$$.on_mount.map(rt).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),c.forEach(A)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(R.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,s,i,c,r,o=[-1]){const a=q;T(t);const l=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:i,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:it(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return l.ctx&&i(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&It(t,_)),h}):[],l.update(),f=!0,S(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){wt();const _=Dt(e.target);l.fragment&&l.fragment.l(_),_.forEach(ft)}else l.fragment&&l.fragment.c();e.intro&&bt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),vt(),gt()}T(a)}class Oe{$destroy(){Ft(this,1),this.$destroy=$}$on(e,n){if(!M(n))return $;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{we as $,ke as A,$ as B,ot as C,S as D,M as E,Kt as F,At as G,Yt as H,ie as I,Vt as J,Xt as K,Qt as L,A as M,De as N,ve as O,ue as P,he as Q,Ae as R,Oe as S,Me as T,Jt as U,Gt as V,Ee as W,Re as X,zt as Y,st as Z,be as _,ee as a,te as a0,_e as a1,de as a2,Mt as a3,ce as a4,Wt as a5,G as a6,me as a7,je as a8,ge as a9,qt as aa,ye as ab,Te as ac,Ne as ad,re as ae,Zt as b,ae as c,Ce as d,ne as e,bt as f,Se as g,ft as h,qe as i,xe as j,_t as k,oe as l,Dt as m,se as n,$e as o,fe as p,tt as q,Rt as r,Ut as s,Lt as t,le as u,pe as v,Be as w,Pe as x,Ht as y,Ft as z};