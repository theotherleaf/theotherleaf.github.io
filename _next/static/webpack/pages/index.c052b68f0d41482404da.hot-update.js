/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SideMenu.js":
/*!************************************!*\
  !*** ./src/components/SideMenu.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialMedia */ \"./src/components/SocialMedia.js\");\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock_data/headerMenu */ \"./src/mock_data/headerMenu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/SideMenu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SideMenu = function SideMenu(props) {\n  _s();\n\n  var isSideMenuOpened = props.isSideMenuOpened,\n      onClose = props.onClose;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__.LanguageContext),\n      lang = _useContext.lang;\n\n  var handleNavigation = function handleNavigation(item) {\n    var element = document.querySelector(\".\".concat(item.targetClass));\n\n    if (!element) {\n      return;\n    }\n\n    var yOffset = -60;\n    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;\n    window.scrollTo({\n      top: y,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"side-menu \".concat(isSideMenuOpened ? 'is-active' : ''),\n    \"data-aos\": true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"position-absolute\",\n      onClick: onClose\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: \"nav\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-between align-items-start overflow-hidden flex-nowrap flex-column w-100\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"d-flex flex-column w-100\",\n          children: _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_5__.default.map(function (item) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"d-flex flex-column menu-item\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                title: item.title[lang],\n                onClick: function onClick() {\n                  onClose();\n                  handleNavigation(item);\n                },\n                children: item.title[lang]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 19\n              }, _this)\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialMedia__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"nSY2ATGVw9EHMbEaSAY4QbenaJU=\");\n\n_c = SideMenu;\nSideMenu.propTypes = {\n  isSideMenuOpened: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),\n  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUuanM/NWJjZCJdLCJuYW1lcyI6WyJTaWRlTWVudSIsInByb3BzIiwiaXNTaWRlTWVudU9wZW5lZCIsIm9uQ2xvc2UiLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZyIsImhhbmRsZU5hdmlnYXRpb24iLCJpdGVtIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldENsYXNzIiwieU9mZnNldCIsInkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoZWFkZXJNZW51IiwidGl0bGUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNsQkMsZ0JBRGtCLEdBQ1lELEtBRFosQ0FDbEJDLGdCQURrQjtBQUFBLE1BQ0FDLE9BREEsR0FDWUYsS0FEWixDQUNBRSxPQURBOztBQUFBLG9CQUdUQyxpREFBVSxDQUFDQyxzRUFBRCxDQUhEO0FBQUEsTUFHbEJDLElBSGtCLGVBR2xCQSxJQUhrQjs7QUFLMUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDakMsUUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsWUFBMkJILElBQUksQ0FBQ0ksV0FBaEMsRUFBaEI7O0FBQ0EsUUFBSSxDQUFDSCxPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUNELFFBQU1JLE9BQU8sR0FBRyxDQUFDLEVBQWpCO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHTCxPQUFPLENBQUNNLHFCQUFSLEdBQWdDQyxHQUFoQyxHQUFzQ0MsTUFBTSxDQUFDQyxXQUE3QyxHQUEyREwsT0FBckU7QUFDQUksVUFBTSxDQUFDRSxRQUFQLENBQWdCO0FBQ2RILFNBQUcsRUFBRUYsQ0FEUztBQUVkTSxjQUFRLEVBQUU7QUFGSSxLQUFoQjtBQUlELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLHNCQUFlbEIsZ0JBQWdCLEdBQUcsV0FBSCxHQUFpQixFQUFoRCxDQUFkO0FBQW9FLG9CQUFwRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLGFBQU8sRUFBRUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxnR0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQywwQkFBZjtBQUFBLG9CQUVJa0IsOERBQUEsQ0FBZSxVQUFDYixJQUFEO0FBQUEsZ0NBQ2I7QUFBSyx1QkFBUyxFQUFDLDhCQUFmO0FBQUEscUNBQ0U7QUFDRSxxQkFBSyxFQUFFQSxJQUFJLENBQUNjLEtBQUwsQ0FBV2hCLElBQVgsQ0FEVDtBQUVFLHVCQUFPLEVBQUUsbUJBQU07QUFDYkgseUJBQU87QUFDUEksa0NBQWdCLENBQUNDLElBQUQsQ0FBaEI7QUFDRCxpQkFMSDtBQUFBLDBCQU9HQSxJQUFJLENBQUNjLEtBQUwsQ0FBV2hCLElBQVg7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBbURFLElBQUksQ0FBQ2UsRUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBa0JFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQTdDRDs7R0FBTXZCLFE7O0tBQUFBLFE7QUErQ05BLFFBQVEsQ0FBQ3dCLFNBQVQsR0FBcUI7QUFDbkJ0QixrQkFBZ0IsRUFBRXVCLG1FQURDO0FBRW5CdEIsU0FBTyxFQUFFc0IsbUVBQXlCQztBQUZmLENBQXJCO0FBS0EsK0RBQWUxQixRQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvTGFuZ3VhZ2VQcm92aWRlcic7XG5pbXBvcnQgaGVhZGVyTWVudSBmcm9tICcuLi9tb2NrX2RhdGEvaGVhZGVyTWVudSc7XG5cblxuY29uc3QgU2lkZU1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc1NpZGVNZW51T3BlbmVkLCBvbkNsb3NlIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGxhbmcgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aXRlbS50YXJnZXRDbGFzc31gKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeU9mZnNldCA9IC02MDtcbiAgICBjb25zdCB5ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgKyB5T2Zmc2V0O1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IHksXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGUtbWVudSAke2lzU2lkZU1lbnVPcGVuZWQgPyAnaXMtYWN0aXZlJyA6ICcnfWB9IGRhdGEtYW9zPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZVwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydCBvdmVyZmxvdy1oaWRkZW4gZmxleC1ub3dyYXAgZmxleC1jb2x1bW4gdy0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoZWFkZXJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1lbnUtaXRlbVwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZVtsYW5nXX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOYXZpZ2F0aW9uKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZVtsYW5nXX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNpZGVNZW51LnByb3BUeXBlcyA9IHtcbiAgaXNTaWRlTWVudU9wZW5lZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SideMenu.js\n");

/***/ })

});