webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    setOpenedCardIndex(index); // queueMicrotask(() => onOpen())\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      position: \"relative\",\n      onMouseEnter: function onMouseEnter() {\n        return setHovered(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setTimeout(function () {\n          return setHovered(false);\n        }, 3000);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkBox\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n          boxSize: \"120px\",\n          d: \"flex\",\n          flexDir: \"column\",\n          rounded: \"md\",\n          bg: \"gray.700\",\n          _hover: {\n            backgroundColor: 'gray.600',\n            boxShadow: '0 0px 8px black'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n            src: \"\".concat(href, \"favicon.ico\"),\n            name: avatarName,\n            boxSize: \"50px\",\n            my: 2,\n            p: \"3px\",\n            bg: \"gray.400\",\n            boxShadow: hovered ? '0 0 20px black' : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n            maxW: \"100px\",\n            fontSize: \"14px\",\n            textAlign: \"center\",\n            isTruncated: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkOverlay\"], {\n              href: href,\n              isExternal: true,\n              children: text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n          w: 4,\n          h: 4,\n          p: \"3px\",\n          color: \"gray.500\",\n          position: \"absolute\",\n          top: \"5px\",\n          right: \"5px\",\n          onClick: handleOpen,\n          cursor: \"pointer\",\n          style: {\n            display: hovered ? 'block' : 'none'\n          },\n          _hover: {\n            color: 'white'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        onClick: handleOpen,\n        boxSize: \"120px\",\n        bg: \"gray.600\",\n        d: \"flex\",\n        flexDir: \"column\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n          maxW: \"100px\",\n          textAlign: \"center\",\n          isTruncated: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRjtBQUFBOztBQUFBLE1BQWpGQyxJQUFpRixRQUFqRkEsSUFBaUY7QUFBQSxNQUEzRUMsSUFBMkUsUUFBM0VBLElBQTJFO0FBQUEsd0JBQXJFQyxLQUFxRTtBQUFBLE1BQXJFQSxLQUFxRSwyQkFBN0QsQ0FBQyxDQUE0RDtBQUFBLE1BQXpEQyxrQkFBeUQsUUFBekRBLGtCQUF5RDtBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSw2QkFBN0JDLFVBQTZCO0FBQUEsTUFBN0JBLFVBQTZCLGdDQUFoQixTQUFnQjs7QUFBQSxrQkFDakVDLHNEQUFRLENBQUMsS0FBRCxDQUR5RDtBQUFBLE1BQ3hGQyxPQUR3RjtBQUFBLE1BQy9FQyxVQUQrRTs7QUFFL0YsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qk4sc0JBQWtCLENBQUNELEtBQUQsQ0FBbEIsQ0FEdUIsQ0FFdkI7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUEsY0FDR0YsSUFBSSxnQkFDSCxxRUFBQyx5REFBRDtBQUNFLGNBQVEsRUFBQyxVQURYO0FBRUUsa0JBQVksRUFBRTtBQUFBLGVBQU1RLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsT0FGaEI7QUFHRSxrQkFBWSxFQUFFO0FBQUEsZUFBTUUsVUFBVSxDQUFDO0FBQUEsaUJBQU1GLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsU0FBRCxFQUEwQixJQUExQixDQUFoQjtBQUFBLE9BSGhCO0FBQUEsNkJBS0UscUVBQUMsd0RBQUQ7QUFBQSxnQ0FDRSxxRUFBQyx1REFBRDtBQUNFLGlCQUFPLEVBQUMsT0FEVjtBQUVFLFdBQUMsRUFBQyxNQUZKO0FBR0UsaUJBQU8sRUFBQyxRQUhWO0FBSUUsaUJBQU8sRUFBQyxJQUpWO0FBS0UsWUFBRSxFQUFDLFVBTEw7QUFNRSxnQkFBTSxFQUFFO0FBQUVHLDJCQUFlLEVBQUUsVUFBbkI7QUFBK0JDLHFCQUFTLEVBQUU7QUFBMUMsV0FOVjtBQUFBLGtDQVFFLHFFQUFDLHVEQUFEO0FBQ0UsZUFBRyxZQUFLWixJQUFMLGdCQURMO0FBRUUsZ0JBQUksRUFBRUssVUFGUjtBQUdFLG1CQUFPLEVBQUMsTUFIVjtBQUlFLGNBQUUsRUFBRSxDQUpOO0FBS0UsYUFBQyxFQUFDLEtBTEo7QUFNRSxjQUFFLEVBQUMsVUFOTDtBQU9FLHFCQUFTLEVBQUVFLE9BQU8sR0FBRyxnQkFBSCxHQUFzQjtBQVAxQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBaUJFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQW1CLG9CQUFRLEVBQUMsTUFBNUI7QUFBbUMscUJBQVMsRUFBQyxRQUE3QztBQUFzRCx1QkFBVyxNQUFqRTtBQUFBLG1DQUNFLHFFQUFDLDREQUFEO0FBQWEsa0JBQUksRUFBRVAsSUFBbkI7QUFBeUIsd0JBQVUsTUFBbkM7QUFBQSx3QkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBd0JFLHFFQUFDLDhEQUFEO0FBQ0UsV0FBQyxFQUFFLENBREw7QUFFRSxXQUFDLEVBQUUsQ0FGTDtBQUdFLFdBQUMsRUFBQyxLQUhKO0FBSUUsZUFBSyxFQUFDLFVBSlI7QUFLRSxrQkFBUSxFQUFDLFVBTFg7QUFNRSxhQUFHLEVBQUMsS0FOTjtBQU9FLGVBQUssRUFBQyxLQVBSO0FBUUUsaUJBQU8sRUFBRVEsVUFSWDtBQVNFLGdCQUFNLEVBQUMsU0FUVDtBQVVFLGVBQUssRUFBRTtBQUFFSSxtQkFBTyxFQUFFTixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQS9CLFdBVlQ7QUFXRSxnQkFBTSxFQUFFO0FBQUVPLGlCQUFLLEVBQUU7QUFBVDtBQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkE4Q0gscUVBQUMseURBQUQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFRLGVBQU8sRUFBRUwsVUFBakI7QUFBNkIsZUFBTyxFQUFDLE9BQXJDO0FBQTZDLFVBQUUsRUFBQyxVQUFoRDtBQUEyRCxTQUFDLEVBQUMsTUFBN0Q7QUFBb0UsZUFBTyxFQUFDLFFBQTVFO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFtQixtQkFBUyxFQUFDLFFBQTdCO0FBQXNDLHFCQUFXLE1BQWpEO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9DSixtQkFERjtBQTBERCxDQWhFRDs7R0FBTVYsSTs7S0FBQUEsSTtBQWtFU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFRleHQsIENlbnRlciwgV3JhcEl0ZW0sIEF2YXRhciwgQnV0dG9uLCBMaW5rQm94LCBMaW5rT3ZlcmxheSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBBZGRJY29uLCBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgQ2FyZCA9ICh7IGhyZWYsIHRleHQsIGluZGV4ID0gLTEsIHNldE9wZW5lZENhcmRJbmRleCwgb25PcGVuLCBhdmF0YXJOYW1lID0gJ2FuIGljb24nIH0pID0+IHtcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0T3BlbmVkQ2FyZEluZGV4KGluZGV4KVxuICAgIC8vIHF1ZXVlTWljcm90YXNrKCgpID0+IG9uT3BlbigpKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtocmVmID8gKFxuICAgICAgICA8V3JhcEl0ZW1cbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldEhvdmVyZWQoZmFsc2UpLCAzMDAwKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rQm94PlxuICAgICAgICAgICAgPENlbnRlclxuICAgICAgICAgICAgICBib3hTaXplPVwiMTIwcHhcIlxuICAgICAgICAgICAgICBkPVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICAgICAgICBiZz1cImdyYXkuNzAwXCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXkuNjAwJywgYm94U2hhZG93OiAnMCAwcHggOHB4IGJsYWNrJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtocmVmfWZhdmljb24uaWNvYH1cbiAgICAgICAgICAgICAgICBuYW1lPXthdmF0YXJOYW1lfVxuICAgICAgICAgICAgICAgIGJveFNpemU9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICBteT17Mn1cbiAgICAgICAgICAgICAgICBwPVwiM3B4XCJcbiAgICAgICAgICAgICAgICBiZz1cImdyYXkuNDAwXCJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9e2hvdmVyZWQgPyAnMCAwIDIwcHggYmxhY2snIDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0IG1heFc9XCIxMDBweFwiIGZvbnRTaXplPVwiMTRweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGlzVHJ1bmNhdGVkPlxuICAgICAgICAgICAgICAgIDxMaW5rT3ZlcmxheSBocmVmPXtocmVmfSBpc0V4dGVybmFsPlxuICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgICAgICB3PXs0fVxuICAgICAgICAgICAgICBoPXs0fVxuICAgICAgICAgICAgICBwPVwiM3B4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICB0b3A9XCI1cHhcIlxuICAgICAgICAgICAgICByaWdodD1cIjVweFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBob3ZlcmVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rQm94PlxuICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgKSA6IChcbiAgICAgICAgPFdyYXBJdGVtPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlT3Blbn0gYm94U2l6ZT1cIjEyMHB4XCIgYmc9XCJncmF5LjYwMFwiIGQ9XCJmbGV4XCIgZmxleERpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgbWF4Vz1cIjEwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgaXNUcnVuY2F0ZWQ+XG4gICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})