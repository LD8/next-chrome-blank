webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: CARD_DATA, getData, setData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CARD_DATA\", function() { return CARD_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setData\", function() { return setData; });\nvar CARD_DATA = 'card_data';\nvar getData = function getData() {\n  if (true) {\n    if (window.localStorage.getItem(CARD_DATA) && window.localStorage.getItem(CARD_DATA) !== 'undefined' && typeof window.localStorage.getItem(CARD_DATA) === 'string') {\n      return JSON.parse(window.localStorage.getItem(CARD_DATA));\n    }\n\n    return [// { href: 'https://www.baidu.com/', text: '百度' },\n      // { href: 'https://www.lagou.com/', text: '拉勾' },\n      // { href: 'https://www.douban.com/', text: '豆瓣' },\n    ];\n  }\n};\nvar setData = function setData(data) {\n  if (true) {\n    window.localStorage.setItem(CARD_DATA, JSON.stringify(data));\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/_next@10.0.6@next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5kZXguanM/NDIyZCJdLCJuYW1lcyI6WyJDQVJEX0RBVEEiLCJnZXREYXRhIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldERhdGEiLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxTQUFTLEdBQUcsV0FBbEI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQzNCLFlBQW1DO0FBQ2pDLFFBQ0VDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJKLFNBQTVCLEtBQ0FFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJKLFNBQTVCLE1BQTJDLFdBRDNDLElBRUEsT0FBT0UsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QkosU0FBNUIsQ0FBUCxLQUFrRCxRQUhwRCxFQUlFO0FBQ0EsYUFBT0ssSUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJKLFNBQTVCLENBQVgsQ0FBUDtBQUNEOztBQUNELFdBQU8sQ0FDTDtBQUNBO0FBQ0E7QUFISyxLQUFQO0FBS0Q7QUFDRixDQWZNO0FBaUJBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVTtBQUMvQixZQUFtQztBQUNqQ04sVUFBTSxDQUFDQyxZQUFQLENBQW9CTSxPQUFwQixDQUE0QlQsU0FBNUIsRUFBdUNLLElBQUksQ0FBQ0ssU0FBTCxDQUFlRixJQUFmLENBQXZDO0FBQ0Q7QUFDRixDQUpNIiwiZmlsZSI6Ii4vdXRpbHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ0FSRF9EQVRBID0gJ2NhcmRfZGF0YSdcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQVJEX0RBVEEpICYmXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FSRF9EQVRBKSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FSRF9EQVRBKSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQVJEX0RBVEEpKVxuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgLy8geyBocmVmOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tLycsIHRleHQ6ICfnmb7luqYnIH0sXG4gICAgICAvLyB7IGhyZWY6ICdodHRwczovL3d3dy5sYWdvdS5jb20vJywgdGV4dDogJ+aLieWLvicgfSxcbiAgICAgIC8vIHsgaHJlZjogJ2h0dHBzOi8vd3d3LmRvdWJhbi5jb20vJywgdGV4dDogJ+ixhueToycgfSxcbiAgICBdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldERhdGEgPSAoZGF0YSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSRF9EQVRBLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/index.js\n");

/***/ })

})