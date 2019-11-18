module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componentes/ClaseComponent.js":
/*!***************************************!*\
  !*** ./componentes/ClaseComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\luisg\\Documents\\dev\\classroom\\componentes\\ClaseComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", {
  id: "clase-container",
  className: "jsx-831874087",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-831874087",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "Clase de ", props.nombre), props.clase.map(item => {
  return __jsx("div", {
    className: "jsx-831874087" + " " + "clase-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    src: item.foto,
    alt: "Profile Photo",
    className: "jsx-831874087",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-831874087",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, item.first_name, " ", item.last_name));
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "831874087",
  __self: undefined
}, "#clase-container.jsx-831874087{-webkit-perspective:500px;-moz-perspective:500px;-ms-perspective:500px;perspective:500px;}.clase-list.jsx-831874087{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:10px;}.clase-list.jsx-831874087 img.jsx-831874087{padding:3px;border:1px solid #0AF566;border-radius:10px;}.clase-list.jsx-831874087 p.jsx-831874087{font-size:12px;font-weight:bold;font-style:italic;margin-left:12px;}.clase-list.jsx-831874087:hover{-webkit-transform:translateX(10px)scale(1);-ms-transform:translateX(10px)scale(1);transform:translateX(10px)scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHVpc2dcXERvY3VtZW50c1xcZGV2XFxjbGFzc3Jvb21cXGNvbXBvbmVudGVzXFxDbGFzZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZWSxBQUdtQyxBQUlMLEFBSUQsQUFNRyxBQU9vQixZQVpWLEdBTVIsaUJBQ0MsS0FOQyxhQU9GLE1BTnJCLFdBT0EsT0FidUIsZUFKdkIsSUFLQSx3QkFnQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxsdWlzZ1xcRG9jdW1lbnRzXFxkZXZcXGNsYXNzcm9vbVxcY29tcG9uZW50ZXNcXENsYXNlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb3BzKT0+IChcclxuPGRpdiBpZD1cImNsYXNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+Q2xhc2UgZGUge3Byb3BzLm5vbWJyZX08L2gyPlxyXG4gICAgIHtwcm9wcy5jbGFzZS5tYXAoaXRlbT0+e1xyXG4gICAgICAgICByZXR1cm4gKCA8ZGl2IGNsYXNzTmFtZT1cImNsYXNlLWxpc3RcIj5cclxuICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmZvdG99IGFsdD1cIlByb2ZpbGUgUGhvdG9cIi8+XHJcbiAgICAgICAgICAgICA8cD57aXRlbS5maXJzdF9uYW1lfSB7aXRlbS5sYXN0X25hbWV9PC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgKVxyXG4gICAgIH0pfVxyXG4gICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAjY2xhc2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNsYXNlLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsYXNlLWxpc3QgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwQUY1NjY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xhc2UtbGlzdCBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbGFzZS1saXN0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KXNjYWxlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgfVxyXG5cclxuICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSJdfQ== */\n/*@ sourceURL=C:\\Users\\luisg\\Documents\\dev\\classroom\\componentes\\ClaseComponent.js */")));

/***/ }),

/***/ "./componentes/comunes/BarraTitulo.js":
/*!********************************************!*\
  !*** ./componentes/comunes/BarraTitulo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\luisg\\Documents\\dev\\classroom\\componentes\\comunes\\BarraTitulo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const links = [{
  url: "/",
  nombre: "Home"
}, {
  url: "/calc",
  nombre: "Calculadora"
}];
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("nav", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "nav-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  className: "brand-logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "ClassRoom")), __jsx("ul", {
  id: "nav-mobile",
  className: "right hide-on-med-and-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, links.map(link => {
  return __jsx("li", {
    key: link.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, link.nombre)));
})))));

/***/ }),

/***/ "./componentes/comunes/Header.js":
/*!***************************************!*\
  !*** ./componentes/comunes/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\luisg\\Documents\\dev\\classroom\\componentes\\comunes\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "ClassRoom - ReactJS and NextJS App"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}))));

/***/ }),

/***/ "./data/estudiantes.js":
/*!*****************************!*\
  !*** ./data/estudiantes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const ciencias = [{
  "id": 1,
  "first_name": "Tamra",
  "last_name": "Probey",
  "sexo": "Female",
  "foto": "https://robohash.org/fugitveleligendi.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Alexine",
  "last_name": "Tschirschky",
  "sexo": "Female",
  "foto": "https://robohash.org/etculpasapiente.bmp?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Dannye",
  "last_name": "Maxfield",
  "sexo": "Female",
  "foto": "https://robohash.org/dolorsintut.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Philly",
  "last_name": "Eilhersen",
  "sexo": "Female",
  "foto": "https://robohash.org/nihilnequesit.png?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Nicko",
  "last_name": "Bown",
  "sexo": "Male",
  "foto": "https://robohash.org/ametillofacere.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Kristal",
  "last_name": "Greenhalf",
  "sexo": "Female",
  "foto": "https://robohash.org/voluptatessuntet.bmp?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Raimondo",
  "last_name": "Alessandrelli",
  "sexo": "Male",
  "foto": "https://robohash.org/eaquoofficia.jpg?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Hagen",
  "last_name": "Pringuer",
  "sexo": "Male",
  "foto": "https://robohash.org/quiatemporeeius.jpg?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Verina",
  "last_name": "Gallally",
  "sexo": "Female",
  "foto": "https://robohash.org/nobisundedoloremque.jpg?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Demetrius",
  "last_name": "Winspur",
  "sexo": "Male",
  "foto": "https://robohash.org/voluptatemremquos.jpg?size=50x50&set=set1"
}];
const matematicas = [{
  "id": 1,
  "first_name": "Auberta",
  "last_name": "Brecknall",
  "sexo": "Female",
  "foto": "https://robohash.org/estaperiammolestias.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Gerrie",
  "last_name": "Lehrer",
  "sexo": "Female",
  "foto": "https://robohash.org/etnihilnisi.bmp?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Prisca",
  "last_name": "Whylie",
  "sexo": "Female",
  "foto": "https://robohash.org/nobisipsumexercitationem.bmp?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Rori",
  "last_name": "Snowding",
  "sexo": "Female",
  "foto": "https://robohash.org/cumquequisquisquam.jpg?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Sophey",
  "last_name": "Ivy",
  "sexo": "Female",
  "foto": "https://robohash.org/doloresvoluptatesrem.jpg?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Gusti",
  "last_name": "Guys",
  "sexo": "Female",
  "foto": "https://robohash.org/hicvoluptatemut.bmp?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Sigismundo",
  "last_name": "Duthie",
  "sexo": "Male",
  "foto": "https://robohash.org/estesteum.jpg?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Ranice",
  "last_name": "Boxall",
  "sexo": "Female",
  "foto": "https://robohash.org/accusantiumarchitectonesciunt.jpg?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Eberhard",
  "last_name": "Beetham",
  "sexo": "Male",
  "foto": "https://robohash.org/veritatisomnisut.bmp?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Chery",
  "last_name": "Lingner",
  "sexo": "Female",
  "foto": "https://robohash.org/quietbeatae.png?size=50x50&set=set1"
}];
module.exports = {
  matematicas,
  ciencias
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/ClaseComponent */ "./componentes/ClaseComponent.js");
/* harmony import */ var _componentes_comunes_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/comunes/Header */ "./componentes/comunes/Header.js");
/* harmony import */ var _data_estudiantes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/estudiantes */ "./data/estudiantes.js");
/* harmony import */ var _data_estudiantes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_estudiantes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componentes_comunes_BarraTitulo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/comunes/BarraTitulo */ "./componentes/comunes/BarraTitulo.js");
var _jsxFileName = "C:\\Users\\luisg\\Documents\\dev\\classroom\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-3694382979",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_componentes_comunes_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_componentes_comunes_BarraTitulo__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("h1", {
  style: {
    textAlign: "center"
  },
  className: "jsx-3694382979",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Cursos del Plan"), __jsx("div", {
  style: {
    display: "flex",
    justifyContent: "space-around"
  },
  className: "jsx-3694382979",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
  nombre: "Matematica",
  clase: _data_estudiantes__WEBPACK_IMPORTED_MODULE_4__["matematicas"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
  nombre: "Ciencias",
  clase: _data_estudiantes__WEBPACK_IMPORTED_MODULE_4__["ciencias"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3694382979",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');body{background:#15C5E8;color:white;font-family:'Roboto';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHVpc2dcXERvY3VtZW50c1xcZGV2XFxjbGFzc3Jvb21cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlEsQUFFbUYsQUFFckQsbUJBQ1AsWUFDUyxxQkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsdWlzZ1xcRG9jdW1lbnRzXFxkZXZcXGNsYXNzcm9vbVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudGVzL0NsYXNlQ29tcG9uZW50J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudGVzL2NvbXVuZXMvSGVhZGVyJ1xyXG5pbXBvcnQge21hdGVtYXRpY2FzLCBjaWVuY2lhc30gZnJvbSAnLi4vZGF0YS9lc3R1ZGlhbnRlcydcclxuaW1wb3J0IEJhcnJhVGl0dWxvIGZyb20gJy4uL2NvbXBvbmVudGVzL2NvbXVuZXMvQmFycmFUaXR1bG8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKT0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIvPlxyXG4gICAgICA8QmFycmFUaXR1bG8vPlxyXG4gICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkN1cnNvcyBkZWwgUGxhbjwvaDE+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgPENsYXNlQ29tcG9uZW50IG5vbWJyZT1cIk1hdGVtYXRpY2FcIiBjbGFzZT17bWF0ZW1hdGljYXN9Lz5cclxuICAgICAgICA8Q2xhc2VDb21wb25lbnQgbm9tYnJlPVwiQ2llbmNpYXNcIiBjbGFzZT17Y2llbmNpYXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAge1xyXG4gICAgICAgIGBcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNUM1RTg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICAgfVxyXG4gICAgPC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuKSJdfQ== */\n/*@ sourceURL=C:\\Users\\luisg\\Documents\\dev\\classroom\\pages\\index.js */")));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luisg\Documents\dev\classroom\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map