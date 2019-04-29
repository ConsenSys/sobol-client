var SobolClient=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=8)}([function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(2),r=n(13),a=Object.prototype.toString;function c(e){return"[object Array]"===a.call(e)}function s(e){return null!==e&&"object"===i(e)}function u(e){return"[object Function]"===a.call(e)}function f(e,t){if(null!=e)if("object"!==i(e)&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:c,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function n(){var r={};function e(e,t){"object"===i(r[t])&&"object"===i(e)?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)f(arguments[t],e);return r},extend:function(n,e,r){return f(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(c,e,s){"use strict";(function(e){var n=s(0),r=s(16),t={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,a={adapter:("undefined"!=typeof XMLHttpRequest?i=s(3):void 0!==e&&(i=s(3)),i),transformRequest:[function(e,t){return r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(t)}),c.exports=a}).call(this,s(15))},function(e,t,n){"use strict";e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t,p){"use strict";var d=p(0),h=p(17),g=p(19),y=p(20),_=p(21),m=p(4),v="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||p(22);e.exports=function(l){return new Promise(function(n,r){var o=l.data,i=l.headers;d.isFormData(o)&&delete i["Content-Type"];var a=new XMLHttpRequest,e="onreadystatechange",c=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in a||_(l.url)||(a=new window.XDomainRequest,e="onload",c=!0,a.onprogress=function(){},a.ontimeout=function(){}),l.auth){var t=l.auth.username||"",s=l.auth.password||"";i.Authorization="Basic "+v(t+":"+s)}if(a.open(l.method.toUpperCase(),g(l.url,l.params,l.paramsSerializer),!0),a.timeout=l.timeout,a[e]=function(){if(a&&(4===a.readyState||c)&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in a?y(a.getAllResponseHeaders()):null,t={data:l.responseType&&"text"!==l.responseType?a.response:a.responseText,status:1223===a.status?204:a.status,statusText:1223===a.status?"No Content":a.statusText,headers:e,config:l,request:a};h(n,r,t),a=null}},a.onerror=function(){r(m("Network Error",l,null,a)),a=null},a.ontimeout=function(){r(m("timeout of "+l.timeout+"ms exceeded",l,"ECONNABORTED",a)),a=null},d.isStandardBrowserEnv()){var u=p(23),f=(l.withCredentials||_(l.url))&&l.xsrfCookieName?u.read(l.xsrfCookieName):void 0;f&&(i[l.xsrfHeaderName]=f)}if("setRequestHeader"in a&&d.forEach(i,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:a.setRequestHeader(t,e)}),l.withCredentials&&(a.withCredentials=!0),l.responseType)try{a.responseType=l.responseType}catch(e){if("json"!==l.responseType)throw e}"function"==typeof l.onDownloadProgress&&a.addEventListener("progress",l.onDownloadProgress),"function"==typeof l.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",l.onUploadProgress),l.cancelToken&&l.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),void 0===o&&(o=null),a.send(o)})}},function(e,t,n){"use strict";var a=n(18);e.exports=function(e,t,n,r,o){var i=new Error(e);return a(i,t,n,r,o)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){var r=n(35),o=r.name,i=r.version;e.exports={PKG_NAME:o,VERSION:i,API_ENDPOINT:"https://sobol.io/d/api/v1"}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=n(9),l=n(36).buildQuery,o=function(e){function o(){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=a(this,c(o).call(this,t))).Applications={create:function(e,t){return n._request.post("".concat(n._orgPath,"/applications").concat(l(t)),e)},find:function(e){return n._request.get("".concat(n._orgPath,"/applications").concat(l(e)))},findById:function(e){return n._request.get("".concat(n._orgPath,"/applications/").concat(e))},update:function(e){return n._request.put("".concat(n._orgPath,"/applications/").concat(e._id),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/applications/").concat(e))},getKeys:function(e){return n._request.get("".concat(n._orgPath,"/applications/").concat(e,"/keys"))},getKey:function(e,t){return n._request.get("".concat(n._orgPath,"/applications/").concat(e,"/keys/").concat(t))},createKey:function(e,t){return n._request.post("".concat(n._orgPath,"/applications/").concat(e,"/keys").concat(l(t)))},deleteKey:function(e,t){return n._request.delete("".concat(n._orgPath,"/applications/").concat(e,"/keys/").concat(t))}},n.Users={create:function(e){return n._request.post("".concat(n._orgPath,"/users"),e)},find:function(e){return n._request.get("".concat(n._orgPath,"/users").concat(l(e)))},findByEmail:function(e){return n._request.get("".concat(n._orgPath,"/users/").concat(e))},update:function(e){return n._request.put("".concat(n._orgPath,"/users/").concat(e._id),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/users/").concat(e))},createBatch:function(e){return n._request.post("".concat(n._orgPath,"/users/batch"),e)}},n.UserProfile={findById:function(e){return n._request.get("".concat(n._orgPath,"/user-profile/").concat(e))},update:function(e){return n._request.put("".concat(n._orgPath,"/user-profile/").concat(e.userId),e)}},n.Teams={find:function(e){return n._request.get("".concat(n._orgPath,"/teams").concat(l(e)))},create:function(e){return n._request.post("".concat(n._orgPath,"/teams"),e)},update:function(e){return n._request.put("".concat(n._orgPath,"/teams/").concat(e._id),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/teams/").concat(e))},updateParentTeam:function(e,t){return n._request.post("".concat(n._orgPath,"/teams/").concat(e,"/parent"),{parentId:t})}},n.TeamProfile={findById:function(e){return n._request.get("".concat(n._orgPath,"/team-profile/").concat(e))},update:function(e){return n._request.put("".concat(n._orgPath,"/team-profile/").concat(e.teamId),e)}},n.Roles={find:function(e){return n._request.get("".concat(n._orgPath,"/roles").concat(l(e)))},create:function(e){return n._request.post("".concat(n._orgPath,"/roles"),e)},update:function(e){return n._request.put("".concat(n._orgPath,"/roles/").concat(e._id),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/roles/").concat(e))},assignUser:function(e,t){return n._request.post("".concat(n._orgPath,"/roles/").concat(e,"/user"),{filledById:t})},unassignUser:function(e){return n._request.delete("".concat(n._orgPath,"/roles/").concat(e,"/user"))},updateParentTeam:function(e,t){return n._request.post("".concat(n._orgPath,"/roles/").concat(e,"/parent"),{contributesToId:t})}},n.Goals={find:function(e){return n._request.get("".concat(n._orgPath,"/goals").concat(l(e)))},create:function(e){return n._request.post("".concat(n._orgPath,"/goals"),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/goals/").concat(e))},update:function(e){return n._request.put("".concat(n._orgPath,"/goals/").concat(e._id),e)},updateOwners:function(e,t){return n._request.post("".concat(n._orgPath,"/goals/").concat(e,"/owners"),{owners:t})},updateTeams:function(e,t){return n._request.post("".concat(n._orgPath,"/goals/").concat(e,"/teams"),{teams:t})}},n.Agreements={find:function(e){return n._request.get("".concat(n._orgPath,"/agreements").concat(l(e)))},create:function(e){return n._request.post("".concat(n._orgPath,"/agreements"),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/agreements/").concat(e))},update:function(e){return n._request.put("".concat(n._orgPath,"/agreements/").concat(e._id),e)},addSignatory:function(e,t){return n._request.post("".concat(n._orgPath,"/agreements/").concat(e,"/signatories"),t)},removeSignatory:function(e,t){return n._request.delete("".concat(n._orgPath,"/agreements/").concat(e,"/signatories/").concat(t._id),{})},updateParties:function(e,t){return n._request.post("".concat(n._orgPath,"/agreements/").concat(e,"/parties"),{parties:t})}},n.Attachments={find:function(e){return n._request.get("".concat(n._orgPath,"/attachments").concat(l(e)))},create:function(e){return n._request.post("".concat(n._orgPath,"/attachments"),e)},update:function(e){return n._request.put("".concat(n._orgPath,"/attachments/").concat(e._id),e)},delete:function(e){return n._request.delete("".concat(n._orgPath,"/attachments/").concat(e))}},n.Interaction={find:function(e){return n._request.get("".concat(n._orgPath,"/interactions").concat(l(e)))},create:function(e){return n._request.post("".concat(n._orgPath,"/interactions"),e)}},n.Notifications={find:function(e){return n._request.get("".concat(n._orgPath,"/notifications").concat(l(e)))},getUnreadCount:function(){return n._request.get("".concat(n._orgPath,"/notifications/unread-count"))},markAsRead:function(){return n._request.post("".concat(n._orgPath,"/notifications/markAsRead"))},clear:function(){return n._request.post("".concat(n._orgPath,"/notifications/clearAll"))}},a(n,s(n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,f),function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(o,[{key:"get",value:function(e){return this._request.get(e)}},{key:"post",value:function(e,t){return this._request.post(e,t)}},{key:"put",value:function(e,t){return this._request.put(e,t)}},{key:"delete",value:function(e){return this._request.delete(e)}}]),o}();e.exports=o},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(10),i=n(31),a=n(7),c=a.PKG_NAME,s=a.VERSION,u=a.API_ENDPOINT,f=console.warn,l=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._isInitializing=!0,this}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"configure",value:function(t){var n=this;return new Promise(function(e){t.protocol&&n._dreprecateProp("protocol","endpoint"),t.host&&n._dreprecateProp("host","endpoint"),t.namespace&&n._dreprecateProp("namespace","endpoint"),t.version&&n._dreprecateProp("version","endpoint"),n._key=t.key||n._key||null,n._endpoint=t.endpoint||n._endpoint||u,n._headers=t.headers||n._headers||null,n._orgId=t.orgId||n.orgId||null,n._errorHandler=t.errorHandler||n._errorHandler||null,n._isInitializing&&(n._request=new o,n._auth=new i),(n._isInitializing||t.endpoint||t.headers||t.errorHandler)&&n._request.configure({endpoint:n._endpoint,headers:n._headers,errorHandler:n._errorHandler}),n._isInitializing=!1,t.key||t.orgId?e(n._authenticate(n._key,t.orgId)):e(n)})}},{key:"destroy",value:function(){return this._auth.deauthenticate(),this._request.destroy(),this._setOrg(null),this._key=null,this}},{key:"getSession",value:function(){return this._isInitializing&&f("[".concat(c,'] ... run "configure()" to set a session before running "getSession()"')),this._auth.getSession()}},{key:"getKey",value:function(){return this._isInitializing&&f("[".concat(c,'] ... run "configure()" to set a key before running "getSession()"')),this._key}},{key:"getVersion",value:function(){return s}},{key:"_handleOrgs",value:function(e,t){if(t)this._setOrg(t);else if(1===e.length)this._setOrg(e[0]);else{if(!e.includes(this._orgId))throw new Error("[".concat(c,'] ... requires a valid "orgId" param.'));this._setOrg(this._orgId)}}},{key:"_setOrg",value:function(e){this._orgId=e,this._orgPath=e?"/org/".concat(this._orgId):""}},{key:"_authenticate",value:function(t,n){var r=this;return t?this._auth.authenticate(t).then(function(e){return r._handleOrgs(e.orgIds||[e.oid],n),r._request.configure({key:t}),r}):this}},{key:"_dreprecateProp",value:function(e,t){f("[".concat(c,'] ... "').concat(e,'" property has been deprecated. Please use the "').concat(t,'" property instead.'))}},{key:"_deprecateMethod",value:function(e,t,n){return f("[".concat(c,'] ... "').concat(e,'()" has been deprecated. Please use the "').concat(t,'({ ... })" method instead.')),this[t](n)}},{key:"connect",value:function(e){return this._deprecateMethod("connect","configure",e)}},{key:"disconnect",value:function(){return this._deprecateMethod("disconnect","destroy")}},{key:"setKey",value:function(e){return this._deprecateMethod("setKey","configure",{key:e})}},{key:"setToken",value:function(e){return this._deprecateMethod("setToken","configure",{key:e})}},{key:"setOrg",value:function(e){return this._deprecateMethod("setOrg","configure",{orgId:e})}}]),e}();e.exports=l},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(11),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"configure",value:function(e){return this._endpoint=e.endpoint||this._endpoint||"",this._headers=e.headers||this._headers||{},this._key=e.key||this._key||null,e.errorHandler&&this._setErrorHandler(e.errorHandler),this._setAuthHeader(),this}},{key:"destroy",value:function(){return this._headers.Authorization&&delete this._headers.Authorization,this}},{key:"get",value:function(e){return o.get("".concat(this._endpoint).concat(e),{headers:this._headers}).catch(this._handleError)}},{key:"post",value:function(e,t){return o.post("".concat(this._endpoint).concat(e),t||{},{headers:this._headers}).catch(this._handleError)}},{key:"put",value:function(e,t){return o.put("".concat(this._endpoint).concat(e),t||{},{headers:this._headers}).catch(this._handleError)}},{key:"delete",value:function(e){return o.delete("".concat(this._endpoint).concat(e),{headers:this._headers}).catch(this._handleError)}},{key:"_handleError",value:function(e){return Promise.reject(e)}},{key:"_setAuthHeader",value:function(){this._headers=function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({},this._headers,{Authorization:this._key?"Bearer ".concat(this._key):"None"})}},{key:"_setErrorHandler",value:function(e){e&&(this._handleError=e)}}]),e}();e.exports=i},function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(14),a=n(1);function c(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var s=c(a);s.Axios=i,s.create=function(e){return c(r.merge(a,e))},s.Cancel=n(6),s.CancelToken=n(29),s.isCancel=n(5),s.all=function(e){return Promise.all(e)},s.spread=n(30),e.exports=s,e.exports.default=s},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(1),o=n(0),i=n(24),a=n(25);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(n){c.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}}),o.forEach(["post","put","patch"],function(r){c.prototype[r]=function(e,t,n){return this.request(o.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=c},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?u=s.concat(u):l=-1,u.length&&d())}function d(){if(!f){var e=c(p);f=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var o=n(0);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,n){"use strict";var o=n(4);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var i=n(0);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(i.isURLSearchParams(t))r=t.toString();else{var o=[];i.forEach(t,function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}},function(e,t,n){"use strict";var i=n(0),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&i.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=i.trim(e.substr(0,r)).toLowerCase(),n=i.trim(e.substr(r+1)),t){if(o[t]&&0<=a.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){"use strict";var r,o,i,a=n(0);function c(e){var t=e;return o&&(i.setAttribute("href",t),t=i.href),i.setAttribute("href",t),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}e.exports=a.isStandardBrowserEnv()?(o=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),r=c(window.location.href),function(e){var t=a.isString(e)?c(e):e;return t.protocol===r.protocol&&t.host===r.host}):function(){return!0}},function(e,t,n){"use strict";function c(){this.message="String contains an invalid character"}(c.prototype=new Error).code=5,c.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,r=String(e),o="",i=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.charAt(0|i)||(a="=",i%1);o+=a.charAt(63&t>>8-i%1*8)){if(255<(n=r.charCodeAt(i+=.75)))throw new c;t=t<<8|n}return o}},function(e,t,n){"use strict";var c=n(0);e.exports=c.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),c.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),c.isString(r)&&a.push("path="+r),c.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(26),i=n(5),a=n(1),c=n(27),s=n(28);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return u(t),t.baseURL&&!c(t.url)&&(t.url=s(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(6);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t,n){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(32),i=n(7).PKG_NAME,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"authenticate",value:function(n){var r=this;return new Promise(function(e){if(n&&n.kid)throw new Error("[".concat(i,"] ... RSA keys have been deprecated. Please transition to API keys."));if("string"!=typeof n)throw new Error("[".concat(i,'] ... auth requires the "key" is a JWT'));var t=o(n);r._setSession(t),e(t)})}},{key:"deauthenticate",value:function(){var t=this;return new Promise(function(e){t._setSession(null),e()})}},{key:"getSession",value:function(){return this._session}},{key:"_setSession",value:function(e){return this._session=e,this._session}}]),e}();e.exports=a},function(e,t,n){"use strict";var r=n(33);function o(e){this.message=e}(o.prototype=new Error).name="InvalidTokenError",e.exports=function(e,t){if("string"!=typeof e)throw new o("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(r(e.split(".")[n]))}catch(e){throw new o("Invalid token specified: "+e.message)}},e.exports.InvalidTokenError=o},function(e,t,n){var r=n(34);e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(t)}catch(e){return r(t)}}},function(e,t){function c(e){this.message=e}(c.prototype=new Error).name="InvalidCharacterError",e.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,o=0,i=0,a="";r=t.charAt(i++);~r&&(n=o%4?64*n+r:r,o++%4)?a+=String.fromCharCode(255&n>>(-2*o&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return a}},function(e){e.exports={name:"sobol-client",description:"A JavaScript client library exposing Sobol's RESTful API.",license:"MIT",author:"Sobol - <team@sobol.io>",repository:"git@github.com:ConsenSys/sobol-client.git",version:"1.0.0",main:"index.js",scripts:{build:"cross-env NODE_ENV=production webpack -p --progress --mode production --config webpack.config.js",clean:"rm -rf node_modules browser *.log","debug-node":"cross-env NODE_ENV=development nodemon --watch src --watch examples --exec node --inspect-brk examples/node.js",format:"prettier-package-json --write ./package.json && eslint . --fix --max-warnings=0",lint:"eslint . --max-warnings=0","start-browser":"cross-env NODE_ENV=development webpack-dev-server --progress --open --mode development --config webpack.config.js","start-node":"cross-env NODE_ENV=development nodemon --watch src --watch examples --exec node examples/node.js",test:"cross-env NODE_ENV=development nodemon --watch src --watch tests --exec node tests/deprecations.js"},dependencies:{axios:"^0.18.0","jwt-decode":"^2.2.0"},devDependencies:{"@babel/core":"^7.1.2","@babel/preset-env":"^7.1.0","babel-loader":"^8.0.4","clean-webpack-plugin":"^0.1.19","cross-env":"^5.2.0",eslint:"^5.3.0","eslint-config-airbnb-base":"13.1.0","eslint-loader":"^2.1.2","eslint-plugin-import":"^2.14.0","html-webpack-plugin":"^3.2.0",husky:"^1.1.2","lint-staged":"^7.3.0",nodemon:"^1.18.4","prettier-package-json":"^2.1.0","uglifyjs-webpack-plugin":"^2.0.1",webpack:"^4.20.2","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.9"},husky:{hooks:{"pre-commit":"lint-staged && npm run build && git add browser"}},"lint-staged":{"package.json":["prettier-package-json --write","git add"],"*.js":["eslint --fix --max-warnings=0","git add"]}}},function(e,t){e.exports={buildQuery:function(t){var e;return t&&(e=Object.keys(t).filter(function(e){return t[e]}).map(function(e){return"".concat(e,"=").concat(t[e])}).join("&")),e?"?".concat(e):""}}}]);
//# sourceMappingURL=sobol-client.js.map