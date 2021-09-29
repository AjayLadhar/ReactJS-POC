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
      isLoading = _useRequestSpeakers.isLoading,
      hasErrored = _useRequestSpeakers.hasErrored,
      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle,
      error = _useRequestSpeakers.error;

  if (hasErrored === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "text-danger",
    children: ["Error: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
      children: [" Loading speaker data failed! ", error, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 52
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 16
  }, this); //if(isLoading === true) return <div>Loading...</div>;

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
            lineNumber: 29,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(SpeakerList, "Ll1bDGoIxT/e1kF/GCbWDDettKk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzUyNzg3NmI1MjE2MmEwYmQ2ZTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUVqQyw0QkFJSUYsa0VBQWtCLENBQUMsSUFBRCxDQUp0QjtBQUFBLE1BQ0lHLFlBREosdUJBQ0lBLFlBREo7QUFBQSxNQUNrQkMsU0FEbEIsdUJBQ2tCQSxTQURsQjtBQUFBLE1BRUlDLFVBRkosdUJBRUlBLFVBRko7QUFBQSxNQUVnQkMsaUJBRmhCLHVCQUVnQkEsZ0JBRmhCO0FBQUEsTUFHSUMsS0FISix1QkFHSUEsS0FISjs7QUFNQSxNQUFHRixVQUFVLEtBQUssSUFBbEIsRUFDSSxvQkFBTztBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsdUNBQW9DO0FBQUEsbURBQWtDRSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FUNkIsQ0FXakM7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBRyxPQURYO0FBRUksVUFBSSxFQUFJLEVBRlo7QUFHSSxlQUFTLEVBQUcseUJBSGhCO0FBSUksV0FBSyxFQUFJSCxTQUFTLEtBQUssS0FKM0I7QUFBQSw2QkFNSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNLRCxZQUFZLENBQUNLLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNqQyw4QkFDSSw4REFBQyw2Q0FBRDtBQUVBLG1CQUFPLEVBQUlBLE9BRlg7QUFHQSx1QkFBVyxFQUFJUCxXQUhmO0FBSUEsNEJBQWdCLEVBQUs7QUFBQSxxQkFBTUksaUJBQWdCLENBQUNHLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSnJCLGFBQ09ELE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBT0gsU0FSQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIOztHQW5DUVQ7VUFNREQ7OztLQU5DQztBQXFDVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2VyTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciAgZnJvbSBcIi4vc3BlYWtlclwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tICdyZWFjdC1wbGFjZWhvbGRlcic7XHJcbmltcG9ydCB1c2VSZXF1ZXN0U3BlYWtlcnMgZnJvbSBcIi4vaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ufSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzcGVha2Vyc0RhdGEsIGlzTG9hZGluZywgXHJcbiAgICAgICAgaGFzRXJyb3JlZCwgb25GYXZvcml0ZVRvZ2dsZSwgXHJcbiAgICAgICAgZXJyb3IgXHJcbiAgICB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApO1xyXG5cclxuICAgIGlmKGhhc0Vycm9yZWQgPT09IHRydWUpIFxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+RXJyb3I6IDxiPiBMb2FkaW5nIHNwZWFrZXIgZGF0YSBmYWlsZWQhIHtlcnJvcn0gPC9iPiA8L2Rpdj47XHJcblxyXG4gICAgLy9pZihpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJtZWRpYVwiXHJcbiAgICAgICAgICAgICAgICByb3dzID0gezE1fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJzcGVha2VyTGlzdC1QbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICByZWFkeSA9IHtpc0xvYWRpbmcgPT09IGZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtzcGVha2VyLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXIgPSB7c3BlYWtlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbiA9IHtzaG93U2Vzc2lvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlID0geyAoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsIlJlYWN0UGxhY2Vob2xkZXIiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9uIiwic3BlYWtlcnNEYXRhIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJlcnJvciIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=