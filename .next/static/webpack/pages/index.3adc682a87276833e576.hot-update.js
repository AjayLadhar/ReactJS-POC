"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/speakerList.js":
/*!***************************************!*\
  !*** ./src/components/speakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ "./src/components/speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useRequestSpeakers */ "./src/components/hooks/useRequestSpeakers.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();






function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useRequestSpeakers = (0,_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__.default)(2000),
      speakersData = _useRequestSpeakers.speakersData,
      requestStatus = _useRequestSpeakers.requestStatus,
      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle,
      error = _useRequestSpeakers.error;

  if (hasErrored === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "text-danger",
    children: ["Error: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
      children: [" Loading speaker data failed! ", error, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 52
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 16
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_1__.default, {
      type: "media",
      rows: 15,
      className: "speakerList-Placeholder",
      ready: isLoading === false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_0__.default, {
            speaker: speaker,
            showSession: showSession,
            onFavoriteToggle: function onFavoriteToggle() {
              return _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(SpeakerList, "QiWpHm7NRjWpnNbxEpk5kxnuj6c=", false, function () {
  return [_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__.default];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FkYzY4MmE4NzI3NjgzM2U1NzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUVqQyw0QkFHSUYsa0VBQWtCLENBQUMsSUFBRCxDQUh0QjtBQUFBLE1BQ0lHLFlBREosdUJBQ0lBLFlBREo7QUFBQSxNQUNrQkMsYUFEbEIsdUJBQ2tCQSxhQURsQjtBQUFBLE1BRUlDLGlCQUZKLHVCQUVJQSxnQkFGSjtBQUFBLE1BRXNCQyxLQUZ0Qix1QkFFc0JBLEtBRnRCOztBQUtBLE1BQUdDLFVBQVUsS0FBSyxJQUFsQixFQUNJLG9CQUFPO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSx1Q0FBb0M7QUFBQSxtREFBa0NELEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVKLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0ksOERBQUMsc0RBQUQ7QUFDSSxVQUFJLEVBQUcsT0FEWDtBQUVJLFVBQUksRUFBSSxFQUZaO0FBR0ksZUFBUyxFQUFHLHlCQUhoQjtBQUlJLFdBQUssRUFBSUUsU0FBUyxLQUFLLEtBSjNCO0FBQUEsNkJBTUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDS0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDakMsOEJBQ0ksOERBQUMsNkNBQUQ7QUFFQSxtQkFBTyxFQUFJQSxPQUZYO0FBR0EsdUJBQVcsRUFBSVIsV0FIZjtBQUlBLDRCQUFnQixFQUFLO0FBQUEscUJBQU1HLGlCQUFnQixDQUFDSyxPQUFPLENBQUNDLEVBQVQsQ0FBdEI7QUFBQTtBQUpyQixhQUNPRCxPQUFPLENBQUNDLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQU9ILFNBUkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDs7R0FoQ1FWO1VBS0REOzs7S0FMQ0M7QUFrQ1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlckxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgIGZyb20gXCIuL3NwZWFrZXJcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSAncmVhY3QtcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdFNwZWFrZXJzIGZyb20gXCIuL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vyc1wiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3QoeyBzaG93U2Vzc2lvbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBcclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlLCBlcnJvciBcclxuICAgIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMCk7XHJcblxyXG4gICAgaWYoaGFzRXJyb3JlZCA9PT0gdHJ1ZSkgXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FcnJvcjogPGI+IExvYWRpbmcgc3BlYWtlciBkYXRhIGZhaWxlZCEge2Vycm9yfSA8L2I+IDwvZGl2PjtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgIHJvd3MgPSB7MTV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcInNwZWFrZXJMaXN0LVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHJlYWR5ID0ge2lzTG9hZGluZyA9PT0gZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlciA9IHtzcGVha2VyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9uID0ge3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPSB7ICgpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3RTcGVha2VycyIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb24iLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwib25GYXZvcml0ZVRvZ2dsZSIsImVycm9yIiwiaGFzRXJyb3JlZCIsImlzTG9hZGluZyIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=