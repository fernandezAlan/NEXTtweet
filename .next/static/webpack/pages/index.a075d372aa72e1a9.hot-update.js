"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./firebase/client.js":
/*!****************************!*\
  !*** ./firebase/client.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginWithGithub\": function() { return /* binding */ loginWithGithub; }\n/* harmony export */ });\n/* harmony import */ var C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nvar firebaseConfig = {\n    apiKey: \"AIzaSyCvfDk7XBYp6Kgn662U9-qrEzWhBMmFOEY\",\n    authDomain: \"dev-tw-3997d.firebaseapp.com\",\n    projectId: \"dev-tw-3997d\",\n    storageBucket: \"dev-tw-3997d.appspot.com\",\n    messagingSenderId: \"95783529278\",\n    appId: \"1:95783529278:web:763c2c2a61292e557eda6f\",\n    measurementId: \"G-QP5JQJYX0Y\"\n};\n(0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\nvar loginWithGithub = function() {\n    var _ref = _asyncToGenerator(C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, auth;\n        return C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    try {\n                        provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GithubAuthProvider();\n                        auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n                        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider);\n                    } catch (error) {\n                        console.error(\"error at loginWithGithub:\", error);\n                    }\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function loginWithGithub() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ2hDO0FBRTdDLG1FQUFtRTtBQUNuRSxJQUFNSSxjQUFjLEdBQUc7SUFDckJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUNDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCQyxhQUFhLEVBQUUsMEJBQTBCO0lBQ3pDQyxpQkFBaUIsRUFBRSxhQUFhO0lBQ2hDQyxLQUFLLEVBQUUsMENBQTBDO0lBQ2pEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVEUiwyREFBYSxDQUFDQyxjQUFjLENBQUMsQ0FBQztBQUV2QixJQUFNUSxlQUFlO2VBQUcsdUxBQVk7WUFFakNDLFFBQVEsRUFDUkMsSUFBSTs7OztvQkFGWixJQUFJO3dCQUNJRCxRQUFRLEdBQUcsSUFBSVgsNkRBQWtCLEVBQUUsQ0FBQzt3QkFDcENZLElBQUksR0FBR2Qsc0RBQU8sRUFBRSxDQUFDO3dCQUN2QkMsOERBQWUsQ0FBQ2EsSUFBSSxFQUFFRCxRQUFRLENBQUMsQ0FBQztxQkFDakMsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7d0JBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDJCQUEyQixFQUFFQSxLQUFLLENBQUMsQ0FBQztxQkFDbkQ7Ozs7OztLQUNGO29CQVJZSCxlQUFlOzs7R0FRM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9maXJlYmFzZS9jbGllbnQuanM/ODRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBdXRoLCBzaWduSW5XaXRoUG9wdXAsIEdpdGh1YkF1dGhQcm92aWRlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDdmZEazdYQllwNktnbjY2MlU5LXFyRXpXaEJNbUZPRVlcIixcclxuICBhdXRoRG9tYWluOiBcImRldi10dy0zOTk3ZC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZGV2LXR3LTM5OTdkXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJkZXYtdHctMzk5N2QuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NTc4MzUyOTI3OFwiLFxyXG4gIGFwcElkOiBcIjE6OTU3ODM1MjkyNzg6d2ViOjc2M2MyYzJhNjEyOTJlNTU3ZWRhNmZcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctUVA1SlFKWVgwWVwiLFxyXG59O1xyXG5cclxuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR2l0aHViID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHaXRodWJBdXRoUHJvdmlkZXIoKTtcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgbG9naW5XaXRoR2l0aHViOlwiLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZ2V0QXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdpdGh1YkF1dGhQcm92aWRlciIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJsb2dpbldpdGhHaXRodWIiLCJwcm92aWRlciIsImF1dGgiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/client.js\n");

/***/ })

});