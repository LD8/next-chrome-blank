webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    setOpenedCardIndex(index); // queueMicrotask(() => onOpen())\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      position: \"relative\",\n      onMouseEnter: function onMouseEnter() {\n        return setHovered(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setTimeout(function () {\n          return setHovered(false);\n        }, 3000);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        href: href,\n        isExternal: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n          boxSize: \"120px\",\n          d: \"flex\",\n          flexDir: \"column\",\n          rounded: \"md\",\n          bg: \"gray.700\",\n          _hover: {\n            backgroundColor: 'gray.600',\n            boxShadow: '0 0px 8px black'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n            src: \"\".concat(href, \"favicon.ico\"),\n            name: avatarName,\n            boxSize: \"50px\",\n            my: 2,\n            p: \"3px\",\n            bg: \"gray.400\",\n            boxShadow: hovered ? '0 0 20px black' : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n            maxW: \"100px\",\n            fontSize: \"14px\",\n            textAlign: \"center\",\n            isTruncated: true,\n            children: text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n        w: 4,\n        h: 4,\n        p: \"3px\",\n        color: \"gray.500\",\n        position: \"absolute\",\n        top: \"5px\",\n        right: \"5px\",\n        onClick: handleOpen,\n        cursor: \"pointer\",\n        style: {\n          display: hovered ? 'block' : 'none'\n        },\n        _hover: {\n          color: 'white'\n        },\n        zIndex: \"1000\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        onClick: handleOpen,\n        boxSize: \"120px\",\n        bg: \"gray.600\",\n        d: \"flex\",\n        flexDir: \"column\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n          maxW: \"100px\",\n          textAlign: \"center\",\n          isTruncated: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRjtBQUFBOztBQUFBLE1BQWpGQyxJQUFpRixRQUFqRkEsSUFBaUY7QUFBQSxNQUEzRUMsSUFBMkUsUUFBM0VBLElBQTJFO0FBQUEsd0JBQXJFQyxLQUFxRTtBQUFBLE1BQXJFQSxLQUFxRSwyQkFBN0QsQ0FBQyxDQUE0RDtBQUFBLE1BQXpEQyxrQkFBeUQsUUFBekRBLGtCQUF5RDtBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSw2QkFBN0JDLFVBQTZCO0FBQUEsTUFBN0JBLFVBQTZCLGdDQUFoQixTQUFnQjs7QUFBQSxrQkFDakVDLHNEQUFRLENBQUMsS0FBRCxDQUR5RDtBQUFBLE1BQ3hGQyxPQUR3RjtBQUFBLE1BQy9FQyxVQUQrRTs7QUFFL0YsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qk4sc0JBQWtCLENBQUNELEtBQUQsQ0FBbEIsQ0FEdUIsQ0FFdkI7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUEsY0FDR0YsSUFBSSxnQkFDSCxxRUFBQyx5REFBRDtBQUNFLGNBQVEsRUFBQyxVQURYO0FBRUUsa0JBQVksRUFBRTtBQUFBLGVBQU1RLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsT0FGaEI7QUFHRSxrQkFBWSxFQUFFO0FBQUEsZUFBTUUsVUFBVSxDQUFDO0FBQUEsaUJBQU1GLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsU0FBRCxFQUEwQixJQUExQixDQUFoQjtBQUFBLE9BSGhCO0FBQUEsOEJBS0UscUVBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUVSLElBQVo7QUFBa0Isa0JBQVUsTUFBNUI7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUNFLGlCQUFPLEVBQUMsT0FEVjtBQUVFLFdBQUMsRUFBQyxNQUZKO0FBR0UsaUJBQU8sRUFBQyxRQUhWO0FBSUUsaUJBQU8sRUFBQyxJQUpWO0FBS0UsWUFBRSxFQUFDLFVBTEw7QUFNRSxnQkFBTSxFQUFFO0FBQUVXLDJCQUFlLEVBQUUsVUFBbkI7QUFBK0JDLHFCQUFTLEVBQUU7QUFBMUMsV0FOVjtBQUFBLGtDQVFFLHFFQUFDLHVEQUFEO0FBQ0UsZUFBRyxZQUFLWixJQUFMLGdCQURMO0FBRUUsZ0JBQUksRUFBRUssVUFGUjtBQUdFLG1CQUFPLEVBQUMsTUFIVjtBQUlFLGNBQUUsRUFBRSxDQUpOO0FBS0UsYUFBQyxFQUFDLEtBTEo7QUFNRSxjQUFFLEVBQUMsVUFOTDtBQU9FLHFCQUFTLEVBQUVFLE9BQU8sR0FBRyxnQkFBSCxHQUFzQjtBQVAxQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBaUJFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQW1CLG9CQUFRLEVBQUMsTUFBNUI7QUFBbUMscUJBQVMsRUFBQyxRQUE3QztBQUFzRCx1QkFBVyxNQUFqRTtBQUFBLHNCQUNHTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQTRCRSxxRUFBQyw4REFBRDtBQUNFLFNBQUMsRUFBRSxDQURMO0FBRUUsU0FBQyxFQUFFLENBRkw7QUFHRSxTQUFDLEVBQUMsS0FISjtBQUlFLGFBQUssRUFBQyxVQUpSO0FBS0UsZ0JBQVEsRUFBQyxVQUxYO0FBTUUsV0FBRyxFQUFDLEtBTk47QUFPRSxhQUFLLEVBQUMsS0FQUjtBQVFFLGVBQU8sRUFBRVEsVUFSWDtBQVNFLGNBQU0sRUFBQyxTQVRUO0FBVUUsYUFBSyxFQUFFO0FBQUVJLGlCQUFPLEVBQUVOLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBL0IsU0FWVDtBQVdFLGNBQU0sRUFBRTtBQUFFTyxlQUFLLEVBQUU7QUFBVCxTQVhWO0FBWUUsY0FBTSxFQUFDO0FBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkE2Q0gscUVBQUMseURBQUQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFRLGVBQU8sRUFBRUwsVUFBakI7QUFBNkIsZUFBTyxFQUFDLE9BQXJDO0FBQTZDLFVBQUUsRUFBQyxVQUFoRDtBQUEyRCxTQUFDLEVBQUMsTUFBN0Q7QUFBb0UsZUFBTyxFQUFDLFFBQTVFO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFtQixtQkFBUyxFQUFDLFFBQTdCO0FBQXNDLHFCQUFXLE1BQWpEO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTlDSixtQkFERjtBQXlERCxDQS9ERDs7R0FBTVYsSTs7S0FBQUEsSTtBQWlFU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFRleHQsIENlbnRlciwgV3JhcEl0ZW0sIEF2YXRhciwgQnV0dG9uLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQWRkSWNvbiwgSGFtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IENhcmQgPSAoeyBocmVmLCB0ZXh0LCBpbmRleCA9IC0xLCBzZXRPcGVuZWRDYXJkSW5kZXgsIG9uT3BlbiwgYXZhdGFyTmFtZSA9ICdhbiBpY29uJyB9KSA9PiB7XG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW5lZENhcmRJbmRleChpbmRleClcbiAgICAvLyBxdWV1ZU1pY3JvdGFzaygoKSA9PiBvbk9wZW4oKSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aHJlZiA/IChcbiAgICAgICAgPFdyYXBJdGVtXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKSwgMzAwMCl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBpc0V4dGVybmFsPlxuICAgICAgICAgICAgPENlbnRlclxuICAgICAgICAgICAgICBib3hTaXplPVwiMTIwcHhcIlxuICAgICAgICAgICAgICBkPVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICAgICAgICBiZz1cImdyYXkuNzAwXCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXkuNjAwJywgYm94U2hhZG93OiAnMCAwcHggOHB4IGJsYWNrJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtocmVmfWZhdmljb24uaWNvYH1cbiAgICAgICAgICAgICAgICBuYW1lPXthdmF0YXJOYW1lfVxuICAgICAgICAgICAgICAgIGJveFNpemU9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICBteT17Mn1cbiAgICAgICAgICAgICAgICBwPVwiM3B4XCJcbiAgICAgICAgICAgICAgICBiZz1cImdyYXkuNDAwXCJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9e2hvdmVyZWQgPyAnMCAwIDIwcHggYmxhY2snIDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0IG1heFc9XCIxMDBweFwiIGZvbnRTaXplPVwiMTRweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGlzVHJ1bmNhdGVkPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEhhbWJ1cmdlckljb25cbiAgICAgICAgICAgIHc9ezR9XG4gICAgICAgICAgICBoPXs0fVxuICAgICAgICAgICAgcD1cIjNweFwiXG4gICAgICAgICAgICBjb2xvcj1cImdyYXkuNTAwXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPVwiNXB4XCJcbiAgICAgICAgICAgIHJpZ2h0PVwiNXB4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhvdmVyZWQgPyAnYmxvY2snIDogJ25vbmUnIH19XG4gICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgIHpJbmRleD1cIjEwMDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICApIDogKFxuICAgICAgICA8V3JhcEl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVufSBib3hTaXplPVwiMTIwcHhcIiBiZz1cImdyYXkuNjAwXCIgZD1cImZsZXhcIiBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})