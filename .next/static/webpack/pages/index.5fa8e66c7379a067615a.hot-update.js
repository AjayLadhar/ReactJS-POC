"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/speakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/speakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakersToolbar.js",
    _s = $RefreshSig$();




function SpeakersToolbar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      showSession = _useState[0],
      setShowSession = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Light"),
      theme = _useState2[0],
      setTheme = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: "toolbar dark-theme-header",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "justify-content-between",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "toolrow d-flex flex-column flex-lg-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
              children: "Show Sessions\xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              className: "fav",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "checkbox",
                checked: showSession,
                onChange: function onChange(event) {
                  setShowSession(event.target.checked);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "switch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row ml-sm-5 ml-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              className: "dropdown",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
                className: "form-control theme",
                value: theme,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  value: "light",
                  children: "Light"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  value: "dark",
                  children: "Dark"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_s(SpeakersToolbar, "IS0+Vifn+KTzgFKdZTjBXQvc1f4=");

_c = SpeakersToolbar;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersToolbar);

var _c;

$RefreshReg$(_c, "SpeakersToolbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWZhOGU2NmM3Mzc5YTA2NzYxNWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtBQUFBOztBQUV2QixrQkFBc0NELCtDQUFRLENBQUMsSUFBRCxDQUE5QztBQUFBLE1BQU9FLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTBCSCwrQ0FBUSxDQUFDLE9BQUQsQ0FBbEM7QUFBQSxNQUFPSSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxzQkFDQTtBQUFTLGFBQVMsRUFBQywyQkFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLHdDQUFkO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGdDQUFkO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFPLHVCQUFTLEVBQUMsS0FBakI7QUFBQSxzQ0FDRTtBQUNJLG9CQUFJLEVBQUMsVUFEVDtBQUVJLHVCQUFPLEVBQUVILFdBRmI7QUFHSSx3QkFBUSxFQUFFLGtCQUFDSSxLQUFELEVBQVc7QUFDakJILGtCQUFBQSxjQUFjLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFkLENBQWQ7QUFDSDtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFRRTtBQUFNLHlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0U7QUFBSSxxQkFBUyxFQUFDLDZDQUFkO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFPLHVCQUFTLEVBQUMsVUFBakI7QUFBQSxxQ0FDRTtBQUFRLHlCQUFTLEVBQUMsb0JBQWxCO0FBQXVDLHFCQUFLLEVBQUVKLEtBQTlDO0FBQUEsd0NBQ0U7QUFBUSx1QkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFRLHVCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQWdDSDs7R0FyQ1FIOztLQUFBQTtBQXVDVCwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vyc1Rvb2xiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhciAoKXtcclxuXHJcbiAgICBjb25zdCBbc2hvd1Nlc3Npb24sIHNldFNob3dTZXNzaW9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcIkxpZ2h0XCIpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxiPlNob3cgU2Vzc2lvbnMmbmJzcDsmbmJzcDs8L2I+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZhdlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dTZXNzaW9uKGV2ZW50LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIiB2YWx1ZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzVG9vbGJhciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInNob3dTZXNzaW9uIiwic2V0U2hvd1Nlc3Npb24iLCJ0aGVtZSIsInNldFRoZW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==