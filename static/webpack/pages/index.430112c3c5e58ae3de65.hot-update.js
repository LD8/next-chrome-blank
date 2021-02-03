webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    setOpenedCardIndex(index); // queueMicrotask(() => onOpen())\n  };\n\n  return href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkBox\"], {\n      as: \"section\",\n      boxSize: \"120px\",\n      maxW: \"sm\",\n      position: \"relative\",\n      d: \"flex\",\n      flexDir: \"column\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      rounded: \"md\",\n      bg: \"gray.700\",\n      _hover: {\n        backgroundColor: 'gray.600',\n        boxShadow: '0 0px 8px black'\n      },\n      onMouseEnter: function onMouseEnter() {\n        return setHovered(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setTimeout(function () {\n          return setHovered(false);\n        }, 3000);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        src: \"\".concat(href, \"favicon.ico\"),\n        name: avatarName,\n        boxSize: \"50px\",\n        my: 2,\n        p: \"3px\",\n        bg: \"gray.400\",\n        boxShadow: hovered ? '0 0 20px black' : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        maxW: \"100px\",\n        fontSize: \"14px\",\n        textAlign: \"center\",\n        isTruncated: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkOverlay\"], {\n          href: href,\n          isExternal: true,\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n        w: 4,\n        h: 4,\n        p: \"3px\",\n        color: \"gray.500\",\n        position: \"absolute\",\n        top: \"5px\",\n        right: \"5px\",\n        onClick: handleOpen,\n        cursor: \"pointer\",\n        style: {\n          display: hovered ? 'block' : 'none'\n        },\n        _hover: {\n          color: 'white'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: handleOpen,\n      boxSize: \"120px\",\n      bg: \"gray.600\",\n      d: \"flex\",\n      flexDir: \"column\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        maxW: \"100px\",\n        textAlign: \"center\",\n        isTruncated: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9GO0FBQUE7O0FBQUEsTUFBakZDLElBQWlGLFFBQWpGQSxJQUFpRjtBQUFBLE1BQTNFQyxJQUEyRSxRQUEzRUEsSUFBMkU7QUFBQSx3QkFBckVDLEtBQXFFO0FBQUEsTUFBckVBLEtBQXFFLDJCQUE3RCxDQUFDLENBQTREO0FBQUEsTUFBekRDLGtCQUF5RCxRQUF6REEsa0JBQXlEO0FBQUEsTUFBckNDLE1BQXFDLFFBQXJDQSxNQUFxQztBQUFBLDZCQUE3QkMsVUFBNkI7QUFBQSxNQUE3QkEsVUFBNkIsZ0NBQWhCLFNBQWdCOztBQUFBLGtCQUNqRUMsc0RBQVEsQ0FBQyxLQUFELENBRHlEO0FBQUEsTUFDeEZDLE9BRHdGO0FBQUEsTUFDL0VDLFVBRCtFOztBQUUvRixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCTixzQkFBa0IsQ0FBQ0QsS0FBRCxDQUFsQixDQUR1QixDQUV2QjtBQUNELEdBSEQ7O0FBSUEsU0FBT0YsSUFBSSxnQkFDVCxxRUFBQyx5REFBRDtBQUFBLDJCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsUUFBRSxFQUFDLFNBREw7QUFFRSxhQUFPLEVBQUMsT0FGVjtBQUdFLFVBQUksRUFBQyxJQUhQO0FBSUUsY0FBUSxFQUFDLFVBSlg7QUFLRSxPQUFDLEVBQUMsTUFMSjtBQU1FLGFBQU8sRUFBQyxRQU5WO0FBT0UsZ0JBQVUsRUFBQyxRQVBiO0FBUUUsb0JBQWMsRUFBQyxRQVJqQjtBQVNFLGFBQU8sRUFBQyxJQVRWO0FBVUUsUUFBRSxFQUFDLFVBVkw7QUFXRSxZQUFNLEVBQUU7QUFBRVUsdUJBQWUsRUFBRSxVQUFuQjtBQUErQkMsaUJBQVMsRUFBRTtBQUExQyxPQVhWO0FBWUUsa0JBQVksRUFBRTtBQUFBLGVBQU1ILFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsT0FaaEI7QUFhRSxrQkFBWSxFQUFFO0FBQUEsZUFBTUksVUFBVSxDQUFDO0FBQUEsaUJBQU1KLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsU0FBRCxFQUEwQixJQUExQixDQUFoQjtBQUFBLE9BYmhCO0FBQUEsOEJBZUUscUVBQUMsdURBQUQ7QUFDRSxXQUFHLFlBQUtSLElBQUwsZ0JBREw7QUFFRSxZQUFJLEVBQUVLLFVBRlI7QUFHRSxlQUFPLEVBQUMsTUFIVjtBQUlFLFVBQUUsRUFBRSxDQUpOO0FBS0UsU0FBQyxFQUFDLEtBTEo7QUFNRSxVQUFFLEVBQUMsVUFOTDtBQU9FLGlCQUFTLEVBQUVFLE9BQU8sR0FBRyxnQkFBSCxHQUFzQjtBQVAxQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUF3QkUscUVBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFtQixnQkFBUSxFQUFDLE1BQTVCO0FBQW1DLGlCQUFTLEVBQUMsUUFBN0M7QUFBc0QsbUJBQVcsTUFBakU7QUFBQSwrQkFDRSxxRUFBQyw0REFBRDtBQUFhLGNBQUksRUFBRVAsSUFBbkI7QUFBeUIsb0JBQVUsTUFBbkM7QUFBQSxvQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRixlQTZCRSxxRUFBQyw4REFBRDtBQUNFLFNBQUMsRUFBRSxDQURMO0FBRUUsU0FBQyxFQUFFLENBRkw7QUFHRSxTQUFDLEVBQUMsS0FISjtBQUlFLGFBQUssRUFBQyxVQUpSO0FBS0UsZ0JBQVEsRUFBQyxVQUxYO0FBTUUsV0FBRyxFQUFDLEtBTk47QUFPRSxhQUFLLEVBQUMsS0FQUjtBQVFFLGVBQU8sRUFBRVEsVUFSWDtBQVNFLGNBQU0sRUFBQyxTQVRUO0FBVUUsYUFBSyxFQUFFO0FBQUVJLGlCQUFPLEVBQUVOLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBL0IsU0FWVDtBQVdFLGNBQU0sRUFBRTtBQUFFTyxlQUFLLEVBQUU7QUFBVDtBQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURTLGdCQStDVCxxRUFBQyx5REFBRDtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQVEsYUFBTyxFQUFFTCxVQUFqQjtBQUE2QixhQUFPLEVBQUMsT0FBckM7QUFBNkMsUUFBRSxFQUFDLFVBQWhEO0FBQTJELE9BQUMsRUFBQyxNQUE3RDtBQUFvRSxhQUFPLEVBQUMsUUFBNUU7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLGlCQUFTLEVBQUMsUUFBN0I7QUFBc0MsbUJBQVcsTUFBakQ7QUFBQSwrQkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBL0NGO0FBdURELENBN0REOztHQUFNVixJOztLQUFBQSxJO0FBK0RTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCwgV3JhcEl0ZW0sIEF2YXRhciwgQnV0dG9uLCBMaW5rQm94LCBMaW5rT3ZlcmxheSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBBZGRJY29uLCBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgQ2FyZCA9ICh7IGhyZWYsIHRleHQsIGluZGV4ID0gLTEsIHNldE9wZW5lZENhcmRJbmRleCwgb25PcGVuLCBhdmF0YXJOYW1lID0gJ2FuIGljb24nIH0pID0+IHtcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0T3BlbmVkQ2FyZEluZGV4KGluZGV4KVxuICAgIC8vIHF1ZXVlTWljcm90YXNrKCgpID0+IG9uT3BlbigpKVxuICB9XG4gIHJldHVybiBocmVmID8gKFxuICAgIDxXcmFwSXRlbT5cbiAgICAgIDxMaW5rQm94XG4gICAgICAgIGFzPVwic2VjdGlvblwiXG4gICAgICAgIGJveFNpemU9XCIxMjBweFwiXG4gICAgICAgIG1heFc9XCJzbVwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkPVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICBiZz1cImdyYXkuNzAwXCJcbiAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXkuNjAwJywgYm94U2hhZG93OiAnMCAwcHggOHB4IGJsYWNrJyB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKSwgMzAwMCl9XG4gICAgICA+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBzcmM9e2Ake2hyZWZ9ZmF2aWNvbi5pY29gfVxuICAgICAgICAgIG5hbWU9e2F2YXRhck5hbWV9XG4gICAgICAgICAgYm94U2l6ZT1cIjUwcHhcIlxuICAgICAgICAgIG15PXsyfVxuICAgICAgICAgIHA9XCIzcHhcIlxuICAgICAgICAgIGJnPVwiZ3JheS40MDBcIlxuICAgICAgICAgIGJveFNoYWRvdz17aG92ZXJlZCA/ICcwIDAgMjBweCBibGFjaycgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgbWF4Vz1cIjEwMHB4XCIgZm9udFNpemU9XCIxNHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgaXNUcnVuY2F0ZWQ+XG4gICAgICAgICAgPExpbmtPdmVybGF5IGhyZWY9e2hyZWZ9IGlzRXh0ZXJuYWw+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICA8L0xpbmtPdmVybGF5PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxIYW1idXJnZXJJY29uXG4gICAgICAgICAgdz17NH1cbiAgICAgICAgICBoPXs0fVxuICAgICAgICAgIHA9XCIzcHhcIlxuICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD1cIjVweFwiXG4gICAgICAgICAgcmlnaHQ9XCI1cHhcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaG92ZXJlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTGlua0JveD5cbiAgICA8L1dyYXBJdGVtPlxuICApIDogKFxuICAgIDxXcmFwSXRlbT5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlT3Blbn0gYm94U2l6ZT1cIjEyMHB4XCIgYmc9XCJncmF5LjYwMFwiIGQ9XCJmbGV4XCIgZmxleERpcj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1dyYXBJdGVtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})