webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: CARD_DATA, getData, setData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CARD_DATA\", function() { return CARD_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setData\", function() { return setData; });\nvar CARD_DATA = 'card_data';\nvar getData = function getData() {\n  return Promise.resolve(JSON.parse(window.localStorage.getItem(CARD_DATA)) || [{\n    href: 'https://www.baidu.com/',\n    text: '百度'\n  }, {\n    href: 'https://www.lagou.com/',\n    text: '拉勾'\n  }, {\n    href: 'https://www.douban.com/',\n    text: '豆瓣'\n  }]);\n};\nvar setData = function setData(data) {\n  if (true) {\n    window.localStorage.setItem(CARD_DATA, JSON.stringify(data));\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5kZXguanM/NDIyZCJdLCJuYW1lcyI6WyJDQVJEX0RBVEEiLCJnZXREYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaHJlZiIsInRleHQiLCJzZXREYXRhIiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsU0FBUyxHQUFHLFdBQWxCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUMzQixTQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FDTEMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJSLFNBQTVCLENBQVgsS0FBc0QsQ0FDcEQ7QUFBRVMsUUFBSSxFQUFFLHdCQUFSO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FEb0QsRUFFcEQ7QUFBRUQsUUFBSSxFQUFFLHdCQUFSO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FGb0QsRUFHcEQ7QUFBRUQsUUFBSSxFQUFFLHlCQUFSO0FBQW1DQyxRQUFJLEVBQUU7QUFBekMsR0FIb0QsQ0FEakQsQ0FBUDtBQU9ELENBUk07QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVU7QUFDL0IsWUFBbUM7QUFDakNOLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQk0sT0FBcEIsQ0FBNEJiLFNBQTVCLEVBQXVDSSxJQUFJLENBQUNVLFNBQUwsQ0FBZUYsSUFBZixDQUF2QztBQUNEO0FBQ0YsQ0FKTSIsImZpbGUiOiIuL3V0aWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENBUkRfREFUQSA9ICdjYXJkX2RhdGEnXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKENBUkRfREFUQSkpIHx8IFtcbiAgICAgIHsgaHJlZjogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbS8nLCB0ZXh0OiAn55m+5bqmJyB9LFxuICAgICAgeyBocmVmOiAnaHR0cHM6Ly93d3cubGFnb3UuY29tLycsIHRleHQ6ICfmi4nli74nIH0sXG4gICAgICB7IGhyZWY6ICdodHRwczovL3d3dy5kb3ViYW4uY29tLycsIHRleHQ6ICfosYbnk6MnIH0sXG4gICAgXSxcbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJEX0RBVEEsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/index.js\n");

/***/ })

})