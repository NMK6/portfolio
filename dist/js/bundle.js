/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/views/firstScreenViews */ \"./src/js/views/firstScreenViews.js\");\n/* harmony import */ var _js_views_secondScreenViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/views/secondScreenViews */ \"./src/js/views/secondScreenViews.js\");\n/* harmony import */ var _js_views_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/views/utils */ \"./src/js/views/utils.js\");\n/* harmony import */ var _js_views_logoViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/views/logoViews */ \"./src/js/views/logoViews.js\");\n/* harmony import */ var _js_models_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/models/Logo */ \"./src/js/models/Logo.js\");\n/* harmony import */ var _js_models_Canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/models/Canvas */ \"./src/js/models/Canvas.js\");\n/* harmony import */ var _js_views_menuViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/views/menuViews */ \"./src/js/views/menuViews.js\");\n\n\n\n\n\n\n\n\n\n_js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_2__.addFirstLogo();\nwindow.addEventListener('DOMContentLoaded', e => {\n  e.preventDefault();\n  const state = {};\n\n  function changeScreens() {\n    return new Promise(function (resolve, reject) {\n      resolve();\n      reject();\n    });\n  }\n\n  changeScreens().then(_js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_2__.addAnimation).then(_js_views_utils__WEBPACK_IMPORTED_MODULE_4__.addVisuallyHiddenLater('.first-screen')).then(_js_views_secondScreenViews__WEBPACK_IMPORTED_MODULE_3__.addSecondScreen).then(addLogo).then(function () {\n    return _js_views_utils__WEBPACK_IMPORTED_MODULE_4__.removeVisuallyHidden('.second-screen');\n  }).then(function () {\n    return setTimeout(function () {\n      _js_views_secondScreenViews__WEBPACK_IMPORTED_MODULE_3__.createTitle(document.querySelector('.second-screen'));\n    }, 2000);\n  }).then(function () {\n    return setTimeout(function () {\n      _js_views_utils__WEBPACK_IMPORTED_MODULE_4__.addClass(document.querySelector('.second-screen__title'), 'title_move-right');\n    }, 6000);\n  }).then(function () {\n    return setTimeout(function () {\n      _js_views_menuViews__WEBPACK_IMPORTED_MODULE_8__.createMenu(document.querySelector('.second-screen'));\n    }, 6100);\n  }).catch();\n\n  async function addLogo() {\n    state.logo = new _js_models_Logo__WEBPACK_IMPORTED_MODULE_6__.default();\n    await state.logo.getLogoData();\n    state.canvas = new _js_models_Canvas__WEBPACK_IMPORTED_MODULE_7__.default(150, 100, 'canvas__logo', 70, 70, 1.1, 1.1, 18, 24, 0.3, _js_views_base__WEBPACK_IMPORTED_MODULE_0__.elements.root, 0, 0);\n    await _js_views_logoViews__WEBPACK_IMPORTED_MODULE_5__.drawLogo(state.logo.result.logo, state.canvas);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi9qcy92aWV3cy9iYXNlJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3Nhc3MvbWFpbi5zY3NzJztcbmltcG9ydCAqIGFzIGZpcnN0U2NyZWVuVmlld3MgZnJvbSAnLi9qcy92aWV3cy9maXJzdFNjcmVlblZpZXdzJztcbmltcG9ydCAqIGFzIHNlY29uZFNjcmVlblZpZXdzIGZyb20gJy4vanMvdmlld3Mvc2Vjb25kU2NyZWVuVmlld3MnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9qcy92aWV3cy91dGlscyc7XG5pbXBvcnQgKiBhcyBsb2dvVmlld3MgZnJvbSAnLi9qcy92aWV3cy9sb2dvVmlld3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9qcy9tb2RlbHMvTG9nbyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vanMvbW9kZWxzL0NhbnZhcyc7XG5pbXBvcnQgKiBhcyBtZW51Vmlld3MgZnJvbSAnLi9qcy92aWV3cy9tZW51Vmlld3MnO1xuXG5maXJzdFNjcmVlblZpZXdzLmFkZEZpcnN0TG9nbygpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHN0YXRlID0ge307XG5cbiAgZnVuY3Rpb24gY2hhbmdlU2NyZWVucygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlU2NyZWVucygpXG4gICAgLnRoZW4oZmlyc3RTY3JlZW5WaWV3cy5hZGRBbmltYXRpb24pXG4gICAgLnRoZW4odXRpbHMuYWRkVmlzdWFsbHlIaWRkZW5MYXRlcignLmZpcnN0LXNjcmVlbicpKVxuICAgIC50aGVuKHNlY29uZFNjcmVlblZpZXdzLmFkZFNlY29uZFNjcmVlbilcbiAgICAudGhlbihhZGRMb2dvKVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1dGlscy5yZW1vdmVWaXN1YWxseUhpZGRlbignLnNlY29uZC1zY3JlZW4nKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2Vjb25kU2NyZWVuVmlld3MuY3JlYXRlVGl0bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zY3JlZW4nKSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXRpbHMuYWRkQ2xhc3MoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zY3JlZW5fX3RpdGxlJyksXG4gICAgICAgICAgJ3RpdGxlX21vdmUtcmlnaHQnXG4gICAgICAgICk7XG4gICAgICB9LCA2MDAwKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVudVZpZXdzLmNyZWF0ZU1lbnUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zY3JlZW4nKSk7XG4gICAgICB9LCA2MTAwKTtcbiAgICB9KVxuICAgIC5jYXRjaCgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZExvZ28oKSB7XG4gICAgc3RhdGUubG9nbyA9IG5ldyBMb2dvKCk7XG4gICAgYXdhaXQgc3RhdGUubG9nby5nZXRMb2dvRGF0YSgpO1xuICAgIHN0YXRlLmNhbnZhcyA9IG5ldyBDYW52YXMoXG4gICAgICAxNTAsXG4gICAgICAxMDAsXG4gICAgICAnY2FudmFzX19sb2dvJyxcbiAgICAgIDcwLFxuICAgICAgNzAsXG4gICAgICAxLjEsXG4gICAgICAxLjEsXG4gICAgICAxOCxcbiAgICAgIDI0LFxuICAgICAgMC4zLFxuICAgICAgZWxlbWVudHMucm9vdCxcbiAgICAgIDAsXG4gICAgICAwXG4gICAgKTtcblxuICAgIGF3YWl0IGxvZ29WaWV3cy5kcmF3TG9nbyhzdGF0ZS5sb2dvLnJlc3VsdC5sb2dvLCBzdGF0ZS5jYW52YXMpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/models/Canvas.js":
/*!*********************************!*\
  !*** ./src/js/models/Canvas.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Canvas\n/* harmony export */ });\nclass Canvas {\n  constructor(width, height, styleClass, rectH, rectW, smallRectW, smallRectH, startY, startX, radius, parent, x, y) {\n    this.width = width;\n    this.height = height;\n    this.styleClass = styleClass;\n    this.rectH = rectH;\n    this.rectW = rectW;\n    this.smallRectW = smallRectW;\n    this.smallRectH = smallRectH;\n    this.startY = startY;\n    this.startX = startX;\n    this.radius = radius;\n    this.canvasLogo = document.createElement('canvas');\n    this.canvasLogo.context = this.canvasLogo.getContext('2d');\n    this.canvasLogo.width = this.width;\n    this.canvasLogo.height = this.height;\n    this.canvasLogo.style.width = this.width;\n    this.canvasLogo.style.height = this.height;\n    this.canvasLogo.className = this.styleClass;\n    this.colors = ['#D9B9A7', '#FADDCD', '#FAD5C0', '#FACEB4', '#E6B89E', '#E0C0AD'];\n    this.parent = parent;\n    this.x = x;\n    this.y = y;\n  }\n\n  draw() {\n    this.canvasLogo.context.beginPath();\n    this.canvasLogo.context.arc(this.x + this.x * this.smallRectW, this.y + this.y * this.smallRectH, this.radius, 0, 2 * Math.PI);\n    this.canvasLogo.context.stroke();\n  }\n\n  drawBorder() {\n    this.canvasLogo.context.beginPath();\n    this.canvasLogo.context.strokeStyle = '#d9b9a7';\n    this.canvasLogo.context.rotate(10 * Math.PI / 180);\n    this.canvasLogo.context.lineWidth = 0.5;\n    this.canvasLogo.context.strokeRect(50, 0, this.rectW, this.rectH);\n    this.canvasLogo.context.stroke();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9kZWxzL0NhbnZhcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpY19odG1sLy4vc3JjL2pzL21vZGVscy9DYW52YXMuanM/MjRjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgc3R5bGVDbGFzcyxcbiAgICByZWN0SCxcbiAgICByZWN0VyxcbiAgICBzbWFsbFJlY3RXLFxuICAgIHNtYWxsUmVjdEgsXG4gICAgc3RhcnRZLFxuICAgIHN0YXJ0WCxcbiAgICByYWRpdXMsXG4gICAgcGFyZW50LFxuICAgIHgsXG4gICAgeVxuICApIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zdHlsZUNsYXNzID0gc3R5bGVDbGFzcztcbiAgICB0aGlzLnJlY3RIID0gcmVjdEg7XG4gICAgdGhpcy5yZWN0VyA9IHJlY3RXO1xuICAgIHRoaXMuc21hbGxSZWN0VyA9IHNtYWxsUmVjdFc7XG4gICAgdGhpcy5zbWFsbFJlY3RIID0gc21hbGxSZWN0SDtcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLmNhbnZhc0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhc0xvZ28uY29udGV4dCA9IHRoaXMuY2FudmFzTG9nby5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY2FudmFzTG9nby53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5jYW52YXNMb2dvLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzTG9nby5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5jYW52YXNMb2dvLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzTG9nby5jbGFzc05hbWUgPSB0aGlzLnN0eWxlQ2xhc3M7XG4gICAgdGhpcy5jb2xvcnMgPSBbXG4gICAgICAnI0Q5QjlBNycsXG4gICAgICAnI0ZBRERDRCcsXG4gICAgICAnI0ZBRDVDMCcsXG4gICAgICAnI0ZBQ0VCNCcsXG4gICAgICAnI0U2Qjg5RScsXG4gICAgICAnI0UwQzBBRCcsXG4gICAgXTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY2FudmFzTG9nby5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgdGhpcy5jYW52YXNMb2dvLmNvbnRleHQuYXJjKFxuICAgICAgdGhpcy54ICsgdGhpcy54ICogdGhpcy5zbWFsbFJlY3RXLFxuICAgICAgdGhpcy55ICsgdGhpcy55ICogdGhpcy5zbWFsbFJlY3RILFxuICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIHRoaXMuY2FudmFzTG9nby5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG4gIGRyYXdCb3JkZXIoKSB7XG4gICAgdGhpcy5jYW52YXNMb2dvLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jYW52YXNMb2dvLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2Q5YjlhNyc7XG5cbiAgICB0aGlzLmNhbnZhc0xvZ28uY29udGV4dC5yb3RhdGUoKDEwICogTWF0aC5QSSkgLyAxODApO1xuICAgIHRoaXMuY2FudmFzTG9nby5jb250ZXh0LmxpbmVXaWR0aCA9IDAuNTtcbiAgICB0aGlzLmNhbnZhc0xvZ28uY29udGV4dC5zdHJva2VSZWN0KDUwLCAwLCB0aGlzLnJlY3RXLCB0aGlzLnJlY3RIKTtcblxuICAgIHRoaXMuY2FudmFzTG9nby5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/models/Canvas.js\n");

/***/ }),

/***/ "./src/js/models/Logo.js":
/*!*******************************!*\
  !*** ./src/js/models/Logo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Logo\n/* harmony export */ });\nclass Logo {\n  constructor() {}\n\n  async getLogoData() {\n    try {\n      const url = '/json/logo.json';\n      const logoData = await fetch(url);\n      this.result = await logoData.json();\n    } catch (error) {}\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9kZWxzL0xvZ28uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9qcy9tb2RlbHMvTG9nby5qcz9jNTEzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ28ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGFzeW5jIGdldExvZ29EYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSAnL2pzb24vbG9nby5qc29uJztcbiAgICAgIGNvbnN0IGxvZ29EYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIHRoaXMucmVzdWx0ID0gYXdhaXQgbG9nb0RhdGEuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/models/Logo.js\n");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elements\": () => /* binding */ elements\n/* harmony export */ });\nconst elements = {\n  root: document.querySelector('.root'),\n  width: window.innerWidth,\n  height: window.innerHeight\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvYmFzZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpY19odG1sLy4vc3JjL2pzL3ZpZXdzL2Jhc2UuanM/MjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZWxlbWVudHMgPSB7XG4gIHJvb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290JyksXG4gIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/views/base.js\n");

/***/ }),

/***/ "./src/js/views/firstScreenViews.js":
/*!******************************************!*\
  !*** ./src/js/views/firstScreenViews.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFirstLogo\": () => /* binding */ addFirstLogo,\n/* harmony export */   \"addAnimation\": () => /* binding */ addAnimation\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nconst addFirstLogo = () => {\n  const logo = `<div class=\"first-screen\"><div class=\"first-screen__circle\"><div class=\"first-screen__one first-screen__vertical\"></div><div class=\"first-screen__two first-screen__vertical\"></div><div class=\"first-screen__three first-screen__vertical\"></div></div></div>`;\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.root.insertAdjacentHTML('beforeend', logo);\n};\nconst addAnimation = () => {\n  const logoBorder = document.querySelector('.first-screen__circle');\n  setTimeout(() => {\n    logoBorder.classList.add('first-screen__circle-anim');\n  }, 1000);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvZmlyc3RTY3JlZW5WaWV3cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpY19odG1sLy4vc3JjL2pzL3ZpZXdzL2ZpcnN0U2NyZWVuVmlld3MuanM/N2QzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY29uc3QgYWRkRmlyc3RMb2dvID0gKCkgPT4ge1xuICBjb25zdCBsb2dvID0gYDxkaXYgY2xhc3M9XCJmaXJzdC1zY3JlZW5cIj48ZGl2IGNsYXNzPVwiZmlyc3Qtc2NyZWVuX19jaXJjbGVcIj48ZGl2IGNsYXNzPVwiZmlyc3Qtc2NyZWVuX19vbmUgZmlyc3Qtc2NyZWVuX192ZXJ0aWNhbFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmaXJzdC1zY3JlZW5fX3R3byBmaXJzdC1zY3JlZW5fX3ZlcnRpY2FsXCI+PC9kaXY+PGRpdiBjbGFzcz1cImZpcnN0LXNjcmVlbl9fdGhyZWUgZmlyc3Qtc2NyZWVuX192ZXJ0aWNhbFwiPjwvZGl2PjwvZGl2PjwvZGl2PmA7XG4gIGVsZW1lbnRzLnJvb3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsb2dvKTtcbn07XG5leHBvcnQgY29uc3QgYWRkQW5pbWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBsb2dvQm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0LXNjcmVlbl9fY2lyY2xlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxvZ29Cb3JkZXIuY2xhc3NMaXN0LmFkZCgnZmlyc3Qtc2NyZWVuX19jaXJjbGUtYW5pbScpO1xuICB9LCAxMDAwKTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/firstScreenViews.js\n");

/***/ }),

/***/ "./src/js/views/logoViews.js":
/*!***********************************!*\
  !*** ./src/js/views/logoViews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawLogo\": () => /* binding */ drawLogo\n/* harmony export */ });\nconst drawLogo = (arr, obj) => {\n  for (let i = 0; i < arr.length; i++) {\n    obj.y = i + obj.startY;\n\n    for (let l = 0; l < arr[i].length; l++) {\n      obj.x = l + obj.startX;\n\n      if (arr[i][l] == 'y') {\n        obj.canvasLogo.context.strokeStyle = obj.colors[Math.floor(Math.random() * obj.colors.length)];\n        obj.draw();\n      } else if (arr[i][l] == 'n') {\n        obj.canvasLogo.context.strokeStyle = 'transparent';\n        obj.draw();\n      }\n    }\n  }\n\n  obj.drawBorder();\n  obj.parent.appendChild(obj.canvasLogo);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvbG9nb1ZpZXdzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljX2h0bWwvLi9zcmMvanMvdmlld3MvbG9nb1ZpZXdzLmpzPzAxNzQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRyYXdMb2dvID0gKGFyciwgb2JqKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqLnkgPSBpICsgb2JqLnN0YXJ0WTtcbiAgICBmb3IgKGxldCBsID0gMDsgbCA8IGFycltpXS5sZW5ndGg7IGwrKykge1xuICAgICAgb2JqLnggPSBsICsgb2JqLnN0YXJ0WDtcbiAgICAgIGlmIChhcnJbaV1bbF0gPT0gJ3knKSB7XG4gICAgICAgIG9iai5jYW52YXNMb2dvLmNvbnRleHQuc3Ryb2tlU3R5bGUgPVxuICAgICAgICAgIG9iai5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb2JqLmNvbG9ycy5sZW5ndGgpXTtcblxuICAgICAgICBvYmouZHJhdygpO1xuICAgICAgfSBlbHNlIGlmIChhcnJbaV1bbF0gPT0gJ24nKSB7XG4gICAgICAgIG9iai5jYW52YXNMb2dvLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgICAgIG9iai5kcmF3KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9iai5kcmF3Qm9yZGVyKCk7XG4gIG9iai5wYXJlbnQuYXBwZW5kQ2hpbGQob2JqLmNhbnZhc0xvZ28pO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/logoViews.js\n");

/***/ }),

/***/ "./src/js/views/menuViews.js":
/*!***********************************!*\
  !*** ./src/js/views/menuViews.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => /* binding */ createMenu\n/* harmony export */ });\nconst createMenu = parent => {\n  const menuUl = document.createElement('ul');\n  const navBar = document.createElement('nav');\n  navBar.className = 'menu__container';\n  parent.appendChild(navBar);\n  const menuText = ['home', 'projects', 'contact'];\n  menuUl.className = 'menu__ul';\n  menuText.forEach((element, key) => {\n    function animateLi() {\n      const menuLi = document.createElement('li');\n      menuLi.classList = 'menu__li';\n      menuLi.textContent = element;\n      menuUl.appendChild(menuLi);\n    }\n\n    setTimeout(animateLi, 600 * 2 * key);\n    clearTimeout(animateLi);\n  });\n  navBar.appendChild(menuUl);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvbWVudVZpZXdzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljX2h0bWwvLi9zcmMvanMvdmlld3MvbWVudVZpZXdzLmpzP2RjMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IG1lbnVVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gIG5hdkJhci5jbGFzc05hbWUgPSAnbWVudV9fY29udGFpbmVyJztcbiAgcGFyZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gIGNvbnN0IG1lbnVUZXh0ID0gWydob21lJywgJ3Byb2plY3RzJywgJ2NvbnRhY3QnXTtcbiAgbWVudVVsLmNsYXNzTmFtZSA9ICdtZW51X191bCc7XG4gIG1lbnVUZXh0LmZvckVhY2goKGVsZW1lbnQsIGtleSkgPT4ge1xuICAgIGZ1bmN0aW9uIGFuaW1hdGVMaSgpIHtcbiAgICAgIGNvbnN0IG1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBtZW51TGkuY2xhc3NMaXN0ID0gJ21lbnVfX2xpJztcblxuICAgICAgbWVudUxpLnRleHRDb250ZW50ID0gZWxlbWVudDtcbiAgICAgIG1lbnVVbC5hcHBlbmRDaGlsZChtZW51TGkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KFxuICAgICAgYW5pbWF0ZUxpLFxuXG4gICAgICA2MDAgKiAyICoga2V5XG4gICAgKTtcblxuICAgIGNsZWFyVGltZW91dChhbmltYXRlTGkpO1xuICB9KTtcblxuICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudVVsKTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/views/menuViews.js\n");

/***/ }),

/***/ "./src/js/views/secondScreenViews.js":
/*!*******************************************!*\
  !*** ./src/js/views/secondScreenViews.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addSecondScreen\": () => /* binding */ addSecondScreen,\n/* harmony export */   \"createTitle\": () => /* binding */ createTitle\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nconst addSecondScreen = () => {\n  const secondScreen = document.createElement('div');\n  secondScreen.className = 'second-screen visually-hidden';\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.root.appendChild(secondScreen);\n};\nconst createTitle = parent => {\n  const title = document.createElement('h1');\n  title.className = 'second-screen__title';\n  parent.appendChild(title);\n  const titleText = 'Front end developer';\n  const titleTextArr = titleText.split('');\n\n  function showTitle() {\n    if (titleTextArr.length > 0) {\n      const spanLetter = document.createElement('span');\n      spanLetter.textContent = titleTextArr.shift();\n\n      if (spanLetter.textContent != ' ') {\n        spanLetter.classList.add('second-screen__letter');\n      } else {\n        spanLetter.classList.add('second-screen__space');\n      }\n\n      title.appendChild(spanLetter);\n      setTimeout(function () {\n        showTitle();\n      }, 150);\n    } else {\n      return;\n    }\n  }\n\n  showTitle();\n}; // export const moveTitle = (title) => {\n//   title.classList.add('title_move-right');\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3Mvc2Vjb25kU2NyZWVuVmlld3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9qcy92aWV3cy9zZWNvbmRTY3JlZW5WaWV3cy5qcz9iNzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjb25zdCBhZGRTZWNvbmRTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY29uZFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWNvbmRTY3JlZW4uY2xhc3NOYW1lID0gJ3NlY29uZC1zY3JlZW4gdmlzdWFsbHktaGlkZGVuJztcbiAgZWxlbWVudHMucm9vdC5hcHBlbmRDaGlsZChzZWNvbmRTY3JlZW4pO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUaXRsZSA9IChwYXJlbnQpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc05hbWUgPSAnc2Vjb25kLXNjcmVlbl9fdGl0bGUnO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCB0aXRsZVRleHQgPSAnRnJvbnQgZW5kIGRldmVsb3Blcic7XG4gIGNvbnN0IHRpdGxlVGV4dEFyciA9IHRpdGxlVGV4dC5zcGxpdCgnJyk7XG4gIGZ1bmN0aW9uIHNob3dUaXRsZSgpIHtcbiAgICBpZiAodGl0bGVUZXh0QXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNwYW5MZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgIHNwYW5MZXR0ZXIudGV4dENvbnRlbnQgPSB0aXRsZVRleHRBcnIuc2hpZnQoKTtcbiAgICAgIGlmIChzcGFuTGV0dGVyLnRleHRDb250ZW50ICE9ICcgJykge1xuICAgICAgICBzcGFuTGV0dGVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1zY3JlZW5fX2xldHRlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BhbkxldHRlci5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtc2NyZWVuX19zcGFjZScpO1xuICAgICAgfVxuICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoc3BhbkxldHRlcik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hvd1RpdGxlKCk7XG4gICAgICB9LCAxNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNob3dUaXRsZSgpO1xufTtcbi8vIGV4cG9ydCBjb25zdCBtb3ZlVGl0bGUgPSAodGl0bGUpID0+IHtcbi8vICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGVfbW92ZS1yaWdodCcpO1xuLy8gfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/secondScreenViews.js\n");

/***/ }),

/***/ "./src/js/views/utils.js":
/*!*******************************!*\
  !*** ./src/js/views/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addVisuallyHidden\": () => /* binding */ addVisuallyHidden,\n/* harmony export */   \"removeVisuallyHidden\": () => /* binding */ removeVisuallyHidden,\n/* harmony export */   \"delay\": () => /* binding */ delay,\n/* harmony export */   \"addVisuallyHiddenLater\": () => /* binding */ addVisuallyHiddenLater,\n/* harmony export */   \"removeVisuallyHiddenLater\": () => /* binding */ removeVisuallyHiddenLater,\n/* harmony export */   \"addClass\": () => /* binding */ addClass\n/* harmony export */ });\nconst addVisuallyHidden = oldClass => {\n  document.querySelector(oldClass).classList.add('visually-hidden');\n};\nconst removeVisuallyHidden = oldClass => {\n  document.querySelector(oldClass).classList.remove('visually-hidden');\n};\nconst delay = (fun, time) => {\n  setTimeout(fun, time);\n};\nconst addVisuallyHiddenLater = oldClass => {\n  setTimeout(function () {\n    document.querySelector(oldClass).classList.add('visually-hidden');\n  }, 3000);\n};\nconst removeVisuallyHiddenLater = oldClass => {\n  setTimeout(function () {\n    document.querySelector(oldClass).classList.remove('visually-hidden');\n  }, 3000);\n};\nconst addClass = (element, newClass) => {\n  element.classList.add(newClass);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9qcy92aWV3cy91dGlscy5qcz84ZWY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGRWaXN1YWxseUhpZGRlbiA9IChvbGRDbGFzcykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9sZENsYXNzKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlVmlzdWFsbHlIaWRkZW4gPSAob2xkQ2xhc3MpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvbGRDbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsYXkgPSAoZnVuLCB0aW1lKSA9PiB7XG4gIHNldFRpbWVvdXQoZnVuLCB0aW1lKTtcbn07XG5leHBvcnQgY29uc3QgYWRkVmlzdWFsbHlIaWRkZW5MYXRlciA9IChvbGRDbGFzcykgPT4ge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9sZENsYXNzKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgfSwgMzAwMCk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZVZpc3VhbGx5SGlkZGVuTGF0ZXIgPSAob2xkQ2xhc3MpID0+IHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvbGRDbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG4gIH0sIDMwMDApO1xufTtcbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBuZXdDbGFzcykgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/utils.js\n");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9zYXNzL21haW4uc2Nzcz83MWNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJtYXBwaW5ncyI6IjtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;