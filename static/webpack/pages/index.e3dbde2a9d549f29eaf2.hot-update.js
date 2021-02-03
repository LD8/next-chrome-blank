webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar reducer = function reducer(state, action) {\n  var newState = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state);\n\n  switch (action.type) {\n    case 'add_card':\n      newState.push(action.payload.datum);\n      return newState;\n\n    case 'edit_card':\n      newState.splice(action.payload.index, 1, action.payload.datum);\n      return newState;\n\n    case 'del_card':\n      newState.splice(action.payload.index, 1);\n      return newState;\n\n    default:\n      return state;\n  }\n};\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(reducer, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])()),\n      cardData = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  console.log('cardData when rerendered: ', cardData);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openedCardIndex = _useState[0],\n      setOpenedCardIndex = _useState[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      siteName = _useState2[0],\n      setSiteName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    // 主页刷新前存入 localStorage 做持久化处理\n    Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"setData\"])(cardData); // return () => {\n    //   console.log('setLocal beforeUnmount: ', cardData)\n    //   setData(cardData)\n    // }\n  }, [cardData]);\n  var modalProps = {\n    isOpen: isOpen,\n    onClose: onClose,\n    dispatch: dispatch,\n    cardData: cardData,\n    index: openedCardIndex,\n    openedCardIndex: openedCardIndex,\n    setOpenedCardIndex: setOpenedCardIndex\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log('openedCardIndex changed to: ', openedCardIndex);\n\n    if (openedCardIndex !== null) {\n      onOpen();\n\n      if (openedCardIndex >= 0) {\n        setUrl(cardData[openedCardIndex].href);\n        setSiteName(cardData[openedCardIndex].text);\n      }\n    } else {\n      onClose();\n    }\n  }, [openedCardIndex]);\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var index = openedCardIndex;\n    var datum = {\n      href: url,\n      text: siteName\n    };\n\n    if (index >= 0) {\n      console.log('正在修改现有数据');\n      dispatch({\n        type: 'edit_card',\n        payload: {\n          index: index,\n          datum: datum\n        }\n      });\n    } else {\n      console.log('正在添加新数据');\n      dispatch({\n        type: 'add_card',\n        payload: {\n          datum: datum\n        }\n      });\n    }\n\n    handleModalClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    var index = openedCardIndex;\n    console.log('正在删除数据');\n    dispatch({\n      type: 'del_card',\n      payload: {\n        index: index\n      }\n    });\n    handleModalClose();\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setSiteName('');\n    setUrl('');\n    setOpenedCardIndex(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n      isOpen: isOpen,\n      onClick: onClose,\n      motionPreset: \"slideInBottom\",\n      isCentered: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n          children: \"Add shortcut\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n          pb: 6,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n              children: \"Website Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              placeholder: \"Website Name\",\n              value: siteName,\n              onChange: function onChange(e) {\n                return setSiteName(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n            mt: 4,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n              children: \"URL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 137,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              placeholder: \"URL\",\n              value: url,\n              onChange: function onChange(e) {\n                return setUrl(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalFooter\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n            w: \"100%\",\n            children: [openedCardIndex !== -1 && openedCardIndex !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              colorScheme: \"red\",\n              mr: 3,\n              onClick: handleDelete,\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n                colorScheme: \"blue\",\n                mr: 3,\n                onClick: handleSubmit,\n                children: \"Save\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 151,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n                onClick: handleModalClose,\n                children: \"Cancel\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 154,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 150,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"Mi/QSatW/i/aHBObqNRDz31S8NI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n};\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsInR5cGUiLCJwdXNoIiwicGF5bG9hZCIsImRhdHVtIiwic3BsaWNlIiwiaW5kZXgiLCJIb21lIiwidXNlUmVkdWNlciIsImdldERhdGEiLCJjYXJkRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3BlbmVkQ2FyZEluZGV4Iiwic2V0T3BlbmVkQ2FyZEluZGV4IiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm1vZGFsUHJvcHMiLCJocmVmIiwidGV4dCIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlRGVsZXRlIiwibWFwIiwiYyIsImkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJGb3JtYXRQbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxNQUFNQyxRQUFRLEdBQUcsd0tBQUlGLEtBQVAsQ0FBZDs7QUFDQSxVQUFRQyxNQUFNLENBQUNFLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRUQsY0FBUSxDQUFDRSxJQUFULENBQWNILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxLQUE3QjtBQUNBLGFBQU9KLFFBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0VBLGNBQVEsQ0FBQ0ssTUFBVCxDQUFnQk4sTUFBTSxDQUFDSSxPQUFQLENBQWVHLEtBQS9CLEVBQXNDLENBQXRDLEVBQXlDUCxNQUFNLENBQUNJLE9B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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxrQkFERjtBQXFERDs7R0F6SHVCekIsSTtVQUtjVSw4RDs7O0tBTGRWLEk7O0FBMkh4QixJQUFNaUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLHNCQUN4QjtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBLGtCQUR3QjtBQUFBLENBQTFCOztNQUFNQSxpQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2VudGVyLFxuICBWU3RhY2ssXG4gIFdyYXAsXG4gIHVzZURpc2Nsb3N1cmUsXG4gIE1vZGFsLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsRm9vdGVyLFxuICBNb2RhbEJvZHksXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZsZXgsXG4gIFNwYWNlcixcbiAgQm94LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIEhlYWRDb250ZW50LCBTZWFyY2hCYXIsIEVtcHR5UGxhY2VIb2xkZXJDYXJkLCBHb29nbGVIZWFkaW5nLCBBZGRPckVkaXRNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXREYXRhLCBzZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2FkZF9jYXJkJzpcbiAgICAgIG5ld1N0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQuZGF0dW0pXG4gICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICBjYXNlICdlZGl0X2NhcmQnOlxuICAgICAgbmV3U3RhdGUuc3BsaWNlKGFjdGlvbi5wYXlsb2FkLmluZGV4LCAxLCBhY3Rpb24ucGF5bG9hZC5kYXR1bSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIGNhc2UgJ2RlbF9jYXJkJzpcbiAgICAgIG5ld1N0YXRlLnNwbGljZShhY3Rpb24ucGF5bG9hZC5pbmRleCwgMSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FyZERhdGEsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgZ2V0RGF0YSgpKVxuICBjb25zb2xlLmxvZygnY2FyZERhdGEgd2hlbiByZXJlbmRlcmVkOiAnLCBjYXJkRGF0YSlcblxuICBjb25zdCBbb3BlbmVkQ2FyZEluZGV4LCBzZXRPcGVuZWRDYXJkSW5kZXhdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gIGNvbnN0IFtzaXRlTmFtZSwgc2V0U2l0ZU5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOS4u+mhteWIt+aWsOWJjeWtmOWFpSBsb2NhbFN0b3JhZ2Ug5YGa5oyB5LmF5YyW5aSE55CGXG4gICAgc2V0RGF0YShjYXJkRGF0YSlcbiAgICAvLyByZXR1cm4gKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NldExvY2FsIGJlZm9yZVVubW91bnQ6ICcsIGNhcmREYXRhKVxuICAgIC8vICAgc2V0RGF0YShjYXJkRGF0YSlcbiAgICAvLyB9XG4gIH0sIFtjYXJkRGF0YV0pXG5cbiAgY29uc3QgbW9kYWxQcm9wcyA9IHtcbiAgICBpc09wZW4sXG4gICAgb25DbG9zZSxcbiAgICBkaXNwYXRjaCxcbiAgICBjYXJkRGF0YSxcbiAgICBpbmRleDogb3BlbmVkQ2FyZEluZGV4LFxuICAgIG9wZW5lZENhcmRJbmRleCxcbiAgICBzZXRPcGVuZWRDYXJkSW5kZXgsXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbmVkQ2FyZEluZGV4IGNoYW5nZWQgdG86ICcsIG9wZW5lZENhcmRJbmRleClcbiAgICBpZiAob3BlbmVkQ2FyZEluZGV4ICE9PSBudWxsKSB7XG4gICAgICBvbk9wZW4oKVxuICAgICAgaWYgKG9wZW5lZENhcmRJbmRleCA+PSAwKSB7XG4gICAgICAgIHNldFVybChjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLmhyZWYpXG4gICAgICAgIHNldFNpdGVOYW1lKGNhcmREYXRhW29wZW5lZENhcmRJbmRleF0udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25DbG9zZSgpXG4gICAgfVxuICB9LCBbb3BlbmVkQ2FyZEluZGV4XSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHNpdGVOYW1lLnRyaW0oKSA9PT0gJycgfHwgdXJsLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IG9wZW5lZENhcmRJbmRleFxuICAgIGNvbnN0IGRhdHVtID0geyBocmVmOiB1cmwsIHRleHQ6IHNpdGVOYW1lIH1cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOS/ruaUueeOsOacieaVsOaNricpXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlZGl0X2NhcmQnLCBwYXlsb2FkOiB7IGluZGV4LCBkYXR1bSB9IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjmt7vliqDmlrDmlbDmja4nKVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnYWRkX2NhcmQnLCBwYXlsb2FkOiB7IGRhdHVtIH0gfSlcbiAgICB9XG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBvcGVuZWRDYXJkSW5kZXhcbiAgICBjb25zb2xlLmxvZygn5q2j5Zyo5Yig6Zmk5pWw5o2uJylcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkZWxfY2FyZCcsIHBheWxvYWQ6IHsgaW5kZXggfSB9KVxuICAgIGhhbmRsZU1vZGFsQ2xvc2UoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRTaXRlTmFtZSgnJylcbiAgICBzZXRVcmwoJycpXG4gICAgc2V0T3BlbmVkQ2FyZEluZGV4KG51bGwpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRDb250ZW50IHRleHQ9XCJOZXcgVGFiXCIgLz5cbiAgICAgIDxDZW50ZXIgaD1cIjEwMHZoXCIgbWF4Vz1cIjgwMHB4XCIgdz1cIjEwMCVcIiBteD1cImF1dG9cIiBwYj17MjB9PlxuICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgIDxHb29nbGVIZWFkaW5nIC8+XG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICAgIDxXcmFwIHNwYWNpbmc9XCIyMHB4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAge2NhcmREYXRhICYmXG4gICAgICAgICAgICAgIGNhcmREYXRhLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aSArICcnfSB7Li4uY30gaW5kZXg9e2l9IG9uT3Blbj17b25PcGVufSBzZXRPcGVuZWRDYXJkSW5kZXg9e3NldE9wZW5lZENhcmRJbmRleH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Q2FyZCBvbk9wZW49e29uT3Blbn0gc2V0T3BlbmVkQ2FyZEluZGV4PXtzZXRPcGVuZWRDYXJkSW5kZXh9IC8+XG4gICAgICAgICAgICA8Rm9ybWF0UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgICA8L1dyYXA+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9DZW50ZXI+XG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9e29uQ2xvc2V9IG1vdGlvblByZXNldD1cInNsaWRlSW5Cb3R0b21cIiBpc0NlbnRlcmVkPlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPE1vZGFsSGVhZGVyPkFkZCBzaG9ydGN1dDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+V2Vic2l0ZSBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIldlYnNpdGUgTmFtZVwiIHZhbHVlPXtzaXRlTmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXRlTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVSTDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJVUkxcIiB2YWx1ZT17dXJsfSBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAge29wZW5lZENhcmRJbmRleCAhPT0gLTEgJiYgb3BlbmVkQ2FyZEluZGV4ICE9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCIgbXI9ezN9IG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgbXI9ezN9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IEZvcm1hdFBsYWNlaG9sZGVyID0gKCkgPT4gKFxuICA8PlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICAgIDxFbXB0eVBsYWNlSG9sZGVyQ2FyZCAvPlxuICA8Lz5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})