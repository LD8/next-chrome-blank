webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'add_card':\n      var newState = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state);\n\n      newState.push(action.payload.datum);\n      return newState;\n\n    case 'edit_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1, action.payload.datum);\n\n    case 'del_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1);\n\n    default:\n      return state;\n  }\n};\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(reducer, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])()),\n      cardData = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  console.log('cardData: ', cardData);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openedCardIndex = _useState[0],\n      setOpenedCardIndex = _useState[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      siteName = _useState2[0],\n      setSiteName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    // 主页刷新前存入 localStorage 做持久化处理\n    return function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"setData\"])(cardData);\n    };\n  }, [cardData]); // const modalProps = {\n  //   isOpen,\n  //   onClose,\n  //   dispatch,\n  //   href: openedCardIndex === -1 ? null : cardData[openedCardIndex].href,\n  //   text: openedCardIndex === -1 ? null : cardData[openedCardIndex].text,\n  //   index: openedCardIndex,\n  // }\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    }; // console.log('datum: ', datum)\n\n    if (openedCardIndex !== -1) {\n      console.log('正在修改现有数据');\n      dispatch({\n        type: 'edit_card',\n        payload: {\n          index: index,\n          datum: datum\n        }\n      }); // newCardData.splice(index, 1, datum)\n      // setCardData(newCardData)\n    } else {\n      console.log('正在添加新数据'); // newCardData.push(datum)\n      // setCardData(newCardData)\n      // console.log('newCardData: ', newCardData)\n\n      dispatch({\n        type: 'add_card',\n        payload: {\n          datum: datum\n        }\n      });\n      setSiteName('');\n      setUrl('');\n    }\n\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    console.log('正在删除数据'); // newCardData.splice(index, 1)\n    // setCardData(newCardData)\n\n    dispatch({\n      type: 'del_card',\n      payload: {\n        index: index\n      }\n    });\n    onClose();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n      isOpen: isOpen,\n      onClick: onClose,\n      motionPreset: \"slideInBottom\",\n      isCentered: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalOverlay, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalContent, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalHeader, {\n          children: \"Add shortcut\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalBody, {\n          pb: 6,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormControl, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormLabel, {\n              children: \"Website Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n              placeholder: \"Website Name\",\n              value: siteName,\n              onChange: function onChange(e) {\n                return setSiteName(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormControl, {\n            mt: 4,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormLabel, {\n              children: \"URL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n              placeholder: \"URL\",\n              value: url,\n              onChange: function onChange(e) {\n                return setUrl(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalFooter, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Flex, {\n            w: \"100%\",\n            children: [openedCardIndex !== -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n              colorScheme: \"red\",\n              mr: 3,\n              onClick: handleDelete,\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Box, {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n                colorScheme: \"blue\",\n                mr: 3,\n                onClick: handleSubmit,\n                children: \"Save\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n                onClick: onClose,\n                children: \"Cancel\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"eW+rp33DvTOEGz+GKyYCkHJRLeg=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n};\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJwdXNoIiwicGF5bG9hZCIsImRhdHVtIiwic3BsaWNlIiwiaW5kZXgiLCJIb21lIiwidXNlUmVkdWNlciIsImdldERhdGEiLCJjYXJkRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3BlbmVkQ2FyZEluZGV4Iiwic2V0T3BlbmVkQ2FyZEluZGV4IiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJocmVmIiwidGV4dCIsImhhbmRsZURlbGV0ZSIsIm1hcCIsImMiLCJpIiwiZSIsInRhcmdldCIsInZhbHVlIiwiRm9ybWF0UGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSxVQUFNQyxRQUFRLEdBQUcsd0tBQUlILEtBQVAsQ0FBZDs7QUFDQUcsY0FBUSxDQUFDQyxJQUFULENBQWNILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxLQUE3QjtBQUNBLGFBQU9ILFFBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsYUFBTyx3S0FBSUgsS0FBSixFQUFXTyxNQUFYLENBQWtCTixNQUFNLENBQUNJLE9BQVAsQ0FBZUcsS0FBakMsRUFBd0MsQ0FBeEMsRUFBMkNQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxLQUExRCxDQUFQOztB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QUFBLG9CQUZKLGVBTUUscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBT0UscUVBQUMsR0FBRDtBQUFBLHNDQUNFLHFFQUFDLE1BQUQ7QUFBUSwyQkFBVyxFQUFDLE1BQXBCO0FBQTJCLGtCQUFFLEVBQUUsQ0FBL0I7QUFBa0MsdUJBQU8sRUFBRUosWUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRSxxRUFBQyxNQUFEO0FBQVEsdUJBQU8sRUFBRVAsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUFxREQ7O0dBNUd1QmIsSTtVQUtjVSw4RDs7O0tBTGRWLEk7O0FBOEd4QixJQUFNK0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLHNCQUN4QjtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBLGtCQUR3QjtBQUFBLENBQTFCOztNQUFNQSxpQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VudGVyLCBWU3RhY2ssIFdyYXAsIHVzZURpc2Nsb3N1cmUsIE1vZGFsIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBIZWFkQ29udGVudCwgU2VhcmNoQmFyLCBFbXB0eVBsYWNlSG9sZGVyQ2FyZCwgR29vZ2xlSGVhZGluZywgQWRkT3JFZGl0TW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2FkZF9jYXJkJzpcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXVxuICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZC5kYXR1bSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIGNhc2UgJ2VkaXRfY2FyZCc6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuaW5kZXgsIDEsIGFjdGlvbi5wYXlsb2FkLmRhdHVtKVxuICAgIGNhc2UgJ2RlbF9jYXJkJzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGVdLnNwbGljZShhY3Rpb24ucGF5bG9hZC5pbmRleCwgMSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NhcmREYXRhLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdldERhdGEoKSlcbiAgY29uc29sZS5sb2coJ2NhcmREYXRhOiAnLCBjYXJkRGF0YSlcblxuICBjb25zdCBbb3BlbmVkQ2FyZEluZGV4LCBzZXRPcGVuZWRDYXJkSW5kZXhdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gIGNvbnN0IFtzaXRlTmFtZSwgc2V0U2l0ZU5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOS4u+mhteWIt+aWsOWJjeWtmOWFpSBsb2NhbFN0b3JhZ2Ug5YGa5oyB5LmF5YyW5aSE55CGXG4gICAgcmV0dXJuICgpID0+IHNldERhdGEoY2FyZERhdGEpXG4gIH0sIFtjYXJkRGF0YV0pXG5cbiAgLy8gY29uc3QgbW9kYWxQcm9wcyA9IHtcbiAgLy8gICBpc09wZW4sXG4gIC8vICAgb25DbG9zZSxcbiAgLy8gICBkaXNwYXRjaCxcbiAgLy8gICBocmVmOiBvcGVuZWRDYXJkSW5kZXggPT09IC0xID8gbnVsbCA6IGNhcmREYXRhW29wZW5lZENhcmRJbmRleF0uaHJlZixcbiAgLy8gICB0ZXh0OiBvcGVuZWRDYXJkSW5kZXggPT09IC0xID8gbnVsbCA6IGNhcmREYXRhW29wZW5lZENhcmRJbmRleF0udGV4dCxcbiAgLy8gICBpbmRleDogb3BlbmVkQ2FyZEluZGV4LFxuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChzaXRlTmFtZS50cmltKCkgPT09ICcnIHx8IHVybC50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXR1bSA9IHsgaHJlZjogdXJsLCB0ZXh0OiBzaXRlTmFtZSB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdHVtOiAnLCBkYXR1bSlcblxuICAgIGlmIChvcGVuZWRDYXJkSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5L+u5pS5546w5pyJ5pWw5o2uJylcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2VkaXRfY2FyZCcsIHBheWxvYWQ6IHsgaW5kZXgsIGRhdHVtIH0gfSlcbiAgICAgIC8vIG5ld0NhcmREYXRhLnNwbGljZShpbmRleCwgMSwgZGF0dW0pXG4gICAgICAvLyBzZXRDYXJkRGF0YShuZXdDYXJkRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOa3u+WKoOaWsOaVsOaNricpXG4gICAgICAvLyBuZXdDYXJkRGF0YS5wdXNoKGRhdHVtKVxuICAgICAgLy8gc2V0Q2FyZERhdGEobmV3Q2FyZERhdGEpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbmV3Q2FyZERhdGE6ICcsIG5ld0NhcmREYXRhKVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnYWRkX2NhcmQnLCBwYXlsb2FkOiB7IGRhdHVtIH0gfSlcbiAgICAgIHNldFNpdGVOYW1lKCcnKVxuICAgICAgc2V0VXJsKCcnKVxuICAgIH1cbiAgICBvbkNsb3NlKClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn5q2j5Zyo5Yig6Zmk5pWw5o2uJylcbiAgICAvLyBuZXdDYXJkRGF0YS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgLy8gc2V0Q2FyZERhdGEobmV3Q2FyZERhdGEpXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGVsX2NhcmQnLCBwYXlsb2FkOiB7IGluZGV4IH0gfSlcbiAgICBvbkNsb3NlKClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZENvbnRlbnQgdGV4dD1cIk5ldyBUYWJcIiAvPlxuICAgICAgPENlbnRlciBoPVwiMTAwdmhcIiBtYXhXPVwiODAwcHhcIiB3PVwiMTAwJVwiIG14PVwiYXV0b1wiIHBiPXsyMH0+XG4gICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgPEdvb2dsZUhlYWRpbmcgLz5cbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgPFdyYXAgc3BhY2luZz1cIjIwcHhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7Y2FyZERhdGEgJiZcbiAgICAgICAgICAgICAgY2FyZERhdGEubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpICsgJyd9IHsuLi5jfSBpbmRleD17aX0gb25PcGVuPXtvbk9wZW59IHNldE9wZW5lZENhcmRJbmRleD17c2V0T3BlbmVkQ2FyZEluZGV4fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxDYXJkIG9uT3Blbj17b25PcGVufSBzZXRPcGVuZWRDYXJkSW5kZXg9e3NldE9wZW5lZENhcmRJbmRleH0gLz5cbiAgICAgICAgICAgIDxGb3JtYXRQbGFjZWhvbGRlciAvPlxuICAgICAgICAgIDwvV3JhcD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbGljaz17b25DbG9zZX0gbW90aW9uUHJlc2V0PVwic2xpZGVJbkJvdHRvbVwiIGlzQ2VudGVyZWQ+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXI+QWRkIHNob3J0Y3V0PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5XZWJzaXRlIE5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiV2Vic2l0ZSBOYW1lXCIgdmFsdWU9e3NpdGVOYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFNpdGVOYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17NH0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+VVJMPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlVSTFwiIHZhbHVlPXt1cmx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XG5cbiAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgICB7b3BlbmVkQ2FyZEluZGV4ICE9PSAtMSAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PlxuICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBGb3JtYXRQbGFjZWhvbGRlciA9ICgpID0+IChcbiAgPD5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgPC8+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})