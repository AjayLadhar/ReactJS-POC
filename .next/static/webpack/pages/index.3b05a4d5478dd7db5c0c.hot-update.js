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

function SpeakerDemoGraphics(_ref4) {
  var first = _ref4.first,
      last = _ref4.last,
      bio = _ref4.bio,
      company = _ref4.company,
      twitterHandle = _ref4.twitterHandle,
      favorite = _ref4.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: [bio, " ", company, " ", twitterHandle, " ", favorite]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

_c4 = SpeakerDemoGraphics;

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
              lineNumber: 61,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerDemoGraphics, _objectSpread({}, speaker), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sessions, {
            sessions: sessions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 6
  }, _this);
};

_c5 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "SpeakerDemoGraphics");
$RefreshReg$(_c5, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2IwNWE0ZDU0NzhkZDdkYjVjMGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsT0FBVCxPQUFpQztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUM3QixzQkFDSTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0tELEtBREwsRUFDWSxHQURaLGVBRUk7QUFBQSwyQkFBZUMsSUFBSSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztLQVBRSDs7QUFTVCxTQUFTSSxRQUFULFFBQTZCO0FBQUEsTUFBVkMsUUFBVSxTQUFWQSxRQUFVO0FBQ3pCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0ksOERBQUMsT0FBRCxvQkFBYUEsUUFBUSxDQUFDLENBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztNQU5RRDs7QUFRVCxTQUFTRSxZQUFULFFBQXdDO0FBQUEsTUFBakJDLEVBQWlCLFNBQWpCQSxFQUFpQjtBQUFBLE1BQWJDLEtBQWEsU0FBYkEsS0FBYTtBQUFBLE1BQU5DLElBQU0sU0FBTkEsSUFBTTtBQUNwQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDJCQUNJO0FBQ0EsZUFBUyxFQUFDLGFBRFY7QUFFQSxTQUFHLDRCQUFxQkYsRUFBckIsU0FGSDtBQUdBLFdBQUssRUFBQyxLQUhOO0FBSUEsU0FBRyxZQUFLQyxLQUFMLGNBQWNDLElBQWQ7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O01BWFFIOztBQWFULFNBQVNJLG1CQUFULFFBQW1GO0FBQUEsTUFBckRGLEtBQXFELFNBQXJEQSxLQUFxRDtBQUFBLE1BQTlDQyxJQUE4QyxTQUE5Q0EsSUFBOEM7QUFBQSxNQUF4Q0UsR0FBd0MsU0FBeENBLEdBQXdDO0FBQUEsTUFBbkNDLE9BQW1DLFNBQW5DQSxPQUFtQztBQUFBLE1BQTFCQyxhQUEwQixTQUExQkEsYUFBMEI7QUFBQSxNQUFYQyxRQUFXLFNBQVhBLFFBQVc7QUFDL0Usc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsNkJBQ0E7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsbUJBQ0tOLEtBREwsT0FDYUMsSUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSTtBQUFBLDZCQUNBO0FBQUEsbUJBQ0tFLEdBREwsT0FDV0MsT0FEWCxPQUNxQkMsYUFEckIsT0FDcUNDLFFBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztNQWZRSjs7QUFpQlQsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUVwQixzQkFDQztBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDR2hCLGtEQUFBLENBQVMsVUFBVWtCLE9BQVYsRUFBbUI7QUFDM0IsWUFBUVYsRUFBUixHQUE4RVUsT0FBOUUsQ0FBUVYsRUFBUjtBQUFBLFlBQVlJLEdBQVosR0FBOEVNLE9BQTlFLENBQVlOLEdBQVo7QUFBQSxZQUFpQkgsS0FBakIsR0FBOEVTLE9BQTlFLENBQWlCVCxLQUFqQjtBQUFBLFlBQXdCQyxJQUF4QixHQUE4RVEsT0FBOUUsQ0FBd0JSLElBQXhCO0FBQUEsWUFBOEJLLFFBQTlCLEdBQThFRyxPQUE5RSxDQUE4QkgsUUFBOUI7QUFBQSxZQUF3Q0QsYUFBeEMsR0FBOEVJLE9BQTlFLENBQXdDSixhQUF4QztBQUFBLFlBQXVERCxPQUF2RCxHQUE4RUssT0FBOUUsQ0FBdURMLE9BQXZEO0FBQUEsWUFBZ0VQLFFBQWhFLEdBQThFWSxPQUE5RSxDQUFnRVosUUFBaEU7QUFFQSw0QkFDRTtBQUFLLG1CQUFTLEVBQUMsMkRBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsMkJBQWY7QUFBQSxvQ0FDRSw4REFBQyxZQUFEO0FBQWMsZ0JBQUUsRUFBR0UsRUFBbkI7QUFBdUIsbUJBQUssRUFBSUMsS0FBaEM7QUFBdUMsa0JBQUksRUFBSUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLDhEQUFDLG1CQUFELG9CQUF5QlEsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRSw4REFBQyxRQUFEO0FBQVUsb0JBQVEsRUFBSVo7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFTRCxPQVpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1CSCxDQXJCRDs7TUFBTVU7QUF1Qk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIFNlc3Npb24gKHt0aXRsZSwgcm9vbX0pIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7c2Vzc2lvbnN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckRlbW9HcmFwaGljcyh7Zmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGV9KSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLCBiaW8sIGZpcnN0LCBsYXN0LCBmYXZvcml0ZSwgdHdpdHRlckhhbmRsZSwgY29tcGFueSwgc2Vzc2lvbnMsIH0gPSBzcGVha2VyO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPSB7aWR9IGZpcnN0ID0ge2ZpcnN0fSBsYXN0ID0ge2xhc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb0dyYXBoaWNzIHsuLi5zcGVha2VyfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zID0ge3Nlc3Npb25zfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJuYW1lcyI6WyJkYXRhIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRGVtb0dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsIkluZGV4UGFnZSIsIm1hcCIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9