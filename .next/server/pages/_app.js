(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,399];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 8484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1075);


function App({ Component , pageProps  }) {
    // return(<Layout>
    // 	<Component {...pageProps}/>
    // </Layout>)
    const getLayout = Component.getLayout || ((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: page
        }));
    return getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    }));
}


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [75], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();