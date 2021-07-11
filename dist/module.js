/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data","@grafana/ui","lodash","@grafana/runtime"],(function(t,e,r,n,o){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=52)}([function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e){t.exports=r},function(t,e,r){var n=r(19),o=r(14),a=r(36),i=r(37),u=Object.prototype,l=u.hasOwnProperty,c=n((function(t,e){t=Object(t);var r=-1,n=e.length,c=n>2?e[2]:void 0;for(c&&a(e[0],e[1],c)&&(n=1);++r<n;)for(var f=e[r],s=i(f),p=-1,y=s.length;++p<y;){var h=s[p],v=t[h];(void 0===v||o(v,u[h])&&!l.call(t,h))&&(t[h]=f[h])}return t}));t.exports=c},function(t,e){t.exports=n},function(t,e){t.exports=o},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(12),o=r(29),a=r(30),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},function(t,e,r){var n=r(13),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=function(t){return t}},function(t,e,r){var n=r(7),o=r(6);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var n=r(8).Symbol;t.exports=n},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(28))},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(11),o=r(16);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var n=r(10),o=r(20),a=r(22);t.exports=function(t,e){return a(o(t,e,n),t+"")}},function(t,e,r){var n=r(21),o=Math.max;t.exports=function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,u=o(a.length-e,0),l=Array(u);++i<u;)l[i]=a[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=a[i];return c[e]=r(l),n(t,this,c)}}},function(t,e){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},function(t,e,r){var n=r(23),o=r(35)(n);t.exports=o},function(t,e,r){var n=r(24),o=r(25),a=r(10),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=i},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,r){var n=r(26),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,r){var n=r(27),o=r(34);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(11),o=r(31),a=r(6),i=r(33),u=/^\[object .+?Constructor\]$/,l=Function.prototype,c=Object.prototype,f=l.toString,s=c.hasOwnProperty,p=RegExp("^"+f.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?p:u).test(i(t))}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(12),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n,o=r(32),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},function(t,e,r){var n=r(8)["__core-js_shared__"];t.exports=n},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var o=r(),a=16-(o-n);if(n=o,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,r){var n=r(14),o=r(15),a=r(17),i=r(6);t.exports=function(t,e,r){if(!i(r))return!1;var u=typeof e;return!!("number"==u?o(r)&&a(e,r.length):"string"==u&&e in r)&&n(r[e],t)}},function(t,e,r){var n=r(38),o=r(49),a=r(15);t.exports=function(t){return a(t)?n(t,!0):o(t)}},function(t,e,r){var n=r(39),o=r(40),a=r(42),i=r(43),u=r(17),l=r(45),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),f=!r&&o(t),s=!r&&!f&&i(t),p=!r&&!f&&!s&&l(t),y=r||f||s||p,h=y?n(t.length,String):[],v=h.length;for(var d in t)!e&&!c.call(t,d)||y&&("length"==d||s&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,v))||h.push(d);return h}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(41),o=r(9),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=l},function(t,e,r){var n=r(7),o=r(9);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){(function(t){var n=r(8),o=r(44),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===a?n.Buffer:void 0,l=(u?u.isBuffer:void 0)||o;t.exports=l}).call(this,r(18)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(46),o=r(47),a=r(48),i=a&&a.isTypedArray,u=i?o(i):n;t.exports=u},function(t,e,r){var n=r(7),o=r(16),a=r(9),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(13),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,u=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}).call(this,r(18)(t))},function(t,e,r){var n=r(6),o=r(50),a=r(51),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return a(t);var e=o(t),r=[];for(var u in t)("constructor"!=u||!e&&i.call(t,u))&&r.push(u);return r}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){"use strict";r.r(e);var n=r(1),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function a(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{l(n.next(t))}catch(t){a(t)}}function u(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}l((n=n.apply(t,e||[])).next())}))}function l(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function c(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}var s=r(3),p=r.n(s),y={queryText:'query {\n      data:submissions(user:"$user"){\n          Time:submitTime\n          idle running completed\n      }\n}',dataPath:"data",timePath:"Time",endTimePath:"endTime",timeFormat:null,groupBy:"",aliasBy:"",annotationTitle:"",annotationText:"",annotationTags:"",constant:6.5},h=r(5),v=r(4),d=r.n(v);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){var e=Object(n.dateTime)(t,n.ISO_8601);if(e.isValid()){var r=e.toISOString();return r===t||r.substring(0,19)===t.substring(0,19)}return!1}var g=["constant","custom","query","textbox"],x=function(t){function e(e,r){var n=t.call(this,e)||this;return n.backendSrv=r,n.basicAuth=e.basicAuth,n.withCredentials=e.withCredentials,n.url=e.url,n}return a(e,t),e.prototype.request=function(t){var e={url:this.url,method:"POST",data:{query:t}};return(this.basicAuth||this.withCredentials)&&(e.withCredentials=!0),this.basicAuth&&(e.headers={Authorization:this.basicAuth}),this.backendSrv.datasourceRequest(e)},e.prototype.postQuery=function(t,e){return this.request(e).then((function(e){return{query:t,results:e}})).catch((function(t){if(t.data&&t.data.error)throw{message:"GraphQL error: "+t.data.error.reason,error:t.data.error};throw t}))},e.prototype.createQuery=function(t,e,r){void 0===r&&(r=void 0);var n=Object(h.getTemplateSrv)().replace(t.queryText,i(i({},r),{timeFrom:{text:"from",value:null==e?void 0:e.from.valueOf()},timeTo:{text:"to",value:null==e?void 0:e.to.valueOf()}}));return this.postQuery(t,n)},e.getDocs=function(t,e){var r,n;if(!t)throw"resultsData was null or undefined";var o=e.split(".").reduce((function(t,e){return t?t[e]:null}),t.data);if(!o){var a=t.errors;if(a&&0!==a.length)throw a[0];throw"Your data path did not exist! dataPath: "+e}t.errors;var u=[],l=function(t){u.push(function t(e,r,n){return void 0===r&&(r=null),void 0===n&&(n="."),Object.keys(e).reduce((function(o,a){var u,l="object"===m(e[a])&&null!=e[a],c=[r,a].filter(Boolean).join(n);return i(i({},o),l?t(e[a],c,n):((u={})[c]=e[a],u))}),{})}(t))};if(Array.isArray(o))try{for(var f=c(o),s=f.next();!s.done;s=f.next()){l(s.value)}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=f.return)&&n.call(f)}finally{if(r)throw r.error}}else l(o);return u},e.getDataPathArray=function(t){var e,r,n=[];try{for(var o=c(t.split(",")),a=o.next();!a.done;a=o.next()){var i=a.value.trim();i&&n.push(i)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}if(!n)throw"data path is empty!";return n},e.prototype.query=function(t){return u(this,void 0,Promise,(function(){var r=this;return l(this,(function(o){return[2,Promise.all(t.targets.map((function(e){return r.createQuery(p()(e,y),t.range,t.scopedVars)}))).then((function(r){var o,a,u,l,f,s,p,y,v,m,g,x,j=[];try{for(var w=c(r),T=w.next();!T.done;T=w.next()){var O=T.value,P=e.getDataPathArray(O.query.dataPath),S=O.query,F=S.timePath,C=S.timeFormat,_=S.groupBy,E=S.aliasBy,A=_.split(","),q=[];try{for(var D=(u=void 0,c(A)),Q=D.next();!Q.done;Q=D.next()){var B=Q.value.trim();B&&q.push(B)}}catch(t){u={error:t}}finally{try{Q&&!Q.done&&(l=D.return)&&l.call(D)}finally{if(u)throw u.error}}try{for(var N=(f=void 0,c(P)),k=N.next();!k.done;k=N.next()){var $=k.value,V=e.getDocs(O.results.data,$),W=new Map;try{for(var L=(p=void 0,c(V)),M=L.next();!M.done;M=L.next()){var I=M.value;F in I&&(I[F]=Object(n.dateTime)(I[F],C));var R=[];try{for(var U=(v=void 0,c(q)),G=U.next();!G.done;G=U.next()){var H=G.value;R.push(I[H])}}catch(t){v={error:t}}finally{try{G&&!G.done&&(m=U.return)&&m.call(U)}finally{if(v)throw v.error}}var z=R.toString();if(!(tt=W.get(z))){tt=new n.MutableDataFrame({fields:[]});var Y={};for(var J in I)Y["field_"+J]=I[J];var K=function(e){var r=n.FieldType.string;e===F||b(String(I[e]))?r=n.FieldType.time:d.a.isNaN(d.a.toNumber(I[e]))||(r=n.FieldType.number);var o=void 0;if(o=0!==R.length?z+"_"+e:e,E){o=E;var a=i({},Y);for(var u in a.fieldName=e,a){var l=a[u],c=new RegExp("\\$"+u,"g");o=o.replace(c,l)}o=Object(h.getTemplateSrv)().replace(o,t.scopedVars)}tt.addField({name:e,type:r,config:{displayName:o}}).parse=function(t){return r===n.FieldType.number?d.a.toNumber(t):t||""}};for(var J in I)K(J);W.set(z,tt)}tt.add(I)}}catch(t){p={error:t}}finally{try{M&&!M.done&&(y=L.return)&&y.call(L)}finally{if(p)throw p.error}}try{for(var X=(g=void 0,c(W.values())),Z=X.next();!Z.done;Z=X.next()){var tt=Z.value;j.push(tt)}}catch(t){g={error:t}}finally{try{Z&&!Z.done&&(x=X.return)&&x.call(X)}finally{if(g)throw g.error}}}}catch(t){f={error:t}}finally{try{k&&!k.done&&(s=N.return)&&s.call(N)}finally{if(f)throw f.error}}}}catch(t){o={error:t}}finally{try{T&&!T.done&&(a=w.return)&&a.call(w)}finally{if(o)throw o.error}}return{data:j}}))]}))}))},e.prototype.annotationQuery=function(t){var r=p()(t.annotation,y);return Promise.all([this.createQuery(r,t.range)]).then((function(t){var o,a,i,u,l,f,s,p,y=[];try{for(var h=c(t),v=h.next();!v.done;v=h.next()){var d=v.value,m=d.query,b=m.timePath,g=m.endTimePath,x=m.timeFormat,j=e.getDataPathArray(d.query.dataPath);try{for(var w=(i=void 0,c(j)),T=w.next();!T.done;T=w.next()){var O=T.value,P=e.getDocs(d.results.data,O);try{for(var S=(l=void 0,c(P)),F=S.next();!F.done;F=S.next()){var C=F.value,_={};b in C&&(_.time=Object(n.dateTime)(C[b],x).valueOf()),g in C&&(_.isRegion=!0,_.timeEnd=Object(n.dateTime)(C[g],x).valueOf());var E=r.annotationTitle,A=r.annotationText,q=r.annotationTags;for(var D in C){var Q=C[D],B=new RegExp("\\$"+("field_"+D),"g");E=E.replace(B,Q),A=A.replace(B,Q),q=q.replace(B,Q)}_.title=E,_.text=A;var N=[];try{for(var k=(s=void 0,c(q.split(","))),$=k.next();!$.done;$=k.next()){var V=$.value.trim();V&&N.push(V)}}catch(t){s={error:t}}finally{try{$&&!$.done&&(p=k.return)&&p.call(k)}finally{if(s)throw s.error}}_.tags=N,y.push(_)}}catch(t){l={error:t}}finally{try{F&&!F.done&&(f=S.return)&&f.call(S)}finally{if(l)throw l.error}}}}catch(t){i={error:t}}finally{try{T&&!T.done&&(u=w.return)&&u.call(w)}finally{if(i)throw i.error}}}}catch(t){o={error:t}}finally{try{v&&!v.done&&(a=h.return)&&a.call(h)}finally{if(o)throw o.error}}return y}))},e.prototype.testDatasource=function(){return this.postQuery(y,"{\n      __schema{\n        queryType{name}\n      }\n    }").then((function(t){return t.errors?{status:"error",message:"GraphQL Error: "+t.errors[0].message}:{status:"success",message:"Success"}}),(function(t){return{status:"error",message:"HTTP Response "+t.status+": "+t.statusText}}))},e.prototype.metricFindQuery=function(t,r){return u(this,void 0,void 0,(function(){var r,n,o,a,u,f,s,v,d,m;return l(this,(function(l){switch(l.label){case 0:return r=[],t=p()(t,y),n=t.queryText,n=Object(h.getTemplateSrv)().replace(n,i({},this.getVariables)),[4,this.postQuery(t,n)];case 1:o=l.sent(),a=e.getDocs(o.results.data,t.dataPath);try{for(u=c(a),f=u.next();!f.done;f=u.next())if("__text"in(s=f.value)&&"__value"in s)r.push({text:s.__text,value:s.__value});else for(v in s)r.push({text:s[v]})}catch(t){d={error:t}}finally{try{f&&!f.done&&(m=u.return)&&m.call(u)}finally{if(d)throw d.error}}return[2,r]}}))}))},e.prototype.getVariables=function(){var t={};return Object.values(Object(h.getTemplateSrv)().getVariables()).forEach((function(e){if(g.includes(e.type)){var r=e,n=r.current.value;("$__all"===n||Object(v.isEqual)(n,["$__all"]))&&(n=null===r.allValue||""===r.allValue?r.options.slice(1).map((function(t){return t.value})):r.allValue),t[r.id]={text:r.current.text,value:n}}})),t},e}(n.DataSourceApi),j=r(0),w=r.n(j),T=r(2),O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onChangeQuery=function(t,r){var n=e.props,o=n.onChange,a=n.query;o&&o(i(i({},a),{queryText:t}))},e.onDataPathTextChange=function(t){var r=e.props,n=r.onChange,o=r.query;n(i(i({},o),{dataPath:t.target.value}))},e.onTimePathTextChange=function(t){var r=e.props,n=r.onChange,o=r.query;n(i(i({},o),{timePath:t.target.value}))},e.onTimeFormatTextChange=function(t){var r=e.props,n=r.onChange,o=r.query;n(i(i({},o),{timeFormat:t.target.value}))},e.onGroupByTextChange=function(t){var r=e.props,n=r.onChange,o=r.query;n(i(i({},o),{groupBy:t.target.value}))},e.onAliasByTextChange=function(t){var r=e.props,n=r.onChange,o=r.query;n(i(i({},o),{aliasBy:t.target.value}))},e}return a(e,t),e.prototype.onComponentDidMount=function(){},e.prototype.render=function(){var t=p()(this.props.query,y),e=t.queryText,r=t.dataPath,n=t.timePath,o=t.timeFormat,a=t.groupBy,i=t.aliasBy;return w.a.createElement(w.a.Fragment,null,w.a.createElement(T.QueryField,{query:e||"",onChange:this.onChangeQuery,portalOrigin:"graphQL"}),w.a.createElement("div",{className:"gf-form"},w.a.createElement(T.LegacyForms.FormField,{labelWidth:8,inputWidth:24,value:r||"",onChange:this.onDataPathTextChange,label:"Data path",tooltip:"dot-delimited path to data in response. Separate with commas to use multiple data paths"})),w.a.createElement("div",{className:"gf-form"},w.a.createElement(T.LegacyForms.FormField,{labelWidth:8,inputWidth:24,value:n||"",onChange:this.onTimePathTextChange,label:"Time path",tooltip:"dot-delimited path to time under data path"})),w.a.createElement("div",{className:"gf-form"},w.a.createElement(T.LegacyForms.FormField,{labelWidth:8,inputWidth:24,value:o||"",onChange:this.onTimeFormatTextChange,label:"Time format",tooltip:w.a.createElement("a",{href:"https://momentjs.com/docs/#/parsing/string-format/",title:"Formatting help"},"Optional time format in moment.js format. ",w.a.createElement(T.Icon,{name:"external-link-alt"}))})),w.a.createElement("div",{className:"gf-form"},w.a.createElement(T.LegacyForms.FormField,{labelWidth:8,inputWidth:24,value:a||"",onChange:this.onGroupByTextChange,label:"Group by",tooltip:"dot-delimited path for the key to use. Separate with commas to use multiple fields to group by"})),w.a.createElement("div",{className:"gf-form"},w.a.createElement(T.LegacyForms.FormField,{labelWidth:8,inputWidth:24,value:i||"",onChange:this.onAliasByTextChange,label:"Alias by",tooltip:"The formattable text to alias by. Use $field_<field name> to replace with the value of a field, or $fieldName to replace with the name of the field"})))},e}(j.PureComponent),P=function(){function t(){}return t.templateUrl="partials/annotations.editor.html",t}();r.d(e,"plugin",(function(){return S}));var S=new n.DataSourcePlugin(x).setConfigEditor((function(t){var e=t.options,r=t.onOptionsChange;return w.a.createElement(w.a.Fragment,null,w.a.createElement(T.DataSourceHttpSettings,{defaultUrl:"http://localhost:9999",dataSourceConfig:e,onChange:r,showAccessOptions:!0}))})).setAnnotationQueryCtrl(P).setQueryEditor(O).setVariableQueryEditor((function(t){var e=t.onChange,r=t.query,n=f(Object(j.useState)(r),2),o=n[0],a=n[1],u=function(){e(o,o.queryText+" ("+o.dataPath+")")};return w.a.createElement(w.a.Fragment,null,w.a.createElement("div",{className:"gf-form"},w.a.createElement("span",{className:"gf-form-label width-10"},"Data Path"),w.a.createElement("input",{name:"dataPath",className:"gf-form-input",onBlur:u,onChange:function(t){var e;return a(i(i({},o),((e={})[t.currentTarget.name]=t.currentTarget.value,e)))},value:o.dataPath})),w.a.createElement("div",{className:"gf-form"},w.a.createElement("span",{className:"gf-form-label width-10"},"Query"),w.a.createElement(T.QueryField,{query:o.queryText||"",onBlur:u,onChange:function(t,e){return a(i(i({},o),{queryText:t}))},portalOrigin:"graphQL"})))}))}])}));
//# sourceMappingURL=module.js.map