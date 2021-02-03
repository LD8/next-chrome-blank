webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddOrEditModal.js":
/*!**************************************!*\
  !*** ./components/AddOrEditModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/AddOrEditModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddOrEditModal = function AddOrEditModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      href = _ref.href,\n      text = _ref.text,\n      index = _ref.index,\n      cardData = _ref.cardData,\n      setCardData = _ref.setCardData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(text || ''),\n      siteName = _useState[0],\n      setSiteName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(cardData),\n      newCardsData = _useState2[0],\n      setNewCardsData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(href || ''),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    };\n\n    var newData = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardData);\n\n    if (index !== undefined && index !== null) {\n      // 正在修改现有数据\n      console.log('正在修改现有数据');\n      setNewCardsData(newData.splice(index, 1, datum));\n      console.log(newData);\n    } else {\n      // 正在添加新数据\n      console.log('正在添加新数据');\n      newData.push(datum);\n      setNewCardsData(newData);\n      setSiteName('');\n      setUrl('');\n    }\n\n    setCardData(newCardsData);\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    var newData = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardData);\n\n    newData.splice(index, 1);\n    setNewCardsData(newData); // onClose()\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    return function () {\n      return setCardData(newCardsData);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    isOpen: isOpen,\n    isCentered: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n        children: \"Add shortcut\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n        pb: 6,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n            children: \"Website Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            value: siteName,\n            placeholder: \"Website Name\",\n            onChange: function onChange(e) {\n              return setSiteName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n          mt: 4,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n            children: \"URL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            value: url,\n            placeholder: \"URL\",\n            onChange: function onChange(e) {\n              return setUrl(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalFooter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n          w: \"100%\",\n          children: [index !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            colorScheme: \"red\",\n            mr: 3,\n            onClick: handleDelete,\n            children: \"Delete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              colorScheme: \"blue\",\n              mr: 3,\n              onClick: handleSubmit,\n              children: \"Save\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              onClick: onClose,\n              children: \"Cancel\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddOrEditModal, \"FYU5di7jlmMf18GX8ui1/Mm0BZY=\");\n\n_c = AddOrEditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddOrEditModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddOrEditModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRPckVkaXRNb2RhbC5qcz9mYTQ1Il0sIm5hbWVzIjpbIkFkZE9yRWRpdE1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwidXNlU3RhdGUiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwibmV3Q2FyZHNEYXRhIiwic2V0TmV3Q2FyZHNEYXRhIiwidXJsIiwic2V0VXJsIiwiaGFuZGxlU3VibWl0IiwidHJpbSIsImRhdHVtIiwibmV3RGF0YSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFtRTtBQUFBOztBQUFBLE1BQWhFQyxNQUFnRSxRQUFoRUEsTUFBZ0U7QUFBQSxNQUF4REMsT0FBd0QsUUFBeERBLE9BQXdEO0FBQUEsTUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLE1BQXpDQyxJQUF5QyxRQUF6Q0EsSUFBeUM7QUFBQSxNQUFuQ0MsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsa0JBQ3hEQyxzREFBUSxDQUFDSixJQUFJLElBQUksRUFBVCxDQURnRDtBQUFBLE1BQ2pGSyxRQURpRjtBQUFBLE1BQ3ZFQyxXQUR1RTs7QUFBQSxtQkFFaERGLHNEQUFRLENBQUNGLFFBQUQsQ0FGd0M7QUFBQSxNQUVqRkssWUFGaUY7QUFBQSxNQUVuRUMsZUFGbUU7O0FBQUEsbUJBR2xFSixzREFBUSxDQUFDTCxJQUFJLElBQUksRUFBVCxDQUgwRDtBQUFBLE1BR2pGVSxHQUhpRjtBQUFBLE1BRzVFQyxNQUg0RTs7QUFJeEYsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJTixRQUFRLENBQUNPLElBQVQsT0FBb0IsRUFBcEIsSUFBMEJILEdBQUcsQ0FBQ0csSUFBSixPQUFlLEVBQTdDLEVBQWlEO0FBQy9DO0FBQ0Q7O0FBQ0QsUUFBTUMsS0FBSyxHQUFHO0FBQUVkLFVBQUksRUFBRVUsR0FBUjtBQUFhVCxVQUFJLEVBQUVLO0FBQW5CLEtBQWQ7O0FBQ0EsUUFBTVMsT0FBTyxHQUFHLHdLQUFJWixRQUFQLENBQWI7O0FBQ0EsUUFBSUQsS0FBSyxLQUFLYyxTQUFWLElBQXVCZCxLQUFLLEtBQUssSUFBckMsRUFBMkM7QUFDekM7QUFDQWUsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBVCxxQkFBZSxDQUFDTSxPQUFPLENBQUNJLE1BQVIsQ0FBZWpCLEtBQWYsRUFBc0IsQ0FBdEIsRUFBeUJZLEtBQXpCLENBQUQsQ0FBZjtBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNELEtBTEQsTUFLTztBQUNMO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUgsYUFBTyxDQUFDSyxJQUFSLENBQWFOLEtBQWI7QUFDQUwscUJBQWUsQ0FBQ00sT0FBRCxDQUFmO0FBQ0FSLGlCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FJLFlBQU0sQ0FBQyxFQUFELENBQU47QUFDRDs7QUFDRFAsZUFBVyxDQUFDSSxZQUFELENBQVg7QUFDQVQsV0FBTztBQUNSLEdBckJEOztBQXVCQSxNQUFNc0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFNTixPQUFPLEdBQUcsd0tBQUlaLFFBQVAsQ0FBYjs7QUFDQVksV0FBTyxDQUFDSSxNQUFSLENBQWVqQixLQUFmLEVBQXNCLENBQXRCO0FBQ0FPLG1CQUFlLENBQUNNLE9BQUQsQ0FBZixDQUh5QixDQUl6QjtBQUNELEdBTEQ7O0FBTUFPLHlEQUFTLENBQUM7QUFBQSxXQUFNO0FBQUEsYUFBTWxCLFdBQVcsQ0FBQ0ksWUFBRCxDQUFqQjtBQUFBLEtBQU47QUFBQSxHQUFELENBQVQ7QUFFQSxzQkFDRSxxRUFBQyxzREFBRDtBQUFPLFVBQU0sRUFBRVYsTUFBZjtBQUF1QixjQUFVLE1BQWpDO0FBQUEsNEJBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBQSw4QkFDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFBLGdDQUNFLHFFQUFDLDREQUFEO0FBQUEsa0NBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFPLGlCQUFLLEVBQUVRLFFBQWQ7QUFBd0IsdUJBQVcsRUFBQyxjQUFwQztBQUFtRCxvQkFBUSxFQUFFLGtCQUFDaUIsQ0FBRDtBQUFBLHFCQUFPaEIsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FLHFFQUFDLDREQUFEO0FBQWEsWUFBRSxFQUFFLENBQWpCO0FBQUEsa0NBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFPLGlCQUFLLEVBQUVmLEdBQWQ7QUFBbUIsdUJBQVcsRUFBQyxLQUEvQjtBQUFxQyxvQkFBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEscUJBQU9aLE1BQU0sQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBY0UscUVBQUMsNERBQUQ7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFNLFdBQUMsRUFBQyxNQUFSO0FBQUEscUJBQ0d2QixLQUFLLEtBQUtjLFNBQVYsaUJBQ0MscUVBQUMsdURBQUQ7QUFBUSx1QkFBVyxFQUFDLEtBQXBCO0FBQTBCLGNBQUUsRUFBRSxDQUE5QjtBQUFpQyxtQkFBTyxFQUFFSyxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQU1FLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRSxxRUFBQyxvREFBRDtBQUFBLG9DQUNFLHFFQUFDLHVEQUFEO0FBQVEseUJBQVcsRUFBQyxNQUFwQjtBQUEyQixnQkFBRSxFQUFFLENBQS9CO0FBQWtDLHFCQUFPLEVBQUVULFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUscUVBQUMsdURBQUQ7QUFBUSxxQkFBTyxFQUFFYixPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBdkVEOztHQUFNRixjOztLQUFBQSxjO0FBeUVTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkT3JFZGl0TW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxGb290ZXIsXG4gIE1vZGFsQm9keSxcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgRmxleCxcbiAgU3BhY2VyLFxuICBCb3gsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBnZXREYXRhLCBzZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IEFkZE9yRWRpdE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBocmVmLCB0ZXh0LCBpbmRleCwgY2FyZERhdGEsIHNldENhcmREYXRhIH0pID0+IHtcbiAgY29uc3QgW3NpdGVOYW1lLCBzZXRTaXRlTmFtZV0gPSB1c2VTdGF0ZSh0ZXh0IHx8ICcnKVxuICBjb25zdCBbbmV3Q2FyZHNEYXRhLCBzZXROZXdDYXJkc0RhdGFdID0gdXNlU3RhdGUoY2FyZERhdGEpXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShocmVmIHx8ICcnKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHNpdGVOYW1lLnRyaW0oKSA9PT0gJycgfHwgdXJsLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBkYXR1bSA9IHsgaHJlZjogdXJsLCB0ZXh0OiBzaXRlTmFtZSB9XG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5jYXJkRGF0YV1cbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xuICAgICAgLy8g5q2j5Zyo5L+u5pS5546w5pyJ5pWw5o2uXG4gICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5L+u5pS5546w5pyJ5pWw5o2uJylcbiAgICAgIHNldE5ld0NhcmRzRGF0YShuZXdEYXRhLnNwbGljZShpbmRleCwgMSwgZGF0dW0pKVxuICAgICAgY29uc29sZS5sb2cobmV3RGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5q2j5Zyo5re75Yqg5paw5pWw5o2uXG4gICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5re75Yqg5paw5pWw5o2uJylcbiAgICAgIG5ld0RhdGEucHVzaChkYXR1bSlcbiAgICAgIHNldE5ld0NhcmRzRGF0YShuZXdEYXRhKVxuICAgICAgc2V0U2l0ZU5hbWUoJycpXG4gICAgICBzZXRVcmwoJycpXG4gICAgfVxuICAgIHNldENhcmREYXRhKG5ld0NhcmRzRGF0YSlcbiAgICBvbkNsb3NlKClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmNhcmREYXRhXVxuICAgIG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldE5ld0NhcmRzRGF0YShuZXdEYXRhKVxuICAgIC8vIG9uQ2xvc2UoKVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiBzZXRDYXJkRGF0YShuZXdDYXJkc0RhdGEpKVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBpc0NlbnRlcmVkPlxuICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgPE1vZGFsSGVhZGVyPkFkZCBzaG9ydGN1dDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbEJvZHkgcGI9ezZ9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+V2Vic2l0ZSBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3NpdGVOYW1lfSBwbGFjZWhvbGRlcj1cIldlYnNpdGUgTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2l0ZU5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgPEZvcm1MYWJlbD5VUkw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dXJsfSBwbGFjZWhvbGRlcj1cIlVSTFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIHtpbmRleCAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICA8L01vZGFsQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE9yRWRpdE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddOrEditModal.js\n");

/***/ })

})