webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(-1),\n      openedCardIndex = _useState[0],\n      setOpenedCardIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])()),\n      cardData = _useState2[0],\n      setCardData = _useState2[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // 主页刷新前存入 localStorage 做持久化处理\n    return function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"setData\"])(cardData);\n    };\n  }, [cardData]);\n  var modalProps = {\n    isOpen: isOpen,\n    onClose: onClose,\n    href: openedCardIndex === -1 ? null : cardData[openedCardIndex].href,\n    text: openedCardIndex === -1 ? null : cardData[openedCardIndex].text,\n    index: openedCardIndex,\n    cardData: cardData,\n    setCardData: setCardData\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"AddOrEditModal\"], _objectSpread({}, modalProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"ZKyLMoRdI4w61VOenHluvK8hQGQ=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n};\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJvcGVuZWRDYXJkSW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJnZXREYXRhIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm1vZGFsUHJvcHMiLCJocmVmIiwidGV4dCIsImluZGV4IiwibWFwIiwiYyIsImkiLCJGb3JtYXRQbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxDQUFDLENBQUYsQ0FEekI7QUFBQSxNQUN0QkMsZUFEc0I7QUFBQSxNQUNMQyxrQkFESzs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQ0csc0RBQU8sRUFBUixDQUZYO0FBQUEsTUFFdEJDLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSx1QkFHT0Msc0VBQWEsRUFIcEI7QUFBQSxNQUdyQkMsTUFIcUIsa0JBR3JCQSxNQUhxQjtBQUFBLE1BR2JDLE1BSGEsa0JBR2JBLE1BSGE7QUFBQSxNQUdMQyxPQUhLLGtCQUdMQSxPQUhLOztBQUs3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxXQUFPO0FBQUEsYUFBTUMsc0RBQU8sQ0FBQ1AsUUFBRCxDQUFiO0FBQUEsS0FBUDtBQUNELEdBSFEsRUFHTixDQUFDQSxRQUFELENBSE0sQ0FBVDtBQUtBLE1BQU1RLFVBQVUsR0FBRztBQUNqQkwsVUFBTSxFQUFOQSxNQURpQjtBQUVqQkUsV0FBTyxFQUFQQSxPQUZpQjtBQUdqQkksUUFBSSxFQUFFWixlQUFlLEtBQUssQ0FBQyxDQUFyQixHQUF5QixJQUF6QixHQUFnQ0csUUFBUSxDQUFDSCxlQUFELENBQVIsQ0FBMEJZLElBSC9DO0FBSWpCQyxRQUFJLEVBQUViLGVBQWUsS0FBSyxDQUFDLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDRyxRQUFRLENBQUNILGVBQUQsQ0FBUixDQUEwQmEsSUFKL0M7QUFLakJDLFNBQUssRUFBRWQsZUFMVTtBQU1qQkcsWUFBUSxFQUFSQSxRQU5pQjtBQU9qQkMsZUFBVyxFQUFYQTtBQVBpQixHQUFuQjtBQVNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBYSxVQUFJLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsdURBQUQ7QUFBUSxPQUFDLEVBQUMsT0FBVjtBQUFrQixVQUFJLEVBQUMsT0FBdkI7QUFBK0IsT0FBQyxFQUFDLE1BQWpDO0FBQXdDLFFBQUUsRUFBQyxNQUEzQztBQUFrRCxRQUFFLEVBQUUsRUFBdEQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFBLGdDQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMscURBQUQ7QUFBTSxpQkFBTyxFQUFDLE1BQWQ7QUFBcUIsaUJBQU8sRUFBQyxRQUE3QjtBQUFBLHFCQUNHRCxRQUFRLElBQ1BBLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUNYLHFFQUFDLGdEQUFELGtDQUF1QkQsQ0FBdkI7QUFBMEIsbUJBQUssRUFBRUMsQ0FBakM7QUFBb0Msb0JBQU0sRUFBRVYsTUFBNUM7QUFBb0QsZ0NBQWtCLEVBQUVOO0FBQXhFLGdCQUFXZ0IsQ0FBQyxHQUFHLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLFdBQWIsQ0FGSixlQUtFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQU0sRUFBRVYsTUFBZDtBQUFzQiw4QkFBa0IsRUFBRU47QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FLHFFQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWdCRSxxRUFBQywwREFBRCxvQkFBb0JVLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxrQkFERjtBQW9CRDs7R0F2Q3VCYixJO1VBR2NPLDhEOzs7S0FIZFAsSTs7QUF5Q3hCLElBQU1vQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsc0JBQ3hCO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUEsa0JBRHdCO0FBQUEsQ0FBMUI7O01BQU1BLGlCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIsIFZTdGFjaywgV3JhcCwgdXNlRGlzY2xvc3VyZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgSGVhZENvbnRlbnQsIFNlYXJjaEJhciwgRW1wdHlQbGFjZUhvbGRlckNhcmQsIEdvb2dsZUhlYWRpbmcsIEFkZE9yRWRpdE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IGdldERhdGEsIHNldERhdGEgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW29wZW5lZENhcmRJbmRleCwgc2V0T3BlbmVkQ2FyZEluZGV4XSA9IHVzZVN0YXRlKC0xKVxuICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKGdldERhdGEoKSlcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDkuLvpobXliLfmlrDliY3lrZjlhaUgbG9jYWxTdG9yYWdlIOWBmuaMgeS5heWMluWkhOeQhlxuICAgIHJldHVybiAoKSA9PiBzZXREYXRhKGNhcmREYXRhKVxuICB9LCBbY2FyZERhdGFdKVxuXG4gIGNvbnN0IG1vZGFsUHJvcHMgPSB7XG4gICAgaXNPcGVuLFxuICAgIG9uQ2xvc2UsXG4gICAgaHJlZjogb3BlbmVkQ2FyZEluZGV4ID09PSAtMSA/IG51bGwgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLmhyZWYsXG4gICAgdGV4dDogb3BlbmVkQ2FyZEluZGV4ID09PSAtMSA/IG51bGwgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLnRleHQsXG4gICAgaW5kZXg6IG9wZW5lZENhcmRJbmRleCxcbiAgICBjYXJkRGF0YSxcbiAgICBzZXRDYXJkRGF0YVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkQ29udGVudCB0ZXh0PVwiTmV3IFRhYlwiIC8+XG4gICAgICA8Q2VudGVyIGg9XCIxMDB2aFwiIG1heFc9XCI4MDBweFwiIHc9XCIxMDAlXCIgbXg9XCJhdXRvXCIgcGI9ezIwfT5cbiAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICA8R29vZ2xlSGVhZGluZyAvPlxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICA8V3JhcCBzcGFjaW5nPVwiMjBweFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtjYXJkRGF0YSAmJlxuICAgICAgICAgICAgICBjYXJkRGF0YS5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2kgKyAnJ30gey4uLmN9IGluZGV4PXtpfSBvbk9wZW49e29uT3Blbn0gc2V0T3BlbmVkQ2FyZEluZGV4PXtzZXRPcGVuZWRDYXJkSW5kZXh9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPENhcmQgb25PcGVuPXtvbk9wZW59IHNldE9wZW5lZENhcmRJbmRleD17c2V0T3BlbmVkQ2FyZEluZGV4fSAvPlxuICAgICAgICAgICAgPEZvcm1hdFBsYWNlaG9sZGVyIC8+XG4gICAgICAgICAgPC9XcmFwPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvQ2VudGVyPlxuICAgICAgPEFkZE9yRWRpdE1vZGFsIHsuLi5tb2RhbFByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IEZvcm1hdFBsYWNlaG9sZGVyID0gKCkgPT4gKFxuICA8PlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICA8Lz5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})