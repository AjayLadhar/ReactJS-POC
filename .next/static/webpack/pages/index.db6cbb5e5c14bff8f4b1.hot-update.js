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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGI2Y2JiNWU1YzE0YmZmOGY0YjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1FLGNBQWMsR0FBSTtBQUMzQkMsRUFBQUEsT0FBTyxFQUFFLFNBRGtCO0FBRTNCQyxFQUFBQSxPQUFPLEVBQUUsU0FGa0I7QUFHM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUhrQixDQUF4Qjs7QUFNUCxTQUFTQyxlQUFULEdBQTREO0FBQUE7O0FBQUEsTUFBbkNDLFNBQW1DLHVFQUF2QixJQUF1QjtBQUFBLE1BQWpCQyxXQUFpQix1RUFBSCxFQUFHOztBQUV4RCxrQkFBd0JSLCtDQUFRLENBQUNRLFdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMENWLCtDQUFRLENBQUNFLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FBbEQ7QUFBQSxNQUFPUSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEJaLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUVBZixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFBQSxhQUVHbUIsU0FGSDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyU0FFWixpQkFBeUJKLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRWNELEtBQUssQ0FBQ0MsRUFBRCxDQUZuQjs7QUFBQTtBQUdRO0FBQ0FKLGdCQUFBQSxnQkFBZ0IsQ0FBQ1YsY0FBYyxDQUFDRSxPQUFoQixDQUFoQjtBQUNBTSxnQkFBQUEsT0FBTyxDQUFDRCxJQUFELENBQVA7QUFMUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFRRyxnQkFBQUEsZ0JBQWdCLENBQUNWLGNBQWMsQ0FBQ0csT0FBaEIsQ0FBaEI7QUFDQVMsZ0JBQUFBLFFBQVEsYUFBUjs7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZZO0FBQUE7QUFBQTs7QUFlWk0sSUFBQUEsU0FBUyxDQUFDYixTQUFELENBQVQ7QUFFSCxHQWpCUSxFQWlCTixFQWpCTSxDQUFUOztBQW1CQSxXQUFTYyxZQUFULENBQXVCQyxhQUF2QixFQUFzQztBQUVsQyxRQUFNQyxVQUFVLEdBQUdkLElBQUksQ0FBQ2UsR0FBTCxDQUFVLFVBQVNDLEdBQVQsRUFBYTtBQUN0QyxhQUFPQSxHQUFHLENBQUNDLEVBQUosS0FBV0osYUFBYSxDQUFDSSxFQUF6QixHQUE4QkosYUFBOUIsR0FBOENHLEdBQXJEO0FBQ0gsS0FGa0IsQ0FBbkI7O0FBRmtDLGFBTW5CRSxhQU5tQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrU0FNbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFY1osS0FBSyxDQUFDUixTQUFELENBRm5COztBQUFBO0FBR1FHLGdCQUFBQSxPQUFPLENBQUNhLFVBQUQsQ0FBUDtBQUhSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTVFLLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjs7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5rQztBQUFBO0FBQUE7O0FBZ0JsQ0YsSUFBQUEsYUFBYTtBQUNoQjs7QUFFRCxTQUFNO0FBQ0ZsQixJQUFBQSxJQUFJLEVBQUpBLElBREU7QUFDSUUsSUFBQUEsYUFBYSxFQUFiQSxhQURKO0FBQ21CRSxJQUFBQSxLQUFLLEVBQUxBLEtBRG5CO0FBQzBCUSxJQUFBQSxZQUFZLEVBQVpBO0FBRDFCLEdBQU47QUFHSDs7R0FqRFFmOztBQW1EVCwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyAgPSB7XHJcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gICAgRkFJTFVSRTogXCJmYWlsdXJlXCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKXtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKG1zKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkobXMpO1xyXG4gICAgICAgICAgICAgICAgLy90aHJvdyBcIkhhZCBFcnJvciFcIlxyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsYXlGdW5jKGRlbGF5VGltZSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJlY29yZCAocmVjb3JkVXBkYXRlZCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoIGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZFVwZGF0ZWQuaWQgPyByZWNvcmRVcGRhdGVkIDogcmVjO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdHJ5eyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIG9jY3VyZWQgd2hpbGUgdXBkYXRpbmcgcmVjb2RzXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGRhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCB1cGRhdGVSZWNvcmRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3REZWxheTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwiZGF0YSIsInNldERhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwidXBkYXRlUmVjb3JkIiwicmVjb3JkVXBkYXRlZCIsIm5ld1JlY29yZHMiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==