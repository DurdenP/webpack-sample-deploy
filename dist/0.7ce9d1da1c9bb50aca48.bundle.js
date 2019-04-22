(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "QK73":
/*!***************************************!*\
  !*** ./src/Components/BookDetails.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"55Ip\");\n/* harmony import */ var _BooksAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BooksAPI */ \"EoOK\");\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Book */ \"WLwq\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar BookDetails =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BookDetails, _Component);\n\n  function BookDetails(props) {\n    var _this;\n\n    _classCallCheck(this, BookDetails);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookDetails).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      book: null\n    });\n\n    _this.loadBook = _this.loadBook.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(BookDetails, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadBook(this.props.match.params.bookId);\n    }\n  }, {\n    key: \"loadBook\",\n    value: function loadBook(id) {\n      var _this2 = this;\n\n      // query API for active shelves and add the books into state\n      _BooksAPI__WEBPACK_IMPORTED_MODULE_3__[\"get\"](id).then(function (book) {\n        return _this2.setState({\n          book: book\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var book = this.state.book;\n\n      if (!book) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading book\");\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"search-books\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"search-books-bar\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        className: \"close-search\",\n        to: \"/\"\n      }, \"Close\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"search-books-input-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"searchTerm\",\n        value: book.title,\n        readOnly: true\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bookshelf\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"bookshelf-title\"\n      }, \"\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bookshelf-books\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ol\", {\n        className: \"books-grid\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book-top\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book-cover\",\n        style: {\n          width: 128,\n          height: 193,\n          backgroundImage: \"url(\\\"\".concat(book.imageLinks.thumbnail, \"\\\")\")\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book-title\"\n      }, book.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book-authors\"\n      }, book.authors.map(function (author) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          key: author\n        }, author, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"book-authors\"\n      }, book.subtitle)))))));\n    }\n  }]);\n\n  return BookDetails;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUs3My5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Jvb2tEZXRhaWxzLmpzPzQwYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCAqIGFzIEJvb2tzQVBJIGZyb20gJy4uL0Jvb2tzQVBJJztcblxuaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rJztcblxuY2xhc3MgQm9va0RldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxvYWRCb29rID0gdGhpcy5sb2FkQm9vay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgYm9vazogbnVsbCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZEJvb2sodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuYm9va0lkKTtcbiAgfVxuXG4gIGxvYWRCb29rKGlkKSB7XG4gICAgLy8gcXVlcnkgQVBJIGZvciBhY3RpdmUgc2hlbHZlcyBhbmQgYWRkIHRoZSBib29rcyBpbnRvIHN0YXRlXG4gICAgQm9va3NBUEkuZ2V0KGlkKS50aGVuKChib29rKSA9PiB0aGlzLnNldFN0YXRlKHsgYm9vayB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBib29rIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghYm9vaykge1xuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcgYm9vazwvcD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWJvb2tzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1ib29rcy1iYXInPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nY2xvc2Utc2VhcmNoJyB0bz0nLyc+Q2xvc2U8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1ib29rcy1pbnB1dC13cmFwcGVyJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBuYW1lPSdzZWFyY2hUZXJtJ1xuICAgICAgICAgICAgICB2YWx1ZT17IGJvb2sudGl0bGUgfVxuICAgICAgICAgICAgICByZWFkT25seT17IHRydWUgfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2tzaGVsZic+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYm9va3NoZWxmLXRpdGxlJz4mbmJzcDs8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rc2hlbGYtYm9va3MnPlxuICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT0nYm9va3MtZ3JpZCc+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vayc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay10b3AnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1jb3Zlcicgc3R5bGU9eyB7IHdpZHRoOiAxMjgsIGhlaWdodDogMTkzLCBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIkeyBib29rLmltYWdlTGlua3MudGh1bWJuYWlsIH1cIilgIH0gfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay10aXRsZSc+e2Jvb2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1hdXRob3JzJz57Ym9vay5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiA8c3BhbiBrZXk9eyBhdXRob3IgfT57YXV0aG9yfTxiciAvPjwvc3Bhbj4pfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stYXV0aG9ycyc+eyBib29rLnN1YnRpdGxlIH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rRGV0YWlscztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFNQTtBQURBO0FBQ0E7QUFKQTtBQUZBO0FBR0E7QUFDQTs7O0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7Ozs7QUF6REE7QUFDQTtBQTJEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///QK73\n");

/***/ })

}]);