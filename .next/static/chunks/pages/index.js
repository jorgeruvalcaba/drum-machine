/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjorge%2Fcode%2Foos%2Fdrum-machine%2Fpages%2Findex.tsx!":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjorge%2Fcode%2Foos%2Fdrum-machine%2Fpages%2Findex.tsx! ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmpvcmdlJTJGY29kZSUyRm9vcyUyRmRydW0tbWFjaGluZSUyRnBhZ2VzJTJGaW5kZXgudHN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/OTgwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjorge%2Fcode%2Foos%2Fdrum-machine%2Fpages%2Findex.tsx!\n");

/***/ }),

/***/ "./components/Button/index.tsx":
/*!*************************************!*\
  !*** ./components/Button/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Button = function(param) {\n    var text = param.text, sourceFile = param.sourceFile;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), audio = ref[0], setAudio = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setAudio(new Audio(sourceFile));\n    }, [\n        sourceFile\n    ]);\n    var play = function() {\n        if (audio) audio.play();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"drum-pad border-solid h-16 w-16 m-2 p-4 border-4 align-bottom text-center\",\n        id: \"\".concat(text),\n        onClick: play,\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/jorge/code/oos/drum-machine/components/Button/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this));\n};\n_s(Button, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOzs7QUFPaEQsR0FBSyxDQUFDRyxNQUFNLEdBQUcsUUFBUUMsUUFBNkIsQ0FBQztRQUFwQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVELFVBQVUsU0FBVkEsVUFBVTs7SUFDL0IsR0FBSyxDQUFxQkgsR0FBNEIsR0FBNUJBLCtDQUFRLElBQTNCSyxLQUFLLEdBQWNMLEdBQTRCLEtBQXhDTSxRQUFRLEdBQUlOLEdBQTRCO0lBRXREQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmSyxRQUFRLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUNKLFVBQVU7SUFDL0IsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLFVBQVU7SUFBQSxDQUFDO0lBRWYsR0FBSyxDQUFDSyxJQUFJLEdBQUcsUUFDZixHQURxQixDQUFDO1FBQ2xCLEVBQUUsRUFBRUgsS0FBSyxFQUFFQSxLQUFLLENBQUNHLElBQUk7SUFDdkIsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7UUFDRkMsU0FBUyxFQUFDLENBQTJFO1FBQ3JGQyxFQUFFLEVBQUcsR0FBTyxPQUFMUCxJQUFJO1FBQ1hRLE9BQU8sRUFBRUosSUFBSTtrQkFFWkosSUFBSTs7Ozs7O0FBR1gsQ0FBQztHQXBCS0YsTUFBTTtLQUFOQSxNQUFNO0FBc0JaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeD8xZTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xuICB0ZXh0OiBzdHJpbmdcbiAgc291cmNlRmlsZTogc3RyaW5nXG59XG5cbmNvbnN0IEJ1dHRvbiA9ICh7dGV4dCwgc291cmNlRmlsZX06IEJ1dHRvblByb3BzKSA9PiB7XG4gIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGU8SFRNTEF1ZGlvRWxlbWVudD4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QXVkaW8obmV3IEF1ZGlvKHNvdXJjZUZpbGUpKVxuICB9LCBbc291cmNlRmlsZV0pXG5cbiAgY29uc3QgcGxheSA9ICgpID0+IHtcbiAgICBpZiAoYXVkaW8pIGF1ZGlvLnBsYXkoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJkcnVtLXBhZCBib3JkZXItc29saWQgaC0xNiB3LTE2IG0tMiBwLTQgYm9yZGVyLTQgYWxpZ24tYm90dG9tIHRleHQtY2VudGVyXCJcbiAgICAgIGlkPXtgJHt0ZXh0fWB9XG4gICAgICBvbkNsaWNrPXtwbGF5fVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJzb3VyY2VGaWxlIiwidGV4dCIsImF1ZGlvIiwic2V0QXVkaW8iLCJBdWRpbyIsInBsYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Button/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.tsx\");\n\n\n\nvar _this = undefined;\nvar Home = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-orange-300 flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Drum Machine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Side project to test Audio API\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center text-gray-800 mb-8\",\n                        children: \"Drum Machine 👩‍🎤\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-md bg-white shadow-lg p-4 w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"Q\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"W\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"E\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"A\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"S\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"D\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"Z\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"X\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            text: \"C\",\n                                            sourceFile: \"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"w-full mt-10 flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"\\xa9 \",\n                            new Date().getFullYear()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"underline ml-1\",\n                        href: \"https://jorgearuv.dev\",\n                        children: \"Jorge Ruvalcaba\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jorge/code/oos/drum-machine/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QjtBQUVhOztBQUV6QyxHQUFLLENBQUNFLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDO0lBQzVCLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXFEOzt3RkFDakVKLGtEQUFJOztnR0FDRkssQ0FBSztrQ0FBQyxDQUFZOzs7Ozs7Z0dBQ2xCQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFDLENBQWdDOzs7Ozs7Z0dBQ2hFQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFHckNDLENBQUk7O2dHQUNGQyxDQUFFO3dCQUFDVCxTQUFTLEVBQUMsQ0FBbUQ7a0NBQUMsQ0FFbEU7Ozs7OztnR0FDQ0QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXFCOzhHQUNqQ0QsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQXdDOzs0R0FDcERELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7b0hBQzFDSCwwREFBTTs0Q0FDTGEsSUFBSSxFQUFDLENBQUc7NENBQ1JDLFVBQVUsRUFBQyxDQUEwRDs7Ozs7O29IQUV0RWQsMERBQU07NENBQ0xhLElBQUksRUFBQyxDQUFHOzRDQUNSQyxVQUFVLEVBQUMsQ0FBMEQ7Ozs7OztvSEFFdEVkLDBEQUFNOzRDQUNMYSxJQUFJLEVBQUMsQ0FBRzs0Q0FDUkMsVUFBVSxFQUFDLENBQTBEOzs7Ozs7Ozs7Ozs7NEdBR3hFWixDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBOEI7O29IQUMxQ0gsMERBQU07NENBQ0xhLElBQUksRUFBQyxDQUFHOzRDQUNSQyxVQUFVLEVBQUMsQ0FBeUQ7Ozs7OztvSEFFckVkLDBEQUFNOzRDQUNMYSxJQUFJLEVBQUMsQ0FBRzs0Q0FDUkMsVUFBVSxFQUFDLENBQXlEOzs7Ozs7b0hBRXJFZCwwREFBTTs0Q0FDTGEsSUFBSSxFQUFDLENBQUc7NENBQ1JDLFVBQVUsRUFBQyxDQUF5RDs7Ozs7Ozs7Ozs7OzRHQUd2RVosQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQThCOztvSEFDMUNILDBEQUFNOzRDQUNMYSxJQUFJLEVBQUMsQ0FBRzs0Q0FDUkMsVUFBVSxFQUFDLENBQStEOzs7Ozs7b0hBRTNFZCwwREFBTTs0Q0FDTGEsSUFBSSxFQUFDLENBQUc7NENBQ1JDLFVBQVUsRUFBQyxDQUE4RDs7Ozs7O29IQUUxRWQsMERBQU07NENBQ0xhLElBQUksRUFBQyxDQUFHOzRDQUNSQyxVQUFVLEVBQUMsQ0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQU83RUMsQ0FBTTtnQkFBQ1osU0FBUyxFQUFDLENBQWtDOztnR0FDakRhLENBQUk7OzRCQUFDLENBQUU7NEJBQUMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7Ozs7Ozs7Z0dBQzlCQyxDQUFDO3dCQUFDaEIsU0FBUyxFQUFDLENBQWdCO3dCQUFDTyxJQUFJLEVBQUMsQ0FBdUI7a0NBQUMsQ0FFM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7S0FyRUtULElBQUk7QUF1RVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctb3JhbmdlLTMwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRydW0gTWFjaGluZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaWRlIHByb2plY3QgdG8gdGVzdCBBdWRpbyBBUElcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS04MDAgbWItOFwiPlxuICAgICAgICAgIERydW0gTWFjaGluZSDwn5Gp4oCN8J+OpFxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIGJnLXdoaXRlIHNoYWRvdy1sZyBwLTQgdy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJRXCJcbiAgICAgICAgICAgICAgICBzb3VyY2VGaWxlPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9IZWF0ZXItMS5tcDNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGV4dD1cIldcIlxuICAgICAgICAgICAgICAgIHNvdXJjZUZpbGU9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL0hlYXRlci0yLm1wM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PVwiRVwiXG4gICAgICAgICAgICAgICAgc291cmNlRmlsZT1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9mcmVlY29kZWNhbXAvZHJ1bXMvSGVhdGVyLTMubXAzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PVwiQVwiXG4gICAgICAgICAgICAgICAgc291cmNlRmlsZT1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9mcmVlY29kZWNhbXAvZHJ1bXMvQ2hvcmRfMS5tcDNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGV4dD1cIlNcIlxuICAgICAgICAgICAgICAgIHNvdXJjZUZpbGU9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL0Nob3JkXzIubXAzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJEXCJcbiAgICAgICAgICAgICAgICBzb3VyY2VGaWxlPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9DaG9yZF8zLm1wM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGV4dD1cIlpcIlxuICAgICAgICAgICAgICAgIHNvdXJjZUZpbGU9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL3B1bmNoeV9raWNrXzEubXAzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJYXCJcbiAgICAgICAgICAgICAgICBzb3VyY2VGaWxlPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9zaWRlX3N0aWNrXzEubXAzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJDXCJcbiAgICAgICAgICAgICAgICBzb3VyY2VGaWxlPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9CcmtfU25yLm1wM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidy1mdWxsIG10LTEwIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHNwYW4+wqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3NwYW4+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSBtbC0xXCIgaHJlZj1cImh0dHBzOi8vam9yZ2VhcnV2LmRldlwiPlxuICAgICAgICAgIEpvcmdlIFJ1dmFsY2FiYVxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsIkJ1dHRvbiIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwidGV4dCIsInNvdXJjZUZpbGUiLCJmb290ZXIiLCJzcGFuIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjorge%2Fcode%2Foos%2Fdrum-machine%2Fpages%2Findex.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);