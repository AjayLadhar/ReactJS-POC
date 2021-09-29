"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/speakerList.js":
/*!***************************************!*\
  !*** ./src/components/speakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker */ "./src/components/speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Ajay\\Desktop\\React Projects\\my-app\\src\\components\\speakerList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ajay_Desktop_React_Projects_my_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function SpeakerList(_ref) {
  _s();

  var showSession = _ref.showSession;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      hasErrored = _useState3[0],
      setHasErrored = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      error = _useState4[0],
      setError = _useState4[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
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
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data);
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

    delayFunc(2000);
  }, []);

  function _onFavoriteToggle(id) {
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

  if (hasErrored === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "text-danger",
    children: ["Error: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
      children: [" Loading speaker data failed! ", error, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 52
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 16
  }, this); //if(isLoading === true) return <div>Loading...</div>;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_6__.default, {
      type: "media",
      rows: 15,
      className: "speakerList-Placeholder",
      ready: isLoading === false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_speaker__WEBPACK_IMPORTED_MODULE_3__.default, {
            speaker: speaker,
            showSession: showSession,
            onFavoriteToggle: function onFavoriteToggle() {
              return _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

_s(SpeakerList, "N0/ZjlpZrsK/D2mMG6JtGO/Lb6U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzBjZTZhM2YwNTA2YmFjMjlkNmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssV0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYzs7QUFFakMsa0JBQXdDSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPSyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFrQ04sK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT08sU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NSLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQTBCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFFQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFFR2lCLFNBRkg7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlNBRVosaUJBQXlCSixFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVjRCxLQUFLLENBQUNDLEVBQUQsQ0FGbkI7O0FBQUE7QUFHUTtBQUNBTixnQkFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBRixnQkFBQUEsZUFBZSxDQUFDUCw4Q0FBRCxDQUFmO0FBTFI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRUVMsZ0JBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsZ0JBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUUsZ0JBQUFBLFFBQVEsYUFBUjs7QUFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZZO0FBQUE7QUFBQTs7QUFnQlpNLElBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFFSCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUOztBQW9CQSxXQUFTQyxpQkFBVCxDQUEyQkMsRUFBM0IsRUFBK0I7QUFDM0IsUUFBTUMsa0JBQWtCLEdBQUdoQixZQUFZLENBQUNpQixJQUFiLENBQW1CLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBZjtBQUFBLEtBQXRCLENBQTNCOztBQUNBLFFBQU1JLGFBQWEscUJBQVFILGtCQUFSLENBQW5COztBQUNBRyxJQUFBQSxhQUFhLENBQUNDLFFBQWQsR0FBeUIsQ0FBQ0osa0JBQWtCLENBQUNJLFFBQTdDO0FBRUEsUUFBTUMsZUFBZSxHQUFHckIsWUFBWSxDQUFDc0IsR0FBYixDQUFrQixVQUFTSixHQUFULEVBQWE7QUFDbkQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGFBQWhCLEdBQWdDRCxHQUF2QztBQUNILEtBRnVCLENBQXhCO0FBSUFqQixJQUFBQSxlQUFlLENBQUNvQixlQUFELENBQWY7QUFDSDs7QUFFRCxNQUFHakIsVUFBVSxLQUFLLElBQWxCLEVBQ0ksb0JBQU87QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLHVDQUFvQztBQUFBLG1EQUFrQ0UsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBMUM2QixDQTRDakM7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBRyxPQURYO0FBRUksVUFBSSxFQUFJLEVBRlo7QUFHSSxlQUFTLEVBQUcseUJBSGhCO0FBSUksV0FBSyxFQUFJSixTQUFTLEtBQUssS0FKM0I7QUFBQSw2QkFNSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNLRixZQUFZLENBQUNzQixHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDakMsOEJBQ0ksOERBQUMsNkNBQUQ7QUFFQSxtQkFBTyxFQUFJQSxPQUZYO0FBR0EsdUJBQVcsRUFBSXhCLFdBSGY7QUFJQSw0QkFBZ0IsRUFBSztBQUFBLHFCQUFNZSxpQkFBZ0IsQ0FBQ1MsT0FBTyxDQUFDUixFQUFULENBQXRCO0FBQUE7QUFKckIsYUFDT1EsT0FBTyxDQUFDUixFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFPSCxTQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0dBcEVRakI7O0tBQUFBO0FBc0VULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyICBmcm9tIFwiLi9zcGVha2VyXCI7XHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gJ3JlYWN0LXBsYWNlaG9sZGVyJztcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJMaXN0KHsgc2hvd1Nlc3Npb259KSB7XHJcblxyXG4gICAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtoYXNFcnJvcmVkLCBzZXRIYXNFcnJvcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKG1zKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkobXMpO1xyXG4gICAgICAgICAgICAgICAgLy90aHJvdyBcIkhhZCBFcnJvciFcIlxyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIYXNFcnJvcmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsYXlGdW5jKDIwMDApO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlIChpZCkge1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKCByZWMgPT4gcmVjLmlkID09PSBpZCk7XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlclJlY05ldyA9IHsgLi4uc3BlYWtlclJlY1ByZXZpb3VzIH1cclxuICAgICAgICBzcGVha2VyUmVjTmV3LmZhdm9yaXRlID0gIXNwZWFrZXJSZWNQcmV2aW91cy5mYXZvcml0ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcCggZnVuY3Rpb24ocmVjKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjTmV3IDogcmVjO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhhc0Vycm9yZWQgPT09IHRydWUpIFxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+RXJyb3I6IDxiPiBMb2FkaW5nIHNwZWFrZXIgZGF0YSBmYWlsZWQhIHtlcnJvcn0gPC9iPiA8L2Rpdj47XHJcblxyXG4gICAgLy9pZihpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJtZWRpYVwiXHJcbiAgICAgICAgICAgICAgICByb3dzID0gezE1fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJzcGVha2VyTGlzdC1QbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICByZWFkeSA9IHtpc0xvYWRpbmcgPT09IGZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtzcGVha2VyLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXIgPSB7c3BlYWtlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbiA9IHtzaG93U2Vzc2lvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlID0geyAoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0UGxhY2Vob2xkZXIiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9uIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsInNldEhhc0Vycm9yZWQiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5RnVuYyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjTmV3IiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==