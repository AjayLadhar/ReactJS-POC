"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/hooks/useRequestDelay.js":
/*!*************************************************!*\
  !*** ./src/components/hooks/useRequestDelay.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();



var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

function useRequestDelay() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    function delayFunc(_x) {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ms) {
        return C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(ms);

              case 3:
                //throw "Had Error!"
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc(delayTime);
  }, []);

  function updateRecord(recordUpdated) {
    var newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return delay();

              case 3:
                setData(newRecords);
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log("error occured while updating recods", _context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));
      return _delayFunction.apply(this, arguments);
    }

    delayFunction();
  }

  return {
    data: data,
    requestStatus: requestStatus,
    error: error,
    updateRecord: updateRecord
  };
}

_s(useRequestDelay, "NgtAyaBpb5FirZnel9NgXfPRcvM=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

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

/***/ "./src/components/speakerList.js":
/*!***************************************!*\
  !*** ./src/components/speakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ "./src/components/speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useRequestDelay */ "./src/components/hooks/useRequestDelay.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();






function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useRequestSpeakers = useRequestSpeakers(2000),
      speakersData = _useRequestSpeakers.speakersData,
      requestStatus = _useRequestSpeakers.requestStatus,
      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle,
      error = _useRequestSpeakers.error;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "text-danger",
    children: ["Error: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
      children: [" Loading speaker data failed! ", error, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 52
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 16
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_1__.default, {
      type: "media",
      rows: 15,
      className: "speakerList-Placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_0__.default, {
            speaker: speaker,
            showSession: showSession,
            onFavoriteToggle: function onFavoriteToggle() {
              return _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(SpeakerList, "QiWpHm7NRjWpnNbxEpk5kxnuj6c=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzNjMmQ1YmE2OWZlZDZkNDdmNGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1FLGNBQWMsR0FBSTtBQUMzQkMsRUFBQUEsT0FBTyxFQUFFLFNBRGtCO0FBRTNCQyxFQUFBQSxPQUFPLEVBQUUsU0FGa0I7QUFHM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUhrQixDQUF4Qjs7QUFNUCxTQUFTQyxlQUFULEdBQTREO0FBQUE7O0FBQUEsTUFBbkNDLFNBQW1DLHVFQUF2QixJQUF1QjtBQUFBLE1BQWpCQyxXQUFpQix1RUFBSCxFQUFHOztBQUV4RCxrQkFBd0JSLCtDQUFRLENBQUNRLFdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMENWLCtDQUFRLENBQUNFLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FBbEQ7QUFBQSxNQUFPUSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEJaLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUVBZixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFBQSxhQUVHbUIsU0FGSDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyU0FFWixpQkFBeUJKLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRWNELEtBQUssQ0FBQ0MsRUFBRCxDQUZuQjs7QUFBQTtBQUdRO0FBQ0FKLGdCQUFBQSxnQkFBZ0IsQ0FBQ1YsY0FBYyxDQUFDRSxP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TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDs7R0FoQ1FNOztLQUFBQTtBQWtDVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgID0ge1xyXG4gICAgTE9BRElORzogXCJsb2FkaW5nXCIsXHJcbiAgICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcclxuICAgIEZBSUxVUkU6IFwiZmFpbHVyZVwiXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSl7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYyhtcyl7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KG1zKTtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgXCJIYWQgRXJyb3IhXCJcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGF5RnVuYyhkZWxheVRpbWUpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQgKHJlY29yZFVwZGF0ZWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKCBmdW5jdGlvbihyZWMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRyeXsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBvY2N1cmVkIHdoaWxlIHVwZGF0aW5nIHJlY29kc1wiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBkYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvciwgdXBkYXRlUmVjb3JkXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7IiwiaW1wb3J0IFNwZWFrZXIgIGZyb20gXCIuL3NwZWFrZXJcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSAncmVhY3QtcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7UkVRVUVTVF9TVEFUVVN9IGZyb20gXCIuL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3QoeyBzaG93U2Vzc2lvbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBcclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlLCBlcnJvciBcclxuICAgIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMCk7XHJcblxyXG4gICAgaWYocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkgXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FcnJvcjogPGI+IExvYWRpbmcgc3BlYWtlciBkYXRhIGZhaWxlZCEge2Vycm9yfSA8L2I+IDwvZGl2PjtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgIHJvd3MgPSB7MTV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcInNwZWFrZXJMaXN0LVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHJlYWR5ID0ge3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlciA9IHtzcGVha2VyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9uID0ge3Nob3dTZXNzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPSB7ICgpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdERlbGF5IiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmRVcGRhdGVkIiwibmV3UmVjb3JkcyIsIm1hcCIsInJlYyIsImlkIiwiZGVsYXlGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb24iLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJzcGVha2Vyc0RhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=