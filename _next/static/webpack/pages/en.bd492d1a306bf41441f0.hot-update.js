webpackHotUpdate_N_E("pages/en",{

/***/ "./src/components/SideMenu.js":
/*!************************************!*\
  !*** ./src/components/SideMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock_data/headerMenu */ \"./src/mock_data/headerMenu.js\");\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/SideMenu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar SideMenu = function SideMenu(props) {\n  _s();\n\n  var isSideMenuOpened = props.isSideMenuOpened,\n      onClose = props.onClose;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__[\"LanguageContext\"]),\n      lang = _useContext.lang;\n\n  var handleNavigation = function handleNavigation(item) {\n    var element = document.querySelector(\".\".concat(item.targetClass));\n\n    if (!element) {\n      return;\n    }\n\n    var yOffset = 40;\n    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;\n    window.scrollTo({\n      top: y,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"side-menu d-flex justify-content-end align-items-center \".concat(isSideMenuOpened ? 'is-active' : ''),\n    \"data-aos\": true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"position-absolute\",\n      onClick: onClose\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"nav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-start align-items-start overflow-hidden flex-nowrap flex-column w-100\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"d-flex flex-column w-100\",\n          children: _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (item) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"d-flex flex-column menu-item\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                title: item.title[lang],\n                onClick: function onClick() {\n                  return handleNavigation(item);\n                },\n                children: item.title[lang]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 19\n              }, _this)\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"nSY2ATGVw9EHMbEaSAY4QbenaJU=\");\n\n_c = SideMenu;\nSideMenu.propTypes = {\n  isSideMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUuanM/NWJjZCJdLCJuYW1lcyI6WyJTaWRlTWVudSIsInByb3BzIiwiaXNTaWRlTWVudU9wZW5lZCIsIm9uQ2xvc2UiLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZyIsImhhbmRsZU5hdmlnYXRpb24iLCJpdGVtIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldENsYXNzIiwieU9mZnNldCIsInkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoZWFkZXJNZW51IiwibWFwIiwidGl0bGUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbEJDLGdCQURrQixHQUNZRCxLQURaLENBQ2xCQyxnQkFEa0I7QUFBQSxNQUNBQyxPQURBLEdBQ1lGLEtBRFosQ0FDQUUsT0FEQTs7QUFBQSxvQkFHVEMsd0RBQVUsQ0FBQ0MseUVBQUQsQ0FIRDtBQUFBLE1BR2xCQyxJQUhrQixlQUdsQkEsSUFIa0I7O0FBSzFCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLFFBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULFlBQTJCSCxJQUFJLENBQUNJLFdBQWhDLEVBQWhCOztBQUNBLFFBQUksQ0FBQ0gsT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFDRCxRQUFNSSxPQUFPLEdBQUcsRUFBaEI7QUFDQSxRQUFNQyxDQUFDLEdBQUdMLE9BQU8sQ0FBQ00scUJBQVIsR0FBZ0NDLEdBQWhDLEdBQXNDQyxNQUFNLENBQUNDLFdBQTdDLEdBQTJETCxPQUFyRTtBQUNBSSxVQUFNLENBQUNFLFFBQVAsQ0FBZ0I7QUFDZEgsU0FBRyxFQUFFRixDQURTO0FBRWRNLGNBQVEsRUFBRTtBQUZJLEtBQWhCO0FBSUQsR0FYRDs7QUFhQSxzQkFDRTtBQUFLLGFBQVMsb0VBQTZEbEIsZ0JBQWdCLEdBQUcsV0FBSCxHQUFpQixFQUE5RixDQUFkO0FBQWtILG9CQUFsSDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLGFBQU8sRUFBRUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyw4RkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQywwQkFBZjtBQUFBLG9CQUVJa0IsNkRBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNkLElBQUQ7QUFBQSxnQ0FDYjtBQUFLLHVCQUFTLEVBQUMsOEJBQWY7QUFBQSxxQ0FDRTtBQUNFLHFCQUFLLEVBQUVBLElBQUksQ0FBQ2UsS0FBTCxDQUFXakIsSUFBWCxDQURUO0FBRUUsdUJBQU8sRUFBRTtBQUFBLHlCQUFNQyxnQkFBZ0IsQ0FBQ0MsSUFBRCxDQUF0QjtBQUFBLGlCQUZYO0FBQUEsMEJBSUdBLElBQUksQ0FBQ2UsS0FBTCxDQUFXakIsSUFBWDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFtREUsSUFBSSxDQUFDZ0IsRUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXpDRDs7R0FBTXhCLFE7O0tBQUFBLFE7QUEyQ05BLFFBQVEsQ0FBQ3lCLFNBQVQsR0FBcUI7QUFDbkJ2QixrQkFBZ0IsRUFBRXdCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFEZDtBQUVuQnpCLFNBQU8sRUFBRXVCLGlEQUFTLENBQUNHLElBQVYsQ0FBZUQ7QUFGTCxDQUFyQjtBQUtlNUIsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9MYW5ndWFnZVByb3ZpZGVyJztcbmltcG9ydCBoZWFkZXJNZW51IGZyb20gJy4uL21vY2tfZGF0YS9oZWFkZXJNZW51JztcblxuXG5jb25zdCBTaWRlTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlzU2lkZU1lbnVPcGVuZWQsIG9uQ2xvc2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgbGFuZyB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpdGVtLnRhcmdldENsYXNzfWApO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB5T2Zmc2V0ID0gNDA7XG4gICAgY29uc3QgeSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgeU9mZnNldDtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiB5LFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlLW1lbnUgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyICR7aXNTaWRlTWVudU9wZW5lZCA/ICdpcy1hY3RpdmUnIDogJyd9YH0gZGF0YS1hb3M+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlXCIgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1zdGFydCBvdmVyZmxvdy1oaWRkZW4gZmxleC1ub3dyYXAgZmxleC1jb2x1bW4gdy0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoZWFkZXJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1lbnUtaXRlbVwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZVtsYW5nXX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGlvbihpdGVtKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGVbbGFuZ119XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaWRlTWVudS5wcm9wVHlwZXMgPSB7XG4gIGlzU2lkZU1lbnVPcGVuZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SideMenu.js\n");

/***/ })

})