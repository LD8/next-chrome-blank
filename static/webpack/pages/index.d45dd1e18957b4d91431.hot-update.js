webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'add_card':\n      var newState = Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state);\n\n      newState.push(action.payload.datum);\n      return newState;\n\n    case 'edit_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1, action.payload.datum);\n\n    case 'del_card':\n      return Object(_Users_lipeiwen_Desktop_next_chrome_blank_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state).splice(action.payload.index, 1);\n\n    default:\n      return state;\n  }\n};\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(reducer, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getData\"])()),\n      cardData = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  console.log('cardData: ', cardData);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openedCardIndex = _useState[0],\n      setOpenedCardIndex = _useState[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      siteName = _useState2[0],\n      setSiteName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    // 主页刷新前存入 localStorage 做持久化处理\n    Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"setData\"])(cardData);\n    return function () {\n      console.log('setLocal: ', cardData);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"setData\"])(cardData);\n    };\n  }, [cardData]); // const modalProps = {\n  //   isOpen,\n  //   onClose,\n  //   dispatch,\n  //   href: openedCardIndex === -1 ? null : cardData[openedCardIndex].href,\n  //   text: openedCardIndex === -1 ? null : cardData[openedCardIndex].text,\n  //   index: openedCardIndex,\n  // }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log('openedCardIndex changed to: ', openedCardIndex);\n\n    if (openedCardIndex !== null) {\n      onOpen();\n\n      if (openedCardIndex >= 0) {\n        setUrl(cardData[openedCardIndex].href);\n        setSiteName(cardData[openedCardIndex].text);\n      }\n    } else {\n      onClose();\n    }\n  }, [openedCardIndex]);\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var index = openedCardIndex;\n    var datum = {\n      href: url,\n      text: siteName\n    };\n\n    if (index >= 0) {\n      console.log('正在修改现有数据');\n      dispatch({\n        type: 'edit_card',\n        payload: {\n          index: index,\n          datum: datum\n        }\n      });\n    } else {\n      console.log('正在添加新数据');\n      dispatch({\n        type: 'add_card',\n        payload: {\n          datum: datum\n        }\n      });\n    }\n\n    handleModalClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    var index = openedCardIndex;\n    console.log('正在删除数据');\n    dispatch({\n      type: 'del_card',\n      payload: {\n        index: index\n      }\n    });\n    handleModalClose();\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setSiteName('');\n    setUrl('');\n    setOpenedCardIndex(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"HeadContent\"], {\n      text: \"New Tab\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      h: \"100vh\",\n      maxW: \"800px\",\n      w: \"100%\",\n      mx: \"auto\",\n      pb: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"GoogleHeading\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Wrap\"], {\n          spacing: \"20px\",\n          justify: \"center\",\n          children: [cardData && cardData.map(function (c, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], _objectSpread(_objectSpread({}, c), {}, {\n              index: i,\n              onOpen: onOpen,\n              setOpenedCardIndex: setOpenedCardIndex\n            }), i + '', false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 17\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n            onOpen: onOpen,\n            setOpenedCardIndex: setOpenedCardIndex\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormatPlaceholder, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n      isOpen: isOpen,\n      onClick: onClose,\n      motionPreset: \"slideInBottom\",\n      isCentered: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n          children: \"Add shortcut\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n          pb: 6,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n              children: \"Website Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              placeholder: \"Website Name\",\n              value: siteName,\n              onChange: function onChange(e) {\n                return setSiteName(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n            mt: 4,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n              children: \"URL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              placeholder: \"URL\",\n              value: url,\n              onChange: function onChange(e) {\n                return setUrl(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ModalFooter\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n            w: \"100%\",\n            children: [openedCardIndex !== -1 && openedCardIndex !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              colorScheme: \"red\",\n              mr: 3,\n              onClick: handleDelete,\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 142,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 146,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n                colorScheme: \"blue\",\n                mr: 3,\n                onClick: handleSubmit,\n                children: \"Save\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 148,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n                onClick: handleModalClose,\n                children: \"Cancel\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 151,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 147,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"Mi/QSatW/i/aHBObqNRDz31S8NI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"]];\n});\n\n_c = Home;\n\nvar FormatPlaceholder = function FormatPlaceholder() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_5__[\"EmptyPlaceHolderCard\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true);\n};\n\n_c2 = FormatPlaceholder;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"FormatPlaceholder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJwdXNoIiwicGF5bG9hZCIsImRhdHVtIiwic3BsaWNlIiwiaW5kZXgiLCJIb21lIiwidXNlUmVkdWNlciIsImdldERhdGEiLCJjYXJkRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3BlbmVkQ2FyZEluZGV4Iiwic2V0T3BlbmVkQ2FyZEluZGV4IiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJzaXRlTmFtZSIsInNldFNpdGVOYW1lIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsImhyZWYiLCJ0ZXh0IiwiaGFuZGxlU3VibWl0IiwidHJpbSIsImhhbmRsZU1vZGFsQ2xvc2UiLCJoYW5kbGVEZWxldGUiLCJtYXAiLCJjIiwiaSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZvcm1hdFBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFLFVBQU1DLFFBQVEsR0FBRyx3S0FBSUgsS0FBUCxDQUFkOztBQUNBRyxjQUFRLENBQUNDLElBQVQsQ0FBY0gsTUFBTSxDQUFDSSxPQUFQLENBQWVDLEtBQTdCO0FBQ0EsYUFBT0gsUUFBUDs7QUFDRixTQUFLLFdBQUw7QUFDRSxhQUFPLHdLQUFJSCxLQUFKLEVBQVdPLE1BQVgsQ0FBa0JOLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRyxLQUFqQyxFQUF3QyxDQUF4QyxFQUEyQ1AsTUFBTSxDQUFDSSxPQUFQ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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUFxREQ7O0dBeEh1QnhCLEk7VUFLY1UsOEQ7OztLQUxkVixJOztBQTBIeEIsSUFBTWdDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxzQkFDeEI7QUFBQSw0QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQSxrQkFEd0I7QUFBQSxDQUExQjs7TUFBTUEsaUIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENlbnRlcixcbiAgVlN0YWNrLFxuICBXcmFwLFxuICB1c2VEaXNjbG9zdXJlLFxuICBNb2RhbCxcbiAgTW9kYWxPdmVybGF5LFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbEZvb3RlcixcbiAgTW9kYWxCb2R5LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBGbGV4LFxuICBTcGFjZXIsXG4gIEJveCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBIZWFkQ29udGVudCwgU2VhcmNoQmFyLCBFbXB0eVBsYWNlSG9sZGVyQ2FyZCwgR29vZ2xlSGVhZGluZywgQWRkT3JFZGl0TW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2FkZF9jYXJkJzpcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXVxuICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZC5kYXR1bSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIGNhc2UgJ2VkaXRfY2FyZCc6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuaW5kZXgsIDEsIGFjdGlvbi5wYXlsb2FkLmRhdHVtKVxuICAgIGNhc2UgJ2RlbF9jYXJkJzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGVdLnNwbGljZShhY3Rpb24ucGF5bG9hZC5pbmRleCwgMSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NhcmREYXRhLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdldERhdGEoKSlcbiAgY29uc29sZS5sb2coJ2NhcmREYXRhOiAnLCBjYXJkRGF0YSlcblxuICBjb25zdCBbb3BlbmVkQ2FyZEluZGV4LCBzZXRPcGVuZWRDYXJkSW5kZXhdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gIGNvbnN0IFtzaXRlTmFtZSwgc2V0U2l0ZU5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOS4u+mhteWIt+aWsOWJjeWtmOWFpSBsb2NhbFN0b3JhZ2Ug5YGa5oyB5LmF5YyW5aSE55CGXG4gICAgc2V0RGF0YShjYXJkRGF0YSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3NldExvY2FsOiAnLCBjYXJkRGF0YSlcbiAgICAgIHNldERhdGEoY2FyZERhdGEpXG4gICAgfVxuICB9LCBbY2FyZERhdGFdKVxuXG4gIC8vIGNvbnN0IG1vZGFsUHJvcHMgPSB7XG4gIC8vICAgaXNPcGVuLFxuICAvLyAgIG9uQ2xvc2UsXG4gIC8vICAgZGlzcGF0Y2gsXG4gIC8vICAgaHJlZjogb3BlbmVkQ2FyZEluZGV4ID09PSAtMSA/IG51bGwgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLmhyZWYsXG4gIC8vICAgdGV4dDogb3BlbmVkQ2FyZEluZGV4ID09PSAtMSA/IG51bGwgOiBjYXJkRGF0YVtvcGVuZWRDYXJkSW5kZXhdLnRleHQsXG4gIC8vICAgaW5kZXg6IG9wZW5lZENhcmRJbmRleCxcbiAgLy8gfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuZWRDYXJkSW5kZXggY2hhbmdlZCB0bzogJywgb3BlbmVkQ2FyZEluZGV4KVxuICAgIGlmIChvcGVuZWRDYXJkSW5kZXggIT09IG51bGwpIHtcbiAgICAgIG9uT3BlbigpXG4gICAgICBpZiAob3BlbmVkQ2FyZEluZGV4ID49IDApIHtcbiAgICAgICAgc2V0VXJsKGNhcmREYXRhW29wZW5lZENhcmRJbmRleF0uaHJlZilcbiAgICAgICAgc2V0U2l0ZU5hbWUoY2FyZERhdGFbb3BlbmVkQ2FyZEluZGV4XS50ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNsb3NlKClcbiAgICB9XG4gIH0sIFtvcGVuZWRDYXJkSW5kZXhdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoc2l0ZU5hbWUudHJpbSgpID09PSAnJyB8fCB1cmwudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gb3BlbmVkQ2FyZEluZGV4XG4gICAgY29uc3QgZGF0dW0gPSB7IGhyZWY6IHVybCwgdGV4dDogc2l0ZU5hbWUgfVxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5L+u5pS5546w5pyJ5pWw5o2uJylcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2VkaXRfY2FyZCcsIHBheWxvYWQ6IHsgaW5kZXgsIGRhdHVtIH0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ+ato+WcqOa3u+WKoOaWsOaVsOaNricpXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdhZGRfY2FyZCcsIHBheWxvYWQ6IHsgZGF0dW0gfSB9KVxuICAgIH1cbiAgICBoYW5kbGVNb2RhbENsb3NlKClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IG9wZW5lZENhcmRJbmRleFxuICAgIGNvbnNvbGUubG9nKCfmraPlnKjliKDpmaTmlbDmja4nKVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RlbF9jYXJkJywgcGF5bG9hZDogeyBpbmRleCB9IH0pXG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldFNpdGVOYW1lKCcnKVxuICAgIHNldFVybCgnJylcbiAgICBzZXRPcGVuZWRDYXJkSW5kZXgobnVsbClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZENvbnRlbnQgdGV4dD1cIk5ldyBUYWJcIiAvPlxuICAgICAgPENlbnRlciBoPVwiMTAwdmhcIiBtYXhXPVwiODAwcHhcIiB3PVwiMTAwJVwiIG14PVwiYXV0b1wiIHBiPXsyMH0+XG4gICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgPEdvb2dsZUhlYWRpbmcgLz5cbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgPFdyYXAgc3BhY2luZz1cIjIwcHhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7Y2FyZERhdGEgJiZcbiAgICAgICAgICAgICAgY2FyZERhdGEubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpICsgJyd9IHsuLi5jfSBpbmRleD17aX0gb25PcGVuPXtvbk9wZW59IHNldE9wZW5lZENhcmRJbmRleD17c2V0T3BlbmVkQ2FyZEluZGV4fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxDYXJkIG9uT3Blbj17b25PcGVufSBzZXRPcGVuZWRDYXJkSW5kZXg9e3NldE9wZW5lZENhcmRJbmRleH0gLz5cbiAgICAgICAgICAgIDxGb3JtYXRQbGFjZWhvbGRlciAvPlxuICAgICAgICAgIDwvV3JhcD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbGljaz17b25DbG9zZX0gbW90aW9uUHJlc2V0PVwic2xpZGVJbkJvdHRvbVwiIGlzQ2VudGVyZWQ+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXI+QWRkIHNob3J0Y3V0PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5XZWJzaXRlIE5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiV2Vic2l0ZSBOYW1lXCIgdmFsdWU9e3NpdGVOYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFNpdGVOYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17NH0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+VVJMPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlVSTFwiIHZhbHVlPXt1cmx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XG5cbiAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgICB7b3BlbmVkQ2FyZEluZGV4ICE9PSAtMSAmJiBvcGVuZWRDYXJkSW5kZXggIT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBtcj17M30gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgRm9ybWF0UGxhY2Vob2xkZXIgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gICAgPEVtcHR5UGxhY2VIb2xkZXJDYXJkIC8+XG4gIDwvPlxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})