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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTE5M2IxYTVmNzI0Y2U3N2JjMDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUVqQyw0QkFJSUYsa0VBQWtCLENBQUMsSUFBRCxDQUp0QjtBQUFBLE1BQ0lHLFlBREosdUJBQ0lBLFlBREo7QUFBQSxNQUNrQkMsU0FEbEIsdUJBQ2tCQSxTQURsQjtBQUFBLE1BRUlDLFVBRkosdUJBRUlBLFVBRko7QUFBQSxNQUVnQkMsaUJBRmhCLHVCQUVnQkEsZ0JBRmhCO0FBQUEsTUFHSUMsS0FISix1QkFHSUEsS0FISjs7QUFNQSxNQUFHRixVQUFVLEtBQUssSUFBbEIsRUFDSSxvQkFBTztBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsdUNBQW9DO0FBQUEsbURBQWtDRSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFSixzQkFDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNJLDhEQUFDLHNEQUFEO0FBQ0ksVUFBSSxFQUFHLE9BRFg7QUFFSSxVQUFJLEVBQUksRUFGWjtBQUdJLGVBQVMsRUFBRyx5QkFIaEI7QUFJSSxXQUFLLEVBQUlILFNBQVMsS0FBSyxLQUozQjtBQUFBLDZCQU1JO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0tELFlBQVksQ0FBQ0ssR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2pDLDhCQUNJLDhEQUFDLDZDQUFEO0FBRUEsbUJBQU8sRUFBSUEsT0FGWDtBQUdBLHVCQUFXLEVBQUlQLFdBSGY7QUFJQSw0QkFBZ0IsRUFBSztBQUFBLHFCQUFNSSxpQkFBZ0IsQ0FBQ0csT0FBTyxDQUFDQyxFQUFULENBQXRCO0FBQUE7QUFKckIsYUFDT0QsT0FBTyxDQUFDQyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFPSCxTQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0dBakNRVDtVQU1ERDs7O0tBTkNDO0FBbUNULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyICBmcm9tIFwiLi9zcGVha2VyXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gJ3JlYWN0LXBsYWNlaG9sZGVyJztcclxuaW1wb3J0IHVzZVJlcXVlc3RTcGVha2VycyBmcm9tIFwiLi9ob29rcy91c2VSZXF1ZXN0U3BlYWtlcnNcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJMaXN0KHsgc2hvd1Nlc3Npb259KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNwZWFrZXJzRGF0YSwgaXNMb2FkaW5nLCBcclxuICAgICAgICBoYXNFcnJvcmVkLCBvbkZhdm9yaXRlVG9nZ2xlLCBcclxuICAgICAgICBlcnJvciBcclxuICAgIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMCk7XHJcblxyXG4gICAgaWYoaGFzRXJyb3JlZCA9PT0gdHJ1ZSkgXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FcnJvcjogPGI+IExvYWRpbmcgc3BlYWtlciBkYXRhIGZhaWxlZCEge2Vycm9yfSA8L2I+IDwvZGl2PjtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgIHJvd3MgPSB7MTV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcInNwZWFrZXJMaXN0LVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHJlYWR5ID0ge2lzTG9hZGluZyA9PT0gZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlciA9IHtzcGVha2VyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9uID0ge3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPSB7ICgpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3RTcGVha2VycyIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb24iLCJzcGVha2Vyc0RhdGEiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwib25GYXZvcml0ZVRvZ2dsZSIsImVycm9yIiwibWFwIiwic3BlYWtlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==