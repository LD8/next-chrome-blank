webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _AddOrEditModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddOrEditModal */ \"./components/AddOrEditModal.js\");\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    setOpenedCardIndex(index);\n    onOpen();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      position: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        href: href,\n        isExternal: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n          onMouseEnter: function onMouseEnter() {\n            return setHovered(true);\n          },\n          onMouseLeave: function onMouseLeave() {\n            return setTimeout(function () {\n              return setHovered(false);\n            }, 3000);\n          },\n          boxSize: \"120px\",\n          bg: \"gray.700\",\n          d: \"flex\",\n          flexDir: \"column\",\n          rounded: \"md\",\n          _hover: {\n            backgroundColor: 'gray.600',\n            boxShadow: '0 0px 8px black'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n            src: \"\".concat(href, \"favicon.ico\"),\n            name: avatarName,\n            boxSize: \"50px\",\n            my: 2,\n            p: \"3px\",\n            bg: \"gray.400\",\n            boxShadow: hovered ? '0 0 20px black' : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n            maxW: \"100px\",\n            fontSize: \"14px\",\n            textAlign: \"center\",\n            isTruncated: true,\n            children: text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n        w: 4,\n        h: 4,\n        p: \"3px\",\n        color: \"gray.500\",\n        position: \"absolute\",\n        top: \"5px\",\n        right: \"5px\",\n        onClick: handleOpen,\n        cursor: \"pointer\",\n        style: {\n          display: hovered ? 'block' : 'none'\n        },\n        _hover: {\n          color: 'white'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        onClick: handleOpen,\n        boxSize: \"120px\",\n        bg: \"gray.600\",\n        d: \"flex\",\n        flexDir: \"column\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n          maxW: \"100px\",\n          textAlign: \"center\",\n          isTruncated: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRjtBQUFBOztBQUFBLE1BQWpGQyxJQUFpRixRQUFqRkEsSUFBaUY7QUFBQSxNQUEzRUMsSUFBMkUsUUFBM0VBLElBQTJFO0FBQUEsd0JBQXJFQyxLQUFxRTtBQUFBLE1BQXJFQSxLQUFxRSwyQkFBN0QsQ0FBQyxDQUE0RDtBQUFBLE1BQXpEQyxrQkFBeUQsUUFBekRBLGtCQUF5RDtBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSw2QkFBN0JDLFVBQTZCO0FBQUEsTUFBN0JBLFVBQTZCLGdDQUFoQixTQUFnQjs7QUFBQSxrQkFDakVDLHNEQUFRLENBQUMsS0FBRCxDQUR5RDtBQUFBLE1BQ3hGQyxPQUR3RjtBQUFBLE1BQy9FQyxVQUQrRTs7QUFFL0YsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qk4sc0JBQWtCLENBQUNELEtBQUQsQ0FBbEI7QUFDQUUsVUFBTTtBQUNQLEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHSixJQUFJLGdCQUNILHFFQUFDLHlEQUFEO0FBQVUsY0FBUSxFQUFDLFVBQW5CO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUVBLElBQVo7QUFBa0Isa0JBQVUsTUFBNUI7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUNFLHNCQUFZLEVBQUU7QUFBQSxtQkFBTVEsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxXQURoQjtBQUVFLHNCQUFZLEVBQUU7QUFBQSxtQkFBTUUsVUFBVSxDQUFDO0FBQUEscUJBQU1GLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsYUFBRCxFQUEwQixJQUExQixDQUFoQjtBQUFBLFdBRmhCO0FBR0UsaUJBQU8sRUFBQyxPQUhWO0FBSUUsWUFBRSxFQUFDLFVBSkw7QUFLRSxXQUFDLEVBQUMsTUFMSjtBQU1FLGlCQUFPLEVBQUMsUUFOVjtBQU9FLGlCQUFPLEVBQUMsSUFQVjtBQVFFLGdCQUFNLEVBQUU7QUFBRUcsMkJBQWUsRUFBRSxVQUFuQjtBQUErQkMscUJBQVMsRUFBRTtBQUExQyxXQVJWO0FBQUEsa0NBVUUscUVBQUMsdURBQUQ7QUFDRSxlQUFHLFlBQUtaLElBQUwsZ0JBREw7QUFFRSxnQkFBSSxFQUFFSyxVQUZSO0FBR0UsbUJBQU8sRUFBQyxNQUhWO0FBSUUsY0FBRSxFQUFFLENBSk47QUFLRSxhQUFDLEVBQUMsS0FMSjtBQU1FLGNBQUUsRUFBQyxVQU5MO0FBT0UscUJBQVMsRUFBRUUsT0FBTyxHQUFHLGdCQUFILEdBQXNCO0FBUDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFtQkUscUVBQUMscURBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBbUIsb0JBQVEsRUFBQyxNQUE1QjtBQUFtQyxxQkFBUyxFQUFDLFFBQTdDO0FBQXNELHVCQUFXLE1BQWpFO0FBQUEsc0JBQ0dOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBMEJFLHFFQUFDLDhEQUFEO0FBQ0UsU0FBQyxFQUFFLENBREw7QUFFRSxTQUFDLEVBQUUsQ0FGTDtBQUdFLFNBQUMsRUFBQyxLQUhKO0FBSUUsYUFBSyxFQUFDLFVBSlI7QUFLRSxnQkFBUSxFQUFDLFVBTFg7QUFNRSxXQUFHLEVBQUMsS0FOTjtBQU9FLGFBQUssRUFBQyxLQVBSO0FBUUUsZUFBTyxFQUFFUSxVQVJYO0FBU0UsY0FBTSxFQUFDLFNBVFQ7QUFVRSxhQUFLLEVBQUU7QUFBRUksaUJBQU8sRUFBRU4sT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUEvQixTQVZUO0FBV0UsY0FBTSxFQUFFO0FBQUVPLGVBQUssRUFBRTtBQUFUO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkEwQ0gscUVBQUMseURBQUQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFRLGVBQU8sRUFBRUwsVUFBakI7QUFBNkIsZUFBTyxFQUFDLE9BQXJDO0FBQTZDLFVBQUUsRUFBQyxVQUFoRDtBQUEyRCxTQUFDLEVBQUMsTUFBN0Q7QUFBb0UsZUFBTyxFQUFDLFFBQTVFO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFtQixtQkFBUyxFQUFDLFFBQTdCO0FBQXNDLHFCQUFXLE1BQWpEO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNDSixtQkFERjtBQXNERCxDQTVERDs7R0FBTVYsSTs7S0FBQUEsSTtBQThEU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFRleHQsIENlbnRlciwgV3JhcEl0ZW0sIEF2YXRhciwgQnV0dG9uLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEFkZEljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IEFkZE9yRWRpdE1vZGFsIGZyb20gJy4vQWRkT3JFZGl0TW9kYWwnXG5cbmNvbnN0IENhcmQgPSAoeyBocmVmLCB0ZXh0LCBpbmRleCA9IC0xLCBzZXRPcGVuZWRDYXJkSW5kZXgsIG9uT3BlbiwgYXZhdGFyTmFtZSA9ICdhbiBpY29uJyB9KSA9PiB7XG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW5lZENhcmRJbmRleChpbmRleClcbiAgICBvbk9wZW4oKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtocmVmID8gKFxuICAgICAgICA8V3JhcEl0ZW0gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGlzRXh0ZXJuYWw+XG4gICAgICAgICAgICA8Q2VudGVyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldEhvdmVyZWQoZmFsc2UpLCAzMDAwKX1cbiAgICAgICAgICAgICAgYm94U2l6ZT1cIjEyMHB4XCJcbiAgICAgICAgICAgICAgYmc9XCJncmF5LjcwMFwiXG4gICAgICAgICAgICAgIGQ9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5LjYwMCcsIGJveFNoYWRvdzogJzAgMHB4IDhweCBibGFjaycgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgIHNyYz17YCR7aHJlZn1mYXZpY29uLmljb2B9XG4gICAgICAgICAgICAgICAgbmFtZT17YXZhdGFyTmFtZX1cbiAgICAgICAgICAgICAgICBib3hTaXplPVwiNTBweFwiXG4gICAgICAgICAgICAgICAgbXk9ezJ9XG4gICAgICAgICAgICAgICAgcD1cIjNweFwiXG4gICAgICAgICAgICAgICAgYmc9XCJncmF5LjQwMFwiXG4gICAgICAgICAgICAgICAgYm94U2hhZG93PXtob3ZlcmVkID8gJzAgMCAyMHB4IGJsYWNrJyA6ICcnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiBmb250U2l6ZT1cIjE0cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxIYW1idXJnZXJJY29uXG4gICAgICAgICAgICB3PXs0fVxuICAgICAgICAgICAgaD17NH1cbiAgICAgICAgICAgIHA9XCIzcHhcIlxuICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgIHRvcD1cIjVweFwiXG4gICAgICAgICAgICByaWdodD1cIjVweFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVufVxuICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBob3ZlcmVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxXcmFwSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW59IGJveFNpemU9XCIxMjBweFwiIGJnPVwiZ3JheS42MDBcIiBkPVwiZmxleFwiIGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0IG1heFc9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGlzVHJ1bmNhdGVkPlxuICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})