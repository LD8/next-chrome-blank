webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddOrEditModal.js":
/*!**************************************!*\
  !*** ./components/AddOrEditModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/AddOrEditModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddOrEditModal = function AddOrEditModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      href = _ref.href,\n      text = _ref.text,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(text || ''),\n      siteName = _useState[0],\n      setSiteName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(href || ''),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    };\n    var newData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getData\"])();\n\n    if (index !== undefined && index !== null) {\n      // 正在修改现有数据\n      console.log('正在修改现有数据');\n      newData.splice(index, 1, datum);\n      console.log(newData);\n    } else {\n      // 正在添加新数据\n      console.log('正在添加新数据');\n      newData.push(datum);\n      setSiteName('');\n      setUrl('');\n    }\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"setData\"])(newData);\n    console.log('getData: ', Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getData\"])());\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    var newData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getData\"])();\n    newData.splice(index, 1);\n    Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"setData\"])(newData); // onClose()\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n    isOpen: isOpen,\n    isCentered: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalContent\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalHeader\"], {\n        children: \"Add shortcut\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalBody\"], {\n        pb: 6,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n            children: \"Website Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            value: siteName,\n            placeholder: \"Website Name\",\n            onChange: function onChange(e) {\n              return setSiteName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n          mt: 4,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n            children: \"URL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            value: url,\n            placeholder: \"URL\",\n            onChange: function onChange(e) {\n              return setUrl(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalFooter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          w: \"100%\",\n          children: [index !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            colorScheme: \"red\",\n            mr: 3,\n            onClick: handleDelete,\n            children: \"Delete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spacer\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              colorScheme: \"blue\",\n              mr: 3,\n              onClick: handleSubmit,\n              children: \"Save\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              onClick: onClose,\n              children: \"Cancel\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddOrEditModal, \"NxGvjvQgU9YsPbnzbhORfZIL5Oo=\");\n\n_c = AddOrEditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddOrEditModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddOrEditModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRPckVkaXRNb2RhbC5qcz9mYTQ1Il0sIm5hbWVzIjpbIkFkZE9yRWRpdE1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJ1c2VTdGF0ZSIsInNpdGVOYW1lIiwic2V0U2l0ZU5hbWUiLCJ1cmwiLCJzZXRVcmwiLCJoYW5kbGVTdWJtaXQiLCJ0cmltIiwiZGF0dW0iLCJuZXdEYXRhIiwiZ2V0RGF0YSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJwdXNoIiwic2V0RGF0YSIsImhhbmRsZURlbGV0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLE1BQXlDLFFBQXpDQSxNQUF5QztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDakNDLHNEQUFRLENBQUNGLElBQUksSUFBSSxFQUFULENBRHlCO0FBQUEsTUFDMURHLFFBRDBEO0FBQUEsTUFDaERDLFdBRGdEOztBQUFBLG1CQUUzQ0Ysc0RBQVEsQ0FBQ0gsSUFBSSxJQUFJLEVBQVQsQ0FGbUM7QUFBQSxNQUUxRE0sR0FGMEQ7QUFBQSxNQUVyREMsTUFGcUQ7O0FBR2pFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSUosUUFBUSxDQUFDSyxJQUFULE9BQW9CLEVBQXBCLElBQTBCSCxHQUFHLENBQUNHLElBQUosT0FBZSxFQUE3QyxFQUFpRDtBQUMvQztBQUNEOztBQUNELFFBQU1DLEtBQUssR0FBRztBQUFFVixV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cUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRSxxRUFBQyx1REFBRDtBQUFRLHlCQUFXLEVBQUMsTUFBcEI7QUFBMkIsZ0JBQUUsRUFBRSxDQUEvQjtBQUFrQyxxQkFBTyxFQUFFWCxZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLHFFQUFDLHVEQUFEO0FBQVEscUJBQU8sRUFBRVQsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQXJFRDs7R0FBTUYsYzs7S0FBQUEsYztBQXVFU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZE9yRWRpdE1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBNb2RhbCxcbiAgTW9kYWxPdmVybGF5LFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbEZvb3RlcixcbiAgTW9kYWxCb2R5LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBGbGV4LFxuICBTcGFjZXIsXG4gIEJveCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IGdldERhdGEsIHNldERhdGEgfSBmcm9tICcuLi91dGlscydcblxuY29uc3QgQWRkT3JFZGl0TW9kYWwgPSAoeyBpc09wZW4sIG9uQ2xvc2UsIGhyZWYsIHRleHQsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgW3NpdGVOYW1lLCBzZXRTaXRlTmFtZV0gPSB1c2VTdGF0ZSh0ZXh0IHx8ICcnKVxuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoaHJlZiB8fCAnJylcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChzaXRlTmFtZS50cmltKCkgPT09ICcnIHx8IHVybC50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZGF0dW0gPSB7IGhyZWY6IHVybCwgdGV4dDogc2l0ZU5hbWUgfVxuICAgIGNvbnN0IG5ld0RhdGEgPSBnZXREYXRhKClcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xuICAgICAgLy8g5q2j5Zyo5L+u5pS5546w5pyJ5pWw5o2uXG4gICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5L+u5pS5546w5pyJ5pWw5o2uJylcbiAgICAgIG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxLCBkYXR1bSlcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOato+WcqOa3u+WKoOaWsOaVsOaNrlxuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOa3u+WKoOaWsOaVsOaNricpXG4gICAgICBuZXdEYXRhLnB1c2goZGF0dW0pXG4gICAgICBzZXRTaXRlTmFtZSgnJylcbiAgICAgIHNldFVybCgnJylcbiAgICB9XG4gICAgc2V0RGF0YShuZXdEYXRhKVxuICAgIGNvbnNvbGUubG9nKCdnZXREYXRhOiAnLCBnZXREYXRhKCkpXG4gICAgb25DbG9zZSgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGdldERhdGEoKVxuICAgIG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldERhdGEobmV3RGF0YSlcbiAgICAvLyBvbkNsb3NlKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBpc0NlbnRlcmVkPlxuICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgPE1vZGFsSGVhZGVyPkFkZCBzaG9ydGN1dDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbEJvZHkgcGI9ezZ9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+V2Vic2l0ZSBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3NpdGVOYW1lfSBwbGFjZWhvbGRlcj1cIldlYnNpdGUgTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2l0ZU5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgPEZvcm1MYWJlbD5VUkw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dXJsfSBwbGFjZWhvbGRlcj1cIlVSTFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIHtpbmRleCAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICA8L01vZGFsQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE9yRWRpdE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddOrEditModal.js\n");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})