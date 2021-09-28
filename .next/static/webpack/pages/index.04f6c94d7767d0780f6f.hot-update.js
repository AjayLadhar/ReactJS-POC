"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/speakerList.js":
/*!***************************************!*\
  !*** ./src/components/speakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker */ "./src/components/speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  function _onFavoriteToggle(id) {
    var speakerRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecNew = _objectSpread(_objectSpread({}, speakerRecPrevious), {}, {
      favorite: !speakerRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecNew : rec;
    });
    setSpeakersData(speakersDataNew); // console.log(speakerRecPrevious);
    // console.log(speakerRecNew);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "row",
      children: speakersData.map(function (speaker) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
          speaker: speaker,
          showSession: showSession,
          onFavoriteToggle: function onFavoriteToggle() {
            return _onFavoriteToggle(speaker.id);
          }
        }, speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(SpeakerList, "7PPab5m9JrsS70STMPZOCkXcQwM=");

_c = SpeakerList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakerList);

var _c;

$RefreshReg$(_c, "SpeakerList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRmNmM5NGQ3NzY3ZDA3ODBmNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFdBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBRWpDLGtCQUF3Q0YsK0NBQVEsQ0FBQ0QsOENBQUQsQ0FBaEQ7QUFBQSxNQUFPSSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBLFdBQVNDLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUMzQixRQUFNQyxrQkFBa0IsR0FBR0osWUFBWSxDQUFDSyxJQUFiLENBQW1CLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBZjtBQUFBLEtBQXRCLENBQTNCOztBQUNBLFFBQU1JLGFBQWEsbUNBQ1pILGtCQURZO0FBRWZJLE1BQUFBLFFBQVEsRUFBRSxDQUFDSixrQkFBa0IsQ0FBQ0k7QUFGZixNQUFuQjs7QUFLQSxRQUFNQyxlQUFlLEdBQUdULFlBQVksQ0FBQ1UsR0FBYixDQUFrQixVQUFTSixHQUFULEVBQWE7QUFDbkQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGFBQWhCLEdBQWdDRCxHQUF2QztBQUNILEtBRnVCLENBQXhCO0FBSUFMLElBQUFBLGVBQWUsQ0FBQ1EsZUFBRCxDQUFmLENBWDJCLENBYTNCO0FBQ0E7QUFDSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDS1QsWUFBWSxDQUFDVSxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDakMsNEJBQ0ksOERBQUMsNkNBQUQ7QUFFQSxpQkFBTyxFQUFJQSxPQUZYO0FBR0EscUJBQVcsRUFBSVosV0FIZjtBQUlBLDBCQUFnQixFQUFLO0FBQUEsbUJBQU1HLGlCQUFnQixDQUFDUyxPQUFPLENBQUNSLEVBQVQsQ0FBdEI7QUFBQTtBQUpyQixXQUNPUSxPQUFPLENBQUNSLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESjtBQU9ILE9BUkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBcENRTDs7S0FBQUE7QUFzQ1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlckxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgIGZyb20gXCIuL3NwZWFrZXJcIjtcclxuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ufSkge1xyXG5cclxuICAgIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlIChpZCkge1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKCByZWMgPT4gcmVjLmlkID09PSBpZCk7XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlclJlY05ldyA9IHtcclxuICAgICAgICAgICAgLi4uc3BlYWtlclJlY1ByZXZpb3VzLFxyXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWNQcmV2aW91cy5mYXZvcml0ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcCggZnVuY3Rpb24ocmVjKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjTmV3IDogcmVjO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGVha2VyUmVjUHJldmlvdXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNwZWFrZXJSZWNOZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXIgPSB7c3BlYWtlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9uID0ge3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSA9IHsgKCkgPT4gb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsInVzZVN0YXRlIiwiU3BlYWtlckxpc3QiLCJzaG93U2Vzc2lvbiIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjTmV3IiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==