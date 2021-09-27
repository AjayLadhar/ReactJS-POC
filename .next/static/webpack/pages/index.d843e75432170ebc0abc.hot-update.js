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
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakersToolbar.js";



function SpeakersToolbar(_ref) {
  var theme = _ref.theme,
      setTheme = _ref.setTheme,
      showSession = _ref.showSession,
      setShowSession = _ref.setShowSession;
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
              lineNumber: 11,
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
                lineNumber: 13,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "switch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row ml-sm-5 ml-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              className: "dropdown",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
                className: "form-control theme",
                value: theme,
                onChange: function onChange(event) {
                  return setTheme(event.target.value);
                },
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
                lineNumber: 26,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDg0M2U3NTQzMjE3MGViYzBhYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLFNBQVNDLGVBQVQsT0FBeUU7QUFBQSxNQUE5Q0MsS0FBOEMsUUFBOUNBLEtBQThDO0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxXQUE2QixRQUE3QkEsV0FBNkI7QUFBQSxNQUFoQkMsY0FBZ0IsUUFBaEJBLGNBQWdCO0FBRXJFLHNCQUNBO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsd0NBQWQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsZ0NBQWQ7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQU8sdUJBQVMsRUFBQyxLQUFqQjtBQUFBLHNDQUNFO0FBQ0Esb0JBQUksRUFBQyxVQURMO0FBRUEsdUJBQU8sRUFBRUQsV0FGVDtBQUdBLHdCQUFRLEVBQUUsa0JBQUNFLEtBQUQsRUFBVztBQUNqQkQsa0JBQUFBLGNBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWQsQ0FBZDtBQUNIO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQVFFO0FBQU0seUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFjRTtBQUFJLHFCQUFTLEVBQUMsNkNBQWQ7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQU8sdUJBQVMsRUFBQyxVQUFqQjtBQUFBLHFDQUNFO0FBQ0EseUJBQVMsRUFBQyxvQkFEVjtBQUVBLHFCQUFLLEVBQUVOLEtBRlA7QUFHQSx3QkFBUSxFQUFFLGtCQUFDSSxLQUFEO0FBQUEseUJBQVdILFFBQVEsQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQWQsQ0FBbkI7QUFBQSxpQkFIVjtBQUFBLHdDQUlFO0FBQVEsdUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGLGVBS0U7QUFBUSx1QkFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFtQ0g7O0tBckNRUjtBQXVDVCwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vyc1Rvb2xiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhciAoe3RoZW1lLCBzZXRUaGVtZSwgc2hvd1Nlc3Npb24sIHNldFNob3dTZXNzaW9ufSl7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGI+U2hvdyBTZXNzaW9ucyZuYnNwOyZuYnNwOzwvYj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U2Vzc2lvbihldmVudC50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzVG9vbGJhciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJzaG93U2Vzc2lvbiIsInNldFNob3dTZXNzaW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9