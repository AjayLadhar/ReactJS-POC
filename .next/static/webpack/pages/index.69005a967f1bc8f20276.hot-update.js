"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _speakerList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakerList */ "./src/components/speakerList.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _speakersToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speakersToolbar */ "./src/components/speakersToolbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _speakers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speakers */ "./src/components/speakers.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\App.js",
    _s = $RefreshSig$();









function App() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("light"),
      theme = _useState[0],
      setTheme = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: theme === "light" ? "container-fluid light" : "container-fluid dark",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__.default, {
      theme: theme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_speakers__WEBPACK_IMPORTED_MODULE_5__.default, {
      data: _SpeakerData__WEBPACK_IMPORTED_MODULE_0__.data,
      theme: theme,
      setTheme: setTheme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(App, "1NR3O0/bzzhjlLyt740h+JhxH9c=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakers.js";


function Speakers(_ref) {
  var data = _ref.data,
      theme = _ref.theme,
      setTheme = _ref.setTheme;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this) // <SpeakersToolbar theme = {theme} setTheme = {setTheme}/>
  // <SpeakerList data = {data}/>
  ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjkwMDVhOTY3ZjFiYzhmMjAyNzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU00sR0FBVCxHQUFlO0FBQUE7O0FBRVgsa0JBQTBCRiwrQ0FBUSxDQUFDLE9BQUQsQ0FBbEM7QUFBQSxNQUFPRyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFDVkQsS0FBSyxLQUFLLE9BQVYsR0FBb0IsdUJBQXBCLEdBQThDLHNCQURsRDtBQUFBLDRCQUdJLDhEQUFDLDRDQUFEO0FBQVEsV0FBSyxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLDhEQUFDLDhDQUFEO0FBQ0EsVUFBSSxFQUFJUCw4Q0FEUjtBQUVBLFdBQUssRUFBSU8sS0FGVDtBQUdBLGNBQVEsRUFBSUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FoQlFGOztLQUFBQTtBQWtCVCwrREFBZUEsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsU0FBU0QsUUFBVCxPQUE0QztBQUFBLE1BQXhCTCxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQk8sS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ3hDLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixDQUVJO0FBQ0E7QUFISjtBQUtIOztLQU5RSDtBQVFULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IFNwZWFrZXJMaXN0IGZyb20gXCIuL3NwZWFrZXJMaXN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBTcGVha2Vyc1Rvb2xiYXIgZnJvbSBcIi4vc3BlYWtlcnNUb29sYmFyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuL3NwZWFrZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImNvbnRhaW5lci1mbHVpZCBsaWdodFwiIDogXCJjb250YWluZXItZmx1aWQgZGFya1wiXHJcbiAgICAgICAgfT5cclxuICAgICAgICAgICAgPEhlYWRlciB0aGVtZT17dGhlbWV9Lz5cclxuICAgICAgICAgICAgPFNwZWFrZXJzIFxyXG4gICAgICAgICAgICBkYXRhID0ge2RhdGF9XHJcbiAgICAgICAgICAgIHRoZW1lID0ge3RoZW1lfVxyXG4gICAgICAgICAgICBzZXRUaGVtZSA9IHtzZXRUaGVtZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImZ1bmN0aW9uIFNwZWFrZXJzICh7ZGF0YSwgdGhlbWUsIHNldFRoZW1lfSkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgLy8gPFNwZWFrZXJzVG9vbGJhciB0aGVtZSA9IHt0aGVtZX0gc2V0VGhlbWUgPSB7c2V0VGhlbWV9Lz5cclxuICAgICAgICAvLyA8U3BlYWtlckxpc3QgZGF0YSA9IHtkYXRhfS8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwibmFtZXMiOlsiZGF0YSIsIlNwZWFrZXJMaXN0IiwiSGVhZGVyIiwiU3BlYWtlcnNUb29sYmFyIiwidXNlU3RhdGUiLCJTcGVha2VycyIsIkFwcCIsInRoZW1lIiwic2V0VGhlbWUiXSwic291cmNlUm9vdCI6IiJ9