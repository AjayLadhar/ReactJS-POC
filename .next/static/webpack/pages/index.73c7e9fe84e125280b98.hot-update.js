"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/hooks/useRequestSpeakers.js":
/*!****************************************************!*\
  !*** ./src/components/hooks/useRequestSpeakers.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
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




var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

function useRequestSpeakers() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

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
    requestStatus: requestStatus,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzNjN2U5ZmU4NGUxMjUyODBiOTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1HLGNBQWMsR0FBSTtBQUMzQkMsRUFBQUEsT0FBTyxFQUFFLFNBRGtCO0FBRTNCQyxFQUFBQSxPQUFPLEVBQUUsU0FGa0I7QUFHM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUhrQixDQUF4Qjs7QUFNUCxTQUFTQyxrQkFBVCxHQUE2QztBQUFBOztBQUFBLE1BQWpCQyxTQUFpQix1RUFBTCxJQUFLOztBQUV6QyxrQkFBd0NQLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9RLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTBDVCwrQ0FBUSxDQUFDRSxjQUFjLENBQUNDLE9BQWhCLENBQWxEO0FBQUEsTUFBT08sYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBCWCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPWSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFFQWQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFFR2tCLFNBRkg7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlNBRVosaUJBQXlCSixFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVjRCxLQUFLLENBQUNDLEVBQUQsQ0FGbkI7O0FBQUE7QUFHUTtBQUNBSixnQkFBQUEsZ0JBQWdCLENBQUNULGNBQWMsQ0FBQ0UsT0FBaEIsQ0FBaEI7QUFDQUssZ0JBQUFBLGVBQWUsQ0FBQ1YsOENBQUQsQ0FBZjtBQUxSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUVFZLGdCQUFBQSxnQkFBZ0IsQ0FBQ1QsY0FBYyxDQUFDRyxPQUFoQixDQUFoQjtBQUNBUSxnQkFBQUEsUUFBUSxhQUFSOztBQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRlk7QUFBQTtBQUFBOztBQWVaTSxJQUFBQSxTQUFTLENBQUNaLFNBQUQsQ0FBVDtBQUVILEdBakJRLEVBaUJOLEVBakJNLENBQVQ7O0FBbUJBLFdBQVNhLGdCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUMzQixRQUFNQyxrQkFBa0IsR0FBR2QsWUFBWSxDQUFDZSxJQUFiLENBQW1CLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBZjtBQUFBLEtBQXRCLENBQTNCOztBQUNBLFFBQU1JLGFBQWEscUJBQVFILGtCQUFSLENBQW5COztBQUNBRyxJQUFBQSxhQUFhLENBQUNDLFFBQWQsR0FBeUIsQ0FBQ0osa0JBQWtCLENBQUNJLFFBQTdDO0FBRUEsUUFBTUMsZUFBZSxHQUFHbkIsWUFBWSxDQUFDb0IsR0FBYixDQUFrQixVQUFTSixHQUFULEVBQWE7QUFDbkQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGFBQWhCLEdBQWdDRCxHQUF2QztBQUNILEtBRnVCLENBQXhCO0FBSUFmLElBQUFBLGVBQWUsQ0FBQ2tCLGVBQUQsQ0FBZjtBQUNIOztBQUVELFNBQU07QUFDRm5CLElBQUFBLFlBQVksRUFBWkEsWUFERTtBQUNZRSxJQUFBQSxhQUFhLEVBQWJBLGFBRFo7QUFDMkJFLElBQUFBLEtBQUssRUFBTEEsS0FEM0I7QUFDa0NRLElBQUFBLGdCQUFnQixFQUFoQkE7QUFEbEMsR0FBTjtBQUdIOztHQTFDUWQ7O0FBNENULCtEQUFlQSxrQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VSZXF1ZXN0U3BlYWtlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyAgPSB7XHJcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gICAgRkFJTFVSRTogXCJmYWlsdXJlXCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3RTcGVha2VycyhkZWxheVRpbWUgPSAxMDAwKXtcclxuXHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYyhtcyl7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KG1zKTtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgXCJIYWQgRXJyb3IhXCJcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgICAgICBzZXRTcGVha2Vyc0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsYXlGdW5jKGRlbGF5VGltZSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUgKGlkKSB7XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlclJlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoIHJlYyA9PiByZWMuaWQgPT09IGlkKTtcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjTmV3ID0geyAuLi5zcGVha2VyUmVjUHJldmlvdXMgfVxyXG4gICAgICAgIHNwZWFrZXJSZWNOZXcuZmF2b3JpdGUgPSAhc3BlYWtlclJlY1ByZXZpb3VzLmZhdm9yaXRlO1xyXG5cclxuICAgICAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKCBmdW5jdGlvbihyZWMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNOZXcgOiByZWM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHNwZWFrZXJzRGF0YSwgcmVxdWVzdFN0YXR1cywgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VyczsiXSwibmFtZXMiOlsiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJkZWxheVRpbWUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlclJlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNOZXciLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=