function $(){}const G=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function it(){return Object.create(null)}function S(t){t.forEach(rt)}function j(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let H;function Wt(t,e){return H||(H=document.createElement("a")),H.href=e,t===H.href}function xt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return ot(t,n=>e=n)(),e}function Jt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Kt(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,c){if(s){const r=ct(e,n,i,c);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){return t&&j(t.destroy)?t.destroy:$}const at=typeof window<"u";let J=at?()=>window.performance.now():()=>Date.now(),Z=at?t=>requestAnimationFrame(t):$;const D=new Set;function lt(t){D.forEach(e=>{e.c(t)||(D.delete(e),e.f())}),D.size!==0&&Z(lt)}function K(t){let e;return D.size===0&&Z(lt),{promise:new Promise(n=>{D.add(e={c:t,f:n})}),abort(){D.delete(e)}}}let Q=!1;function wt(){Q=!0}function vt(){Q=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&a.push(f)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:Et(1,s,h=>e[n[h]].claim_order,l))-1;i[a]=n[f]+1;const _=f+1;n[_]=a,s=Math.max(_,s)}const c=[],r=[];let o=e.length-1;for(let a=n[s]+1;a!=0;a=i[a-1]){for(c.push(e[a-1]);o>=a;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<r.length;a++){for(;l<c.length&&r[a].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[a],f)}}function Nt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=_t("style");return Ct(ut(t),e),e.sheet}function Ct(t,e){return Nt(t.head||t,e),e.sheet}function At(t,e){if(Q){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){Q&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function Dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function ee(){return tt(" ")}function ne(){return tt("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ce(t){return t===""?null:+t}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){jt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,s?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ht(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ae(t,e,n){return ht(t,e,n,_t)}function le(t,e,n){return ht(t,e,n,Dt)}function Rt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function ue(t){return Rt(t," ")}function fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function me(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function ge(t,e){return new t(e)}const U=new Map;let W=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:St(e),rules:{}};return U.set(t,n),n}function B(t,e,n,i,s,c,r,o=0){const a=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=a){const y=e+(n-e)*c(m);l+=m*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Pt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:d}=U.get(h)||Tt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,W+=1,_}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||Bt())}function Bt(){Z(()=>{W||(U.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),U.clear())})}function be(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:c=0,duration:r=300,easing:o=G,start:a=J()+c,end:l=a+r,tick:f=$,css:_}=n(t,{from:e,to:s},i);let h=!0,u=!1,d;function p(){_&&(d=B(t,0,1,r,c,o,_)),c||(u=!0)}function m(){_&&q(t,d),h=!1}return K(y=>{if(!u&&y>=a&&(u=!0),u&&y>=l&&(f(1,0),m()),!h)return!1;if(u){const x=y-a,b=0+1*o(x/r);f(b,1-b)}return!0}),p(),f(0,1),m}function $e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,qt(t,s)}}function qt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let O;function T(t){O=t}function L(){if(!O)throw new Error("Function called outside component initialization");return O}function xe(t){L().$$.before_update.push(t)}function we(t){L().$$.on_mount.push(t)}function ve(t){L().$$.after_update.push(t)}function Ee(t){L().$$.on_destroy.push(t)}function ke(){const t=L();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=mt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],st=[],F=[],X=[],pt=Promise.resolve();let Y=!1;function yt(){Y||(Y=!0,pt.then(gt))}function Se(){return yt(),pt}function M(t){F.push(t)}function Ce(t){X.push(t)}const V=new Set;let C=0;function gt(){if(C!==0)return;const t=O;do{try{for(;C<A.length;){const e=A[C];C++,T(e),Ot(e.$$)}}catch(e){throw A.length=0,C=0,e}for(T(null),A.length=0,C=0;st.length;)st.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];V.has(n)||(V.add(n),n())}F.length=0}while(A.length);for(;X.length;)X.pop()();Y=!1,V.clear(),T(t)}function Ot(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let P;function et(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function N(t,e,n){t.dispatchEvent(mt(`${e?"intro":"outro"}${n}`))}const I=new Set;let k;function Ae(){k={r:0,c:[],p:k}}function De(){k.r||S(k.c),k=k.p}function bt(t,e){t&&t.i&&(I.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(I.has(t))return;I.add(t),k.c.push(()=>{I.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function Me(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,o,a=0;function l(){r&&q(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=G,tick:p=$,css:m}=s||nt;m&&(r=B(t,0,1,u,h,d,m,a++)),p(0,1);const y=J()+h,x=y+u;o&&o.abort(),c=!0,M(()=>N(t,!0,"start")),o=K(b=>{if(c){if(b>=x)return p(1,0),N(t,!0,"end"),l(),c=!1;if(b>=y){const w=d((b-y)/u);p(w,1-w)}}return c})}let _=!1;return{start(){_||(_=!0,q(t),j(s)?(s=s(i),et().then(f)):f())},invalidate(){_=!1},end(){c&&(l(),c=!1)}}}function je(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=k;o.r+=1;function a(){const{delay:l=0,duration:f=300,easing:_=G,tick:h=$,css:u}=s||nt;u&&(r=B(t,1,0,f,l,_,u));const d=J()+l,p=d+f;M(()=>N(t,!1,"start")),K(m=>{if(c){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||S(o.c),!1;if(m>=d){const y=_((m-d)/f);h(1-y,y)}}return c})}return j(s)?et().then(()=>{s=s(i),a()}):a(),{end(l){l&&s.tick&&s.tick(1,0),c&&(r&&q(t,r),c=!1)}}}function Re(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,a=null,l=null;function f(){l&&q(t,l)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=G,tick:y=$,css:x}=c||nt,b={start:J()+d,b:u};u||(b.group=k,k.r+=1),o||a?a=b:(x&&(f(),l=B(t,r,u,p,d,m,x)),u&&y(0,1),o=_(b,p),M(()=>N(t,u,"start")),K(w=>{if(a&&w>a.start&&(o=_(a,p),a=null,N(t,o.b,"start"),x&&(f(),l=B(t,r,o.b,o.duration,0,m,c.css))),o){if(w>=o.end)y(r=o.b,1-r),N(t,o.b,"end"),a||(o.b?f():--o.group.r||S(o.group.c)),o=null;else if(w>=o.start){const R=w-o.start;r=o.a+o.d*m(R/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(u){j(c)?et().then(()=>{c=c(s),h(u)}):h(u)},end(){f(),o=a=null}}}function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Pe(t,e){t.f(),zt(t,e)}function Te(t,e,n,i,s,c,r,o,a,l,f,_){let h=t.length,u=c.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],y=new Map,x=new Map;for(d=u;d--;){const g=_(s,c,d),v=n(g);let E=r.get(v);E?i&&E.p(g,e):(E=l(v,g),E.c()),y.set(v,m[d]=E),v in p&&x.set(v,Math.abs(d-p[v]))}const b=new Set,w=new Set;function R(g){bt(g,1),g.m(o,f),r.set(g.key,g),f=g.first,u--}for(;h&&u;){const g=m[u-1],v=t[h-1],E=g.key,z=v.key;g===v?(f=g.first,h--,u--):y.has(z)?!r.has(E)||b.has(E)?R(g):w.has(z)?h--:x.get(E)>x.get(z)?(w.add(E),R(g)):(b.add(z),h--):(a(v,r),h--)}for(;h--;){const g=t[h];y.has(g.key)||a(g,r)}for(;u;)R(m[u-1]);return m}function Be(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function qe(t){t&&t.c()}function Oe(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||M(()=>{const r=t.$$.on_mount.map(rt).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),c.forEach(M)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(A.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Le(t,e,n,i,s,c,r,o=[-1]){const a=O;T(t);const l=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:s,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:it(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return l.ctx&&s(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&It(t,_)),h}):[],l.update(),f=!0,S(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){wt();const _=Mt(e.target);l.fragment&&l.fragment.l(_),_.forEach(ft)}else l.fragment&&l.fragment.c();e.intro&&bt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),vt(),gt()}T(a)}class ze{$destroy(){Ft(this,1),this.$destroy=$}$on(e,n){if(!j(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as $,Se as A,$ as B,ot as C,S as D,j as E,Kt as F,At as G,Yt as H,ie as I,Vt as J,Xt as K,Qt as L,M,Re as N,ke as O,_e as P,pe as Q,re as R,ze as S,se as T,Me as U,je as V,Jt as W,Gt as X,Ne as Y,Te as Z,zt as _,ee as a,Be as a0,Ce as a1,xe as a2,Ee as a3,te as a4,he as a5,me as a6,Dt as a7,le as a8,Wt as a9,G as aa,ye as ab,Pe as ac,$e as ad,qt as ae,be as af,ce as ag,Zt as b,ue as c,De as d,ne as e,bt as f,Ae as g,ft as h,Le as i,ve as j,_t as k,ae as l,Mt as m,oe as n,we as o,de as p,tt as q,Rt as r,Ut as s,Lt as t,fe as u,ge as v,qe as w,Oe as x,Ht as y,Ft as z};