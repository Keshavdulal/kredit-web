webpackHotUpdate_N_E("pages/register",{

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/keshavdulal/Code/kredit/frontend/src/components/InputField.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n // fancy way of telling my Input field to take props\n// as any regular input element would take\n\nvar InputField = function InputField(props) {\n  _s();\n\n  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_4__[\"useField\"])(props),\n      _useField2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useField, 2),\n      field = _useField2[0],\n      error = _useField2[1].error;\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n    isInvalid: !!error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n    htmlFor: field.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, props.label), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, field, props, {\n    id: field.name,\n    placeholder: props.placeholder,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  })), error && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormErrorMessage\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 23\n    }\n  }, error));\n};\n\n_s(InputField, \"DpPuTb9nPdu6NyyZR63Xu5KSrwc=\", false, function () {\n  return [formik__WEBPACK_IMPORTED_MODULE_4__[\"useField\"]];\n});\n\n_c = InputField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputField);\n\nvar _c;\n\n$RefreshReg$(_c, \"InputField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3g/YzkyZCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkIiwicHJvcHMiLCJ1c2VGaWVsZCIsImZpZWxkIiwiZXJyb3IiLCJuYW1lIiwibGFiZWwiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQVFBO0FBQ0E7O0FBTUEsSUFBTUEsVUFBcUMsR0FBRyxTQUF4Q0EsVUFBd0MsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQzFCQyx1REFBUSxDQUFDRCxLQUFELENBRGtCO0FBQUE7QUFBQSxNQUM5Q0UsS0FEOEM7QUFBQSxNQUNyQ0MsS0FEcUMsaUJBQ3JDQSxLQURxQzs7QUFFckQsU0FDSSxNQUFDLDJEQUFEO0FBQWEsYUFBUyxFQUFFLENBQUMsQ0FBQ0EsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBVyxXQUFPLEVBQUVELEtBQUssQ0FBQ0UsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ0osS0FBSyxDQUFDSyxLQUF2QyxDQURKLEVBRUksTUFBQyxxREFBRCx5RkFDUUgsS0FEUixFQUVRRixLQUZSO0FBR0ksTUFBRSxFQUFFRSxLQUFLLENBQUNFLElBSGQ7QUFJSSxlQUFXLEVBQUVKLEtBQUssQ0FBQ00sV0FKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZKLEVBUUtILEtBQUssSUFBSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJBLEtBQW5CLENBUmQsQ0FESjtBQVlILENBZEQ7O0dBQU1KLFU7VUFDeUJFLCtDOzs7S0FEekJGLFU7QUFnQlNBLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgRm9ybUNvbnRyb2wsXG4gICAgRm9ybUxhYmVsLFxuICAgIElucHV0LFxuICAgIEZvcm1FcnJvck1lc3NhZ2UsXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gJ2Zvcm1payc7XG5cbi8vIGZhbmN5IHdheSBvZiB0ZWxsaW5nIG15IElucHV0IGZpZWxkIHRvIHRha2UgcHJvcHNcbi8vIGFzIGFueSByZWd1bGFyIGlucHV0IGVsZW1lbnQgd291bGQgdGFrZVxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xufTtcblxuY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SW5wdXRGaWVsZFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtmaWVsZCwgeyBlcnJvciB9XSA9IHVzZUZpZWxkKHByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIWVycm9yfT5cbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17ZmllbGQubmFtZX0+e3Byb3BzLmxhYmVsfTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9yICYmIDxGb3JtRXJyb3JNZXNzYWdlPntlcnJvcn08L0Zvcm1FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/InputField.tsx\n");

/***/ })

})