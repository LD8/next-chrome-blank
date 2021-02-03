webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddOrEditModal.js":
/*!**************************************!*\
  !*** ./components/AddOrEditModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/AddOrEditModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddOrEditModal = function AddOrEditModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      href = _ref.href,\n      text = _ref.text,\n      index = _ref.index,\n      setToUpdate = _ref.setToUpdate;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(text || ''),\n      siteName = _useState[0],\n      setSiteName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(href || ''),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getData\"])()),\n      newCardsData = _useState3[0],\n      setNewCardsData = _useState3[1];\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    };\n    var newData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getData\"])();\n\n    if (index !== undefined && index !== null) {\n      // console.log('正在修改现有数据')\n      setNewCardsData(newData.splice(index, 1, datum));\n    } else {\n      // console.log('正在添加新数据')\n      newData.push(datum);\n      setNewCardsData(newData);\n      setSiteName('');\n      setUrl('');\n    }\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"setData\"])(newCardsData);\n    setToUpdate(true);\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    // console.log('正在删除数据')\n    var newData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getData\"])();\n    setNewCardsData(newData.splice(index, 1));\n    onClose();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return function () {\n      setToUpdate(true);\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"setData\"])(newCardsData);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n    isOpen: isOpen,\n    isCentered: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalContent\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalHeader\"], {\n        children: \"Add shortcut\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalBody\"], {\n        pb: 6,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n            children: \"Website Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            value: siteName,\n            placeholder: \"Website Name\",\n            onChange: function onChange(e) {\n              return setSiteName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n          mt: 4,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n            children: \"URL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            value: url,\n            placeholder: \"URL\",\n            onChange: function onChange(e) {\n              return setUrl(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalFooter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          w: \"100%\",\n          children: [index !== -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            colorScheme: \"red\",\n            mr: 3,\n            onClick: handleDelete,\n            children: \"Delete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spacer\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              colorScheme: \"blue\",\n              mr: 3,\n              onClick: handleSubmit,\n              children: \"Save\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              onClick: onClose,\n              children: \"Cancel\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddOrEditModal, \"YTNLeW6sXG8jtC9y3mM1fmnb/Sw=\");\n\n_c = AddOrEditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddOrEditModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddOrEditModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRPckVkaXRNb2RhbC5qcz9mYTQ1Il0sIm5hbWVzIjpbIkFkZE9yRWRpdE1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRUb1VwZGF0ZSIsInVzZVN0YXRlIiwic2l0ZU5hbWUiLCJzZXRTaXRlTmFtZSIsInVybCIsInNldFVybCIsImdldERhdGEiLCJuZXdDYXJkc0RhdGEiLCJzZXROZXdDYXJkc0RhdGEiLCJoYW5kbGVTdWJtaXQiLCJ0cmltIiwiZGF0dW0iLCJuZXdEYXRhIiwidW5kZWZpbmVkIiwic3BsaWNlIiwicHVzaCIsInNldERhdGEiLCJoYW5kbGVEZWxldGUiLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF5RDtBQUFBOztBQUFBLE1BQXREQyxNQUFzRCxRQUF0REEsTUFBc0Q7QUFBQSxNQUE5Q0MsT0FBOEMsUUFBOUNBLE9BQThDO0FBQUEsTUFBckNDLElBQXFDLFFBQXJDQSxJQUFxQztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsS0FBeUIsUUFBekJBLEtBQXlCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUNILElBQUksSUFBSSxFQUFULENBRHNDO0FBQUEsTUFDdkVJLFFBRHVFO0FBQUEsTUFDN0RDLFdBRDZEOztBQUFBLG1CQUV4REYsc0RBQVEsQ0FBQ0osSUFBSSxJQUFJLEVBQVQsQ0FGZ0Q7QUFBQSxNQUV2RU8sR0FGdUU7QUFBQSxNQUVsRUMsTUFGa0U7O0FBQUEsbUJBR3RDSixzREFBUSxDQUFDSyxzREFBTyxFQUFSLENBSDhCO0FBQUEsTUFHdkVDLFlBSHVFO0FBQUEsTUFHekRDLGVBSHlEOztB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LE1BQVI7QUFBQSxxQkFDR3RCLEtBQUssS0FBSyxDQUFDLENBQVgsaUJBQ0MscUVBQUMsdURBQUQ7QUFBUSx1QkFBVyxFQUFDLEtBQXBCO0FBQTBCLGNBQUUsRUFBRSxDQUE5QjtBQUFpQyxtQkFBTyxFQUFFa0IsWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFNRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0UscUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRSxxRUFBQyx1REFBRDtBQUFRLHlCQUFXLEVBQUMsTUFBcEI7QUFBMkIsZ0JBQUUsRUFBRSxDQUEvQjtBQUFrQyxxQkFBTyxFQUFFUixZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLHFFQUFDLHVEQUFEO0FBQVEscUJBQU8sRUFBRWIsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQXhFRDs7R0FBTUYsYzs7S0FBQUEsYztBQTBFU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZE9yRWRpdE1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsRm9vdGVyLFxuICBNb2RhbEJvZHksXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZsZXgsXG4gIFNwYWNlcixcbiAgQm94LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBBZGRPckVkaXRNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgaHJlZiwgdGV4dCwgaW5kZXgsIHNldFRvVXBkYXRlIH0pID0+IHtcbiAgY29uc3QgW3NpdGVOYW1lLCBzZXRTaXRlTmFtZV0gPSB1c2VTdGF0ZSh0ZXh0IHx8ICcnKVxuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoaHJlZiB8fCAnJylcbiAgY29uc3QgW25ld0NhcmRzRGF0YSwgc2V0TmV3Q2FyZHNEYXRhXSA9IHVzZVN0YXRlKGdldERhdGEoKSlcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChzaXRlTmFtZS50cmltKCkgPT09ICcnIHx8IHVybC50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZGF0dW0gPSB7IGhyZWY6IHVybCwgdGV4dDogc2l0ZU5hbWUgfVxuICAgIGNvbnN0IG5ld0RhdGEgPSBnZXREYXRhKClcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+ato+WcqOS/ruaUueeOsOacieaVsOaNricpXG4gICAgICBzZXROZXdDYXJkc0RhdGEobmV3RGF0YS5zcGxpY2UoaW5kZXgsIDEsIGRhdHVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+ato+WcqOa3u+WKoOaWsOaVsOaNricpXG4gICAgICBuZXdEYXRhLnB1c2goZGF0dW0pXG4gICAgICBzZXROZXdDYXJkc0RhdGEobmV3RGF0YSlcbiAgICAgIHNldFNpdGVOYW1lKCcnKVxuICAgICAgc2V0VXJsKCcnKVxuICAgIH1cbiAgICBzZXREYXRhKG5ld0NhcmRzRGF0YSlcbiAgICBzZXRUb1VwZGF0ZSh0cnVlKVxuICAgIG9uQ2xvc2UoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCfmraPlnKjliKDpmaTmlbDmja4nKVxuICAgIGNvbnN0IG5ld0RhdGEgPSBnZXREYXRhKClcbiAgICBzZXROZXdDYXJkc0RhdGEobmV3RGF0YS5zcGxpY2UoaW5kZXgsIDEpKVxuICAgIG9uQ2xvc2UoKVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgc2V0VG9VcGRhdGUodHJ1ZSlcbiAgICByZXR1cm4gc2V0RGF0YShuZXdDYXJkc0RhdGEpXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IGlzQ2VudGVyZWQ+XG4gICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICA8TW9kYWxIZWFkZXI+QWRkIHNob3J0Y3V0PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgPEZvcm1MYWJlbD5XZWJzaXRlIE5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17c2l0ZU5hbWV9IHBsYWNlaG9sZGVyPVwiV2Vic2l0ZSBOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXRlTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17NH0+XG4gICAgICAgICAgICA8Rm9ybUxhYmVsPlVSTDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0IHZhbHVlPXt1cmx9IHBsYWNlaG9sZGVyPVwiVVJMXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAge2luZGV4ICE9PSAtMSAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBtcj17M30gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRPckVkaXRNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddOrEditModal.js\n");

/***/ })

})