webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      toUpdate = _useState[0],\n      setToUpdate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(-1),\n      openedCardIndex = _useState2[0],\n      setOpenedCardIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])()),\n      cardData = _useState3[0],\n      setCardData = _useState3[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose; // useEffect(() => {\n  //   setCardData(getData() || [])\n  // }, [])\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (toUpdate) {\n      setCardData(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])());\n      setToUpdate(false);\n    }\n  }, [toUpdate]);\n  var modalProps = {\n    isOpen: isOpen,\n    onClose: onClose,\n    href: openedCardIndex === -1 ? '' : cardData[openedCardIndex].href,\n    text: openedCardIndex === -1 ? '' : cardData[openedCardIndex].text,\n    index: openedCardIndex === -1 ? '' : openedCardIndex,\n    setToUpdate: setToUpdate\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"AddOrEditModal\"], _objectSpread({}, modalProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"YQJ4l60g36m0NPqouC9ZANiBU6o=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_4__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n}; // export async function getInitialProps() {\n//   return {\n//     props: {\n//       cardData: await getData(),\n//     },\n//   }\n// }\n\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJ0b1VwZGF0ZSIsInNldFRvVXBkYXRlIiwib3BlbmVkQ2FyZEluZGV4Iiwic2V0T3BlbmVkQ2FyZEluZGV4IiwiZ2V0RGF0YSIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJ1c2VEaXNjbG9zdXJlIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZUVmZmVjdCIsIm1vZGFsUHJvcHMiLCJocmVmIiwidGV4dCIsImluZGV4IiwibWFwIiwiYyIsImkiLCJGb3JtYXRQbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxFQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFBQSxtQkFFaUJGLHNEQUFRLENBQUMsQ0FBQyxDQUFGLENBRnpCO0FBQUEsTUFFdEJHLGVBRnNCO0FBQUEsTUFFTEMsa0JBRks7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUNLLHNEQUFPLEVBQVIsQ0FIWDtBQUFBLE1BR3RCQyxRQUhzQjtBQUFBLE1BR1pDLFdBSFk7O0FBQUEsdUJBSU9DLHNFQUFhLEVBSnBCO0FBQUEsTUFJckJDLE1BSnFCLGtCQUlyQkEsTUFKcUI7QUFBQSxNQUliQyxNQUphLGtCQUliQSxNQUphO0FBQUEsTUFJTEMsT0FKSyxrQkFJTEEsT0FKSyxFQUs3QjtBQUNBO0FBQ0E7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxRQUFKLEVBQWM7QUFDWk0saUJBQVcsQ0FBQ0Ysc0RBQU8sRUFBUixDQUFYO0FBQ0FILGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ0QsUUFBRCxDQUxNLENBQVQ7QUFPQSxNQUFNWSxVQUFVLEdBQUc7QUFDakJKLFVBQU0sRUFBTkEsTUFEaUI7QUFFakJFLFdBQU8sRUFBUEEsT0FGaUI7QUFHakJHLFFBQUksRUFBRVgsZUFBZSxLQUFLLENBQUMsQ0FBckIsR0FBeUIsRUFBekIsR0FBOEJHLFFBQVEsQ0FBQ0gsZUFBRCxDQUFSLENBQTBCVyxJQUg3QztBQUlqQkMsUUFBSSxFQUFFWixlQUFlLEtBQUssQ0FBQyxDQUFyQixHQUF5QixFQUF6QixHQUE4QkcsUUFBUSxDQUFDSCxlQUFELENBQVIsQ0FBMEJZLElBSjdDO0FBS2pCQyxTQUFLLEVBQUViLGVBQWUsS0FBSyxDQUFDLENBQXJCLEdBQXlCLEVBQXpCLEdBQThCQSxlQUxwQjtBQU1qQkQsZUFBVyxFQUFYQTtBQU5pQixHQUFuQjtBQVFBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBYSxVQUFJLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsdURBQUQ7QUFBUSxPQUFDLEVBQUMsT0FBVjtBQUFrQixVQUFJLEVBQUMsT0FBdkI7QUFBK0IsT0FBQyxFQUFDLE1BQWpDO0FBQXdDLFFBQUUsRUFBQyxNQUEzQztBQUFrRCxRQUFFLEVBQUUsRUFBdEQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFBLGdDQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMscURBQUQ7QUFBTSxpQkFBTyxFQUFDLE1BQWQ7QUFBcUIsaUJBQU8sRUFBQyxRQUE3QjtBQUFBLHFCQUNHSSxRQUFRLElBQ1BBLFFBQVEsQ0FBQ1csR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUNYLHFFQUFDLGdEQUFELGtDQUF1QkQsQ0FBdkI7QUFBMEIsbUJBQUssRUFBRUMsQ0FBakM7QUFBb0Msb0JBQU0sRUFBRVQsTUFBNUM7QUFBb0QsZ0NBQWtCLEVBQUVOO0FBQXhFLGdCQUFXZSxDQUFDLEdBQUcsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsV0FBYixDQUZKLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBTSxFQUFFVCxNQUFkO0FBQXNCLDhCQUFrQixFQUFFTjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUUscUVBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBZ0JFLHFFQUFDLDBEQUFELG9CQUFvQlMsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBLGtCQURGO0FBb0JEOztHQTNDdUJkLEk7VUFJY1MsOEQ7OztLQUpkVCxJOztBQTZDeEIsSUFBTXFCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxzQkFDeEI7QUFBQSw0QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQSxrQkFEd0I7QUFBQSxDQUExQixDLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztNQWhCTUEsaUIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbnRlciwgVlN0YWNrLCBXcmFwLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBIZWFkQ29udGVudCwgU2VhcmNoQmFyLCBFbXB0eVBsYWNlSG9sZGVyQ2FyZCwgR29vZ2xlSGVhZGluZywgQWRkT3JFZGl0TW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdG9VcGRhdGUsIHNldFRvVXBkYXRlXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW29wZW5lZENhcmRJbmRleCwgc2V0T3BlbmVkQ2FyZEluZGV4XSA9IHVzZVN0YXRlKC0xKVxuICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKGdldERhdGEoKSlcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0Q2FyZERhdGEoZ2V0RGF0YSgpIHx8IFtdKVxuICAvLyB9LCBbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG9VcGRhdGUpIHtcbiAgICAgIHNldENhcmREYXRhKGdldERhdGEoKSlcbiAgICAgIHNldFRvVXBkYXRlKGZhbHNlKVxuICAgIH1cbiAgfSwgW3RvVXBkYXRlXSlcblxuICBjb25zdCBtb2RhbFByb3BzID0ge1xuICAgIGlzT3BlbixcbiAgICBvbkNsb3NlLFxuICAgIGhyZWY6IG9wZW5lZENhcmRJbmRleCA9PT0gLTEgPyAnJyA6IGNhcmREYXRhW29wZW5lZENhcmRJbmRleF0uaHJlZixcbiAgICB0ZXh0OiBvcGVuZWRDYXJkSW5kZXggPT09IC0xID8gJycgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLnRleHQsXG4gICAgaW5kZXg6IG9wZW5lZENhcmRJbmRleCA9PT0gLTEgPyAnJyA6IG9wZW5lZENhcmRJbmRleCxcbiAgICBzZXRUb1VwZGF0ZSxcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZENvbnRlbnQgdGV4dD1cIk5ldyBUYWJcIiAvPlxuICAgICAgPENlbnRlciBoPVwiMTAwdmhcIiBtYXhXPVwiODAwcHhcIiB3PVwiMTAwJVwiIG14PVwiYXV0b1wiIHBiPXsyMH0+XG4gICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgPEdvb2dsZUhlYWRpbmcgLz5cbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgPFdyYXAgc3BhY2luZz1cIjIwcHhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7Y2FyZERhdGEgJiZcbiAgICAgICAgICAgICAgY2FyZERhdGEubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpICsgJyd9IHsuLi5jfSBpbmRleD17aX0gb25PcGVuPXtvbk9wZW59IHNldE9wZW5lZENhcmRJbmRleD17c2V0T3BlbmVkQ2FyZEluZGV4fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxDYXJkIG9uT3Blbj17b25PcGVufSBzZXRPcGVuZWRDYXJkSW5kZXg9e3NldE9wZW5lZENhcmRJbmRleH0gLz5cbiAgICAgICAgICAgIDxGb3JtYXRQbGFjZWhvbGRlciAvPlxuICAgICAgICAgIDwvV3JhcD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxBZGRPckVkaXRNb2RhbCB7Li4ubW9kYWxQcm9wc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBGb3JtYXRQbGFjZWhvbGRlciA9ICgpID0+IChcbiAgPD5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgPC8+XG4pXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGNhcmREYXRhOiBhd2FpdCBnZXREYXRhKCksXG4vLyAgICAgfSxcbi8vICAgfVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})