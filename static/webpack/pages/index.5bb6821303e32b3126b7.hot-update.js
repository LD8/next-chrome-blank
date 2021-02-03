webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'add_card':\n      var newState = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state);\n\n      newState.push(action.payload.datum);\n      return newState;\n\n    case 'edit_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1, action.payload.datum);\n\n    case 'del_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1);\n\n    default:\n      return state;\n  }\n};\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(reducer, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])()),\n      cardData = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  console.log('cardData: ', cardData);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openedCardIndex = _useState[0],\n      setOpenedCardIndex = _useState[1];\n\n  console.log('openedCardIndex: ', openedCardIndex);\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      siteName = _useState2[0],\n      setSiteName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    // 主页刷新前存入 localStorage 做持久化处理\n    return function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"setData\"])(cardData);\n    };\n  }, [cardData]); // const modalProps = {\n  //   isOpen,\n  //   onClose,\n  //   dispatch,\n  //   href: openedCardIndex === -1 ? null : cardData[openedCardIndex].href,\n  //   text: openedCardIndex === -1 ? null : cardData[openedCardIndex].text,\n  //   index: openedCardIndex,\n  // }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (openedCardIndex !== null) {\n      onOpen();\n    } else {\n      onClose();\n    }\n  }, [openedCardIndex]);\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    };\n\n    if (openedCardIndex !== -1) {\n      console.log('正在修改现有数据');\n      dispatch({\n        type: 'edit_card',\n        payload: {\n          index: index,\n          datum: datum\n        }\n      });\n    } else {\n      console.log('正在添加新数据');\n      dispatch({\n        type: 'add_card',\n        payload: {\n          datum: datum\n        }\n      });\n      setSiteName('');\n      setUrl('');\n    }\n\n    setOpenedCardIndex(null);\n  };\n\n  var handleDelete = function handleDelete() {\n    console.log('正在删除数据');\n    dispatch({\n      type: 'del_card',\n      payload: {\n        index: index\n      }\n    });\n    setOpenedCardIndex(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n      isOpen: isOpen,\n      onClick: onClose,\n      motionPreset: \"slideInBottom\",\n      isCentered: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n          children: \"Add shortcut\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n          pb: 6,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n              children: \"Website Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              placeholder: \"Website Name\",\n              value: siteName,\n              onChange: function onChange(e) {\n                return setSiteName(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n            mt: 4,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n              children: \"URL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              placeholder: \"URL\",\n              value: url,\n              onChange: function onChange(e) {\n                return setUrl(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalFooter\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n            w: \"100%\",\n            children: [openedCardIndex !== -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              colorScheme: \"red\",\n              mr: 3,\n              onClick: handleDelete,\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n                colorScheme: \"blue\",\n                mr: 3,\n                onClick: handleSubmit,\n                children: \"Save\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n                onClick: function onClick() {\n                  return setOpenedCardIndex(null);\n                },\n                children: \"Cancel\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"Mi/QSatW/i/aHBObqNRDz31S8NI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n};\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJwdXNoIiwicGF5bG9hZCIsImRhdHVtIiwic3BsaWNlIiwiaW5kZXgiLCJIb21lIiwidXNlUmVkdWNlciIsImdldERhdGEiLCJjYXJkRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3BlbmVkQ2FyZEluZGV4Iiwic2V0T3BlbmVkQ2FyZEluZGV4IiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJocmVmIiwidGV4dCIsImhhbmRsZURlbGV0ZSIsIm1hcCIsImMiLCJpIiwiZSIsInRhcmdldCIsInZhbHVlIiwiRm9ybWF0UGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsVUFBTUMsUUFBUSxHQUFHLHdLQUFJSCxLQUFQLENBQWQ7O0FBQ0FHLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsS0FBN0I7QUFDQSxhQUFPSCxRQUFQOztBQUNGLFNBQUssV0FBTDtBQUNFLGFBQU8sd0tBQUlILEtBQUosRUFBV08sTUFBWCxDQUFrQk4sTUFBTSxDQUFDSSxPQUFQLENBQWVHLEtBQWpDLEVBQXdDLENBQXhDLEVBQTJDUCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsS0FBMUQsQ0FBUDs7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ZUFLRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQSxrQkFEd0I7QUFBQSxDQUExQjs7TUFBTUEsaUIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENlbnRlcixcbiAgVlN0YWNrLFxuICBXcmFwLFxuICB1c2VEaXNjbG9zdXJlLFxuICBNb2RhbCxcbiAgTW9kYWxPdmVybGF5LFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbEZvb3RlcixcbiAgTW9kYWxCb2R5LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBGbGV4LFxuICBTcGFjZXIsXG4gIEJveCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBIZWFkQ29udGVudCwgU2VhcmNoQmFyLCBFbXB0eVBsYWNlSG9sZGVyQ2FyZCwgR29vZ2xlSGVhZGluZywgQWRkT3JFZGl0TW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2FkZF9jYXJkJzpcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXVxuICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZC5kYXR1bSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIGNhc2UgJ2VkaXRfY2FyZCc6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuaW5kZXgsIDEsIGFjdGlvbi5wYXlsb2FkLmRhdHVtKVxuICAgIGNhc2UgJ2RlbF9jYXJkJzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGVdLnNwbGljZShhY3Rpb24ucGF5bG9hZC5pbmRleCwgMSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NhcmREYXRhLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdldERhdGEoKSlcbiAgY29uc29sZS5sb2coJ2NhcmREYXRhOiAnLCBjYXJkRGF0YSlcblxuICBjb25zdCBbb3BlbmVkQ2FyZEluZGV4LCBzZXRPcGVuZWRDYXJkSW5kZXhdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc29sZS5sb2coJ29wZW5lZENhcmRJbmRleDogJywgb3BlbmVkQ2FyZEluZGV4KVxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKClcbiAgY29uc3QgW3NpdGVOYW1lLCBzZXRTaXRlTmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g5Li76aG15Yi35paw5YmN5a2Y5YWlIGxvY2FsU3RvcmFnZSDlgZrmjIHkuYXljJblpITnkIZcbiAgICByZXR1cm4gKCkgPT4gc2V0RGF0YShjYXJkRGF0YSlcbiAgfSwgW2NhcmREYXRhXSlcblxuICAvLyBjb25zdCBtb2RhbFByb3BzID0ge1xuICAvLyAgIGlzT3BlbixcbiAgLy8gICBvbkNsb3NlLFxuICAvLyAgIGRpc3BhdGNoLFxuICAvLyAgIGhyZWY6IG9wZW5lZENhcmRJbmRleCA9PT0gLTEgPyBudWxsIDogY2FyZERhdGFbb3BlbmVkQ2FyZEluZGV4XS5ocmVmLFxuICAvLyAgIHRleHQ6IG9wZW5lZENhcmRJbmRleCA9PT0gLTEgPyBudWxsIDogY2FyZERhdGFbb3BlbmVkQ2FyZEluZGV4XS50ZXh0LFxuICAvLyAgIGluZGV4OiBvcGVuZWRDYXJkSW5kZXgsXG4gIC8vIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3BlbmVkQ2FyZEluZGV4ICE9PSBudWxsKSB7XG4gICAgICBvbk9wZW4oKVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNsb3NlKClcbiAgICB9XG4gIH0sIFtvcGVuZWRDYXJkSW5kZXhdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoc2l0ZU5hbWUudHJpbSgpID09PSAnJyB8fCB1cmwudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGRhdHVtID0geyBocmVmOiB1cmwsIHRleHQ6IHNpdGVOYW1lIH1cbiAgICBpZiAob3BlbmVkQ2FyZEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOS/ruaUueeOsOacieaVsOaNricpXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlZGl0X2NhcmQnLCBwYXlsb2FkOiB7IGluZGV4LCBkYXR1bSB9IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjmt7vliqDmlrDmlbDmja4nKVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnYWRkX2NhcmQnLCBwYXlsb2FkOiB7IGRhdHVtIH0gfSlcbiAgICAgIHNldFNpdGVOYW1lKCcnKVxuICAgICAgc2V0VXJsKCcnKVxuICAgIH1cbiAgICBzZXRPcGVuZWRDYXJkSW5kZXgobnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn5q2j5Zyo5Yig6Zmk5pWw5o2uJylcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkZWxfY2FyZCcsIHBheWxvYWQ6IHsgaW5kZXggfSB9KVxuICAgIHNldE9wZW5lZENhcmRJbmRleChudWxsKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRDb250ZW50IHRleHQ9XCJOZXcgVGFiXCIgLz5cbiAgICAgIDxDZW50ZXIgaD1cIjEwMHZoXCIgbWF4Vz1cIjgwMHB4XCIgdz1cIjEwMCVcIiBteD1cImF1dG9cIiBwYj17MjB9PlxuICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgIDxHb29nbGVIZWFkaW5nIC8+XG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICAgIDxXcmFwIHNwYWNpbmc9XCIyMHB4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAge2NhcmREYXRhICYmXG4gICAgICAgICAgICAgIGNhcmREYXRhLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aSArICcnfSB7Li4uY30gaW5kZXg9e2l9IG9uT3Blbj17b25PcGVufSBzZXRPcGVuZWRDYXJkSW5kZXg9e3NldE9wZW5lZENhcmRJbmRleH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Q2FyZCBvbk9wZW49e29uT3Blbn0gc2V0T3BlbmVkQ2FyZEluZGV4PXtzZXRPcGVuZWRDYXJkSW5kZXh9IC8+XG4gICAgICAgICAgICA8Rm9ybWF0UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgICA8L1dyYXA+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9DZW50ZXI+XG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9e29uQ2xvc2V9IG1vdGlvblByZXNldD1cInNsaWRlSW5Cb3R0b21cIiBpc0NlbnRlcmVkPlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPE1vZGFsSGVhZGVyPkFkZCBzaG9ydGN1dDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+V2Vic2l0ZSBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIldlYnNpdGUgTmFtZVwiIHZhbHVlPXtzaXRlTmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXRlTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVSTDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJVUkxcIiB2YWx1ZT17dXJsfSBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAge29wZW5lZENhcmRJbmRleCAhPT0gLTEgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBtcj17M30gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZENhcmRJbmRleChudWxsKX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBGb3JtYXRQbGFjZWhvbGRlciA9ICgpID0+IChcbiAgPD5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgICA8RW1wdHlQbGFjZUhvbGRlckNhcmQgLz5cbiAgPC8+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})