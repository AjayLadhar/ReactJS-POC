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

    function delayFunction(_x2) {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(delayTime) {
        return C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return delay(delayTime);

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

    delayFunction(2000);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI3YWU4NjRiYTIyZWE1ZjJmZmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1FLGNBQWMsR0FBSTtBQUMzQkMsRUFBQUEsT0FBTyxFQUFFLFNBRGtCO0FBRTNCQyxFQUFBQSxPQUFPLEVBQUUsU0FGa0I7QUFHM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUhrQixDQUF4Qjs7QUFNUCxTQUFTQyxlQUFULEdBQTREO0FBQUE7O0FBQUEsTUFBbkNDLFNBQW1DLHVFQUF2QixJQUF1QjtBQUFBLE1BQWpCQyxXQUFpQix1RUFBSCxFQUFHOztBQUV4RCxrQkFBd0JSLCtDQUFRLENBQUNRLFdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMENWLCtDQUFRLENBQUNFLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FBbEQ7QUFBQSxNQUFPUSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEJaLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUVBZixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFBQSxhQUVHbUIsU0FGSDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyU0FFWixpQkFBeUJKLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRWNELEtBQUssQ0FBQ0MsRUFBRCxDQUZuQjs7QUFBQTtBQUdRO0FBQ0FKLGdCQUFBQSxnQkFBZ0IsQ0FBQ1YsY0FBYyxDQUFDRSxPQUFoQixDQUFoQjtBQUNBTSxnQkFBQUEsT0FBTyxDQUFDRCxJQUFELENBQVA7QUFMUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFRRyxnQkFBQUEsZ0JBQWdCLENBQUNWLGNBQWMsQ0FBQ0csT0FBaEIsQ0FBaEI7QUFDQVMsZ0JBQUFBLFFBQVEsYUFBUjs7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZZO0FBQUE7QUFBQTs7QUFlWk0sSUFBQUEsU0FBUyxDQUFDYixTQUFELENBQVQ7QUFFSCxHQWpCUSxFQWlCTixFQWpCTSxDQUFUOztBQW1CQSxXQUFTYyxZQUFULENBQXVCQyxhQUF2QixFQUFzQztBQUVsQyxRQUFNQyxVQUFVLEdBQUdkLElBQUksQ0FBQ2UsR0FBTCxDQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN0QyxhQUFPQSxHQUFHLENBQUNDLEVBQUosS0FBV0osYUFBYSxDQUFDSSxFQUF6QixHQUE4QkosYUFBOUIsR0FBOENHLEdBQXJEO0FBQ0gsS0FGa0IsQ0FBbkI7O0FBRmtDLGFBTW5CRSxhQU5tQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrU0FNbEMsa0JBQTZCcEIsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFY1EsS0FBSyxDQUFDUixTQUFELENBRm5COztBQUFBO0FBR1FHLGdCQUFBQSxPQUFPLENBQUNhLFVBQUQsQ0FBUDtBQUhSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTVFLLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjs7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5rQztBQUFBO0FBQUE7O0FBZ0JsQ0YsSUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNIOztBQUVELFNBQU07QUFDRmxCLElBQUFBLElBQUksRUFBSkEsSUFERTtBQUNJRSxJQUFBQSxhQUFhLEVBQWJBLGFBREo7QUFDbUJFLElBQUFBLEtBQUssRUFBTEEsS0FEbkI7QUFDMEJRLElBQUFBLFlBQVksRUFBWkE7QUFEMUIsR0FBTjtBQUdIOztHQWpEUWY7O0FBbURULCtEQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTICA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBGQUlMVVJFOiBcImZhaWx1cmVcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdERlbGF5KGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pe1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMobXMpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShtcyk7XHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IFwiSGFkIEVycm9yIVwiXHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxheUZ1bmMoZGVsYXlUaW1lKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkIChyZWNvcmRVcGRhdGVkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcCggZnVuY3Rpb24ocmVjKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbihkZWxheVRpbWUpe1xyXG4gICAgICAgICAgICB0cnl7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igb2NjdXJlZCB3aGlsZSB1cGRhdGluZyByZWNvZHNcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGF5RnVuY3Rpb24oMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGRhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCB1cGRhdGVSZWNvcmRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3REZWxheTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwiZGF0YSIsInNldERhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwidXBkYXRlUmVjb3JkIiwicmVjb3JkVXBkYXRlZCIsIm5ld1JlY29yZHMiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==