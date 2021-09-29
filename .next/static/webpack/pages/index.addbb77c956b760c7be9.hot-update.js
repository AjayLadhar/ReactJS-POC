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
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useRequestDelay */ "./src/components/hooks/useRequestDelay.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();






function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.default)(2000),
      data = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      _onFavoriteToggle = _useRequestDelay.onFavoriteToggle,
      error = _useRequestDelay.error;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.SUCCESS,
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

_s(SpeakerList, "DK7ftegUXexlEnYDV+AlCtEepyk=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWRkYmI3N2M5NTZiNzYwYzdiZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUVqQyx5QkFHSUgsK0RBQWUsQ0FBQyxJQUFELENBSG5CO0FBQUEsTUFDSUksSUFESixvQkFDSUEsSUFESjtBQUFBLE1BQ1VDLGFBRFYsb0JBQ1VBLGFBRFY7QUFBQSxNQUVJQyxpQkFGSixvQkFFSUEsZ0JBRko7QUFBQSxNQUVzQkMsS0FGdEIsb0JBRXNCQSxLQUZ0Qjs7QUFLQSxNQUFHRixhQUFhLEtBQUtKLDBFQUFyQixFQUNJLG9CQUFPO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSx1Q0FBb0M7QUFBQSxtREFBa0NNLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVKLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0ksOERBQUMsc0RBQUQ7QUFDSSxVQUFJLEVBQUcsT0FEWDtBQUVJLFVBQUksRUFBSSxFQUZaO0FBR0ksZUFBUyxFQUFHLHlCQUhoQjtBQUlJLFdBQUssRUFBSUYsYUFBYSxLQUFLSiwwRUFKL0I7QUFBQSw2QkFNSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNLUyxZQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNqQyw4QkFDSSw4REFBQyw2Q0FBRDtBQUVBLG1CQUFPLEVBQUlBLE9BRlg7QUFHQSx1QkFBVyxFQUFJVCxXQUhmO0FBSUEsNEJBQWdCLEVBQUs7QUFBQSxxQkFBTUcsaUJBQWdCLENBQUNNLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSnJCLGFBQ09ELE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBT0gsU0FSQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIOztHQWhDUVg7VUFLREY7OztLQUxDRTtBQWtDVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2VyTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciAgZnJvbSBcIi4vc3BlYWtlclwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tICdyZWFjdC1wbGFjZWhvbGRlcic7XHJcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHtSRVFVRVNUX1NUQVRVU30gZnJvbSBcIi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ufSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLCByZXF1ZXN0U3RhdHVzLCBcclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlLCBlcnJvciBcclxuICAgIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCk7XHJcblxyXG4gICAgaWYocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkgXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FcnJvcjogPGI+IExvYWRpbmcgc3BlYWtlciBkYXRhIGZhaWxlZCEge2Vycm9yfSA8L2I+IDwvZGl2PjtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgIHJvd3MgPSB7MTV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcInNwZWFrZXJMaXN0LVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHJlYWR5ID0ge3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlciA9IHtzcGVha2VyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9uID0ge3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPSB7ICgpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiU3BlYWtlckxpc3QiLCJzaG93U2Vzc2lvbiIsImRhdGEiLCJyZXF1ZXN0U3RhdHVzIiwib25GYXZvcml0ZVRvZ2dsZSIsImVycm9yIiwiRkFJTFVSRSIsIlNVQ0NFU1MiLCJzcGVha2Vyc0RhdGEiLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9