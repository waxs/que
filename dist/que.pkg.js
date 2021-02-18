/*!
 * @waxs/que (1.0.13) by Sander Hidding
 * Que JS is a simple query string parser that dissects your URI and can set new data.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/que.git)
 */
var Que=function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";n.r(r);var e=function(t,r){Object.keys(r)[0];Object.keys(r).forEach((function(n){return t.prototype[n]=r[n]}))};var o={log:function(){console.log(this.data)}};var a={_hd:function(t){return t.match(/"(.*?)"/g)},_h:function(t){var r=this._he(t),n=this._hd(r),e=this._p(n);return n.length>1?e:e[0]},_he:function(t){return decodeURI(t.replace(/[-[\]{}()*+?.\\^$|#\s]/g,"\\$"))}};function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function c(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){l(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function l(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var s={duplicate:!1,history:!1,mask:!1,parse:!0};function y(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return p(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var h={_hasDuplicates:function(t,r){var n=Array.isArray(this._data[t]),e=this.data[t];return this._data[t]=e||[],!this.config.duplicate&&n&&this._data[t].includes(r)},_init:function(){this._c();var t=i(this._url.split("?"),2);this._domain=t[0],this._query=t[1],this._query&&this._q()},_c:function(){this._config=f(f({},s),this._config)},_q:function(){var t=this,r=[],n=this._u(this._query).split(/([^&=]+)=(.*?)(?=&[^&=]+=|$)/g);n.forEach((function(t,e){(t&&"&"===t||0===e)&&r.push("".concat(n[e+1],"=").concat(n[e+2]))})),r.forEach((function(r){var n=y(r.split("="),2),e=n[0],o=n[1];t._data[e]=t._h(o)}))}};var d=function(t){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(t)};var b={_m:function(t){return this.config.mask?window.btoa(t):t},_u:function(t){var r=d(t)?window.atob(t):t;return this.config.mask||d(t)?r:t},_vm:d};function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return v(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var g={_p:function(t){var r=this;return t.map((function(t){t=decodeURI(t.replace(/"/g,""));var n=m(r._pn(t),2),e=n[0],o=n[1],a=m(r._pd(t),2),i=a[0],u=a[1];return r.config.parse&&(o&&e||u&&i)||t}))},_pd:function(t){var r=!isNaN(Date.parse(t)),n=[new Date(t),!0];return r?n:[t,!1]},_pn:function(t){var r=parseInt(t);return t.length===r.toString().length?[r,!0]:[t,!1]}};function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return j(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function O(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return A(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function w(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return I(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var E=function(t){return Date.parse(t)};function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var U=function(t){return("number"==typeof t||isNaN(E(t))?Array.isArray(t)&&"array":"date")||D(t)};function P(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return k(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function x(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return M(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var T={add:function(t){var r=this;Object.entries(t).forEach((function(t){var n=S(t,2),e=n[0],o=n[1],a=Array.isArray(o)?o:"number"==typeof o?[o]:o.toString().split(),i=_(r.data[e]);a.forEach((function(t){if(!r._hasDuplicates(e,t)){"object"===i?r._data[e].push(t):r._data[e]?(r._hasDuplicates(e,t)||r._data[e]!==t)&&(r._data[e]=[r._data[e],t]):r._data[e]=t}}))}));var n=this._cu();this._uu(n)},get:function(){return this.data},parse:function(t){var r=this,n=t.split("?");return this._u(n[1]).split("&").reduce((function(t,n){var e=O(n.split("="),2),o=e[0],a=e[1];return t[o]=r._h(a),t}),{})},refresh:function(t){var r=this;this._data={},Object.entries(t).forEach((function(t){var n=w(t,2),e=n[0],o=n[1];r._data[e]=o}));var n=this._cu();this._uu(n)},remove:function(t){var r=this,n=t&&Object.entries(t),e=U(t);t||Object.keys(this.data).forEach((function(t){delete r._data[t]})),"string"===e&&this._data[t]&&delete this._data[t],"array"===e&&n.forEach((function(t){var n=P(t,2),e=(n[0],n[1]);r._data[e]&&delete r._data[e]})),"object"===e&&n.forEach((function(t){var n=P(t,2),e=n[0],o=n[1];if("string"!==U(r.data[e])&&"boolean"!==U(r.data[e])||r.data[e]!==o){var a=Array.isArray(o)?o:r.data[e]&&o.split();r.data[e]&&a.forEach((function(t){var n=r.data[e].indexOf(t);n>-1&&r.data[e].splice(n,1)}))}else r._data[e]&&delete r._data[e]}));var o=this._cu();this._uu(o)},set:function(t){var r=this;Object.entries(t).forEach((function(t){var n=x(t,2),e=n[0],o=n[1];r._data[e]=o}));var n=this._cu();this._uu(n)},stringify:function(t){return"?"+this._cu(t)},value:function(t){return this.data[t]}};function C(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return $(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var R={_cu:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data,n=Object.keys(r),e=function(r){var n=C(t._cd(r),2),e=n[0],o=n[1];return r&&(o&&e||r).toString()},o=n.map((function(t){var n=r[t];return"array"!==U(n)?"".concat(t,'="').concat(e(n),'"'):"".concat(t,"=").concat(n.map((function(t){return'"'.concat(e(t))})).join('",'),'"')}));return o.join("&")},_uu:function(t){if(void 0!==history.pushState){var r={title:"",url:"?"+this._m(t)},n=this.config.history?"pushState":"replaceState";history[n](r,r.title,r.url)}}};var N=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)};e(N,{_cd:function(t){if(t instanceof Date){var r=t.getDate(),n=t.getMonth(),e=t.getFullYear();t="".concat(r,"-").concat(n,"-").concat(e)}return[t,!0]}}),e(N,o),e(N,a),e(N,h),e(N,b),e(N,g),e(N,T),e(N,R);var q=function(t){return[{name:"config",value:t},{name:"data",value:{}},{name:"url",value:document.URL||window.location.href}]};function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function Z(t,r){return(Z=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function F(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=B(t);if(r){var o=B(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return L(this,n)}}function L(t,r){return!r||"object"!==z(r)&&"function"!=typeof r?Y(t):r}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&Z(t,r)}(a,t);var r,n,e,o=F(a);function a(t){var r;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,a),r=o.call(this),"undefined"!=typeof window&&(!function(t,r){q(r).forEach((function(r){return t["_"+r.name]=r.value}))}(Y(r),t),r._init()),r}return r=a,(n=[{key:"url",get:function(){return{url:this._url,domain:this._domain,query:this._query}}},{key:"config",get:function(){return this._config}},{key:"data",get:function(){return this._data}}])&&Q(r.prototype,n),e&&Q(r,e),a}(N);r.default=G}]).default;module.exports=Que;