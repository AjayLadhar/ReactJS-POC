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
                setIsLoading(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTdkZGEzZTY4YWNhYzYzZmFjY2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTRyxrQkFBVCxHQUE2QztBQUFBOztBQUFBLE1BQWpCQyxTQUFpQix1RUFBTCxJQUFLO0FBRXpDLE1BQU1DLGNBQWMsR0FBSTtBQUNwQkMsSUFBQUEsT0FBTyxFQUFFLFNBRFc7QUFFcEJDLElBQUFBLE9BQU8sRUFBRSxTQUZXO0FBR3BCQyxJQUFBQSxPQUFPLEVBQUU7QUFIVyxHQUF4Qjs7QUFNQSxrQkFBd0NQLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9RLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTBDVCwrQ0FBUSxDQUFDSSxjQUFjLENBQUNDLE9BQWhCLENBQWxEO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBCWCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPWSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFFQWQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFFR2tCLFNBRkg7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlNBRVosaUJBQXlCSixFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVjRCxLQUFLLENBQUNDLEVBQUQsQ0FGbkI7O0FBQUE7QUFHUTtBQUNBSyxnQkFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBWCxnQkFBQUEsZUFBZSxDQUFDViw4Q0FBRCxDQUFmO0FBTFI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRUXFCLGdCQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FDLGdCQUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FSLGdCQUFBQSxRQUFRLGFBQVI7O0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGWTtBQUFBO0FBQUE7O0FBZ0JaTSxJQUFBQSxTQUFTLENBQUNoQixTQUFELENBQVQ7QUFFSCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUOztBQW9CQSxXQUFTbUIsZ0JBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQzNCLFFBQU1DLGtCQUFrQixHQUFHaEIsWUFBWSxDQUFDaUIsSUFBYixDQUFtQixVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQWY7QUFBQSxLQUF0QixDQUEzQjs7QUFDQSxRQUFNSSxhQUFhLHFCQUFRSCxrQkFBUixDQUFuQjs7QUFDQUcsSUFBQUEsYUFBYSxDQUFDQyxRQUFkLEdBQXlCLENBQUNKLGtCQUFrQixDQUFDSSxRQUE3QztBQUVBLFFBQU1DLGVBQWUsR0FBR3JCLFlBQVksQ0FBQ3NCLEdBQWIsQ0FBa0IsVUFBU0osR0FBVCxFQUFhO0FBQ25ELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFYLEdBQWdCSSxhQUFoQixHQUFnQ0QsR0FBdkM7QUFDSCxLQUZ1QixDQUF4QjtBQUlBakIsSUFBQUEsZUFBZSxDQUFDb0IsZUFBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBTTtBQUNGckIsSUFBQUEsWUFBWSxFQUFaQSxZQURFO0FBQ1l1QixJQUFBQSxTQUFTLEVBQVRBLFNBRFo7QUFDdUJDLElBQUFBLFVBQVUsRUFBVkEsVUFEdkI7QUFDbUNwQixJQUFBQSxLQUFLLEVBQUxBLEtBRG5DO0FBQzBDVSxJQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRDFDLEdBQU47QUFHSDs7R0FqRFFwQjs7QUFtRFQsK0RBQWVBLGtCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZSA9IDEwMDApe1xyXG5cclxuICAgIGNvbnN0IFJFUVVFU1RfU1RBVFVTICA9IHtcclxuICAgICAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgICAgICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICBGQUlMVVJFOiBcImZhaWx1cmVcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYyhtcyl7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KG1zKTtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgXCJIYWQgRXJyb3IhXCJcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTcGVha2Vyc0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGF5RnVuYyhkZWxheVRpbWUpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlIChpZCkge1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKCByZWMgPT4gcmVjLmlkID09PSBpZCk7XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlclJlY05ldyA9IHsgLi4uc3BlYWtlclJlY1ByZXZpb3VzIH1cclxuICAgICAgICBzcGVha2VyUmVjTmV3LmZhdm9yaXRlID0gIXNwZWFrZXJSZWNQcmV2aW91cy5mYXZvcml0ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcCggZnVuY3Rpb24ocmVjKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjTmV3IDogcmVjO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBzcGVha2Vyc0RhdGEsIGlzTG9hZGluZywgaGFzRXJyb3JlZCwgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VyczsiXSwibmFtZXMiOlsiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVxdWVzdFNwZWFrZXJzIiwiZGVsYXlUaW1lIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwic2V0SXNMb2FkaW5nIiwic2V0SGFzRXJyb3JlZCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjTmV3IiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==