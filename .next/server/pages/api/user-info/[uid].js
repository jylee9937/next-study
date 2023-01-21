"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user-info/[uid]";
exports.ids = ["pages/api/user-info/[uid]"];
exports.modules = {

/***/ "(api)/./src/pages/api/user-info/[uid].js":
/*!******************************************!*\
  !*** ./src/pages/api/user-info/[uid].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const { uid  } = req.query;\n    res.status(200).json({\n        name: `Lofo ${uid}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXItaW5mby9bdWlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDekMsTUFBTSxFQUFDQyxJQUFHLEVBQUMsR0FBR0YsSUFBSUcsS0FBSztJQUN2QkYsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDQyxNQUFNLENBQUMsS0FBSyxFQUFFSixJQUFJLENBQUM7SUFBQTtBQUMxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS91c2VyLWluZm8vW3VpZF0uanM/YjYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHt1aWR9ID0gcmVxLnF1ZXJ5O1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbih7bmFtZTogYExvZm8gJHt1aWR9YH0pXG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInVpZCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/user-info/[uid].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/user-info/[uid].js"));
module.exports = __webpack_exports__;

})();