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




function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Session;

var IndexPage = function IndexPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row",
      children: _SpeakerData__WEBPACK_IMPORTED_MODULE_0__.data.map(function (speaker) {
        var id = speaker.id,
            bio = speaker.bio,
            first = speaker.first,
            last = speaker.last,
            favorite = speaker.favorite,
            twitterHandle = speaker.twitterHandle,
            company = speaker.company,
            sessions = speaker.sessions;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "card card-height p-4 mt-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "contain-fit",
                src: "/images/speaker-".concat(id, ".jpg"),
                width: "300",
                alt: "".concat(first, " ").concat(last)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "speaker-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "d-flex justify-content-between mb-3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  className: "text-truncate w-200",
                  children: [first, " ", last]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: [bio, " ", company, " ", twitterHandle, " ", favorite]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "sessionBox card h-250",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, {
              title: sessions[0].title,
              room: sessions[0].room.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 6
  }, _this);
};

_c2 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODViYzllMzgzYjNkNGViMTEzYTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxTQUFTQyxPQUFULE9BQWlDO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQzdCLHNCQUNJO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDS0QsS0FETCxFQUNZLEdBRFosZUFFSTtBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0tBUFFIOztBQVNULElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFFcEIsc0JBQ0M7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0dMLGtEQUFBLENBQVMsVUFBVU8sT0FBVixFQUFtQjtBQUMzQixZQUNFQyxFQURGLEdBU0lELE9BVEosQ0FDRUMsRUFERjtBQUFBLFlBRUVDLEdBRkYsR0FTSUYsT0FUSixDQUVFRSxHQUZGO0FBQUEsWUFHRUMsS0FIRixHQVNJSCxPQVRKLENBR0VHLEtBSEY7QUFBQSxZQUlFQyxJQUpGLEdBU0lKLE9BVEosQ0FJRUksSUFKRjtBQUFBLFlBS0VDLFFBTEYsR0FTSUwsT0FUSixDQUtFSyxRQUxGO0FBQUEsWUFNRUMsYUFORixHQVNJTixPQVRKLENBTUVNLGFBTkY7QUFBQSxZQU9FQyxPQVBGLEdBU0lQLE9BVEosQ0FPRU8sT0FQRjtBQUFBLFlBUUVDLFFBUkYsR0FTSVIsT0FUSixDQVFFUSxRQVJGO0FBV0EsNEJBQ0U7QUFBSyxtQkFBUyxFQUFDLDJEQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLDJCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLDZFQUFmO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLGFBRFo7QUFFRSxtQkFBRyw0QkFBcUJQLEVBQXJCLFNBRkw7QUFHRSxxQkFBSyxFQUFDLEtBSFI7QUFJRSxtQkFBRyxZQUFLRSxLQUFMLGNBQWNDLElBQWQ7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVNFO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLHFDQUFmO0FBQUEsdUNBQ0U7QUFBSSwyQkFBUyxFQUFDLHFCQUFkO0FBQUEsNkJBQ0dELEtBREgsT0FDV0MsSUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBTUU7QUFBQSx1Q0FDRTtBQUFBLDZCQUNHRixHQURILE9BQ1NLLE9BRFQsT0FDbUJELGFBRG5CLE9BQ21DRCxRQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUF1QkU7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsbUNBQ0UsOERBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUVHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWWIsS0FBNUI7QUFBbUMsa0JBQUksRUFBRWEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZWixJQUFaLENBQWlCQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBNkJELE9BekNBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWdESCxDQWxERDs7TUFBTUM7QUFvRE4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIFNlc3Npb24gKHt0aXRsZSwgcm9vbX0pIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGJpbyxcclxuICAgICAgICAgICAgZmlyc3QsXHJcbiAgICAgICAgICAgIGxhc3QsXHJcbiAgICAgICAgICAgIGZhdm9yaXRlLFxyXG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICBzZXNzaW9ucyxcclxuICAgICAgICAgIH0gPSBzcGVha2VyO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2Vzc2lvbiB0aXRsZT17c2Vzc2lvbnNbMF0udGl0bGV9IHJvb209e3Nlc3Npb25zWzBdLnJvb20ubmFtZX0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJuYW1lcyI6WyJkYXRhIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsIm5hbWUiLCJJbmRleFBhZ2UiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJiaW8iLCJmaXJzdCIsImxhc3QiLCJmYXZvcml0ZSIsInR3aXR0ZXJIYW5kbGUiLCJjb21wYW55Iiwic2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9