webpackHotUpdate_N_E("pages/en",{

/***/ "./src/components/SideMenu.js":
/*!************************************!*\
  !*** ./src/components/SideMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock_data/headerMenu */ \"./src/mock_data/headerMenu.js\");\n/* harmony import */ var _translation_sideMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translation/sideMenu */ \"./src/translation/sideMenu.js\");\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/SideMenu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SideMenu = function SideMenu(props) {\n  _s();\n\n  var isSideMenuOpened = props.isSideMenuOpened,\n      onClose = props.onClose;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__[\"LanguageContext\"]),\n      lang = _useContext.lang;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"side-menu d-flex justify-content-end align-items-center \".concat(isSideMenuOpened ? 'is-active' : ''),\n    \"data-aos\": true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"position-absolute\",\n      onClick: onClose\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"nav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-start align-items-start overflow-hidden flex-nowrap flex-column w-100\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: _translation_sideMenu__WEBPACK_IMPORTED_MODULE_5__[\"TRANSLATION\"][lang].heading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"d-flex flex-column w-100\",\n          children: _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (item) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"d-flex flex-column news\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"d-flex\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: item.title[lang]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 24,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 19\n              }, _this)\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"nSY2ATGVw9EHMbEaSAY4QbenaJU=\");\n\n_c = SideMenu;\nSideMenu.propTypes = {\n  isSideMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUuanM/NWJjZCJdLCJuYW1lcyI6WyJTaWRlTWVudSIsInByb3BzIiwiaXNTaWRlTWVudU9wZW5lZCIsIm9uQ2xvc2UiLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZyIsIlRSQU5TTEFUSU9OIiwiaGVhZGluZyIsImhlYWRlck1lbnUiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbEJDLGdCQURrQixHQUNZRCxLQURaLENBQ2xCQyxnQkFEa0I7QUFBQSxNQUNBQyxPQURBLEdBQ1lGLEtBRFosQ0FDQUUsT0FEQTs7QUFBQSxvQkFHVEMsd0RBQVUsQ0FBQ0MseUVBQUQsQ0FIRDtBQUFBLE1BR2xCQyxJQUhrQixlQUdsQkEsSUFIa0I7O0FBSzFCLHNCQUNFO0FBQUssYUFBUyxvRUFBNkRKLGdCQUFnQixHQUFHLFdBQUgsR0FBaUIsRUFBOUYsQ0FBZDtBQUFrSCxvQkFBbEg7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFtQyxhQUFPLEVBQUVDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsOEZBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLSSxpRUFBVyxDQUFDRCxJQUFELENBQVgsQ0FBa0JFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBQSxvQkFFSUMsNkRBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSxnQ0FDYjtBQUFLLHVCQUFTLEVBQUMseUJBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFO0FBQUEsNEJBQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFYO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE4Q0ssSUFBSSxDQUFDRSxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBMUJEOztHQUFNYixROztLQUFBQSxRO0FBNEJOQSxRQUFRLENBQUNjLFNBQVQsR0FBcUI7QUFDbkJaLGtCQUFnQixFQUFFYSxpREFBUyxDQUFDQyxJQUFWLENBQWVDLFVBRGQ7QUFFbkJkLFNBQU8sRUFBRVksaURBQVMsQ0FBQ0csSUFBVixDQUFlRDtBQUZMLENBQXJCO0FBS2VqQix1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NpZGVNZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0xhbmd1YWdlUHJvdmlkZXInO1xuaW1wb3J0IGhlYWRlck1lbnUgZnJvbSAnLi4vbW9ja19kYXRhL2hlYWRlck1lbnUnO1xuaW1wb3J0IHsgVFJBTlNMQVRJT04gfSBmcm9tICcuLi90cmFuc2xhdGlvbi9zaWRlTWVudSc7XG5cblxuY29uc3QgU2lkZU1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc1NpZGVNZW51T3BlbmVkLCBvbkNsb3NlIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGxhbmcgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZS1tZW51IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlciAke2lzU2lkZU1lbnVPcGVuZWQgPyAnaXMtYWN0aXZlJyA6ICcnfWB9IGRhdGEtYW9zPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZVwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtc3RhcnQgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtbm93cmFwIGZsZXgtY29sdW1uIHctMTAwXCI+XG4gICAgICAgICAgPGgyPntUUkFOU0xBVElPTltsYW5nXS5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVhZGVyTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBuZXdzXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlW2xhbmddfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2lkZU1lbnUucHJvcFR5cGVzID0ge1xuICBpc1NpZGVNZW51T3BlbmVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SideMenu.js\n");

/***/ }),

/***/ "./src/mock_data/news.js":
false

})