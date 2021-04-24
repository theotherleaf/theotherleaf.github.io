webpackHotUpdate_N_E("pages/en",{

/***/ "./src/components/SideMenu.js":
/*!************************************!*\
  !*** ./src/components/SideMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialMedia */ \"./src/components/SocialMedia.js\");\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock_data/headerMenu */ \"./src/mock_data/headerMenu.js\");\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/SideMenu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SideMenu = function SideMenu(props) {\n  _s();\n\n  var isSideMenuOpened = props.isSideMenuOpened,\n      onClose = props.onClose;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__[\"LanguageContext\"]),\n      lang = _useContext.lang;\n\n  var handleNavigation = function handleNavigation(item) {\n    var element = document.querySelector(\".\".concat(item.targetClass));\n\n    if (!element) {\n      return;\n    }\n\n    var yOffset = 40;\n    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;\n    window.scrollTo({\n      top: y,\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"side-menu \".concat(isSideMenuOpened ? 'is-active' : ''),\n    \"data-aos\": true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"position-absolute\",\n      onClick: onClose\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"nav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-between align-items-start overflow-hidden flex-nowrap flex-column w-100\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"d-flex flex-column w-100\",\n          children: _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (item) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"d-flex flex-column menu-item\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                title: item.title[lang],\n                onClick: function onClick() {\n                  onClose();\n                  handleNavigation(item);\n                },\n                children: [\"- \", item.title[lang]]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 19\n              }, _this)\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SocialMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"nSY2ATGVw9EHMbEaSAY4QbenaJU=\");\n\n_c = SideMenu;\nSideMenu.propTypes = {\n  isSideMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUuanM/NWJjZCJdLCJuYW1lcyI6WyJTaWRlTWVudSIsInByb3BzIiwiaXNTaWRlTWVudU9wZW5lZCIsIm9uQ2xvc2UiLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZyIsImhhbmRsZU5hdmlnYXRpb24iLCJpdGVtIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldENsYXNzIiwieU9mZnNldCIsInkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoZWFkZXJNZW51IiwibWFwIiwidGl0bGUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbEJDLGdCQURrQixHQUNZRCxLQURaLENBQ2xCQyxnQkFEa0I7QUFBQSxNQUNBQyxPQURBLEdBQ1lGLEtBRFosQ0FDQUUsT0FEQTs7QUFBQSxvQkFHVEMsd0RBQVUsQ0FBQ0MseUVBQUQsQ0FIRDtBQUFBLE1BR2xCQyxJQUhrQixlQUdsQkEsSUFIa0I7O0FBSzFCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLFFBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULFlBQTJCSCxJQUFJLENBQUNJLFdBQWhDLEVBQWhCOztBQUNBLFFBQUksQ0FBQ0gsT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFDRCxRQUFNSSxPQUFPLEdBQUcsRUFBaEI7QUFDQSxRQUFNQyxDQUFDLEdBQUdMLE9BQU8sQ0FBQ00scUJBQVIsR0FBZ0NDLEdBQWhDLEdBQXNDQyxNQUFNLENBQUNDLFdBQTdDLEdBQTJETCxPQUFyRTtBQUNBSSxVQUFNLENBQUNFLFFBQVAsQ0FBZ0I7QUFDZEgsU0FBRyxFQUFFRixDQURTO0FBRWRNLGNBQVEsRUFBRTtBQUZJLEtBQWhCO0FBSUQsR0FYRDs7QUFhQSxzQkFDRTtBQUFLLGFBQVMsc0JBQWVsQixnQkFBZ0IsR0FBRyxXQUFILEdBQWlCLEVBQWhELENBQWQ7QUFBb0Usb0JBQXBFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBTyxFQUFFQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdHQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsb0JBRUlrQiw2REFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ2QsSUFBRDtBQUFBLGdDQUNiO0FBQUssdUJBQVMsRUFBQyw4QkFBZjtBQUFBLHFDQUNFO0FBQ0UscUJBQUssRUFBRUEsSUFBSSxDQUFDZSxLQUFMLENBQVdqQixJQUFYLENBRFQ7QUFFRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2JILHlCQUFPO0FBQ1BJLGtDQUFnQixDQUFDQyxJQUFELENBQWhCO0FBQ0QsaUJBTEg7QUFBQSxpQ0FPS0EsSUFBSSxDQUFDZSxLQUFMLENBQVdqQixJQUFYLENBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBbURFLElBQUksQ0FBQ2dCLEVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFmO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWtCRSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0E3Q0Q7O0dBQU14QixROztLQUFBQSxRO0FBK0NOQSxRQUFRLENBQUN5QixTQUFULEdBQXFCO0FBQ25CdkIsa0JBQWdCLEVBQUV3QixpREFBUyxDQUFDQyxJQUFWLENBQWVDLFVBRGQ7QUFFbkJ6QixTQUFPLEVBQUV1QixpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBRkwsQ0FBckI7QUFLZTVCLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvTGFuZ3VhZ2VQcm92aWRlcic7XG5pbXBvcnQgaGVhZGVyTWVudSBmcm9tICcuLi9tb2NrX2RhdGEvaGVhZGVyTWVudSc7XG5cblxuY29uc3QgU2lkZU1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc1NpZGVNZW51T3BlbmVkLCBvbkNsb3NlIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGxhbmcgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aXRlbS50YXJnZXRDbGFzc31gKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeU9mZnNldCA9IDQwO1xuICAgIGNvbnN0IHkgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCArIHlPZmZzZXQ7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogeSxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZS1tZW51ICR7aXNTaWRlTWVudU9wZW5lZCA/ICdpcy1hY3RpdmUnIDogJyd9YH0gZGF0YS1hb3M+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlXCIgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0IG92ZXJmbG93LWhpZGRlbiBmbGV4LW5vd3JhcCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhlYWRlck1lbnUubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWVudS1pdGVtXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlW2xhbmddfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5hdmlnYXRpb24oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIC0ge2l0ZW0udGl0bGVbbGFuZ119XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNvY2lhbE1lZGlhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaWRlTWVudS5wcm9wVHlwZXMgPSB7XG4gIGlzU2lkZU1lbnVPcGVuZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SideMenu.js\n");

/***/ })

})