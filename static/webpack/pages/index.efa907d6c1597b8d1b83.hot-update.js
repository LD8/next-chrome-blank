webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddOrEditModal.js":
/*!**************************************!*\
  !*** ./components/AddOrEditModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/_react@17.0.1@react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@17.0.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/_@chakra-ui_react@1.2.1@@chakra-ui/react/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/lipeiwen/Desktop/next-chrome-blank/components/AddOrEditModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar AddOrEditModal = function AddOrEditModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      href = _ref.href,\n      text = _ref.text,\n      index = _ref.index,\n      dispatch = _ref.dispatch;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(text || ''),\n      siteName = _useState[0],\n      setSiteName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(href || ''),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var newCardData = dispatch({});\n  console.log(newCardData);\n\n  var handleSubmit = function handleSubmit() {\n    if (siteName.trim() === '' || url.trim() === '') {\n      return;\n    }\n\n    var datum = {\n      href: url,\n      text: siteName\n    }; // console.log('datum: ', datum)\n\n    if (index !== -1) {\n      console.log('正在修改现有数据');\n      dispatch({\n        type: 'edit_card',\n        payload: {\n          index: index,\n          datum: datum\n        }\n      }); // newCardData.splice(index, 1, datum)\n      // setCardData(newCardData)\n    } else {\n      console.log('正在添加新数据'); // newCardData.push(datum)\n      // setCardData(newCardData)\n      // console.log('newCardData: ', newCardData)\n\n      dispatch({\n        type: 'add_card',\n        payload: {\n          datum: datum\n        }\n      });\n      setSiteName('');\n      setUrl('');\n    }\n\n    onClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    console.log('正在删除数据'); // newCardData.splice(index, 1)\n    // setCardData(newCardData)\n\n    dispatch({\n      type: 'del_card',\n      payload: {\n        index: index\n      }\n    });\n    onClose();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n    isOpen: isOpen,\n    isCentered: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalContent\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalHeader\"], {\n        children: \"Add shortcut\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalBody\"], {\n        pb: 6,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n            children: \"Website Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            value: siteName,\n            placeholder: \"Website Name\",\n            onChange: function onChange(e) {\n              return setSiteName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n          mt: 4,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n            children: \"URL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            value: url,\n            placeholder: \"URL\",\n            onChange: function onChange(e) {\n              return setUrl(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ModalFooter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          w: \"100%\",\n          children: [index !== -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            colorScheme: \"red\",\n            mr: 3,\n            onClick: handleDelete,\n            children: \"Delete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spacer\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              colorScheme: \"blue\",\n              mr: 3,\n              onClick: handleSubmit,\n              children: \"Save\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              onClick: onClose,\n              children: \"Cancel\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddOrEditModal, \"NxGvjvQgU9YsPbnzbhORfZIL5Oo=\");\n\n_c = AddOrEditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddOrEditModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddOrEditModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRPckVkaXRNb2RhbC5qcz9mYTQ1Il0sIm5hbWVzIjpbIkFkZE9yRWRpdE1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImhyZWYiLCJ0ZXh0IiwiaW5kZXgiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwic2l0ZU5hbWUiLCJzZXRTaXRlTmFtZSIsInVybCIsInNldFVybCIsIm5ld0NhcmREYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJkYXR1bSIsInR5cGUiLCJwYXlsb2FkIiwiaGFuZGxlRGVsZXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWdCQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXNEO0FBQUE7O0FBQUEsTUFBbkRDLE1BQW1ELFFBQW5EQSxNQUFtRDtBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFsQ0MsSUFBa0MsUUFBbENBLElBQWtDO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzNDQyxzREFBUSxDQUFDSCxJQUFJLElBQUksRUFBVCxDQURtQztBQUFBLE1BQ3BFSSxRQURvRTtBQUFBLE1BQzFEQyxXQUQwRDs7QUFBQSxtQkFFckRGLHNEQUFRLENBQUNKLElBQUksSUFBSSxFQUFULENBRjZDO0FBQUEsTUFFcEVPLEdBRm9FO0FBQUEsTUFFL0RDLE1BRitEOztBQUczRSxNQUFNQyxXQUFXLEdBQUdOLFFBQVEsQ0FBQyxFQUFELENBQTVCO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaOztBQUNBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSVAsUUFBUSxDQUFDUSxJQUFULE9BQW9C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QTlCO0FBQWlDLG1CQUFPLEVBQUVlLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBTUUscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FLHFFQUFDLG9EQUFEO0FBQUEsb0NBQ0UscUVBQUMsdURBQUQ7QUFBUSx5QkFBVyxFQUFDLE1BQXBCO0FBQTJCLGdCQUFFLEVBQUUsQ0FBL0I7QUFBa0MscUJBQU8sRUFBRUwsWUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSxxRUFBQyx1REFBRDtBQUFRLHFCQUFPLEVBQUViLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0ExRUQ7O0dBQU1GLGM7O0tBQUFBLGM7QUE0RVNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BZGRPckVkaXRNb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxGb290ZXIsXG4gIE1vZGFsQm9keSxcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgRmxleCxcbiAgU3BhY2VyLFxuICBCb3gsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmNvbnN0IEFkZE9yRWRpdE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBocmVmLCB0ZXh0LCBpbmRleCwgZGlzcGF0Y2ggfSkgPT4ge1xuICBjb25zdCBbc2l0ZU5hbWUsIHNldFNpdGVOYW1lXSA9IHVzZVN0YXRlKHRleHQgfHwgJycpXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShocmVmIHx8ICcnKVxuICBjb25zdCBuZXdDYXJkRGF0YSA9IGRpc3BhdGNoKHt9KVxuICBjb25zb2xlLmxvZyhuZXdDYXJkRGF0YSlcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChzaXRlTmFtZS50cmltKCkgPT09ICcnIHx8IHVybC50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXR1bSA9IHsgaHJlZjogdXJsLCB0ZXh0OiBzaXRlTmFtZSB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdHVtOiAnLCBkYXR1bSlcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjkv67mlLnnjrDmnInmlbDmja4nKVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZWRpdF9jYXJkJywgcGF5bG9hZDogeyBpbmRleCwgZGF0dW0gfSB9KVxuICAgICAgLy8gbmV3Q2FyZERhdGEuc3BsaWNlKGluZGV4LCAxLCBkYXR1bSlcbiAgICAgIC8vIHNldENhcmREYXRhKG5ld0NhcmREYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5re75Yqg5paw5pWw5o2uJylcbiAgICAgIC8vIG5ld0NhcmREYXRhLnB1c2goZGF0dW0pXG4gICAgICAvLyBzZXRDYXJkRGF0YShuZXdDYXJkRGF0YSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCduZXdDYXJkRGF0YTogJywgbmV3Q2FyZERhdGEpXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdhZGRfY2FyZCcsIHBheWxvYWQ6IHsgZGF0dW0gfSB9KVxuICAgICAgc2V0U2l0ZU5hbWUoJycpXG4gICAgICBzZXRVcmwoJycpXG4gICAgfVxuICAgIG9uQ2xvc2UoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfmraPlnKjliKDpmaTmlbDmja4nKVxuICAgIC8vIG5ld0NhcmREYXRhLnNwbGljZShpbmRleCwgMSlcbiAgICAvLyBzZXRDYXJkRGF0YShuZXdDYXJkRGF0YSlcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkZWxfY2FyZCcsIHBheWxvYWQ6IHsgaW5kZXggfSB9KVxuICAgIG9uQ2xvc2UoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IGlzQ2VudGVyZWQ+XG4gICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICA8TW9kYWxIZWFkZXI+QWRkIHNob3J0Y3V0PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgPEZvcm1MYWJlbD5XZWJzaXRlIE5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17c2l0ZU5hbWV9IHBsYWNlaG9sZGVyPVwiV2Vic2l0ZSBOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXRlTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17NH0+XG4gICAgICAgICAgICA8Rm9ybUxhYmVsPlVSTDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0IHZhbHVlPXt1cmx9IHBsYWNlaG9sZGVyPVwiVVJMXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAge2luZGV4ICE9PSAtMSAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBtcj17M30gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRPckVkaXRNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddOrEditModal.js\n");

/***/ })

})