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

/***/ "./components/Slider.jsx":
/*!*******************************!*\
  !*** ./components/Slider.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SliderData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SliderData */ \"./components/SliderData.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Slider = function(param) {\n    var slides = param.slides;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var length = slides.length;\n    var nextSlide = function() {\n        setCurrent(current === length - 1 ? 0 : current + 1);\n    };\n    var prevSlide = function() {\n        setCurrent(current === 0 ? length - 1 : current - 1);\n    };\n    if (!Array.isArray(slides) || slides.length <= 0) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"gallery\",\n        className: \"max-w-[1240px] mx-auto z-[2]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center p-4\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex justify-center p-4\",\n                children: _SliderData__WEBPACK_IMPORTED_MODULE_3__.SliderData.map(function(img, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: index === current ? \"opacity-[1] ease-in duration-1000\" : \"opacity-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowCircleLeft, {\n                                onClick: prevSlide,\n                                className: \"absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]\",\n                                size: 50\n                            }, void 0, false, {\n                                fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, _this1),\n                            index === current && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: img.image,\n                                alt: \"/\",\n                                width: \"1440\",\n                                height: \"600\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowCircleRight, {\n                                onClick: nextSlide,\n                                className: \"absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]\",\n                                size: 50\n                            }, void 0, false, {\n                                fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, _this1)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/_0xmartin/Documents/Gdemo/20-12-2022/geotech-demo/components/Slider.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Slider, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ1M7QUFDRTtBQUM2Qjs7QUFFdkUsSUFBTU0sTUFBTSxHQUFHLGdCQUFnQjtRQUFiQyxNQUFNLFNBQU5BLE1BQU07OztJQUN0QixJQUE4QkwsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFsQ00sT0FBTyxHQUFnQk4sR0FBVyxHQUEzQixFQUFFTyxVQUFVLEdBQUlQLEdBQVcsR0FBZjtJQUMxQixJQUFNUSxNQUFNLEdBQUdILE1BQU0sQ0FBQ0csTUFBTTtJQUU1QixJQUFNQyxTQUFTLEdBQUcsV0FBTTtRQUN0QkYsVUFBVSxDQUFDRCxPQUFPLEtBQUtFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHRixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFDRCxJQUFNSSxTQUFTLEdBQUcsV0FBTTtRQUN0QkgsVUFBVSxDQUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFHRSxNQUFNLEdBQUcsQ0FBQyxHQUFHRixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxJQUFJLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxDQUFDUCxNQUFNLENBQUMsSUFBSUEsTUFBTSxDQUFDRyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxFQUFFLEVBQUMsU0FBUztRQUFDQyxTQUFTLEVBQUMsOEJBQThCOzswQkFDeEQsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxvQ0FBb0M7MEJBQUMsV0FBUzs7Ozs7cUJBQUs7MEJBQ2pFLDhEQUFDRixLQUFHO2dCQUFDRSxTQUFTLEVBQUMsa0NBQWtDOzBCQUVoRGQsdURBQWMsQ0FBQyxTQUFDaUIsR0FBRyxFQUFFQyxLQUFLLEVBQUs7b0JBQzlCLHFCQUNFLDhEQUFDTixLQUFHO3dCQUVGRSxTQUFTLEVBQ1BJLEtBQUssS0FBS2IsT0FBTyxHQUNiLG1DQUFtQyxHQUNuQyxXQUFXOzswQ0FHZiw4REFBQ0osNkRBQWlCO2dDQUNoQmtCLE9BQU8sRUFBRVYsU0FBUztnQ0FDbEJLLFNBQVMsRUFBQywrRUFBK0U7Z0NBQ3pGTSxJQUFJLEVBQUUsRUFBRTs7Ozs7c0NBQ1I7NEJBQ0RGLEtBQUssS0FBS2IsT0FBTyxrQkFDaEIsOERBQUNSLG1EQUFLO2dDQUNKd0IsR0FBRyxFQUFFSixHQUFHLENBQUNLLEtBQUs7Z0NBQ2RDLEdBQUcsRUFBQyxHQUFHO2dDQUNQQyxLQUFLLEVBQUMsTUFBTTtnQ0FDWkMsTUFBTSxFQUFDLEtBQUs7Z0NBQ1pDLFNBQVMsRUFBQyxPQUFPOzs7OztzQ0FDakI7MENBRUosOERBQUN4Qiw4REFBa0I7Z0NBQ2pCaUIsT0FBTyxFQUFFWCxTQUFTO2dDQUNsQk0sU0FBUyxFQUFDLGdGQUFnRjtnQ0FDMUZNLElBQUksRUFBRSxFQUFFOzs7OztzQ0FDUjs7dUJBekJDRixLQUFLOzs7OzhCQTBCSixDQUNSO2lCQUNMLENBQUM7Ozs7O3FCQUNJOzs7Ozs7YUFDQSxDQUNOO0NBQ0g7R0F2REtmLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQXlEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2xpZGVyLmpzeD8zZGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNsaWRlckRhdGEgfSBmcm9tICcuL1NsaWRlckRhdGEnO1xuaW1wb3J0IHsgRmFBcnJvd0NpcmNsZUxlZnQsIEZhQXJyb3dDaXJjbGVSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuY29uc3QgU2xpZGVyID0gKHsgc2xpZGVzIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGxlbmd0aCA9IHNsaWRlcy5sZW5ndGg7XG5cbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnQoY3VycmVudCA9PT0gbGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50ICsgMSk7XG4gIH07XG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50KGN1cnJlbnQgPT09IDAgPyBsZW5ndGggLSAxIDogY3VycmVudCAtIDEpO1xuICB9O1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShzbGlkZXMpIHx8IHNsaWRlcy5sZW5ndGggPD0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdnYWxsZXJ5JyBjbGFzc05hbWU9J21heC13LVsxMjQwcHhdIG14LWF1dG8gei1bMl0nPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHAtNCc+UG9ydGZvbGlvPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIHAtNCc+XG5cbiAgICAgIHtTbGlkZXJEYXRhLm1hcCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFxuICAgICAgICAgICAgICAgID8gJ29wYWNpdHktWzFdIGVhc2UtaW4gZHVyYXRpb24tMTAwMCdcbiAgICAgICAgICAgICAgICA6ICdvcGFjaXR5LTAnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFBcnJvd0NpcmNsZUxlZnRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtWzUwJV0gbGVmdC1bMzBweF0gdGV4dC13aGl0ZS83MCBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSB6LVsyXSdcbiAgICAgICAgICAgICAgICBzaXplPXs1MH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2luZGV4ID09PSBjdXJyZW50ICYmIChcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1nLmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PScvJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9JzE0NDAnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzYwMCdcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEZhQXJyb3dDaXJjbGVSaWdodFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRTbGlkZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bNTAlXSByaWdodC1bMzBweF0gdGV4dC13aGl0ZS83MCBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSB6LVsyXSdcbiAgICAgICAgICAgICAgICBzaXplPXs1MH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNsaWRlckRhdGEiLCJGYUFycm93Q2lyY2xlTGVmdCIsIkZhQXJyb3dDaXJjbGVSaWdodCIsIlNsaWRlciIsInNsaWRlcyIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwibGVuZ3RoIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImltZyIsImluZGV4Iiwib25DbGljayIsInNpemUiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider.jsx\n"));

/***/ })

});