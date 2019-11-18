webpackHotUpdate("static\\development\\pages\\calc.js",{

/***/ "./componentes/Calculadora.js":
/*!************************************!*\
  !*** ./componentes/Calculadora.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\luisg\\Documents\\dev\\classroom\\componentes\\Calculadora.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var Calculadora =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Calculadora, _React$Component);

  function Calculadora() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Calculadora);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Calculadora)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      res: "0"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDigit", function (digit) {
      console.log(digit);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calculadora, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-4062558530",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4062558530" + " " + "z-depth-2 teal white-text center-align resultados",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.state.res), __jsx("div", {
        style: {
          textAlign: "center"
        },
        className: "jsx-4062558530",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit({
              digit: digit
            });
          },
          className: "jsx-4062558530" + " " + "waves-effect waves-light btn-large",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, digit);
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4062558530",
        __self: this
      }, ".resultados.jsx-4062558530{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHVpc2dcXERvY3VtZW50c1xcZGV2XFxjbGFzc3Jvb21cXGNvbXBvbmVudGVzXFxDYWxjdWxhZG9yYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBR2lDLFlBQ0UsY0FDQyxlQUNJLG1CQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGx1aXNnXFxEb2N1bWVudHNcXGRldlxcY2xhc3Nyb29tXFxjb21wb25lbnRlc1xcQ2FsY3VsYWRvcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYWxjdWxhZG9yYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICByZXM6IFwiMFwiXHJcbiAgICB9XHJcbiAgICBvbkRpZ2l0ID0gKGRpZ2l0KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRpZ2l0KVxyXG4gICAgfVxyXG4gICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei1kZXB0aC0yIHRlYWwgd2hpdGUtdGV4dCBjZW50ZXItYWxpZ24gcmVzdWx0YWRvc1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgIFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl0ubWFwKGRpZ2l0PT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tbGFyZ2VcIiBvbkNsaWNrPXsoKT0+dGhpcy5vbkRpZ2l0KHtkaWdpdH0pfT57ZGlnaXR9PC9hPlxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIC5yZXN1bHRhZG9zIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhZG9yYSJdfQ== */\n/*@ sourceURL=C:\\Users\\luisg\\Documents\\dev\\classroom\\componentes\\Calculadora.js */"));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ })

})
//# sourceMappingURL=calc.js.09d03b9354429f5f6530.hot-update.js.map