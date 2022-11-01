/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/en",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-messenger-customer-chat */ \"./node_modules/react-messenger-customer-chat/lib/index.js\");\n/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loading */ \"./src/components/Loading.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _LeftSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LeftSidebar */ \"./src/components/LeftSidebar.js\");\n/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RightSidebar */ \"./src/components/RightSidebar.js\");\n/* harmony import */ var _StructuredData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StructuredData */ \"./src/components/StructuredData.js\");\n/* harmony import */ var _mock_data_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mock_data/schema */ \"./src/mock_data/schema.js\");\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* harmony import */ var _translation_metadata__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../translation/metadata */ \"./src/translation/metadata.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"vendors-node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\")];\n    },\n    modules: [\"../components/Layout.js -> \" + 'react-animated-cursor']\n  }\n});\n_c2 = AnimatedCursor;\nvar PAGE_ID = '100880255010666';\nvar APP_ID = '1085827348477578';\nvar DOMAIN = 'https://theotherleaf.com';\n\nvar getMessengerCustomerChatLanguage = function getMessengerCustomerChatLanguage(lang) {\n  switch (lang) {\n    case 'en':\n      return 'en_US';\n\n    default:\n      return 'zh_TW';\n  }\n};\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var title = props.title,\n      currentEndpoint = props.currentEndpoint,\n      children = props.children;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_13__.LanguageContext),\n      lang = _useContext.lang;\n\n  var messengerCustomerChatLanguage = getMessengerCustomerChatLanguage(lang);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isLoaded = _useState[0],\n      setIsLoaded = _useState[1];\n\n  var handleLoaded = function handleLoaded() {\n    setIsLoaded(true);\n  };\n\n  var calculateViewHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener('resize', calculateViewHeight);\n    return window.removeEventListener('resize', calculateViewHeight);\n  }, [calculateViewHeight]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (isLoaded) {\n      aos__WEBPACK_IMPORTED_MODULE_5___default().init({\n        once: true,\n        duration: 600,\n        easing: 'ease-in'\n      });\n    }\n  }, [isLoaded]);\n  var metadata = _translation_metadata__WEBPACK_IMPORTED_MODULE_14__.METADATA[lang];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: metadata.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"generator\",\n        content: metadata.generator\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"keywords\",\n        content: metadata.keywords\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:type\",\n        content: metadata.og.type\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:site_name\",\n        content: metadata.og.site_name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:url\",\n        content: metadata.og.url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: metadata.og.image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: metadata.og.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:description\",\n        content: metadata.og.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"fb:app_id\",\n        content: APP_ID\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"facebook-domain-verification\",\n        content: \"1jxbv7nvo2z7vudm1dnk5082z05rwd\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:card\",\n        content: metadata.twitter.card\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:image\",\n        content: metadata.twitter.image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:title\",\n        content: metadata.twitter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:description\",\n        content: metadata.twitter.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"google-site-verification\",\n        content: \"cYQcN-32sCC7IjcAN1sY629gABtpmSHdydhl2mwpY3w\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"alternate\",\n        hrefLang: \"en\",\n        href: \"\".concat(DOMAIN, \"/en\").concat(currentEndpoint)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"alternate\",\n        hrefLang: \"x-default\",\n        href: \"\".concat(DOMAIN).concat(currentEndpoint)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_6__.default, {\n      isLoaded: isLoaded,\n      onLoaded: handleLoaded\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"layout \".concat(isLoaded ? 'opacity-1' : 'opacity-0'),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeftSidebar__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RightSidebar__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2___default()), {\n        title: \"messenger\",\n        pageId: PAGE_ID,\n        appId: APP_ID,\n        language: messengerCustomerChatLanguage,\n        themeColor: \"#31535D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n        color: \"98, 169, 185\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StructuredData__WEBPACK_IMPORTED_MODULE_11__.default, {\n        item: _mock_data_schema__WEBPACK_IMPORTED_MODULE_12__.ORGANIZATION_SCHEMA\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"QxMSTCL/ytAUruoeOGbZhlnhXL4=\");\n\n_c3 = Layout;\nLayout.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),\n  currentEndpoint: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().node.isRequired)\n};\nLayout.defaultProps = {\n  title: 'The Other Leaf | Art & Web Creative',\n  currentEndpoint: '/'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"AnimatedCursor$dynamic\");\n$RefreshReg$(_c2, \"AnimatedCursor\");\n$RefreshReg$(_c3, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzP2VlODgiXSwibmFtZXMiOlsiQW5pbWF0ZWRDdXJzb3IiLCJkeW5hbWljIiwic3NyIiwiUEFHRV9JRCIsIkFQUF9JRCIsIkRPTUFJTiIsImdldE1lc3NlbmdlckN1c3RvbWVyQ2hhdExhbmd1YWdlIiwibGFuZyIsIkxheW91dCIsInByb3BzIiwidGl0bGUiLCJjdXJyZW50RW5kcG9pbnQiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJMYW5ndWFnZUNvbnRleHQiLCJtZXNzZW5nZXJDdXN0b21lckNoYXRMYW5ndWFnZSIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImhhbmRsZUxvYWRlZCIsImNhbGN1bGF0ZVZpZXdIZWlnaHQiLCJ1c2VDYWxsYmFjayIsInZoIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFPUyIsIm9uY2UiLCJkdXJhdGlvbiIsImVhc2luZyIsIm1ldGFkYXRhIiwiTUVUQURBVEEiLCJkZXNjcmlwdGlvbiIsImdlbmVyYXRvciIsImtleXdvcmRzIiwib2ciLCJ0eXBlIiwic2l0ZV9uYW1lIiwidXJsIiwiaW1hZ2UiLCJ0d2l0dGVyIiwiY2FyZCIsIk9SR0FOSVpBVElPTl9TQ0hFTUEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGNBQWMsR0FBR0MsbURBQU8sTUFBQztBQUFB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QUtFLGtCQUFVLEVBQUM7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFhRSw4REFBQyxjQUFEO0FBQ0UsYUFBSyxFQUFDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBZ0JFLDhEQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFFaUMsbUVBQW1CQTtBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRjtBQUFBLGtCQURGO0FBOENELENBbkZEOztHQUFNeEMsTTs7TUFBQUEsTTtBQXFGTkEsTUFBTSxDQUFDeUMsU0FBUCxHQUFtQjtBQUNqQnZDLE9BQUssRUFBRXdDLDJEQURVO0FBRWpCdkMsaUJBQWUsRUFBRXVDLDJEQUZBO0FBR2pCdEMsVUFBUSxFQUFFc0Msb0VBQXlCQztBQUhsQixDQUFuQjtBQU1BM0MsTUFBTSxDQUFDNEMsWUFBUCxHQUFzQjtBQUNwQjFDLE9BQUssRUFBRSxxQ0FEYTtBQUVwQkMsaUJBQWUsRUFBRTtBQUZHLENBQXRCO0FBS0EsK0RBQWVILE1BQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tICdyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBMZWZ0U2lkZWJhciBmcm9tICcuL0xlZnRTaWRlYmFyJztcbmltcG9ydCBSaWdodFNpZGViYXIgZnJvbSAnLi9SaWdodFNpZGViYXInO1xuaW1wb3J0IFN0cnVjdHVyZWREYXRhIGZyb20gJy4vU3RydWN0dXJlZERhdGEnO1xuaW1wb3J0IHsgT1JHQU5JWkFUSU9OX1NDSEVNQSB9IGZyb20gJy4uL21vY2tfZGF0YS9zY2hlbWEnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9MYW5ndWFnZVByb3ZpZGVyJztcbmltcG9ydCB7IE1FVEFEQVRBIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24vbWV0YWRhdGEnO1xuXG5cbmNvbnN0IEFuaW1hdGVkQ3Vyc29yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFuaW1hdGVkLWN1cnNvcicpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgUEFHRV9JRCA9ICcxMDA4ODAyNTUwMTA2NjYnO1xuY29uc3QgQVBQX0lEID0gJzEwODU4MjczNDg0Nzc1NzgnO1xuY29uc3QgRE9NQUlOID0gJ2h0dHBzOi8vdGhlb3RoZXJsZWFmLmNvbSc7XG5cbmNvbnN0IGdldE1lc3NlbmdlckN1c3RvbWVyQ2hhdExhbmd1YWdlID0gKGxhbmcpID0+IHtcbiAgc3dpdGNoIChsYW5nKSB7XG4gICAgY2FzZSAnZW4nOlxuICAgICAgcmV0dXJuICdlbl9VUyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnemhfVFcnO1xuICB9XG59O1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY3VycmVudEVuZHBvaW50LCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFuZyB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gIGNvbnN0IG1lc3NlbmdlckN1c3RvbWVyQ2hhdExhbmd1YWdlID0gZ2V0TWVzc2VuZ2VyQ3VzdG9tZXJDaGF0TGFuZ3VhZ2UobGFuZyk7XG5cbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTG9hZGVkID0gKCkgPT4ge1xuICAgIHNldElzTG9hZGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVZpZXdIZWlnaHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYWxjdWxhdGVWaWV3SGVpZ2h0KTtcblxuICAgIHJldHVybiAoXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2FsY3VsYXRlVmlld0hlaWdodClcbiAgICApO1xuICB9LCBbY2FsY3VsYXRlVmlld0hlaWdodF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTG9hZGVkKSB7XG4gICAgICBBT1MuaW5pdCh7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4nLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaXNMb2FkZWRdKTtcblxuICBjb25zdCBtZXRhZGF0YSA9IE1FVEFEQVRBW2xhbmddO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZ2VuZXJhdG9yXCIgY29udGVudD17bWV0YWRhdGEuZ2VuZXJhdG9yfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXttZXRhZGF0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17bWV0YWRhdGEub2cudHlwZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXttZXRhZGF0YS5vZy5zaXRlX25hbWV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17bWV0YWRhdGEub2cudXJsfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YWRhdGEub2cuaW1hZ2V9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhZGF0YS5vZy50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFkYXRhLm9nLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9e0FQUF9JRH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImZhY2Vib29rLWRvbWFpbi12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiMWp4YnY3bnZvMno3dnVkbTFkbms1MDgyejA1cndkXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9e21ldGFkYXRhLnR3aXR0ZXIuY2FyZH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhZGF0YS50d2l0dGVyLmltYWdlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e21ldGFkYXRhLnR3aXR0ZXIudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YWRhdGEudHdpdHRlci5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCJjWVFjTi0zMnNDQzdJamNBTjFzWTYyOWdBQnRwbVNIZHlkaGwybXdwWTN3XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlblwiIGhyZWY9e2Ake0RPTUFJTn0vZW4ke2N1cnJlbnRFbmRwb2ludH1gfSAvPlxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cIngtZGVmYXVsdFwiIGhyZWY9e2Ake0RPTUFJTn0ke2N1cnJlbnRFbmRwb2ludH1gfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExvYWRpbmcgaXNMb2FkZWQ9e2lzTG9hZGVkfSBvbkxvYWRlZD17aGFuZGxlTG9hZGVkfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BsYXlvdXQgJHtpc0xvYWRlZCA/ICdvcGFjaXR5LTEnIDogJ29wYWNpdHktMCd9YH0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPExlZnRTaWRlYmFyIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFJpZ2h0U2lkZWJhciAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxNZXNzZW5nZXJDdXN0b21lckNoYXRcbiAgICAgICAgICB0aXRsZT1cIm1lc3NlbmdlclwiXG4gICAgICAgICAgcGFnZUlkPXtQQUdFX0lEfVxuICAgICAgICAgIGFwcElkPXtBUFBfSUR9XG4gICAgICAgICAgbGFuZ3VhZ2U9e21lc3NlbmdlckN1c3RvbWVyQ2hhdExhbmd1YWdlfVxuICAgICAgICAgIHRoZW1lQ29sb3I9XCIjMzE1MzVEXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCI5OCwgMTY5LCAxODVcIlxuICAgICAgICAvPlxuICAgICAgICA8U3RydWN0dXJlZERhdGFcbiAgICAgICAgICBpdGVtPXtPUkdBTklaQVRJT05fU0NIRU1BfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3VycmVudEVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnVGhlIE90aGVyIExlYWYgfCBBcnQgJiBXZWIgQ3JlYXRpdmUnLFxuICBjdXJyZW50RW5kcG9pbnQ6ICcvJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ })

});