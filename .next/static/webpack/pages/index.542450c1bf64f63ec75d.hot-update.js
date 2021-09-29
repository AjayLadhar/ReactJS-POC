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

  if (requestStatus === _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQyNDUwYzFiZjY0ZjYzZWM3NWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUVqQyw0QkFHSUgsa0VBQWtCLENBQUMsSUFBRCxDQUh0QjtBQUFBLE1BQ0lJLFlBREosdUJBQ0lBLFlBREo7QUFBQSxNQUNrQkMsYUFEbEIsdUJBQ2tCQSxhQURsQjtBQUFBLE1BRUlDLGlCQUZKLHVCQUVJQSxnQkFGSjtBQUFBLE1BRXNCQyxLQUZ0Qix1QkFFc0JBLEtBRnRCOztBQUtBLE1BQUdGLGFBQWEsS0FBS0osNkVBQXJCLEVBQ0ksb0JBQU87QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLHVDQUFvQztBQUFBLG1EQUFrQ00sS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRUosc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBRyxPQURYO0FBRUksVUFBSSxFQUFJLEVBRlo7QUFHSSxlQUFTLEVBQUcseUJBSGhCO0FBSUksV0FBSyxFQUFJRSxTQUFTLEtBQUssS0FKM0I7QUFBQSw2QkFNSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNLTCxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNqQyw4QkFDSSw4REFBQyw2Q0FBRDtBQUVBLG1CQUFPLEVBQUlBLE9BRlg7QUFHQSx1QkFBVyxFQUFJUixXQUhmO0FBSUEsNEJBQWdCLEVBQUs7QUFBQSxxQkFBTUcsaUJBQWdCLENBQUNLLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSnJCLGFBQ09ELE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBT0gsU0FSQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIOztHQWhDUVY7VUFLREY7OztLQUxDRTtBQWtDVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2VyTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciAgZnJvbSBcIi4vc3BlYWtlclwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tICdyZWFjdC1wbGFjZWhvbGRlcic7XHJcbmltcG9ydCB1c2VSZXF1ZXN0U3BlYWtlcnMsIHtSRVFVRVNUX1NUQVRVU30gZnJvbSBcIi4vaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ufSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzcGVha2Vyc0RhdGEsIHJlcXVlc3RTdGF0dXMsIFxyXG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGUsIGVycm9yIFxyXG4gICAgfSA9IHVzZVJlcXVlc3RTcGVha2VycygyMDAwKTtcclxuXHJcbiAgICBpZihyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSBcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkVycm9yOiA8Yj4gTG9hZGluZyBzcGVha2VyIGRhdGEgZmFpbGVkISB7ZXJyb3J9IDwvYj4gPC9kaXY+O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8UmVhY3RQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwibWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgcm93cyA9IHsxNX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwic3BlYWtlckxpc3QtUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVhZHkgPSB7aXNMb2FkaW5nID09PSBmYWxzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyID0ge3NwZWFrZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb24gPSB7c2hvd1Nlc3Npb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSA9IHsgKCkgPT4gb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJSZWFjdFBsYWNlaG9sZGVyIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwiUkVRVUVTVF9TVEFUVVMiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9uIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJlcnJvciIsIkZBSUxVUkUiLCJpc0xvYWRpbmciLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9