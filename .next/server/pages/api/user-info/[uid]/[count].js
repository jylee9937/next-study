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
exports.id = "pages/api/user-info/[uid]/[count]";
exports.ids = ["pages/api/user-info/[uid]/[count]"];
exports.modules = {

/***/ "(api)/./src/pages/api/user-info/[uid]/[count].js":
/*!**************************************************!*\
  !*** ./src/pages/api/user-info/[uid]/[count].js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const { uid , count  } = req.query;\n    const cookies = req.cookies;\n    res.status(200).json({\n        name: `Lofo ${uid} ${count} ${JSON.stringify(cookies)}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXItaW5mby9bdWlkXS9bY291bnRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QyxNQUFNLEVBQUNDLElBQUcsRUFBRUMsTUFBSyxFQUFDLEdBQUdILElBQUlJLEtBQUs7SUFDOUIsTUFBTUMsVUFBVUwsSUFBSUssT0FBTztJQUMzQkosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDQyxNQUFNLENBQUMsS0FBSyxFQUFFTixJQUFJLENBQUMsRUFBRUMsTUFBTSxDQUFDLEVBQUVNLEtBQUtDLFNBQVMsQ0FBQ0wsU0FBUyxDQUFDO0lBQUE7QUFDOUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvdXNlci1pbmZvL1t1aWRdL1tjb3VudF0uanM/ODA4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHt1aWQsIGNvdW50fSA9IHJlcS5xdWVyeTtcblx0Y29uc3QgY29va2llcyA9IHJlcS5jb29raWVzO1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbih7bmFtZTogYExvZm8gJHt1aWR9ICR7Y291bnR9ICR7SlNPTi5zdHJpbmdpZnkoY29va2llcyl9YH0pXG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInVpZCIsImNvdW50IiwicXVlcnkiLCJjb29raWVzIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/user-info/[uid]/[count].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/user-info/[uid]/[count].js"));
module.exports = __webpack_exports__;

})();