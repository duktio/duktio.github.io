(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={1:0},o={1:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2:"74ff4211",3:"f75a951f",4:"64afa90f",5:"41b6aa88",6:"f9995fa9",7:"7c233a68",8:"46c45b47",9:"401081dd"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1,4:1,5:1,6:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"a4e998c7",3:"a37e99f3",4:"f1ad944f",5:"395a336b",6:"73c599e1",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"ns",(function(){return x}));var a={};n.r(a),n.d(a,"setAgents",(function(){return F})),n.d(a,"removeAgent",(function(){return N}));var o={};n.r(o),n.d(o,"getAgents",(function(){return I})),n.d(o,"create",(function(){return U})),n.d(o,"remove",(function(){return M}));var i={};n.r(i),n.d(i,"auth",(function(){return V}));var s={};n.r(s),n.d(s,"setMe",(function(){return q})),n.d(s,"setToken",(function(){return D}));var c={};n.r(c),n.d(c,"getMe",(function(){return J})),n.d(c,"getToken",(function(){return K}));var u={};n.r(u),n.d(u,"pipelineRaw",(function(){return Q})),n.d(u,"pipeline",(function(){return X}));var l={};n.r(l),n.d(l,"setFlows",(function(){return Y})),n.d(l,"setPipeline",(function(){return G})),n.d(l,"setFlow",(function(){return Z})),n.d(l,"removeFlow",(function(){return ee})),n.d(l,"setTask",(function(){return te})),n.d(l,"setInstances",(function(){return ne})),n.d(l,"setInstance",(function(){return re}));var f={};n.r(f),n.d(f,"getFlows",(function(){return ae})),n.d(f,"getFlow",(function(){return oe})),n.d(f,"createFlow",(function(){return ie})),n.d(f,"removeFlow",(function(){return se})),n.d(f,"getTask",(function(){return ce})),n.d(f,"saveTask",(function(){return ue})),n.d(f,"createTask",(function(){return le})),n.d(f,"removeTask",(function(){return fe})),n.d(f,"getInstances",(function(){return pe})),n.d(f,"getInstance",(function(){return de})),n.d(f,"schedule",(function(){return he}));var p={};n.r(p),n.d(p,"ns",(function(){return ve}));var d={};n.r(d),n.d(d,"setNamespaces",(function(){return we})),n.d(d,"setNamespace",(function(){return ye})),n.d(d,"resetNamespace",(function(){return ke}));var h={};n.r(h),n.d(h,"getNamespaces",(function(){return be})),n.d(h,"getNamespace",(function(){return Pe})),n.d(h,"create",(function(){return Ce})),n.d(h,"remove",(function(){return $e}));var m={};n.r(m),n.d(m,"push",(function(){return je})),n.d(m,"pop",(function(){return Ae})),n.d(m,"set",(function(){return Se}));n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("0047");var g=n("2b0e"),v=n("1f91"),w=n("42d2"),y=n("b05d"),k=n("2a19"),b=n("436b");g["a"].use(y["a"],{config:{notify:{}},lang:v["a"],iconSet:w["a"],plugins:{Notify:k["a"],Dialog:b["a"]}});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},C=[],$={name:"App"},O=$,_=n("2877"),T=Object(_["a"])(O,P,C,!1,null,null,null),j=T.exports,A=n("2f62"),S=function(){return{agents:[]}};function x(e){return e.namespace}function F(e,t){e.agents=t}function N(e,t){let n=-1;for(let r=0;r<e.agents.items.length;r++)if(e.agents.items[r].public_key===t){n=r;break}-1!==n&&(g["a"].delete(e.agents.items,n),e.agents.total=e.agents.total-1)}var R=n("bc3a"),E=n.n(R);function I(e,{nk:t}){return E.a.get(Re(t)+"/agents").then((t=>{e.commit("setAgents",t.data)}))}function U(e,{nk:t}){return E.a.post(Re(t)+"/agents",{})}function M(e,{nk:t,ak:n}){return E.a.delete(`${Re(t)}/agents/${n}`).then((t=>(e.commit("removeAgent",n),t)))}var W={namespaced:!0,state:S,getters:r,mutations:a,actions:o},B=function(){return{me:null}},L=n("b628");function V(){return Object(L["b"])()}function q(e,t){e.me=t}function D(e,t){E.a.defaults.headers.Authorization="Bearer "+t}function J(e){E.a.get("v2/me").then((t=>{e.commit("setMe",t.data)}))}function K(e){const t=e.getters.auth;return t?t.getTokenSilently().then((t=>{e.commit("setToken",t)})):new Promise(null)}var z={namespaced:!0,state:B,getters:i,mutations:s,actions:c},H=function(){return{flows:[],pipeline:null,flow:null,task:null,instances:[],instance:null}};n("c975");function Q(e){return JSON.stringify(e.pipeline,null,4)}function X(e){if(!e.pipeline)return[];const t=[],n=Object.keys(e.pipeline.items);return n.forEach((r=>{const a=e.pipeline.items[r];let o;o="flows"===a._type?{_key:e.flow._key,name:"start",hint:e.flow.summary,status:"start",next:[]}:{_key:a._key,name:a.name,hint:a.summary,status:"succeed",next:[]},a.next.forEach((e=>{o.next.push({index:n.indexOf(e)})})),t.push(o)})),t}function Y(e,t){e.flows=t}function G(e,t){e.pipeline=t}function Z(e,t){e.flow=t,e.task=null}function ee(e,t){let n=0;for(;n<e.flows.length;n++)if(e.flows[n]._key===t)break;g["a"].delete(e.flows,n)}function te(e,t){e.task=t}function ne(e,t){e.instances=t}function re(e,t){e.instance=t}n("ddb0");function ae(e,t){return E.a.get(Re(t)+"/flows").then((t=>{e.commit("setFlows",t.data)}))}function oe(e,t){return Promise.all([E.a.get(Re(t)).then((t=>(e.commit("setFlow",t.data),t.data))),E.a.get(Re(t,"pipeline")).then((t=>(e.commit("setPipeline",t.data),t.data)))]).then((e=>e[0]))}function ie(e,{nk:t,flow:n}){return E.a.post(Re(t)+"/flows",n)}function se(e,t){return E.a.delete(Re(t)).then((n=>(e.commit("removeFlow",t),n)))}function ce(e,{ns:t,fk:n,tk:r}){return Promise.all([E.a.get(`v2/namespaces/${t}/flows/${n}/tasks/${r}`).then((t=>{e.commit("setTask",t.data)}))])}function ue(e,{ns:t,fk:n,task:r}){return E.a.put(`v2/namespaces/${t}/flows/${n}/tasks/${r._key}`,r)}function le(e,{flowKey:t,task:n}){return E.a.post(Re(t,"tasks"),n).then((r=>(n=r.data,e.dispatch("getFlow",t).then((()=>n)))))}function fe(e,{ns:t,fk:n,tk:r}){return Promise.all([E.a.delete(`v2/namespaces/${t}/flows/${n}/tasks/${r}`).then((r=>e.dispatch("getFlow",{ns:t,fk:n})))])}function pe(e,t){return E.a.get(Re(t,"instances")).then((t=>e.commit("setInstances",t.data)))}function de(e,{ns:t,fk:n,ik:r}){return Promise.all([E.a.get(`v2/namespaces/${t}/flows/${n}/instances/${r}`).then((t=>{e.commit("flows/setInstance",t.data)}))])}function he(e,{ns:t,fk:n}){return E.a.post(`v2/namespaces/${t}/flows/${n}/instances`,{}).then((t=>e.commit("setInstance",t.data)))}var me={namespaced:!0,state:H,getters:u,mutations:l,actions:f},ge=function(){return{namespaces:[],namespace:null}};function ve(e){return e.namespace}function we(e,t){e.namespaces=t}function ye(e,t){e.namespace=t}function ke(e){sessionStorage.removeItem("dukt.namespace"),e.namespace=null}function be(e){return E.a.get("v2/namespaces").then((t=>{e.commit("setNamespaces",t.data)}))}function Pe(e,t){return E.a.get(Re(t)).then((t=>(e.commit("setNamespace",t.data),t.data)))}function Ce(e,t){return E.a.post("v2/namespaces",t).then((t=>(e.dispatch("getNamespaces"),t)))}function $e(e,t){return E.a.delete(Re(t)).then((()=>e.dispatch("getNamespaces")))}var Oe={namespaced:!0,state:ge,getters:p,mutations:d,actions:h},_e=function(){return{stack:[]}},Te=n("6c2f");function je(e,t){e.stack.push(t)}function Ae(e){e.stack.pop()}function Se(e,{types:t,items:n}){const r=[],a=["me"];for(let o=0;o<t.length;o++)a.push(t[o]),a.push(n[o]._key),r.push({_key:n[o]._key,type:t[o],name:n[o].name,summary:n[o].summary,url:"/"+a.join("/")});e.stack=r}var xe=n("edfb"),Fe={namespaced:!0,state:_e,getters:Te,mutations:m,actions:xe};g["a"].use(A["a"]);var Ne=function(){const e=new A["a"].Store({modules:{agents:W,auth:z,flows:me,namespaces:Oe,navigation:Fe},strict:!1});return e};function Re(e,t){const n=e.split("*");if(2!==n.length)return void console.error("invalid key "+e);let r;return r="_system"===n[0]?"v2/"+n[1].replace(/:/g,"/"):`v2/namespaces/${n[0]}/${n[1].replace(/:/g,"/")}`,t&&(r+="/"+t),r}var Ee=n("a18c"),Ie=async function(){const e="function"===typeof Ne?await Ne({Vue:g["a"]}):Ne,t="function"===typeof Ee["a"]?await Object(Ee["a"])({Vue:g["a"],store:e}):Ee["a"];e.$router=t;const n={router:t,store:e,render:e=>e(j),el:"#q-app"};return{app:n,store:e,router:t}},Ue=n("8160");g["a"].use(L["a"],{domain:Ue["c"],clientId:Ue["b"],audience:Ue["a"],onRedirectCallback:e=>{(void 0).$store.dispatch("namespaces/getNamespaces"),Ee["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),g["a"].prototype.$axios=E.a,E.a.defaults.baseURL="https://api.dukt.io/",E.a.defaults.headers={Accept:"application/json","Content-Type":"application/json"};var Me=n("9a30"),We=(n("c197"),n("a878"),n("6b2c"),n("70cb"),n("a888"),n("5253"),n("d1d6")),Be=n.n(We),Le=async({Vue:e})=>{e.use(Me["a"]),e.use(n("2ead")),e.use(Be.a,{listenTo:["input","keyup"]})};let Ve=j.options||j,qe="function"===typeof Ve.preFetch;function De(e,t){const n=e?e.matched?e:t.resolve(e).route:t.currentRoute;return n?Array.prototype.concat.apply([],n.matched.map((e=>Object.keys(e.components).map((t=>{const n=e.components[t];return{path:e.path,c:n.options||n}}))))):[]}function Je(e,t,n){e.beforeResolve(((r,a,o)=>{const i=window.location.href.replace(window.location.origin,""),s=De(r,e),c=De(a,e);let u=!1;const l=s.filter(((e,t)=>u||(u=!c[t]||c[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>e.c&&"function"===typeof e.c.preFetch)).map((e=>e.c.preFetch));if(!0===qe&&(qe=!1,l.unshift(Ve.preFetch)),0===l.length)return o();let f=!1;const p=e=>{f=!0,o(e)},d=()=>{!1===f&&o()};l.reduce(((e,o)=>e.then((()=>!1===f&&o({store:t,currentRoute:r,previousRoute:a,redirect:p,urlPath:i,publicPath:n})))),Promise.resolve()).then(d).catch((e=>{console.error(e),d()}))}))}const Ke="";async function ze(){const{app:e,store:t,router:n}=await Ie();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),i=[void 0,void 0,Le];for(let c=0;!1===r&&c<i.length;c++)if("function"===typeof i[c])try{await i[c]({app:e,router:n,store:t,Vue:g["a"],ssrContext:null,redirect:a,urlPath:o,publicPath:Ke})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&(Je(n,t),new g["a"](e))}ze()},"6c2f":function(e,t){},8160:function(e){e.exports=JSON.parse('{"c":"dukt.eu.auth0.com","b":"6nkY2a8HngvVxKSQcmtinnEjwrX4F1D2","a":"https://api.dukt.io"}')},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));n("5319");var r=n("2b0e"),a=n("8c4f"),o=(n("e6cf"),n("b628")),i=n("bc3a"),s=n.n(i);const c=(e,t,n)=>{const r=Object(o["b"])(),a=()=>{if(console.log("auth"),r.isAuthenticated)return r.getTokenSilently().then((e=>{console.log("API token: "+e),s.a.defaults.headers.Authorization="Bearer "+e})),n();r.loginWithRedirect({redirect_uri:`${window.location.origin}/#${e.fullPath}`})};if(!r.loading)return a();r.$watch("loading",(e=>{if(!1===e)return a()}))},u=[{path:"/",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"8810")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"8b24"))},{path:"me",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"2ff9"))},{path:"namespaces/:ns",name:"namespace",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"f5df4"))},{path:"namespaces/:ns/flows/:fk",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"ace6"))},{path:"namespaces/:ns/flows/:fk/instances/:ik",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8151"))}],beforeEnter:c}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"e51e"))}];var l=u;r["a"].use(a["a"]);t["a"]=function(){const e=new a["a"]({scrollBehavior:()=>({x:0,y:0}),routes:l,mode:"hash",base:""});return e};function f(e,t){const n=t.split("*");2===n.length?"_system"===n[0]?e.$router.push("/me/"+n[1].replace(/:/g,"/")):e.$router.push("/me/namespaces/"+n[0]+"/"+n[1].replace(/:/g,"/")):console.error("invalid navigation key "+t)}},b628:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return f}));n("e6cf");var r=n("4082"),a=n.n(r),o=n("2b0e"),i=n("9767");const s=()=>window.history.replaceState({},document.title,window.location.pathname);let c;const u=()=>c,l=e=>{let{onRedirectCallback:t=s,redirectUri:n=window.location.origin}=e,r=a()(e,["onRedirectCallback","redirectUri"]);return c||(c=new o["a"]({data(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{async loginWithPopup(e){this.popupOpen=!0;try{await this.auth0Client.loginWithPopup(e)}catch(t){console.error(t)}finally{this.popupOpen=!1}this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0},async handleRedirectCallback(){this.loading=!0;try{await this.auth0Client.handleRedirectCallback(),this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0}catch(e){this.error=e}finally{this.loading=!1}},loginWithRedirect(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup(e){return this.auth0Client.getTokenWithPopup(e)},logout(e){return this.auth0Client.logout(e)}},async created(){this.auth0Client=await Object(i["a"])({domain:r.domain,client_id:r.clientId,audience:r.audience,redirect_uri:n,scope:"scopes"});try{if(window.location.search.includes("code=")&&window.location.search.includes("state=")){const{appState:e}=await this.auth0Client.handleRedirectCallback();t(e)}}catch(e){this.error=e}finally{this.isAuthenticated=await this.auth0Client.isAuthenticated(),this.user=await this.auth0Client.getUser(),this.loading=!1}}}),c)},f={install(e,t){e.prototype.$auth=l(t)}}},edfb:function(e,t){}});