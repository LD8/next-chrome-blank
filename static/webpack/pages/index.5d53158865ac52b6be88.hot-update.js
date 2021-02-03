webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    setOpenedCardIndex(index); // queueMicrotask(() => onOpen())\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        position: \"relative\",\n        boxSize: \"120px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            d: \"flex\",\n            flexDir: \"column\",\n            rounded: \"md\",\n            w: \"100%\",\n            h: \"100%\",\n            href: href,\n            isExternal: true,\n            onMouseEnter: function onMouseEnter() {\n              return setHovered(true);\n            },\n            onMouseLeave: function onMouseLeave() {\n              return setTimeout(function () {\n                return setHovered(false);\n              }, 3000);\n            },\n            bg: \"gray.700\",\n            _hover: {\n              backgroundColor: 'gray.600',\n              boxShadow: '0 0px 8px black'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n              src: \"\".concat(href, \"favicon.ico\"),\n              name: avatarName,\n              boxSize: \"50px\",\n              my: 2,\n              p: \"3px\",\n              bg: \"gray.400\",\n              boxShadow: hovered ? '0 0 20px black' : ''\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n              maxW: \"100px\",\n              fontSize: \"14px\",\n              textAlign: \"center\",\n              isTruncated: true,\n              children: text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n          w: 4,\n          h: 4,\n          p: \"3px\",\n          color: \"gray.500\",\n          position: \"absolute\",\n          top: \"5px\",\n          right: \"5px\",\n          onClick: handleOpen,\n          cursor: \"pointer\",\n          style: {\n            display: hovered ? 'block' : 'none'\n          },\n          _hover: {\n            color: 'white'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        onClick: handleOpen,\n        boxSize: \"120px\",\n        bg: \"gray.600\",\n        d: \"flex\",\n        flexDir: \"column\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n          maxW: \"100px\",\n          textAlign: \"center\",\n          isTruncated: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRjtBQUFBOztBQUFBLE1BQWpGQyxJQUFpRixRQUFqRkEsSUFBaUY7QUFBQSxNQUEzRUMsSUFBMkUsUUFBM0VBLElBQTJFO0FBQUEsd0JBQXJFQyxLQUFxRTtBQUFBLE1BQXJFQSxLQUFxRSwyQkFBN0QsQ0FBQyxDQUE0RDtBQUFBLE1BQXpEQyxrQkFBeUQsUUFBekRBLGtCQUF5RDtBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSw2QkFBN0JDLFVBQTZCO0FBQUEsTUFBN0JBLFVBQTZCLGdDQUFoQixTQUFnQjs7QUFBQSxrQkFDakVDLHNEQUFRLENBQUMsS0FBRCxDQUR5RDtBQUFBLE1BQ3hGQyxPQUR3RjtBQUFBLE1BQy9FQyxVQUQrRTs7QUFFL0YsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qk4sc0JBQWtCLENBQUNELEtBQUQsQ0FBbEIsQ0FEdUIsQ0FFdkI7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUEsY0FDR0YsSUFBSSxnQkFDSCxxRUFBQyx5REFBRDtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQUssZ0JBQVEsRUFBQyxVQUFkO0FBQXlCLGVBQU8sRUFBQyxPQUFqQztBQUFBLGdDQUNFLHFFQUFDLHFEQUFEO0FBQUEsaUNBQ0UscUVBQUMsdURBQUQ7QUFDRSxhQUFDLEVBQUMsTUFESjtBQUVFLG1CQUFPLEVBQUMsUUFGVjtBQUdFLG1CQUFPLEVBQUMsSUFIVjtBQUlFLGFBQUMsRUFBQyxNQUpKO0FBS0UsYUFBQyxFQUFDLE1BTEo7QUFNRSxnQkFBSSxFQUFFQSxJQU5SO0FBT0Usc0JBQVUsTUFQWjtBQVFFLHdCQUFZLEVBQUU7QUFBQSxxQkFBTVEsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxhQVJoQjtBQVNFLHdCQUFZLEVBQUU7QUFBQSxxQkFBTUUsVUFBVSxDQUFDO0FBQUEsdUJBQU1GLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsZUFBRCxFQUEwQixJQUExQixDQUFoQjtBQUFBLGFBVGhCO0FBVUUsY0FBRSxFQUFDLFVBVkw7QUFXRSxrQkFBTSxFQUFFO0FBQUVHLDZCQUFlLEVBQUUsVUFBbkI7QUFBK0JDLHVCQUFTLEVBQUU7QUFBMUMsYUFYVjtBQUFBLG9DQWFFLHFFQUFDLHVEQUFEO0FBQ0UsaUJBQUcsWUFBS1osSUFBTCxnQkFETDtBQUVFLGtCQUFJLEVBQUVLLFVBRlI7QUFHRSxxQkFBTyxFQUFDLE1BSFY7QUFJRSxnQkFBRSxFQUFFLENBSk47QUFLRSxlQUFDLEVBQUMsS0FMSjtBQU1FLGdCQUFFLEVBQUMsVUFOTDtBQU9FLHVCQUFTLEVBQUVFLE9BQU8sR0FBRyxnQkFBSCxHQUFzQjtBQVAxQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBc0JFLHFFQUFDLHFEQUFEO0FBQU0sa0JBQUksRUFBQyxPQUFYO0FBQW1CLHNCQUFRLEVBQUMsTUFBNUI7QUFBbUMsdUJBQVMsRUFBQyxRQUE3QztBQUFzRCx5QkFBVyxNQUFqRTtBQUFBLHdCQUNHTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUE2QkUscUVBQUMsOERBQUQ7QUFDRSxXQUFDLEVBQUUsQ0FETDtBQUVFLFdBQUMsRUFBRSxDQUZMO0FBR0UsV0FBQyxFQUFDLEtBSEo7QUFJRSxlQUFLLEVBQUMsVUFKUjtBQUtFLGtCQUFRLEVBQUMsVUFMWDtBQU1FLGFBQUcsRUFBQyxLQU5OO0FBT0UsZUFBSyxFQUFDLEtBUFI7QUFRRSxpQkFBTyxFQUFFUSxVQVJYO0FBU0UsZ0JBQU0sRUFBQyxTQVRUO0FBVUUsZUFBSyxFQUFFO0FBQUVJLG1CQUFPLEVBQUVOLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBL0IsV0FWVDtBQVdFLGdCQUFNLEVBQUU7QUFBRU8saUJBQUssRUFBRTtBQUFUO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGdCQStDSCxxRUFBQyx5REFBRDtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQVEsZUFBTyxFQUFFTCxVQUFqQjtBQUE2QixlQUFPLEVBQUMsT0FBckM7QUFBNkMsVUFBRSxFQUFDLFVBQWhEO0FBQTJELFNBQUMsRUFBQyxNQUE3RDtBQUFvRSxlQUFPLEVBQUMsUUFBNUU7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQW1CLG1CQUFTLEVBQUMsUUFBN0I7QUFBc0MscUJBQVcsTUFBakQ7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaERKLG1CQURGO0FBMkRELENBakVEOztHQUFNVixJOztLQUFBQSxJO0FBbUVTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgVGV4dCwgQ2VudGVyLCBXcmFwSXRlbSwgQXZhdGFyLCBCdXR0b24sIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBBZGRJY29uLCBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgQ2FyZCA9ICh7IGhyZWYsIHRleHQsIGluZGV4ID0gLTEsIHNldE9wZW5lZENhcmRJbmRleCwgb25PcGVuLCBhdmF0YXJOYW1lID0gJ2FuIGljb24nIH0pID0+IHtcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0T3BlbmVkQ2FyZEluZGV4KGluZGV4KVxuICAgIC8vIHF1ZXVlTWljcm90YXNrKCgpID0+IG9uT3BlbigpKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtocmVmID8gKFxuICAgICAgICA8V3JhcEl0ZW0+XG4gICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgYm94U2l6ZT1cIjEyMHB4XCI+XG4gICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgPENlbnRlclxuICAgICAgICAgICAgICAgIGQ9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICBpc0V4dGVybmFsXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKSwgMzAwMCl9XG4gICAgICAgICAgICAgICAgYmc9XCJncmF5LjcwMFwiXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXkuNjAwJywgYm94U2hhZG93OiAnMCAwcHggOHB4IGJsYWNrJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtocmVmfWZhdmljb24uaWNvYH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e2F2YXRhck5hbWV9XG4gICAgICAgICAgICAgICAgICBib3hTaXplPVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICBteT17Mn1cbiAgICAgICAgICAgICAgICAgIHA9XCIzcHhcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJncmF5LjQwMFwiXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c9e2hvdmVyZWQgPyAnMCAwIDIwcHggYmxhY2snIDogJyd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiBmb250U2l6ZT1cIjE0cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8SGFtYnVyZ2VySWNvblxuICAgICAgICAgICAgICB3PXs0fVxuICAgICAgICAgICAgICBoPXs0fVxuICAgICAgICAgICAgICBwPVwiM3B4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICB0b3A9XCI1cHhcIlxuICAgICAgICAgICAgICByaWdodD1cIjVweFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBob3ZlcmVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICApIDogKFxuICAgICAgICA8V3JhcEl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVufSBib3hTaXplPVwiMTIwcHhcIiBiZz1cImdyYXkuNjAwXCIgZD1cImZsZXhcIiBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})