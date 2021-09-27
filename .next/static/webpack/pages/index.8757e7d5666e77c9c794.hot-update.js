"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\pages\\index.js",
    _this = undefined;




var IndexPage = function IndexPage() {
  var _data$ = _SpeakerData__WEBPACK_IMPORTED_MODULE_0__.data[1],
      id = _data$.id,
      bio = _data$.bio,
      first = _data$.first,
      last = _data$.last,
      favorite = _data$.favorite,
      twitterHandle = _data$.twitterHandle,
      company = _data$.company,
      sessions = _data$.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "contain-fit",
          src: "/images/speaker-".concat(id, ".jpg"),
          width: "400",
          alt: "".concat(first, " ").concat(last)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "speaker-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-flex justify-content-between mb-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "text-truncate w-200",
            children: [first, " ", last]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: [bio, " ", company, " ", twitterHandle, " ", favorite]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sessionBox card h-250",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "session w-100",
        children: [sessions[0].title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
          children: ["Room: ", sessions[0].room.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_c = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c;

$RefreshReg$(_c, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODc1N2U3ZDU2NjZlNzdjOWM3OTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBRXBCLGVBU01ELGlEQVROO0FBQUEsTUFDSUUsRUFESixVQUNJQSxFQURKO0FBQUEsTUFFSUMsR0FGSixVQUVJQSxHQUZKO0FBQUEsTUFHSUMsS0FISixVQUdJQSxLQUhKO0FBQUEsTUFJSUMsSUFKSixVQUlJQSxJQUpKO0FBQUEsTUFLSUMsUUFMSixVQUtJQSxRQUxKO0FBQUEsTUFNSUMsYUFOSixVQU1JQSxhQU5KO0FBQUEsTUFPSUMsT0FQSixVQU9JQSxPQVBKO0FBQUEsTUFRSUMsUUFSSixVQVFJQSxRQVJKO0FBV0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyw2RUFBZjtBQUFBLCtCQUNJO0FBQ0EsbUJBQVMsRUFBQyxhQURWO0FBRUEsYUFBRyw0QkFBcUJQLEVBQXJCLFNBRkg7QUFHQSxlQUFLLEVBQUMsS0FITjtBQUlBLGFBQUcsWUFBS0UsS0FBTCxjQUFjQyxJQUFkO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVNJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQUEsaUNBQ0E7QUFBSSxxQkFBUyxFQUFDLHFCQUFkO0FBQUEsdUJBQ0tELEtBREwsT0FDYUMsSUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUk7QUFBQSxpQ0FDQTtBQUFBLHVCQUNLRixHQURMLE9BQ1dLLE9BRFgsT0FDcUJELGFBRHJCLE9BQ3FDRCxRQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBdUJRO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0E7QUFBTSxpQkFBUyxFQUFDLGVBQWhCO0FBQUEsbUJBQ0tHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUMsS0FEakIsRUFDd0IsR0FEeEIsZUFFSTtBQUFBLCtCQUFlRCxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlFLElBQVosQ0FBaUJDLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBN0NEOztLQUFNWDtBQStDTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGF9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBiaW8sXHJcbiAgICAgICAgZmlyc3QsXHJcbiAgICAgICAgbGFzdCxcclxuICAgICAgICBmYXZvcml0ZSxcclxuICAgICAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgICAgIGNvbXBhbnksXHJcbiAgICAgICAgc2Vzc2lvbnMsXHJcbiAgICAgIH0gPSBkYXRhWzFdO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uc1swXS50aXRsZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tOiB7c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwibmFtZXMiOlsiZGF0YSIsIkluZGV4UGFnZSIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNlc3Npb25zIiwidGl0bGUiLCJyb29tIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=