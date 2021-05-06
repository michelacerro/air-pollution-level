/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_earth_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/earth.jpg */ "./src/img/earth.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_earth_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n\t-webkit-user-select: none;\r\n  \t-moz-user-select: none;\r\n  \t-ms-user-select: none;\r\n  \tuser-select: none;\r\n\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/*@font-face {\r\n    font-family: 'caveat';\r\n    src: url('../font/caveat.woff') format('woff');\r\n}*/\r\n\r\nhtml {min-height: 100%; max-width: 100%;}\r\n\r\nbody {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\theight: 100%;\r\n\r\n  \tfont-family: 'Montserrat', sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n/* ----- Formatting ----- */\r\n.xsmall-font {font-size: 11px;}\r\n.small-font {font-size: 14px;}\r\n.medium-font {font-size: 18px;}\r\n.large-cursive-font {\r\n\tfont-size: 28px;\r\n\tfont-family: 'caveat', cursive;\r\n}\r\n.left-font {text-align: left;}\r\n\r\n.white-font {color: #fff;}\r\n.green-font {color: #678C30;}\r\n.light-blue-font {color: #048ABF;}\r\n\r\n.flex-row {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;}\r\n.flex-column {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n/* ----- Input part (and general text) ----- */\r\nh1 {margin: 15px;}\r\np, summary {padding: 7px;}\r\nli {list-style: none; padding: 5px;}\r\n\r\n#search-input {margin: 5px;}\r\ninput {\r\n  width: 250px;\r\n  height: 40px;\r\n  border: none;\r\n  border-radius: 10px 0 0 10px;\r\n  padding: 7px;\r\n}\r\n\r\n/* Buttons */\r\nbutton {\r\n\theight: 40px;;\r\n\tborder: none;\r\n\tbackground-color: #678C30;\r\n  cursor: pointer;\r\n}\r\n\r\n#search-button {\r\n  width: 40px;\r\n\tborder-radius: 0 10px 10px 0;\r\n}\r\n#search-img {width: 1.8em;}\r\n\r\n#gps-button {\r\n\twidth: 80px;\r\n\tmargin: 5px;\r\n\tborder-radius: 10px;\r\n}\r\n#gps-img {width: 1.3em;}\r\n\r\n\r\n/* ----- Output part ----- */\r\n#outputs {\r\n\twidth: 250px;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n\tpadding: 15px;\r\n\tmargin: 15px;\r\n}\r\n\r\n#output-view {margin-bottom: 20px;}\r\n#output-value {\r\n\twidth: 70px;\r\n\theight: 70px;\r\n\tborder-radius: 10px;\r\n}\r\n#output-level {width: 150px;}\r\n\r\n/* Details */\r\n.open-button {border-top: 1.5px dashed #A6A6A6;}\r\n.open-button:hover {cursor: pointer; color: #048ABF;}\r\n#details-list, #stations-list {\r\n\tbackground-color: #A6A6A6;\r\n\tborder-radius: 10px;\r\n\tmargin: 0 7px 7px 7px;\r\n\tpadding: 7px;\r\n}\r\n\r\n\r\n/* ----- Responsiveness ----- */\r\n@media only screen and (min-width: 961px) {\r\n\th1 {margin: 20px; transform: scale(1.3);}\r\n\t#outputs {margin-top: 40px;}\r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;GACvB,sBAAsB;GACtB,qBAAqB;GACrB,iBAAiB;;CAEnB,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;;EAGE;;AAEF,MAAM,gBAAgB,EAAE,eAAe,CAAC;;AAExC;CACC,yDAAuC;CACvC,sBAAsB;CACtB,2BAA2B;CAC3B,YAAY;;GAEV,qCAAqC;CACvC,kBAAkB;AACnB;;;AAGA,2BAA2B;AAC3B,cAAc,eAAe,CAAC;AAC9B,aAAa,eAAe,CAAC;AAC7B,cAAc,eAAe,CAAC;AAC9B;CACC,eAAe;CACf,8BAA8B;AAC/B;AACA,YAAY,gBAAgB,CAAC;;AAE7B,aAAa,WAAW,CAAC;AACzB,aAAa,cAAc,CAAC;AAC5B,kBAAkB,cAAc,CAAC;;AAEjC;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB,CAAC;AACrB;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;;;AAGA,8CAA8C;AAC9C,IAAI,YAAY,CAAC;AACjB,YAAY,YAAY,CAAC;AACzB,IAAI,gBAAgB,EAAE,YAAY,CAAC;;AAEnC,eAAe,WAAW,CAAC;AAC3B;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,4BAA4B;EAC5B,YAAY;AACd;;AAEA,YAAY;AACZ;CACC,YAAY;CACZ,YAAY;CACZ,yBAAyB;EACxB,eAAe;AACjB;;AAEA;EACE,WAAW;CACZ,4BAA4B;AAC7B;AACA,aAAa,YAAY,CAAC;;AAE1B;CACC,WAAW;CACX,WAAW;CACX,mBAAmB;AACpB;AACA,UAAU,YAAY,CAAC;;;AAGvB,4BAA4B;AAC5B;CACC,YAAY;CACZ,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;CACb,YAAY;AACb;;AAEA,cAAc,mBAAmB,CAAC;AAClC;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;AACpB;AACA,eAAe,YAAY,CAAC;;AAE5B,YAAY;AACZ,cAAc,gCAAgC,CAAC;AAC/C,oBAAoB,eAAe,EAAE,cAAc,CAAC;AACpD;CACC,yBAAyB;CACzB,mBAAmB;CACnB,qBAAqB;CACrB,YAAY;AACb;;;AAGA,+BAA+B;AAC/B;CACC,IAAI,YAAY,EAAE,qBAAqB,CAAC;CACxC,UAAU,gBAAgB,CAAC;AAC5B","sourcesContent":["* {\r\n\t-webkit-user-select: none;\r\n  \t-moz-user-select: none;\r\n  \t-ms-user-select: none;\r\n  \tuser-select: none;\r\n\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/*@font-face {\r\n    font-family: 'caveat';\r\n    src: url('../font/caveat.woff') format('woff');\r\n}*/\r\n\r\nhtml {min-height: 100%; max-width: 100%;}\r\n\r\nbody {\r\n\tbackground-image: url(../img/earth.jpg);\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\theight: 100%;\r\n\r\n  \tfont-family: 'Montserrat', sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n/* ----- Formatting ----- */\r\n.xsmall-font {font-size: 11px;}\r\n.small-font {font-size: 14px;}\r\n.medium-font {font-size: 18px;}\r\n.large-cursive-font {\r\n\tfont-size: 28px;\r\n\tfont-family: 'caveat', cursive;\r\n}\r\n.left-font {text-align: left;}\r\n\r\n.white-font {color: #fff;}\r\n.green-font {color: #678C30;}\r\n.light-blue-font {color: #048ABF;}\r\n\r\n.flex-row {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;}\r\n.flex-column {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n/* ----- Input part (and general text) ----- */\r\nh1 {margin: 15px;}\r\np, summary {padding: 7px;}\r\nli {list-style: none; padding: 5px;}\r\n\r\n#search-input {margin: 5px;}\r\ninput {\r\n  width: 250px;\r\n  height: 40px;\r\n  border: none;\r\n  border-radius: 10px 0 0 10px;\r\n  padding: 7px;\r\n}\r\n\r\n/* Buttons */\r\nbutton {\r\n\theight: 40px;;\r\n\tborder: none;\r\n\tbackground-color: #678C30;\r\n  cursor: pointer;\r\n}\r\n\r\n#search-button {\r\n  width: 40px;\r\n\tborder-radius: 0 10px 10px 0;\r\n}\r\n#search-img {width: 1.8em;}\r\n\r\n#gps-button {\r\n\twidth: 80px;\r\n\tmargin: 5px;\r\n\tborder-radius: 10px;\r\n}\r\n#gps-img {width: 1.3em;}\r\n\r\n\r\n/* ----- Output part ----- */\r\n#outputs {\r\n\twidth: 250px;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n\tpadding: 15px;\r\n\tmargin: 15px;\r\n}\r\n\r\n#output-view {margin-bottom: 20px;}\r\n#output-value {\r\n\twidth: 70px;\r\n\theight: 70px;\r\n\tborder-radius: 10px;\r\n}\r\n#output-level {width: 150px;}\r\n\r\n/* Details */\r\n.open-button {border-top: 1.5px dashed #A6A6A6;}\r\n.open-button:hover {cursor: pointer; color: #048ABF;}\r\n#details-list, #stations-list {\r\n\tbackground-color: #A6A6A6;\r\n\tborder-radius: 10px;\r\n\tmargin: 0 7px 7px 7px;\r\n\tpadding: 7px;\r\n}\r\n\r\n\r\n/* ----- Responsiveness ----- */\r\n@media only screen and (min-width: 961px) {\r\n\th1 {margin: 20px; transform: scale(1.3);}\r\n\t#outputs {margin-top: 40px;}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/img/earth.jpg":
/*!***************************!*\
  !*** ./src/img/earth.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ad090314089fcd71f31.jpg";

/***/ }),

/***/ "./src/img/gps.png":
/*!*************************!*\
  !*** ./src/img/gps.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c11f546a2623f05036c3.png";

/***/ }),

/***/ "./src/img/search.png":
/*!****************************!*\
  !*** ./src/img/search.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "19ac51b972f0fca9735e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/search.png */ "./src/img/search.png");
/* harmony import */ var _img_gps_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/gps.png */ "./src/img/gps.png");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var myToken = "8b247ba6fb7d6b66f0eeda63a620b7f2f2bf125b"; // ______Structure

document.body.setAttribute('class', 'flex-column'); // ---------- INPUT PART ----------

var inputs = document.createElement('div');
document.body.appendChild(inputs); // 1) h1 - input title

var inputTitle = document.createElement('h1');
inputTitle.setAttribute('class', 'green-font large-cursive-font');
inputTitle.innerHTML = 'Do you want to know the level of air pollution in your city?';
inputs.appendChild(inputTitle); // 2) p

var inputPara = document.createElement('p');
inputPara.innerHTML = 'Insert the name of your city';
inputs.appendChild(inputPara); // ----- Search with text input
// 3) div - search input

var searchInput = document.createElement('div');
searchInput.setAttribute('id', 'search-input');
searchInput.setAttribute('class', 'flex-row');
inputs.appendChild(searchInput); // 3.1) input - search bar (+ event)

var searchBar = document.createElement('input');
searchBar.setAttribute('placeholder', 'City');
searchBar.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    searchButton.click();
  }
});
searchInput.appendChild(searchBar); // 3.2) button - search (+ event)

var searchButton = document.createElement('button');
searchButton.setAttribute('id', 'search-button');
searchButton.setAttribute('class', 'white-font');
searchButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (searchBar.value) {
    var cityName = searchBar.value.toLowerCase();
    searchBar.value = '';
    link("https://api.waqi.info/feed/".concat(cityName, "/?token=").concat(myToken));
  }
});
searchInput.appendChild(searchButton); // 3.2.1) img - search img (img fot search button)

var searchImg = new Image();
searchImg.setAttribute('id', 'search-img');
searchImg.src = _img_search_png__WEBPACK_IMPORTED_MODULE_2__;
searchButton.appendChild(searchImg); // ----- Search with GPS input
// 4) p

var gpsPara = document.createElement('p');
gpsPara.innerHTML = 'or click the bottom to active the GPS reseach';
inputs.appendChild(gpsPara); // 5) button - gps (+ event)

var gpsButton = document.createElement('button');
gpsButton.setAttribute('id', 'gps-button');
gpsButton.addEventListener('click', function () {
  var successCallback = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(position) {
      var latitude, longitude;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              latitude = position.coords.latitude;
              longitude = position.coords.longitude;
              link("https://api.waqi.info/feed/geo:".concat(latitude, ";").concat(longitude, "/?token=").concat(myToken));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function successCallback(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var errorCallback = function errorCallback(error) {
    alert(error.message);
  };

  var options = {
    enableHighAccuracy: true,
    timeout: 5000
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
});
inputs.appendChild(gpsButton); // 5.1) img - gps (img for gps button)

var gpsImg = new Image();
gpsImg.setAttribute('id', 'gps-img');
gpsImg.src = _img_gps_png__WEBPACK_IMPORTED_MODULE_3__;
gpsButton.appendChild(gpsImg); // ---------- OUTPUT PART ----------

var outputs = document.createElement('div');
outputs.setAttribute('id', 'outputs');
document.body.appendChild(outputs); // 1) p - output title

var outputTitle = document.createElement('p');
outputTitle.setAttribute('class', 'small-font light-blue-font left-font');
outputs.appendChild(outputTitle); // ----- Pollution level visualisation
// 2) div - output view

var outputView = document.createElement('div');
outputView.setAttribute('id', 'output-view');
outputView.setAttribute('class', 'flex-row');
outputs.appendChild(outputView); // 2.1) div - output value

var outputValue = document.createElement('div');
outputValue.setAttribute('id', 'output-value');
outputValue.setAttribute('class', 'white-font large-cursive-font flex-row');
outputView.appendChild(outputValue); // 2.2) div - output level

var outputLevel = document.createElement('div');
outputLevel.setAttribute('id', 'output-level');
outputLevel.setAttribute('class', 'flex-column');
outputView.appendChild(outputLevel); // 2.2.1) p - apl title

var aplTitle = document.createElement('p');
aplTitle.setAttribute('class', 'small-font');
aplTitle.innerHTML = 'Air Pollution Level';
outputLevel.appendChild(aplTitle); // 2.2.2= p - apl level

var aplLevel = document.createElement('p');
aplLevel.setAttribute('class', 'medium-font');
outputLevel.appendChild(aplLevel); // ----- Details visualisation
// 3) details - more details

var detailsMore = document.createElement('details');
outputs.appendChild(detailsMore); // 3.1) summary - details button

var detailsButton = document.createElement('summary');
detailsButton.setAttribute('class', 'small-font left-font open-button');
detailsButton.innerHTML = 'More details';
detailsMore.appendChild(detailsButton); // 3.2) div - details list

var detailsList = document.createElement('ul');
detailsList.setAttribute('id', 'details-list');
detailsList.setAttribute('class', 'xsmall-font');
detailsMore.appendChild(detailsList); // ----- Stations visualisation
// 4) details - nearby station

var detailsStations = document.createElement('details');
outputs.appendChild(detailsStations); // 4.1) summary - station button

var stationsButton = document.createElement('summary');
stationsButton.setAttribute('class', 'small-font left-font open-button');
stationsButton.innerHTML = 'More stations';
detailsStations.appendChild(stationsButton); // 4.2.1) p - station description

var stationsDescription = document.createElement('p');
stationsDescription.setAttribute('class', 'small-font');
detailsStations.appendChild(stationsDescription); // 4.2.2) div - station list

var stationsList = document.createElement('ul');
stationsList.setAttribute('id', 'stations-list');
stationsList.setAttribute('class', 'xsmall-font');
detailsStations.appendChild(stationsList); // ----- Initial output display

outputs.style.display = 'none'; // ______Request
// ---------- API fetch ----------

function link(url) {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.status === 'error') {
      alert("Town not found. Please insert the name of another city.");
    } else {
      //  ----- Variables from JSON
      var aqi;

      if ('aqi' in json.data) {
        aqi = json.data.aqi;
      } else {
        aqi = '-';
      }

      ;
      var cityAqi;

      if ('name' in json.data.city) {
        cityAqi = json.data.city.name;
      } else {
        cityAqi = '-';
      }

      ;
      var pm25;

      if ('pm25' in json.data.iaqi) {
        pm25 = json.data.iaqi.pm25.v;
      } else {
        pm25 = '-';
      }

      ;
      var pm10;

      if ('pm10' in json.data.iaqi) {
        pm10 = json.data.iaqi.pm10.v;
      } else {
        pm10 = '-';
      }

      ;
      var o3;

      if ('o3' in json.data.iaqi) {
        o3 = json.data.iaqi.o3.v;
      } else {
        o3 = '-';
      }

      ;
      var no2;

      if ('no2' in json.data.iaqi) {
        no2 = json.data.iaqi.no2.v;
      } else {
        no2 = '-';
      }

      ;
      var so2;

      if ('so2' in json.data.iaqi) {
        so2 = json.data.iaqi.so2.v;
      } else {
        so2 = '-';
      }

      ;
      var co;

      if ('co' in json.data.iaqi) {
        co = json.data.iaqi.co.v;
      } else {
        co = '-';
      }

      ;
      var temp;

      if ('t' in json.data.iaqi) {
        temp = json.data.iaqi.t.v;
      } else {
        temp = '-';
      }

      ;
      var pressure;

      if ('p' in json.data.iaqi) {
        pressure = json.data.iaqi.p.v;
      } else {
        pressure = '-';
      }

      ;
      var humidity;

      if ('h' in json.data.iaqi) {
        humidity = json.data.iaqi.h.v;
      } else {
        humidity = '-';
      }

      ;
      var wind;

      if ('w' in json.data.iaqi) {
        wind = json.data.iaqi.w.v;
      } else {
        wind = '-';
      }

      ; // ----- Output section

      outputValue.innerHTML = "".concat(aqi);
      outputTitle.innerHTML = "".concat(cityAqi); // Color and text changes based on the value of aqi

      if (aqi >= 0 && aqi <= 50) {
        outputValue.style.backgroundColor = '#038C5A';
        aplLevel.innerHTML = 'Good';
        aplLevel.style.color = '#038C5A';
      } else if (aqi >= 51 && aqi <= 100) {
        outputValue.style.backgroundColor = '#F2C230';
        aplLevel.innerHTML = 'Moderate';
        aplLevel.style.color = '#F2C230';
      } else if (aqi >= 101 && aqi <= 150) {
        outputValue.style.backgroundColor = '#F28B30';
        aplLevel.innerHTML = 'Unhealthy for sensitive groups';
        aplLevel.style.color = '#F28B30';
      } else if (aqi >= 151 && aqi <= 200) {
        outputValue.style.backgroundColor = '#CC0033';
        aplLevel.innerHTML = 'Unhealthy';
        aplLevel.style.color = '#CC0033';
      } else if (aqi >= 201 && aqi <= 300) {
        outputValue.style.backgroundColor = '#55038C';
        aplLevel.innerHTML = 'Very unhealthy';
        aplLevel.style.color = '#55038C';
      } else if (aqi >= 300) {
        outputValue.style.backgroundColor = '#73022C';
        aplLevel.innerHTML = 'Hazardous';
        aplLevel.style.color = '#73022C';
      } else {
        outputValue.style.backgroundColor = '#A6A6A6';
        aplLevel.innerHTML = '-';
        aplLevel.style.color = '#A6A6A6';
      }

      ; // ------ Details section

      detailsList.innerHTML = "\n              <li><b>PM2.5</b> ".concat(pm25, " \u03BCg/m\xB3</li>\n              <li><b>PM10</b> ").concat(pm10, " \u03BCg/m\xB3</li>\n              <li><b>O3</b> ").concat(o3, " \u03BCg/m\xB3</li>\n              <li><b>NO2</b> ").concat(no2, " \u03BCg/m\xB3</li>\n              <li><b>SO2</b> ").concat(so2, " \u03BCg/m\xB3</li>\n              <li><b>CO</b> ").concat(co, " \u03BCg/m\xB3</li>\n              <br/>\n              <li><b>Temperture</b> ").concat(temp, "\xB0C</li>\n              <li><b>Pressure</b> ").concat(pressure, " g/cm\xB2</li>\n              <li><b>Humidity</b> ").concat(humidity, " %</li>\n              <li><b>Wind</b> ").concat(wind, " m/s</li>\n            "); // ----- Stations section

      var latJson = parseFloat(json.data.city.geo[0]);
      var lngJson = parseFloat(json.data.city.geo[1]);
      var latBL = latJson - 0.2;
      var lngBL = lngJson - 0.2;
      var latTR = latJson + 0.2;
      var lngTR = lngJson + 0.2;
      fetch("https://api.waqi.info/map/bounds/?latlng=".concat(latBL, ",").concat(lngBL, ",").concat(latTR, ",").concat(lngTR, "&token=").concat(myToken)).then(function (response) {
        if (response.ok) {
          return response.json();
        }
      }).then(function (json) {
        stationsDescription.innerHTML = "".concat(json.data.length, " stations in this area");
        stationsList.innerHTML = '';

        for (var i = 0; i < json.data.length; i++) {
          stationsList.innerHTML += "\n                          <li>".concat(json.data[i].station.name, "\n                          <br/>\n                          <b>aqi: ").concat(json.data[i].aqi, "</b></li>\n                      ");
        }

        ;
      }); // ----- Output box visualisation

      outputs.style.display = 'block';
    }

    ; // closing else
  }); // closing json
}

; // closing link
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXItcG9sbHV0aW9uLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYWlyLXBvbGx1dGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYWlyLXBvbGx1dGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYWlyLXBvbGx1dGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9haXItcG9sbHV0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9haXItcG9sbHV0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWlyLXBvbGx1dGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fpci1wb2xsdXRpb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYWlyLXBvbGx1dGlvbi8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJteVRva2VuIiwicHJvY2VzcyIsImRvY3VtZW50IiwiYm9keSIsInNldEF0dHJpYnV0ZSIsImlucHV0cyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucHV0VGl0bGUiLCJpbm5lckhUTUwiLCJpbnB1dFBhcmEiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInNlYXJjaEJ1dHRvbiIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNpdHlOYW1lIiwidG9Mb3dlckNhc2UiLCJsaW5rIiwic2VhcmNoSW1nIiwiSW1hZ2UiLCJzcmMiLCJzZWFyY2giLCJncHNQYXJhIiwiZ3BzQnV0dG9uIiwic3VjY2Vzc0NhbGxiYWNrIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsImVycm9yQ2FsbGJhY2siLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsIm9wdGlvbnMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJ0aW1lb3V0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJncHNJbWciLCJncHMiLCJvdXRwdXRzIiwib3V0cHV0VGl0bGUiLCJvdXRwdXRWaWV3Iiwib3V0cHV0VmFsdWUiLCJvdXRwdXRMZXZlbCIsImFwbFRpdGxlIiwiYXBsTGV2ZWwiLCJkZXRhaWxzTW9yZSIsImRldGFpbHNCdXR0b24iLCJkZXRhaWxzTGlzdCIsImRldGFpbHNTdGF0aW9ucyIsInN0YXRpb25zQnV0dG9uIiwic3RhdGlvbnNEZXNjcmlwdGlvbiIsInN0YXRpb25zTGlzdCIsInN0eWxlIiwiZGlzcGxheSIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsImFxaSIsImRhdGEiLCJjaXR5QXFpIiwiY2l0eSIsIm5hbWUiLCJwbTI1IiwiaWFxaSIsInYiLCJwbTEwIiwibzMiLCJubzIiLCJzbzIiLCJjbyIsInRlbXAiLCJ0IiwicHJlc3N1cmUiLCJwIiwiaHVtaWRpdHkiLCJoIiwid2luZCIsInciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImxhdEpzb24iLCJwYXJzZUZsb2F0IiwiZ2VvIiwibG5nSnNvbiIsImxhdEJMIiwibG5nQkwiLCJsYXRUUiIsImxuZ1RSIiwib2siLCJsZW5ndGgiLCJpIiwic3RhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUN0QztBQUM3RCw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQywyQ0FBNkI7QUFDdEc7QUFDQSw2Q0FBNkMsZ0NBQWdDLCtCQUErQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixpQkFBaUIsNkJBQTZCLEtBQUssc0JBQXNCLDhCQUE4Qix1REFBdUQsS0FBSyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLHdFQUF3RSw2QkFBNkIsa0NBQWtDLG1CQUFtQixrREFBa0QseUJBQXlCLEtBQUssMERBQTBELGlCQUFpQixpQkFBaUIsaUJBQWlCLGtCQUFrQixpQkFBaUIseUJBQXlCLHNCQUFzQixxQ0FBcUMsS0FBSyxnQkFBZ0Isa0JBQWtCLHFCQUFxQixhQUFhLGlCQUFpQixnQkFBZ0Isc0JBQXNCLGdCQUFnQixtQkFBbUIsb0JBQW9CLDhCQUE4QiwyQkFBMkIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLG1FQUFtRSxjQUFjLGdCQUFnQixjQUFjLFFBQVEsaUJBQWlCLGVBQWUsdUJBQXVCLGFBQWEsV0FBVyxtQkFBbUIsbUJBQW1CLG1CQUFtQixtQ0FBbUMsbUJBQW1CLEtBQUssaUNBQWlDLG9CQUFvQixtQkFBbUIsZ0NBQWdDLHNCQUFzQixLQUFLLHdCQUF3QixrQkFBa0IsbUNBQW1DLEtB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QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aUI7QUFDZixpQkFBT2xDLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0Q7QUFDRixPQUxILEVBS0tGLElBTEwsQ0FLVSxVQUFTRSxJQUFULEVBQWU7QUFDbkJSLDJCQUFtQixDQUFDakQsU0FBcEIsYUFBbUN5RCxJQUFJLENBQUNHLElBQUwsQ0FBVStCLE1BQTdDO0FBQ0F6QyxvQkFBWSxDQUFDbEQsU0FBYixHQUF5QixFQUF6Qjs7QUFDQSxhQUFLLElBQUk0RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDRyxJQUFMLENBQVUrQixNQUE5QixFQUFzQ0MsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QzFDLHNCQUFZLENBQUNsRCxTQUFiLDhDQUNVeUQsSUFBSSxDQUFDRyxJQUFMLENBQVVnQyxDQUFWLEVBQWFDLE9BQWIsQ0FBcUI5QixJQUQvQixrRkFHY04sSUFBSSxDQUFDRyxJQUFMLENBQVVnQyxDQUFWLEVBQWFqQyxHQUgzQjtBQUtIOztBQUFBO0FBQ0osT0FmSCxFQXBHRyxDQXFISDs7QUFDQXRCLGFBQU8sQ0FBQ2MsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUg7O0FBQUEsS0EzSGdCLENBMkhiO0FBQ1AsR0E5SEQsRUFEZSxDQStIVjtBQUNSOztBQUFBLEMsQ0FBRyxlIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1nL2VhcnRoLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBcXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLypAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjYXZlYXQnO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udC9jYXZlYXQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbn0qL1xcclxcblxcclxcbmh0bWwge21pbi1oZWlnaHQ6IDEwMCU7IG1heC13aWR0aDogMTAwJTt9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBcXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0gRm9ybWF0dGluZyAtLS0tLSAqL1xcclxcbi54c21hbGwtZm9udCB7Zm9udC1zaXplOiAxMXB4O31cXHJcXG4uc21hbGwtZm9udCB7Zm9udC1zaXplOiAxNHB4O31cXHJcXG4ubWVkaXVtLWZvbnQge2ZvbnQtc2l6ZTogMThweDt9XFxyXFxuLmxhcmdlLWN1cnNpdmUtZm9udCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnY2F2ZWF0JywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuLmxlZnQtZm9udCB7dGV4dC1hbGlnbjogbGVmdDt9XFxyXFxuXFxyXFxuLndoaXRlLWZvbnQge2NvbG9yOiAjZmZmO31cXHJcXG4uZ3JlZW4tZm9udCB7Y29sb3I6ICM2NzhDMzA7fVxcclxcbi5saWdodC1ibHVlLWZvbnQge2NvbG9yOiAjMDQ4QUJGO31cXHJcXG5cXHJcXG4uZmxleC1yb3cge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjt9XFxyXFxuLmZsZXgtY29sdW1uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0gSW5wdXQgcGFydCAoYW5kIGdlbmVyYWwgdGV4dCkgLS0tLS0gKi9cXHJcXG5oMSB7bWFyZ2luOiAxNXB4O31cXHJcXG5wLCBzdW1tYXJ5IHtwYWRkaW5nOiA3cHg7fVxcclxcbmxpIHtsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiA1cHg7fVxcclxcblxcclxcbiNzZWFyY2gtaW5wdXQge21hcmdpbjogNXB4O31cXHJcXG5pbnB1dCB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjc4QzMwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcclxcbn1cXHJcXG4jc2VhcmNoLWltZyB7d2lkdGg6IDEuOGVtO31cXHJcXG5cXHJcXG4jZ3BzLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDgwcHg7XFxyXFxuXFx0bWFyZ2luOiA1cHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuI2dwcy1pbWcge3dpZHRoOiAxLjNlbTt9XFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0gT3V0cHV0IHBhcnQgLS0tLS0gKi9cXHJcXG4jb3V0cHV0cyB7XFxyXFxuXFx0d2lkdGg6IDI1MHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4O1xcclxcblxcdG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI291dHB1dC12aWV3IHttYXJnaW4tYm90dG9tOiAyMHB4O31cXHJcXG4jb3V0cHV0LXZhbHVlIHtcXHJcXG5cXHR3aWR0aDogNzBweDtcXHJcXG5cXHRoZWlnaHQ6IDcwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuI291dHB1dC1sZXZlbCB7d2lkdGg6IDE1MHB4O31cXHJcXG5cXHJcXG4vKiBEZXRhaWxzICovXFxyXFxuLm9wZW4tYnV0dG9uIHtib3JkZXItdG9wOiAxLjVweCBkYXNoZWQgI0E2QTZBNjt9XFxyXFxuLm9wZW4tYnV0dG9uOmhvdmVyIHtjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjMDQ4QUJGO31cXHJcXG4jZGV0YWlscy1saXN0LCAjc3RhdGlvbnMtbGlzdCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0E2QTZBNjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdG1hcmdpbjogMCA3cHggN3B4IDdweDtcXHJcXG5cXHRwYWRkaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC0tLS0tIFJlc3BvbnNpdmVuZXNzIC0tLS0tICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xcclxcblxcdGgxIHttYXJnaW46IDIwcHg7IHRyYW5zZm9ybTogc2NhbGUoMS4zKTt9XFxyXFxuXFx0I291dHB1dHMge21hcmdpbi10b3A6IDQwcHg7fVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHlCQUF5QjtHQUN2QixzQkFBc0I7R0FDdEIscUJBQXFCO0dBQ3JCLGlCQUFpQjs7Q0FFbkIsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7OztFQUdFOztBQUVGLE1BQU0sZ0JBQWdCLEVBQUUsZUFBZSxDQUFDOztBQUV4QztDQUNDLHlEQUF1QztDQUN2QyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLFlBQVk7O0dBRVYscUNBQXFDO0NBQ3ZDLGtCQUFrQjtBQUNuQjs7O0FBR0EsMkJBQTJCO0FBQzNCLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGFBQWEsZUFBZSxDQUFDO0FBQzdCLGNBQWMsZUFBZSxDQUFDO0FBQzlCO0NBQ0MsZUFBZTtDQUNmLDhCQUE4QjtBQUMvQjtBQUNBLFlBQVksZ0JBQWdCLENBQUM7O0FBRTdCLGFBQWEsV0FBVyxDQUFDO0FBQ3pCLGFBQWEsY0FBYyxDQUFDO0FBQzVCLGtCQUFrQixjQUFjLENBQUM7O0FBRWpDO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUIsQ0FBQztBQUNyQjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7O0FBR0EsOENBQThDO0FBQzlDLElBQUksWUFBWSxDQUFDO0FBQ2pCLFlBQVksWUFBWSxDQUFDO0FBQ3pCLElBQUksZ0JBQWdCLEVBQUUsWUFBWSxDQUFDOztBQUVuQyxlQUFlLFdBQVcsQ0FBQztBQUMzQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUEsWUFBWTtBQUNaO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWix5QkFBeUI7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7Q0FDWiw0QkFBNEI7QUFDN0I7QUFDQSxhQUFhLFlBQVksQ0FBQzs7QUFFMUI7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUNBLFVBQVUsWUFBWSxDQUFDOzs7QUFHdkIsNEJBQTRCO0FBQzVCO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7QUFDYjs7QUFFQSxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7QUFDQSxlQUFlLFlBQVksQ0FBQzs7QUFFNUIsWUFBWTtBQUNaLGNBQWMsZ0NBQWdDLENBQUM7QUFDL0Msb0JBQW9CLGVBQWUsRUFBRSxjQUFjLENBQUM7QUFDcEQ7Q0FDQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2I7OztBQUdBLCtCQUErQjtBQUMvQjtDQUNDLElBQUksWUFBWSxFQUFFLHFCQUFxQixDQUFDO0NBQ3hDLFVBQVUsZ0JBQWdCLENBQUM7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIFxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBcXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBcXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ2NhdmVhdCc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250L2NhdmVhdC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufSovXFxyXFxuXFxyXFxuaHRtbCB7bWluLWhlaWdodDogMTAwJTsgbWF4LXdpZHRoOiAxMDAlO31cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2VhcnRoLmpwZyk7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC0tLS0tIEZvcm1hdHRpbmcgLS0tLS0gKi9cXHJcXG4ueHNtYWxsLWZvbnQge2ZvbnQtc2l6ZTogMTFweDt9XFxyXFxuLnNtYWxsLWZvbnQge2ZvbnQtc2l6ZTogMTRweDt9XFxyXFxuLm1lZGl1bS1mb250IHtmb250LXNpemU6IDE4cHg7fVxcclxcbi5sYXJnZS1jdXJzaXZlLWZvbnQge1xcclxcblxcdGZvbnQtc2l6ZTogMjhweDtcXHJcXG5cXHRmb250LWZhbWlseTogJ2NhdmVhdCcsIGN1cnNpdmU7XFxyXFxufVxcclxcbi5sZWZ0LWZvbnQge3RleHQtYWxpZ246IGxlZnQ7fVxcclxcblxcclxcbi53aGl0ZS1mb250IHtjb2xvcjogI2ZmZjt9XFxyXFxuLmdyZWVuLWZvbnQge2NvbG9yOiAjNjc4QzMwO31cXHJcXG4ubGlnaHQtYmx1ZS1mb250IHtjb2xvcjogIzA0OEFCRjt9XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7fVxcclxcbi5mbGV4LWNvbHVtbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC0tLS0tIElucHV0IHBhcnQgKGFuZCBnZW5lcmFsIHRleHQpIC0tLS0tICovXFxyXFxuaDEge21hcmdpbjogMTVweDt9XFxyXFxucCwgc3VtbWFyeSB7cGFkZGluZzogN3B4O31cXHJcXG5saSB7bGlzdC1zdHlsZTogbm9uZTsgcGFkZGluZzogNXB4O31cXHJcXG5cXHJcXG4jc2VhcmNoLWlucHV0IHttYXJnaW46IDVweDt9XFxyXFxuaW5wdXQge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQnV0dG9ucyAqL1xcclxcbmJ1dHRvbiB7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4OztcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzY3OEMzMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcXHJcXG59XFxyXFxuI3NlYXJjaC1pbWcge3dpZHRoOiAxLjhlbTt9XFxyXFxuXFxyXFxuI2dwcy1idXR0b24ge1xcclxcblxcdHdpZHRoOiA4MHB4O1xcclxcblxcdG1hcmdpbjogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbiNncHMtaW1nIHt3aWR0aDogMS4zZW07fVxcclxcblxcclxcblxcclxcbi8qIC0tLS0tIE91dHB1dCBwYXJ0IC0tLS0tICovXFxyXFxuI291dHB1dHMge1xcclxcblxcdHdpZHRoOiAyNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHRtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNvdXRwdXQtdmlldyB7bWFyZ2luLWJvdHRvbTogMjBweDt9XFxyXFxuI291dHB1dC12YWx1ZSB7XFxyXFxuXFx0d2lkdGg6IDcwcHg7XFxyXFxuXFx0aGVpZ2h0OiA3MHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbiNvdXRwdXQtbGV2ZWwge3dpZHRoOiAxNTBweDt9XFxyXFxuXFxyXFxuLyogRGV0YWlscyAqL1xcclxcbi5vcGVuLWJ1dHRvbiB7Ym9yZGVyLXRvcDogMS41cHggZGFzaGVkICNBNkE2QTY7fVxcclxcbi5vcGVuLWJ1dHRvbjpob3ZlciB7Y3Vyc29yOiBwb2ludGVyOyBjb2xvcjogIzA0OEFCRjt9XFxyXFxuI2RldGFpbHMtbGlzdCwgI3N0YXRpb25zLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNBNkE2QTY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRtYXJnaW46IDAgN3B4IDdweCA3cHg7XFxyXFxuXFx0cGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLSBSZXNwb25zaXZlbmVzcyAtLS0tLSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXHJcXG5cXHRoMSB7bWFyZ2luOiAyMHB4OyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7fVxcclxcblxcdCNvdXRwdXRzIHttYXJnaW4tdG9wOiA0MHB4O31cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9pbWcvc2VhcmNoLnBuZyc7XHJcbmltcG9ydCBncHMgZnJvbSAnLi4vaW1nL2dwcy5wbmcnO1xyXG5cclxuY29uc3QgbXlUb2tlbiA9IHByb2Nlc3MuZW52Lk1ZX1RPS0VOO1xyXG5cclxuXHJcbi8vIF9fX19fX1N0cnVjdHVyZVxyXG5kb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxleC1jb2x1bW4nKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0gSU5QVVQgUEFSVCAtLS0tLS0tLS0tXHJcbmxldCBpbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dHMpO1xyXG5cclxuLy8gMSkgaDEgLSBpbnB1dCB0aXRsZVxyXG5sZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdncmVlbi1mb250IGxhcmdlLWN1cnNpdmUtZm9udCcpO1xyXG5pbnB1dFRpdGxlLmlubmVySFRNTCA9ICdEbyB5b3Ugd2FudCB0byBrbm93IHRoZSBsZXZlbCBvZiBhaXIgcG9sbHV0aW9uIGluIHlvdXIgY2l0eT8nO1xyXG5pbnB1dHMuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XHJcblxyXG4vLyAyKSBwXHJcbmxldCBpbnB1dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmlucHV0UGFyYS5pbm5lckhUTUwgPSAnSW5zZXJ0IHRoZSBuYW1lIG9mIHlvdXIgY2l0eSc7XHJcbmlucHV0cy5hcHBlbmRDaGlsZChpbnB1dFBhcmEpO1xyXG5cclxuLy8gLS0tLS0gU2VhcmNoIHdpdGggdGV4dCBpbnB1dFxyXG4vLyAzKSBkaXYgLSBzZWFyY2ggaW5wdXRcclxubGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWlucHV0Jyk7XHJcbnNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxleC1yb3cnKTtcclxuaW5wdXRzLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuXHJcbi8vIDMuMSkgaW5wdXQgLSBzZWFyY2ggYmFyICgrIGV2ZW50KVxyXG5sZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQ2l0eScpO1xyXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtzZWFyY2hCdXR0b24uY2xpY2soKTt9XHJcbn0pO1xyXG5zZWFyY2hJbnB1dC5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xyXG5cclxuLy8gMy4yKSBidXR0b24gLSBzZWFyY2ggKCsgZXZlbnQpXHJcbmxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWJ1dHRvbicpO1xyXG5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aGl0ZS1mb250Jyk7XHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoc2VhcmNoQmFyLnZhbHVlKSB7XHJcbiAgICAgIGxldCBjaXR5TmFtZSA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBzZWFyY2hCYXIudmFsdWUgPSAnJztcclxuICBcclxuICAgICAgbGluayhgaHR0cHM6Ly9hcGkud2FxaS5pbmZvL2ZlZWQvJHtjaXR5TmFtZX0vP3Rva2VuPSR7bXlUb2tlbn1gKTtcclxuICAgIH1cclxufSk7XHJcbnNlYXJjaElucHV0LmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XHJcblxyXG4vLyAzLjIuMSkgaW1nIC0gc2VhcmNoIGltZyAoaW1nIGZvdCBzZWFyY2ggYnV0dG9uKVxyXG5sZXQgc2VhcmNoSW1nID0gbmV3IEltYWdlKCk7XHJcbnNlYXJjaEltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaC1pbWcnKTtcclxuc2VhcmNoSW1nLnNyYyA9IHNlYXJjaDtcclxuc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEltZyk7XHJcblxyXG5cclxuLy8gLS0tLS0gU2VhcmNoIHdpdGggR1BTIGlucHV0XHJcbi8vIDQpIHBcclxubGV0IGdwc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmdwc1BhcmEuaW5uZXJIVE1MID0gJ29yIGNsaWNrIHRoZSBib3R0b20gdG8gYWN0aXZlIHRoZSBHUFMgcmVzZWFjaCc7XHJcbmlucHV0cy5hcHBlbmRDaGlsZChncHNQYXJhKTtcclxuXHJcbi8vIDUpIGJ1dHRvbiAtIGdwcyAoKyBldmVudClcclxubGV0IGdwc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5ncHNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdncHMtYnV0dG9uJyk7XHJcbmdwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IGFzeW5jIGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBsYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICBsZXQgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgICBsaW5rKGBodHRwczovL2FwaS53YXFpLmluZm8vZmVlZC9nZW86JHtsYXRpdHVkZX07JHtsb25naXR1ZGV9Lz90b2tlbj0ke215VG9rZW59YClcclxuICAgIH07XHJcbiAgICBjb25zdCBlcnJvckNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpb25zID0ge2VuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSwgdGltZW91dDogNTAwMH07XHJcbiAgICAgIFxyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2ssIG9wdGlvbnMpXHJcbn0pO1xyXG5pbnB1dHMuYXBwZW5kQ2hpbGQoZ3BzQnV0dG9uKTtcclxuXHJcbi8vIDUuMSkgaW1nIC0gZ3BzIChpbWcgZm9yIGdwcyBidXR0b24pXHJcbmxldCBncHNJbWcgPSBuZXcgSW1hZ2UoKTtcclxuZ3BzSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3BzLWltZycpO1xyXG5ncHNJbWcuc3JjID0gZ3BzO1xyXG5ncHNCdXR0b24uYXBwZW5kQ2hpbGQoZ3BzSW1nKTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tIE9VVFBVVCBQQVJUIC0tLS0tLS0tLS1cclxubGV0IG91dHB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxub3V0cHV0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ291dHB1dHMnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRwdXRzKTtcclxuXHJcbi8vIDEpIHAgLSBvdXRwdXQgdGl0bGVcclxubGV0IG91dHB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5vdXRwdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NtYWxsLWZvbnQgbGlnaHQtYmx1ZS1mb250IGxlZnQtZm9udCcpO1xyXG5vdXRwdXRzLmFwcGVuZENoaWxkKG91dHB1dFRpdGxlKTtcclxuXHJcbi8vIC0tLS0tIFBvbGx1dGlvbiBsZXZlbCB2aXN1YWxpc2F0aW9uXHJcbi8vIDIpIGRpdiAtIG91dHB1dCB2aWV3XHJcbmxldCBvdXRwdXRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm91dHB1dFZpZXcuc2V0QXR0cmlidXRlKCdpZCcsICdvdXRwdXQtdmlldycpO1xyXG5vdXRwdXRWaWV3LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxleC1yb3cnKTtcclxub3V0cHV0cy5hcHBlbmRDaGlsZChvdXRwdXRWaWV3KTtcclxuXHJcbi8vIDIuMSkgZGl2IC0gb3V0cHV0IHZhbHVlXHJcbmxldCBvdXRwdXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5vdXRwdXRWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ291dHB1dC12YWx1ZScpO1xyXG5vdXRwdXRWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3doaXRlLWZvbnQgbGFyZ2UtY3Vyc2l2ZS1mb250IGZsZXgtcm93Jyk7XHJcbm91dHB1dFZpZXcuYXBwZW5kQ2hpbGQob3V0cHV0VmFsdWUpO1xyXG5cclxuXHJcbi8vIDIuMikgZGl2IC0gb3V0cHV0IGxldmVsXHJcbmxldCBvdXRwdXRMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5vdXRwdXRMZXZlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ291dHB1dC1sZXZlbCcpO1xyXG5vdXRwdXRMZXZlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZsZXgtY29sdW1uJyk7XHJcbm91dHB1dFZpZXcuYXBwZW5kQ2hpbGQob3V0cHV0TGV2ZWwpO1xyXG5cclxuLy8gMi4yLjEpIHAgLSBhcGwgdGl0bGVcclxubGV0IGFwbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5hcGxUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NtYWxsLWZvbnQnKTtcclxuYXBsVGl0bGUuaW5uZXJIVE1MID0gJ0FpciBQb2xsdXRpb24gTGV2ZWwnO1xyXG5vdXRwdXRMZXZlbC5hcHBlbmRDaGlsZChhcGxUaXRsZSk7XHJcblxyXG4vLyAyLjIuMj0gcCAtIGFwbCBsZXZlbFxyXG5sZXQgYXBsTGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmFwbExldmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVkaXVtLWZvbnQnKTtcclxub3V0cHV0TGV2ZWwuYXBwZW5kQ2hpbGQoYXBsTGV2ZWwpO1xyXG5cclxuXHJcbi8vIC0tLS0tIERldGFpbHMgdmlzdWFsaXNhdGlvblxyXG4vLyAzKSBkZXRhaWxzIC0gbW9yZSBkZXRhaWxzXHJcbmxldCBkZXRhaWxzTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RldGFpbHMnKTtcclxub3V0cHV0cy5hcHBlbmRDaGlsZChkZXRhaWxzTW9yZSk7XHJcblxyXG4vLyAzLjEpIHN1bW1hcnkgLSBkZXRhaWxzIGJ1dHRvblxyXG5sZXQgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N1bW1hcnknKTtcclxuZGV0YWlsc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NtYWxsLWZvbnQgbGVmdC1mb250IG9wZW4tYnV0dG9uJyk7XHJcbmRldGFpbHNCdXR0b24uaW5uZXJIVE1MID0gJ01vcmUgZGV0YWlscyc7XHJcbmRldGFpbHNNb3JlLmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xyXG5cclxuLy8gMy4yKSBkaXYgLSBkZXRhaWxzIGxpc3RcclxubGV0IGRldGFpbHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuZGV0YWlsc0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdkZXRhaWxzLWxpc3QnKTtcclxuZGV0YWlsc0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICd4c21hbGwtZm9udCcpO1xyXG5kZXRhaWxzTW9yZS5hcHBlbmRDaGlsZChkZXRhaWxzTGlzdCk7XHJcblxyXG5cclxuLy8gLS0tLS0gU3RhdGlvbnMgdmlzdWFsaXNhdGlvblxyXG4vLyA0KSBkZXRhaWxzIC0gbmVhcmJ5IHN0YXRpb25cclxubGV0IGRldGFpbHNTdGF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RldGFpbHMnKTtcclxub3V0cHV0cy5hcHBlbmRDaGlsZChkZXRhaWxzU3RhdGlvbnMpO1xyXG5cclxuLy8gNC4xKSBzdW1tYXJ5IC0gc3RhdGlvbiBidXR0b25cclxubGV0IHN0YXRpb25zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3VtbWFyeScpO1xyXG5zdGF0aW9uc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NtYWxsLWZvbnQgbGVmdC1mb250IG9wZW4tYnV0dG9uJyk7XHJcbnN0YXRpb25zQnV0dG9uLmlubmVySFRNTCA9ICdNb3JlIHN0YXRpb25zJztcclxuZGV0YWlsc1N0YXRpb25zLmFwcGVuZENoaWxkKHN0YXRpb25zQnV0dG9uKTtcclxuXHJcbi8vIDQuMi4xKSBwIC0gc3RhdGlvbiBkZXNjcmlwdGlvblxyXG5sZXQgc3RhdGlvbnNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3RhdGlvbnNEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NtYWxsLWZvbnQnKTtcclxuZGV0YWlsc1N0YXRpb25zLmFwcGVuZENoaWxkKHN0YXRpb25zRGVzY3JpcHRpb24pO1xyXG5cclxuLy8gNC4yLjIpIGRpdiAtIHN0YXRpb24gbGlzdFxyXG5sZXQgc3RhdGlvbnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuc3RhdGlvbnNMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdGlvbnMtbGlzdCcpO1xyXG5zdGF0aW9uc0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICd4c21hbGwtZm9udCcpO1xyXG5kZXRhaWxzU3RhdGlvbnMuYXBwZW5kQ2hpbGQoc3RhdGlvbnNMaXN0KTtcclxuXHJcbi8vIC0tLS0tIEluaXRpYWwgb3V0cHV0IGRpc3BsYXlcclxub3V0cHV0cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuXHJcbi8vIF9fX19fX1JlcXVlc3RcclxuLy8gLS0tLS0tLS0tLSBBUEkgZmV0Y2ggLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBsaW5rKHVybCkge1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oanNvbikge1xyXG4gICAgICAgIGlmIChqc29uLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICBhbGVydChgVG93biBub3QgZm91bmQuIFBsZWFzZSBpbnNlcnQgdGhlIG5hbWUgb2YgYW5vdGhlciBjaXR5LmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgLS0tLS0gVmFyaWFibGVzIGZyb20gSlNPTlxyXG4gICAgICAgICAgICBsZXQgYXFpO1xyXG4gICAgICAgICAgICBpZiAoJ2FxaScgaW4ganNvbi5kYXRhKSB7YXFpID0ganNvbi5kYXRhLmFxaTt9XHJcbiAgICAgICAgICAgICAgZWxzZSB7YXFpID0gJy0nO307XHJcbiAgICAgICAgICAgIGxldCBjaXR5QXFpO1xyXG4gICAgICAgICAgICBpZiAoJ25hbWUnIGluIGpzb24uZGF0YS5jaXR5KSB7Y2l0eUFxaSA9IGpzb24uZGF0YS5jaXR5Lm5hbWU7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge2NpdHlBcWkgPSAnLSc7fTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbTI1O1xyXG4gICAgICAgICAgICBpZiAoJ3BtMjUnIGluIGpzb24uZGF0YS5pYXFpKSB7cG0yNSA9IGpzb24uZGF0YS5pYXFpLnBtMjUudjt9XHJcbiAgICAgICAgICAgICAgZWxzZSB7cG0yNSA9ICctJzt9O1xyXG4gICAgICAgICAgICBsZXQgcG0xMDtcclxuICAgICAgICAgICAgaWYgKCdwbTEwJyBpbiBqc29uLmRhdGEuaWFxaSkge3BtMTAgPSBqc29uLmRhdGEuaWFxaS5wbTEwLnY7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge3BtMTAgPSAnLSc7fTtcclxuICAgICAgICAgICAgbGV0IG8zO1xyXG4gICAgICAgICAgICBpZiAoJ28zJyBpbiBqc29uLmRhdGEuaWFxaSkge28zID0ganNvbi5kYXRhLmlhcWkubzMudjt9XHJcbiAgICAgICAgICAgICAgZWxzZSB7bzMgPSAnLSc7fTtcclxuICAgICAgICAgICAgbGV0IG5vMjtcclxuICAgICAgICAgICAgaWYgKCdubzInIGluIGpzb24uZGF0YS5pYXFpKSB7bm8yID0ganNvbi5kYXRhLmlhcWkubm8yLnY7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge25vMiA9ICctJzt9O1xyXG4gICAgICAgICAgICBsZXQgc28yO1xyXG4gICAgICAgICAgICBpZiAoJ3NvMicgaW4ganNvbi5kYXRhLmlhcWkpIHtzbzIgPSBqc29uLmRhdGEuaWFxaS5zbzIudjt9XHJcbiAgICAgICAgICAgICAgZWxzZSB7c28yID0gJy0nO307XHJcbiAgICAgICAgICAgIGxldCBjbztcclxuICAgICAgICAgICAgaWYgKCdjbycgaW4ganNvbi5kYXRhLmlhcWkpIHtjbyA9IGpzb24uZGF0YS5pYXFpLmNvLnY7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge2NvID0gJy0nO307XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcDtcclxuICAgICAgICAgICAgaWYgKCd0JyBpbiBqc29uLmRhdGEuaWFxaSkge3RlbXAgPSBqc29uLmRhdGEuaWFxaS50LnY7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge3RlbXAgPSAnLSc7fTtcclxuICAgICAgICAgICAgbGV0IHByZXNzdXJlO1xyXG4gICAgICAgICAgICBpZiAoJ3AnIGluIGpzb24uZGF0YS5pYXFpKSB7cHJlc3N1cmUgPSBqc29uLmRhdGEuaWFxaS5wLnY7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge3ByZXNzdXJlID0gJy0nO307XHJcbiAgICAgICAgICAgIGxldCBodW1pZGl0eTtcclxuICAgICAgICAgICAgaWYgKCdoJyBpbiBqc29uLmRhdGEuaWFxaSkge2h1bWlkaXR5ID0ganNvbi5kYXRhLmlhcWkuaC52O31cclxuICAgICAgICAgICAgICBlbHNlIHtodW1pZGl0eSA9ICctJzt9O1xyXG4gICAgICAgICAgICBsZXQgd2luZDtcclxuICAgICAgICAgICAgaWYgKCd3JyBpbiBqc29uLmRhdGEuaWFxaSkge3dpbmQgPSBqc29uLmRhdGEuaWFxaS53LnY7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge3dpbmQgPSAnLSc7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIC0tLS0tIE91dHB1dCBzZWN0aW9uXHJcbiAgICAgICAgICAgIG91dHB1dFZhbHVlLmlubmVySFRNTCA9IGAke2FxaX1gO1xyXG4gICAgICAgICAgICBvdXRwdXRUaXRsZS5pbm5lckhUTUwgPSBgJHtjaXR5QXFpfWA7XHJcblxyXG4gICAgICAgICAgICAvLyBDb2xvciBhbmQgdGV4dCBjaGFuZ2VzIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBhcWlcclxuICAgICAgICAgICAgaWYgKGFxaSA+PSAwICYmIGFxaSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgIG91dHB1dFZhbHVlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDM4QzVBJztcclxuICAgICAgICAgICAgICBhcGxMZXZlbC5pbm5lckhUTUwgPSAnR29vZCc7XHJcbiAgICAgICAgICAgICAgYXBsTGV2ZWwuc3R5bGUuY29sb3IgPSAnIzAzOEM1QSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXFpID49IDUxICYmIGFxaSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICBvdXRwdXRWYWx1ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0YyQzIzMCc7XHJcbiAgICAgICAgICAgICAgYXBsTGV2ZWwuaW5uZXJIVE1MID0gJ01vZGVyYXRlJztcclxuICAgICAgICAgICAgICBhcGxMZXZlbC5zdHlsZS5jb2xvciA9ICcjRjJDMjMwJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcWkgPj0gMTAxICYmIGFxaSA8PSAxNTApIHtcclxuICAgICAgICAgICAgICBvdXRwdXRWYWx1ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0YyOEIzMCc7XHJcbiAgICAgICAgICAgICAgYXBsTGV2ZWwuaW5uZXJIVE1MID0gJ1VuaGVhbHRoeSBmb3Igc2Vuc2l0aXZlIGdyb3Vwcyc7XHJcbiAgICAgICAgICAgICAgYXBsTGV2ZWwuc3R5bGUuY29sb3IgPSAnI0YyOEIzMCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXFpID49IDE1MSAmJiBhcWkgPD0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgb3V0cHV0VmFsdWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDQzAwMzMnO1xyXG4gICAgICAgICAgICAgIGFwbExldmVsLmlubmVySFRNTCA9ICdVbmhlYWx0aHknO1xyXG4gICAgICAgICAgICAgIGFwbExldmVsLnN0eWxlLmNvbG9yID0gJyNDQzAwMzMnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFxaSA+PSAyMDEgJiYgYXFpIDw9IDMwMCkge1xyXG4gICAgICAgICAgICAgIG91dHB1dFZhbHVlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNTUwMzhDJztcclxuICAgICAgICAgICAgICBhcGxMZXZlbC5pbm5lckhUTUwgPSAnVmVyeSB1bmhlYWx0aHknO1xyXG4gICAgICAgICAgICAgIGFwbExldmVsLnN0eWxlLmNvbG9yID0gJyM1NTAzOEMnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFxaSA+PSAzMDApIHtcclxuICAgICAgICAgICAgICBvdXRwdXRWYWx1ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzczMDIyQyc7XHJcbiAgICAgICAgICAgICAgYXBsTGV2ZWwuaW5uZXJIVE1MID0gJ0hhemFyZG91cyc7XHJcbiAgICAgICAgICAgICAgYXBsTGV2ZWwuc3R5bGUuY29sb3IgPSAnIzczMDIyQyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb3V0cHV0VmFsdWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNBNkE2QTYnO1xyXG4gICAgICAgICAgICAgIGFwbExldmVsLmlubmVySFRNTCA9ICctJztcclxuICAgICAgICAgICAgICBhcGxMZXZlbC5zdHlsZS5jb2xvciA9ICcjQTZBNkE2JztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLSBEZXRhaWxzIHNlY3Rpb25cclxuICAgICAgICAgICAgZGV0YWlsc0xpc3QuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxsaT48Yj5QTTIuNTwvYj4gJHtwbTI1fSDOvGcvbcKzPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGI+UE0xMDwvYj4gJHtwbTEwfSDOvGcvbcKzPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGI+TzM8L2I+ICR7bzN9IM68Zy9twrM8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48Yj5OTzI8L2I+ICR7bm8yfSDOvGcvbcKzPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGI+U08yPC9iPiAke3NvMn0gzrxnL23CszwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxiPkNPPC9iPiAke2NvfSDOvGcvbcKzPC9saT5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxsaT48Yj5UZW1wZXJ0dXJlPC9iPiAke3RlbXB9wrBDPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGI+UHJlc3N1cmU8L2I+ICR7cHJlc3N1cmV9IGcvY23CsjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxiPkh1bWlkaXR5PC9iPiAke2h1bWlkaXR5fSAlPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGI+V2luZDwvYj4gJHt3aW5kfSBtL3M8L2xpPlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgLy8gLS0tLS0gU3RhdGlvbnMgc2VjdGlvblxyXG4gICAgICAgICAgICBsZXQgbGF0SnNvbiA9IHBhcnNlRmxvYXQoanNvbi5kYXRhLmNpdHkuZ2VvWzBdKTtcclxuICAgICAgICAgICAgbGV0IGxuZ0pzb24gPSBwYXJzZUZsb2F0KGpzb24uZGF0YS5jaXR5Lmdlb1sxXSk7XHJcbiAgICAgICAgICAgIGxldCBsYXRCTCA9IGxhdEpzb24gLSAwLjI7XHJcbiAgICAgICAgICAgIGxldCBsbmdCTCA9IGxuZ0pzb24gLSAwLjI7XHJcbiAgICAgICAgICAgIGxldCBsYXRUUiA9IGxhdEpzb24gKyAwLjI7XHJcbiAgICAgICAgICAgIGxldCBsbmdUUiA9IGxuZ0pzb24gKyAwLjI7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkud2FxaS5pbmZvL21hcC9ib3VuZHMvP2xhdGxuZz0ke2xhdEJMfSwke2xuZ0JMfSwke2xhdFRSfSwke2xuZ1RSfSZ0b2tlbj0ke215VG9rZW59YClcclxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xyXG4gICAgICAgICAgICAgICAgICBzdGF0aW9uc0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke2pzb24uZGF0YS5sZW5ndGh9IHN0YXRpb25zIGluIHRoaXMgYXJlYWA7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXRpb25zTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpb25zTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke2pzb24uZGF0YVtpXS5zdGF0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5hcWk6ICR7anNvbi5kYXRhW2ldLmFxaX08L2I+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0tLSBPdXRwdXQgYm94IHZpc3VhbGlzYXRpb25cclxuICAgICAgICAgICAgb3V0cHV0cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTsgIC8vIGNsb3NpbmcgZWxzZVxyXG4gICAgfSk7ICAvLyBjbG9zaW5nIGpzb25cclxufTsgIC8vIGNsb3NpbmcgbGluayJdLCJzb3VyY2VSb290IjoiIn0=