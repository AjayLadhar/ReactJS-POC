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
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();







function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.default)(2000),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      updateRecord = _useRequestDelay.updateRecord,
      error = _useRequestDelay.error;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "text-danger",
    children: ["Error: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("b", {
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
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_1__.default, {
      type: "media",
      rows: 15,
      className: "speakerList-Placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_0__.default, {
            speaker: speaker,
            showSession: showSession,
            onFavoriteToggle: function (_onFavoriteToggle) {
              function onFavoriteToggle() {
                return _onFavoriteToggle.apply(this, arguments);
              }

              onFavoriteToggle.toString = function () {
                return _onFavoriteToggle.toString();
              };

              return onFavoriteToggle;
            }(function () {
              return onFavoriteToggle(speaker.id);
            })
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(SpeakerList, "H6PjoWCw0NL/g8WtemZhTMn8mOM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Y3YTY0ZmJkYTIxZjMxNjJkZjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSyxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUVqQyx5QkFHSUosK0RBQWUsQ0FBQyxJQUFELENBSG5CO0FBQUEsTUFDVUssWUFEVixvQkFDSUgsSUFESjtBQUFBLE1BQ3dCSSxhQUR4QixvQkFDd0JBLGFBRHhCO0FBQUEsTUFFSUMsWUFGSixvQkFFSUEsWUFGSjtBQUFBLE1BRWtCQyxLQUZsQixvQkFFa0JBLEtBRmxCOztBQUtBLE1BQUdGLGFBQWEsS0FBS0wsMEVBQXJCLEVBQ0ksb0JBQU87QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLHVDQUFvQztBQUFBLG1EQUFrQ08sS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRUosc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBRyxPQURYO0FBRUksVUFBSSxFQUFJLEVBRlo7QUFHSSxlQUFTLEVBQUcseUJBSGhCO0FBSUksV0FBSyxFQUFJRixhQUFhLEtBQUtMLDBFQUovQjtBQUFBLDZCQU1JO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0tJLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2pDLDhCQUNJLDhEQUFDLDZDQUFEO0FBRUEsbUJBQU8sRUFBSUEsT0FGWDtBQUdBLHVCQUFXLEVBQUlSLFdBSGY7QUFJQSw0QkFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsY0FBSztBQUFBLHFCQUFNUyxnQkFBZ0IsQ0FBQ0QsT0FBTyxDQUFDRSxFQUFULENBQXRCO0FBQUEsYUFBTDtBQUpoQixhQUNPRixPQUFPLENBQUNFLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQU9ILFNBUkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDs7R0FoQ1FYO1VBS0RIOzs7S0FMQ0c7QUFrQ1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlckxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgIGZyb20gXCIuL3NwZWFrZXJcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSAncmVhY3QtcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7UkVRVUVTVF9TVEFUVVN9IGZyb20gXCIuL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3QoeyBzaG93U2Vzc2lvbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBcclxuICAgICAgICB1cGRhdGVSZWNvcmQsIGVycm9yIFxyXG4gICAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwKTtcclxuXHJcbiAgICBpZihyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSBcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkVycm9yOiA8Yj4gTG9hZGluZyBzcGVha2VyIGRhdGEgZmFpbGVkISB7ZXJyb3J9IDwvYj4gPC9kaXY+O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8UmVhY3RQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwibWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgcm93cyA9IHsxNX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwic3BlYWtlckxpc3QtUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVhZHkgPSB7cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyID0ge3NwZWFrZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb24gPSB7c2hvd1Nlc3Npb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSA9IHsgKCkgPT4gb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJSZWFjdFBsYWNlaG9sZGVyIiwidXNlUmVxdWVzdERlbGF5IiwiUkVRVUVTVF9TVEFUVVMiLCJkYXRhIiwiU3BlYWtlckxpc3QiLCJzaG93U2Vzc2lvbiIsInNwZWFrZXJzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJ1cGRhdGVSZWNvcmQiLCJlcnJvciIsIkZBSUxVUkUiLCJTVUNDRVNTIiwibWFwIiwic3BlYWtlciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=