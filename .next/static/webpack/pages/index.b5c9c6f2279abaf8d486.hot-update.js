"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\pages\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
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

function Sessions(_ref2) {
  var sessions = _ref2.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_c2 = Sessions;

function SpeakerImage(_ref3) {
  var id = _ref3.id,
      first = _ref3.first,
      last = _ref3.last;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_c3 = SpeakerImage;

var IndexPage = function IndexPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "row",
      children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function (speaker) {
        var id = speaker.id,
            bio = speaker.bio,
            first = speaker.first,
            last = speaker.last,
            favorite = speaker.favorite,
            twitterHandle = speaker.twitterHandle,
            company = speaker.company,
            sessions = speaker.sessions;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "card card-height p-4 mt-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerImage, {
              id: id,
              first: first,
              last: last
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerDemoGraphics, _objectSpread({}, speaker), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sessions, {
            sessions: sessions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 6
  }, _this);
};

_c4 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjVjOWM2ZjIyNzlhYmFmOGQ0ODYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsT0FBVCxPQUFpQztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUM3QixzQkFDSTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0tELEtBREwsRUFDWSxHQURaLGVBRUk7QUFBQSwyQkFBZUMsSUFBSSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztLQVBRSDs7QUFTVCxTQUFTSSxRQUFULFFBQTZCO0FBQUEsTUFBVkMsUUFBVSxTQUFWQSxRQUFVO0FBQ3pCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0ksOERBQUMsT0FBRCxvQkFBYUEsUUFBUSxDQUFDLENBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztNQU5RRDs7QUFRVCxTQUFTRSxZQUFULFFBQXdDO0FBQUEsTUFBakJDLEVBQWlCLFNBQWpCQSxFQUFpQjtBQUFBLE1BQWJDLEtBQWEsU0FBYkEsS0FBYTtBQUFBLE1BQU5DLElBQU0sU0FBTkEsSUFBTTtBQUNwQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDJCQUNJO0FBQ0EsZUFBUyxFQUFDLGFBRFY7QUFFQSxTQUFHLDRCQUFxQkYsRUFBckIsU0FGSDtBQUdBLFdBQUssRUFBQyxLQUhOO0FBSUEsU0FBRyxZQUFLQyxLQUFMLGNBQWNDLElBQWQ7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O01BWFFIOztBQWFULElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFFcEIsc0JBQ0M7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0dYLGtEQUFBLENBQVMsVUFBVWEsT0FBVixFQUFtQjtBQUMzQixZQUNFTCxFQURGLEdBU0lLLE9BVEosQ0FDRUwsRUFERjtBQUFBLFlBRUVNLEdBRkYsR0FTSUQsT0FUSixDQUVFQyxHQUZGO0FBQUEsWUFHRUwsS0FIRixHQVNJSSxPQVRKLENBR0VKLEtBSEY7QUFBQSxZQUlFQyxJQUpGLEdBU0lHLE9BVEosQ0FJRUgsSUFKRjtBQUFBLFlBS0VLLFFBTEYsR0FTSUYsT0FUSixDQUtFRSxRQUxGO0FBQUEsWUFNRUMsYUFORixHQVNJSCxPQVRKLENBTUVHLGFBTkY7QUFBQSxZQU9FQyxPQVBGLEdBU0lKLE9BVEosQ0FPRUksT0FQRjtBQUFBLFlBUUVYLFFBUkYsR0FTSU8sT0FUSixDQVFFUCxRQVJGO0FBV0EsNEJBQ0U7QUFBSyxtQkFBUyxFQUFDLDJEQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLDJCQUFmO0FBQUEsb0NBQ0UsOERBQUMsWUFBRDtBQUFjLGdCQUFFLEVBQUdFLEVBQW5CO0FBQXVCLG1CQUFLLEVBQUlDLEtBQWhDO0FBQXVDLGtCQUFJLEVBQUlDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSw4REFBQyxtQkFBRCxvQkFBeUJHLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0UsOERBQUMsUUFBRDtBQUFVLG9CQUFRLEVBQUlQO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBU0QsT0FyQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNEJILENBOUJEOztNQUFNSztBQWdDTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGF9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbiAoe3RpdGxlLCByb29tfSkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICAgICAge3RpdGxlfXtcIiBcIn1cclxuICAgICAgICAgICAgPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHtpZCwgZmlyc3QsIGxhc3R9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGJpbyxcclxuICAgICAgICAgICAgZmlyc3QsXHJcbiAgICAgICAgICAgIGxhc3QsXHJcbiAgICAgICAgICAgIGZhdm9yaXRlLFxyXG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICBzZXNzaW9ucyxcclxuICAgICAgICAgIH0gPSBzcGVha2VyO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPSB7aWR9IGZpcnN0ID0ge2ZpcnN0fSBsYXN0ID0ge2xhc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb0dyYXBoaWNzIHsuLi5zcGVha2VyfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zID0ge3Nlc3Npb25zfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJuYW1lcyI6WyJkYXRhIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJJbmRleFBhZ2UiLCJtYXAiLCJzcGVha2VyIiwiYmlvIiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSJdLCJzb3VyY2VSb290IjoiIn0=