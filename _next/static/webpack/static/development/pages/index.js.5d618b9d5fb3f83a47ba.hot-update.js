webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-messenger-customer-chat */ \"./node_modules/react-messenger-customer-chat/lib/index.js\");\n/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ \"./components/Loading.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* harmony import */ var _LeftSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LeftSidebar */ \"./components/LeftSidebar.js\");\n/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RightSidebar */ \"./components/RightSidebar.js\");\n/* harmony import */ var _StructuredData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StructuredData */ \"./components/StructuredData.js\");\n/* harmony import */ var _mock_data_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mock_data/schema */ \"./mock_data/schema.js\");\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./context/LanguageProvider.js\");\n/* harmony import */ var _translation_metadata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../translation/metadata */ \"./translation/metadata.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PAGE_ID = '100880255010666';\nvar APP_ID = '1085827348477578';\nvar DOMAIN = 'https://theotherleaf.com';\n\nvar getMessengerCustomerChatLanguage = function getMessengerCustomerChatLanguage(lang) {\n  switch (lang) {\n    case 'en':\n      return 'en_US';\n\n    default:\n      return 'zh_TW';\n  }\n};\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var title = props.title,\n      currentEndpoint = props.currentEndpoint,\n      children = props.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_12__[\"LanguageContext\"]),\n      lang = _useContext.lang;\n\n  var messengerCustomerChatLanguage = getMessengerCustomerChatLanguage(lang);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isLoaded = _useState[0],\n      setIsLoaded = _useState[1];\n\n  var handleLoaded = function handleLoaded() {\n    setIsLoaded(true);\n  };\n\n  var calculateViewHeight = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    var vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('resize', calculateViewHeight);\n    return window.removeEventListener('resize', calculateViewHeight);\n  }, [calculateViewHeight]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isLoaded) {\n      aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({\n        once: true,\n        duration: 600\n      });\n    }\n  }, [isLoaded]);\n  var metadata = _translation_metadata__WEBPACK_IMPORTED_MODULE_13__[\"METADATA\"][lang];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    name: \"description\",\n    content: metadata.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"generator\",\n    content: metadata.generator,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: metadata.keywords,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: metadata.og.type,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: metadata.og.site_name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:url\",\n    content: metadata.og.url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: metadata.og.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: metadata.og.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: metadata.og.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"fb:app_id\",\n    content: APP_ID,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: metadata.twitter.card,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:image\",\n    content: metadata.twitter.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:title\",\n    content: metadata.twitter.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:description\",\n    content: metadata.twitter.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"google-site-verification\",\n    content: \"cYQcN-32sCC7IjcAN1sY629gABtpmSHdydhl2mwpY3w\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"alternate\",\n    hrefLang: \"en\",\n    href: \"\".concat(DOMAIN, \"/en\").concat(currentEndpoint),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"alternate\",\n    hrefLang: \"x-default\",\n    href: \"\".concat(DOMAIN).concat(currentEndpoint),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  })), __jsx(_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isLoaded: isLoaded,\n    onLoaded: handleLoaded,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"layout \".concat(isLoaded ? 'opacity-1' : 'opacity-0'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }), __jsx(_LeftSidebar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), children, __jsx(_RightSidebar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }), __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    pageId: PAGE_ID,\n    appId: APP_ID,\n    language: messengerCustomerChatLanguage,\n    themeColor: \"#31535D\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }), __jsx(_StructuredData__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: _mock_data_schema__WEBPACK_IMPORTED_MODULE_11__[\"ORGANIZATION_SCHEMA\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Layout, \"QxMSTCL/ytAUruoeOGbZhlnhXL4=\");\n\n_c = Layout;\nLayout.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n  currentEndpoint: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired\n};\nLayout.defaultProps = {\n  title: 'The Other Leaf | Art & Web Creative',\n  currentEndpoint: '/'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIlBBR0VfSUQiLCJBUFBfSUQiLCJET01BSU4iLCJnZXRNZXNzZW5nZXJDdXN0b21lckNoYXRMYW5ndWFnZSIsImxhbmciLCJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIiwiY3VycmVudEVuZHBvaW50IiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibWVzc2VuZ2VyQ3VzdG9tZXJDaGF0TGFuZ3VhZ2UiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJoYW5kbGVMb2FkZWQiLCJjYWxjdWxhdGVWaWV3SGVpZ2h0IiwidXNlQ2FsbGJhY2siLCJ2aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBT1MiLCJpbml0Iiwib25jZSIsImR1cmF0aW9uIiwibWV0YWRhdGEiLCJNRVRBREFUQSIsImRlc2NyaXB0aW9uIiwiZ2VuZXJhdG9yIiwia2V5d29yZHMiLCJvZyIsInR5cGUiLCJzaXRlX25hbWUiLCJ1cmwiLCJpbWFnZSIsInR3aXR0ZXIiLCJjYXJkIiwiT1JHQU5JWkFUSU9OX1NDSEVNQSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsaUJBQWhCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLGtCQUFmO0FBQ0EsSUFBTUMsTUFBTSxHQUFH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SyxFQUFFQyxNQUZUO0FBR0UsWUFBUSxFQUFFVyw2QkFIWjtBQUlFLGNBQVUsRUFBQyxTQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVlFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUVpQyxzRUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0F0QkYsQ0FERjtBQXlDRCxDQTdFRDs7R0FBTXhDLE07O0tBQUFBLE07QUErRU5BLE1BQU0sQ0FBQ3lDLFNBQVAsR0FBbUI7QUFDakJ2QyxPQUFLLEVBQUV3QyxpREFBUyxDQUFDQyxNQURBO0FBRWpCeEMsaUJBQWUsRUFBRXVDLGlEQUFTLENBQUNDLE1BRlY7QUFHakJ2QyxVQUFRLEVBQUVzQyxpREFBUyxDQUFDRSxJQUFWLENBQWVDO0FBSFIsQ0FBbkI7QUFNQTdDLE1BQU0sQ0FBQzhDLFlBQVAsR0FBc0I7QUFDcEI1QyxPQUFLLEVBQUUscUNBRGE7QUFFcEJDLGlCQUFlLEVBQUU7QUFGRyxDQUF0QjtBQUtlSCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZXNzZW5nZXJDdXN0b21lckNoYXQgZnJvbSAncmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBMZWZ0U2lkZWJhciBmcm9tICcuL0xlZnRTaWRlYmFyJztcbmltcG9ydCBSaWdodFNpZGViYXIgZnJvbSAnLi9SaWdodFNpZGViYXInO1xuaW1wb3J0IFN0cnVjdHVyZWREYXRhIGZyb20gJy4vU3RydWN0dXJlZERhdGEnO1xuaW1wb3J0IHsgT1JHQU5JWkFUSU9OX1NDSEVNQSB9IGZyb20gJy4uL21vY2tfZGF0YS9zY2hlbWEnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9MYW5ndWFnZVByb3ZpZGVyJztcbmltcG9ydCB7IE1FVEFEQVRBIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24vbWV0YWRhdGEnO1xuXG5jb25zdCBQQUdFX0lEID0gJzEwMDg4MDI1NTAxMDY2Nic7XG5jb25zdCBBUFBfSUQgPSAnMTA4NTgyNzM0ODQ3NzU3OCc7XG5jb25zdCBET01BSU4gPSAnaHR0cHM6Ly90aGVvdGhlcmxlYWYuY29tJztcblxuY29uc3QgZ2V0TWVzc2VuZ2VyQ3VzdG9tZXJDaGF0TGFuZ3VhZ2UgPSAobGFuZykgPT4ge1xuICBzd2l0Y2ggKGxhbmcpIHtcbiAgICBjYXNlICdlbic6XG4gICAgICByZXR1cm4gJ2VuX1VTJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICd6aF9UVyc7XG4gIH1cbn07XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBjdXJyZW50RW5kcG9pbnQsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYW5nIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG5cbiAgY29uc3QgbWVzc2VuZ2VyQ3VzdG9tZXJDaGF0TGFuZ3VhZ2UgPSBnZXRNZXNzZW5nZXJDdXN0b21lckNoYXRMYW5ndWFnZShsYW5nKTtcblxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVMb2FkZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlVmlld0hlaWdodCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNhbGN1bGF0ZVZpZXdIZWlnaHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYWxjdWxhdGVWaWV3SGVpZ2h0KVxuICAgICk7XG4gIH0sIFtjYWxjdWxhdGVWaWV3SGVpZ2h0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNMb2FkZWQpIHtcbiAgICAgIEFPUy5pbml0KHtcbiAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDYwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgY29uc3QgbWV0YWRhdGEgPSBNRVRBREFUQVtsYW5nXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhZGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImdlbmVyYXRvclwiIGNvbnRlbnQ9e21ldGFkYXRhLmdlbmVyYXRvcn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17bWV0YWRhdGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e21ldGFkYXRhLm9nLnR5cGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17bWV0YWRhdGEub2cuc2l0ZV9uYW1lfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e21ldGFkYXRhLm9nLnVybH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e21ldGFkYXRhLm9nLmltYWdlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17bWV0YWRhdGEub2cudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhZGF0YS5vZy5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiBjb250ZW50PXtBUFBfSUR9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PXttZXRhZGF0YS50d2l0dGVyLmNhcmR9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17bWV0YWRhdGEudHdpdHRlci5pbWFnZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXttZXRhZGF0YS50d2l0dGVyLnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFkYXRhLnR3aXR0ZXIuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiY1lRY04tMzJzQ0M3SWpjQU4xc1k2MjlnQUJ0cG1TSGR5ZGhsMm13cFkzd1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW5cIiBocmVmPXtgJHtET01BSU59L2VuJHtjdXJyZW50RW5kcG9pbnR9YH0gLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIiBocmVmPXtgJHtET01BSU59JHtjdXJyZW50RW5kcG9pbnR9YH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMb2FkaW5nIGlzTG9hZGVkPXtpc0xvYWRlZH0gb25Mb2FkZWQ9e2hhbmRsZUxvYWRlZH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGF5b3V0ICR7aXNMb2FkZWQgPyAnb3BhY2l0eS0xJyA6ICdvcGFjaXR5LTAnfWB9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxMZWZ0U2lkZWJhciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxSaWdodFNpZGViYXIgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8TWVzc2VuZ2VyQ3VzdG9tZXJDaGF0XG4gICAgICAgICAgcGFnZUlkPXtQQUdFX0lEfVxuICAgICAgICAgIGFwcElkPXtBUFBfSUR9XG4gICAgICAgICAgbGFuZ3VhZ2U9e21lc3NlbmdlckN1c3RvbWVyQ2hhdExhbmd1YWdlfVxuICAgICAgICAgIHRoZW1lQ29sb3I9XCIjMzE1MzVEXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN0cnVjdHVyZWREYXRhXG4gICAgICAgICAgaXRlbT17T1JHQU5JWkFUSU9OX1NDSEVNQX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGN1cnJlbnRFbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ1RoZSBPdGhlciBMZWFmIHwgQXJ0ICYgV2ViIENyZWF0aXZlJyxcbiAgY3VycmVudEVuZHBvaW50OiAnLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})