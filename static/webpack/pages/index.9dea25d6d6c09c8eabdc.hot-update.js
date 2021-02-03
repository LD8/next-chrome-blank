webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    setOpenedCardIndex(index); // queueMicrotask(() => onOpen())\n  };\n\n  return href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkBox\"], {\n      as: \"article\",\n      maxW: \"sm\",\n      position: \"relative\",\n      onMouseEnter: function onMouseEnter() {\n        return setHovered(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setTimeout(function () {\n          return setHovered(false);\n        }, 3000);\n      },\n      boxSize: \"120px\",\n      d: \"flex\",\n      flexDir: \"column\",\n      rounded: \"md\",\n      bg: \"gray.700\",\n      _hover: {\n        backgroundColor: 'gray.600',\n        boxShadow: '0 0px 8px black'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        src: \"\".concat(href, \"favicon.ico\"),\n        name: avatarName,\n        boxSize: \"50px\",\n        my: 2,\n        p: \"3px\",\n        bg: \"gray.400\",\n        boxShadow: hovered ? '0 0 20px black' : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        maxW: \"100px\",\n        fontSize: \"14px\",\n        textAlign: \"center\",\n        isTruncated: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkOverlay\"], {\n          href: href,\n          isExternal: true,\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n        w: 4,\n        h: 4,\n        p: \"3px\",\n        color: \"gray.500\",\n        position: \"absolute\",\n        top: \"5px\",\n        right: \"5px\",\n        onClick: handleOpen,\n        cursor: \"pointer\",\n        style: {\n          display: hovered ? 'block' : 'none'\n        },\n        _hover: {\n          color: 'white'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: handleOpen,\n      boxSize: \"120px\",\n      bg: \"gray.600\",\n      d: \"flex\",\n      flexDir: \"column\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        maxW: \"100px\",\n        textAlign: \"center\",\n        isTruncated: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9GO0FBQUE7O0FBQUEsTUFBakZDLElBQWlGLFFBQWpGQSxJQUFpRjtBQUFBLE1BQTNFQyxJQUEyRSxRQUEzRUEsSUFBMkU7QUFBQSx3QkFBckVDLEtBQXFFO0FBQUEsTUFBckVBLEtBQXFFLDJCQUE3RCxDQUFDLENBQTREO0FBQUEsTUFBekRDLGtCQUF5RCxRQUF6REEsa0JBQXlEO0FBQUEsTUFBckNDLE1BQXFDLFFBQXJDQSxNQUFxQztBQUFBLDZCQUE3QkMsVUFBNkI7QUFBQSxNQUE3QkEsVUFBNkIsZ0NBQWhCLFNBQWdCOztBQUFBLGtCQUNqRUMsc0RBQVEsQ0FBQyxLQUFELENBRHlEO0FBQUEsTUFDeEZDLE9BRHdGO0FBQUEsTUFDL0VDLFVBRCtFOztBQUUvRixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCTixzQkFBa0IsQ0FBQ0QsS0FBRCxDQUFsQixDQUR1QixDQUV2QjtBQUNELEdBSEQ7O0FBSUEsU0FBT0YsSUFBSSxnQkFDVCxxRUFBQyx5REFBRDtBQUFBLDJCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsUUFBRSxFQUFDLFNBREw7QUFFRSxVQUFJLEVBQUMsSUFGUDtBQUdFLGNBQVEsRUFBQyxVQUhYO0FBSUUsa0JBQVksRUFBRTtBQUFBLGVBQU1RLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsT0FKaEI7QUFLRSxrQkFBWSxFQUFFO0FBQUEsZUFBTUUsVUFBVSxDQUFDO0FBQUEsaUJBQU1GLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsU0FBRCxFQUEwQixJQUExQixDQUFoQjtBQUFBLE9BTGhCO0FBTUUsYUFBTyxFQUFDLE9BTlY7QUFPRSxPQUFDLEVBQUMsTUFQSjtBQVFFLGFBQU8sRUFBQyxRQVJWO0FBU0UsYUFBTyxFQUFDLElBVFY7QUFVRSxRQUFFLEVBQUMsVUFWTDtBQVdFLFlBQU0sRUFBRTtBQUFFRyx1QkFBZSxFQUFFLFVBQW5CO0FBQStCQyxpQkFBUyxFQUFFO0FBQTFDLE9BWFY7QUFBQSw4QkFhRSxxRUFBQyx1REFBRDtBQUNFLFdBQUcsWUFBS1osSUFBTCxnQkFETDtBQUVFLFlBQUksRUFBRUssVUFGUjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsVUFBRSxFQUFFLENBSk47QUFLRSxTQUFDLEVBQUMsS0FMSjtBQU1FLFVBQUUsRUFBQyxVQU5MO0FBT0UsaUJBQVMsRUFBRUUsT0FBTyxHQUFHLGdCQUFILEdBQXNCO0FBUDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQXNCRSxxRUFBQyxxREFBRDtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLGdCQUFRLEVBQUMsTUFBNUI7QUFBbUMsaUJBQVMsRUFBQyxRQUE3QztBQUFzRCxtQkFBVyxNQUFqRTtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQWEsY0FBSSxFQUFFUCxJQUFuQjtBQUF5QixvQkFBVSxNQUFuQztBQUFBLG9CQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLGVBNEJFLHFFQUFDLDhEQUFEO0FBQ0UsU0FBQyxFQUFFLENBREw7QUFFRSxTQUFDLEVBQUUsQ0FGTDtBQUdFLFNBQUMsRUFBQyxLQUhKO0FBSUUsYUFBSyxFQUFDLFVBSlI7QUFLRSxnQkFBUSxFQUFDLFVBTFg7QUFNRSxXQUFHLEVBQUMsS0FOTjtBQU9FLGFBQUssRUFBQyxLQVBSO0FBUUUsZUFBTyxFQUFFUSxVQVJYO0FBU0UsY0FBTSxFQUFDLFNBVFQ7QUFVRSxhQUFLLEVBQUU7QUFBRUksaUJBQU8sRUFBRU4sT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUEvQixTQVZUO0FBV0UsY0FBTSxFQUFFO0FBQUVPLGVBQUssRUFBRTtBQUFUO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFMsZ0JBOENULHFFQUFDLHlEQUFEO0FBQUEsMkJBQ0UscUVBQUMsdURBQUQ7QUFBUSxhQUFPLEVBQUVMLFVBQWpCO0FBQTZCLGFBQU8sRUFBQyxPQUFyQztBQUE2QyxRQUFFLEVBQUMsVUFBaEQ7QUFBMkQsT0FBQyxFQUFDLE1BQTdEO0FBQW9FLGFBQU8sRUFBQyxRQUE1RTtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBbUIsaUJBQVMsRUFBQyxRQUE3QjtBQUFzQyxtQkFBVyxNQUFqRDtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E5Q0Y7QUFzREQsQ0E1REQ7O0dBQU1WLEk7O0tBQUFBLEk7QUE4RFNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCBUZXh0LCBDZW50ZXIsIFdyYXBJdGVtLCBBdmF0YXIsIEJ1dHRvbiwgTGlua0JveCwgTGlua092ZXJsYXkgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQWRkSWNvbiwgSGFtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IENhcmQgPSAoeyBocmVmLCB0ZXh0LCBpbmRleCA9IC0xLCBzZXRPcGVuZWRDYXJkSW5kZXgsIG9uT3BlbiwgYXZhdGFyTmFtZSA9ICdhbiBpY29uJyB9KSA9PiB7XG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW5lZENhcmRJbmRleChpbmRleClcbiAgICAvLyBxdWV1ZU1pY3JvdGFzaygoKSA9PiBvbk9wZW4oKSlcbiAgfVxuICByZXR1cm4gaHJlZiA/IChcbiAgICA8V3JhcEl0ZW0+XG4gICAgICA8TGlua0JveFxuICAgICAgICBhcz1cImFydGljbGVcIlxuICAgICAgICBtYXhXPVwic21cIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0SG92ZXJlZChmYWxzZSksIDMwMDApfVxuICAgICAgICBib3hTaXplPVwiMTIwcHhcIlxuICAgICAgICBkPVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICBiZz1cImdyYXkuNzAwXCJcbiAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXkuNjAwJywgYm94U2hhZG93OiAnMCAwcHggOHB4IGJsYWNrJyB9fVxuICAgICAgPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgc3JjPXtgJHtocmVmfWZhdmljb24uaWNvYH1cbiAgICAgICAgICBuYW1lPXthdmF0YXJOYW1lfVxuICAgICAgICAgIGJveFNpemU9XCI1MHB4XCJcbiAgICAgICAgICBteT17Mn1cbiAgICAgICAgICBwPVwiM3B4XCJcbiAgICAgICAgICBiZz1cImdyYXkuNDAwXCJcbiAgICAgICAgICBib3hTaGFkb3c9e2hvdmVyZWQgPyAnMCAwIDIwcHggYmxhY2snIDogJyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0IG1heFc9XCIxMDBweFwiIGZvbnRTaXplPVwiMTRweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGlzVHJ1bmNhdGVkPlxuICAgICAgICAgIDxMaW5rT3ZlcmxheSBocmVmPXtocmVmfSBpc0V4dGVybmFsPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgPC9MaW5rT3ZlcmxheT5cbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxIYW1idXJnZXJJY29uXG4gICAgICAgICAgdz17NH1cbiAgICAgICAgICBoPXs0fVxuICAgICAgICAgIHA9XCIzcHhcIlxuICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD1cIjVweFwiXG4gICAgICAgICAgcmlnaHQ9XCI1cHhcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaG92ZXJlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTGlua0JveD5cbiAgICA8L1dyYXBJdGVtPlxuICApIDogKFxuICAgIDxXcmFwSXRlbT5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlT3Blbn0gYm94U2l6ZT1cIjEyMHB4XCIgYmc9XCJncmF5LjYwMFwiIGQ9XCJmbGV4XCIgZmxleERpcj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1dyYXBJdGVtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})