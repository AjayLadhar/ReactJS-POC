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

    var speakerRecNew = _objectSpread({}, speakerRecPrevious);

    speakerRecNew.favorite = !speakerRecPrevious.favorite;
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
          lineNumber: 29,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWE2NmE2NzlmNGE0Y2Y5YTBlZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFdBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBRWpDLGtCQUF3Q0YsK0NBQVEsQ0FBQ0QsOENBQUQsQ0FBaEQ7QUFBQSxNQUFPSSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBLFdBQVNDLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUMzQixRQUFNQyxrQkFBa0IsR0FBR0osWUFBWSxDQUFDSyxJQUFiLENBQW1CLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBZjtBQUFBLEtBQXRCLENBQTNCOztBQUNBLFFBQU1JLGFBQWEscUJBQVFILGtCQUFSLENBQW5COztBQUNBRyxJQUFBQSxhQUFhLENBQUNDLFFBQWQsR0FBeUIsQ0FBQ0osa0JBQWtCLENBQUNJLFFBQTdDO0FBRUEsUUFBTUMsZUFBZSxHQUFHVCxZQUFZLENBQUNVLEdBQWIsQ0FBa0IsVUFBU0osR0FBVCxFQUFhO0FBQ25ELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFYLEdBQWdCSSxhQUFoQixHQUFnQ0QsR0FBdkM7QUFDSCxLQUZ1QixDQUF4QjtBQUlBTCxJQUFBQSxlQUFlLENBQUNRLGVBQUQsQ0FBZixDQVQyQixDQVczQjtBQUNBO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0tULFlBQVksQ0FBQ1UsR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2pDLDRCQUNJLDhEQUFDLDZDQUFEO0FBRUEsaUJBQU8sRUFBSUEsT0FGWDtBQUdBLHFCQUFXLEVBQUlaLFdBSGY7QUFJQSwwQkFBZ0IsRUFBSztBQUFBLG1CQUFNRyxpQkFBZ0IsQ0FBQ1MsT0FBTyxDQUFDUixFQUFULENBQXRCO0FBQUE7QUFKckIsV0FDT1EsT0FBTyxDQUFDUixFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFPSCxPQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztHQWxDUUw7O0tBQUFBO0FBb0NULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyICBmcm9tIFwiLi9zcGVha2VyXCI7XHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3QoeyBzaG93U2Vzc2lvbn0pIHtcclxuXHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoZGF0YSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZSAoaWQpIHtcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZCggcmVjID0+IHJlYy5pZCA9PT0gaWQpO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNOZXcgPSB7IC4uLnNwZWFrZXJSZWNQcmV2aW91cyB9XHJcbiAgICAgICAgc3BlYWtlclJlY05ldy5mYXZvcml0ZSA9ICFzcGVha2VyUmVjUHJldmlvdXMuZmF2b3JpdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoIGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY05ldyA6IHJlYztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3BlYWtlclJlY1ByZXZpb3VzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGVha2VyUmVjTmV3KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyID0ge3NwZWFrZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbiA9IHtzaG93U2Vzc2lvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPSB7ICgpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb24iLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2VyUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY05ldyIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=