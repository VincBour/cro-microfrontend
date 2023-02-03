"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecontainer"]("src_bootstrap_tsx-webpack_sharing_consume_default_react-dom_react-dom",{

/***/ "./src/browsePage/BrowsePage.tsx":
/*!***************************************!*\
  !*** ./src/browsePage/BrowsePage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowsePage\": () => (/* binding */ BrowsePage)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/dist/index.js\");\n\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure \" + obj); }\n\n\nvar BrowsePage = function BrowsePage(_ref) {\n  _objectDestructuringEmpty(_ref);\n  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {\n    fetch(\"quotations.json\", {\n      headers: {\n        \"Content-Type\": \"application/json\",\n        Accept: \"application/json\"\n      }\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h2\", null, \"BrowsePage\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"search\"\n  }, \"Create\")));\n};\nBrowsePage.displayName = \"BrowsePage\";\n\n//# sourceURL=webpack://container/./src/browsePage/BrowsePage.tsx?");

/***/ })

});