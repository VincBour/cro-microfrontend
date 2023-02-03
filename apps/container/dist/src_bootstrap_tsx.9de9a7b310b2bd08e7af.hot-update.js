"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecontainer"]("src_bootstrap_tsx",{

/***/ "./src/searchPage/SearchPage.tsx":
/*!***************************************!*\
  !*** ./src/searchPage/SearchPage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchPage\": () => (/* binding */ SearchPage)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cdm_Cdm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cdm/Cdm */ \"webpack/container/remote/cdm/Cdm\");\n/* harmony import */ var cdm_Cdm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cdm_Cdm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var search_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! search/Search */ \"webpack/container/remote/search/Search\");\n/* harmony import */ var search_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(search_Search__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui */ \"webpack/sharing/consume/default/ui/ui\");\n/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ui__WEBPACK_IMPORTED_MODULE_5__);\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure \" + obj); }\n\n\n\n\n\nvar SearchPage = function SearchPage(_ref) {\n  _objectDestructuringEmpty(_ref);\n  var _useCdmStore = (0,ui__WEBPACK_IMPORTED_MODULE_5__.useCdmStore)(function (state) {\n      return {\n        guest: state.guest\n      };\n    }),\n    guest = _useCdmStore.guest;\n  var _useBrowserStore = (0,ui__WEBPACK_IMPORTED_MODULE_5__.useBrowserStore)(function (state) {\n      return {\n        save: state.addNewQuotation\n      };\n    }),\n    save = _useBrowserStore.save;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      gap: \"18px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((cdm_Cdm__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((search_Search__WEBPACK_IMPORTED_MODULE_3___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    onClick: function onClick() {\n      return save(createNewQuotation(guest));\n    }\n  }, \"Save new Quotation\")));\n};\nSearchPage.displayName = \"SearchPage\";\nvar createNewQuotation = function createNewQuotation(guest) {\n  return {\n    id: \"e7f165e0-2487-4dcb-ba20-b6ae6df99b28\",\n    bookingId: \"\",\n    checkIn: \"2023-01-20T00:00:00\",\n    checkOut: \"2023-01-21T00:00:00\",\n    lengthOfStay: 1,\n    createdBy: 10916,\n    creationDate: \"2023-01-20T13:47:25.103\",\n    currency: \"EUR\",\n    customerName: \"\".concat(guest.firstName, \" \").concat(guest.lastName),\n    hotelId: 10493,\n    occupancy: 2,\n    quotationStatus: \"Expired\",\n    quotationType: \"None\",\n    sentReminders: 0,\n    totalAmount: 0,\n    modificationDate: \"2023-01-20T13:47:48.68\",\n    isSimulation: true\n  };\n};\n\n//# sourceURL=webpack://container/./src/searchPage/SearchPage.tsx?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.concat.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.concat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"../../node_modules/core-js/internals/length-of-array-like.js\");\nvar doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ \"../../node_modules/core-js/internals/does-not-exceed-safe-integer.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  concat: function concat(arg) {\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = lengthOfArrayLike(E);\n        doesNotExceedSafeInteger(n + len);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        doesNotExceedSafeInteger(n + 1);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://container/../../node_modules/core-js/modules/es.array.concat.js?");

/***/ })

});