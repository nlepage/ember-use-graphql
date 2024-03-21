var __ember_auto_import__;(()=>{var e,r={490:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{useQuery:()=>d})
const i=require("@ember/destroyable"),o=require("@ember/owner"),n=require("@ember/routing/route")
var s=t.n(n)
const u=require("@glimmer/tracking")
var a,l,c=t(298)
function b(e,r){return e.get(p(e,r))}function p(e,r,t){if("function"==typeof e?e===r:e.has(r))return arguments.length<3?r:t
throw new TypeError("Private element is not present on this object")}function h(e,r,t){!function(e,r){if(r.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,r),r.set(e,t)}function v(e,r,t){var i
return(r="symbol"==typeof(i=function(e,r){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r))?i:i+"")in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r,t){const o=new f(e,r,t)
return e instanceof s()?e.on("deactivate",o,o.unsubscribe):(0,i.registerDestructor)(e,(()=>{o.unsubscribe()})),new _(o)}class f{constructor(e,r,{client:t,variables:i,...n}={}){v(this,"client",void 0),v(this,"query",void 0),v(this,"variables",void 0),v(this,"observableQuery",void 0),v(this,"subscription",void 0),v(this,"trackedResult",void 0)
const s=(0,o.getOwner)(e)
if(!s)throw new TypeError("could not find owner of given context")
if(this.client=s.lookup(`apollo:${t??"default"}`),!this.client)throw new TypeError(`could not find client for name "apollo:${t??"default"}"`)
this.query={...n,query:r},this.variables=i,this.trackedResult=new y,this.subscribe()}get result(){return this.observableQuery.refetch("function"==typeof this.variables?this.variables():this.variables),this.trackedResult}subscribe(){this.observableQuery=this.client.watchQuery({...this.query,variables:{...this.query.variables,..."function"==typeof this.variables?this.variables():this.variables}}),this.trackedResult.result=this.observableQuery.getCurrentResult(),this.subscription=this.observableQuery.subscribe((e=>{this.trackedResult.result=e}))}unsubscribe(){this.subscription.unsubscribe()}}a=f,(0,c.n)(a.prototype,"result",[u.cached])
var m=new WeakMap
class y{constructor(){h(this,m,void(0,c.i)(this,"result"))}get data(){return this.result.data}get loading(){return this.result.loading}}l=y,(0,c.g)(l.prototype,"result",[u.tracked])
var g=new WeakMap
class _{constructor(e){var r,t
h(this,g,void 0),t=e,(r=g).set(p(r,this),t)}get data(){return b(g,this).result.data}get errors(){return b(g,this).result.errors}get error(){return b(g,this).result.error}get loading(){return b(g,this).result.loading}get networkStatus(){return b(g,this).result.networkStatus}get partial(){return b(g,this).result.partial}}},336:e=>{"use strict"
e.exports=require("@ember/component/helper")},603:e=>{"use strict"
e.exports=require("@ember/debug")},666:e=>{"use strict"
e.exports=require("@ember/object/internals")},223:e=>{"use strict"
e.exports=require("@ember/runloop")},735:e=>{"use strict"
e.exports=require("@ember/service")},553:e=>{"use strict"
e.exports=require("@ember/utils")},424:(e,r,t)=>{e.exports=function(){var e=_eai_d,r=_eai_r
function i(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?r("_eai_dyn_"+e):r("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return r("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("@apollo/client/core",[],(function(){return i(t(693))})),e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper","@ember/object/internals"],(function(){return i(t(550))})),e("ember-page-title/services/page-title",["@ember/runloop","@ember/service","@ember/utils","@ember/debug"],(function(){return i(t(199))})),e("ember-use-graphql",[],(function(){return i(t(490))}))}()},781:function(e,r){window._eai_r=require,window._eai_d=define}},t={}
function i(e){var o=t[e]
if(void 0!==o)return o.exports
var n=t[e]={exports:{}}
return r[e].call(n.exports,n,n.exports,i),n.exports}i.m=r,e=[],i.O=(r,t,o,n)=>{if(!t){var s=1/0
for(c=0;c<e.length;c++){for(var[t,o,n]=e[c],u=!0,a=0;a<t.length;a++)(!1&n||s>=n)&&Object.keys(i.O).every((e=>i.O[e](t[a])))?t.splice(a--,1):(u=!1,n<s&&(s=n))
if(u){e.splice(c--,1)
var l=o()
void 0!==l&&(r=l)}}return r}n=n||0
for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1]
e[c]=[t,o,n]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={524:0}
i.O.j=r=>0===e[r]
var r=(r,t)=>{var o,n,[s,u,a]=t,l=0
if(s.some((r=>0!==e[r]))){for(o in u)i.o(u,o)&&(i.m[o]=u[o])
if(a)var c=a(i)}for(r&&r(t);l<s.length;l++)n=s[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0
return i.O(c)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.O(void 0,[89],(()=>i(781)))
var o=i.O(void 0,[89],(()=>i(424)))
o=i.O(o),__ember_auto_import__=o})()
