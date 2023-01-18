var K=Object.defineProperty;var _=(t,e,s)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>(_(t,typeof e!="symbol"?e+"":e,s),s);import{w as d,d as ee}from"./index-56a77d20.js";import{X as a}from"./index-c3f4d370.js";const J={INT:/^-?[0-9]+$/,FLOAT:/^-?[0-9]+\.[0-9]+$/,SPACE:/^( +)/},O=t=>{t=t.replace(/\r\n/g,`
`).replace(/\n *\n/g,`
`).replace(/ +\n/g,`
`);const e=new f,s=0,i=t.split(`
`);return e.parse(i,s,0),e},C=t=>{const e=t.match(J.SPACE);return e?e[1].length:0};class f{constructor(e){o(this,"key");o(this,"data",{});o(this,"put",(e,s)=>{this.data[e]=s});o(this,"has",e=>this.data[e]!==void 0);o(this,"get",(e,s,i)=>((this.data[e]=="[]"||this.data[e]==" []")&&(this.data[e]=JSON.parse(this.data[e].trim())),this.has(e)?i?i(this.data[e]):this.data[e]:s));o(this,"remove",e=>{delete this.data[e]});o(this,"parse",(e,s,i,n)=>{for(n&&(this.key=n);s<e.length&&C(e[s])>=i;){for(;s<e.length&&(C(e[s])!=i||e[s].replace(/ /g,"").charAt(0)=="#"||e[s].indexOf(":")==-1);)s++;if(s==e.length)return s;let c=e[s].substring(i,e[s].indexOf(":"));if(c==="loaded"){s++;continue}if(c.match(/^["'].*["']$/)&&(c=c.substring(1,c.length-1)),!this.key&&!n&&(this.key=c),e[s].indexOf(": {}")==e[s].length-4&&e[s].length>=4)this.data[c]={};else if(s<e.length-1&&e[s+1].charAt(i)=="-"&&e[s+1].charAt(i+1)==" "&&C(e[s+1])==i){const r=[];for(;++s<e.length&&e[s].charAt(i)=="-";){let m=e[s].substring(i+2);(m.charAt(0)=="'"||m.charAt(0)=='"')&&(m=m.substring(1,m.length-1).replace(/\\(['"])/,p=>p.replace("\\",""))),r.push(m)}this.data[c]=r,s--}else if(s<e.length-1&&C(e[s+1])>i){s++;const r=C(e[s]),m=new f;s=m.parse(e,s,r,c)-1,this.data[c]=m}else{let r=e[s].substring(e[s].indexOf(":")+2);r.charAt(0)=="'"||r.charAt(0)=='"'?r=r.substring(1,r.length-1):isNaN(r)||(J.INT.test(r)?r=parseInt(r):r=parseFloat(r)),typeof r=="string"&&(r=="false"?r=!1:r=="true"?r=!0:r=r.replace(/\\(['"])/,m=>m.replace("\\",""))),this.data[c]=r}do s++;while(s<e.length&&e[s].replace(/ /g,"").charAt(0)=="#")}return Object.keys(this.data).length==1&&this.key&&this.data[this.key]instanceof f&&(this.data=this.data[this.key].data),s});o(this,"toString",()=>this.toYaml(this.key||this.data.name?"'"+(this.key||this.data.name)+"'":void 0,this.data));o(this,"toYaml",(e,s,i="")=>{let n="";e&&(n+=i+e+`:
`,i+="  ");for(const c of Object.keys(s)){const r=s[c],m=JSON.stringify(r);let p=i+c+": "+m+`
`;if(r!=null){if(r instanceof Object)if(Object.keys(r).includes("toYaml"))if(r instanceof f){n+=r.toYaml("'"+c+"'",r.data,i);continue}else p=r.toYaml(i);else r instanceof Array&&(c!="attributes"?(p=i+c+":",r.length>0&&["string","number"].includes(typeof r[0])?(p+=`
`,r.forEach(h=>p+=i+"- "+JSON.stringify(h)+`
`)):r.length==0&&(p+=` []
`)):p=this.toYaml(c,r,i));p&&(n+=p.replaceAll(/(\\)?'/g,"\\'").replaceAll(/((\\)?")/g,h=>h.length==1?"'":h).replaceAll(/\\"/g,'"'))}}return n});this.key=e}}class l{constructor(e,s,i){o(this,"name");o(this,"base");o(this,"scale");o(this,"toYaml",(e="")=>e+this.name.toLowerCase()+"-base: "+this.base+`
`+e+this.name.toLowerCase()+"-scale: "+this.scale+`
`);this.name=e,this.base=s,this.scale=i}}class u{constructor(e){this.key={},this.isFolder=!0,this.open=!1,this.name="Folder",this.data=[],this.updateParent=s=>{this.parent=s},this.add=s=>{this.data.includes(s)||(s instanceof u&&(M(s,this.data),ge(s),s.parent=this),this.data.push(s),this.sort())},this.remove=s=>{this.data=this.data.filter(i=>i!=s),this.sort()},this.sort=()=>{this.data=this.data.sort((s,i)=>{let n=0;return s instanceof u&&(i instanceof u||(n=-100)),s.name.localeCompare(i.name)+n}),D()},this.createFolder=()=>{const s=new u;M(s,this.data),this.data.push(s),this.sort(),s.updateParent(this)},this.deleteFolder=s=>{this.data=this.data.filter(i=>i!=s)},this.contains=s=>{if(this.data.includes(s))return!0;for(const i of this.data.filter(n=>n instanceof u))if(i.contains(s))return!0;return!1},this.getContainingFolder=s=>{if(this.data.includes(s))return this;for(const i of this.data.filter(n=>n instanceof u)){if(i.data.includes(s))return i;{const n=i.getContainingFolder(s);if(!n)continue;return n}}},e&&(this.data=e,e.forEach(s=>{s instanceof u&&s.isFolder&&s.updateParent(this)}))}}const z=t=>t.replace("_"," ").toLowerCase().replace(/^(.)|\s(.)/g,e=>e.toUpperCase()),U=t=>(t=t.replace("_"," "),t.substring(0,1).toUpperCase()+t.substring(1).toLowerCase()),k=t=>t.sort((e,s)=>e.name.localeCompare(s.name)),se=(t,e)=>{let s=e;localStorage.getItem(t)===null&&localStorage.setItem(t,JSON.stringify(e)),s=JSON.parse(localStorage.getItem(t));const{subscribe:i,set:n,update:c}=d(s);return{subscribe:i,set:r=>(localStorage.setItem(t,JSON.stringify(r)),n(r)),update:c}};class g{constructor(e){o(this,"isSkill",!0);o(this,"key",{});o(this,"name");o(this,"type","Dynamic");o(this,"maxLevel",5);o(this,"skillReq");o(this,"skillReqLevel",0);o(this,"permission",!1);o(this,"levelReq",new l("level",1,0));o(this,"cost",new l("cost",1,0));o(this,"cooldown",new l("cooldown",0,0));o(this,"cooldownMessage",!0);o(this,"mana",new l("mana",0,0));o(this,"minSpent",new l("points-spent-req",0,0));o(this,"castMessage","&6{player} &2has cast &6{skill}");o(this,"combo","");o(this,"indicator","2D");o(this,"icon",{material:"Pumpkin",customModelData:0,lore:["&d{name} &7({level}/{max})","&2Type: &6{type}","","{req:level}Level: {attr:level}","{req:cost}Cost: {attr:cost}","","&2Mana: {attr:mana}","&2Cooldown: {attr:cooldown}"]});o(this,"incompatible",[]);o(this,"triggers",[]);o(this,"skillReqStr","");o(this,"incompStr",[]);o(this,"serializeYaml",()=>{var i;const e=new f(this.name),s=new f;return s.put("name",this.name),s.put("type",this.type),s.put("max-level",this.maxLevel),s.put("skill-req",(i=this.skillReq)==null?void 0:i.name),s.put("skill-req-lvl",this.skillReqLevel),s.put("needs-permission",this.permission),s.put("cooldown-message",this.cooldownMessage),s.put("msg",this.castMessage),s.put("combo",this.combo),s.put("indicator",this.indicator),s.put("icon",this.icon.material),s.put("icon-data",this.icon.customModelData),s.put("icon-lore",this.icon.lore),s.put("attributes",[this.levelReq,this.cost,this.cooldown,this.mana,this.minSpent]),s.put("incompatible",this.incompatible.map(n=>n.name)),s.put("components",this.triggers),e.data=s.data,e});o(this,"load",e=>{this.name=e.get("name",this.name),this.type=e.get("type",this.type),this.maxLevel=e.get("max-level",this.maxLevel),this.skillReqStr=e.get("skill-req",this.skillReqStr),this.skillReqLevel=e.get("skill-req-level",this.skillReqLevel),this.permission=e.get("needs-permission",this.permission),this.cooldownMessage=e.get("cooldown-message",this.cooldownMessage),this.castMessage=e.get("msg",this.castMessage),this.combo=e.get("combo",this.combo),this.indicator=e.get("indicator",this.indicator);const s=e.get("attributes");this.levelReq=new l("level",s.get("level-base"),s.get("level-scale")),this.cost=new l("cost",s.get("cost-base"),s.get("cost-scale")),this.cooldown=new l("cooldown",s.get("cooldown-base"),s.get("cooldown-scale")),this.mana=new l("mana",s.get("mana-base"),s.get("mana-scale")),this.minSpent=new l("points-spent-req",s.get("points-spent-req-base"),s.get("points-spent-req-scale")),this.icon.material=e.get("icon",this.icon.material,U),this.icon.customModelData=e.get("icon-data",this.icon.customModelData),this.icon.lore=e.get("icon-lore",this.icon.lore),this.incompStr=e.get("incompatible",this.incompStr),this.triggers=e.get("components",this.triggers,i=>[])});o(this,"postLoad",()=>{this.skillReq=y(this.skillReqStr),this.incompatible=this.incompStr.map(e=>y(e)).filter(e=>!!e)});this.name=e?e.name:"Skill",e!=null&&e.type&&(this.type=e.type),e!=null&&e.maxLevel&&(this.maxLevel=e.maxLevel),e!=null&&e.skillReq&&(this.skillReq=e.skillReq),e!=null&&e.skillReqLevel&&(this.skillReqLevel=e.skillReqLevel),e!=null&&e.permission&&(this.permission=e.permission),e!=null&&e.levelReq&&(this.levelReq=e.levelReq),e!=null&&e.cost&&(this.cost=e.cost),e!=null&&e.cooldown&&(this.cooldown=e.cooldown),e!=null&&e.cooldownMessage&&(this.cooldownMessage=e.cooldownMessage),e!=null&&e.mana&&(this.mana=e.mana),e!=null&&e.minSpent&&(this.minSpent=e.minSpent),e!=null&&e.castMessage&&(this.castMessage=e.castMessage),e!=null&&e.combo&&(this.combo=e.combo),e!=null&&e.indicator&&(this.indicator=e.indicator),e!=null&&e.icon&&(this.icon=e.icon),e!=null&&e.incompatible&&(this.incompatible=e.incompatible),e!=null&&e.triggers&&(this.triggers=e.triggers)}}const te=t=>{const e=[],s=O(t);let i;if(s.key&&!s.data[s.key]){const n=s.key;return n==="loaded"||(i=new g({name:n}),i.load(s),e.push(i)),e}for(const n in s.data)n!="loaded"&&s.data[n]instanceof f&&(i=new g({name:n}),i.load(s.data[n]),e.push(i));return e},$=(t,e,s,i,n)=>{let c=e;{const h=localStorage.getItem(t);h&&(c=s(h),n&&n(c))}const{subscribe:r,set:m,update:p}=d(c);return{subscribe:r,set:h=>(i&&(h=i(h)),m(h)),update:p}},w=$("skillData",[new g({name:"Particle Blast",type:"Dynamic",maxLevel:40,permission:!1,levelReq:new l("level",1,0),cost:new l("cost",1,0),cooldown:new l("cooldown",0,0),cooldownMessage:!1,mana:new l("mana",0,0),minSpent:new l("points-spent-req",0,0),castMessage:"&6{player} &2has cast &6{skill}",indicator:"2D",triggers:[]}),new g({name:"Poison Dart",type:"Dynamic",maxLevel:40,permission:!1,levelReq:new l("level",1,0),cost:new l("cost",1,0),cooldown:new l("cooldown",1,0),cooldownMessage:!1,mana:new l("mana",0,0),minSpent:new l("points-spent-req",0,0),castMessage:"&6{player} &2has cast &6{skill}",indicator:"2D",triggers:[]}),new g({name:"Storm",type:"Dynamic",maxLevel:40,permission:!1,levelReq:new l("level",1,0),cost:new l("cost",1,0),cooldown:new l("cooldown",1,0),cooldownMessage:!1,mana:new l("mana",0,0),minSpent:new l("points-spent-req",0,0),castMessage:"&6{player} &2has cast &6{skill}",indicator:"2D",triggers:[]})],t=>k(te(t)),t=>(H(t),k(t))),y=t=>{for(const e of a(w))if(e.name==t)return e},b=$("skillFolders",[],t=>JSON.parse(t,(s,i)=>{if(/\d+/.test(s)){if(typeof i=="string")return y(i);const n=new u(i.data);return n.name=i.name,n}return i}),t=>{const e=JSON.stringify(t,(s,i)=>i instanceof g||i instanceof g?i.name:s==="parent"?void 0:i);return localStorage.setItem("skillFolders",e),k(t)}),I=t=>!!y(t),B=t=>{const e=a(w),s=new g({name:t||"Skill "+(e.length+1)});return e.push(s),w.set(e),s},ye=t=>{const e=a(b);e.includes(t)||(M(t,e),e.push(t),e.sort((s,i)=>s.name.localeCompare(i.name)),b.set(e))},ie=t=>{const e=a(b).filter(s=>s!=t);b.set(e)},ne=t=>w.set(a(w).filter(e=>e!=t)),G=()=>w.set(k(a(w))),oe=()=>{b.set(k(a(b))),G()},N=t=>{const e=O(t);let s;if(e.key&&!e.data[e.key]){const i=e.key;s=I(i)?y(i):B(i),s.load(e);return}for(const i in e.data)i!="loaded"&&e.data[i]instanceof f&&!I(i)&&(s=I(i)?y(i):B(i),s.load(e.data[i]))},re=t=>{var s;const e=(s=t.target)==null?void 0:s.result;e&&N(e)},H=t=>{const e=t||a(w),s=new f;s.put("loaded",!1),e.forEach(i=>s.put(i.name,i.serializeYaml())),e.length>0&&localStorage.setItem("skillData",s.toString())};a(w).forEach(t=>t.postLoad());class q{constructor(e){o(this,"isClass",!0);o(this,"key",{});o(this,"name");o(this,"prefix","");o(this,"group","class");o(this,"manaName","&2Mana");o(this,"maxLevel",40);o(this,"parentStr","");o(this,"parent");o(this,"permission",!1);o(this,"expSources",273);o(this,"manaRegen",1);o(this,"health",new l("health",20,1));o(this,"mana",new l("mana",20,1));o(this,"attributes",[]);o(this,"skillTree","Requirement");o(this,"skills",[]);o(this,"icon",{material:"Pumpkin",customModelData:0});o(this,"unusableItems",[]);o(this,"actionBar","");o(this,"updateAttributes",e=>{const s=[];this.attributes=this.attributes.filter(i=>e!=null&&e.includes(i.name)?(s.push(i.name),!0):!1),e=e.filter(i=>!s.includes(i));for(const i of e)this.attributes.push(new l(i,0,0))});o(this,"serializeYaml",()=>{var i;const e=new f(this.name),s=new f;return s.put("name",this.name),s.put("action-bar",this.actionBar),s.put("prefix",this.prefix),s.put("group",this.group),s.put("mana",this.manaName),s.put("max-level",this.maxLevel),s.put("parent",((i=this.parent)==null?void 0:i.name)||""),s.put("needs-permission",this.permission),s.put("attributes",[this.health,this.mana,...this.attributes]),s.put("mana-regen",this.manaRegen),s.put("tree",this.skillTree.toUpperCase().replace(/ /g,"_")),s.put("blacklist",this.unusableItems),s.put("skills",this.skills.map(n=>n.name)),s.put("icon",this.icon.material),s.put("icon-data",this.icon.customModelData),s.put("icon-lore",this.icon.lore),s.put("exp-source",this.expSources),e.data=s.data,e});o(this,"updateParent",e=>{this.parentStr&&(this.parent=e.find(s=>s.name===this.parentStr))});o(this,"load",e=>{this.name=e.get("name",this.name),this.actionBar=e.get("action-bar",this.actionBar),this.prefix=e.get("prefix",this.prefix),this.group=e.get("group",this.group),this.maxLevel=e.get("max-level",this.maxLevel),this.parentStr=e.get("parent",this.parentStr),this.permission=e.get("needs-permission",this.permission),this.attributes=e.get("attributes",this.attributes,s=>{const i=[],n=s.get("health-base",20),c=s.get("health-scale",1),r=s.get("mana-base",20),m=s.get("mana-scale",1);this.health=new l("health",n,c),this.mana=new l("mana",r,m),s.remove("health-base"),s.remove("health-scale"),s.remove("mana-base"),s.remove("mana-scale");const p={};return Object.keys(s.data).forEach(h=>{const x=h.split("-"),L=z(x[0]);p[L]||(p[L]=new l(L,0,0));const E=p[L];x[1]=="base"&&(E.base=Number.parseFloat(s.data[h])),x[1]=="scale"&&(E.scale=Number.parseFloat(s.data[h]))}),i.push(...Object.values(p)),i}),this.manaRegen=e.get("mana-regen",this.manaRegen),this.skillTree=e.get("tree",this.skillTree,z),this.unusableItems=e.get("blacklist",this.unusableItems),this.skills=e.get("skills",this.skills,s=>s.map(i=>y(i)).filter(i=>!!i)),this.icon.material=e.get("icon",this.icon.material,U),this.icon.customModelData=e.get("icon-data",this.icon.customModelData),this.icon.lore=e.get("icon-lore",this.icon.lore),this.expSources=e.get("exp-source",this.expSources)});this.name=e?e.name:"Class",e!=null&&e.prefix?this.prefix=e.prefix:this.prefix="&6"+this.name,e!=null&&e.group&&(this.group=e.group),e!=null&&e.manaName&&(this.manaName=e.manaName),e!=null&&e.maxLevel&&(this.maxLevel=e.maxLevel),e!=null&&e.parent&&(this.parent=e.parent),e!=null&&e.permission&&(this.permission=e.permission),e!=null&&e.expSources&&(this.expSources=e.expSources),e!=null&&e.health&&(this.health=e.health),e!=null&&e.mana&&(this.mana=e.mana),e!=null&&e.manaRegen&&(this.manaRegen=e.manaRegen),e!=null&&e.attributes&&(this.attributes=e.attributes),e!=null&&e.skillTree&&(this.skillTree=e.skillTree),e!=null&&e.skills&&(this.skills=e.skills),e!=null&&e.icon&&(this.icon=e.icon),e!=null&&e.unusableItems&&(this.unusableItems=e.unusableItems),e!=null&&e.actionBar&&(this.actionBar=e.actionBar)}}const le=t=>{const e=[],s=O(t);let i;if(s.key&&!s.data[s.key]){const n=s.key;return n==="loaded"||(i=new q({name:n}),i.load(s),e.push(i)),e}for(const n in s.data)n!="loaded"&&s.data[n]instanceof f&&(i=new q({name:n}),i.load(s.data[n]),e.push(i));return e},X=(t,e,s,i,n)=>{let c=e;{const h=localStorage.getItem(t);h&&(c=s(h),n&&n(c))}const{subscribe:r,set:m,update:p}=d(c);return{subscribe:r,set:h=>(i&&(h=i(h)),m(h)),update:p}},S=X("classData",[],t=>k(le(t)),t=>(V(t),t.forEach(e=>e.updateParent(t)),k(t)),t=>t.forEach(e=>e.updateParent(t))),F=t=>{for(const e of a(S))if(e.name==t)return e},v=X("classFolders",[],t=>JSON.parse(t,(s,i)=>{if(/\d+/.test(s)){if(typeof i=="string")return F(i);const n=new u(i.data);return n.name=i.name,n}return i}),t=>{const e=JSON.stringify(t,(s,i)=>i instanceof q||i instanceof g?i.name:s==="parent"?void 0:i);return localStorage.setItem("classFolders",e),k(t)}),Y=t=>a(S).forEach(e=>e.updateAttributes(t)),A=t=>!!F(t),P=t=>{const e=a(S),s=new q({name:t||"Class "+(e.length+1)});return e.push(s),S.set(e),s},qe=t=>{const e=a(v);e.includes(t)||(M(t,e),e.push(t),e.sort((s,i)=>s.name.localeCompare(i.name)),v.set(e))},ce=t=>{const e=a(v).filter(s=>s!=t);v.set(e)},ae=t=>S.set(a(S).filter(e=>e!=t)),Q=()=>S.set(k(a(S))),he=()=>{v.set(k(a(v))),Q()},T=t=>{const e=O(t);let s;if(e.key&&!e.data[e.key]){const i=e.key;s=A(i)?F(i):P(i),s.load(e);return}for(const i in e.data)i!="loaded"&&e.data[i]instanceof f&&!A(i)&&(s=A(i)?F(i):P(i),s.load(e.data[i]))},me=t=>{var s;const e=(s=t.target)==null?void 0:s.result;e&&T(e)},V=t=>{const e=t||a(S),s=new f;s.put("loaded",!1),e.forEach(i=>s.put(i.name,i.serializeYaml())),e.length>0&&localStorage.setItem("classData",s.toString())},pe=(()=>{let t=["vitality","spirit","intelligence","dexterity","strength"];{const n=localStorage.getItem("attribs");n&&(t=n.split(","),Y(t))}const{subscribe:e,set:s,update:i}=d(t);return{subscribe:e,set:n=>(localStorage.setItem("attribs",n.join(",")),Y(n),s(n)),update:i}})(),W=t=>{const e=O(t),s=Object.keys(e.data);pe.set(s)},Z=d(void 0),fe=ee(Z,t=>t instanceof q?"class":"skill"),Ce=d(),R=se("sidebarOpen",!0),Re=d(!0),j=d(!0),ue=d(!1),Oe=()=>{a(R)&&(a(fe)=="class"?Q():G(),D())},Le=()=>R.set(!a(R)),Fe=()=>R.set(!1),Me=t=>ue.set(t),M=(t,e)=>{const s=t.name;let i=1;for(;e.filter(n=>n instanceof u&&n.name==t.name).length>=1;)t.name=s+" ("+i+++")"},De=t=>{t.parent?(t.parent.deleteFolder(t),D()):a(j)?ce(t):ie(t)},xe=t=>{var e;t&&((e=ke(t))==null||e.remove(t),t instanceof q?ae(t):t instanceof g&&ne(t),D())},D=()=>{a(R)&&(a(j)?he():oe())},Ie=()=>{V(),H()},ge=t=>{const e=a(v),s=a(b);e.includes(t)&&v.set(e.filter(i=>i!=t)),s.includes(t)&&b.set(s.filter(i=>i!=t))},ke=t=>{if(t instanceof u)return t.parent;const e=t instanceof q?a(v):a(b);for(const s of e){const i=s.getContainingFolder(t);if(i)return i}},we=t=>{var s;const e=(s=t.target)==null?void 0:s.result;e&&(e.indexOf("global:")>=0?W(e):e.indexOf("components:")>=0||e.indexOf("group:")==-1&&e.indexOf("combo:")==-1&&e.indexOf("skills:")==-1?N(e):T(e),document.activeElement.blur())},Ae=t=>{t.indexOf("global:")>=0?W(t):t.indexOf("components:")>=0||t.indexOf("group:")==-1&&t.indexOf("combo:")==-1&&t.indexOf("skills:")==-1?N(t.replace(`loaded: false
`,"")):T(t.replace(`loaded: false
`,""))},Ne=t=>{const e=new FileReader;t.name.indexOf("skills")==0?e.onload=re:t.name.indexOf("classes")==0?e.onload=me:e.onload=we,e.readAsText(t)},Te=t=>{const e=t||a(Z);e&&be(e.name+".yml",e.serializeYaml().toString())},be=(t,e)=>{const s=new Blob([e],{type:"text/plain;charset=utf-8"}),i=document.createElement("a");i.href=URL.createObjectURL(s),i.download=t,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)};export{R as A,ue as B,se as C,pe as D,l as E,Oe as F,Ie as G,z as H,u as P,Ne as a,Z as b,Re as c,Ce as d,qe as e,ye as f,ke as g,Te as h,j as i,xe as j,De as k,Ae as l,v as m,S as n,b as o,w as p,P as q,ge as r,Me as s,B as t,D as u,q as v,g as w,Fe as x,fe as y,Le as z};
