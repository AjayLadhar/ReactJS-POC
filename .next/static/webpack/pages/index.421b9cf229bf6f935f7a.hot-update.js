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
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useRequestDelay */ "./src/components/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      updateRecord = _useRequestDelay.updateRecord,
      error = _useRequestDelay.error;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "text-danger",
    children: ["Error: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("b", {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__.default, {
      type: "media",
      rows: 15,
      className: "speakerList-Placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
            speaker: speaker,
            showSession: showSession,
            onFavoriteToggle: function onFavoriteToggle() {
              return updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
                favorite: !speaker.favorite
              }));
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

_s(SpeakerList, "H6PjoWCw0NL/g8WtemZhTMn8mOM=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDIxYjljZjIyOWJmNmY5MzVmN2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssV0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYzs7QUFFakMseUJBR0lKLCtEQUFlLENBQUMsSUFBRCxFQUFPRSw4Q0FBUCxDQUhuQjtBQUFBLE1BQ1VHLFlBRFYsb0JBQ0lILElBREo7QUFBQSxNQUN3QkksYUFEeEIsb0JBQ3dCQSxhQUR4QjtBQUFBLE1BRUlDLFlBRkosb0JBRUlBLFlBRko7QUFBQSxNQUVrQkMsS0FGbEIsb0JBRWtCQSxLQUZsQjs7QUFLQSxNQUFHRixhQUFhLEtBQUtMLDBFQUFyQixFQUNJLG9CQUFPO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSx1Q0FBb0M7QUFBQSxtREFBa0NPLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVKLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0ksOERBQUMsc0RBQUQ7QUFDSSxVQUFJLEVBQUcsT0FEWDtBQUVJLFVBQUksRUFBSSxFQUZaO0FBR0ksZUFBUyxFQUFHLHlCQUhoQjtBQUlJLFdBQUssRUFBSUYsYUFBYSxLQUFLTCwwRUFKL0I7QUFBQSw2QkFNSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNLSSxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNqQyw4QkFDSSw4REFBQyw2Q0FBRDtBQUVBLG1CQUFPLEVBQUlBLE9BRlg7QUFHQSx1QkFBVyxFQUFJUixXQUhmO0FBSUEsNEJBQWdCLEVBQUk7QUFBQSxxQkFBTUcsWUFBWSxpQ0FDL0JLLE9BRCtCO0FBRWxDQyxnQkFBQUEsUUFBUSxFQUFFLENBQUNELE9BQU8sQ0FBQ0M7QUFGZSxpQkFBbEI7QUFBQTtBQUpwQixhQUNPRCxPQUFPLENBQUNFLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQVdILFNBWkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7R0FwQ1FYO1VBS0RIOzs7S0FMQ0c7QUFzQ1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlckxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgIGZyb20gXCIuL3NwZWFrZXJcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSAncmVhY3QtcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7UkVRVUVTVF9TVEFUVVN9IGZyb20gXCIuL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3QoeyBzaG93U2Vzc2lvbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBcclxuICAgICAgICB1cGRhdGVSZWNvcmQsIGVycm9yIFxyXG4gICAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcclxuXHJcbiAgICBpZihyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSBcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkVycm9yOiA8Yj4gTG9hZGluZyBzcGVha2VyIGRhdGEgZmFpbGVkISB7ZXJyb3J9IDwvYj4gPC9kaXY+O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8UmVhY3RQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwibWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgcm93cyA9IHsxNX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwic3BlYWtlckxpc3QtUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVhZHkgPSB7cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyID0ge3NwZWFrZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb24gPSB7c2hvd1Nlc3Npb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSA9IHsoKSA9PiB1cGRhdGVSZWNvcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsIlJlYWN0UGxhY2Vob2xkZXIiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJSRVFVRVNUX1NUQVRVUyIsImRhdGEiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9uIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsInVwZGF0ZVJlY29yZCIsImVycm9yIiwiRkFJTFVSRSIsIlNVQ0NFU1MiLCJtYXAiLCJzcGVha2VyIiwiZmF2b3JpdGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=