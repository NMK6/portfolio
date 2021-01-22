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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/views/firstScreenViews */ \"./src/js/views/firstScreenViews.js\");\n/* harmony import */ var _img_cooking_first_screen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cooking__first-screen.png */ \"./src/img/cooking__first-screen.png\");\n// import Search from './js/models/Logo';\n// import { elements } from './js/views/base';\n\n\n\n_js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_1__.addFirstLogo();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBTZWFyY2ggZnJvbSAnLi9qcy9tb2RlbHMvTG9nbyc7XG4vLyBpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJy4vanMvdmlld3MvYmFzZSc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zYXNzL21haW4uc2Nzcyc7XG5pbXBvcnQgKiBhcyBmaXJzdFNjcmVlblZpZXdzIGZyb20gJy4vanMvdmlld3MvZmlyc3RTY3JlZW5WaWV3cyc7XG5pbXBvcnQgY29va2luZyBmcm9tICcuL2ltZy9jb29raW5nX19maXJzdC1zY3JlZW4ucG5nJztcbmZpcnN0U2NyZWVuVmlld3MuYWRkRmlyc3RMb2dvKCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFirstLogo\": () => /* binding */ addFirstLogo\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nconst addFirstLogo = () => {\n  const logo = `<div class=\"first-screen\"><div class=\"first-screen__circle\"><div class=\"first-screen__one first-screen__vertical\"></div><div class=\"first-screen__two first-screen__vertical\"></div><div class=\"first-screen__three first-screen__vertical\"></div></div></div>`;\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.root.insertAdjacentHTML('beforeend', logo);\n  console.log('views');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvZmlyc3RTY3JlZW5WaWV3cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpY19odG1sLy4vc3JjL2pzL3ZpZXdzL2ZpcnN0U2NyZWVuVmlld3MuanM/N2QzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY29uc3QgYWRkRmlyc3RMb2dvID0gKCkgPT4ge1xuICBjb25zdCBsb2dvID0gYDxkaXYgY2xhc3M9XCJmaXJzdC1zY3JlZW5cIj48ZGl2IGNsYXNzPVwiZmlyc3Qtc2NyZWVuX19jaXJjbGVcIj48ZGl2IGNsYXNzPVwiZmlyc3Qtc2NyZWVuX19vbmUgZmlyc3Qtc2NyZWVuX192ZXJ0aWNhbFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmaXJzdC1zY3JlZW5fX3R3byBmaXJzdC1zY3JlZW5fX3ZlcnRpY2FsXCI+PC9kaXY+PGRpdiBjbGFzcz1cImZpcnN0LXNjcmVlbl9fdGhyZWUgZmlyc3Qtc2NyZWVuX192ZXJ0aWNhbFwiPjwvZGl2PjwvZGl2PjwvZGl2PmA7XG4gIGVsZW1lbnRzLnJvb3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsb2dvKTtcbiAgY29uc29sZS5sb2coJ3ZpZXdzJyk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/views/firstScreenViews.js\n");

/***/ }),

/***/ "./src/img/cooking__first-screen.png":
/*!*******************************************!*\
  !*** ./src/img/cooking__first-screen.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/cooking__first-screen.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2Nvb2tpbmdfX2ZpcnN0LXNjcmVlbi5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9pbWcvY29va2luZ19fZmlyc3Qtc2NyZWVuLnBuZz8xODE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jb29raW5nX19maXJzdC1zY3JlZW4ucG5nXCI7Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/cooking__first-screen.png\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;