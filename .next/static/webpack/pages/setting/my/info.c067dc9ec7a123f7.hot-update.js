"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/setting/my/info",{

/***/ "./src/pages/setting/my/info.js":
/*!**************************************!*\
  !*** ./src/pages/setting/my/info.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MyInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/Layout */ \"./src/component/Layout.js\");\n/* harmony import */ var component_SubLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/SubLayout */ \"./src/component/SubLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction MyInfo() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { status =\"initial\"  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"My Info\"\n            }, void 0, false, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: [\n                    \"Clicked: \",\n                    String(clicked)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: [\n                    \"Status: \",\n                    status\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    alert(\"edit\");\n                    setClicked(true);\n                    location.replace(\"/setting/my/info?status=replace\");\n                },\n                children: \"edit(replace)\"\n            }, void 0, false, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    alert(\"edit\");\n                    setClicked(true);\n                    router.push(\"/setting/my/info?status=push\");\n                },\n                children: \"edit(push)\"\n            }, void 0, false, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    alert(\"edit\");\n                    setClicked(true);\n                    router.push(\"/setting/my/info?status=shallow\");\n                },\n                children: \"edit(shallow)\"\n            }, void 0, false, {\n                fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyInfo, \"/g6PgJKXMDeUyBI6gsBFFtlGZKI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MyInfo;\nMyInfo.getLayout = function getLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(component_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(component_SubLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: page\n        }, void 0, false, {\n            fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n            lineNumber: 47,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/a123123/WebstormProjects/next-study/nextjs-blog/src/pages/setting/my/info.js\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"MyInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2V0dGluZy9teS9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDTDtBQUNNO0FBQ2I7QUFDTzs7QUFTdkIsU0FBU0ssU0FBUzs7SUFDaEMsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sRUFBQ00sUUFBUyxVQUFTLEVBQUMsR0FBR0gsT0FBT0ksS0FBSztJQUN6QyxxQkFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFROzs7Ozs7MEJBQ3RCLDhEQUFDRDtnQkFBR0MsV0FBVTs7b0JBQVE7b0JBQVVDLE9BQU9OOzs7Ozs7OzBCQUN2Qyw4REFBQ0k7Z0JBQUdDLFdBQVU7O29CQUFRO29CQUFTSDs7Ozs7OzswQkFDL0IsOERBQUNLOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTTtvQkFDdEJDLE1BQU07b0JBQ05ULFdBQVcsSUFBSTtvQkFDZlUsU0FBU0MsT0FBTyxDQUFDO2dCQUNsQjswQkFBRzs7Ozs7OzBCQUNILDhEQUFDTDs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFPQyxTQUFTLElBQU07b0JBQ3RCQyxNQUFNO29CQUNOVCxXQUFXLElBQUk7b0JBQ2ZGLE9BQU9jLElBQUksQ0FBQztnQkFDYjswQkFBRzs7Ozs7OzBCQUNILDhEQUFDTDtnQkFBT0MsU0FBUyxJQUFNO29CQUN0QkMsTUFBTTtvQkFDTlQsV0FBVyxJQUFJO29CQUNmRixPQUFPYyxJQUFJLENBQUM7Z0JBQ2I7MEJBQUc7Ozs7Ozs7O0FBR04sQ0FBQztHQTVCdUJmOztRQUNSRCxrREFBU0E7OztLQUREQztBQThCeEJBLE9BQU9nQixTQUFTLEdBQUcsU0FBU0EsVUFBVUMsSUFBSSxFQUFFO0lBQzNDLHFCQUNDLDhEQUFDckIsd0RBQU1BO2tCQUNOLDRFQUFDQywyREFBU0E7c0JBQUVvQjs7Ozs7Ozs7Ozs7QUFHZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2V0dGluZy9teS9pbmZvLmpzP2ZhYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50L0xheW91dFwiO1xuaW1wb3J0IFN1YkxheW91dCBmcm9tIFwiY29tcG9uZW50L1N1YkxheW91dFwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG5cdGNvbnNvbGUubG9nKCdzZXJ2ZXInKVxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7fSxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUluZm8oKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHtzdGF0dXMgPSAnaW5pdGlhbCd9ID0gcm91dGVyLnF1ZXJ5O1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NeSBJbmZvPC9oMT5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkNsaWNrZWQ6IHtTdHJpbmcoY2xpY2tlZCl9PC9oMT5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0YXR1czoge3N0YXR1c308L2gxPlxuXHRcdFx0PGJyLz5cblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRhbGVydChcImVkaXRcIik7XG5cdFx0XHRcdHNldENsaWNrZWQodHJ1ZSlcblx0XHRcdFx0bG9jYXRpb24ucmVwbGFjZShcIi9zZXR0aW5nL215L2luZm8/c3RhdHVzPXJlcGxhY2VcIilcblx0XHRcdH19PmVkaXQocmVwbGFjZSk8L2J1dHRvbj5cblx0XHRcdDxici8+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0YWxlcnQoXCJlZGl0XCIpO1xuXHRcdFx0XHRzZXRDbGlja2VkKHRydWUpXG5cdFx0XHRcdHJvdXRlci5wdXNoKFwiL3NldHRpbmcvbXkvaW5mbz9zdGF0dXM9cHVzaFwiKVxuXHRcdFx0fX0+ZWRpdChwdXNoKTwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdGFsZXJ0KFwiZWRpdFwiKTtcblx0XHRcdFx0c2V0Q2xpY2tlZCh0cnVlKVxuXHRcdFx0XHRyb3V0ZXIucHVzaChcIi9zZXR0aW5nL215L2luZm8/c3RhdHVzPXNoYWxsb3dcIilcblx0XHRcdH19PmVkaXQoc2hhbGxvdyk8L2J1dHRvbj5cblx0XHQ8Lz5cblx0KVxufVxuXG5NeUluZm8uZ2V0TGF5b3V0ID0gZnVuY3Rpb24gZ2V0TGF5b3V0KHBhZ2UpIHtcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PFN1YkxheW91dD57cGFnZX08L1N1YkxheW91dD5cblx0XHQ8L0xheW91dD5cblx0KVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkxheW91dCIsIlN1YkxheW91dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTXlJbmZvIiwicm91dGVyIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJzdGF0dXMiLCJxdWVyeSIsImgxIiwiY2xhc3NOYW1lIiwiU3RyaW5nIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiYWxlcnQiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJwdXNoIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/setting/my/info.js\n"));

/***/ })

});