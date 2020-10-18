/*!
 * @waxs/que (1.0.5) by Sander Hidding
 * Que JS is a simple query string parser that dissects your URI and can set new data.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/que.git)
 */
var Que=function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";n.r(r);var e=function(t,r){Object.keys(r)[0];Object.keys(r).forEach((function(n){return t.prototype[n]=r[n]}))};var o={log:function(){console.log(this.data)}};var a={_hd:function(t){return t.split(",")},_h:function(t){var r=this._he(t),n=this._hd(r),e=this._p(n);return n.length>1?e:e[0]},_he:function(t){return decodeURI(t.replace(/[{()}]/g,""))}};function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c={duplicate:!0,mask:!1,parse:!0};function f(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l={_hasDuplicates:function(t,r){var n=Array.isArray(this._data[t]),e=this.data[t];return this._data[t]=e||[],!this.config.duplicate&&n&&!this._data[t].includes(r)},_init:function(){this._c();var t=i(this._url.split("?"),2);this._domain=t[0],this._query=t[1],this._query&&this._q()},_c:function(){var t=this;this._config=c,Object.entries(this.config).map((function(r){var n=u(r,2),e=n[0],o=n[1];t._config[e]=o}))},_q:function(){var t=this;this._u(this._query).split("&").forEach((function(r){var n=f(r.split("="),2),e=n[0],o=n[1];t._data[e]=t._h(o)}))}};var s=function(t){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(t)};var y={_m:function(t){return this.config.mask?window.btoa(t):t},_u:function(t){var r=s(t)?window.atob(t):t;return this.config.mask||s(t)?r:t},_vm:s};function p(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h={_p:function(t){var r=this;return t.map((function(t){t=decodeURI(t.replace(/"/g,""));var n=p(r._pn(t),2),e=n[0],o=n[1],a=p(r._pd(t),2),i=a[0],u=a[1];return r.config.parse&&(o&&e||u&&i)||t}))},_pd:function(t){var r=!isNaN(Date.parse(t)),n=[new Date(t),!0];return r?n:[t,!1]},_pn:function(t){var r=parseInt(t);return t.length===r.toString().length?[r,!0]:[t,!1]}};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=function(t){return Date.parse(t)};function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var j=function(t){return("number"==typeof t||isNaN(_(t))?Array.isArray(t)&&"array":"date")||g(t)};function S(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O={add:function(t){var r=this;Object.entries(t).forEach((function(t){var n=b(t,2),e=n[0],o=n[1],a=Array.isArray(o)?o:"number"==typeof o?[o]:o.toString().split(),i=d(r.data[e]);a.forEach((function(t){"object"===i?r._data[e].push(t):r._data[e]?(r._hasDuplictes(e,t)||r._data[e]!==t)&&(r._data[e]=[r._data[e],t]):r._data[e]=t}))}));var n=this._cu();this._uu(n)},get:function(){return this.data},parse:function(t){var r=this,n=t.split("?");return this._u(n[1]).split("&").reduce((function(t,n){var e=v(n.split("="),2),o=e[0],a=e[1];return t[o]=r._h(a),t}),{})},refresh:function(t){var r=this;this._data={},Object.entries(t).forEach((function(t){var n=m(t,2),e=n[0],o=n[1];r._data[e]=o}));var n=this._cu();this._uu(n)},remove:function(t){var r=this,n=t&&Object.entries(t),e=j(t);t||Object.keys(this.data).forEach((function(t){delete r._data[t]})),"string"===e&&this._data[t]&&delete this._data[t],"array"===e&&n.forEach((function(t){var n=S(t,2),e=(n[0],n[1]);r._data[e]&&delete r._data[e]})),"object"===e&&n.forEach((function(t){var n=S(t,2),e=n[0],o=n[1];if("string"!==j(r.data[e])&&"boolean"!==j(r.data[e])||r.data[e]!==o){var a=Array.isArray(o)?o:r.data[e]&&o.split();r.data[e]&&a.forEach((function(t){var n=r.data[e].indexOf(t);n>-1&&r.data[e].splice(n,1)}))}else r._data[e]&&delete r._data[e]}));var o=this._cu();this._uu(o)},set:function(t){var r=this;Object.entries(t).forEach((function(t){var n=w(t,2),e=n[0],o=n[1];r._data[e]=o}));var n=this._cu();this._uu(n)},stringify:function(t){return"?"+this._cu(t)},value:function(t){return this.data[t]}};function A(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E={_cu:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data;return Object.keys(r).map((function(n){var e=r[n],o=A(t._cd(e),2),a=o[0],i=o[1]&&a||e;return"".concat(n,'="').concat(i.toString(),'"')})).join("&")},_uu:function(t){if(void 0!==history.pushState){var r={title:"",url:"?"+this._m(t)};history.pushState(r,r.title,r.url)}}};var k=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)};e(k,{_cd:function(t){if(t instanceof Date){var r=t.getDate(),n=t.getMonth(),e=t.getFullYear();t="".concat(r,"-").concat(n,"-").concat(e)}return[t,!0]}}),e(k,o),e(k,a),e(k,l),e(k,y),e(k,h),e(k,O),e(k,E);var x=function(t){return[{name:"config",value:t},{name:"data",value:{}},{name:"url",value:window.location.href}]};function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t,r){return(P=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}var M=function(t){function r(t){var n,e,o;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),e=this,n=!(o=I(r).call(this))||"object"!==D(o)&&"function"!=typeof o?U(e):o,function(t,r){x(r).forEach((function(r){return t["_"+r.name]=r.value}))}(U(n),t),n._init(),n}var n,e,o;return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&P(t,r)}(r,t),n=r,(e=[{key:"url",get:function(){return{url:this._url,domain:this._domain,query:this._query}}},{key:"config",get:function(){return this._config}},{key:"data",get:function(){return this._data}}])&&T(n.prototype,e),o&&T(n,o),r}(k);r.default=M}]).default;module.exports=Que;