/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/en",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideMenu */ \"./src/components/SideMenu.js\");\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock_data/headerMenu */ \"./src/mock_data/headerMenu.js\");\n/* harmony import */ var _public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/images/theotherleaf.svg */ \"./public/static/images/theotherleaf.svg\");\n/* harmony import */ var _public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__.LanguageContext),\n      lang = _useContext.lang;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isTop = _useState[0],\n      setIsTop = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isSideMenuOpened = _useState2[0],\n      setIsSideMenuOpened = _useState2[1];\n\n  var handleClose = function handleClose() {\n    setIsSideMenuOpened(false);\n  };\n\n  var handleNavigation = function handleNavigation(item) {\n    var element = document.querySelector(\".\".concat(item.targetClass));\n\n    if (!element) {\n      return;\n    }\n\n    var yOffset = -60;\n    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;\n    window.scrollTo({\n      top: y,\n      behavior: 'smooth'\n    });\n  };\n\n  var checkIsTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    setIsTop(window.pageYOffset <= 0);\n  }, [setIsTop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener('scroll', checkIsTop);\n    return function () {\n      window.removeEventListener('scroll', checkIsTop);\n    };\n  }, [checkIsTop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n    className: isTop ? 'is-top' : '',\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__.default, {\n      fluid: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n        className: \"justify-content-between align-items-center\",\n        expanded: isSideMenuOpened,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Brand, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: (_public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_6___default()),\n            alt: \"The Other Leaf\",\n            className: \"img-fluid\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          className: \"d-none d-lg-flex ml-auto\",\n          children: _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_5__.default.map(function (item) {\n            var _item$title, _item$title2, _item$title3, _item$title4, _item$title5;\n\n            return item.url ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_ga__WEBPACK_IMPORTED_MODULE_2__.default.OutboundLink, {\n              className: \"nav-link\",\n              eventLabel: (_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title[lang],\n              to: item.url,\n              title: (_item$title2 = item.title) === null || _item$title2 === void 0 ? void 0 : _item$title2[lang],\n              target: \"_blank\",\n              rel: \"noreferrer\",\n              children: (_item$title3 = item.title) === null || _item$title3 === void 0 ? void 0 : _item$title3[lang]\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 21\n            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__.default.Link, {\n              title: (_item$title4 = item.title) === null || _item$title4 === void 0 ? void 0 : _item$title4[lang],\n              onClick: function onClick() {\n                return handleNavigation(item);\n              },\n              children: (_item$title5 = item.title) === null || _item$title5 === void 0 ? void 0 : _item$title5[lang]\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"language-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__.default.Link, {\n            href: \"/\",\n            title: \"\\u4E2D\",\n            className: lang === 'zh-Hant' ? 'is-active' : '',\n            children: \"\\u4E2D\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__.default.Link, {\n            href: \"/en\",\n            title: \"En\",\n            className: lang === 'en' ? 'is-active' : '',\n            children: \"En\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Toggle, {\n          \"aria-controls\": \"responsive-navbar-nav\",\n          className: \"d-block d-lg-none\",\n          onClick: function onClick() {\n            setIsSideMenuOpened(!isSideMenuOpened);\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"navbar__hamburger position-relative d-block\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"navbar-toggler-icon position-absolute\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideMenu__WEBPACK_IMPORTED_MODULE_3__.default, {\n        isSideMenuOpened: isSideMenuOpened,\n        onClose: handleClose\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"g2iMYlS7thl+JKQmfSYuSK3XTQk=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzP2FkOGUiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmciLCJ1c2VTdGF0ZSIsImlzVG9wIiwic2V0SXNUb3AiLCJpc1NpZGVNZW51T3BlbmVkIiwic2V0SXNTaWRlTWVudU9wZW5lZCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlTmF2aWdhdGlvbiIsIml0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0Q2xhc3MiLCJ5T2Zmc2V0IiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNoZWNrSXNUb3AiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9nb0ltZyIsImhlYWRlck1lbnUiLCJ1cmwiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyxpREFBVSxDQUFDQyxzRUFBRCxDQURSO0FBQUEsTUFDWEMsSUFEVyxlQUNYQSxJQURXOztBQUFBLGtCQUdPQywrQ0FBUSxDQUFDLElBQUQsQ0FIZjtBQUFBLE1BR1pDLEtBSFk7QUFBQSxNQUdMQyxRQUhLOztBQUFBLG1CQUk2QkYsK0NBQVEsQ0FBQyxLQUFELENBSnJDO0FBQUEsTUFJWkcsZ0JBSlk7QUFBQSxNQUlNQyxtQkFKTjs7QUFNbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsdUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNELEdB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QUFtQixpQkFBSyxFQUFDLFFBQXpCO0FBQTZCLHFCQUFTLEVBQUU5QixJQUFJLEtBQUssU0FBVCxHQUFxQixXQUFyQixHQUFtQyxFQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLDhEQUFDLDZEQUFEO0FBQVUsZ0JBQUksRUFBQyxLQUFmO0FBQXFCLGlCQUFLLEVBQUMsSUFBM0I7QUFBZ0MscUJBQVMsRUFBRUEsSUFBSSxLQUFLLElBQVQsR0FBZ0IsV0FBaEIsR0FBOEIsRUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBDRixlQTRDRSw4REFBQyxrRUFBRDtBQUNFLDJCQUFjLHVCQURoQjtBQUVFLG1CQUFTLEVBQUMsbUJBRlo7QUFHRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2JLLCtCQUFtQixDQUFDLENBQUNELGdCQUFGLENBQW5CO0FBQ0QsV0FMSDtBQUFBLGlDQU9FO0FBQU0scUJBQVMsRUFBQyw2Q0FBaEI7QUFBQSxtQ0FDRTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXlERSw4REFBQyw4Q0FBRDtBQUFVLHdCQUFnQixFQUFFQSxnQkFBNUI7QUFBOEMsZUFBTyxFQUFFRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQWxHRDs7R0FBTVQsTTs7S0FBQUEsTTtBQW9HTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHVzZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi9TaWRlTWVudSc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0xhbmd1YWdlUHJvdmlkZXInO1xuaW1wb3J0IGhlYWRlck1lbnUgZnJvbSAnLi4vbW9ja19kYXRhL2hlYWRlck1lbnUnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvdGhlb3RoZXJsZWFmLnN2Zyc7XG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGxhbmcgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcblxuICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNTaWRlTWVudU9wZW5lZCwgc2V0SXNTaWRlTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0SXNTaWRlTWVudU9wZW5lZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW0udGFyZ2V0Q2xhc3N9YCk7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHlPZmZzZXQgPSAtNjA7XG4gICAgY29uc3QgeSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgeU9mZnNldDtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiB5LFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrSXNUb3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNUb3Aod2luZG93LnBhZ2VZT2Zmc2V0IDw9IDApO1xuICB9LCBbc2V0SXNUb3BdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja0lzVG9wKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tJc1RvcCk7XG4gICAgfTtcbiAgfSwgW2NoZWNrSXNUb3BdKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtpc1RvcCA/ICdpcy10b3AnIDogJyd9PlxuICAgICAgPENvbnRhaW5lciBmbHVpZD17dHJ1ZX0+XG4gICAgICAgIDxOYXZiYXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgIGV4cGFuZGVkPXtpc1NpZGVNZW51T3BlbmVkfVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvSW1nfSBhbHQ9XCJUaGUgT3RoZXIgTGVhZlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1mbGV4IG1sLWF1dG9cIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVhZGVyTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICBpdGVtLnVybFxuICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdEdBLk91dGJvdW5kTGlua1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBldmVudExhYmVsPXtpdGVtLnRpdGxlPy5bbGFuZ119XG4gICAgICAgICAgICAgICAgICAgICAgdG89e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlPy5bbGFuZ119XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZT8uW2xhbmddfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0R0EuT3V0Ym91bmRMaW5rPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlPy5bbGFuZ119XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZT8uW2xhbmddfVxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCLkuK1cIiBjbGFzc05hbWU9e2xhbmcgPT09ICd6aC1IYW50JyA/ICdpcy1hY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgICDkuK1cbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9lblwiIHRpdGxlPVwiRW5cIiBjbGFzc05hbWU9e2xhbmcgPT09ICdlbicgPyAnaXMtYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgICAgRW5cbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGVcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJc1NpZGVNZW51T3BlbmVkKCFpc1NpZGVNZW51T3BlbmVkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyX19oYW1idXJnZXIgcG9zaXRpb24tcmVsYXRpdmUgZC1ibG9ja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uIHBvc2l0aW9uLWFic29sdXRlXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L05hdmJhci5Ub2dnbGU+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8U2lkZU1lbnUgaXNTaWRlTWVudU9wZW5lZD17aXNTaWRlTWVudU9wZW5lZH0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ })

});