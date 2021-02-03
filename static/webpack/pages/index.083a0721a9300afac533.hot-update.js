webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/_@chakra-ui_icons@1.0.4@@chakra-ui/icons/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/Card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var href = _ref.href,\n      text = _ref.text,\n      _ref$index = _ref.index,\n      index = _ref$index === void 0 ? -1 : _ref$index,\n      setOpenedCardIndex = _ref.setOpenedCardIndex,\n      onOpen = _ref.onOpen,\n      _ref$avatarName = _ref.avatarName,\n      avatarName = _ref$avatarName === void 0 ? 'an icon' : _ref$avatarName;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHovered = _useState[1];\n\n  var handleOpen = function handleOpen() {\n    console.log('setOpenedCardIndex: ', index);\n    setOpenedCardIndex(index); // queueMicrotask(() => onOpen())\n  };\n\n  return href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkBox\"], {\n      as: \"section\",\n      boxSize: \"120px\",\n      maxW: \"sm\",\n      position: \"relative\",\n      d: \"flex\",\n      flexDir: \"column\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      rounded: \"md\",\n      bg: \"gray.700\",\n      _hover: {\n        backgroundColor: 'gray.600',\n        boxShadow: '0 0px 8px black'\n      },\n      onMouseEnter: function onMouseEnter() {\n        return setHovered(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setTimeout(function () {\n          return setHovered(false);\n        }, 3000);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        src: \"\".concat(href, \"favicon.ico\"),\n        name: avatarName,\n        boxSize: \"50px\",\n        my: 2,\n        p: \"3px\",\n        bg: \"gray.400\",\n        boxShadow: hovered ? '0 0 20px black' : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        maxW: \"100px\",\n        fontSize: \"14px\",\n        textAlign: \"center\",\n        isTruncated: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"LinkOverlay\"], {\n          href: href,\n          isExternal: true,\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"HamburgerIcon\"], {\n        w: 4,\n        h: 4,\n        p: \"3px\",\n        color: \"gray.500\",\n        position: \"absolute\",\n        top: \"5px\",\n        right: \"5px\",\n        onClick: handleOpen,\n        cursor: \"pointer\",\n        style: {\n          display: hovered ? 'block' : 'none'\n        },\n        _hover: {\n          color: 'white'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"WrapItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: handleOpen,\n      boxSize: \"120px\",\n      bg: \"gray.600\",\n      d: \"flex\",\n      flexDir: \"column\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        maxW: \"100px\",\n        textAlign: \"center\",\n        isTruncated: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"AddIcon\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJzZXRPcGVuZWRDYXJkSW5kZXgiLCJvbk9wZW4iLCJhdmF0YXJOYW1lIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImhhbmRsZU9wZW4iLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRjtBQUFBOztBQUFBLE1BQWpGQyxJQUFpRixRQUFqRkEsSUFBaUY7QUFBQSxNQUEzRUMsSUFBMkUsUUFBM0VBLElBQTJFO0FBQUEsd0JBQXJFQyxLQUFxRTtBQUFBLE1BQXJFQSxLQUFxRSwyQkFBN0QsQ0FBQyxDQUE0RDtBQUFBLE1BQXpEQyxrQkFBeUQsUUFBekRBLGtCQUF5RDtBQUFBLE1BQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSw2QkFBN0JDLFVBQTZCO0FBQUEsTUFBN0JBLFVBQTZCLGdDQUFoQixTQUFnQjs7QUFBQSxrQkFDakVDLHNEQUFRLENBQUMsS0FBRCxDQUR5RDtBQUFBLE1BQ3hGQyxPQUR3RjtBQUFBLE1BQy9FQyxVQUQrRTs7QUFFL0YsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NULEtBQXBDO0FBQ0FDLHNCQUFrQixDQUFDRCxLQUFELENBQWxCLENBRnVCLENBR3ZCO0FBQ0QsR0FKRDs7QUFLQSxTQUFPRixJQUFJLGdCQUNULHFFQUFDLHlEQUFEO0FBQUEsMkJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxRQUFFLEVBQUMsU0FETDtBQUVFLGFBQU8sRUFBQyxPQUZWO0FBR0UsVUFBSSxFQUFDLElBSFA7QUFJRSxjQUFRLEVBQUMsVUFKWDtBQUtFLE9BQUMsRUFBQyxNQUxKO0FBTUUsYUFBTyxFQUFDLFFBTlY7QUFPRSxnQkFBVSxFQUFDLFFBUGI7QUFRRSxvQkFBYyxFQUFDLFFBUmpCO0FBU0UsYUFBTyxFQUFDLElBVFY7QUFVRSxRQUFFLEVBQUMsVUFWTDtBQVdFLFlBQU0sRUFBRTtBQUFFWSx1QkFBZSxFQUFFLFVBQW5CO0FBQStCQyxpQkFBUyxFQUFFO0FBQTFDLE9BWFY7QUFZRSxrQkFBWSxFQUFFO0FBQUEsZUFBTUwsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxPQVpoQjtBQWFFLGtCQUFZLEVBQUU7QUFBQSxlQUFNTSxVQUFVLENBQUM7QUFBQSxpQkFBTU4sVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxTQUFELEVBQTBCLElBQTFCLENBQWhCO0FBQUEsT0FiaEI7QUFBQSw4QkFlRSxxRUFBQyx1REFBRDtBQUNFLFdBQUcsWUFBS1IsSUFBTCxnQkFETDtBQUVFLFlBQUksRUFBRUssVUFGUjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsVUFBRSxFQUFFLENBSk47QUFLRSxTQUFDLEVBQUMsS0FMSjtBQU1FLFVBQUUsRUFBQyxVQU5MO0FBT0UsaUJBQVMsRUFBRUUsT0FBTyxHQUFHLGdCQUFILEdBQXNCO0FBUDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQXdCRSxxRUFBQyxxREFBRDtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLGdCQUFRLEVBQUMsTUFBNUI7QUFBbUMsaUJBQVMsRUFBQyxRQUE3QztBQUFzRCxtQkFBVyxNQUFqRTtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQWEsY0FBSSxFQUFFUCxJQUFuQjtBQUF5QixvQkFBVSxNQUFuQztBQUFBLG9CQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLGVBNkJFLHFFQUFDLDhEQUFEO0FBQ0UsU0FBQyxFQUFFLENBREw7QUFFRSxTQUFDLEVBQUUsQ0FGTDtBQUdFLFNBQUMsRUFBQyxLQUhKO0FBSUUsYUFBSyxFQUFDLFVBSlI7QUFLRSxnQkFBUSxFQUFDLFVBTFg7QUFNRSxXQUFHLEVBQUMsS0FOTjtBQU9FLGFBQUssRUFBQyxLQVBSO0FBUUUsZUFBTyxFQUFFUSxVQVJYO0FBU0UsY0FBTSxFQUFDLFNBVFQ7QUFVRSxhQUFLLEVBQUU7QUFBRU0saUJBQU8sRUFBRVIsT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUEvQixTQVZUO0FBV0UsY0FBTSxFQUFFO0FBQUVTLGVBQUssRUFBRTtBQUFUO0FBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFMsZ0JBK0NULHFFQUFDLHlEQUFEO0FBQUEsMkJBQ0UscUVBQUMsdURBQUQ7QUFBUSxhQUFPLEVBQUVQLFVBQWpCO0FBQTZCLGFBQU8sRUFBQyxPQUFyQztBQUE2QyxRQUFFLEVBQUMsVUFBaEQ7QUFBMkQsT0FBQyxFQUFDLE1BQTdEO0FBQW9FLGFBQU8sRUFBQyxRQUE1RTtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBbUIsaUJBQVMsRUFBQyxRQUE3QjtBQUFzQyxtQkFBVyxNQUFqRDtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EvQ0Y7QUF1REQsQ0E5REQ7O0dBQU1WLEk7O0tBQUFBLEk7QUFnRVNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0LCBXcmFwSXRlbSwgQXZhdGFyLCBCdXR0b24sIExpbmtCb3gsIExpbmtPdmVybGF5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEFkZEljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBDYXJkID0gKHsgaHJlZiwgdGV4dCwgaW5kZXggPSAtMSwgc2V0T3BlbmVkQ2FyZEluZGV4LCBvbk9wZW4sIGF2YXRhck5hbWUgPSAnYW4gaWNvbicgfSkgPT4ge1xuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2V0T3BlbmVkQ2FyZEluZGV4OiAnLCBpbmRleClcbiAgICBzZXRPcGVuZWRDYXJkSW5kZXgoaW5kZXgpXG4gICAgLy8gcXVldWVNaWNyb3Rhc2soKCkgPT4gb25PcGVuKCkpXG4gIH1cbiAgcmV0dXJuIGhyZWYgPyAoXG4gICAgPFdyYXBJdGVtPlxuICAgICAgPExpbmtCb3hcbiAgICAgICAgYXM9XCJzZWN0aW9uXCJcbiAgICAgICAgYm94U2l6ZT1cIjEyMHB4XCJcbiAgICAgICAgbWF4Vz1cInNtXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGQ9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHJvdW5kZWQ9XCJtZFwiXG4gICAgICAgIGJnPVwiZ3JheS43MDBcIlxuICAgICAgICBfaG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JheS42MDAnLCBib3hTaGFkb3c6ICcwIDBweCA4cHggYmxhY2snIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldEhvdmVyZWQoZmFsc2UpLCAzMDAwKX1cbiAgICAgID5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHNyYz17YCR7aHJlZn1mYXZpY29uLmljb2B9XG4gICAgICAgICAgbmFtZT17YXZhdGFyTmFtZX1cbiAgICAgICAgICBib3hTaXplPVwiNTBweFwiXG4gICAgICAgICAgbXk9ezJ9XG4gICAgICAgICAgcD1cIjNweFwiXG4gICAgICAgICAgYmc9XCJncmF5LjQwMFwiXG4gICAgICAgICAgYm94U2hhZG93PXtob3ZlcmVkID8gJzAgMCAyMHB4IGJsYWNrJyA6ICcnfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBtYXhXPVwiMTAwcHhcIiBmb250U2l6ZT1cIjE0cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpc1RydW5jYXRlZD5cbiAgICAgICAgICA8TGlua092ZXJsYXkgaHJlZj17aHJlZn0gaXNFeHRlcm5hbD5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIDwvTGlua092ZXJsYXk+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEhhbWJ1cmdlckljb25cbiAgICAgICAgICB3PXs0fVxuICAgICAgICAgIGg9ezR9XG4gICAgICAgICAgcD1cIjNweFwiXG4gICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgdG9wPVwiNXB4XCJcbiAgICAgICAgICByaWdodD1cIjVweFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbn1cbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBob3ZlcmVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rQm94PlxuICAgIDwvV3JhcEl0ZW0+XG4gICkgOiAoXG4gICAgPFdyYXBJdGVtPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVufSBib3hTaXplPVwiMTIwcHhcIiBiZz1cImdyYXkuNjAwXCIgZD1cImZsZXhcIiBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IG1heFc9XCIxMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGlzVHJ1bmNhdGVkPlxuICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvV3JhcEl0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})