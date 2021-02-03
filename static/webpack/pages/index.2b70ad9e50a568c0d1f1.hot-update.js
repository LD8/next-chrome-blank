webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'add_card':\n      var newState = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state);\n\n      newState.push(action.payload.datum);\n      return newState;\n\n    case 'edit_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1, action.payload.datum);\n\n    case 'del_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1);\n\n    default:\n      return state;\n  }\n};\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(reducer, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])()),\n      cardData = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  console.log('cardData: ', cardData);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openedCardIndex = _useState[0],\n      setOpenedCardIndex = _useState[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      siteName = _useState2[0],\n      setSiteName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    // 主页刷新前存入 localStorage 做持久化处理\n    return function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"setData\"])(cardData);\n    };\n  }, [cardData]); // const modalProps = {\n  //   isOpen,\n  //   onClose,\n  //   dispatch,\n  //   href: openedCardIndex === -1 ? null : cardData[openedCardIndex].href,\n  //   text: openedCardIndex === -1 ? null : cardData[openedCardIndex].text,\n  //   index: openedCardIndex,\n  // }\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    }; // console.log('datum: ', datum)\n\n    if (openedCardIndex !== -1) {\n      console.log('正在修改现有数据');\n      dispatch({\n        type: 'edit_card',\n        payload: {\n          index: index,\n          datum: datum\n        }\n      }); // newCardData.splice(index, 1, datum)\n      // setCardData(newCardData)\n    } else {\n      console.log('正在添加新数据'); // newCardData.push(datum)\n      // setCardData(newCardData)\n      // console.log('newCardData: ', newCardData)\n\n      dispatch({\n        type: 'add_card',\n        payload: {\n          datum: datum\n        }\n      });\n      setSiteName('');\n      setUrl('');\n    }\n\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    console.log('正在删除数据'); // newCardData.splice(index, 1)\n    // setCardData(newCardData)\n\n    dispatch({\n      type: 'del_card',\n      payload: {\n        index: index\n      }\n    });\n    onClose();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Modal, {\n      isOpen: isOpen,\n      onClick: onClose,\n      motionPreset: \"slideInBottom\",\n      isCentered: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalOverlay, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalContent, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalHeader, {\n          children: \"Add shortcut\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalBody, {\n          pb: 6,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormControl, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormLabel, {\n              children: \"Website Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n              placeholder: \"Website Name\",\n              value: siteName,\n              onChange: function onChange(e) {\n                return setSiteName(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormControl, {\n            mt: 4,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormLabel, {\n              children: \"URL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n              placeholder: \"URL\",\n              value: url,\n              onChange: function onChange(e) {\n                return setUrl(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalFooter, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Flex, {\n            w: \"100%\",\n            children: [openedCardIndex !== -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n              colorScheme: \"red\",\n              mr: 3,\n              onClick: handleDelete,\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Box, {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n                colorScheme: \"blue\",\n                mr: 3,\n                onClick: handleSubmit,\n                children: \"Save\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n                onClick: onClose,\n                children: \"Cancel\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"eW+rp33DvTOEGz+GKyYCkHJRLeg=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n};\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJwdXNoIiwicGF5bG9hZCIsImRhdHVtIiwic3BsaWNlIiwiaW5kZXgiLCJIb21lIiwidXNlUmVkdWNlciIsImdldERhdGEiLCJjYXJkRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3BlbmVkQ2FyZEluZGV4Iiwic2V0T3BlbmVkQ2FyZEluZGV4IiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJocmVmIiwidGV4dCIsImhhbmRsZURlbGV0ZSIsIm1hcCIsImMiLCJpIiwiZSIsInRhcmdldCIsInZhbHVlIiwiRm9ybWF0UGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSxVQUFNQyxRQUFRLEdBQUcsd0tBQUlILEtBQVAsQ0FBZDs7QUFDQUcsY0FBUSxDQUFDQyxJQUFULENBQWNILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxLQUE3QjtBQUNBLGFBQU9ILFFBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsYUFBTyx3S0FBSUgsS0FBSixFQUFXTyxNQUFYLENBQWtCTixNQUFNLENBQUNJLE9BQVAsQ0FBZUcsS0FBakMsRUFBd0MsQ0FBeEMsRUFBMkNQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxLQUExRCxDQUFQOztB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QUEsb0JBRkosZUFNRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsZUFPRSxxRUFBQyxHQUFEO0FBQUEsc0NBQ0UscUVBQUMsTUFBRDtBQUFRLDJCQUFXLEVBQUMsTUFBcEI7QUFBMkIsa0JBQUUsRUFBRSxDQUEvQjtBQUFrQyx1QkFBTyxFQUFFSixZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFLHFFQUFDLE1BQUQ7QUFBUSx1QkFBTyxFQUFFUCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxrQkFERjtBQXFERDs7R0E1R3VCYixJO1VBS2NVLDhEOzs7S0FMZFYsSTs7QUE4R3hCLElBQU0rQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsc0JBQ3hCO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUEsa0JBRHdCO0FBQUEsQ0FBMUI7O01BQU1BLGlCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIsIFZTdGFjaywgV3JhcCwgdXNlRGlzY2xvc3VyZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgSGVhZENvbnRlbnQsIFNlYXJjaEJhciwgRW1wdHlQbGFjZUhvbGRlckNhcmQsIEdvb2dsZUhlYWRpbmcsIEFkZE9yRWRpdE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IGdldERhdGEsIHNldERhdGEgfSBmcm9tICcuLi91dGlscydcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdhZGRfY2FyZCc6XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cbiAgICAgIG5ld1N0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQuZGF0dW0pXG4gICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICBjYXNlICdlZGl0X2NhcmQnOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZV0uc3BsaWNlKGFjdGlvbi5wYXlsb2FkLmluZGV4LCAxLCBhY3Rpb24ucGF5bG9hZC5kYXR1bSlcbiAgICBjYXNlICdkZWxfY2FyZCc6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuaW5kZXgsIDEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYXJkRGF0YSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBnZXREYXRhKCkpXG4gIGNvbnNvbGUubG9nKCdjYXJkRGF0YTogJywgY2FyZERhdGEpXG5cbiAgY29uc3QgW29wZW5lZENhcmRJbmRleCwgc2V0T3BlbmVkQ2FyZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKVxuICBjb25zdCBbc2l0ZU5hbWUsIHNldFNpdGVOYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDkuLvpobXliLfmlrDliY3lrZjlhaUgbG9jYWxTdG9yYWdlIOWBmuaMgeS5heWMluWkhOeQhlxuICAgIHJldHVybiAoKSA9PiBzZXREYXRhKGNhcmREYXRhKVxuICB9LCBbY2FyZERhdGFdKVxuXG4gIC8vIGNvbnN0IG1vZGFsUHJvcHMgPSB7XG4gIC8vICAgaXNPcGVuLFxuICAvLyAgIG9uQ2xvc2UsXG4gIC8vICAgZGlzcGF0Y2gsXG4gIC8vICAgaHJlZjogb3BlbmVkQ2FyZEluZGV4ID09PSAtMSA/IG51bGwgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLmhyZWYsXG4gIC8vICAgdGV4dDogb3BlbmVkQ2FyZEluZGV4ID09PSAtMSA/IG51bGwgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLnRleHQsXG4gIC8vICAgaW5kZXg6IG9wZW5lZENhcmRJbmRleCxcbiAgLy8gfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoc2l0ZU5hbWUudHJpbSgpID09PSAnJyB8fCB1cmwudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGF0dW0gPSB7IGhyZWY6IHVybCwgdGV4dDogc2l0ZU5hbWUgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXR1bTogJywgZGF0dW0pXG5cbiAgICBpZiAob3BlbmVkQ2FyZEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOS/ruaUueeOsOacieaVsOaNricpXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlZGl0X2NhcmQnLCBwYXlsb2FkOiB7IGluZGV4LCBkYXR1bSB9IH0pXG4gICAgICAvLyBuZXdDYXJkRGF0YS5zcGxpY2UoaW5kZXgsIDEsIGRhdHVtKVxuICAgICAgLy8gc2V0Q2FyZERhdGEobmV3Q2FyZERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjmt7vliqDmlrDmlbDmja4nKVxuICAgICAgLy8gbmV3Q2FyZERhdGEucHVzaChkYXR1bSlcbiAgICAgIC8vIHNldENhcmREYXRhKG5ld0NhcmREYXRhKVxuICAgICAgLy8gY29uc29sZS5sb2coJ25ld0NhcmREYXRhOiAnLCBuZXdDYXJkRGF0YSlcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2FkZF9jYXJkJywgcGF5bG9hZDogeyBkYXR1bSB9IH0pXG4gICAgICBzZXRTaXRlTmFtZSgnJylcbiAgICAgIHNldFVybCgnJylcbiAgICB9XG4gICAgb25DbG9zZSgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+ato+WcqOWIoOmZpOaVsOaNricpXG4gICAgLy8gbmV3Q2FyZERhdGEuc3BsaWNlKGluZGV4LCAxKVxuICAgIC8vIHNldENhcmREYXRhKG5ld0NhcmREYXRhKVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RlbF9jYXJkJywgcGF5bG9hZDogeyBpbmRleCB9IH0pXG4gICAgb25DbG9zZSgpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRDb250ZW50IHRleHQ9XCJOZXcgVGFiXCIgLz5cbiAgICAgIDxDZW50ZXIgaD1cIjEwMHZoXCIgbWF4Vz1cIjgwMHB4XCIgdz1cIjEwMCVcIiBteD1cImF1dG9cIiBwYj17MjB9PlxuICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgIDxHb29nbGVIZWFkaW5nIC8+XG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICAgIDxXcmFwIHNwYWNpbmc9XCIyMHB4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAge2NhcmREYXRhICYmXG4gICAgICAgICAgICAgIGNhcmREYXRhLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aSArICcnfSB7Li4uY30gaW5kZXg9e2l9IG9uT3Blbj17b25PcGVufSBzZXRPcGVuZWRDYXJkSW5kZXg9e3NldE9wZW5lZENhcmRJbmRleH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Q2FyZCBvbk9wZW49e29uT3Blbn0gc2V0T3BlbmVkQ2FyZEluZGV4PXtzZXRPcGVuZWRDYXJkSW5kZXh9IC8+XG4gICAgICAgICAgICA8Rm9ybWF0UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgICA8L1dyYXA+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9DZW50ZXI+XG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9e29uQ2xvc2V9IG1vdGlvblByZXNldD1cInNsaWRlSW5Cb3R0b21cIiBpc0NlbnRlcmVkPlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPE1vZGFsSGVhZGVyPkFkZCBzaG9ydGN1dDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+V2Vic2l0ZSBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIldlYnNpdGUgTmFtZVwiIHZhbHVlPXtzaXRlTmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXRlTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVSTDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJVUkxcIiB2YWx1ZT17dXJsfSBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAge29wZW5lZENhcmRJbmRleCAhPT0gLTEgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBtcj17M30gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgRm9ybWF0UGxhY2Vob2xkZXIgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gIDwvPlxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})