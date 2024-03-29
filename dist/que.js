/*!
 * @waxs/que (1.2.0) by Sander Hidding
 * Que JS is a simple query string parser that dissects your URI and can set new data.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/que.git)
 */
var Que =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Que.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Core.js":
/*!*********************!*\
  !*** ./src/Core.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_setup_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/setup/_extends */ \"./src/setup/_extends.js\");\n/* harmony import */ var _method_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @method/convert */ \"./src/methods/convert/index.js\");\n/* harmony import */ var _method_debugging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @method/debugging */ \"./src/methods/debugging/index.js\");\n/* harmony import */ var _method_handle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @method/handle */ \"./src/methods/handle/index.js\");\n/* harmony import */ var _method_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @method/helpers */ \"./src/methods/helpers/index.js\");\n/* harmony import */ var _method_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @method/mask */ \"./src/methods/mask/index.js\");\n/* harmony import */ var _method_parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @method/parse */ \"./src/methods/parse/index.js\");\n/* harmony import */ var _method_retrieve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @method/retrieve */ \"./src/methods/retrieve/index.js\");\n/* harmony import */ var _method_uri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @method/uri */ \"./src/methods/uri/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** ----------------------------------------\n    Initiate Que Core\n ---------------------------------------- */\nvar Core = function Core() {\n  _classCallCheck(this, Core);\n};\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n     Methods\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Needle Helpers\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_convert__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_debugging__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_handle__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_helpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_mask__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_parse__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_retrieve__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_uri__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack://Que/./src/Core.js?");

/***/ }),

/***/ "./src/Que.js":
/*!********************!*\
  !*** ./src/Que.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/Core */ \"./src/Core.js\");\n/* harmony import */ var _js_setup_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/setup/_construct */ \"./src/setup/_construct.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/** ----------------------------------------\n     Que Core\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n     Que\n ---------------------------------------- */\n\nvar Que = /*#__PURE__*/function (_Core) {\n  _inherits(Que, _Core);\n\n  var _super = _createSuper(Que);\n\n  /** ----------------------------------------\n      Constructor\n   ---------------------------------------- */\n  function Que(config) {\n    var _this;\n\n    _classCallCheck(this, Que);\n\n    _this = _super.call(this);\n\n    if (typeof window !== 'undefined') {\n      Object(_js_setup_construct__WEBPACK_IMPORTED_MODULE_1__[\"construct\"])(_assertThisInitialized(_this), config);\n\n      _this._init();\n    }\n\n    return _this;\n  }\n  /** ----------------------------------------\n      Get URL\n   ---------------------------------------- */\n\n\n  _createClass(Que, [{\n    key: \"url\",\n    get: function get() {\n      return {\n        url: this._url,\n        domain: this._domain,\n        query: this._query\n      };\n    }\n    /** ----------------------------------------\n        Get Config\n     ---------------------------------------- */\n\n  }, {\n    key: \"config\",\n    get: function get() {\n      return this._config;\n    }\n    /** ----------------------------------------\n        Get Data\n     ---------------------------------------- */\n\n  }, {\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    }\n  }]);\n\n  return Que;\n}(_js_Core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Que);\n\n//# sourceURL=webpack://Que/./src/Que.js?");

/***/ }),

/***/ "./src/config/default.config.js":
/*!**************************************!*\
  !*** ./src/config/default.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Create Constructor\n ---------------------------------------- */\nvar setDefaults = function setDefaults(config) {\n  /** ----------------------------------------\n      Configuration\n   ---------------------------------------- */\n  var defaults = [\n  /** ----------------------------------------\n       Config\n   ---------------------------------------- */\n  {\n    name: 'config',\n    value: config\n  },\n  /** ----------------------------------------\n      Data\n   ---------------------------------------- */\n  {\n    name: 'data',\n    value: {}\n  },\n  /** ----------------------------------------\n      URL\n   ---------------------------------------- */\n  {\n    name: 'url',\n    value: document.URL || window.location.href\n  }];\n  return defaults;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDefaults);\n\n//# sourceURL=webpack://Que/./src/config/default.config.js?");

/***/ }),

/***/ "./src/methods/convert/_convertDate.js":
/*!*********************************************!*\
  !*** ./src/methods/convert/_convertDate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Convert Date\n ---------------------------------------- */\nfunction _convertDate(date) {\n  var isDate = date instanceof Date;\n\n  if (isDate) {\n    var day = date.getDate();\n    var month = date.getMonth();\n    var year = date.getFullYear();\n    date = \"\".concat(day, \"-\").concat(month, \"-\").concat(year);\n  }\n\n  return [date, true];\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_convertDate);\n\n//# sourceURL=webpack://Que/./src/methods/convert/_convertDate.js?");

/***/ }),

/***/ "./src/methods/convert/index.js":
/*!**************************************!*\
  !*** ./src/methods/convert/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convertDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_convertDate */ \"./src/methods/convert/_convertDate.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _convertDate: _convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/convert/index.js?");

/***/ }),

/***/ "./src/methods/debugging/_log.js":
/*!***************************************!*\
  !*** ./src/methods/debugging/_log.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n Logging\n ---------------------------------------- */\n\n/**\n * The log method is used for testing and\n * debugging. It will log the latest state\n * of the data object to the console.\n *\n * @yields { object } - will console log data\n */\nfunction log() {\n  console.log(this.data);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (log);\n\n//# sourceURL=webpack://Que/./src/methods/debugging/_log.js?");

/***/ }),

/***/ "./src/methods/debugging/index.js":
/*!****************************************!*\
  !*** ./src/methods/debugging/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_log */ \"./src/methods/debugging/_log.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  log: _log__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/debugging/index.js?");

/***/ }),

/***/ "./src/methods/handle/_handleArray.js":
/*!********************************************!*\
  !*** ./src/methods/handle/_handleArray.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Handle Array\n ---------------------------------------- */\nfunction _handleArray(array) {\n  return array.match(/\"(.*?)\"/g);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_handleArray);\n\n//# sourceURL=webpack://Que/./src/methods/handle/_handleArray.js?");

/***/ }),

/***/ "./src/methods/handle/_handleData.js":
/*!*******************************************!*\
  !*** ./src/methods/handle/_handleData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Handle Data\n ---------------------------------------- */\nfunction _handleData(data) {\n  var escape = this._handleEscape(data);\n\n  var array = this._handleArray(escape);\n\n  var convert = this._parseData(array);\n\n  return array.length > 1 ? convert : convert[0];\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_handleData);\n\n//# sourceURL=webpack://Que/./src/methods/handle/_handleData.js?");

/***/ }),

/***/ "./src/methods/handle/_handleEscape.js":
/*!*********************************************!*\
  !*** ./src/methods/handle/_handleEscape.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Handle Escape\n ---------------------------------------- */\nfunction _handleEscape(value) {\n  return decodeURI(value.replace(/[[\\]{}()*+?.\\\\^$|#\\s]/g, '\\\\$'));\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_handleEscape);\n\n//# sourceURL=webpack://Que/./src/methods/handle/_handleEscape.js?");

/***/ }),

/***/ "./src/methods/handle/index.js":
/*!*************************************!*\
  !*** ./src/methods/handle/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_handleArray */ \"./src/methods/handle/_handleArray.js\");\n/* harmony import */ var _handleData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_handleData */ \"./src/methods/handle/_handleData.js\");\n/* harmony import */ var _handleEscape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_handleEscape */ \"./src/methods/handle/_handleEscape.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _handleArray: _handleArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _handleData: _handleData__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _handleEscape: _handleEscape__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/handle/index.js?");

/***/ }),

/***/ "./src/methods/helpers/_config.js":
/*!****************************************!*\
  !*** ./src/methods/helpers/_config.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/** ----------------------------------------\n    Default Config\n ---------------------------------------- */\nvar defaultConfig = {\n  duplicate: false,\n  history: false,\n  mask: false,\n  parse: true\n};\n/** ----------------------------------------\n    Set Config\n ---------------------------------------- */\n\nfunction _setConfig() {\n  this._config = _objectSpread(_objectSpread({}, defaultConfig), this._config);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_setConfig);\n\n//# sourceURL=webpack://Que/./src/methods/helpers/_config.js?");

/***/ }),

/***/ "./src/methods/helpers/_hasDuplicate.js":
/*!**********************************************!*\
  !*** ./src/methods/helpers/_hasDuplicate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Has Duplicates\n ---------------------------------------- */\nfunction _hasDuplicates(name, value) {\n  var isArray = Array.isArray(this._data[name]);\n  var data = this.data[name];\n  this._data[name] = !data ? [] : data;\n  return !this.config.duplicate && isArray && this._data[name].includes(value);\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_hasDuplicates);\n\n//# sourceURL=webpack://Que/./src/methods/helpers/_hasDuplicate.js?");

/***/ }),

/***/ "./src/methods/helpers/_init.js":
/*!**************************************!*\
  !*** ./src/methods/helpers/_init.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Initialize\n ---------------------------------------- */\nfunction _init() {\n  this._setConfig();\n\n  var _this$_url$split = this._url.split('?');\n\n  var _this$_url$split2 = _slicedToArray(_this$_url$split, 2);\n\n  this._domain = _this$_url$split2[0];\n  this._query = _this$_url$split2[1];\n  this._query && this._setQuery();\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_init);\n\n//# sourceURL=webpack://Que/./src/methods/helpers/_init.js?");

/***/ }),

/***/ "./src/methods/helpers/_query.js":
/*!***************************************!*\
  !*** ./src/methods/helpers/_query.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Set Query\n ---------------------------------------- */\nfunction _setQuery() {\n  var _this = this;\n\n  var values = [];\n\n  var query = this._unmask(this._query);\n\n  var data = query.split(/([^&=]+)=(.*?)(?=&[^&=]+=|$)/g);\n  data.forEach(function (value, index) {\n    if (value && value === '&' || index === 0) {\n      values.push(\"\".concat(data[index + 1], \"=\").concat(data[index + 2]));\n    }\n  });\n  values.forEach(function (query) {\n    var _query$split = query.split('='),\n        _query$split2 = _slicedToArray(_query$split, 2),\n        name = _query$split2[0],\n        content = _query$split2[1];\n\n    _this._data[name] = _this._handleData(content);\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_setQuery);\n\n//# sourceURL=webpack://Que/./src/methods/helpers/_query.js?");

/***/ }),

/***/ "./src/methods/helpers/index.js":
/*!**************************************!*\
  !*** ./src/methods/helpers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hasDuplicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hasDuplicate */ \"./src/methods/helpers/_hasDuplicate.js\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_init */ \"./src/methods/helpers/_init.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_config */ \"./src/methods/helpers/_config.js\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_query */ \"./src/methods/helpers/_query.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _hasDuplicates: _hasDuplicate__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _init: _init__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _setConfig: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  _setQuery: _query__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/helpers/index.js?");

/***/ }),

/***/ "./src/methods/mask/_mask.js":
/*!***********************************!*\
  !*** ./src/methods/mask/_mask.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Mask\n ---------------------------------------- */\nfunction _mask(string) {\n  return this.config.mask ? window.btoa(string) : string;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_mask);\n\n//# sourceURL=webpack://Que/./src/methods/mask/_mask.js?");

/***/ }),

/***/ "./src/methods/mask/_unmask.js":
/*!*************************************!*\
  !*** ./src/methods/mask/_unmask.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validMask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_validMask */ \"./src/methods/mask/_validMask.js\");\n/** ----------------------------------------\n    Valid Mask\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Unmask\n ---------------------------------------- */\n\nfunction _unmask(string) {\n  var parser = Object(_validMask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(string) ? window.atob(string) : string;\n  return this.config.mask || Object(_validMask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(string) ? parser : string;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_unmask);\n\n//# sourceURL=webpack://Que/./src/methods/mask/_unmask.js?");

/***/ }),

/***/ "./src/methods/mask/_validMask.js":
/*!****************************************!*\
  !*** ./src/methods/mask/_validMask.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Valid Mask\n ---------------------------------------- */\nfunction _validMask(string) {\n  var regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;\n  return regex.test(string);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_validMask);\n\n//# sourceURL=webpack://Que/./src/methods/mask/_validMask.js?");

/***/ }),

/***/ "./src/methods/mask/index.js":
/*!***********************************!*\
  !*** ./src/methods/mask/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mask */ \"./src/methods/mask/_mask.js\");\n/* harmony import */ var _unmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unmask */ \"./src/methods/mask/_unmask.js\");\n/* harmony import */ var _validMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_validMask */ \"./src/methods/mask/_validMask.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _mask: _mask__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _unmask: _unmask__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _validMask: _validMask__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/mask/index.js?");

/***/ }),

/***/ "./src/methods/parse/_parseData.js":
/*!*****************************************!*\
  !*** ./src/methods/parse/_parseData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Mask\n ---------------------------------------- */\nfunction _parseData(array) {\n  var _this = this;\n\n  return array.map(function (value) {\n    value = decodeURI(value.replace(/\"/g, ''));\n\n    var _this$_parseNumber = _this._parseNumber(value),\n        _this$_parseNumber2 = _slicedToArray(_this$_parseNumber, 2),\n        number = _this$_parseNumber2[0],\n        isNumber = _this$_parseNumber2[1];\n\n    var _this$_parseDate = _this._parseDate(value),\n        _this$_parseDate2 = _slicedToArray(_this$_parseDate, 2),\n        date = _this$_parseDate2[0],\n        isDate = _this$_parseDate2[1];\n\n    return _this.config.parse && (isNumber && number || isDate && date) || value;\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_parseData);\n\n//# sourceURL=webpack://Que/./src/methods/parse/_parseData.js?");

/***/ }),

/***/ "./src/methods/parse/_parseDate.js":
/*!*****************************************!*\
  !*** ./src/methods/parse/_parseDate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Parse Date\n ---------------------------------------- */\nfunction _parseDate(string) {\n  var isDate = !isNaN(Date.parse(string));\n  var dateValue = [new Date(string), true];\n  var stringValue = [string, false];\n  return isDate ? dateValue : stringValue;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_parseDate);\n\n//# sourceURL=webpack://Que/./src/methods/parse/_parseDate.js?");

/***/ }),

/***/ "./src/methods/parse/_parseNumber.js":
/*!*******************************************!*\
  !*** ./src/methods/parse/_parseNumber.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Parse Number\n ---------------------------------------- */\nfunction _parseNumber(string) {\n  var number = parseInt(string);\n  var stringLength = string.length;\n  var numberLength = number.toString().length;\n  var isNumber = stringLength === numberLength;\n  var numberValue = [number, true];\n  var stringValue = [string, false];\n  return isNumber ? numberValue : stringValue;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_parseNumber);\n\n//# sourceURL=webpack://Que/./src/methods/parse/_parseNumber.js?");

/***/ }),

/***/ "./src/methods/parse/index.js":
/*!************************************!*\
  !*** ./src/methods/parse/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_parseData */ \"./src/methods/parse/_parseData.js\");\n/* harmony import */ var _parseDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_parseDate */ \"./src/methods/parse/_parseDate.js\");\n/* harmony import */ var _parseNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parseNumber */ \"./src/methods/parse/_parseNumber.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _parseData: _parseData__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _parseDate: _parseDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _parseNumber: _parseNumber__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/parse/index.js?");

/***/ }),

/***/ "./src/methods/retrieve/_add.js":
/*!**************************************!*\
  !*** ./src/methods/retrieve/_add.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Add\n ---------------------------------------- */\nfunction add(obj) {\n  var _this = this;\n\n  var data = Object.entries(obj);\n  data.forEach(function (item) {\n    var _item = _slicedToArray(item, 2),\n        name = _item[0],\n        value = _item[1];\n\n    var isArray = Array.isArray(value);\n    var array = isArray ? value : typeof value === 'number' ? [value] : value.toString().split();\n\n    var type = _typeof(_this.data[name]);\n\n    array.forEach(function (value) {\n      if (_this._hasDuplicates(name, value)) return;\n\n      var add = function add() {\n        var excists = _this._hasDuplicates(name, value) || _this._data[name] !== value;\n        excists && (_this._data[name] = [_this._data[name], value]);\n      };\n\n      var assign = function assign() {\n        return _this._data[name] = value;\n      };\n\n      type === 'object' ? _this._data[name].push(value) : _this._data[name] ? add() : assign();\n    });\n  });\n\n  var uri = this._createUri();\n\n  this._updateUri(uri);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_add.js?");

/***/ }),

/***/ "./src/methods/retrieve/_get.js":
/*!**************************************!*\
  !*** ./src/methods/retrieve/_get.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Get\n ---------------------------------------- */\nfunction get() {\n  return this.data;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (get);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_get.js?");

/***/ }),

/***/ "./src/methods/retrieve/_parse.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_parse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Parse\n ---------------------------------------- */\nfunction parse(string) {\n  var _this = this;\n\n  var query = string.split('?');\n\n  var unmasked = this._unmask(query[1]);\n\n  var data = unmasked.split('&');\n  return data.reduce(function (obj, query) {\n    var _query$split = query.split('='),\n        _query$split2 = _slicedToArray(_query$split, 2),\n        name = _query$split2[0],\n        value = _query$split2[1];\n\n    obj[name] = _this._handleData(value);\n    return obj;\n  }, {});\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parse);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_parse.js?");

/***/ }),

/***/ "./src/methods/retrieve/_refresh.js":
/*!******************************************!*\
  !*** ./src/methods/retrieve/_refresh.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Refresh\n ---------------------------------------- */\nfunction refresh(obj) {\n  var _this = this;\n\n  this._data = {};\n  var data = Object.entries(obj);\n  data.forEach(function (item) {\n    var _item = _slicedToArray(item, 2),\n        name = _item[0],\n        value = _item[1];\n\n    _this._data[name] = value;\n  });\n\n  var uri = this._createUri();\n\n  this._updateUri(uri);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (refresh);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_refresh.js?");

/***/ }),

/***/ "./src/methods/retrieve/_remove.js":
/*!*****************************************!*\
  !*** ./src/methods/retrieve/_remove.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Remove\n ---------------------------------------- */\n\nfunction remove(value) {\n  var _this = this;\n\n  var data = value && Object.entries(value);\n  var argType = Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n  if (!value) Object.keys(this.data).forEach(function (key) {\n    delete _this._data[key];\n  });\n\n  if (argType === 'string') {\n    this._data[value] && delete this._data[value];\n  }\n\n  if (argType === 'array') {\n    data.forEach(function (item) {\n      var _item = _slicedToArray(item, 2),\n          name = _item[0],\n          value = _item[1];\n\n      _this._data[value] && delete _this._data[value];\n    });\n  }\n\n  if (argType === 'object') {\n    data.forEach(function (item) {\n      var _item2 = _slicedToArray(item, 2),\n          name = _item2[0],\n          value = _item2[1];\n\n      if ((Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.data[name]) === 'string' || Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.data[name]) === 'boolean') && _this.data[name] === value) {\n        _this._data[name] && delete _this._data[name];\n        return;\n      }\n\n      var isArray = Array.isArray(value);\n      var array = isArray ? value : _this.data[name] && value.split();\n      _this.data[name] && array.forEach(function (value) {\n        var index = _this.data[name].indexOf(value);\n\n        index > -1 && _this.data[name].splice(index, 1);\n      });\n    });\n  }\n\n  var uri = this._createUri();\n\n  this._updateUri(uri);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remove);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_remove.js?");

/***/ }),

/***/ "./src/methods/retrieve/_set.js":
/*!**************************************!*\
  !*** ./src/methods/retrieve/_set.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Set\n ---------------------------------------- */\nfunction set(obj) {\n  var _this = this;\n\n  var data = Object.entries(obj);\n  data.forEach(function (item) {\n    var _item = _slicedToArray(item, 2),\n        name = _item[0],\n        content = _item[1];\n\n    _this._data[name] = content;\n  });\n\n  var uri = this._createUri();\n\n  this._updateUri(uri);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (set);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_set.js?");

/***/ }),

/***/ "./src/methods/retrieve/_stringify.js":
/*!********************************************!*\
  !*** ./src/methods/retrieve/_stringify.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Stringify\n ---------------------------------------- */\nfunction stringify(data) {\n  return '?' + this._createUri(data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stringify);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_stringify.js?");

/***/ }),

/***/ "./src/methods/retrieve/_value.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_value.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Value\n ---------------------------------------- */\nfunction value(key) {\n  return this.data[key];\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (value);\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/_value.js?");

/***/ }),

/***/ "./src/methods/retrieve/index.js":
/*!***************************************!*\
  !*** ./src/methods/retrieve/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_add */ \"./src/methods/retrieve/_add.js\");\n/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_get */ \"./src/methods/retrieve/_get.js\");\n/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parse */ \"./src/methods/retrieve/_parse.js\");\n/* harmony import */ var _refresh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_refresh */ \"./src/methods/retrieve/_refresh.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_remove */ \"./src/methods/retrieve/_remove.js\");\n/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_set */ \"./src/methods/retrieve/_set.js\");\n/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_stringify */ \"./src/methods/retrieve/_stringify.js\");\n/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_value */ \"./src/methods/retrieve/_value.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  add: _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  get: _get__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  parse: _parse__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  refresh: _refresh__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  remove: _remove__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  set: _set__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  stringify: _stringify__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  value: _value__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/retrieve/index.js?");

/***/ }),

/***/ "./src/methods/uri/_createUri.js":
/*!***************************************!*\
  !*** ./src/methods/uri/_createUri.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Create URI\n ---------------------------------------- */\n\nfunction _createUri() {\n  var _this = this;\n\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;\n  var values = Object.keys(data);\n\n  var convertDates = function convertDates(value) {\n    var _this$_convertDate = _this._convertDate(value),\n        _this$_convertDate2 = _slicedToArray(_this$_convertDate, 2),\n        date = _this$_convertDate2[0],\n        isDate = _this$_convertDate2[1];\n\n    var type = isDate && date || value;\n    return value && type.toString();\n  };\n\n  var query = values.map(function (key) {\n    var values = data[key];\n    var type = Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values);\n    if (type !== 'array') return \"\".concat(key, \"=\\\"\").concat(convertDates(values), \"\\\"\");\n    return \"\".concat(key, \"=\").concat(values.map(function (value) {\n      return \"\\\"\".concat(convertDates(value));\n    }).join('\",'), \"\\\"\");\n  });\n  return query.join('&');\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_createUri);\n\n//# sourceURL=webpack://Que/./src/methods/uri/_createUri.js?");

/***/ }),

/***/ "./src/methods/uri/_updateUri.js":
/*!***************************************!*\
  !*** ./src/methods/uri/_updateUri.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Update URI\n ---------------------------------------- */\nfunction _updateUri(uri) {\n  if (typeof history.pushState !== 'undefined') {\n    var obj = {\n      title: '',\n      url: '?' + this._mask(uri)\n    };\n    var update = this.config.history ? 'pushState' : 'replaceState';\n    history[update](obj, obj.title, obj.url);\n  }\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_updateUri);\n\n//# sourceURL=webpack://Que/./src/methods/uri/_updateUri.js?");

/***/ }),

/***/ "./src/methods/uri/index.js":
/*!**********************************!*\
  !*** ./src/methods/uri/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createUri */ \"./src/methods/uri/_createUri.js\");\n/* harmony import */ var _updateUri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_updateUri */ \"./src/methods/uri/_updateUri.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _createUri: _createUri__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _updateUri: _updateUri__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://Que/./src/methods/uri/index.js?");

/***/ }),

/***/ "./src/setup/_construct.js":
/*!*********************************!*\
  !*** ./src/setup/_construct.js ***!
  \*********************************/
/*! exports provided: construct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"construct\", function() { return construct; });\n/* harmony import */ var _js_config_default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/default.config */ \"./src/config/default.config.js\");\n/** ----------------------------------------\n    Defaults\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Construct\n ---------------------------------------- */\n\nfunction construct(model, config) {\n  var defaults = Object(_js_config_default_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config);\n  defaults.forEach(function (config) {\n    return model['_' + config.name] = config.value;\n  });\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n//# sourceURL=webpack://Que/./src/setup/_construct.js?");

/***/ }),

/***/ "./src/setup/_extends.js":
/*!*******************************!*\
  !*** ./src/setup/_extends.js ***!
  \*******************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/** ----------------------------------------\n     Extend\n ---------------------------------------- */\nvar extend = function extend(model, fn) {\n  var name = Object.keys(fn)[0];\n  Object.keys(fn).forEach(function (method) {\n    return model.prototype[method] = fn[method];\n  });\n};\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Que/./src/setup/_extends.js?");

/***/ }),

/***/ "./src/util/_isDate.js":
/*!*****************************!*\
  !*** ./src/util/_isDate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Date\n ---------------------------------------- */\nvar isDate = function isDate(value) {\n  return Date.parse(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isDate);\n\n//# sourceURL=webpack://Que/./src/util/_isDate.js?");

/***/ }),

/***/ "./src/util/_isType.js":
/*!*****************************!*\
  !*** ./src/util/_isType.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isDate */ \"./src/util/_isDate.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Is Type\n ---------------------------------------- */\n\nvar isType = function isType(value) {\n  return typeof value !== 'number' && !isNaN(Object(_util_isDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) && 'date' || Array.isArray(value) && 'array' || _typeof(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isType);\n\n//# sourceURL=webpack://Que/./src/util/_isType.js?");

/***/ })

/******/ })["default"];