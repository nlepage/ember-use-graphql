"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[89],{917:(e,t,r)=>{function n(e,t,r){return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var n}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>o,a:()=>i,b:()=>n})},550:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f})
var n,i,o,s=r(917),a=r(735),c=r(336),u=r.n(c),l=r(666)
let f=(n=(0,a.inject)("page-title"),i=class extends(u()){constructor(e){super(e),(0,s.a)(this,"tokens",o,this),(0,s.b)(this,"tokenId",(0,l.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},o=(0,s._)(i.prototype,"tokens",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},199:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m})
var n,i,o,s,a,c=r(917),u=r(223),l=r(735),f=r.n(l),h=r(553),p=r(603)
const d="undefined"!=typeof FastBoot,v="routeDidChange",y=["separator","prepend","replace"]
let m=(n=(0,l.inject)("router"),i=(0,l.inject)("-document"),o=class extends(f()){constructor(e){if(super(e),(0,c.a)(this,"router",s,this),(0,c.a)(this,"document",a,this),(0,c.b)(this,"tokens",[]),(0,c.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,c.b)(this,"scheduleTitleUpdate",(()=>{(0,u.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const r=e.resolveRegistration("config:environment")
"object"==typeof(t=r)&&null!==t&&"pageTitle"in t&&y.forEach((e=>{if(!(0,h.isEmpty)(r.pageTitle[e])){const t=r.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(v,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,r=this._defaultConfig.prepend,n=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=n&&(e.replace=n)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const r=this.tokens.indexOf(t),n=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),n.splice(r,1,e),void(this.tokens=n)}const r=this.tokens.slice(-1)[0]
r&&(e.previous=r??null,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:r,previous:n}=t
r&&(r.previous=n),n&&(n.next=r),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const r=[]
for(;t--;){const n=e[t]
if(n){if(n.replace){r.unshift(n)
break}r.unshift(n)}}return r}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,r=[]
const n=[r],i=[]
return e.forEach((e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],n.push(r))
const i=r[0]
i&&((e={...e}).separator=i.separator),r.unshift(e)}else t||(t=!0,r=[],n.push(r)),r.push(e)})),i.concat(n.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let r=0,n=e.length;r<n;r++){const i=e[r]
i&&i.title&&(t.push(i.title),r+1<n&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(v,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
d?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){d||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!d)return
const t=this.document.head,r=t.childNodes
for(let o=0;o<r.length;o++){const e=r[o]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const n=this.document.createElement("title"),i=this.document.createTextNode(e)
n.appendChild(i),t.appendChild(n)}titleDidUpdate(e){}},s=(0,c._)(o.prototype,"router",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,c._)(o.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},693:(e,t,r)=>{r.r(t),r.d(t,{ApolloCache:()=>wi,ApolloClient:()=>Oi,ApolloError:()=>It,ApolloLink:()=>Xe,Cache:()=>Ei,DocumentTransform:()=>Rn,HttpLink:()=>kr,InMemoryCache:()=>ko,MissingFieldError:()=>ki,NetworkStatus:()=>qn,Observable:()=>X,ObservableQuery:()=>Zn,checkFetcher:()=>Ut,concat:()=>Do,createHttpLink:()=>wr,createSignalIfSupported:()=>Io,defaultDataIdFromObject:()=>Di,defaultPrinter:()=>ur,disableExperimentalFragmentVariables:()=>Os,disableFragmentWarnings:()=>Es,empty:()=>To,enableExperimentalFragmentVariables:()=>_s,execute:()=>Ze,fallbackHttpConfig:()=>cr,from:()=>So,fromError:()=>pr,fromPromise:()=>Ao,gql:()=>bs,isApolloError:()=>Dt,isNetworkRequestSettled:()=>zn,isReference:()=>Ce,makeReference:()=>Re,makeVar:()=>ui,mergeOptions:()=>gi,parseAndCheckHttpResponse:()=>Bt,resetCaches:()=>gs,rewriteURIForGET:()=>hr,selectHttpOptionsAndBody:()=>lr,selectHttpOptionsAndBodyInternal:()=>fr,selectURI:()=>Et,serializeFetchParameter:()=>gt,setLogVerbosity:()=>g,split:()=>xo,throwServerError:()=>St,toPromise:()=>No})
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function s(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function a(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function c(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.")
for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i
switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a
break
case 4:return s.label++,{value:a[1],done:!1}
case 5:s.label++,n=a[1],a=[0]
continue
case 7:a=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0
continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1]
break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function u(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError
var l="Invariant Violation",f=Object.setPrototypeOf,h=void 0===f?function(e,t){return e.__proto__=t,e}:f,p=function(e){function t(r){void 0===r&&(r=l)
var n=e.call(this,"number"==typeof r?l+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this
return n.framesToPop=1,n.name=l,h(n,t.prototype),n}return i(t,e),t}(Error)
function d(e,t){if(!e)throw new p(t)}var v,y=["debug","log","warn","error","silent"],m=y.indexOf("log")
function b(e){return function(){if(y.indexOf(e)>=m)return(console[e]||console.log).apply(console,arguments)}}function g(e){var t=y[m]
return m=Math.max(0,y.indexOf(e)),t}(v=d||(d={})).debug=b("debug"),v.log=b("log"),v.warn=b("warn"),v.error=b("error")
var E="3.9.7"
function _(e){try{return e()}catch(e){}}const O=_((function(){return globalThis}))||_((function(){return window}))||_((function(){return self}))||_((function(){return global}))||_((function(){return _.constructor("return this")()}))
var w=new Map
function k(e){var t=w.get(e)||1
return w.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function T(e,t){void 0===t&&(t=0)
var r=k("stringifyForDisplay")
return JSON.stringify(e,(function(e,t){return void 0===t?r:t}),t).split(JSON.stringify(r)).join("<undefined>")}function S(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n]
if("number"==typeof t){var i=t;(t=A(i))||(t=R(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var x=Object.assign((function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
e||d(e,A(t,r)||R(t,r))}),{debug:S(d.debug),log:S(d.log),warn:S(d.warn),error:S(d.error)})
function D(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return new p(A(e,t)||R(e,t))}var I=Symbol.for("ApolloErrorMessageHandler_"+E)
function N(e){return"string"==typeof e?e:T(e,2).slice(0,1e3)}function A(e,t){if(void 0===t&&(t=[]),e)return O[I]&&O[I](e,t.map(N))}function R(e,t){if(void 0===t&&(t=[]),e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:E,message:e,args:t.map(N)})))}function C(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t,r){return t&&F(e.prototype,t),r&&F(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}globalThis.__DEV__
var j=function(){return"function"==typeof Symbol},M=function(e){return j()&&Boolean(Symbol[e])},L=function(e){return M(e)?Symbol[e]:"@@"+e}
j()&&!M("observable")&&(Symbol.observable=Symbol("observable"))
var q=L("iterator"),V=L("observable"),Q=L("species")
function z(e,t){var r=e[t]
if(null!=r){if("function"!=typeof r)throw new TypeError(r+" is not a function")
return r}}function B(e){var t=e.constructor
return void 0!==t&&null===(t=t[Q])&&(t=void 0),void 0!==t?t:X}function U(e){U.log?U.log(e):setTimeout((function(){throw e}))}function W(e){Promise.resolve().then((function(){try{e()}catch(e){U(e)}}))}function K(e){var t=e._cleanup
if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t()
else{var r=z(t,"unsubscribe")
r&&r.call(t)}}catch(e){U(e)}}function G(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Y(e,t,r){e._state="running"
var n=e._observer
try{var i=z(n,t)
switch(t){case"next":i&&i.call(n,r)
break
case"error":if(G(e),!i)throw r
i.call(n,r)
break
case"complete":G(e),i&&i.call(n)}}catch(e){U(e)}"closed"===e._state?K(e):"running"===e._state&&(e._state="ready")}function $(e,t,r){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:r}],void W((function(){return function(e){var t=e._queue
if(t){e._queue=void 0,e._state="ready"
for(var r=0;r<t.length&&(Y(e,t[r].type,t[r].value),"closed"!==e._state);++r);}}(e)}))):void Y(e,t,r)
e._queue.push({type:t,value:r})}}var J=function(){function e(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing"
var r=new H(this)
try{this._cleanup=t.call(void 0,r)}catch(e){r.error(e)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(G(this),K(this))},P(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),H=function(){function e(e){this._subscription=e}var t=e.prototype
return t.next=function(e){$(this._subscription,"next",e)},t.error=function(e){$(this._subscription,"error",e)},t.complete=function(){$(this._subscription,"complete")},P(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),X=function(){function e(t){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function")
if("function"!=typeof t)throw new TypeError("Observable initializer must be a function")
this._subscriber=t}var t=e.prototype
return t.subscribe=function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new J(e,this._subscriber)},t.forEach=function(e){var t=this
return new Promise((function(r,n){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r})
else n(new TypeError(e+" is not a function"))
function o(){i.unsubscribe(),r()}}))},t.map=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
return new(B(this))((function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.filter=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
return new(B(this))((function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.reduce=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
var r=B(this),n=arguments.length>1,i=!1,o=arguments[1]
return new r((function(r){return t.subscribe({next:function(t){var s=!i
if(i=!0,!s||n)try{o=e(o,t)}catch(e){return r.error(e)}else o=t},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"))
r.next(o),r.complete()}})}))},t.concat=function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
var i=B(this)
return new i((function(t){var n,o=0
return function e(s){n=s.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===r.length?(n=void 0,t.complete()):e(i.from(r[o++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}}))},t.flatMap=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
var r=B(this)
return new r((function(n){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return n.error(e)}var o=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(o)
e>=0&&i.splice(e,1),s()}})
i.push(o)},error:function(e){n.error(e)},complete:function(){s()}})
function s(){o.closed&&0===i.length&&n.complete()}return function(){i.forEach((function(e){return e.unsubscribe()})),o.unsubscribe()}}))},t[V]=function(){return this},e.from=function(t){var r="function"==typeof this?this:e
if(null==t)throw new TypeError(t+" is not an object")
var n=z(t,V)
if(n){var i=n.call(t)
if(Object(i)!==i)throw new TypeError(i+" is not an object")
return function(e){return e instanceof X}(i)&&i.constructor===r?i:new r((function(e){return i.subscribe(e)}))}if(M("iterator")&&(n=z(t,q)))return new r((function(e){W((function(){if(!e.closed){for(var r,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(r)return(r=r.call(e)).next.bind(r)
if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return C(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(e))){r&&(e=r)
var n=0
return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.call(t));!(r=i()).done;){var o=r.value
if(e.next(o),e.closed)return}e.complete()}}))}))
if(Array.isArray(t))return new r((function(e){W((function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return
e.complete()}}))}))
throw new TypeError(t+" is not observable")},e.of=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return new("function"==typeof this?this:e)((function(e){W((function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return
e.complete()}}))}))},P(e,null,[{key:Q,get:function(){return this}}]),e}()
function Z(e){return null!==e&&"object"==typeof e}function ee(e,t){var r=t,n=[]
return e.definitions.forEach((function(e){if("OperationDefinition"===e.kind)throw D(71,e.operation,e.name?" named '".concat(e.name.value,"'"):"")
"FragmentDefinition"===e.kind&&n.push(e)})),void 0===r&&(x(1===n.length,72,n.length),r=n[0].name.value),o(o({},e),{definitions:u([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions,!0)})}function te(e){void 0===e&&(e=[])
var t={}
return e.forEach((function(e){t[e.name.value]=e})),t}function re(e,t){switch(e.kind){case"InlineFragment":return e
case"FragmentSpread":var r=e.name.value
if("function"==typeof t)return t(r)
var n=t&&t[r]
return x(n,73,r),n||null
default:return null}}function ne(){}j()&&Object.defineProperty(X,Symbol("extensions"),{value:{symbol:V,hostReportError:U},configurable:!0})
const ie=ne,oe="undefined"!=typeof WeakRef?WeakRef:function(e){return{deref:()=>e}},se="undefined"!=typeof WeakMap?WeakMap:Map,ae="undefined"!=typeof FinalizationRegistry?FinalizationRegistry:function(){return{register:ne,unregister:ne}}
class ce{constructor(e=1/0,t=ie){this.max=e,this.dispose=t,this.map=new se,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const e=this.unfinalizedNodes.values()
for(let t=0;t<10024;t++){const t=e.next().value
if(!t)break
this.unfinalizedNodes.delete(t)
const r=t.key
delete t.key,t.keyRef=new oe(r),this.registry.register(r,t,t)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new ae(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){const t=this.getNode(e)
return t&&t.value}getNode(e){const t=this.map.get(e)
if(t&&t!==this.newest){const{older:e,newer:r}=t
r&&(r.older=e),e&&(e.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let r=this.getNode(e)
return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(e,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--
const t=e.key||e.keyRef&&e.keyRef.deref()
this.dispose(e.value,t),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),t&&this.map.delete(t)}delete(e){const t=this.map.get(e)
return!!t&&(this.deleteNode(t),!0)}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}function ue(){}class le{constructor(e=1/0,t=ue){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const t=this.getNode(e)
return t&&t.value}get size(){return this.map.size}getNode(e){const t=this.map.get(e)
if(t&&t!==this.newest){const{older:e,newer:r}=t
r&&(r.older=e),e&&(e.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let r=this.getNode(e)
return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const t=this.map.get(e)
return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)}}var fe=new WeakSet
function he(e){fe.has(e)||(fe.add(e),setTimeout((function(){e.clean(),fe.delete(e)}),100))}var pe=function(e,t){var r=new ce(e,t)
return r.set=function(e,t){return he(this),ce.prototype.set.call(this,e,t)},r},de=function(e,t){var r=new le(e,t)
return r.set=function(e,t){return he(this),le.prototype.set.call(this,e,t)},r},ve=Symbol.for("apollo.cacheSize"),ye=o({},O[ve]),me={}
function be(e,t){me[e]=t}var ge=!1!==globalThis.__DEV__?function(){var e,t,r,n,i
if(!1===globalThis.__DEV__)throw new Error("only supported in development mode")
return{limits:Object.fromEntries(Object.entries({parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4}).map((function(e){var t=e[0],r=e[1]
return[t,ye[t]||r]}))),sizes:o({print:null===(e=me.print)||void 0===e?void 0:e.call(me),parser:null===(t=me.parser)||void 0===t?void 0:t.call(me),canonicalStringify:null===(r=me.canonicalStringify)||void 0===r?void 0:r.call(me),links:xe(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:Te(this.queryManager.documentTransform)}},null===(i=(n=this.cache).getMemoryInternals)||void 0===i?void 0:i.call(n))}}:void 0,Ee=!1!==globalThis.__DEV__?function(){var e=this.config.fragments
return o(o({},Oe.apply(this)),{addTypenameDocumentTransform:Te(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:we(this.storeReader.executeSelectionSet),executeSubSelectedArray:we(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:we(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:we(null==e?void 0:e.findFragmentSpreads),lookup:we(null==e?void 0:e.lookup),transform:we(null==e?void 0:e.transform)}})}:void 0,_e=!1!==globalThis.__DEV__?Oe:void 0
function Oe(){return{cache:{fragmentQueryDocuments:we(this.getFragmentDoc)}}}function we(e){return function(e){return!!e&&"dirtyKey"in e}(e)?e.size:void 0}function ke(e){return null!=e}function Te(e){return Se(e).map((function(e){return{cache:e}}))}function Se(e){return e?u(u([we(null==e?void 0:e.performWork)],Se(null==e?void 0:e.left),!0),Se(null==e?void 0:e.right),!0).filter(ke):[]}function xe(e){var t
return e?u(u([null===(t=null==e?void 0:e.getMemoryInternals)||void 0===t?void 0:t.call(e)],xe(null==e?void 0:e.left),!0),xe(null==e?void 0:e.right),!0).filter(ke):[]}var De,Ie=Object.assign((function(e){return JSON.stringify(e,Ne)}),{reset:function(){De=new de(ye.canonicalStringify||1e3)}})
function Ne(e,t){if(t&&"object"==typeof t){var r=Object.getPrototypeOf(t)
if(r===Object.prototype||null===r){var n=Object.keys(t)
if(n.every(Ae))return t
var i=JSON.stringify(n),o=De.get(i)
if(!o){n.sort()
var s=JSON.stringify(n)
o=De.get(s)||n,De.set(i,o),De.set(s,o)}var a=Object.create(r)
return o.forEach((function(e){a[e]=t[e]})),a}}return t}function Ae(e,t,r){return 0===t||r[t-1]<=e}function Re(e){return{__ref:String(e)}}function Ce(e){return Boolean(e&&"object"==typeof e&&"string"==typeof e.__ref)}function Fe(e,t,r,n){if(function(e){return"IntValue"===e.kind}(r)||function(e){return"FloatValue"===e.kind}(r))e[t.value]=Number(r.value)
else if(function(e){return"BooleanValue"===e.kind}(r)||function(e){return"StringValue"===e.kind}(r))e[t.value]=r.value
else if(function(e){return"ObjectValue"===e.kind}(r)){var i={}
r.fields.map((function(e){return Fe(i,e.name,e.value,n)})),e[t.value]=i}else if(function(e){return"Variable"===e.kind}(r)){var o=(n||{})[r.name.value]
e[t.value]=o}else if(function(e){return"ListValue"===e.kind}(r))e[t.value]=r.values.map((function(e){var r={}
return Fe(r,t,e,n),r[t.value]}))
else if(function(e){return"EnumValue"===e.kind}(r))e[t.value]=r.value
else{if(!function(e){return"NullValue"===e.kind}(r))throw D(82,t.value,r.kind)
e[t.value]=null}}!1!==globalThis.__DEV__&&be("canonicalStringify",(function(){return De.size})),Ie.reset()
var Pe=["connection","include","skip","client","rest","export","nonreactive"],je=Ie,Me=Object.assign((function(e,t,r){if(t&&r&&r.connection&&r.connection.key){if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[]
n.sort()
var i={}
return n.forEach((function(e){i[e]=t[e]})),"".concat(r.connection.key,"(").concat(je(i),")")}return r.connection.key}var o=e
if(t){var s=je(t)
o+="(".concat(s,")")}return r&&Object.keys(r).forEach((function(e){-1===Pe.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?o+="@".concat(e,"(").concat(je(r[e]),")"):o+="@".concat(e))})),o}),{setStringify:function(e){var t=je
return je=e,t}})
function Le(e,t){if(e.arguments&&e.arguments.length){var r={}
return e.arguments.forEach((function(e){var n=e.name,i=e.value
return Fe(r,n,i,t)})),r}return null}function qe(e){return e.alias?e.alias.value:e.name.value}function Ve(e,t,r){for(var n,i=0,o=t.selections;i<o.length;i++)if(Qe(c=o[i])){if("__typename"===c.name.value)return e[qe(c)]}else n?n.push(c):n=[c]
if("string"==typeof e.__typename)return e.__typename
if(n)for(var s=0,a=n;s<a.length;s++){var c,u=Ve(e,re(c=a[s],r).selectionSet,r)
if("string"==typeof u)return u}}function Qe(e){return"Field"===e.kind}function ze(e){x(e&&"Document"===e.kind,74)
var t=e.definitions.filter((function(e){return"FragmentDefinition"!==e.kind})).map((function(e){if("OperationDefinition"!==e.kind)throw D(75,e.kind)
return e}))
return x(t.length<=1,76,t.length),e}function Be(e){return ze(e),e.definitions.filter((function(e){return"OperationDefinition"===e.kind}))[0]}function Ue(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&!!e.name})).map((function(e){return e.name.value}))[0]||null}function We(e){return e.definitions.filter((function(e){return"FragmentDefinition"===e.kind}))}function Ke(e){var t=Be(e)
return x(t&&"query"===t.operation,77),t}function Ge(e){var t
ze(e)
for(var r=0,n=e.definitions;r<n.length;r++){var i=n[r]
if("OperationDefinition"===i.kind){var o=i.operation
if("query"===o||"mutation"===o||"subscription"===o)return i}"FragmentDefinition"!==i.kind||t||(t=i)}if(t)return t
throw D(81)}function Ye(e){var t=Object.create(null),r=e&&e.variableDefinitions
return r&&r.length&&r.forEach((function(e){e.defaultValue&&Fe(t,e.variable.name,e.defaultValue)})),t}function $e(e,t){return t?t(e):X.of()}function Je(e){return"function"==typeof e?new Xe(e):e}function He(e){return e.request.length<=1}var Xe=function(){function e(e){e&&(this.request=e)}return e.empty=function(){return new e((function(){return X.of()}))},e.from=function(t){return 0===t.length?e.empty():t.map(Je).reduce((function(e,t){return e.concat(t)}))},e.split=function(t,r,n){var i,o=Je(r),s=Je(n||new e($e))
return i=He(o)&&He(s)?new e((function(e){return t(e)?o.request(e)||X.of():s.request(e)||X.of()})):new e((function(e,r){return t(e)?o.request(e,r)||X.of():s.request(e,r)||X.of()})),Object.assign(i,{left:o,right:s})},e.execute=function(e,t){return e.request(function(e,t){var r=o({},e)
return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){r=o(o({},r),"function"==typeof e?e(r):e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return o({},r)}}),t}(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query}
return t.operationName||(t.operationName="string"!=typeof t.query?Ue(t.query)||void 0:""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r]
if(t.indexOf(i)<0)throw D(43,i)}return e}(t))))||X.of()},e.concat=function(t,r){var n=Je(t)
if(He(n))return!1!==globalThis.__DEV__&&x.warn(35,n),n
var i,o=Je(r)
return i=He(o)?new e((function(e){return n.request(e,(function(e){return o.request(e)||X.of()}))||X.of()})):new e((function(e,t){return n.request(e,(function(e){return o.request(e,t)||X.of()}))||X.of()})),Object.assign(i,{left:n,right:o})},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e($e)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(e,t){throw D(36)},e.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1
throw e},e.prototype.setOnError=function(e){return this.onError=e,this},e}(),Ze=Xe.execute
function et(e,t){if(!Boolean(e))throw new Error(t)}const tt=10,rt=2
function nt(e){return it(e,[])}function it(e,t){switch(typeof e){case"string":return JSON.stringify(e)
case"function":return e.name?`[function ${e.name}]`:"[function]"
case"object":return function(e,t){if(null===e)return"null"
if(t.includes(e))return"[Circular]"
const r=[...t,e]
if(function(e){return"function"==typeof e.toJSON}(e)){const t=e.toJSON()
if(t!==e)return"string"==typeof t?t:it(t,r)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]"
if(t.length>rt)return"[Array]"
const r=Math.min(tt,e.length),n=e.length-r,i=[]
for(let o=0;o<r;++o)i.push(it(e[o],t))
return 1===n?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}(e,r)
return function(e,t){const r=Object.entries(e)
if(0===r.length)return"{}"
if(t.length>rt)return"["+function(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"")
if("Object"===t&&"function"==typeof e.constructor){const t=e.constructor.name
if("string"==typeof t&&""!==t)return t}return t}(e)+"]"
const n=r.map((([e,r])=>e+": "+it(r,t)))
return"{ "+n.join(", ")+" }"}(e,r)}(e,t)
default:return String(e)}}class ot{constructor(e,t,r){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class st{constructor(e,t,r,n,i,o){this.kind=e,this.start=t,this.end=r,this.line=n,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const at={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},ct=new Set(Object.keys(at))
function ut(e){const t=null==e?void 0:e.kind
return"string"==typeof t&&ct.has(t)}var lt,ft,ht
!function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"}(lt||(lt={})),(ht=ft||(ft={})).NAME="Name",ht.DOCUMENT="Document",ht.OPERATION_DEFINITION="OperationDefinition",ht.VARIABLE_DEFINITION="VariableDefinition",ht.SELECTION_SET="SelectionSet",ht.FIELD="Field",ht.ARGUMENT="Argument",ht.FRAGMENT_SPREAD="FragmentSpread",ht.INLINE_FRAGMENT="InlineFragment",ht.FRAGMENT_DEFINITION="FragmentDefinition",ht.VARIABLE="Variable",ht.INT="IntValue",ht.FLOAT="FloatValue",ht.STRING="StringValue",ht.BOOLEAN="BooleanValue",ht.NULL="NullValue",ht.ENUM="EnumValue",ht.LIST="ListValue",ht.OBJECT="ObjectValue",ht.OBJECT_FIELD="ObjectField",ht.DIRECTIVE="Directive",ht.NAMED_TYPE="NamedType",ht.LIST_TYPE="ListType",ht.NON_NULL_TYPE="NonNullType",ht.SCHEMA_DEFINITION="SchemaDefinition",ht.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",ht.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",ht.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",ht.FIELD_DEFINITION="FieldDefinition",ht.INPUT_VALUE_DEFINITION="InputValueDefinition",ht.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",ht.UNION_TYPE_DEFINITION="UnionTypeDefinition",ht.ENUM_TYPE_DEFINITION="EnumTypeDefinition",ht.ENUM_VALUE_DEFINITION="EnumValueDefinition",ht.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",ht.DIRECTIVE_DEFINITION="DirectiveDefinition",ht.SCHEMA_EXTENSION="SchemaExtension",ht.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",ht.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",ht.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",ht.UNION_TYPE_EXTENSION="UnionTypeExtension",ht.ENUM_TYPE_EXTENSION="EnumTypeExtension",ht.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"
const pt=Object.freeze({})
function dt(e,t,r=at){const n=new Map
for(const m of Object.values(ft))n.set(m,vt(t,m))
let i,o,s,a=Array.isArray(e),c=[e],u=-1,l=[],f=e
const h=[],p=[]
do{u++
const e=u===c.length,m=e&&0!==l.length
if(e){if(o=0===p.length?void 0:h[h.length-1],f=s,s=p.pop(),m)if(a){f=f.slice()
let e=0
for(const[t,r]of l){const n=t-e
null===r?(f.splice(n,1),e++):f[n]=r}}else{f=Object.defineProperties({},Object.getOwnPropertyDescriptors(f))
for(const[e,t]of l)f[e]=t}u=i.index,c=i.keys,l=i.edits,a=i.inArray,i=i.prev}else if(s){if(o=a?u:c[u],f=s[o],null==f)continue
h.push(o)}let b
if(!Array.isArray(f)){var d,v
ut(f)||et(!1,`Invalid AST Node: ${nt(f)}.`)
const r=e?null===(d=n.get(f.kind))||void 0===d?void 0:d.leave:null===(v=n.get(f.kind))||void 0===v?void 0:v.enter
if(b=null==r?void 0:r.call(t,f,o,s,h,p),b===pt)break
if(!1===b){if(!e){h.pop()
continue}}else if(void 0!==b&&(l.push([o,b]),!e)){if(!ut(b)){h.pop()
continue}f=b}}var y
void 0===b&&m&&l.push([o,f]),e?h.pop():(i={inArray:a,index:u,keys:c,edits:l,prev:i},a=Array.isArray(f),c=a?f:null!==(y=r[f.kind])&&void 0!==y?y:[],u=-1,l=[],s&&p.push(s),s=f)}while(void 0!==i)
return 0!==l.length?l[l.length-1][1]:e}function vt(e,t){const r=e[t]
return"object"==typeof r?r:"function"==typeof r?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function yt(e,t){var r=e.directives
return!r||!r.length||function(e){var t=[]
return e&&e.length&&e.forEach((function(e){if(function(e){var t=e.name.value
return"skip"===t||"include"===t}(e)){var r=e.arguments,n=e.name.value
x(r&&1===r.length,68,n)
var i=r[0]
x(i.name&&"if"===i.name.value,69,n)
var o=i.value
x(o&&("Variable"===o.kind||"BooleanValue"===o.kind),70,n),t.push({directive:e,ifArgument:i})}})),t}(r).every((function(e){var r=e.directive,n=e.ifArgument,i=!1
return"Variable"===n.value.kind?(i=t&&t[n.value.name.value],x(void 0!==i,67,r.name.value)):i=n.value.value,"skip"===r.name.value?!i:i}))}function mt(e,t,r){var n=new Set(e),i=n.size
return dt(t,{Directive:function(e){if(n.delete(e.name.value)&&(!r||!n.size))return pt}}),r?!n.size:n.size<i}function bt(e){return e&&mt(["client","export"],e,!0)}var gt=function(e,t){var r
try{r=JSON.stringify(e)}catch(e){var n=D(39,t,e.message)
throw n.parseError=e,n}return r},Et=function(e,t){return e.getContext().uri||("function"==typeof t?t(e):t||"/graphql")},_t="function"==typeof WeakMap&&!_((function(){return"ReactNative"==navigator.product&&!global.HermesInternal})),Ot="function"==typeof WeakSet,wt="function"==typeof Symbol&&"function"==typeof Symbol.for,kt=wt&&Symbol.asyncIterator
function Tt(e){var t={next:function(){return e.read()}}
return kt&&(t[Symbol.asyncIterator]=function(){return this}),t}_((function(){return window.document.createElement})),_((function(){return navigator.userAgent.indexOf("jsdom")>=0}))
var St=function(e,t,r){var n=new Error(r)
throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},xt=Symbol()
function Dt(e){return e.hasOwnProperty("graphQLErrors")}var It=function(e){function t(r){var n,i,o=r.graphQLErrors,s=r.protocolErrors,a=r.clientErrors,c=r.networkError,l=r.errorMessage,f=r.extraInfo,h=e.call(this,l)||this
return h.name="ApolloError",h.graphQLErrors=o||[],h.protocolErrors=s||[],h.clientErrors=a||[],h.networkError=c||null,h.message=l||(i=u(u(u([],(n=h).graphQLErrors,!0),n.clientErrors,!0),n.protocolErrors,!0),n.networkError&&i.push(n.networkError),i.map((function(e){return Z(e)&&e.message||"Error message not found."})).join("\n")),h.extraInfo=f,h.__proto__=t.prototype,h}return i(t,e),t}(Error),Nt=Array.isArray
function At(e){return Array.isArray(e)&&e.length>0}var Rt=Object.prototype.hasOwnProperty
function Ct(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return Ft(e)}function Ft(e){var t=e[0]||{},r=e.length
if(r>1)for(var n=new jt,i=1;i<r;++i)t=n.merge(t,e[i])
return t}var Pt=function(e,t,r){return this.merge(e[r],t[r])},jt=function(){function e(e){void 0===e&&(e=Pt),this.reconciler=e,this.isObject=Z,this.pastCopies=new Set}return e.prototype.merge=function(e,t){for(var r=this,n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i]
return Z(t)&&Z(e)?(Object.keys(t).forEach((function(i){if(Rt.call(e,i)){var o=e[i]
if(t[i]!==o){var s=r.reconciler.apply(r,u([e,t,i],n,!1))
s!==o&&((e=r.shallowCopyForMerge(e))[i]=s)}}else(e=r.shallowCopyForMerge(e))[i]=t[i]})),e):t},e.prototype.shallowCopyForMerge=function(e){return Z(e)&&(this.pastCopies.has(e)||(e=Array.isArray(e)?e.slice(0):o({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},e}()
function Mt(e){return"incremental"in e}function Lt(e){return Z(e)&&"payload"in e}function qt(e,t){var r=e,n=new jt
return Mt(t)&&At(t.incremental)&&t.incremental.forEach((function(e){for(var t=e.data,i=e.path,o=i.length-1;o>=0;--o){var s=i[o],a=isNaN(+s)?{}:[]
a[s]=t,t=a}r=n.merge(r,t)})),r}var Vt=Object.prototype.hasOwnProperty
function Qt(e){var t={}
return e.split("\n").forEach((function(e){var r=e.indexOf(":")
if(r>-1){var n=e.slice(0,r).trim().toLowerCase(),i=e.slice(r+1).trim()
t[n]=i}})),t}function zt(e,t){e.status>=300&&St(e,function(){try{return JSON.parse(t)}catch(e){return t}}(),"Response not successful: Received status code ".concat(e.status))
try{return JSON.parse(t)}catch(n){var r=n
throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function Bt(e){return function(t){return t.text().then((function(e){return zt(t,e)})).then((function(r){return Array.isArray(r)||Vt.call(r,"data")||Vt.call(r,"errors")||St(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map((function(e){return e.operationName})):e.operationName,"'.")),r}))}}var Ut=function(e){if(!e&&"undefined"==typeof fetch)throw D(37)}
function Wt(e){return 9===e||32===e}function Kt(e){return e>=48&&e<=57}function Gt(e){return e>=97&&e<=122||e>=65&&e<=90}function Yt(e){return Gt(e)||95===e}function $t(e){var t
let r=Number.MAX_SAFE_INTEGER,n=null,i=-1
for(let s=0;s<e.length;++s){var o
const t=e[s],a=Jt(t)
a!==t.length&&(n=null!==(o=n)&&void 0!==o?o:s,i=s,0!==s&&a<r&&(r=a))}return e.map(((e,t)=>0===t?e:e.slice(r))).slice(null!==(t=n)&&void 0!==t?t:0,i+1)}function Jt(e){let t=0
for(;t<e.length&&Wt(e.charCodeAt(t));)++t
return t}const Ht=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g
function Xt(e){return Zt[e.charCodeAt(0)]}const Zt=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],er={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>tr(e.definitions,"\n\n")},OperationDefinition:{leave(e){const t=nr("(",tr(e.variableDefinitions,", "),")"),r=tr([e.operation,tr([e.name,t]),tr(e.directives," ")]," ")
return("query"===r?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n})=>e+": "+t+nr(" = ",r)+nr(" ",tr(n," "))},SelectionSet:{leave:({selections:e})=>rr(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const o=nr("",e,": ")+t
let s=o+nr("(",tr(r,", "),")")
return s.length>80&&(s=o+nr("(\n",ir(tr(r,"\n")),"\n)")),tr([s,tr(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+nr(" ",tr(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>tr(["...",nr("on ",e),tr(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i})=>`fragment ${e}${nr("(",tr(r,", "),")")} on ${t} ${nr("",tr(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?function(e,t){const r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=1===n.length,o=n.length>1&&n.slice(1).every((e=>0===e.length||Wt(e.charCodeAt(0)))),s=r.endsWith('\\"""'),a=e.endsWith('"')&&!s,c=e.endsWith("\\"),u=a||c,l=!i||e.length>70||u||o||s
let f=""
const h=i&&Wt(e.charCodeAt(0))
return(l&&!h||o)&&(f+="\n"),f+=r,(l||u)&&(f+="\n"),'"""'+f+'"""'}(e):`"${e.replace(Ht,Xt)}"`},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+tr(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+tr(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+nr("(",tr(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>nr("",e,"\n")+tr(["schema",tr(t," "),rr(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>nr("",e,"\n")+tr(["scalar",t,tr(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>nr("",e,"\n")+tr(["type",t,nr("implements ",tr(r," & ")),tr(n," "),rr(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>nr("",e,"\n")+t+(or(r)?nr("(\n",ir(tr(r,"\n")),"\n)"):nr("(",tr(r,", "),")"))+": "+n+nr(" ",tr(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>nr("",e,"\n")+tr([t+": "+r,nr("= ",n),tr(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>nr("",e,"\n")+tr(["interface",t,nr("implements ",tr(r," & ")),tr(n," "),rr(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>nr("",e,"\n")+tr(["union",t,tr(r," "),nr("= ",tr(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>nr("",e,"\n")+tr(["enum",t,tr(r," "),rr(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>nr("",e,"\n")+tr([t,tr(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>nr("",e,"\n")+tr(["input",t,tr(r," "),rr(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,repeatable:n,locations:i})=>nr("",e,"\n")+"directive @"+t+(or(r)?nr("(\n",ir(tr(r,"\n")),"\n)"):nr("(",tr(r,", "),")"))+(n?" repeatable":"")+" on "+tr(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>tr(["extend schema",tr(e," "),rr(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>tr(["extend scalar",e,tr(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>tr(["extend type",e,nr("implements ",tr(t," & ")),tr(r," "),rr(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>tr(["extend interface",e,nr("implements ",tr(t," & ")),tr(r," "),rr(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>tr(["extend union",e,tr(t," "),nr("= ",tr(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>tr(["extend enum",e,tr(t," "),rr(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>tr(["extend input",e,tr(t," "),rr(r)]," ")}}
function tr(e,t=""){var r
return null!==(r=null==e?void 0:e.filter((e=>e)).join(t))&&void 0!==r?r:""}function rr(e){return nr("{\n",ir(tr(e,"\n")),"\n}")}function nr(e,t,r=""){return null!=t&&""!==t?e+t+r:""}function ir(e){return nr("  ",e.replace(/\n/g,"\n  "))}function or(e){var t
return null!==(t=null==e?void 0:e.some((e=>e.includes("\n"))))&&void 0!==t&&t}var sr,ar=Object.assign((function(e){var t=sr.get(e)
return t||(t=function(e){return dt(e,er)}(e),sr.set(e,t)),t}),{reset:function(){sr=new pe(ye.print||2e3)}})
ar.reset(),!1!==globalThis.__DEV__&&be("print",(function(){return sr?sr.size:0}))
var cr={http:{includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},ur=function(e,t){return t(e)}
function lr(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
return r.unshift(t),fr.apply(void 0,u([e,ur],r,!1))}function fr(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i={},s={}
r.forEach((function(e){i=o(o(o({},i),e.options),{headers:o(o({},i.headers),e.headers)}),e.credentials&&(i.credentials=e.credentials),s=o(o({},s),e.http)})),i.headers&&(i.headers=function(e,t){if(!t){var r=Object.create(null)
return Object.keys(Object(e)).forEach((function(t){r[t.toLowerCase()]=e[t]})),r}var n=Object.create(null)
Object.keys(Object(e)).forEach((function(t){n[t.toLowerCase()]={originalName:t,value:e[t]}}))
var i=Object.create(null)
return Object.keys(n).forEach((function(e){i[n[e].originalName]=n[e].value})),i}(i.headers,s.preserveHeaderCase))
var a=e.operationName,c=e.extensions,u=e.variables,l=e.query,f={operationName:a,variables:u}
return s.includeExtensions&&(f.extensions=c),s.includeQuery&&(f.query=t(l,ar)),{options:i,body:f}}function hr(e,t){var r=[],n=function(e,t){r.push("".concat(e,"=").concat(encodeURIComponent(t)))}
if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0
try{i=gt(t.variables,"Variables map")}catch(e){return{parseError:e}}n("variables",i)}if(t.extensions){var o=void 0
try{o=gt(t.extensions,"Extensions map")}catch(e){return{parseError:e}}n("extensions",o)}var s="",a=e,c=e.indexOf("#");-1!==c&&(s=e.substr(c),a=e.substr(0,c))
var u=-1===a.indexOf("?")?"?":"&"
return{newURI:a+u+r.join("&")+s}}function pr(e){return new X((function(t){t.error(e)}))}var dr={kind:ft.FIELD,name:{kind:ft.NAME,value:"__typename"}}
function vr(e,t){return!e||e.selectionSet.selections.every((function(e){return e.kind===ft.FRAGMENT_SPREAD&&vr(t[e.name.value],t)}))}function yr(e){return vr(Be(e)||function(e){x("Document"===e.kind,78),x(e.definitions.length<=1,79)
var t=e.definitions[0]
return x("FragmentDefinition"===t.kind,80),t}(e),te(We(e)))?null:e}function mr(e){var t=new Map
return function(r){void 0===r&&(r=e)
var n=t.get(r)
return n||t.set(r,n={variables:new Set,fragmentSpreads:new Set}),n}}function br(e,t){ze(t)
for(var r=mr(""),n=mr(""),i=function(e){for(var t=0,i=void 0;t<e.length&&(i=e[t]);++t)if(!Nt(i)){if(i.kind===ft.OPERATION_DEFINITION)return r(i.name&&i.name.value)
if(i.kind===ft.FRAGMENT_DEFINITION)return n(i.name.value)}return!1!==globalThis.__DEV__&&x.error(83),null},s=0,a=t.definitions.length-1;a>=0;--a)t.definitions[a].kind===ft.OPERATION_DEFINITION&&++s
var c,u,l,f=(c=e,u=new Map,l=new Map,c.forEach((function(e){e&&(e.name?u.set(e.name,e):e.test&&l.set(e.test,e))})),function(e){var t=u.get(e.name.value)
return!t&&l.size&&l.forEach((function(r,n){n(e)&&(t=r)})),t}),h=function(e){return At(e)&&e.map(f).some((function(e){return e&&e.remove}))},p=new Map,d=!1,v={enter:function(e){if(h(e.directives))return d=!0,null}},y=dt(t,{Field:v,InlineFragment:v,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(e,t,r,n,o){var s=i(o)
s&&s.variables.add(e.name.value)}},FragmentSpread:{enter:function(e,t,r,n,o){if(h(e.directives))return d=!0,null
var s=i(o)
s&&s.fragmentSpreads.add(e.name.value)}},FragmentDefinition:{enter:function(e,t,r,n){p.set(JSON.stringify(n),e)},leave:function(e,t,r,i){return e===p.get(JSON.stringify(i))?e:s>0&&e.selectionSet.selections.every((function(e){return e.kind===ft.FIELD&&"__typename"===e.name.value}))?(n(e.name.value).removed=!0,d=!0,null):void 0}},Directive:{leave:function(e){if(f(e))return d=!0,null}}})
if(!d)return t
var m=function(e){return e.transitiveVars||(e.transitiveVars=new Set(e.variables),e.removed||e.fragmentSpreads.forEach((function(t){m(n(t)).transitiveVars.forEach((function(t){e.transitiveVars.add(t)}))}))),e},b=new Set
y.definitions.forEach((function(e){e.kind===ft.OPERATION_DEFINITION?m(r(e.name&&e.name.value)).fragmentSpreads.forEach((function(e){b.add(e)})):e.kind!==ft.FRAGMENT_DEFINITION||0!==s||n(e.name.value).removed||b.add(e.name.value)})),b.forEach((function(e){m(n(e)).fragmentSpreads.forEach((function(e){b.add(e)}))}))
var g={enter:function(e){if(t=e.name.value,!b.has(t)||n(t).removed)return null
var t}}
return yr(dt(y,{FragmentSpread:g,FragmentDefinition:g,OperationDefinition:{leave:function(e){if(e.variableDefinitions){var t=m(r(e.name&&e.name.value)).transitiveVars
if(t.size<e.variableDefinitions.length)return o(o({},e),{variableDefinitions:e.variableDefinitions.filter((function(e){return t.has(e.variable.name.value)}))})}}}}))}var gr=Object.assign((function(e){return dt(e,{SelectionSet:{enter:function(e,t,r){if(!r||r.kind!==ft.OPERATION_DEFINITION){var n=e.selections
if(n&&!n.some((function(e){return Qe(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))){var i=r
if(!(Qe(i)&&i.directives&&i.directives.some((function(e){return"export"===e.name.value}))))return o(o({},e),{selections:u(u([],n,!0),[dr],!1)})}}}}})}),{added:function(e){return e===dr}})
function Er(e){return"query"===Ge(e).operation?e:dt(e,{OperationDefinition:{enter:function(e){return o(o({},e),{operation:"query"})}}})}function _r(e){return ze(e),br([{test:function(e){return"client"===e.name.value},remove:!0}],e)}var Or=_((function(){return fetch})),wr=function(e){void 0===e&&(e={})
var t=e.uri,r=void 0===t?"/graphql":t,n=e.fetch,i=e.print,u=void 0===i?ur:i,l=e.includeExtensions,f=e.preserveHeaderCase,h=e.useGETForQueries,p=e.includeUnusedVariables,d=void 0!==p&&p,v=s(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"])
!1!==globalThis.__DEV__&&Ut(n||Or)
var y={http:{includeExtensions:l,preserveHeaderCase:f},options:v.fetchOptions,credentials:v.credentials,headers:v.headers}
return new Xe((function(e){var t=Et(e,r),i=e.getContext(),s={}
if(i.clientAwareness){var l=i.clientAwareness,f=l.name,p=l.version
f&&(s["apollographql-client-name"]=f),p&&(s["apollographql-client-version"]=p)}var v=o(o({},s),i.headers),m={http:i.http,options:i.fetchOptions,credentials:i.credentials,headers:v}
if(mt(["client"],e.query)){var b=_r(e.query)
if(!b)return pr(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."))
e.query=b}var g,E,O,w,k,T=fr(e,u,cr,y,m),S=T.options,D=T.body
D.variables&&!d&&(D.variables=(g=D.variables,E=e.query,O=o({},g),w=new Set(Object.keys(g)),dt(E,{Variable:function(e,t,r){r&&"VariableDefinition"!==r.kind&&w.delete(e.name.value)}}),w.forEach((function(e){delete O[e]})),O)),S.signal||"undefined"==typeof AbortController||(k=new AbortController,S.signal=k.signal)
var I,N="OperationDefinition"===(I=Ge(e.query)).kind&&"subscription"===I.operation,A=mt(["defer"],e.query)
if(h&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(S.method="GET"),A||N){S.headers=S.headers||{}
var R="multipart/mixed;"
N&&A&&!1!==globalThis.__DEV__&&x.warn(38),N?R+="boundary=graphql;subscriptionSpec=1.0,application/json":A&&(R+="deferSpec=20220824,application/json"),S.headers.accept=R}if("GET"===S.method){var C=hr(t,D),F=C.newURI,P=C.parseError
if(P)return pr(P)
t=F}else try{S.body=gt(D,"Payload")}catch(P){return pr(P)}return new X((function(r){var i=n||_((function(){return fetch}))||Or,s=r.next.bind(r)
return i(t,S).then((function(t){var r
e.setContext({response:t})
var n=null===(r=t.headers)||void 0===r?void 0:r.get("content-type")
return null!==n&&/^multipart\/mixed/i.test(n)?function(e,t){return a(this,void 0,void 0,(function(){var r,n,i,s,a,u,l,f,h,p,d,v,y,m,b,g,E,_,O,w,k,T,S,x
return c(this,(function(c){switch(c.label){case 0:if(void 0===TextDecoder)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.")
r=new TextDecoder("utf-8"),n=null===(x=e.headers)||void 0===x?void 0:x.get("content-type"),i="boundary=",s=(null==n?void 0:n.includes(i))?null==n?void 0:n.substring((null==n?void 0:n.indexOf(i))+9).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",a="\r\n--".concat(s),u="",l=function(e){var t,r,n,i=e
if(e.body&&(i=e.body),kt&&i[Symbol.asyncIterator])return function(e){var t,r=e[Symbol.asyncIterator]()
return(t={next:function(){return r.next()}})[Symbol.asyncIterator]=function(){return this},t}(i)
if(function(e){return!!e.getReader}(i))return Tt(i.getReader())
if(function(e){return!!e.stream}(i))return Tt(i.stream().getReader())
if(function(e){return!!e.arrayBuffer}(i))return t=i.arrayBuffer(),r=!1,n={next:function(){return r?Promise.resolve({value:void 0,done:!0}):(r=!0,new Promise((function(e,r){t.then((function(t){e({value:t,done:!1})})).catch(r)})))}},kt&&(n[Symbol.asyncIterator]=function(){return this}),n
if(function(e){return!!e.pipe}(i))return function(e){var t=null,r=null,n=!1,i=[],o=[]
function s(e){if(!r){if(o.length){var t=o.shift()
if(Array.isArray(t)&&t[0])return t[0]({value:e,done:!1})}i.push(e)}}function a(e){r=e,o.slice().forEach((function(t){t[1](e)})),!t||t()}function c(){n=!0,o.slice().forEach((function(e){e[0]({value:void 0,done:!0})})),!t||t()}t=function(){t=null,e.removeListener("data",s),e.removeListener("error",a),e.removeListener("end",c),e.removeListener("finish",c),e.removeListener("close",c)},e.on("data",s),e.on("error",a),e.on("end",c),e.on("finish",c),e.on("close",c)
var u={next:function(){return new Promise((function(e,t){return r?t(r):i.length?e({value:i.shift(),done:!1}):n?e({value:void 0,done:!0}):void o.push([e,t])}))}}
return kt&&(u[Symbol.asyncIterator]=function(){return this}),u}(i)
throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}(e),f=!0,c.label=1
case 1:return f?[4,l.next()]:[3,3]
case 2:for(h=c.sent(),p=h.value,d=h.done,v="string"==typeof p?p:r.decode(p),y=u.length-a.length+1,f=!d,m=(u+=v).indexOf(a,y);m>-1;){if(b=void 0,T=[u.slice(0,m),u.slice(m+a.length)],u=T[1],g=(b=T[0]).indexOf("\r\n\r\n"),E=Qt(b.slice(0,g)),(_=E["content-type"])&&-1===_.toLowerCase().indexOf("application/json"))throw new Error("Unsupported patch content type: application/json is required.")
if(O=b.slice(g))if(w=zt(e,O),Object.keys(w).length>1||"data"in w||"incremental"in w||"errors"in w||"payload"in w)if(Lt(w)){if(k={},"payload"in w){if(1===Object.keys(w).length&&null===w.payload)return[2]
k=o({},w.payload)}"errors"in w&&(k=o(o({},k),{extensions:o(o({},"extensions"in k?k.extensions:null),(S={},S[xt]=w.errors,S))})),t(k)}else t(w)
else if(1===Object.keys(w).length&&"hasNext"in w&&!w.hasNext)return[2]
m=u.indexOf(a)}return[3,1]
case 3:return[2]}}))}))}(t,s):Bt(e)(t).then(s)})).then((function(){k=void 0,r.complete()})).catch((function(e){k=void 0,function(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}(e,r)})),function(){k&&k.abort()}}))}))},kr=function(e){function t(t){void 0===t&&(t={})
var r=e.call(this,wr(t).request)||this
return r.options=t,r}return i(t,e),t}(Xe)
const{toString:Tr,hasOwnProperty:Sr}=Object.prototype,xr=Function.prototype.toString,Dr=new Map
function Ir(e,t){try{return Ar(e,t)}finally{Dr.clear()}}const Nr=Ir
function Ar(e,t){if(e===t)return!0
const r=Tr.call(e)
if(r!==Tr.call(t))return!1
switch(r){case"[object Array]":if(e.length!==t.length)return!1
case"[object Object]":{if(Pr(e,t))return!0
const r=Rr(e),n=Rr(t),i=r.length
if(i!==n.length)return!1
for(let e=0;e<i;++e)if(!Sr.call(t,r[e]))return!1
for(let o=0;o<i;++o){const n=r[o]
if(!Ar(e[n],t[n]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message
case"[object Number]":if(e!=e)return t!=t
case"[object Boolean]":case"[object Date]":return+e==+t
case"[object RegExp]":case"[object String]":return e==`${t}`
case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1
if(Pr(e,t))return!0
const n=e.entries(),i="[object Map]"===r
for(;;){const e=n.next()
if(e.done)break
const[r,o]=e.value
if(!t.has(r))return!1
if(i&&!Ar(o,t.get(r)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t)
case"[object DataView]":{let r=e.byteLength
if(r===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const r=xr.call(e)
return r===xr.call(t)&&!function(e,t){const r=e.length-t.length
return r>=0&&e.indexOf(t,r)===r}(r,Fr)}}return!1}function Rr(e){return Object.keys(e).filter(Cr,e)}function Cr(e){return void 0!==this[e]}const Fr="{ [native code] }"
function Pr(e,t){let r=Dr.get(e)
if(r){if(r.has(t))return!0}else Dr.set(e,r=new Set)
return r.add(t),!1}const jr=()=>Object.create(null),{forEach:Mr,slice:Lr}=Array.prototype,{hasOwnProperty:qr}=Object.prototype
class Vr{constructor(e=!0,t=jr){this.weakness=e,this.makeData=t}lookup(){return this.lookupArray(arguments)}lookupArray(e){let t=this
return Mr.call(e,(e=>t=t.getChildTrie(e))),qr.call(t,"data")?t.data:t.data=this.makeData(Lr.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let t=this
for(let r=0,n=e.length;t&&r<n;++r){const n=t.mapFor(e[r],!1)
t=n&&n.get(e[r])}return t&&t.data}remove(){return this.removeArray(arguments)}removeArray(e){let t
if(e.length){const r=e[0],n=this.mapFor(r,!1),i=n&&n.get(r)
i&&(t=i.removeArray(Lr.call(e,1)),i.data||i.weak||i.strong&&i.strong.size||n.delete(r))}else t=this.data,delete this.data
return t}getChildTrie(e){const t=this.mapFor(e,!0)
let r=t.get(e)
return r||t.set(e,r=new Vr(this.weakness,this.makeData)),r}mapFor(e,t){return this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break
case"function":return!0}return!1}(e)?this.weak||(t?this.weak=new WeakMap:void 0):this.strong||(t?this.strong=new Map:void 0)}}const Qr=()=>Object.create(null),{forEach:zr,slice:Br}=Array.prototype,{hasOwnProperty:Ur}=Object.prototype
class Wr{constructor(e=!0,t=Qr){this.weakness=e,this.makeData=t}lookup(...e){return this.lookupArray(e)}lookupArray(e){let t=this
return zr.call(e,(e=>t=t.getChildTrie(e))),Ur.call(t,"data")?t.data:t.data=this.makeData(Br.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let t=this
for(let r=0,n=e.length;t&&r<n;++r){const n=this.weakness&&Kr(e[r])?t.weak:t.strong
t=n&&n.get(e[r])}return t&&t.data}getChildTrie(e){const t=this.weakness&&Kr(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map)
let r=t.get(e)
return r||t.set(e,r=new Wr(this.weakness,this.makeData)),r}}function Kr(e){switch(typeof e){case"object":if(null===e)break
case"function":return!0}return!1}let Gr=null
const Yr={}
let $r=1
function Jr(e){try{return e()}catch(e){}}const Hr="@wry/context:Slot",Xr=Jr((()=>globalThis))||Jr((()=>global))||Object.create(null),Zr=Xr[Hr]||Array[Hr]||function(e){try{Object.defineProperty(Xr,Hr,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(class{constructor(){this.id=["slot",$r++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=Gr;e;e=e.parent)if(this.id in e.slots){const t=e.slots[this.id]
if(t===Yr)break
return e!==Gr&&(Gr.slots[this.id]=t),!0}return Gr&&(Gr.slots[this.id]=Yr),!1}getValue(){if(this.hasValue())return Gr.slots[this.id]}withValue(e,t,r,n){const i={__proto__:null,[this.id]:e},o=Gr
Gr={parent:o,slots:i}
try{return t.apply(n,r)}finally{Gr=o}}static bind(e){const t=Gr
return function(){const r=Gr
try{return Gr=t,e.apply(this,arguments)}finally{Gr=r}}}static noContext(e,t,r){if(!Gr)return e.apply(r,t)
{const n=Gr
try{return Gr=null,e.apply(r,t)}finally{Gr=n}}}}),{bind:en,noContext:tn}=Zr,rn=new Zr,{hasOwnProperty:nn}=Object.prototype,on=Array.from||function(e){const t=[]
return e.forEach((e=>t.push(e))),t}
function sn(e){const{unsubscribe:t}=e
"function"==typeof t&&(e.unsubscribe=void 0,t())}const an=[],cn=100
function un(e,t){if(!e)throw new Error(t||"assertion failure")}function ln(e,t){const r=e.length
return r>0&&r===t.length&&e[r-1]===t[r-1]}function fn(e){switch(e.length){case 0:throw new Error("unknown value")
case 1:return e[0]
case 2:throw e[1]}}function hn(e){return e.slice(0)}class pn{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++pn.count}peek(){if(1===this.value.length&&!yn(this))return dn(this),this.value[0]}recompute(e){return un(!this.recomputing,"already recomputing"),dn(this),yn(this)?function(e,t){return wn(e),rn.withValue(e,vn,[e,t]),function(e,t){if("function"==typeof e.subscribe)try{sn(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(t){return e.setDirty(),!1}return!0}(e,t)&&function(e){e.dirty=!1,yn(e)||bn(e)}(e),fn(e.value)}(this,e):fn(this.value)}setDirty(){this.dirty||(this.dirty=!0,mn(this),sn(this))}dispose(){this.setDirty(),wn(this),gn(this,((e,t)=>{e.setDirty(),kn(e,this)}))}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=an.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(on(this.deps).forEach((e=>e.delete(this))),this.deps.clear(),an.push(this.deps),this.deps=null)}}function dn(e){const t=rn.getValue()
if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),yn(e)?En(t,e):_n(t,e),t}function vn(e,t){e.recomputing=!0
const{normalizeResult:r}=e
let n
r&&1===e.value.length&&(n=hn(e.value)),e.value.length=0
try{if(e.value[0]=e.fn.apply(null,t),r&&n&&!ln(n,e.value))try{e.value[0]=r(e.value[0],n[0])}catch(e){}}catch(t){e.value[1]=t}e.recomputing=!1}function yn(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function mn(e){gn(e,En)}function bn(e){gn(e,_n)}function gn(e,t){const r=e.parents.size
if(r){const n=on(e.parents)
for(let i=0;i<r;++i)t(n[i],e)}}function En(e,t){un(e.childValues.has(t)),un(yn(t))
const r=!yn(e)
if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=an.pop()||new Set
e.dirtyChildren.add(t),r&&mn(e)}function _n(e,t){un(e.childValues.has(t)),un(!yn(t))
const r=e.childValues.get(t)
0===r.length?e.childValues.set(t,hn(t.value)):ln(r,t.value)||e.setDirty(),On(e,t),yn(e)||bn(e)}function On(e,t){const r=e.dirtyChildren
r&&(r.delete(t),0===r.size&&(an.length<cn&&an.push(r),e.dirtyChildren=null))}function wn(e){e.childValues.size>0&&e.childValues.forEach(((t,r)=>{kn(e,r)})),e.forgetDeps(),un(null===e.dirtyChildren)}function kn(e,t){t.parents.delete(e),e.childValues.delete(t),On(e,t)}pn.count=0
const Tn={setDirty:!0,dispose:!0,forget:!0}
function Sn(e){const t=new Map,r=e&&e.subscribe
function n(e){const n=rn.getValue()
if(n){let i=t.get(e)
i||t.set(e,i=new Set),n.dependOn(i),"function"==typeof r&&(sn(i),i.unsubscribe=r(e))}}return n.dirty=function(e,r){const n=t.get(e)
if(n){const i=r&&nn.call(Tn,r)?r:"setDirty"
on(n).forEach((e=>e[i]())),t.delete(e),sn(n)}},n}let xn
function Dn(...e){return(xn||(xn=new Wr("function"==typeof WeakMap))).lookupArray(e)}const In=new Set
function Nn(e,{max:t=Math.pow(2,16),keyArgs:r,makeCacheKey:n=Dn,normalizeResult:i,subscribe:o,cache:s=le}=Object.create(null)){const a="function"==typeof s?new s(t,(e=>e.dispose())):s,c=function(){const t=n.apply(null,r?r.apply(null,arguments):arguments)
if(void 0===t)return e.apply(null,arguments)
let s=a.get(t)
s||(a.set(t,s=new pn(e)),s.normalizeResult=i,s.subscribe=o,s.forget=()=>a.delete(t))
const c=s.recompute(Array.prototype.slice.call(arguments))
return a.set(t,s),In.add(a),rn.hasValue()||(In.forEach((e=>e.clean())),In.clear()),c}
function u(e){const t=e&&a.get(e)
t&&t.setDirty()}function l(e){const t=e&&a.get(e)
if(t)return t.peek()}function f(e){return!!e&&a.delete(e)}return Object.defineProperty(c,"size",{get:()=>a.size,configurable:!1,enumerable:!1}),Object.freeze(c.options={max:t,keyArgs:r,makeCacheKey:n,normalizeResult:i,subscribe:o,cache:a}),c.dirtyKey=u,c.dirty=function(){u(n.apply(null,arguments))},c.peekKey=l,c.peek=function(){return l(n.apply(null,arguments))},c.forgetKey=f,c.forget=function(){return f(n.apply(null,arguments))},c.makeCacheKey=n,c.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(c)}function An(e){return e}var Rn=function(){function e(e,t){void 0===t&&(t=Object.create(null)),this.resultCache=Ot?new WeakSet:new Set,this.transform=e,t.getCacheKey&&(this.getCacheKey=t.getCacheKey),this.cached=!1!==t.cache,this.resetCache()}return e.prototype.getCacheKey=function(e){return[e]},e.identity=function(){return new e(An,{cache:!1})},e.split=function(t,r,n){return void 0===n&&(n=e.identity()),Object.assign(new e((function(e){return(t(e)?r:n).transformDocument(e)}),{cache:!1}),{left:r,right:n})},e.prototype.resetCache=function(){var t=this
if(this.cached){var r=new Vr(_t)
this.performWork=Nn(e.prototype.performWork.bind(this),{makeCacheKey:function(e){var n=t.getCacheKey(e)
if(n)return x(Array.isArray(n),66),r.lookupArray(n)},max:ye["documentTransform.cache"],cache:ce})}},e.prototype.performWork=function(e){return ze(e),this.transform(e)},e.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e
var t=this.performWork(e)
return this.resultCache.add(t),t},e.prototype.concat=function(t){var r=this
return Object.assign(new e((function(e){return t.transformDocument(r.transformDocument(e))}),{cache:!1}),{left:this,right:t})},e}()
function Cn(e,t,r){return new X((function(n){var i={then:function(e){return new Promise((function(t){return t(e())}))}}
function o(e,t){return function(r){if(e){var o=function(){return n.closed?0:e(r)}
i=i.then(o,o).then((function(e){return n.next(e)}),(function(e){return n.error(e)}))}else n[t](r)}}var s={next:o(t,"next"),error:o(r,"error"),complete:function(){i.then((function(){return n.complete()}))}},a=e.subscribe(s)
return function(){return a.unsubscribe()}}))}function Fn(e){return At(Pn(e))}function Pn(e){var t=At(e.errors)?e.errors.slice(0):[]
return Mt(e)&&At(e.incremental)&&e.incremental.forEach((function(e){e.errors&&t.push.apply(t,e.errors)})),t}function jn(e,t,r){var n=[]
e.forEach((function(e){return e[t]&&n.push(e)})),n.forEach((function(e){return e[t](r)}))}function Mn(e){function t(t){Object.defineProperty(e,t,{value:X})}return wt&&Symbol.species&&t(Symbol.species),t("@@species"),e}function Ln(e){return e&&"function"==typeof e.then}var qn,Vn=function(e){function t(t){var r=e.call(this,(function(e){return r.addObserver(e),function(){return r.removeObserver(e)}}))||this
return r.observers=new Set,r.promise=new Promise((function(e,t){r.resolve=e,r.reject=t})),r.handlers={next:function(e){null!==r.sub&&(r.latest=["next",e],r.notify("next",e),jn(r.observers,"next",e))},error:function(e){var t=r.sub
null!==t&&(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest=["error",e],r.reject(e),r.notify("error",e),jn(r.observers,"error",e))},complete:function(){var e=r,t=e.sub,n=e.sources
if(null!==t){var i=(void 0===n?[]:n).shift()
i?Ln(i)?i.then((function(e){return r.sub=e.subscribe(r.handlers)}),r.handlers.error):r.sub=i.subscribe(r.handlers):(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest&&"next"===r.latest[0]?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),jn(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(e){r.reject(e),r.sources=[],r.handlers.complete()},r.promise.catch((function(e){})),"function"==typeof t&&(t=[new X(t)]),Ln(t)?t.then((function(e){return r.start(e)}),r.handlers.error):r.start(t),r}return i(t,e),t.prototype.start=function(e){void 0===this.sub&&(this.sources=Array.from(e),this.handlers.complete())},t.prototype.deliverLastMessage=function(e){if(this.latest){var t=this.latest[0],r=e[t]
r&&r.call(e,this.latest[1]),null===this.sub&&"next"===t&&e.complete&&e.complete()}},t.prototype.addObserver=function(e){this.observers.has(e)||(this.deliverLastMessage(e),this.observers.add(e))},t.prototype.removeObserver=function(e){this.observers.delete(e)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(e,t){var r=this.nextResultListeners
r.size&&(this.nextResultListeners=new Set,r.forEach((function(r){return r(e,t)})))},t.prototype.beforeNext=function(e){var t=!1
this.nextResultListeners.add((function(r,n){t||(t=!0,e(r,n))}))},t}(X)
function Qn(e){return!!e&&e<7}function zn(e){return 7===e||8===e}function Bn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=Object.create(null)
return e.forEach((function(e){e&&Object.keys(e).forEach((function(t){var n=e[t]
void 0!==n&&(r[t]=n)}))})),r}Mn(Vn),function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(qn||(qn={}))
var Un=Object.prototype.toString
function Wn(e){return Kn(e)}function Kn(e,t){switch(Un.call(e)){case"[object Array]":if((t=t||new Map).has(e))return t.get(e)
var r=e.slice(0)
return t.set(e,r),r.forEach((function(e,n){r[n]=Kn(e,t)})),r
case"[object Object]":if((t=t||new Map).has(e))return t.get(e)
var n=Object.create(Object.getPrototypeOf(e))
return t.set(e,n),Object.keys(e).forEach((function(r){n[r]=Kn(e[r],t)})),n
default:return e}}function Gn(e,t,r,n){var i=t.data,o=s(t,["data"]),a=r.data,c=s(r,["data"])
return Nr(o,c)&&Yn(Ge(e).selectionSet,i,a,{fragmentMap:te(We(e)),variables:n})}function Yn(e,t,r,n){if(t===r)return!0
var i=new Set
return e.selections.every((function(e){if(i.has(e))return!0
if(i.add(e),!yt(e,n.variables))return!0
if($n(e))return!0
if(Qe(e)){var o=qe(e),s=t&&t[o],a=r&&r[o],c=e.selectionSet
if(!c)return Nr(s,a)
var u=Array.isArray(s),l=Array.isArray(a)
if(u!==l)return!1
if(u&&l){var f=s.length
if(a.length!==f)return!1
for(var h=0;h<f;++h)if(!Yn(c,s[h],a[h],n))return!1
return!0}return Yn(c,s,a,n)}var p=re(e,n.fragmentMap)
return p?!!$n(p)||Yn(p.selectionSet,t,r,n):void 0}))}function $n(e){return!!e.directives&&e.directives.some(Jn)}function Jn(e){return"nonreactive"===e.name.value}var Hn=Object.assign,Xn=Object.hasOwnProperty,Zn=function(e){function t(t){var r=t.queryManager,n=t.queryInfo,i=t.options,s=e.call(this,(function(e){try{var t=e._subscription._observer
t&&!t.error&&(t.error=ti)}catch(e){}var r=!s.observers.size
s.observers.add(e)
var n=s.last
return n&&n.error?e.error&&e.error(n.error):n&&n.result&&e.next&&e.next(n.result),r&&s.reobserve().catch((function(){})),function(){s.observers.delete(e)&&!s.observers.size&&s.tearDownQuery()}}))||this
s.observers=new Set,s.subscriptions=new Set,s.queryInfo=n,s.queryManager=r,s.waitForOwnResult=ni(i.fetchPolicy),s.isTornDown=!1
var a=r.defaultOptions.watchQuery,c=(void 0===a?{}:a).fetchPolicy,u=void 0===c?"cache-first":c,l=i.fetchPolicy,f=void 0===l?u:l,h=i.initialFetchPolicy,p=void 0===h?"standby"===f?u:f:h
s.options=o(o({},i),{initialFetchPolicy:p,fetchPolicy:f}),s.queryId=n.queryId||r.generateQueryId()
var d=Be(s.query)
return s.queryName=d&&d.name&&d.name.value,s}return i(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var e=this
return new Promise((function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout((function(){i.unsubscribe()}),0)},error:r},i=e.subscribe(n)}))},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentResult=function(e){void 0===e&&(e=!0)
var t=this.getLastResult(!0),r=this.queryInfo.networkStatus||t&&t.networkStatus||qn.ready,n=o(o({},t),{loading:Qn(r),networkStatus:r}),i=this.options.fetchPolicy,s=void 0===i?"cache-first":i
if(ni(s)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);else if(this.waitForOwnResult)this.queryInfo.updateWatch()
else{var a=this.queryInfo.getDiff();(a.complete||this.options.returnPartialData)&&(n.data=a.result),Ir(n.data,{})&&(n.data=void 0),a.complete?(delete n.partial,!a.complete||n.networkStatus!==qn.loading||"cache-first"!==s&&"cache-only"!==s||(n.networkStatus=qn.ready,n.loading=!1)):n.partial=!0,!1===globalThis.__DEV__||a.complete||this.options.partialRefetch||n.loading||n.data||n.error||ri(a.missing)}return e&&this.updateLastResult(n),n},t.prototype.isDifferentFromLastResult=function(e,t){return!this.last||(this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective?!Gn(this.query,this.last.result,e,this.variables):!Ir(this.last.result,e))||t&&!Ir(this.last.variables,t)},t.prototype.getLast=function(e,t){var r=this.last
if(r&&r[e]&&(!t||Ir(r.variables,this.variables)))return r[e]},t.prototype.getLastResult=function(e){return this.getLast("result",e)},t.prototype.getLastError=function(e){return this.getLast("error",e)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(e){var t,r={pollInterval:0},n=this.options.fetchPolicy
if(r.fetchPolicy="cache-and-network"===n?n:"no-cache"===n?"no-cache":"network-only",!1!==globalThis.__DEV__&&e&&Xn.call(e,"variables")){var i=Ke(this.query),s=i.variableDefinitions
s&&s.some((function(e){return"variables"===e.variable.name.value}))||!1!==globalThis.__DEV__&&x.warn(20,e,(null===(t=i.name)||void 0===t?void 0:t.value)||i)}return e&&!Ir(this.options.variables,e)&&(r.variables=this.options.variables=o(o({},this.options.variables),e)),this.queryInfo.resetLastWrite(),this.reobserve(r,qn.refetch)},t.prototype.fetchMore=function(e){var t=this,r=o(o({},e.query?e:o(o(o(o({},this.options),{query:this.options.query}),e),{variables:o(o({},this.options.variables),e.variables)})),{fetchPolicy:"no-cache"})
r.query=this.transformDocument(r.query)
var n=this.queryManager.generateQueryId()
this.lastQuery=e.query?this.transformDocument(this.options.query):r.query
var i=this.queryInfo,s=i.networkStatus
i.networkStatus=qn.fetchMore,r.notifyOnNetworkStatusChange&&this.observe()
var a=new Set
return this.queryManager.fetchQuery(n,r,qn.fetchMore).then((function(o){return t.queryManager.removeQuery(n),i.networkStatus===qn.fetchMore&&(i.networkStatus=s),t.queryManager.cache.batch({update:function(n){var i=e.updateQuery
i?n.updateQuery({query:t.query,variables:t.variables,returnPartialData:!0,optimistic:!1},(function(e){return i(e,{fetchMoreResult:o.data,variables:r.variables})})):n.writeQuery({query:r.query,variables:r.variables,data:o.data})},onWatchUpdated:function(e){a.add(e.query)}}),o})).finally((function(){a.has(t.query)||ei(t)}))},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:function(r){var n=e.updateQuery
n&&t.updateQuery((function(e,t){var i=t.variables
return n(e,{subscriptionData:r,variables:i})}))},error:function(t){e.onError?e.onError(t):!1!==globalThis.__DEV__&&x.error(21,t)}})
return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){return this.reobserve(e)},t.prototype.silentSetOptions=function(e){var t=Bn(this.options,e||{})
Hn(this.options,t)},t.prototype.setVariables=function(e){return Ir(this.variables,e)?this.observers.size?this.result():Promise.resolve():(this.options.variables=e,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},qn.setVariables):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,r=e(t.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,{variables:this.variables})
r&&(t.cache.writeQuery({query:this.options.query,data:r,variables:this.variables}),t.broadcastQueries())},t.prototype.startPolling=function(e){this.options.pollInterval=e,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(e,t){if(t.nextFetchPolicy){var r=t.fetchPolicy,n=void 0===r?"cache-first":r,i=t.initialFetchPolicy,o=void 0===i?n:i
"standby"===n||("function"==typeof t.nextFetchPolicy?t.fetchPolicy=t.nextFetchPolicy(n,{reason:e,options:t,observable:this,initialFetchPolicy:o}):t.fetchPolicy="variables-changed"===e?o:t.nextFetchPolicy)}return t.fetchPolicy},t.prototype.fetch=function(e,t,r){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,e,t,r)},t.prototype.updatePolling=function(){var e=this
if(!this.queryManager.ssrMode){var t=this.pollingInfo,r=this.options.pollInterval
if(r){if(!t||t.interval!==r){x(r,22),(t||(this.pollingInfo={})).interval=r
var n=function(){var t,r
e.pollingInfo&&(Qn(e.queryInfo.networkStatus)||(null===(r=(t=e.options).skipPollAttempt)||void 0===r?void 0:r.call(t))?i():e.reobserve({fetchPolicy:"no-cache"===e.options.initialFetchPolicy?"no-cache":"network-only"},qn.poll).then(i,i))},i=function(){var t=e.pollingInfo
t&&(clearTimeout(t.timeout),t.timeout=setTimeout(n,t.interval))}
i()}}else t&&(clearTimeout(t.timeout),delete this.pollingInfo)}},t.prototype.updateLastResult=function(e,t){void 0===t&&(t=this.variables)
var r=this.getLastError()
return r&&this.last&&!Ir(t,this.last.variables)&&(r=void 0),this.last=o({result:this.queryManager.assumeImmutableResults?e:Wn(e),variables:t},r?{error:r}:null)},t.prototype.reobserveAsConcast=function(e,t){var r=this
this.isTornDown=!1
var n=t===qn.refetch||t===qn.fetchMore||t===qn.poll,i=this.options.variables,s=this.options.fetchPolicy,a=Bn(this.options,e||{}),c=n?a:Hn(this.options,a),u=this.transformDocument(c.query)
this.lastQuery=u,n||(this.updatePolling(),e&&e.variables&&!Ir(e.variables,i)&&"standby"!==c.fetchPolicy&&c.fetchPolicy===s&&(this.applyNextFetchPolicy("variables-changed",c),void 0===t&&(t=qn.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=ni(c.fetchPolicy))
var l=function(){r.concast===p&&(r.waitForOwnResult=!1)},f=c.variables&&o({},c.variables),h=this.fetch(c,t,u),p=h.concast,d=h.fromLink,v={next:function(e){Ir(r.variables,f)&&(l(),r.reportResult(e,f))},error:function(e){Ir(r.variables,f)&&(l(),r.reportError(e,f))}}
return n||!d&&this.concast||(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=p,this.observer=v),p.addObserver(v),p},t.prototype.reobserve=function(e,t){return this.reobserveAsConcast(e,t).promise},t.prototype.resubscribeAfterError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=this.last
this.resetLastResults()
var n=this.subscribe.apply(this,e)
return this.last=r,n},t.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},t.prototype.reportResult=function(e,t){var r=this.getLastError(),n=this.isDifferentFromLastResult(e,t);(r||!e.partial||this.options.returnPartialData)&&this.updateLastResult(e,t),(r||n)&&jn(this.observers,"next",e)},t.prototype.reportError=function(e,t){var r=o(o({},this.getLastResult()),{error:e,errors:e.graphQLErrors,networkStatus:qn.error,loading:!1})
this.updateLastResult(r,t),jn(this.observers,"error",this.last.error=e)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(e){return this.queryManager.transform(e)},t}(X)
function ei(e){var t=e.options,r=t.fetchPolicy,n=t.nextFetchPolicy
return"cache-and-network"===r||"network-only"===r?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(e,t){return this.nextFetchPolicy=n,"function"==typeof this.nextFetchPolicy?this.nextFetchPolicy(e,t):r}}):e.reobserve()}function ti(e){!1!==globalThis.__DEV__&&x.error(23,e.message,e.stack)}function ri(e){!1!==globalThis.__DEV__&&e&&!1!==globalThis.__DEV__&&x.debug(24,e)}function ni(e){return"network-only"===e||"no-cache"===e||"standby"===e}function ii(e){return e.kind===ft.FIELD||e.kind===ft.FRAGMENT_SPREAD||e.kind===ft.INLINE_FRAGMENT}Mn(Zn)
var oi=new Zr,si=new WeakMap
function ai(e){var t=si.get(e)
return t||si.set(e,t={vars:new Set,dep:Sn()}),t}function ci(e){ai(e).vars.forEach((function(t){return t.forgetCache(e)}))}function ui(e){var t=new Set,r=new Set,n=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach((function(e){ai(e).dep.dirty(n),function(e){e.broadcastWatches&&e.broadcastWatches()}(e)}))
var s=Array.from(r)
r.clear(),s.forEach((function(t){return t(e)}))}}else{var a=oi.getValue()
a&&(i(a),ai(a).dep(n))}return e}
n.onNextChange=function(e){return r.add(e),function(){r.delete(e)}}
var i=n.attachCache=function(e){return t.add(e),ai(e).vars.add(n),n}
return n.forgetCache=function(e){return t.delete(e)},n}var li=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,i=e.fragmentMatcher
this.selectionsToResolveCache=new WeakMap,this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this
this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach((function(e){t.resolvers=Ct(t.resolvers,e)})):this.resolvers=Ct(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){return a(this,arguments,void 0,(function(e){var t=e.document,r=e.remoteResult,n=e.context,i=e.variables,s=e.onlyRunForcedResolvers,a=void 0!==s&&s
return c(this,(function(e){return t?[2,this.resolveDocument(t,r.data,n,i,this.fragmentMatcher,a).then((function(e){return o(o({},r),{data:e.result})}))]:[2,r]}))}))},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return mt(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return _r(e)},e.prototype.prepareContext=function(e){var t=this.cache
return o(o({},e),{cache:t,getCacheKey:function(e){return t.identify(e)}})},e.prototype.addExportedVariables=function(e){return a(this,arguments,void 0,(function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),c(this,(function(n){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then((function(e){return o(o({},t),e.exportedVariables)}))]:[2,o({},t)]}))}))},e.prototype.shouldForceResolvers=function(e){var t=!1
return dt(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some((function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value}))))return pt}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:Er(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t){return a(this,arguments,void 0,(function(e,t,r,n,i,s){var a,u,l,f,h,p,d,v,y,m
return void 0===r&&(r={}),void 0===n&&(n={}),void 0===i&&(i=function(){return!0}),void 0===s&&(s=!1),c(this,(function(c){return a=Ge(e),u=We(e),l=te(u),f=this.collectSelectionsToResolve(a,l),h=a.operation,p=h?h.charAt(0).toUpperCase()+h.slice(1):"Query",v=(d=this).cache,y=d.client,m={fragmentMap:l,context:o(o({},r),{cache:v,client:y}),variables:n,fragmentMatcher:i,defaultOperationType:p,exportedVariables:{},selectionsToResolve:f,onlyRunForcedResolvers:s},[2,this.resolveSelectionSet(a.selectionSet,!1,t,m).then((function(e){return{result:e,exportedVariables:m.exportedVariables}}))]}))}))},e.prototype.resolveSelectionSet=function(e,t,r,n){return a(this,void 0,void 0,(function(){var i,o,s,u,l,f=this
return c(this,(function(h){return i=n.fragmentMap,o=n.context,s=n.variables,u=[r],l=function(e){return a(f,void 0,void 0,(function(){var a,l
return c(this,(function(c){return(t||n.selectionsToResolve.has(e))&&yt(e,s)?Qe(e)?[2,this.resolveField(e,t,r,n).then((function(t){var r
void 0!==t&&u.push(((r={})[qe(e)]=t,r))}))]:(function(e){return"InlineFragment"===e.kind}(e)?a=e:(a=i[e.name.value],x(a,18,e.name.value)),a&&a.typeCondition&&(l=a.typeCondition.name.value,n.fragmentMatcher(r,l,o))?[2,this.resolveSelectionSet(a.selectionSet,t,r,n).then((function(e){u.push(e)}))]:[2]):[2]}))}))},[2,Promise.all(e.selections.map(l)).then((function(){return Ft(u)}))]}))}))},e.prototype.resolveField=function(e,t,r,n){return a(this,void 0,void 0,(function(){var i,o,s,a,u,l,f,h,p,d=this
return c(this,(function(c){return r?(i=n.variables,o=e.name.value,s=qe(e),a=o!==s,u=r[s]||r[o],l=Promise.resolve(u),n.onlyRunForcedResolvers&&!this.shouldForceResolvers(e)||(f=r.__typename||n.defaultOperationType,(h=this.resolvers&&this.resolvers[f])&&(p=h[a?o:s])&&(l=Promise.resolve(oi.withValue(this.cache,p,[r,Le(e,i),n.context,{field:e,fragmentMap:n.fragmentMap}])))),[2,l.then((function(r){var i,o
if(void 0===r&&(r=u),e.directives&&e.directives.forEach((function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach((function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(n.exportedVariables[e.value.value]=r)}))})),!e.selectionSet)return r
if(null==r)return r
var s=null!==(o=null===(i=e.directives)||void 0===i?void 0:i.some((function(e){return"client"===e.name.value})))&&void 0!==o&&o
return Array.isArray(r)?d.resolveSubSelectedArray(e,t||s,r,n):e.selectionSet?d.resolveSelectionSet(e.selectionSet,t||s,r,n):void 0}))]):[2,null]}))}))},e.prototype.resolveSubSelectedArray=function(e,t,r,n){var i=this
return Promise.all(r.map((function(r){return null===r?null:Array.isArray(r)?i.resolveSubSelectedArray(e,t,r,n):e.selectionSet?i.resolveSelectionSet(e.selectionSet,t,r,n):void 0})))},e.prototype.collectSelectionsToResolve=function(e,t){var r=function(e){return!Array.isArray(e)},n=this.selectionsToResolveCache
return function e(i){if(!n.has(i)){var o=new Set
n.set(i,o),dt(i,{Directive:function(e,t,n,i,s){"client"===e.name.value&&s.forEach((function(e){r(e)&&ii(e)&&o.add(e)}))},FragmentSpread:function(n,i,s,a,c){var u=t[n.name.value]
x(u,19,n.name.value)
var l=e(u)
l.size>0&&(c.forEach((function(e){r(e)&&ii(e)&&o.add(e)})),o.add(n),l.forEach((function(e){o.add(e)})))}})}return n.get(i)}(e)},e}(),fi=new(_t?WeakMap:Map)
function hi(e,t){var r=e[t]
"function"==typeof r&&(e[t]=function(){return fi.set(e,(fi.get(e)+1)%1e15),r.apply(this,arguments)})}function pi(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var di=function(){function e(e,t){void 0===t&&(t=e.generateQueryId()),this.queryId=t,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null
var r=this.cache=e.cache
fi.has(r)||(fi.set(r,0),hi(r,"evict"),hi(r,"modify"),hi(r,"reset"))}return e.prototype.init=function(e){var t=e.networkStatus||qn.loading
return this.variables&&this.networkStatus!==qn.loading&&!Ir(this.variables,e.variables)&&(t=qn.setVariables),Ir(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:t}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},e.prototype.reset=function(){pi(this),this.dirty=!1},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var e=this.getDiffOptions()
if(this.lastDiff&&Ir(e,this.lastDiff.options))return this.lastDiff.diff
this.updateWatch(this.variables)
var t=this.observableQuery
if(t&&"no-cache"===t.options.fetchPolicy)return{complete:!1}
var r=this.cache.diff(e)
return this.updateLastDiff(r,e),r},e.prototype.updateLastDiff=function(e,t){this.lastDiff=e?{diff:e,options:t||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(e){var t
return void 0===e&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:null===(t=this.observableQuery)||void 0===t?void 0:t.options.canonizeResults}},e.prototype.setDiff=function(e){var t,r=this,n=this.lastDiff&&this.lastDiff.diff;(!e||e.complete||(null===(t=this.observableQuery)||void 0===t?void 0:t.options.returnPartialData)||n&&n.complete)&&(this.updateLastDiff(e),this.dirty||Ir(n&&n.result,e&&e.result)||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout((function(){return r.notify()}),0))))},e.prototype.setObservableQuery=function(e){var t=this
e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){t.getDiff().fromOptimisticTransaction?e.observe():ei(e)})):delete this.oqListener)},e.prototype.notify=function(){var e=this
pi(this),this.shouldNotify()&&this.listeners.forEach((function(t){return t(e)})),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1
if(Qn(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy
if("cache-only"!==e&&"cache-and-network"!==e)return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel
var t=this.observableQuery
t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(e){var t=this
void 0===e&&(e=this.variables)
var r=this.observableQuery
if(!r||"no-cache"!==r.options.fetchPolicy){var n=o(o({},this.getDiffOptions(e)),{watcher:this,callback:function(e){return t.setDiff(e)}})
this.lastWatch&&Ir(n,this.lastWatch)||(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=n))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(e,t){var r=this.lastWrite
return!(r&&r.dmCount===fi.get(this.cache)&&Ir(t,r.variables)&&Ir(e.data,r.result.data))},e.prototype.markResult=function(e,t,r,n){var i=this,o=new jt,s=At(e.errors)?e.errors.slice(0):[]
if(this.reset(),"incremental"in e&&At(e.incremental)){var a=qt(this.getDiff().result,e)
e.data=a}else if("hasNext"in e&&e.hasNext){var c=this.getDiff()
e.data=o.merge(c.result,e.data)}this.graphQLErrors=s,"no-cache"===r.fetchPolicy?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(r.variables)):0!==n&&(vi(e,r.errorPolicy)?this.cache.performTransaction((function(o){if(i.shouldWrite(e,r.variables))o.writeQuery({query:t,data:e.data,variables:r.variables,overwrite:1===n}),i.lastWrite={result:e,variables:r.variables,dmCount:fi.get(i.cache)}
else if(i.lastDiff&&i.lastDiff.diff.complete)return void(e.data=i.lastDiff.diff.result)
var s=i.getDiffOptions(r.variables),a=o.diff(s)
!i.stopped&&Ir(i.variables,r.variables)&&i.updateWatch(r.variables),i.updateLastDiff(a,s),a.complete&&(e.data=a.result)})):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=qn.ready},e.prototype.markError=function(e){return this.networkStatus=qn.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},e}()
function vi(e,t){void 0===t&&(t="none")
var r="ignore"===t||"all"===t,n=!Fn(e)
return!n&&r&&e.data&&(n=!0),n}var yi=Object.prototype.hasOwnProperty,mi=Object.create(null),bi=function(){function e(e){var t=e.cache,r=e.link,n=e.defaultOptions,i=e.documentTransform,o=e.queryDeduplication,s=void 0!==o&&o,a=e.onBroadcast,c=e.ssrMode,u=void 0!==c&&c,l=e.clientAwareness,f=void 0===l?{}:l,h=e.localState,p=e.assumeImmutableResults,d=void 0===p?!!t.assumeImmutableResults:p,v=e.defaultContext,y=this
this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new pe(ye["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Vr(!1)
var m=new Rn((function(e){return y.cache.transformDocument(e)}),{cache:!1})
this.cache=t,this.link=r,this.defaultOptions=n||Object.create(null),this.queryDeduplication=s,this.clientAwareness=f,this.localState=h||new li({cache:t}),this.ssrMode=u,this.assumeImmutableResults=d,this.documentTransform=i?m.concat(i).concat(m):m,this.defaultContext=v||Object.create(null),(this.onBroadcast=a)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var e=this
this.queries.forEach((function(t,r){e.stopQueryNoBroadcast(r)})),this.cancelPendingFetches(D(25))},e.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach((function(t){return t(e)})),this.fetchCancelFns.clear()},e.prototype.mutate=function(e){return a(this,arguments,void 0,(function(e){var t,r,n,i,s,a,u,l=e.mutation,f=e.variables,h=e.optimisticResponse,p=e.updateQueries,d=e.refetchQueries,v=void 0===d?[]:d,y=e.awaitRefetchQueries,m=void 0!==y&&y,b=e.update,g=e.onQueryUpdated,E=e.fetchPolicy,_=void 0===E?(null===(a=this.defaultOptions.mutate)||void 0===a?void 0:a.fetchPolicy)||"network-only":E,O=e.errorPolicy,w=void 0===O?(null===(u=this.defaultOptions.mutate)||void 0===u?void 0:u.errorPolicy)||"none":O,k=e.keepRootFields,T=e.context
return c(this,(function(e){switch(e.label){case 0:return x(l,26),x("network-only"===_||"no-cache"===_,27),t=this.generateMutationId(),l=this.cache.transformForLink(this.transform(l)),r=this.getDocumentInfo(l).hasClientExports,f=this.getVariables(l,f),r?[4,this.localState.addExportedVariables(l,f,T)]:[3,2]
case 1:f=e.sent(),e.label=2
case 2:return n=this.mutationStore&&(this.mutationStore[t]={mutation:l,variables:f,loading:!0,error:null}),i=h&&this.markMutationOptimistic(h,{mutationId:t,document:l,variables:f,fetchPolicy:_,errorPolicy:w,context:T,updateQueries:p,update:b,keepRootFields:k}),this.broadcastQueries(),s=this,[2,new Promise((function(e,r){return Cn(s.getObservableFromLink(l,o(o({},T),{optimisticResponse:i?h:void 0}),f,!1),(function(e){if(Fn(e)&&"none"===w)throw new It({graphQLErrors:Pn(e)})
n&&(n.loading=!1,n.error=null)
var r=o({},e)
return"function"==typeof v&&(v=v(r)),"ignore"===w&&Fn(r)&&delete r.errors,s.markMutationResult({mutationId:t,result:r,document:l,variables:f,fetchPolicy:_,errorPolicy:w,context:T,update:b,updateQueries:p,awaitRefetchQueries:m,refetchQueries:v,removeOptimistic:i?t:void 0,onQueryUpdated:g,keepRootFields:k})})).subscribe({next:function(t){s.broadcastQueries(),"hasNext"in t&&!1!==t.hasNext||e(t)},error:function(e){n&&(n.loading=!1,n.error=e),i&&s.cache.removeOptimistic(t),s.broadcastQueries(),r(e instanceof It?e:new It({networkError:e}))}})}))]}}))}))},e.prototype.markMutationResult=function(e,t){var r=this
void 0===t&&(t=this.cache)
var n=e.result,i=[],s="no-cache"===e.fetchPolicy
if(!s&&vi(n,e.errorPolicy)){if(Mt(n)||i.push({result:n.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),Mt(n)&&At(n.incremental)){var a=t.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),c=void 0
a.result&&(c=qt(a.result,n)),void 0!==c&&(n.data=c,i.push({result:c,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var u=e.updateQueries
u&&this.queries.forEach((function(e,o){var s=e.observableQuery,a=s&&s.queryName
if(a&&yi.call(u,a)){var c=u[a],l=r.queries.get(o),f=l.document,h=l.variables,p=t.diff({query:f,variables:h,returnPartialData:!0,optimistic:!1}),d=p.result
if(p.complete&&d){var v=c(d,{mutationResult:n,queryName:f&&Ue(f)||void 0,queryVariables:h})
v&&i.push({result:v,dataId:"ROOT_QUERY",query:f,variables:h})}}}))}if(i.length>0||(e.refetchQueries||"").length>0||e.update||e.onQueryUpdated||e.removeOptimistic){var l=[]
if(this.refetchQueries({updateCache:function(t){s||i.forEach((function(e){return t.write(e)}))
var a,c=e.update,u=!(Mt(a=n)||function(e){return"hasNext"in e&&"data"in e}(a))||Mt(n)&&!n.hasNext
if(c){if(!s){var l=t.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0})
l.complete&&("incremental"in(n=o(o({},n),{data:l.result}))&&delete n.incremental,"hasNext"in n&&delete n.hasNext)}u&&c(t,n,{context:e.context,variables:e.variables})}s||e.keepRootFields||!u||t.modify({id:"ROOT_MUTATION",fields:function(e,t){var r=t.fieldName,n=t.DELETE
return"__typename"===r?e:n}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach((function(e){return l.push(e)})),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(l).then((function(){return n}))}return Promise.resolve(n)},e.prototype.markMutationOptimistic=function(e,t){var r=this,n="function"==typeof e?e(t.variables,{IGNORE:mi}):e
return n!==mi&&(this.cache.recordOptimisticTransaction((function(e){try{r.markMutationResult(o(o({},t),{result:{data:n}}),e)}catch(e){!1!==globalThis.__DEV__&&x.error(e)}}),t.mutationId),!0)},e.prototype.fetchQuery=function(e,t,r){return this.fetchConcastWithInfo(e,t,r).concast.promise},e.prototype.getQueryStore=function(){var e=Object.create(null)
return this.queries.forEach((function(t,r){e[r]={variables:t.variables,networkStatus:t.networkStatus,networkError:t.networkError,graphQLErrors:t.graphQLErrors}})),e},e.prototype.resetErrors=function(e){var t=this.queries.get(e)
t&&(t.networkError=void 0,t.graphQLErrors=[])},e.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},e.prototype.getDocumentInfo=function(e){var t=this.transformCache
if(!t.has(e)){var r={hasClientExports:bt(e),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:mt(["nonreactive"],e),clientQuery:this.localState.clientQuery(e),serverQuery:br([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"}],e),defaultVars:Ye(Be(e)),asQuery:o(o({},e),{definitions:e.definitions.map((function(e){return"OperationDefinition"===e.kind&&"query"!==e.operation?o(o({},e),{operation:"query"}):e}))})}
t.set(e,r)}return t.get(e)},e.prototype.getVariables=function(e,t){return o(o({},this.getDocumentInfo(e).defaultVars),t)},e.prototype.watchQuery=function(e){var t=this.transform(e.query)
void 0===(e=o(o({},e),{variables:this.getVariables(t,e.variables)})).notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1)
var r=new di(this),n=new Zn({queryManager:this,queryInfo:r,options:e})
return n.lastQuery=t,this.queries.set(n.queryId,r),r.init({document:t,observableQuery:n,variables:n.variables}),n},e.prototype.query=function(e,t){var r=this
return void 0===t&&(t=this.generateQueryId()),x(e.query,28),x("Document"===e.query.kind,29),x(!e.returnPartialData,30),x(!e.pollInterval,31),this.fetchQuery(t,o(o({},e),{query:this.transform(e.query)})).finally((function(){return r.stopQuery(t)}))},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){var t=this.queries.get(e)
t&&t.stop()},e.prototype.clearStore=function(e){return void 0===e&&(e={discardWatches:!0}),this.cancelPendingFetches(D(32)),this.queries.forEach((function(e){e.observableQuery?e.networkStatus=qn.loading:e.stop()})),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},e.prototype.getObservableQueries=function(e){var t=this
void 0===e&&(e="active")
var r=new Map,n=new Map,i=new Set
return Array.isArray(e)&&e.forEach((function(e){var r
"string"==typeof e?n.set(e,!1):Z(r=e)&&"Document"===r.kind&&Array.isArray(r.definitions)?n.set(t.transform(e),!1):Z(e)&&e.query&&i.add(e)})),this.queries.forEach((function(t,i){var o=t.observableQuery,s=t.document
if(o){if("all"===e)return void r.set(i,o)
var a=o.queryName
if("standby"===o.options.fetchPolicy||"active"===e&&!o.hasObservers())return;("active"===e||a&&n.has(a)||s&&n.has(s))&&(r.set(i,o),a&&n.set(a,!0),s&&n.set(s,!0))}})),i.size&&i.forEach((function(e){var n=k("legacyOneTimeQuery"),i=t.getQuery(n).init({document:e.query,variables:e.variables}),s=new Zn({queryManager:t,queryInfo:i,options:o(o({},e),{fetchPolicy:"network-only"})})
x(s.queryId===n),i.setObservableQuery(s),r.set(n,s)})),!1!==globalThis.__DEV__&&n.size&&n.forEach((function(e,t){e||!1!==globalThis.__DEV__&&x.warn("string"==typeof t?33:34,t)})),r},e.prototype.reFetchObservableQueries=function(e){var t=this
void 0===e&&(e=!1)
var r=[]
return this.getObservableQueries(e?"all":"active").forEach((function(n,i){var o=n.options.fetchPolicy
n.resetLastResults(),(e||"standby"!==o&&"cache-only"!==o)&&r.push(n.refetch()),t.getQuery(i).setDiff(null)})),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.fetchPolicy,i=e.errorPolicy,o=void 0===i?"none":i,s=e.variables,a=e.context,c=void 0===a?{}:a
r=this.transform(r),s=this.getVariables(r,s)
var u=function(e){return t.getObservableFromLink(r,c,e).map((function(i){"no-cache"!==n&&(vi(i,o)&&t.cache.write({query:r,result:i.data,dataId:"ROOT_SUBSCRIPTION",variables:e}),t.broadcastQueries())
var s=Fn(i),a=function(e){return!!e.extensions&&Array.isArray(e.extensions[xt])}(i)
if(s||a){var c={}
if(s&&(c.graphQLErrors=i.errors),a&&(c.protocolErrors=i.extensions[xt]),"none"===o||a)throw new It(c)}return"ignore"===o&&delete i.errors,i}))}
if(this.getDocumentInfo(r).hasClientExports){var l=this.localState.addExportedVariables(r,s,c).then(u)
return new X((function(e){var t=null
return l.then((function(r){return t=r.subscribe(e)}),e.error),function(){return t&&t.unsubscribe()}}))}return u(s)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach((function(e){return e.notify()}))},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,n){var i,s,a=this
void 0===n&&(n=null!==(i=null==t?void 0:t.queryDeduplication)&&void 0!==i?i:this.queryDeduplication)
var c=this.getDocumentInfo(e),u=c.serverQuery,l=c.clientQuery
if(u){var f=this.inFlightLinkObservables,h=this.link,p={query:u,variables:r,operationName:Ue(u)||void 0,context:this.prepareContext(o(o({},t),{forceFetch:!n}))}
if(t=p.context,n){var d=ar(u),v=Ie(r),y=f.lookup(d,v)
if(!(s=y.observable)){var m=new Vn([Ze(h,p)])
s=y.observable=m,m.beforeNext((function(){f.remove(d,v)}))}}else s=new Vn([Ze(h,p)])}else s=new Vn([X.of({data:{}})]),t=this.prepareContext(t)
return l&&(s=Cn(s,(function(e){return a.localState.runResolvers({document:l,remoteResult:e,context:t,variables:r})}))),s},e.prototype.getResultsFromLink=function(e,t,r){var n=e.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query)
return Cn(this.getObservableFromLink(i,r.context,r.variables),(function(o){var s=Pn(o),a=s.length>0
if(n>=e.lastRequestId){if(a&&"none"===r.errorPolicy)throw e.markError(new It({graphQLErrors:s}))
e.markResult(o,i,r,t),e.markReady()}var c={data:o.data,loading:!1,networkStatus:qn.ready}
return a&&"ignore"!==r.errorPolicy&&(c.errors=s,c.networkStatus=qn.error),c}),(function(t){var r=Dt(t)?t:new It({networkError:t})
throw n>=e.lastRequestId&&e.markError(r),r}))},e.prototype.fetchConcastWithInfo=function(e,t,r,n){var i=this
void 0===r&&(r=qn.loading),void 0===n&&(n=t.query)
var o,s,a=this.getVariables(n,t.variables),c=this.getQuery(e),u=this.defaultOptions.watchQuery,l=t.fetchPolicy,f=void 0===l?u&&u.fetchPolicy||"cache-first":l,h=t.errorPolicy,p=void 0===h?u&&u.errorPolicy||"none":h,d=t.returnPartialData,v=void 0!==d&&d,y=t.notifyOnNetworkStatusChange,m=void 0!==y&&y,b=t.context,g=void 0===b?{}:b,E=Object.assign({},t,{query:n,variables:a,fetchPolicy:f,errorPolicy:p,returnPartialData:v,notifyOnNetworkStatusChange:m,context:g}),_=function(e){E.variables=e
var n=i.fetchQueryByPolicy(c,E,r)
return"standby"!==E.fetchPolicy&&n.sources.length>0&&c.observableQuery&&c.observableQuery.applyNextFetchPolicy("after-fetch",t),n},O=function(){return i.fetchCancelFns.delete(e)}
if(this.fetchCancelFns.set(e,(function(e){O(),setTimeout((function(){return o.cancel(e)}))})),this.getDocumentInfo(E.query).hasClientExports)o=new Vn(this.localState.addExportedVariables(E.query,E.variables,E.context).then(_).then((function(e){return e.sources}))),s=!0
else{var w=_(E.variables)
s=w.fromLink,o=new Vn(w.sources)}return o.promise.then(O,O),{concast:o,fromLink:s}},e.prototype.refetchQueries=function(e){var t=this,r=e.updateCache,n=e.include,i=e.optimistic,o=void 0!==i&&i,s=e.removeOptimistic,a=void 0===s?o?k("refetchQueries"):void 0:s,c=e.onQueryUpdated,u=new Map
n&&this.getObservableQueries(n).forEach((function(e,r){u.set(r,{oq:e,lastDiff:t.getQuery(r).getDiff()})}))
var l=new Map
return r&&this.cache.batch({update:r,optimistic:o&&a||!1,removeOptimistic:a,onWatchUpdated:function(e,t,r){var n=e.watcher instanceof di&&e.watcher.observableQuery
if(n){if(c){u.delete(n.queryId)
var i=c(n,t,r)
return!0===i&&(i=n.refetch()),!1!==i&&l.set(n,i),i}null!==c&&u.set(n.queryId,{oq:n,lastDiff:r,diff:t})}}}),u.size&&u.forEach((function(e,r){var n,i=e.oq,o=e.lastDiff,s=e.diff
if(c){if(!s){var a=i.queryInfo
a.reset(),s=a.getDiff()}n=c(i,s,o)}c&&!0!==n||(n=i.refetch()),!1!==n&&l.set(i,n),r.indexOf("legacyOneTimeQuery")>=0&&t.stopQueryNoBroadcast(r)})),a&&this.cache.removeOptimistic(a),l},e.prototype.fetchQueryByPolicy=function(e,t,r){var n=this,i=t.query,s=t.variables,a=t.fetchPolicy,c=t.refetchWritePolicy,u=t.errorPolicy,l=t.returnPartialData,f=t.context,h=t.notifyOnNetworkStatusChange,p=e.networkStatus
e.init({document:i,variables:s,networkStatus:r})
var d=function(){return e.getDiff()},v=function(t,r){void 0===r&&(r=e.networkStatus||qn.loading)
var a=t.result
!1===globalThis.__DEV__||l||Ir(a,{})||ri(t.missing)
var c=function(e){return X.of(o({data:e,loading:Qn(r),networkStatus:r},t.complete?null:{partial:!0}))}
return a&&n.getDocumentInfo(i).hasForcedResolvers?n.localState.runResolvers({document:i,remoteResult:{data:a},context:f,variables:s,onlyRunForcedResolvers:!0}).then((function(e){return c(e.data||void 0)})):"none"===u&&r===qn.refetch&&Array.isArray(t.missing)?c(void 0):c(a)},y="no-cache"===a?0:r===qn.refetch&&"merge"!==c?1:2,m=function(){return n.getResultsFromLink(e,y,{query:i,variables:s,context:f,fetchPolicy:a,errorPolicy:u})},b=h&&"number"==typeof p&&p!==r&&Qn(r)
switch(a){default:case"cache-first":return(g=d()).complete?{fromLink:!1,sources:[v(g,e.markReady())]}:l||b?{fromLink:!0,sources:[v(g),m()]}:{fromLink:!0,sources:[m()]}
case"cache-and-network":var g
return(g=d()).complete||l||b?{fromLink:!0,sources:[v(g),m()]}:{fromLink:!0,sources:[m()]}
case"cache-only":return{fromLink:!1,sources:[v(d(),e.markReady())]}
case"network-only":return b?{fromLink:!0,sources:[v(d()),m()]}:{fromLink:!0,sources:[m()]}
case"no-cache":return b?{fromLink:!0,sources:[v(e.getDiff()),m()]}:{fromLink:!0,sources:[m()]}
case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new di(this,e)),this.queries.get(e)},e.prototype.prepareContext=function(e){void 0===e&&(e={})
var t=this.localState.prepareContext(e)
return o(o(o({},this.defaultContext),t),{clientAwareness:this.clientAwareness})},e}()
function gi(e,t){return Bn(e,t,t.variables&&{variables:Bn(o(o({},e&&e.variables),t.variables))})}var Ei,_i=!1,Oi=function(){function e(e){var t=this
if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw D(15)
var r=e.uri,n=e.credentials,i=e.headers,o=e.cache,s=e.documentTransform,a=e.ssrMode,c=void 0!==a&&a,u=e.ssrForceFetchDelay,l=void 0===u?0:u,f=e.connectToDevTools,h=void 0===f?"object"==typeof window&&!window.__APOLLO_CLIENT__&&!1!==globalThis.__DEV__:f,p=e.queryDeduplication,d=void 0===p||p,v=e.defaultOptions,y=e.defaultContext,m=e.assumeImmutableResults,b=void 0===m?o.assumeImmutableResults:m,g=e.resolvers,_=e.typeDefs,O=e.fragmentMatcher,w=e.name,k=e.version,T=e.link
T||(T=r?new kr({uri:r,credentials:n,headers:i}):Xe.empty()),this.link=T,this.cache=o,this.disableNetworkFetches=c||l>0,this.queryDeduplication=d,this.defaultOptions=v||Object.create(null),this.typeDefs=_,l&&setTimeout((function(){return t.disableNetworkFetches=!1}),l),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=E,this.localState=new li({cache:o,client:this,resolvers:g,fragmentMatcher:O}),this.queryManager=new bi({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:y,documentTransform:s,queryDeduplication:d,ssrMode:c,clientAwareness:{name:w,version:k},localState:this.localState,assumeImmutableResults:b,onBroadcast:h?function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.getQueryStore(),mutations:t.queryManager.mutationStore||{}},dataWithOptimisticResults:t.cache.extract(!0)})}:void 0}),h&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if("object"==typeof window){var e=window,t=Symbol.for("apollo.devtools");(e[t]=e[t]||[]).push(this),e.__APOLLO_CLIENT__=this}_i||!1===globalThis.__DEV__||(_i=!0,setTimeout((function(){if("undefined"!=typeof window&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var e=window.navigator,t=e&&e.userAgent,r=void 0
"string"==typeof t&&(t.indexOf("Chrome/")>-1?r="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":t.indexOf("Firefox/")>-1&&(r="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),r&&!1!==globalThis.__DEV__&&x.log("Download the Apollo DevTools for a better development experience: %s",r)}}),1e4))},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=gi(this.defaultOptions.watchQuery,e)),!this.disableNetworkFetches||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e=o(o({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=gi(this.defaultOptions.query,e)),x("cache-and-network"!==e.fetchPolicy,16),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=o(o({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=gi(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e)
return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e)
return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return Ze(this.link,e)},e.prototype.resetStore=function(){var e=this
return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!1})})).then((function(){return Promise.all(e.resetStoreCallbacks.map((function(e){return e()})))})).then((function(){return e.reFetchObservableQueries()}))},e.prototype.clearStore=function(){var e=this
return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!0})})).then((function(){return Promise.all(e.clearStoreCallbacks.map((function(e){return e()})))}))},e.prototype.onResetStore=function(e){var t=this
return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.onClearStore=function(e){var t=this
return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.refetchQueries=function(e){var t=this.queryManager.refetchQueries(e),r=[],n=[]
t.forEach((function(e,t){r.push(t),n.push(e)}))
var i=Promise.all(n)
return i.queries=r,i.results=n,i.catch((function(e){!1!==globalThis.__DEV__&&x.debug(17,e)})),i},e.prototype.getObservableQueries=function(e){return void 0===e&&(e="active"),this.queryManager.getObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e.prototype.setLink=function(e){this.link=this.queryManager.link=e},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e}()
!1!==globalThis.__DEV__&&(Oi.prototype.getMemoryInternals=ge),Ei||(Ei={})
var wi=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=Nn(ee,{max:ye["cache.fragmentQueryDocuments"]||1e3,cache:ce})}return e.prototype.batch=function(e){var t,r=this,n="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0
return this.performTransaction((function(){return t=e.update(r)}),n),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read(o(o({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read(o(o({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,r=e.data,n=s(e,["id","data"])
return this.write(Object.assign(n,{dataId:t||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(e){var t=e.id,r=e.data,n=e.fragment,i=e.fragmentName,o=s(e,["id","data","fragment","fragmentName"])
return this.write(Object.assign(o,{query:this.getFragmentDoc(n,i),dataId:t,result:r}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(r){var n=r.readQuery(e),i=t(n)
return null==i?n:(r.writeQuery(o(o({},e),{data:i})),i)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(r){var n=r.readFragment(e),i=t(n)
return null==i?n:(r.writeFragment(o(o({},e),{data:i})),i)}})},e}()
!1!==globalThis.__DEV__&&(wi.prototype.getMemoryInternals=_e)
var ki=function(e){function t(r,n,i,o){var s,a=e.call(this,r)||this
if(a.message=r,a.path=n,a.query=i,a.variables=o,Array.isArray(a.path)){a.missing=a.message
for(var c=a.path.length-1;c>=0;--c)a.missing=((s={})[a.path[c]]=a.missing,s)}else a.missing=a.path
return a.__proto__=t.prototype,a}return i(t,e),t}(Error)
function Ti(e){return!1!==globalThis.__DEV__&&(t=new Set([e])).forEach((function(e){Z(e)&&function(e){if(!1!==globalThis.__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(e){if(e instanceof TypeError)return null
throw e}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach((function(r){Z(e[r])&&t.add(e[r])}))})),e
var t}var Si=Object.prototype.hasOwnProperty
function xi(e){return null==e}function Di(e,t){var r=e.__typename,n=e.id,i=e._id
if("string"==typeof r&&(t&&(t.keyObject=xi(n)?xi(i)?void 0:{_id:i}:{id:n}),xi(n)&&!xi(i)&&(n=i),!xi(n)))return"".concat(r,":").concat("number"==typeof n||"string"==typeof n?n:JSON.stringify(n))}var Ii={dataIdFromObject:Di,addTypename:!0,resultCaching:!0,canonizeResults:!1}
function Ni(e){var t=e.canonizeResults
return void 0===t?Ii.canonizeResults:t}var Ai=/^[_a-z][_0-9a-z]*/i
function Ri(e){var t=e.match(Ai)
return t?t[0]:e}function Ci(e,t,r){return!!Z(t)&&(Nt(t)?t.every((function(t){return Ci(e,t,r)})):e.selections.every((function(e){if(Qe(e)&&yt(e,r)){var n=qe(e)
return Si.call(t,n)&&(!e.selectionSet||Ci(e.selectionSet,t[n],r))}return!0})))}function Fi(e){return Z(e)&&!Ce(e)&&!Nt(e)}function Pi(e,t){var r=te(We(e))
return{fragmentMap:r,lookupFragment:function(e){var n=r[e]
return!n&&t&&(n=t.lookup(e)),n||null}}}var ji=Object.create(null),Mi=function(){return ji},Li=Object.create(null),qi=function(){function e(e,t){var r=this
this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return Ti(Ce(e)?r.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return Ce(e)?r.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return Re(e)
if(Ce(e))return e
var n=r.policies.identify(e)[0]
if(n){var i=Re(n)
return t&&r.merge(n,e),i}}}return e.prototype.toObject=function(){return o({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),Si.call(this.data,e)){var r=this.data[e]
if(r&&Si.call(r,t))return r[t]}return"__typename"===t&&Si.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof Bi?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return t&&this.group.depend(e,"__exists"),Si.call(this.data,e)?this.data[e]:this instanceof Bi?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var r,n=this
Ce(e)&&(e=e.__ref),Ce(t)&&(t=t.__ref)
var i="string"==typeof e?this.lookup(r=e):e,o="string"==typeof t?this.lookup(r=t):t
if(o){x("string"==typeof r,1)
var s=new jt(Wi).merge(i,o)
if(this.data[r]=s,s!==i&&(delete this.refs[r],this.group.caching)){var a=Object.create(null)
i||(a.__exists=1),Object.keys(o).forEach((function(e){if(!i||i[e]!==s[e]){a[e]=1
var t=Ri(e)
t===e||n.policies.hasKeyArgs(s.__typename,t)||(a[t]=1),void 0!==s[e]||n instanceof Bi||delete s[e]}})),!a.__typename||i&&i.__typename||this.policies.rootTypenamesById[r]!==s.__typename||delete a.__typename,Object.keys(a).forEach((function(e){return n.group.dirty(r,e)}))}}},e.prototype.modify=function(e,t){var r=this,n=this.lookup(e)
if(n){var i=Object.create(null),s=!1,a=!0,c={DELETE:ji,INVALIDATE:Li,isReference:Ce,toReference:this.toReference,canRead:this.canRead,readField:function(t,n){return r.policies.readField("string"==typeof t?{fieldName:t,from:n||Re(e)}:t,{store:r})}}
if(Object.keys(n).forEach((function(u){var l=Ri(u),f=n[u]
if(void 0!==f){var h="function"==typeof t?t:t[u]||t[l]
if(h){var p=h===Mi?ji:h(Ti(f),o(o({},c),{fieldName:l,storeFieldName:u,storage:r.getStorage(e,u)}))
if(p===Li)r.group.dirty(e,u)
else if(p===ji&&(p=void 0),p!==f&&(i[u]=p,s=!0,f=p,!1!==globalThis.__DEV__)){var d=function(e){if(void 0===r.lookup(e.__ref))return!1!==globalThis.__DEV__&&x.warn(2,e),!0}
if(Ce(p))d(p)
else if(Array.isArray(p))for(var v=!1,y=void 0,m=0,b=p;m<b.length;m++){var g=b[m]
if(Ce(g)){if(v=!0,d(g))break}else"object"==typeof g&&g&&r.policies.identify(g)[0]&&(y=g)
if(v&&void 0!==y){!1!==globalThis.__DEV__&&x.warn(3,y)
break}}}}void 0!==f&&(a=!1)}})),s)return this.merge(e,i),a&&(this instanceof Bi?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,r){var n,i=this.lookup(e)
if(i){var o=this.getFieldValue(i,"__typename"),s=t&&r?this.policies.getStoreFieldName({typename:o,fieldName:t,args:r}):t
return this.modify(e,s?((n={})[s]=Mi,n):Mi)}return!1},e.prototype.evict=function(e,t){var r=!1
return e.id&&(Si.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof Bi&&this!==t&&(r=this.parent.evict(e,t)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),r=[]
return this.getRootIdSet().forEach((function(t){Si.call(e.policies.rootTypenamesById,t)||r.push(t)})),r.length&&(t.__META={extraRootIds:r.sort()}),t},e.prototype.replace=function(e){var t=this
if(Object.keys(this.data).forEach((function(r){e&&Si.call(e,r)||t.delete(r)})),e){var r=e.__META,n=s(e,["__META"])
Object.keys(n).forEach((function(e){t.merge(e,n[e])})),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e]
return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof Bi?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),r=this.toObject()
t.forEach((function(n){Si.call(r,n)&&(Object.keys(e.findChildRefIds(n)).forEach(t.add,t),delete r[n])}))
var n=Object.keys(r)
if(n.length){for(var i=this;i instanceof Bi;)i=i.parent
n.forEach((function(e){return i.delete(e)}))}return n},e.prototype.findChildRefIds=function(e){if(!Si.call(this.refs,e)){var t=this.refs[e]=Object.create(null),r=this.data[e]
if(!r)return t
var n=new Set([r])
n.forEach((function(e){Ce(e)&&(t[e.__ref]=!0),Z(e)&&Object.keys(e).forEach((function(t){var r=e[t]
Z(r)&&n.add(r)}))}))}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),Vi=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?Sn():null,this.keyMaker=new Vr(_t)},e.prototype.depend=function(e,t){if(this.d){this.d(Qi(e,t))
var r=Ri(t)
r!==t&&this.d(Qi(e,r)),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(Qi(e,t),"__exists"===t?"forget":"setDirty")},e}()
function Qi(e,t){return t+"#"+e}function zi(e,t){Ki(e)&&e.group.depend(t,"__exists")}!function(e){var t=function(e){function t(t){var r=t.policies,n=t.resultCaching,i=void 0===n||n,o=t.seed,s=e.call(this,r,new Vi(i))||this
return s.stump=new Ui(s),s.storageTrie=new Vr(_t),o&&s.replace(o),s}return i(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(e)
e.Root=t}(qi||(qi={}))
var Bi=function(e){function t(t,r,n,i){var o=e.call(this,r.policies,i)||this
return o.id=t,o.parent=r,o.replay=n,o.group=i,n(o),o}return i(t,e),t.prototype.addLayer=function(e,r){return new t(e,this,r,this.group)},t.prototype.removeLayer=function(e){var t=this,r=this.parent.removeLayer(e)
return e===this.id?(this.group.caching&&Object.keys(this.data).forEach((function(e){var n=t.data[e],i=r.lookup(e)
i?n?n!==i&&Object.keys(n).forEach((function(r){Ir(n[r],i[r])||t.group.dirty(e,r)})):(t.group.dirty(e,"__exists"),Object.keys(i).forEach((function(r){t.group.dirty(e,r)}))):t.delete(e)})),r):r===this.parent?this:r.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return o(o({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var r=this.parent.findChildRefIds(t)
return Si.call(this.data,t)?o(o({},r),e.prototype.findChildRefIds.call(this,t)):r},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent
return e.getStorage.apply(e,arguments)},t}(qi),Ui=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,(function(){}),new Vi(t.group.caching,t.group))||this}return i(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(e,t){return this.parent.merge(e,t)},t}(Bi)
function Wi(e,t,r){var n=e[r],i=t[r]
return Ir(n,i)?n:i}function Ki(e){return!!(e instanceof qi&&e.group.caching)}var Gi=function(){function e(){this.known=new(Ot?WeakSet:Set),this.pool=new Vr(_t),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(e){return Z(e)&&this.known.has(e)},e.prototype.pass=function(e){if(Z(e)){var t=function(e){return Z(e)?Nt(e)?e.slice(0):o({__proto__:Object.getPrototypeOf(e)},e):e}(e)
return this.passes.set(t,e),t}return e},e.prototype.admit=function(e){var t=this
if(Z(e)){var r=this.passes.get(e)
if(r)return r
switch(Object.getPrototypeOf(e)){case Array.prototype:if(this.known.has(e))return e
var n=e.map(this.admit,this)
return(a=this.pool.lookupArray(n)).array||(this.known.add(a.array=n),!1!==globalThis.__DEV__&&Object.freeze(n)),a.array
case null:case Object.prototype:if(this.known.has(e))return e
var i=Object.getPrototypeOf(e),o=[i],s=this.sortedKeys(e)
o.push(s.json)
var a,c=o.length
if(s.sorted.forEach((function(r){o.push(t.admit(e[r]))})),!(a=this.pool.lookupArray(o)).object){var u=a.object=Object.create(i)
this.known.add(u),s.sorted.forEach((function(e,t){u[e]=o[c+t]})),!1!==globalThis.__DEV__&&Object.freeze(u)}return a.object}}return e},e.prototype.sortedKeys=function(e){var t=Object.keys(e),r=this.pool.lookupArray(t)
if(!r.keys){t.sort()
var n=JSON.stringify(t);(r.keys=this.keysByJSON.get(n))||this.keysByJSON.set(n,r.keys={sorted:t,json:n})}return r.keys},e}()
function Yi(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var $i=function(){function e(e){var t=this
this.knownResults=new(_t?WeakMap:Map),this.config=Bn(e,{addTypename:!1!==e.addTypename,canonizeResults:Ni(e)}),this.canon=e.canon||new Gi,this.executeSelectionSet=Nn((function(e){var r,n=e.context.canonizeResults,i=Yi(e)
i[3]=!n
var s=(r=t.executeSelectionSet).peek.apply(r,i)
return s?n?o(o({},s),{result:t.canon.admit(s.result)}):s:(zi(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))}),{max:this.config.resultCacheMaxSize||ye["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:Yi,makeCacheKey:function(e,t,r,n){if(Ki(r.store))return r.store.makeCacheKey(e,Ce(t)?t.__ref:t,r.varString,n)}}),this.executeSubSelectedArray=Nn((function(e){return zi(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)}),{max:this.config.resultCacheMaxSize||ye["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(e){var t=e.field,r=e.array,n=e.context
if(Ki(n.store))return n.store.makeCacheKey(t,r,n.varString)}})}return e.prototype.resetCanon=function(){this.canon=new Gi},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.rootId,i=void 0===n?"ROOT_QUERY":n,s=e.variables,a=e.returnPartialData,c=void 0===a||a,u=e.canonizeResults,l=void 0===u?this.config.canonizeResults:u,f=this.config.cache.policies
s=o(o({},Ye(Ke(r))),s)
var h,p=Re(i),d=this.executeSelectionSet({selectionSet:Ge(r).selectionSet,objectOrReference:p,enclosingRef:p,context:o({store:t,query:r,policies:f,variables:s,varString:Ie(s),canonizeResults:l},Pi(r,this.config.fragments))})
if(d.missing&&(h=[new ki(Ji(d.missing),d.missing,r,s)],!c))throw h[0]
return{result:d.result,complete:!h,missing:h}},e.prototype.isFresh=function(e,t,r,n){if(Ki(n.store)&&this.knownResults.get(e)===r){var i=this.executeSelectionSet.peek(r,t,n,this.canon.isKnown(e))
if(i&&e===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t=this,r=e.selectionSet,n=e.objectOrReference,i=e.enclosingRef,o=e.context
if(Ce(n)&&!o.policies.rootTypenamesById[n.__ref]&&!o.store.has(n.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(n.__ref," object")}
var s,a=o.variables,c=o.policies,u=o.store.getFieldValue(n,"__typename"),l=[],f=new jt
function h(e,t){var r
return e.missing&&(s=f.merge(s,((r={})[t]=e.missing,r))),e.result}this.config.addTypename&&"string"==typeof u&&!c.rootIdsByTypename[u]&&l.push({__typename:u})
var p=new Set(r.selections)
p.forEach((function(e){var r,d
if(yt(e,a))if(Qe(e)){var v=c.readField({fieldName:e.name.value,field:e,variables:o.variables,from:n},o),y=qe(e)
void 0===v?gr.added(e)||(s=f.merge(s,((r={})[y]="Can't find field '".concat(e.name.value,"' on ").concat(Ce(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)),r))):Nt(v)?v=h(t.executeSubSelectedArray({field:e,array:v,enclosingRef:i,context:o}),y):e.selectionSet?null!=v&&(v=h(t.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:v,enclosingRef:Ce(v)?v:i,context:o}),y)):o.canonizeResults&&(v=t.canon.pass(v)),void 0!==v&&l.push(((d={})[y]=v,d))}else{var m=re(e,o.lookupFragment)
if(!m&&e.kind===ft.FRAGMENT_SPREAD)throw D(9,e.name.value)
m&&c.fragmentMatches(m,u)&&m.selectionSet.selections.forEach(p.add,p)}}))
var d={result:Ft(l),missing:s},v=o.canonizeResults?this.canon.admit(d):Ti(d)
return v.result&&this.knownResults.set(v.result,r),v},e.prototype.execSubSelectedArrayImpl=function(e){var t,r=this,n=e.field,i=e.array,o=e.enclosingRef,s=e.context,a=new jt
function c(e,r){var n
return e.missing&&(t=a.merge(t,((n={})[r]=e.missing,n))),e.result}return n.selectionSet&&(i=i.filter(s.store.canRead)),i=i.map((function(e,t){return null===e?null:Nt(e)?c(r.executeSubSelectedArray({field:n,array:e,enclosingRef:o,context:s}),t):n.selectionSet?c(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:e,enclosingRef:Ce(e)?e:o,context:s}),t):(!1!==globalThis.__DEV__&&function(e,t,r){if(!t.selectionSet){var n=new Set([r])
n.forEach((function(r){Z(r)&&(x(!Ce(r),10,function(e,t){return Ce(t)?e.get(t.__ref,"__typename"):t&&t.__typename}(e,r),t.name.value),Object.values(r).forEach(n.add,n))}))}}(s.store,n,e),e)})),{result:s.canonizeResults?this.canon.admit(i):i,missing:t}},e}()
function Ji(e){try{JSON.stringify(e,(function(e,t){if("string"==typeof t)throw t
return t}))}catch(e){return e}}var Hi=Object.create(null)
function Xi(e){var t=JSON.stringify(e)
return Hi[t]||(Hi[t]=Object.create(null))}function Zi(e){var t=Xi(e)
return t.keyFieldsFn||(t.keyFieldsFn=function(t,r){var n=function(e,t){return r.readField(t,e)},i=r.keyObject=to(e,(function(e){var i=io(r.storeObject,e,n)
return void 0===i&&t!==r.storeObject&&Si.call(t,e[0])&&(i=io(t,e,no)),x(void 0!==i,4,e.join("."),t),i}))
return"".concat(r.typename,":").concat(JSON.stringify(i))})}function eo(e){var t=Xi(e)
return t.keyArgsFn||(t.keyArgsFn=function(t,r){var n=r.field,i=r.variables,o=r.fieldName,s=to(e,(function(e){var r=e[0],o=r.charAt(0)
if("@"!==o)if("$"!==o){if(t)return io(t,e)}else{var s=r.slice(1)
if(i&&Si.call(i,s)){var a=e.slice(0)
return a[0]=s,io(i,a)}}else if(n&&At(n.directives)){var c=r.slice(1),u=n.directives.find((function(e){return e.name.value===c})),l=u&&Le(u,i)
return l&&io(l,e.slice(1))}})),a=JSON.stringify(s)
return(t||"{}"!==a)&&(o+=":"+a),o})}function to(e,t){var r=new jt
return ro(e).reduce((function(e,n){var i,o=t(n)
if(void 0!==o){for(var s=n.length-1;s>=0;--s)(i={})[n[s]]=o,o=i
e=r.merge(e,o)}return e}),Object.create(null))}function ro(e){var t=Xi(e)
if(!t.paths){var r=t.paths=[],n=[]
e.forEach((function(t,i){Nt(t)?(ro(t).forEach((function(e){return r.push(n.concat(e))})),n.length=0):(n.push(t),Nt(e[i+1])||(r.push(n.slice(0)),n.length=0))}))}return t.paths}function no(e,t){return e[t]}function io(e,t,r){return r=r||no,oo(t.reduce((function e(t,n){return Nt(t)?t.map((function(t){return e(t,n)})):t&&r(t,n)}),e))}function oo(e){return Z(e)?Nt(e)?e.map(oo):to(Object.keys(e).sort(),(function(t){return io(e,t)})):e}function so(e){return void 0!==e.args?e.args:e.field?Le(e.field,e.variables):null}var ao=function(){},co=function(e,t){return t.fieldName},uo=function(e,t,r){return(0,r.mergeObjects)(e,t)},lo=function(e,t){return t},fo=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=o({dataIdFromObject:Di},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var r,n=this,i=t&&(t.typename||(null===(r=t.storeObject)||void 0===r?void 0:r.__typename))||e.__typename
if(i===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"]
for(var s,a=t&&t.storeObject||e,c=o(o({},t),{typename:i,storeObject:a,readField:t&&t.readField||function(){var e=po(arguments,a)
return n.readField(e,{store:n.cache.data,variables:e.variables})}}),u=i&&this.getTypePolicy(i),l=u&&u.keyFn||this.config.dataIdFromObject;l;){var f=l(o(o({},e),a),c)
if(!Nt(f)){s=f
break}l=Zi(f)}return s=s?String(s):void 0,c.keyObject?[s,c.keyObject]:[s]},e.prototype.addTypePolicies=function(e){var t=this
Object.keys(e).forEach((function(r){var n=e[r],i=n.queryType,o=n.mutationType,a=n.subscriptionType,c=s(n,["queryType","mutationType","subscriptionType"])
i&&t.setRootTypename("Query",r),o&&t.setRootTypename("Mutation",r),a&&t.setRootTypename("Subscription",r),Si.call(t.toBeAdded,r)?t.toBeAdded[r].push(c):t.toBeAdded[r]=[c]}))},e.prototype.updateTypePolicy=function(e,t){var r=this,n=this.getTypePolicy(e),i=t.keyFields,o=t.fields
function s(e,t){e.merge="function"==typeof t?t:!0===t?uo:!1===t?lo:e.merge}s(n,t.merge),n.keyFn=!1===i?ao:Nt(i)?Zi(i):"function"==typeof i?i:n.keyFn,o&&Object.keys(o).forEach((function(t){var n=r.getFieldPolicy(e,t,!0),i=o[t]
if("function"==typeof i)n.read=i
else{var a=i.keyArgs,c=i.read,u=i.merge
n.keyFn=!1===a?co:Nt(a)?eo(a):"function"==typeof a?a:n.keyFn,"function"==typeof c&&(n.read=c),s(n,u)}n.read&&n.merge&&(n.keyFn=n.keyFn||co)}))},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e)
var r="ROOT_"+e.toUpperCase(),n=this.rootTypenamesById[r]
t!==n&&(x(!n||n===e,5,e),n&&delete this.rootIdsByTypename[n],this.rootIdsByTypename[t]=r,this.rootTypenamesById[r]=t)},e.prototype.addPossibleTypes=function(e){var t=this
this.usingPossibleTypes=!0,Object.keys(e).forEach((function(r){t.getSupertypeSet(r,!0),e[r].forEach((function(e){t.getSupertypeSet(e,!0).add(r)
var n=e.match(Ai)
n&&n[0]===e||t.fuzzySubtypes.set(e,new RegExp(e))}))}))},e.prototype.getTypePolicy=function(e){var t=this
if(!Si.call(this.typePolicies,e)){var r=this.typePolicies[e]=Object.create(null)
r.fields=Object.create(null)
var n=this.supertypeMap.get(e)
!n&&this.fuzzySubtypes.size&&(n=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((function(r,i){if(r.test(e)){var o=t.supertypeMap.get(i)
o&&o.forEach((function(e){return n.add(e)}))}}))),n&&n.size&&n.forEach((function(e){var n=t.getTypePolicy(e),i=n.fields,o=s(n,["fields"])
Object.assign(r,o),Object.assign(r.fields,i)}))}var i=this.toBeAdded[e]
return i&&i.length&&i.splice(0).forEach((function(r){t.updateTypePolicy(e,r)})),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,r){if(e){var n=this.getTypePolicy(e).fields
return n[t]||r&&(n[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var r=this.supertypeMap.get(e)
return!r&&t&&this.supertypeMap.set(e,r=new Set),r},e.prototype.fragmentMatches=function(e,t,r,n){var i=this
if(!e.typeCondition)return!0
if(!t)return!1
var o=e.typeCondition.name.value
if(t===o)return!0
if(this.usingPossibleTypes&&this.supertypeMap.has(o))for(var s=this.getSupertypeSet(t,!0),a=[s],c=function(e){var t=i.getSupertypeSet(e,!1)
t&&t.size&&a.indexOf(t)<0&&a.push(t)},u=!(!r||!this.fuzzySubtypes.size),l=!1,f=0;f<a.length;++f){var h=a[f]
if(h.has(o))return s.has(o)||(l&&!1!==globalThis.__DEV__&&x.warn(6,t,o),s.add(o)),!0
h.forEach(c),u&&f===a.length-1&&Ci(e.selectionSet,r,n)&&(u=!1,l=!0,this.fuzzySubtypes.forEach((function(e,r){var n=t.match(e)
n&&n[0]===t&&c(r)})))}return!1},e.prototype.hasKeyArgs=function(e,t){var r=this.getFieldPolicy(e,t,!1)
return!(!r||!r.keyFn)},e.prototype.getStoreFieldName=function(e){var t,r=e.typename,n=e.fieldName,i=this.getFieldPolicy(r,n,!1),o=i&&i.keyFn
if(o&&r)for(var s={typename:r,fieldName:n,field:e.field||null,variables:e.variables},a=so(e);o;){var c=o(a,s)
if(!Nt(c)){t=c||n
break}o=eo(c)}return void 0===t&&(t=e.field?function(e,t){var r=null
e.directives&&(r={},e.directives.forEach((function(e){r[e.name.value]={},e.arguments&&e.arguments.forEach((function(n){var i=n.name,o=n.value
return Fe(r[e.name.value],i,o,t)}))})))
var n=null
return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach((function(e){var r=e.name,i=e.value
return Fe(n,r,i,t)}))),Me(e.name.value,n,r)}(e.field,e.variables):Me(n,so(e))),!1===t?n:n===Ri(t)?t:n+":"+t},e.prototype.readField=function(e,t){var r=e.from
if(r&&(e.field||e.fieldName)){if(void 0===e.typename){var n=t.store.getFieldValue(r,"__typename")
n&&(e.typename=n)}var i=this.getStoreFieldName(e),o=Ri(i),s=t.store.getFieldValue(r,i),a=this.getFieldPolicy(e.typename,o,!1),c=a&&a.read
if(c){var u=ho(this,r,e,t,t.store.getStorage(Ce(r)?r.__ref:r,i))
return oi.withValue(this.cache,c,[s,u])}return s}},e.prototype.getReadFunction=function(e,t){var r=this.getFieldPolicy(e,t,!1)
return r&&r.read},e.prototype.getMergeFunction=function(e,t,r){var n=this.getFieldPolicy(e,t,!1),i=n&&n.merge
return!i&&r&&(i=(n=this.getTypePolicy(r))&&n.merge),i},e.prototype.runMergeFunction=function(e,t,r,n,i){var o=r.field,s=r.typename,a=r.merge
return a===uo?vo(n.store)(e,t):a===lo?t:(n.overwrite&&(e=void 0),a(e,t,ho(this,void 0,{typename:s,fieldName:o.name.value,field:o,variables:n.variables},n,i||Object.create(null))))},e}()
function ho(e,t,r,n,i){var o=e.getStoreFieldName(r),s=Ri(o),a=r.variables||n.variables,c=n.store,u=c.toReference,l=c.canRead
return{args:so(r),field:r.field||null,fieldName:s,storeFieldName:o,variables:a,isReference:Ce,toReference:u,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(po(arguments,t,a),n)},mergeObjects:vo(n.store)}}function po(e,t,r){var n,i=e[0],s=e[1],a=e.length
return"string"==typeof i?n={fieldName:i,from:a>1?s:t}:(n=o({},i),Si.call(n,"from")||(n.from=t)),!1!==globalThis.__DEV__&&void 0===n.from&&!1!==globalThis.__DEV__&&x.warn(7,T(Array.from(e))),void 0===n.variables&&(n.variables=r),n}function vo(e){return function(t,r){if(Nt(t)||Nt(r))throw D(8)
if(Z(t)&&Z(r)){var n=e.getFieldValue(t,"__typename"),i=e.getFieldValue(r,"__typename")
if(n&&i&&n!==i)return r
if(Ce(t)&&Fi(r))return e.merge(t.__ref,r),t
if(Fi(t)&&Ce(r))return e.merge(t,r.__ref),r
if(Fi(t)&&Fi(r))return o(o({},t),r)}return r}}function yo(e,t,r){var n="".concat(t).concat(r),i=e.flavors.get(n)
return i||e.flavors.set(n,i=e.clientOnly===t&&e.deferred===r?e:o(o({},e),{clientOnly:t,deferred:r})),i}var mo=function(){function e(e,t,r){this.cache=e,this.reader=t,this.fragments=r}return e.prototype.writeToStore=function(e,t){var r=this,n=t.query,i=t.result,s=t.dataId,a=t.variables,c=t.overwrite,u=Be(n),l=new jt
a=o(o({},Ye(u)),a)
var f=o(o({store:e,written:Object.create(null),merge:function(e,t){return l.merge(e,t)},variables:a,varString:Ie(a)},Pi(n,this.fragments)),{overwrite:!!c,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),h=this.processSelectionSet({result:i||Object.create(null),dataId:s,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:f})
if(!Ce(h))throw D(11,i)
return f.incomingById.forEach((function(t,n){var i=t.storeObject,o=t.mergeTree,s=t.fieldNodeSet,a=Re(n)
if(o&&o.map.size){var c=r.applyMerges(o,a,i,f)
if(Ce(c))return
i=c}if(!1!==globalThis.__DEV__&&!f.overwrite){var u=Object.create(null)
s.forEach((function(e){e.selectionSet&&(u[e.name.value]=!0)})),Object.keys(i).forEach((function(e){(function(e){return!0===u[Ri(e)]})(e)&&!function(e){var t=o&&o.map.get(e)
return Boolean(t&&t.info&&t.info.merge)}(e)&&function(e,t,r,n){var i=function(e){var t=n.getFieldValue(e,r)
return"object"==typeof t&&t},o=i(e)
if(o){var s=i(t)
if(s&&!Ce(o)&&!Ir(o,s)&&!Object.keys(o).every((function(e){return void 0!==n.getFieldValue(s,e)}))){var a=n.getFieldValue(e,"__typename")||n.getFieldValue(t,"__typename"),c=Ri(r),u="".concat(a,".").concat(c)
if(!wo.has(u)){wo.add(u)
var l=[]
Nt(o)||Nt(s)||[o,s].forEach((function(e){var t=n.getFieldValue(e,"__typename")
"string"!=typeof t||l.includes(t)||l.push(t)})),!1!==globalThis.__DEV__&&x.warn(14,c,a,l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"",u,o,s)}}}}(a,i,e,f.store)}))}e.merge(n,i)})),e.retain(h.__ref),h},e.prototype.processSelectionSet=function(e){var t=this,r=e.dataId,n=e.result,i=e.selectionSet,s=e.context,a=e.mergeTree,c=this.cache.policies,u=Object.create(null),l=r&&c.rootTypenamesById[r]||Ve(n,i,s.fragmentMap)||r&&s.store.get(r,"__typename")
"string"==typeof l&&(u.__typename=l)
var f=function(){var e=po(arguments,u,s.variables)
if(Ce(e.from)){var t=s.incomingById.get(e.from.__ref)
if(t){var r=c.readField(o(o({},e),{from:t.storeObject}),s)
if(void 0!==r)return r}}return c.readField(e,s)},h=new Set
this.flattenFields(i,n,s,l).forEach((function(e,r){var i,o=qe(r),s=n[o]
if(h.add(r),void 0!==s){var p=c.getStoreFieldName({typename:l,fieldName:r.name.value,field:r,variables:e.variables}),d=go(a,p),v=t.processFieldValue(s,r,r.selectionSet?yo(e,!1,!1):e,d),y=void 0
r.selectionSet&&(Ce(v)||Fi(v))&&(y=f("__typename",v))
var m=c.getMergeFunction(l,r.name.value,y)
m?d.info={field:r,typename:l,merge:m}:Oo(a,p),u=e.merge(u,((i={})[p]=v,i))}else!1===globalThis.__DEV__||e.clientOnly||e.deferred||gr.added(r)||c.getReadFunction(l,r.name.value)||!1!==globalThis.__DEV__&&x.error(12,qe(r),n)}))
try{var p=c.identify(n,{typename:l,selectionSet:i,fragmentMap:s.fragmentMap,storeObject:u,readField:f}),d=p[0],v=p[1]
r=r||d,v&&(u=s.merge(u,v))}catch(e){if(!r)throw e}if("string"==typeof r){var y=Re(r),m=s.written[r]||(s.written[r]=[])
if(m.indexOf(i)>=0)return y
if(m.push(i),this.reader&&this.reader.isFresh(n,y,i,s))return y
var b=s.incomingById.get(r)
return b?(b.storeObject=s.merge(b.storeObject,u),b.mergeTree=Eo(b.mergeTree,a),h.forEach((function(e){return b.fieldNodeSet.add(e)}))):s.incomingById.set(r,{storeObject:u,mergeTree:_o(a)?void 0:a,fieldNodeSet:h}),y}return u},e.prototype.processFieldValue=function(e,t,r,n){var i=this
return t.selectionSet&&null!==e?Nt(e)?e.map((function(e,o){var s=i.processFieldValue(e,t,r,go(n,o))
return Oo(n,o),s})):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:r,mergeTree:n}):!1!==globalThis.__DEV__?Wn(e):e},e.prototype.flattenFields=function(e,t,r,n){void 0===n&&(n=Ve(t,e,r.fragmentMap))
var i=new Map,o=this.cache.policies,s=new Vr(!1)
return function e(a,c){var u=s.lookup(a,c.clientOnly,c.deferred)
u.visited||(u.visited=!0,a.selections.forEach((function(s){if(yt(s,r.variables)){var a=c.clientOnly,u=c.deferred
if(a&&u||!At(s.directives)||s.directives.forEach((function(e){var t=e.name.value
if("client"===t&&(a=!0),"defer"===t){var n=Le(e,r.variables)
n&&!1===n.if||(u=!0)}})),Qe(s)){var l=i.get(s)
l&&(a=a&&l.clientOnly,u=u&&l.deferred),i.set(s,yo(r,a,u))}else{var f=re(s,r.lookupFragment)
if(!f&&s.kind===ft.FRAGMENT_SPREAD)throw D(13,s.name.value)
f&&o.fragmentMatches(f,n,t,r.variables)&&e(f.selectionSet,yo(r,a,u))}}})))}(e,r),i},e.prototype.applyMerges=function(e,t,r,n,i){var s,a=this
if(e.map.size&&!Ce(r)){var c,u=Nt(r)||!Ce(t)&&!Fi(t)?void 0:t,l=r
u&&!i&&(i=[Ce(u)?u.__ref:u])
var f=function(e,t){return Nt(e)?"number"==typeof t?e[t]:void 0:n.store.getFieldValue(e,String(t))}
e.map.forEach((function(e,t){var r=f(u,t),o=f(l,t)
if(void 0!==o){i&&i.push(t)
var s=a.applyMerges(e,r,o,n,i)
s!==o&&(c=c||new Map).set(t,s),i&&x(i.pop()===t)}})),c&&(r=Nt(l)?l.slice(0):o({},l),c.forEach((function(e,t){r[t]=e})))}return e.info?this.cache.policies.runMergeFunction(t,r,e.info,n,i&&(s=n.store).getStorage.apply(s,i)):r},e}(),bo=[]
function go(e,t){var r=e.map
return r.has(t)||r.set(t,bo.pop()||{map:new Map}),r.get(t)}function Eo(e,t){if(e===t||!t||_o(t))return e
if(!e||_o(e))return t
var r=e.info&&t.info?o(o({},e.info),t.info):e.info||t.info,n=e.map.size&&t.map.size,i={info:r,map:n?new Map:e.map.size?e.map:t.map}
if(n){var s=new Set(t.map.keys())
e.map.forEach((function(e,r){i.map.set(r,Eo(e,t.map.get(r))),s.delete(r)})),s.forEach((function(r){i.map.set(r,Eo(t.map.get(r),e.map.get(r)))}))}return i}function _o(e){return!e||!(e.info||e.map.size)}function Oo(e,t){var r=e.map,n=r.get(t)
n&&_o(n)&&(bo.push(n),r.delete(t))}var wo=new Set,ko=function(e){function t(t){void 0===t&&(t={})
var r=e.call(this)||this
return r.watches=new Set,r.addTypenameTransform=new Rn(gr),r.assumeImmutableResults=!0,r.makeVar=ui,r.txCount=0,r.config=function(e){return Bn(Ii,e)}(t),r.addTypename=!!r.config.addTypename,r.policies=new fo({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return i(t,e),t.prototype.init=function(){var e=this.data=new qi.Root({policies:this.policies,resultCaching:this.config.resultCaching})
this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,r=this.storeReader,n=this.config.fragments
this.storeWriter=new mo(this,this.storeReader=new $i({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Ni(this.config),canon:e?void 0:r&&r.canon,fragments:n}),n),this.maybeBroadcastWatch=Nn((function(e,r){return t.broadcastWatch(e,r)}),{max:this.config.resultCacheMaxSize||ye["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(e){var r=e.optimistic?t.optimisticData:t.data
if(Ki(r)){var n=e.optimistic,i=e.id,o=e.variables
return r.makeCacheKey(e.query,e.callback,Ie({optimistic:n,id:i,variables:o}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach((function(e){return e.resetCaching()}))},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData,r=void 0!==t&&t
try{return this.storeReader.diffQueryAgainstStore(o(o({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:r})).result||null}catch(e){if(e instanceof ki)return null
throw e}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.modify=function(e){if(Si.call(e,"id")&&!e.id)return!1
var t=e.optimistic?this.optimisticData:this.data
try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore(o(o({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t,r=this
return this.watches.size||ai(t=this).vars.forEach((function(e){return e.attachCache(t)})),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){r.watches.delete(e)&&!r.watches.size&&ci(r),r.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){var t
Ie.reset(),ar.reset(),this.addTypenameTransform.resetCache(),null===(t=this.config.fragments)||void 0===t||t.resetCaches()
var r=this.optimisticData.gc()
return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),r},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if(Ce(e))return e.__ref
try{return this.policies.identify(e)[0]}catch(e){!1!==globalThis.__DEV__&&x.warn(e)}},t.prototype.evict=function(e){if(!e.id){if(Si.call(e,"id"))return!1
e=o(o({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.reset=function(e){var t=this
return this.init(),Ie.reset(),e&&e.discardWatches?(this.watches.forEach((function(e){return t.maybeBroadcastWatch.forget(e)})),this.watches.clear(),ci(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e)
t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,r=this,n=e.update,i=e.optimistic,s=void 0===i||i,a=e.removeOptimistic,c=e.onWatchUpdated,u=function(e){var i=r,o=i.data,s=i.optimisticData;++r.txCount,e&&(r.data=r.optimisticData=e)
try{return t=n(r)}finally{--r.txCount,r.data=o,r.optimisticData=s}},l=new Set
return c&&!this.txCount&&this.broadcastWatches(o(o({},e),{onWatchUpdated:function(e){return l.add(e),!1}})),"string"==typeof s?this.optimisticData=this.optimisticData.addLayer(s,u):!1===s?u(this.data):u(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),c&&l.size?(this.broadcastWatches(o(o({},e),{onWatchUpdated:function(e,t){var r=c.call(this,e,t)
return!1!==r&&l.delete(e),r}})),l.size&&l.forEach((function(e){return r.maybeBroadcastWatch.dirty(e)}))):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){return this.addTypenameToDocument(this.addFragmentsToDocument(e))},t.prototype.broadcastWatches=function(e){var t=this
this.txCount||this.watches.forEach((function(r){return t.maybeBroadcastWatch(r,e)}))},t.prototype.addFragmentsToDocument=function(e){var t=this.config.fragments
return t?t.transform(e):e},t.prototype.addTypenameToDocument=function(e){return this.addTypename?this.addTypenameTransform.transformDocument(e):e},t.prototype.broadcastWatch=function(e,t){var r=e.lastDiff,n=this.diff(e)
t&&(e.optimistic&&"string"==typeof t.optimistic&&(n.fromOptimisticTransaction=!0),t.onWatchUpdated&&!1===t.onWatchUpdated.call(this,e,n,r))||r&&Ir(r.result,n.result)||e.callback(e.lastDiff=n,r)},t}(wi)
!1!==globalThis.__DEV__&&(ko.prototype.getMemoryInternals=Ee)
var To=Xe.empty,So=Xe.from,xo=Xe.split,Do=Xe.concat,Io=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1}
var e=new AbortController
return{controller:e,signal:e.signal}}
function No(e){var t=!1
return new Promise((function(r,n){e.subscribe({next:function(e){t?!1!==globalThis.__DEV__&&x.warn(42):(t=!0,r(e))},error:n})}))}function Ao(e){return new X((function(t){e.then((function(e){t.next(e),t.complete()})).catch(t.error.bind(t))}))}function Ro(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const Co=/\r\n|[\n\r]/g
function Fo(e,t){let r=0,n=1
for(const i of e.body.matchAll(Co)){if("number"==typeof i.index||Ro(!1),i.index>=t)break
r=i.index+i[0].length,n+=1}return{line:n,column:t+1-r}}function Po(e,t){const r=e.locationOffset.column-1,n="".padStart(r)+e.body,i=t.line-1,o=e.locationOffset.line-1,s=t.line+o,a=1===t.line?r:0,c=t.column+a,u=`${e.name}:${s}:${c}\n`,l=n.split(/\r\n|[\n\r]/g),f=l[i]
if(f.length>120){const e=Math.floor(c/80),t=c%80,r=[]
for(let n=0;n<f.length;n+=80)r.push(f.slice(n,n+80))
return u+jo([[`${s} |`,r[0]],...r.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",r[e+1]]])}return u+jo([[s-1+" |",l[i-1]],[`${s} |`,f],["|","^".padStart(c)],[`${s+1} |`,l[i+1]]])}function jo(e){const t=e.filter((([e,t])=>void 0!==t)),r=Math.max(...t.map((([e])=>e.length)))
return t.map((([e,t])=>e.padStart(r)+(t?" "+t:""))).join("\n")}class Mo extends Error{constructor(e,...t){var r,n,i
const{nodes:o,source:s,positions:a,path:c,originalError:u,extensions:l}=function(e){const t=e[0]
return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t)
super(e),this.name="GraphQLError",this.path=null!=c?c:void 0,this.originalError=null!=u?u:void 0,this.nodes=Lo(Array.isArray(o)?o:o?[o]:void 0)
const f=Lo(null===(r=this.nodes)||void 0===r?void 0:r.map((e=>e.loc)).filter((e=>null!=e)))
this.source=null!=s?s:null==f||null===(n=f[0])||void 0===n?void 0:n.source,this.positions=null!=a?a:null==f?void 0:f.map((e=>e.start)),this.locations=a&&s?a.map((e=>Fo(s,e))):null==f?void 0:f.map((e=>Fo(e.source,e.start)))
const h="object"==typeof(p=null==u?void 0:u.extensions)&&null!==p?null==u?void 0:u.extensions:void 0
var p
this.extensions=null!==(i=null!=l?l:h)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=u&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Mo):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message
if(this.nodes)for(const r of this.nodes)r.loc&&(e+="\n\n"+Po((t=r.loc).source,Fo(t.source,t.start)))
else if(this.source&&this.locations)for(const r of this.locations)e+="\n\n"+Po(this.source,r)
var t
return e}toJSON(){const e={message:this.message}
return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function Lo(e){return void 0===e||0===e.length?void 0:e}function qo(e,t,r){return new Mo(`Syntax Error: ${r}`,{source:e,positions:[t]})}var Vo,Qo,zo
!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(Vo||(Vo={})),(zo=Qo||(Qo={})).SOF="<SOF>",zo.EOF="<EOF>",zo.BANG="!",zo.DOLLAR="$",zo.AMP="&",zo.PAREN_L="(",zo.PAREN_R=")",zo.SPREAD="...",zo.COLON=":",zo.EQUALS="=",zo.AT="@",zo.BRACKET_L="[",zo.BRACKET_R="]",zo.BRACE_L="{",zo.PIPE="|",zo.BRACE_R="}",zo.NAME="Name",zo.INT="Int",zo.FLOAT="Float",zo.STRING="String",zo.BLOCK_STRING="BlockString",zo.COMMENT="Comment"
class Bo{constructor(e){const t=new st(Qo.SOF,0,0,0,0)
this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token
if(e.kind!==Qo.EOF)do{if(e.next)e=e.next
else{const t=Jo(this,e.end)
e.next=t,t.prev=e,e=t}}while(e.kind===Qo.COMMENT)
return e}}function Uo(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Wo(e,t){return Ko(e.charCodeAt(t))&&Go(e.charCodeAt(t+1))}function Ko(e){return e>=55296&&e<=56319}function Go(e){return e>=56320&&e<=57343}function Yo(e,t){const r=e.source.body.codePointAt(t)
if(void 0===r)return Qo.EOF
if(r>=32&&r<=126){const e=String.fromCodePoint(r)
return'"'===e?"'\"'":`"${e}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function $o(e,t,r,n,i){const o=e.line,s=1+r-e.lineStart
return new st(t,r,n,o,s,i)}function Jo(e,t){const r=e.source.body,n=r.length
let i=t
for(;i<n;){const t=r.charCodeAt(i)
switch(t){case 65279:case 9:case 32:case 44:++i
continue
case 10:++i,++e.line,e.lineStart=i
continue
case 13:10===r.charCodeAt(i+1)?i+=2:++i,++e.line,e.lineStart=i
continue
case 35:return Ho(e,i)
case 33:return $o(e,Qo.BANG,i,i+1)
case 36:return $o(e,Qo.DOLLAR,i,i+1)
case 38:return $o(e,Qo.AMP,i,i+1)
case 40:return $o(e,Qo.PAREN_L,i,i+1)
case 41:return $o(e,Qo.PAREN_R,i,i+1)
case 46:if(46===r.charCodeAt(i+1)&&46===r.charCodeAt(i+2))return $o(e,Qo.SPREAD,i,i+3)
break
case 58:return $o(e,Qo.COLON,i,i+1)
case 61:return $o(e,Qo.EQUALS,i,i+1)
case 64:return $o(e,Qo.AT,i,i+1)
case 91:return $o(e,Qo.BRACKET_L,i,i+1)
case 93:return $o(e,Qo.BRACKET_R,i,i+1)
case 123:return $o(e,Qo.BRACE_L,i,i+1)
case 124:return $o(e,Qo.PIPE,i,i+1)
case 125:return $o(e,Qo.BRACE_R,i,i+1)
case 34:return 34===r.charCodeAt(i+1)&&34===r.charCodeAt(i+2)?ss(e,i):es(e,i)}if(Kt(t)||45===t)return Xo(e,i,t)
if(Yt(t))return as(e,i)
throw qo(e.source,i,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":Uo(t)||Wo(r,i)?`Unexpected character: ${Yo(e,i)}.`:`Invalid character: ${Yo(e,i)}.`)}return $o(e,Qo.EOF,n,n)}function Ho(e,t){const r=e.source.body,n=r.length
let i=t+1
for(;i<n;){const e=r.charCodeAt(i)
if(10===e||13===e)break
if(Uo(e))++i
else{if(!Wo(r,i))break
i+=2}}return $o(e,Qo.COMMENT,t,i,r.slice(t+1,i))}function Xo(e,t,r){const n=e.source.body
let i=t,o=r,s=!1
if(45===o&&(o=n.charCodeAt(++i)),48===o){if(o=n.charCodeAt(++i),Kt(o))throw qo(e.source,i,`Invalid number, unexpected digit after 0: ${Yo(e,i)}.`)}else i=Zo(e,i,o),o=n.charCodeAt(i)
if(46===o&&(s=!0,o=n.charCodeAt(++i),i=Zo(e,i,o),o=n.charCodeAt(i)),69!==o&&101!==o||(s=!0,o=n.charCodeAt(++i),43!==o&&45!==o||(o=n.charCodeAt(++i)),i=Zo(e,i,o),o=n.charCodeAt(i)),46===o||Yt(o))throw qo(e.source,i,`Invalid number, expected digit but got: ${Yo(e,i)}.`)
return $o(e,s?Qo.FLOAT:Qo.INT,t,i,n.slice(t,i))}function Zo(e,t,r){if(!Kt(r))throw qo(e.source,t,`Invalid number, expected digit but got: ${Yo(e,t)}.`)
const n=e.source.body
let i=t+1
for(;Kt(n.charCodeAt(i));)++i
return i}function es(e,t){const r=e.source.body,n=r.length
let i=t+1,o=i,s=""
for(;i<n;){const n=r.charCodeAt(i)
if(34===n)return s+=r.slice(o,i),$o(e,Qo.STRING,t,i+1,s)
if(92!==n){if(10===n||13===n)break
if(Uo(n))++i
else{if(!Wo(r,i))throw qo(e.source,i,`Invalid character within String: ${Yo(e,i)}.`)
i+=2}}else{s+=r.slice(o,i)
const t=117===r.charCodeAt(i+1)?123===r.charCodeAt(i+2)?ts(e,i):rs(e,i):os(e,i)
s+=t.value,i+=t.size,o=i}}throw qo(e.source,i,"Unterminated string.")}function ts(e,t){const r=e.source.body
let n=0,i=3
for(;i<12;){const e=r.charCodeAt(t+i++)
if(125===e){if(i<5||!Uo(n))break
return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|is(e),n<0)break}throw qo(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)}function rs(e,t){const r=e.source.body,n=ns(r,t+2)
if(Uo(n))return{value:String.fromCodePoint(n),size:6}
if(Ko(n)&&92===r.charCodeAt(t+6)&&117===r.charCodeAt(t+7)){const e=ns(r,t+8)
if(Go(e))return{value:String.fromCodePoint(n,e),size:12}}throw qo(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function ns(e,t){return is(e.charCodeAt(t))<<12|is(e.charCodeAt(t+1))<<8|is(e.charCodeAt(t+2))<<4|is(e.charCodeAt(t+3))}function is(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function os(e,t){const r=e.source.body
switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2}
case 92:return{value:"\\",size:2}
case 47:return{value:"/",size:2}
case 98:return{value:"\b",size:2}
case 102:return{value:"\f",size:2}
case 110:return{value:"\n",size:2}
case 114:return{value:"\r",size:2}
case 116:return{value:"\t",size:2}}throw qo(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function ss(e,t){const r=e.source.body,n=r.length
let i=e.lineStart,o=t+3,s=o,a=""
const c=[]
for(;o<n;){const n=r.charCodeAt(o)
if(34===n&&34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2)){a+=r.slice(s,o),c.push(a)
const n=$o(e,Qo.BLOCK_STRING,t,o+3,$t(c).join("\n"))
return e.line+=c.length-1,e.lineStart=i,n}if(92!==n||34!==r.charCodeAt(o+1)||34!==r.charCodeAt(o+2)||34!==r.charCodeAt(o+3))if(10!==n&&13!==n)if(Uo(n))++o
else{if(!Wo(r,o))throw qo(e.source,o,`Invalid character within String: ${Yo(e,o)}.`)
o+=2}else a+=r.slice(s,o),c.push(a),13===n&&10===r.charCodeAt(o+1)?o+=2:++o,a="",s=o,i=o
else a+=r.slice(s,o),s=o+1,o+=4}throw qo(e.source,o,"Unterminated string.")}function as(e,t){const r=e.source.body,n=r.length
let i=t+1
for(;i<n&&(Gt(o=r.charCodeAt(i))||Kt(o)||95===o);)++i
var o
return $o(e,Qo.NAME,t,i,r.slice(t,i))}const cs=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0
if("object"==typeof e&&null!==e){var r
const n=t.prototype[Symbol.toStringTag]
if(n===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(r=e.constructor)||void 0===r?void 0:r.name)){const t=nt(e)
throw new Error(`Cannot use ${n} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)}}return!1}
class us{constructor(e,t="GraphQL request",r={line:1,column:1}){"string"==typeof e||et(!1,`Body must be a string. Received: ${nt(e)}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||et(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||et(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}class ls{constructor(e,t={}){const r=function(e){return cs(e,us)}(e)?e:new us(e)
this._lexer=new Bo(r),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(Qo.NAME)
return this.node(e,{kind:ft.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:ft.DOCUMENT,definitions:this.many(Qo.SOF,this.parseDefinition,Qo.EOF)})}parseDefinition(){if(this.peek(Qo.BRACE_L))return this.parseOperationDefinition()
const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token
if(t.kind===Qo.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition()
case"scalar":return this.parseScalarTypeDefinition()
case"type":return this.parseObjectTypeDefinition()
case"interface":return this.parseInterfaceTypeDefinition()
case"union":return this.parseUnionTypeDefinition()
case"enum":return this.parseEnumTypeDefinition()
case"input":return this.parseInputObjectTypeDefinition()
case"directive":return this.parseDirectiveDefinition()}if(e)throw qo(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.")
switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition()
case"fragment":return this.parseFragmentDefinition()
case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token
if(this.peek(Qo.BRACE_L))return this.node(e,{kind:ft.OPERATION_DEFINITION,operation:lt.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()})
const t=this.parseOperationType()
let r
return this.peek(Qo.NAME)&&(r=this.parseName()),this.node(e,{kind:ft.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(Qo.NAME)
switch(e.value){case"query":return lt.QUERY
case"mutation":return lt.MUTATION
case"subscription":return lt.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(Qo.PAREN_L,this.parseVariableDefinition,Qo.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:ft.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(Qo.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(Qo.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token
return this.expectToken(Qo.DOLLAR),this.node(e,{kind:ft.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:ft.SELECTION_SET,selections:this.many(Qo.BRACE_L,this.parseSelection,Qo.BRACE_R)})}parseSelection(){return this.peek(Qo.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName()
let r,n
return this.expectOptionalToken(Qo.COLON)?(r=t,n=this.parseName()):n=t,this.node(e,{kind:ft.FIELD,alias:r,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(Qo.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument
return this.optionalMany(Qo.PAREN_L,t,Qo.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,r=this.parseName()
return this.expectToken(Qo.COLON),this.node(t,{kind:ft.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token
this.expectToken(Qo.SPREAD)
const t=this.expectOptionalKeyword("on")
return!t&&this.peek(Qo.NAME)?this.node(e,{kind:ft.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:ft.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token
return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:ft.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:ft.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected()
return this.parseName()}parseValueLiteral(e){const t=this._lexer.token
switch(t.kind){case Qo.BRACKET_L:return this.parseList(e)
case Qo.BRACE_L:return this.parseObject(e)
case Qo.INT:return this.advanceLexer(),this.node(t,{kind:ft.INT,value:t.value})
case Qo.FLOAT:return this.advanceLexer(),this.node(t,{kind:ft.FLOAT,value:t.value})
case Qo.STRING:case Qo.BLOCK_STRING:return this.parseStringLiteral()
case Qo.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:ft.BOOLEAN,value:!0})
case"false":return this.node(t,{kind:ft.BOOLEAN,value:!1})
case"null":return this.node(t,{kind:ft.NULL})
default:return this.node(t,{kind:ft.ENUM,value:t.value})}case Qo.DOLLAR:if(e){if(this.expectToken(Qo.DOLLAR),this._lexer.token.kind===Qo.NAME){const e=this._lexer.token.value
throw qo(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable()
default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token
return this.advanceLexer(),this.node(e,{kind:ft.STRING,value:e.value,block:e.kind===Qo.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:ft.LIST,values:this.any(Qo.BRACKET_L,(()=>this.parseValueLiteral(e)),Qo.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:ft.OBJECT,fields:this.any(Qo.BRACE_L,(()=>this.parseObjectField(e)),Qo.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,r=this.parseName()
return this.expectToken(Qo.COLON),this.node(t,{kind:ft.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[]
for(;this.peek(Qo.AT);)t.push(this.parseDirective(e))
return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token
return this.expectToken(Qo.AT),this.node(t,{kind:ft.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token
let t
if(this.expectOptionalToken(Qo.BRACKET_L)){const r=this.parseTypeReference()
this.expectToken(Qo.BRACKET_R),t=this.node(e,{kind:ft.LIST_TYPE,type:r})}else t=this.parseNamedType()
return this.expectOptionalToken(Qo.BANG)?this.node(e,{kind:ft.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:ft.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(Qo.STRING)||this.peek(Qo.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("schema")
const r=this.parseConstDirectives(),n=this.many(Qo.BRACE_L,this.parseOperationTypeDefinition,Qo.BRACE_R)
return this.node(e,{kind:ft.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:n})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType()
this.expectToken(Qo.COLON)
const r=this.parseNamedType()
return this.node(e,{kind:ft.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("scalar")
const r=this.parseName(),n=this.parseConstDirectives()
return this.node(e,{kind:ft.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:n})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("type")
const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition()
return this.node(e,{kind:ft.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(Qo.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(Qo.BRACE_L,this.parseFieldDefinition,Qo.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName(),n=this.parseArgumentDefs()
this.expectToken(Qo.COLON)
const i=this.parseTypeReference(),o=this.parseConstDirectives()
return this.node(e,{kind:ft.FIELD_DEFINITION,description:t,name:r,arguments:n,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(Qo.PAREN_L,this.parseInputValueDef,Qo.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName()
this.expectToken(Qo.COLON)
const n=this.parseTypeReference()
let i
this.expectOptionalToken(Qo.EQUALS)&&(i=this.parseConstValueLiteral())
const o=this.parseConstDirectives()
return this.node(e,{kind:ft.INPUT_VALUE_DEFINITION,description:t,name:r,type:n,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("interface")
const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition()
return this.node(e,{kind:ft.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("union")
const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes()
return this.node(e,{kind:ft.UNION_TYPE_DEFINITION,description:t,name:r,directives:n,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(Qo.EQUALS)?this.delimitedMany(Qo.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("enum")
const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition()
return this.node(e,{kind:ft.ENUM_TYPE_DEFINITION,description:t,name:r,directives:n,values:i})}parseEnumValuesDefinition(){return this.optionalMany(Qo.BRACE_L,this.parseEnumValueDefinition,Qo.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),n=this.parseConstDirectives()
return this.node(e,{kind:ft.ENUM_VALUE_DEFINITION,description:t,name:r,directives:n})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw qo(this._lexer.source,this._lexer.token.start,`${fs(this._lexer.token)} is reserved and cannot be used for an enum value.`)
return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("input")
const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition()
return this.node(e,{kind:ft.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:n,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(Qo.BRACE_L,this.parseInputValueDef,Qo.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead()
if(e.kind===Qo.NAME)switch(e.value){case"schema":return this.parseSchemaExtension()
case"scalar":return this.parseScalarTypeExtension()
case"type":return this.parseObjectTypeExtension()
case"interface":return this.parseInterfaceTypeExtension()
case"union":return this.parseUnionTypeExtension()
case"enum":return this.parseEnumTypeExtension()
case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("schema")
const t=this.parseConstDirectives(),r=this.optionalMany(Qo.BRACE_L,this.parseOperationTypeDefinition,Qo.BRACE_R)
if(0===t.length&&0===r.length)throw this.unexpected()
return this.node(e,{kind:ft.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("scalar")
const t=this.parseName(),r=this.parseConstDirectives()
if(0===r.length)throw this.unexpected()
return this.node(e,{kind:ft.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("type")
const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition()
if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected()
return this.node(e,{kind:ft.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("interface")
const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition()
if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected()
return this.node(e,{kind:ft.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("union")
const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes()
if(0===r.length&&0===n.length)throw this.unexpected()
return this.node(e,{kind:ft.UNION_TYPE_EXTENSION,name:t,directives:r,types:n})}parseEnumTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("enum")
const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition()
if(0===r.length&&0===n.length)throw this.unexpected()
return this.node(e,{kind:ft.ENUM_TYPE_EXTENSION,name:t,directives:r,values:n})}parseInputObjectTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("input")
const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition()
if(0===r.length&&0===n.length)throw this.unexpected()
return this.node(e,{kind:ft.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:n})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("directive"),this.expectToken(Qo.AT)
const r=this.parseName(),n=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable")
this.expectKeyword("on")
const o=this.parseDirectiveLocations()
return this.node(e,{kind:ft.DIRECTIVE_DEFINITION,description:t,name:r,arguments:n,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(Qo.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName()
if(Object.prototype.hasOwnProperty.call(Vo,t.value))return t
throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new ot(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token
if(t.kind===e)return this.advanceLexer(),t
throw qo(this._lexer.source,t.start,`Expected ${hs(e)}, found ${fs(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token
if(t.kind!==Qo.NAME||t.value!==e)throw qo(this._lexer.source,t.start,`Expected "${e}", found ${fs(t)}.`)
this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token
return t.kind===Qo.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!=e?e:this._lexer.token
return qo(this._lexer.source,t.start,`Unexpected ${fs(t)}.`)}any(e,t,r){this.expectToken(e)
const n=[]
for(;!this.expectOptionalToken(r);)n.push(t.call(this))
return n}optionalMany(e,t,r){if(this.expectOptionalToken(e)){const e=[]
do{e.push(t.call(this))}while(!this.expectOptionalToken(r))
return e}return[]}many(e,t,r){this.expectToken(e)
const n=[]
do{n.push(t.call(this))}while(!this.expectOptionalToken(r))
return n}delimitedMany(e,t){this.expectOptionalToken(e)
const r=[]
do{r.push(t.call(this))}while(this.expectOptionalToken(e))
return r}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance()
if(void 0!==e&&t.kind!==Qo.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw qo(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function fs(e){const t=e.value
return hs(e.kind)+(null!=t?` "${t}"`:"")}function hs(e){return function(e){return e===Qo.BANG||e===Qo.DOLLAR||e===Qo.AMP||e===Qo.PAREN_L||e===Qo.PAREN_R||e===Qo.SPREAD||e===Qo.COLON||e===Qo.EQUALS||e===Qo.AT||e===Qo.BRACKET_L||e===Qo.BRACKET_R||e===Qo.BRACE_L||e===Qo.PIPE||e===Qo.BRACE_R}(e)?`"${e}"`:e}var ps=new Map,ds=new Map,vs=!0,ys=!1
function ms(e){return e.replace(/[\s,]+/g," ").trim()}function bs(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
"string"==typeof e&&(e=[e])
var n=e[0]
return t.forEach((function(t,r){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[r+1]})),function(e){var t,r,n,i=ms(e)
if(!ps.has(i)){var s=function(e,t){return new ls(e,t).parseDocument()}(e,{experimentalFragmentVariables:ys,allowLegacyFragmentVariables:ys})
if(!s||"Document"!==s.kind)throw new Error("Not a valid GraphQL document.")
ps.set(i,function(e){var t=new Set(e.definitions)
t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(r){var n=e[r]
n&&"object"==typeof n&&t.add(n)}))}))
var r=e.loc
return r&&(delete r.startToken,delete r.endToken),e}((t=s,r=new Set,n=[],t.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var t=e.name.value,i=ms((s=e.loc).source.body.substring(s.start,s.end)),o=ds.get(t)
o&&!o.has(i)?vs&&console.warn("Warning: fragment with name "+t+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):o||ds.set(t,o=new Set),o.add(i),r.has(i)||(r.add(i),n.push(e))}else n.push(e)
var s})),o(o({},t),{definitions:n}))))}return ps.get(i)}(n)}function gs(){ps.clear(),ds.clear()}function Es(){vs=!1}function _s(){ys=!0}function Os(){ys=!1}var ws,ks=bs,Ts=gs,Ss=Es,xs=_s,Ds=Os;(ws=bs||(bs={})).gql=ks,ws.resetCaches=Ts,ws.disableFragmentWarnings=Ss,ws.enableExperimentalFragmentVariables=xs,ws.disableExperimentalFragmentVariables=Ds,bs.default=bs,g(!1!==globalThis.__DEV__?"log":"silent")},298:(e,t,r)=>{r.d(t,{g:()=>s,i:()=>u,n:()=>c})
var n=Object.defineProperty;((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})({},{c:()=>l,f:()=>o,g:()=>s,i:()=>u,m:()=>a,n:()=>c,p:()=>f})
var i=new WeakMap
function o(e,t,r,n){return s(e.prototype,t,r,n)}function s(e,t,r,n){let o={configurable:!0,enumerable:!0,writable:!0,initializer:null}
n&&(o.initializer=n)
for(let i of r)o=i(e,t,o)||o
void 0===o.initializer?Object.defineProperty(e,t,o):function(e,t,r){let n=i.get(e)
n||(n=new Map,i.set(e,n)),n.set(t,r)}(e,t,o)}function a({prototype:e},t,r){return c(e,t,r)}function c(e,t,r){let n={...Object.getOwnPropertyDescriptor(e,t)}
for(let i of r)n=i(e,t,n)||n
void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(e):void 0,n.initializer=void 0),Object.defineProperty(e,t,n)}function u(e,t){let r=function(e,t){let r=e.prototype
for(;r;){let e=i.get(r)?.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}function l(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function f(e,t){for(let[r,n,i]of t)"field"===r?h(e,n,i):c(e,n,i)
return e}function h(e,t,r){let n={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let i of r)n=i(e,t,n)||n
n.initializer&&(n.value=n.initializer.call(e),delete n.initializer),Object.defineProperty(e,t,n)}}}])
