"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/hooks/useRequestSpeakers.js":
/*!****************************************************!*\
  !*** ./src/components/hooks/useRequestSpeakers.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function useRequestSpeakers() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function delayFunc(_x) {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(ms) {
        return C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(ms);

              case 3:
                //throw "Had Error!"
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setIsLoading(false);
                setHasErrored(true);
                setError(_context.t0);

              case 12:
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

  function onFavoriteToggle(id) {
    var speakerRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecNew = _objectSpread({}, speakerRecPrevious);

    speakerRecNew.favorite = !speakerRecPrevious.favorite;
    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecNew : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData: speakersData,
    isLoading: isLoading,
    hasErrored: hasErrored,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestSpeakers, "qSL0uPKcXvpfGw0oTbKmBpeKCXA=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestSpeakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmE0MjRlNTI4NDZjODc0NTdmY2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTRyxrQkFBVCxHQUE2QztBQUFBOztBQUFBLE1BQWpCQyxTQUFpQix1RUFBTCxJQUFLO0FBRXpDLE1BQU1DLGNBQWMsR0FBSTtBQUNwQkMsSUFBQUEsT0FBTyxFQUFFLFNBRFc7QUFFcEJDLElBQUFBLE9BQU8sRUFBRSxTQUZXO0FBR3BCQyxJQUFBQSxPQUFPLEVBQUU7QUFIVyxHQUF4Qjs7QUFNQSxrQkFBd0NQLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9RLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTBDVCwrQ0FBUSxDQUFDSSxjQUFjLENBQUNDLE9BQWhCLENBQWxEO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBCWCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPWSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFFQWQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFFR2tCLFNBRkg7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlNBRVosaUJBQXlCSixFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVjRCxLQUFLLENBQUNDLEVBQUQsQ0FGbkI7O0FBQUE7QUFHUTtBQUNBSixnQkFBQUEsZ0JBQWdCLENBQUNQLGNBQWMsQ0FBQ0UsT0FBaEIsQ0FBaEI7QUFDQUcsZ0JBQUFBLGVBQWUsQ0FBQ1YsOENBQUQsQ0FBZjtBQUxSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUVFxQixnQkFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBQyxnQkFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBUixnQkFBQUEsUUFBUSxhQUFSOztBQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRlk7QUFBQTtBQUFBOztBQWdCWk0sSUFBQUEsU0FBUyxDQUFDaEIsU0FBRCxDQUFUO0FBRUgsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDs7QUFvQkEsV0FBU21CLGdCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUMzQixRQUFNQyxrQkFBa0IsR0FBR2hCLFlBQVksQ0FBQ2lCLElBQWIsQ0FBbUIsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFmO0FBQUEsS0FBdEIsQ0FBM0I7O0FBQ0EsUUFBTUksYUFBYSxxQkFBUUgsa0JBQVIsQ0FBbkI7O0FBQ0FHLElBQUFBLGFBQWEsQ0FBQ0MsUUFBZCxHQUF5QixDQUFDSixrQkFBa0IsQ0FBQ0ksUUFBN0M7QUFFQSxRQUFNQyxlQUFlLEdBQUdyQixZQUFZLENBQUNzQixHQUFiLENBQWtCLFVBQVNKLEdBQVQsRUFBYTtBQUNuRCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBWCxHQUFnQkksYUFBaEIsR0FBZ0NELEdBQXZDO0FBQ0gsS0FGdUIsQ0FBeEI7QUFJQWpCLElBQUFBLGVBQWUsQ0FBQ29CLGVBQUQsQ0FBZjtBQUNIOztBQUVELFNBQU07QUFDRnJCLElBQUFBLFlBQVksRUFBWkEsWUFERTtBQUNZdUIsSUFBQUEsU0FBUyxFQUFUQSxTQURaO0FBQ3VCQyxJQUFBQSxVQUFVLEVBQVZBLFVBRHZCO0FBQ21DcEIsSUFBQUEsS0FBSyxFQUFMQSxLQURuQztBQUMwQ1UsSUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUQxQyxHQUFOO0FBR0g7O0dBakRRcEI7O0FBbURULCtEQUFlQSxrQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VSZXF1ZXN0U3BlYWtlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3RTcGVha2VycyhkZWxheVRpbWUgPSAxMDAwKXtcclxuXHJcbiAgICBjb25zdCBSRVFVRVNUX1NUQVRVUyAgPSB7XHJcbiAgICAgICAgTE9BRElORzogXCJsb2FkaW5nXCIsXHJcbiAgICAgICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgRkFJTFVSRTogXCJmYWlsdXJlXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMobXMpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShtcyk7XHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IFwiSGFkIEVycm9yIVwiXHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3BlYWtlcnNEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldEhhc0Vycm9yZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxheUZ1bmMoZGVsYXlUaW1lKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZSAoaWQpIHtcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZCggcmVjID0+IHJlYy5pZCA9PT0gaWQpO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNOZXcgPSB7IC4uLnNwZWFrZXJSZWNQcmV2aW91cyB9XHJcbiAgICAgICAgc3BlYWtlclJlY05ldy5mYXZvcml0ZSA9ICFzcGVha2VyUmVjUHJldmlvdXMuZmF2b3JpdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoIGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY05ldyA6IHJlYztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc3BlYWtlcnNEYXRhLCBpc0xvYWRpbmcsIGhhc0Vycm9yZWQsIGVycm9yLCBvbkZhdm9yaXRlVG9nZ2xlXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0U3BlYWtlcnM7Il0sIm5hbWVzIjpbImRhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5RnVuYyIsInNldElzTG9hZGluZyIsInNldEhhc0Vycm9yZWQiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2VyUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY05ldyIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCJdLCJzb3VyY2VSb290IjoiIn0=