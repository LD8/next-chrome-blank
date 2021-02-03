webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddOrEditModal.js":
/*!**************************************!*\
  !*** ./components/AddOrEditModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/AddOrEditModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddOrEditModal = function AddOrEditModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      href = _ref.href,\n      text = _ref.text,\n      index = _ref.index,\n      cardData = _ref.cardData,\n      setCardData = _ref.setCardData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(text || ''),\n      siteName = _useState[0],\n      setSiteName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(href || ''),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    };\n    var newData = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getData\"])();\n\n    if (index !== undefined && index !== null) {\n      // 正在修改现有数据\n      console.log('正在修改现有数据');\n      newData.splice(index, 1, datum);\n      console.log(newData);\n    } else {\n      // 正在添加新数据\n      console.log('正在添加新数据');\n      newData.push(datum);\n      setSiteName('');\n      setUrl('');\n    }\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"setData\"])(newData);\n    console.log(\"getData: \", Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getData\"])());\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    var newData = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardData);\n\n    newData.splice(index, 1);\n    setCardData(newData); // onClose()\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    isOpen: isOpen,\n    isCentered: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n        children: \"Add shortcut\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n        pb: 6,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n            children: \"Website Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            value: siteName,\n            placeholder: \"Website Name\",\n            onChange: function onChange(e) {\n              return setSiteName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n          mt: 4,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n            children: \"URL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            value: url,\n            placeholder: \"URL\",\n            onChange: function onChange(e) {\n              return setUrl(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalFooter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n          w: \"100%\",\n          children: [index !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            colorScheme: \"red\",\n            mr: 3,\n            onClick: handleDelete,\n            children: \"Delete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              colorScheme: \"blue\",\n              mr: 3,\n              onClick: handleSubmit,\n              children: \"Save\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              onClick: onClose,\n              children: \"Cancel\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddOrEditModal, \"NxGvjvQgU9YsPbnzbhORfZIL5Oo=\");\n\n_c = AddOrEditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddOrEditModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddOrEditModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRPckVkaXRNb2RhbC5qcz9mYTQ1Il0sIm5hbWVzIjpbIkFkZE9yRWRpdE1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwidXNlU3RhdGUiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwidXJsIiwic2V0VXJsIiwiaGFuZGxlU3VibWl0IiwidHJpbSIsImRhdHVtIiwibmV3RGF0YSIsImdldERhdGEiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwicHVzaCIsInNldERhdGEiLCJoYW5kbGVEZWxldGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQW1FO0FBQUE7O0FBQUEsTUFBaEVDLE1BQWdFLFFBQWhFQSxNQUFnRTtBQUFBLE1BQXhEQyxPQUF3RCxRQUF4REEsT0FBd0Q7QUFBQSxNQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDeERDLHNEQUFRLENBQUNKLElBQUksSUFBSSxFQUFULENBRGdEO0FBQUEsTUFDakZLLFFBRGlGO0FBQUEsTUFDdkVDLFdBRHVFOztBQUFBLG1CQUVsRUYsc0RBQVEsQ0FBQ0wsSUFBSSxJQUFJLEVBQVQsQ0FGMEQ7QUFBQSxNQUVqRlEsR0FGaUY7QUFBQSxNQUU1RUMsTUFGNEU7O0FBR3hGLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSUosUUFBUSxDQUFDSyxJQUFU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TyxFQUFFTSxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQU1FLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRSxxRUFBQyxvREFBRDtBQUFBLG9DQUNFLHFFQUFDLHVEQUFEO0FBQVEseUJBQVcsRUFBQyxNQUFwQjtBQUEyQixnQkFBRSxFQUFFLENBQS9CO0FBQWtDLHFCQUFPLEVBQUVYLFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUscUVBQUMsdURBQUQ7QUFBUSxxQkFBTyxFQUFFWCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBckVEOztHQUFNRixjOztLQUFBQSxjO0FBdUVTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkT3JFZGl0TW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsRm9vdGVyLFxuICBNb2RhbEJvZHksXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZsZXgsXG4gIFNwYWNlcixcbiAgQm94LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBBZGRPckVkaXRNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgaHJlZiwgdGV4dCwgaW5kZXgsIGNhcmREYXRhLCBzZXRDYXJkRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtzaXRlTmFtZSwgc2V0U2l0ZU5hbWVdID0gdXNlU3RhdGUodGV4dCB8fCAnJylcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKGhyZWYgfHwgJycpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoc2l0ZU5hbWUudHJpbSgpID09PSAnJyB8fCB1cmwudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGRhdHVtID0geyBocmVmOiB1cmwsIHRleHQ6IHNpdGVOYW1lIH1cbiAgICBjb25zdCBuZXdEYXRhID0gZ2V0RGF0YSgpXG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcbiAgICAgIC8vIOato+WcqOS/ruaUueeOsOacieaVsOaNrlxuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOS/ruaUueeOsOacieaVsOaNricpXG4gICAgICBuZXdEYXRhLnNwbGljZShpbmRleCwgMSwgZGF0dW0pXG4gICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDmraPlnKjmt7vliqDmlrDmlbDmja5cbiAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjmt7vliqDmlrDmlbDmja4nKVxuICAgICAgbmV3RGF0YS5wdXNoKGRhdHVtKVxuICAgICAgc2V0U2l0ZU5hbWUoJycpXG4gICAgICBzZXRVcmwoJycpXG4gICAgfVxuICAgIHNldERhdGEobmV3RGF0YSlcbiAgICBjb25zb2xlLmxvZyhcImdldERhdGE6IFwiLGdldERhdGEoKSlcbiAgICBvbkNsb3NlKClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmNhcmREYXRhXVxuICAgIG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldENhcmREYXRhKG5ld0RhdGEpXG4gICAgLy8gb25DbG9zZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gaXNDZW50ZXJlZD5cbiAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgIDxNb2RhbEhlYWRlcj5BZGQgc2hvcnRjdXQ8L01vZGFsSGVhZGVyPlxuICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8Rm9ybUxhYmVsPldlYnNpdGUgTmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0IHZhbHVlPXtzaXRlTmFtZX0gcGxhY2Vob2xkZXI9XCJXZWJzaXRlIE5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHNldFNpdGVOYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+VVJMPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3VybH0gcGxhY2Vob2xkZXI9XCJVUkxcIiBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG5cbiAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICB7aW5kZXggIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBtcj17M30gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRPckVkaXRNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddOrEditModal.js\n");

/***/ })

})