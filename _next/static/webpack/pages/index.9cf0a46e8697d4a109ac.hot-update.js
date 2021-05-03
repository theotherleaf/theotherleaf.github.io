/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideMenu */ \"./src/components/SideMenu.js\");\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock_data/headerMenu */ \"./src/mock_data/headerMenu.js\");\n/* harmony import */ var _public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/images/theotherleaf.svg */ \"./public/static/images/theotherleaf.svg\");\n/* harmony import */ var _public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__.LanguageContext),\n      lang = _useContext.lang;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isTop = _useState[0],\n      setIsTop = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isSideMenuOpened = _useState2[0],\n      setIsSideMenuOpened = _useState2[1];\n\n  var handleClose = function handleClose() {\n    setIsSideMenuOpened(false);\n  };\n\n  var handleNavigation = function handleNavigation(item) {\n    var element = document.querySelector(\".\".concat(item.targetClass));\n\n    if (!element) {\n      return;\n    }\n\n    var yOffset = -60;\n    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;\n    window.scrollTo({\n      top: y,\n      behavior: 'smooth'\n    });\n  };\n\n  var checkIsTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    setIsTop(window.pageYOffset <= 0);\n  }, [setIsTop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener('scroll', checkIsTop);\n    return function () {\n      window.removeEventListener('scroll', checkIsTop);\n    };\n  }, [checkIsTop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n    className: isTop ? 'is-top' : '',\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__.default, {\n      fluid: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default, {\n        className: \"justify-content-between align-items-center\",\n        expanded: isSideMenuOpened,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default.Brand, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: (_public_static_images_theotherleaf_svg__WEBPACK_IMPORTED_MODULE_5___default()),\n            alt: \"The Other Leaf\",\n            className: \"img-fluid\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__.default, {\n          className: \"d-none d-md-flex ml-auto\",\n          children: _mock_data_headerMenu__WEBPACK_IMPORTED_MODULE_4__.default.map(function (item) {\n            var _item$title, _item$title2;\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__.default.Link, {\n              href: item.url,\n              title: (_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title[lang],\n              onClick: function onClick() {\n                return handleNavigation(item);\n              },\n              children: (_item$title2 = item.title) === null || _item$title2 === void 0 ? void 0 : _item$title2[lang]\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"language-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__.default.Link, {\n            href: \"/\",\n            title: \"\\u4E2D\",\n            className: lang === 'zh-Hant' ? 'is-active' : '',\n            children: \"\\u4E2D\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__.default.Link, {\n            href: \"/en\",\n            title: \"En\",\n            className: lang === 'en' ? 'is-active' : '',\n            children: \"En\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default.Toggle, {\n          \"aria-controls\": \"responsive-navbar-nav\",\n          className: \"d-block d-md-none\",\n          onClick: function onClick() {\n            setIsSideMenuOpened(!isSideMenuOpened);\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"navbar__hamburger position-relative d-block\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"navbar-toggler-icon position-absolute\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideMenu__WEBPACK_IMPORTED_MODULE_2__.default, {\n        isSideMenuOpened: isSideMenuOpened,\n        onClose: handleClose\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"g2iMYlS7thl+JKQmfSYuSK3XTQk=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzP2FkOGUiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmciLCJ1c2VTdGF0ZSIsImlzVG9wIiwic2V0SXNUb3AiLCJpc1NpZGVNZW51T3BlbmVkIiwic2V0SXNTaWRlTWVudU9wZW5lZCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlTmF2aWdhdGlvbiIsIml0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0Q2xhc3MiLCJ5T2Zmc2V0IiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNoZWNrSXNUb3AiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9nb0ltZyIsImhlYWRlck1lbnUiLCJ1cmwiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyxpREFBVSxDQUFDQyxzRUFBRCxDQURSO0FBQUEsTUFDWEMsSUFEVyxlQUNYQSxJQURXOztBQUFBLGtCQUdPQywrQ0FBUSxDQUFDLElBQUQsQ0FIZjtBQUFBLE1BR1pDLEtBSFk7QUFBQSxNQUdMQyxRQUhLOztBQUFBLG1CQUk2QkYsK0NBQVEsQ0FBQyxLQUFELENBSnJDO0FBQUEsTUFJWkcsZ0JBSlk7QUFBQSxNQUlNQyxtQkFKTjs7QUFNbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsdUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNELEdBRkQ7O0FB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dUJBRGhCO0FBRUUsbUJBQVMsRUFBQyxtQkFGWjtBQUdFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkssK0JBQW1CLENBQUMsQ0FBQ0QsZ0JBQUYsQ0FBbkI7QUFDRCxXQUxIO0FBQUEsaUNBT0U7QUFBTSxxQkFBUyxFQUFDLDZDQUFoQjtBQUFBLG1DQUNFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBMENFLDhEQUFDLDhDQUFEO0FBQVUsd0JBQWdCLEVBQUVBLGdCQUE1QjtBQUE4QyxlQUFPLEVBQUVFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBbkZEOztHQUFNVCxNOztLQUFBQSxNO0FBcUZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXNlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuL1NpZGVNZW51JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvTGFuZ3VhZ2VQcm92aWRlcic7XG5pbXBvcnQgaGVhZGVyTWVudSBmcm9tICcuLi9tb2NrX2RhdGEvaGVhZGVyTWVudSc7XG5pbXBvcnQgbG9nb0ltZyBmcm9tICcuLi8uLi9wdWJsaWMvc3RhdGljL2ltYWdlcy90aGVvdGhlcmxlYWYuc3ZnJztcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbGFuZyB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc1NpZGVNZW51T3BlbmVkLCBzZXRJc1NpZGVNZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRJc1NpZGVNZW51T3BlbmVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aXRlbS50YXJnZXRDbGFzc31gKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeU9mZnNldCA9IC02MDtcbiAgICBjb25zdCB5ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgKyB5T2Zmc2V0O1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IHksXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJc1RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc1RvcCh3aW5kb3cucGFnZVlPZmZzZXQgPD0gMCk7XG4gIH0sIFtzZXRJc1RvcF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrSXNUb3ApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja0lzVG9wKTtcbiAgICB9O1xuICB9LCBbY2hlY2tJc1RvcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2lzVG9wID8gJ2lzLXRvcCcgOiAnJ30+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfT5cbiAgICAgICAgPE5hdmJhclxuICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgZXhwYW5kZWQ9e2lzU2lkZU1lbnVPcGVuZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29JbWd9IGFsdD1cIlRoZSBPdGhlciBMZWFmXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWZsZXggbWwtYXV0b1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoZWFkZXJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXYuTGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZT8uW2xhbmddfVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGlvbihpdGVtKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZT8uW2xhbmddfVxuICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZS1pdGVtXCI+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiB0aXRsZT1cIuS4rVwiIGNsYXNzTmFtZT17bGFuZyA9PT0gJ3poLUhhbnQnID8gJ2lzLWFjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICAgIOS4rVxuICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2VuXCIgdGl0bGU9XCJFblwiIGNsYXNzTmFtZT17bGFuZyA9PT0gJ2VuJyA/ICdpcy1hY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgICBFblxuICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZVxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtbm9uZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzU2lkZU1lbnVPcGVuZWQoIWlzU2lkZU1lbnVPcGVuZWQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXJfX2hhbWJ1cmdlciBwb3NpdGlvbi1yZWxhdGl2ZSBkLWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb24gcG9zaXRpb24tYWJzb2x1dGVcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTmF2YmFyLlRvZ2dsZT5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDxTaWRlTWVudSBpc1NpZGVNZW51T3BlbmVkPXtpc1NpZGVNZW51T3BlbmVkfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ })

});