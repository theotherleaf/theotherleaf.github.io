/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LanguageProvider */ \"./src/context/LanguageProvider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sunsquarez/Desktop/projects/theotherleaf-react/src/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Project = function Project(props) {\n  _s();\n\n  var webpImage = props.webpImage,\n      image = props.image,\n      title = props.title,\n      message = props.message,\n      category = props.category,\n      url = props.url,\n      date = props.date,\n      workers = props.workers,\n      contributions = props.contributions;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LanguageProvider__WEBPACK_IMPORTED_MODULE_4__.LanguageContext),\n      lang = _useContext.lang;\n\n  var renderProjectPreview = function renderProjectPreview() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"project__preview\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_ga__WEBPACK_IMPORTED_MODULE_2__.default.OutboundLink, {\n        eventLabel: title,\n        to: url,\n        title: title,\n        target: \"_blank\",\n        rel: \"noreferrer\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"project__preview--placeholder\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n              srcSet: webpImage,\n              type: \"image/webp\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n              srcSet: image,\n              type: \"image/jpeg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: \"project__image mw-100\",\n              src: image,\n              alt: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"project__preview--hover\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project__description\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              className: \"project__message\",\n              children: message\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderProjectInfo = function renderProjectInfo() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"project__info\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_ga__WEBPACK_IMPORTED_MODULE_2__.default.OutboundLink, {\n          eventLabel: title,\n          to: url,\n          title: title,\n          target: \"_blank\",\n          rel: \"noreferrer\",\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-creation\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"project-creation__type\",\n          children: category\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"project-creation__date\",\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderProjectBy = function renderProjectBy() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"project__by\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-worker\",\n        children: (workers || []).map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: item.icon,\n            alt: item.name,\n            title: item.name\n          }, item.name, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-tool\",\n        children: [\"\\b\", (contributions || []).map(function (item) {\n          var _item$area, _item$area2;\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"tag\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"tag__name\",\n              children: item === null || item === void 0 ? void 0 : (_item$area2 = item.area) === null || _item$area2 === void 0 ? void 0 : _item$area2[lang]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this)\n          }, item === null || item === void 0 ? void 0 : (_item$area = item.area) === null || _item$area === void 0 ? void 0 : _item$area[lang], false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"project\",\n    children: [renderProjectPreview(), renderProjectInfo(), renderProjectBy()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Project, \"nSY2ATGVw9EHMbEaSAY4QbenaJU=\");\n\n_c = Project;\nProject.propTypes = {\n  webpImage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  image: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  message: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  category: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  url: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  date: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),\n  workers: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),\n  contributions: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdC5qcz9mODZlIl0sIm5hbWVzIjpbIlByb2plY3QiLCJwcm9wcyIsIndlYnBJbWFnZSIsImltYWdlIiwidGl0bGUiLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJ1cmwiLCJkYXRlIiwid29ya2VycyIsImNvbnRyaWJ1dGlvbnMiLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZyIsInJlbmRlclByb2plY3RQcmV2aWV3IiwicmVuZGVyUHJvamVjdEluZm8iLCJyZW5kZXJQcm9qZWN0QnkiLCJtYXAiLCJpdGVtIiwiaWNvbiIsIm5hbWUiLCJhcmVhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BRXZCQyxTQUZ1QixHQVdyQkQsS0FYcUIsQ0FFdkJDLFNBRnVCO0FBQUEsTUFHdkJDLEtBSHVCLEdBV3JCRixLQVhxQixDQUd2QkUsS0FIdUI7QUFBQSxNQUl2QkMsS0FKdUIsR0FXckJILEtBWHFCLENBSXZCRyxLQUp1QjtBQUFBLE1BS3ZCQyxPQUx1QixHQVdyQkosS0FYcUIsQ0FLdkJJLE9BTHVCO0FBQUEsTUFNdkJDLFFBTnVCLEdBV3JCTCxLQVhxQixDQU12QkssUUFOdUI7QUFBQSxNQU92QkMsR0FQdUIsR0FXckJOLEtBWHFCLENBT3ZCTSxHQVB1QjtBQUFBLE1BUXZCQyxJQVJ1QixHQVdyQlAsS0FYcUIsQ0FRdkJPLElBUnVCO0FBQUEsTUFTdkJDLE9BVHVCLEdBV3JCUixLQVhxQixDQVN2QlEsT0FUdUI7QUFBQSxNQVV2QkMsYUFWdUIsR0FXckJULEtBWHFCLENBVXZCUyxhQVZ1Qjs7QUFBQSxvQkFhUkMsaURBQVUsQ0FBQ0Msc0VBQUQsQ0FiRjtBQUFB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b3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0xhbmd1YWdlUHJvdmlkZXInO1xuXG5cbmNvbnN0IFByb2plY3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdlYnBJbWFnZSxcbiAgICBpbWFnZSxcbiAgICB0aXRsZSxcbiAgICBtZXNzYWdlLFxuICAgIGNhdGVnb3J5LFxuICAgIHVybCxcbiAgICBkYXRlLFxuICAgIHdvcmtlcnMsXG4gICAgY29udHJpYnV0aW9ucyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgbGFuZyB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RQcmV2aWV3ID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF9fcHJldmlld1wiPlxuICAgICAgPFJlYWN0R0EuT3V0Ym91bmRMaW5rXG4gICAgICAgIGV2ZW50TGFiZWw9e3RpdGxlfVxuICAgICAgICB0bz17dXJsfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfX3ByZXZpZXctLXBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICA8c291cmNlIHNyY1NldD17d2VicEltYWdlfSB0eXBlPVwiaW1hZ2Uvd2VicFwiIC8+XG4gICAgICAgICAgICA8c291cmNlIHNyY1NldD17aW1hZ2V9IHR5cGU9XCJpbWFnZS9qcGVnXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdF9faW1hZ2UgbXctMTAwXCIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfX3ByZXZpZXctLWhvdmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3RfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3RHQS5PdXRib3VuZExpbms+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdEluZm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X19pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGVcIj5cbiAgICAgICAgPFJlYWN0R0EuT3V0Ym91bmRMaW5rXG4gICAgICAgICAgZXZlbnRMYWJlbD17dGl0bGV9XG4gICAgICAgICAgdG89e3VybH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9SZWFjdEdBLk91dGJvdW5kTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNyZWF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jcmVhdGlvbl9fdHlwZVwiPlxuICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jcmVhdGlvbl9fZGF0ZVwiPlxuICAgICAgICAgIHtkYXRlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RCeSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfX2J5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtd29ya2VyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICAod29ya2VycyB8fCBbXSkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRvb2xcIj5cbiAgICAgICAgXGJ7XG4gICAgICAgICAgKGNvbnRyaWJ1dGlvbnMgfHwgW10pLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIiBrZXk9e2l0ZW0/LmFyZWE/LltsYW5nXX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ19fbmFtZVwiPlxuICAgICAgICAgICAgICAgIHtpdGVtPy5hcmVhPy5bbGFuZ119XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICB7cmVuZGVyUHJvamVjdFByZXZpZXcoKX1cbiAgICAgIHtyZW5kZXJQcm9qZWN0SW5mbygpfVxuICAgICAge3JlbmRlclByb2plY3RCeSgpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvamVjdC5wcm9wVHlwZXMgPSB7XG4gIHdlYnBJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdvcmtlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb250cmlidXRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Project.js\n");

/***/ })

});