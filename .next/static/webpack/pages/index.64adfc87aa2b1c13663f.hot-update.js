"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/speakerList.js":
/*!***************************************!*\
  !*** ./src/components/speakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ "./src/components/speaker.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js";



function SpeakerList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row",
      children: data.map(function (speaker) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_0__.default, {
          speaker: speaker
        }, speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

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


/***/ }),

/***/ "./src/components/speakers.js":
/*!************************************!*\
  !*** ./src/components/speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _speakerList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakerList */ "./src/components/speakerList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakers.js";




function Speakers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_speakerList__WEBPACK_IMPORTED_MODULE_1__.default, {
    data: _SpeakerData__WEBPACK_IMPORTED_MODULE_0__.data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjRhZGZjODdhYTJiMWMxMzY2M2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsV0FBVCxPQUE2QjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN6QixzQkFDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDS0EsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBVUMsT0FBVixFQUFtQjtBQUN6Qiw0QkFDSSw4REFBQyw2Q0FBRDtBQUE0QixpQkFBTyxFQUFJQTtBQUF2QyxXQUFnQkEsT0FBTyxDQUFDQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBR0gsT0FKQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7S0FaUUo7QUFjVCwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBRUEsU0FBU0ssUUFBVCxHQUFvQjtBQUNoQixzQkFDSSw4REFBQyxpREFBRDtBQUFhLFFBQUksRUFBSUosOENBQUlBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIOztLQUpRSTtBQU1ULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciAgZnJvbSBcIi4vc3BlYWtlclwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3Qoe2RhdGF9KSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIga2V5ID0ge3NwZWFrZXIuaWR9IHNwZWFrZXIgPSB7c3BlYWtlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiLCJpbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgU3BlYWtlckxpc3QgZnJvbSBcIi4vc3BlYWtlckxpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxTcGVha2VyTGlzdCBkYXRhID0ge2RhdGF9Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiU3BlYWtlckxpc3QiLCJkYXRhIiwibWFwIiwic3BlYWtlciIsImlkIiwiU3BlYWtlcnMiXSwic291cmNlUm9vdCI6IiJ9