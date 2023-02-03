/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecontainer"]("src_bootstrap_tsx",{

/***/ "./src/browsePage/BrowsePage.tsx":
/*!***************************************!*\
  !*** ./src/browsePage/BrowsePage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowsePage\": () => (/* binding */ BrowsePage)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"../../node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ \"../../node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui */ \"webpack/sharing/consume/default/ui/ui\");\n/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ui__WEBPACK_IMPORTED_MODULE_4__);\n\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure \" + obj); }\n\n\n\nvar BrowsePage = function BrowsePage(_ref) {\n  _objectDestructuringEmpty(_ref);\n  var _useBrowserStore = (0,ui__WEBPACK_IMPORTED_MODULE_4__.useBrowserStore)(function (state) {\n      return {\n        quotations: state.quotations\n      };\n    }),\n    quotations = _useBrowserStore.quotations;\n  console.log({\n    quotations: quotations\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h2\", null, \"BrowsePage\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: {\n      height: \"50px\",\n      width: \"50px\",\n      backgroundColor: \"#86E5FF\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"search\",\n    style: {\n      textDecoration: \"none\"\n    }\n  }, \"Create\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, \"Customer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, \"Check In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, \"Check Out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, \"Status\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"tbody\", null, quotations === null || quotations === void 0 ? void 0 : quotations.map(function (quotation) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"tr\", {\n      key: quotation.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, quotation.customerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, new Date(quotation.checkIn).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, new Date(quotation.checkOut).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"th\", null, quotation.quotationStatus));\n  })))));\n};\nBrowsePage.displayName = \"BrowsePage\";\n\n//# sourceURL=webpack://container/./src/browsePage/BrowsePage.tsx?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.map.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.map.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar $map = (__webpack_require__(/*! ../internals/array-iteration */ \"../../node_modules/core-js/internals/array-iteration.js\").map);\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n\n// `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://container/../../node_modules/core-js/modules/es.array.map.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.date.to-string.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.date.to-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO: Remove from `core-js@4`\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"../../node_modules/core-js/internals/function-uncurry-this.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"../../node_modules/core-js/internals/define-built-in.js\");\n\nvar DatePrototype = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);\nvar thisTimeValue = uncurryThis(DatePrototype.getTime);\n\n// `Date.prototype.toString` method\n// https://tc39.es/ecma262/#sec-date.prototype.tostring\nif (String(new Date(NaN)) != INVALID_DATE) {\n  defineBuiltIn(DatePrototype, TO_STRING, function toString() {\n    var value = thisTimeValue(this);\n    // eslint-disable-next-line no-self-compare -- NaN check\n    return value === value ? nativeDateToString(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://container/../../node_modules/core-js/modules/es.date.to-string.js?");

/***/ })

});