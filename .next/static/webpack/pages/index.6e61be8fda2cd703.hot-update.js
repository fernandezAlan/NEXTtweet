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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_Icon_GithubIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Icon/GithubIcon */ \"./components/Icon/GithubIcon.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/client */ \"./firebase/client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(undefined), /*#__PURE__*/ user = ref[0], setUser = ref[1];\n    var handleClick = function() {\n        var _ref = _asyncToGenerator(C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var newUser;\n            return C_Users_User_Desktop_proyecto_devtweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_firebase_client__WEBPACK_IMPORTED_MODULE_9__.loginWithGithub)();\n                    case 2:\n                        newUser = _ctx.sent;\n                        setUser(newUser);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function() {\n        (0,_firebase_client__WEBPACK_IMPORTED_MODULE_9__.isUserSigned)(setUser);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function() {\n        console.log(\"user!\", user);\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                    [\n                        \"7a15807d9680a12d\",\n                        [\n                            _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                            _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                        ]\n                    ]\n                ]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                [\n                                    \"7a15807d9680a12d\",\n                                    [\n                                        _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                                        _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                                    ]\n                                ]\n                            ]),\n                            children: \"devTeet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                            [\n                                \"7a15807d9680a12d\",\n                                [\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                                ]\n                            ]\n                        ]),\n                        children: \" DEV TW\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                            [\n                                \"7a15807d9680a12d\",\n                                [\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                                ]\n                            ]\n                        ]),\n                        children: \"comparte c\\xf3digo entre desarrolladores\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    user === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: handleClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Icon_GithubIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                fill: \"white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            \"inicia sesion con Github\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    user && user.avatar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                            [\n                                \"7a15807d9680a12d\",\n                                [\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                                ]\n                            ]\n                        ]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: user.avatar,\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                    [\n                                        \"7a15807d9680a12d\",\n                                        [\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                                        ]\n                                    ]\n                                ])\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                    [\n                                        \"7a15807d9680a12d\",\n                                        [\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                                        ]\n                                    ]\n                                ]),\n                                children: user.username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"7a15807d9680a12d\",\n                dynamic: [\n                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary,\n                    _styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary\n                ],\n                children: \"div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}h1.__jsx-style-dynamic-selector{color:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.primary, \";font-size:25px}h2.__jsx-style-dynamic-selector{color:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_8__.colors.secondary, \";font-size:20px}img.__jsx-style-dynamic-selector{width:50px;height:50px;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px}strong.__jsx-style-dynamic-selector{color:gray}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\proyecto\\\\devtweet\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"E/B/4Ef6ta/QIMrjUGgByfso7Ds=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNtQjtBQUNOO0FBQ2E7QUFDZDtBQUMwQjtBQUNoQjs7QUFFcEMsU0FBU1csSUFBSSxHQUFHOztJQUM3QixJQUF3QkYsR0FBbUIsR0FBbkJBLGdEQUFRLENBQUNHLFNBQVMsQ0FBQyxnQkFWN0MsSUFVYSxHQUFhSCxHQUFtQixHQUFoQyxFQVZiLE9BVXNCLEdBQUlBLEdBQW1CLEdBQXZCO0lBQ3BCLElBQU1NLFdBQVc7bUJBQUcsdUxBQVk7Z0JBQ3hCQyxPQUFPOzs7OzsrQkFBU1YsaUVBQWUsRUFBRTs7d0JBQWpDVSxPQUFPLFlBQTBCO3dCQUN2Q0YsT0FBTyxDQUFDRSxPQUFPLENBQUMsQ0FBQzs7Ozs7O1NBQ2xCO3dCQUhLRCxXQUFXOzs7T0FHaEI7SUFDREwsaURBQVMsQ0FBQyxXQUFNO1FBQ2RILDhEQUFZLENBQUNPLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUEosaURBQVMsQ0FBQyxXQUFJO1FBQ1pPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBQ0wsSUFBSSxDQUFDO0tBQzFCLEVBQUM7UUFBQ0EsSUFBSTtLQUFDLENBQUM7SUFDVCxxQkFDRSw4REFBQ1gsNkRBQVM7OzBCQUNSLDhEQUFDaUIsS0FBRzs7Ozs7NEJBNkJTZCx5REFBYzs0QkFJZEEsMkRBQWdCOzs7OztrQ0FoQzNCLDhEQUFDTCxrREFBSTtrQ0FDSCw0RUFBQ3NCLE9BQUs7Ozs7O3dDQTJCR2pCLHlEQUFjO3dDQUlkQSwyREFBZ0I7Ozs7c0NBL0JsQixTQUFPOzs7OztnQ0FBUTs7Ozs7NEJBQ2pCO2tDQUNQLDhEQUFDa0IsSUFBRTs7Ozs7b0NBeUJRbEIseURBQWM7b0NBSWRBLDJEQUFnQjs7OztrQ0E3QnZCLFNBQU87Ozs7OzRCQUFLO2tDQUNoQiw4REFBQ21CLElBQUU7Ozs7O29DQXdCUW5CLHlEQUFjO29DQUlkQSwyREFBZ0I7Ozs7a0NBNUJ2QiwwQ0FBcUM7Ozs7OzRCQUFLO29CQUM3Q1EsSUFBSSxLQUFLLElBQUksa0JBQ1osOERBQUNWLDBEQUFNO3dCQUFDc0IsT0FBTyxFQUFFVixXQUFXOzswQ0FDMUIsOERBQUNYLG1FQUFVO2dDQUFDc0IsSUFBSSxFQUFFLE9BQU87Ozs7O29DQUFlOzRCQUFBLDBCQUUxQzs7Ozs7OzRCQUFTO29CQUVWYixJQUFJLElBQUlBLElBQUksQ0FBQ2MsTUFBTSxpQkFDbEIsOERBQUNSLEtBQUc7Ozs7O29DQWdCS2QseURBQWM7b0NBSWRBLDJEQUFnQjs7Ozs7MENBbkJ2Qiw4REFBQ3VCLEtBQUc7Z0NBQUNDLEdBQUcsRUFBRWhCLElBQUksQ0FBQ2MsTUFBTTs7Ozs7NENBZWR0Qix5REFBYzs0Q0FJZEEsMkRBQWdCOzs7Ozs7OztvQ0FuQkU7MENBQ3pCLDhEQUFDeUIsUUFBTTs7Ozs7NENBY0F6Qix5REFBYzs0Q0FJZEEsMkRBQWdCOzs7OzBDQWxCZFEsSUFBSSxDQUFDa0IsUUFBUTs7Ozs7b0NBQVU7Ozs7Ozs0QkFDNUIsR0FDSixJQUFJOzs7Ozs7b0JBQ0o7Ozs7b0JBV08xQix5REFBYztvQkFJZEEsMkRBQWdCOzswQkF4RG5DLHltQkF3RG1CQSxNQUFnQixDQUpoQkEseURBQWMsMkRBSUcsUUFBakJBLDJEQUFnQixrTUF4RGxDOzs7Ozs7O1lBb0VlLENBQ1o7Q0FDSDtHQTdEdUJNLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uL0dpdGh1Ykljb25cIjtcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xyXG5pbXBvcnQgeyBsb2dpbldpdGhHaXRodWIsIGlzVXNlclNpZ25lZCB9IGZyb20gXCIuLi9maXJlYmFzZS9jbGllbnRcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBsb2dpbldpdGhHaXRodWIoKTtcclxuICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNVc2VyU2lnbmVkKHNldFVzZXIpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCd1c2VyIScsdXNlcilcclxuICB9LFt1c2VyXSlcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5kZXZUZWV0PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPiBERVYgVFc8L2gxPlxyXG4gICAgICAgIDxoMj5jb21wYXJ0ZSBjw7NkaWdvIGVudHJlIGRlc2Fycm9sbGFkb3JlczwvaDI+XHJcbiAgICAgICAge3VzZXIgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIDxHaXRodWJJY29uIGZpbGw9e1wid2hpdGVcIn0+PC9HaXRodWJJY29uPlxyXG4gICAgICAgICAgICBpbmljaWEgc2VzaW9uIGNvbiBHaXRodWJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3VzZXIgJiYgdXNlci5hdmF0YXIgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3VzZXIudXNlcm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIkFwcExheW91dCIsIkJ1dHRvbiIsIkdpdGh1Ykljb24iLCJjb2xvcnMiLCJsb2dpbldpdGhHaXRodWIiLCJpc1VzZXJTaWduZWQiLCJyZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInVuZGVmaW5lZCIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2xpY2siLCJuZXdVc2VyIiwiY29uc29sZSIsImxvZyIsImRpdiIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0aXRsZSIsImgxIiwiaDIiLCJvbkNsaWNrIiwiZmlsbCIsImF2YXRhciIsImltZyIsInNyYyIsInN0cm9uZyIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});