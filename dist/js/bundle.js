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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/views/firstScreenViews */ \"./src/js/views/firstScreenViews.js\");\n/* harmony import */ var _js_views_secondScreenViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/views/secondScreenViews */ \"./src/js/views/secondScreenViews.js\");\n/* harmony import */ var _js_views_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/views/utils */ \"./src/js/views/utils.js\");\n/* harmony import */ var _js_models_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/models/Logo */ \"./src/js/models/Logo.js\");\n// import { elements } from './js/views/base';\n\n\n\n\n\nconst state = {};\n_js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_1__.addFirstLogo();\nwindow.addEventListener('DOMContentLoaded', e => {\n  e.preventDefault();\n  _js_views_firstScreenViews__WEBPACK_IMPORTED_MODULE_1__.addAnimation();\n  _js_views_secondScreenViews__WEBPACK_IMPORTED_MODULE_2__.addSecondScreen();\n  _js_views_utils__WEBPACK_IMPORTED_MODULE_3__.addVisuallyHidden('.first-screen');\n  _js_views_utils__WEBPACK_IMPORTED_MODULE_3__.removeVisuallyHidden('.second-screen');\n});\n\nconst addLogo = async () => {\n  state.logo = new _js_models_Logo__WEBPACK_IMPORTED_MODULE_4__.default();\n  await state.logo.getLogoData();\n};\n\naddLogo();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi9qcy92aWV3cy9iYXNlJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3Nhc3MvbWFpbi5zY3NzJztcbmltcG9ydCAqIGFzIGZpcnN0U2NyZWVuVmlld3MgZnJvbSAnLi9qcy92aWV3cy9maXJzdFNjcmVlblZpZXdzJztcbmltcG9ydCAqIGFzIHNlY29uZFNjcmVlblZpZXdzIGZyb20gJy4vanMvdmlld3Mvc2Vjb25kU2NyZWVuVmlld3MnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9qcy92aWV3cy91dGlscyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2pzL21vZGVscy9Mb2dvJztcbmNvbnN0IHN0YXRlID0ge307XG5maXJzdFNjcmVlblZpZXdzLmFkZEZpcnN0TG9nbygpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGZpcnN0U2NyZWVuVmlld3MuYWRkQW5pbWF0aW9uKCk7XG4gIHNlY29uZFNjcmVlblZpZXdzLmFkZFNlY29uZFNjcmVlbigpO1xuICB1dGlscy5hZGRWaXN1YWxseUhpZGRlbignLmZpcnN0LXNjcmVlbicpO1xuXG4gIHV0aWxzLnJlbW92ZVZpc3VhbGx5SGlkZGVuKCcuc2Vjb25kLXNjcmVlbicpO1xufSk7XG5jb25zdCBhZGRMb2dvID0gYXN5bmMgKCkgPT4ge1xuICBzdGF0ZS5sb2dvID0gbmV3IExvZ28oKTtcbiAgYXdhaXQgc3RhdGUubG9nby5nZXRMb2dvRGF0YSgpO1xufTtcbmFkZExvZ28oKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/models/Logo.js":
/*!*******************************!*\
  !*** ./src/js/models/Logo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Logo\n/* harmony export */ });\nclass Logo {\n  constructor() {// this.logoFile = logoFile;\n  }\n\n  async getLogoData() {\n    try {\n      const url = '/json/logo.json';\n      const logoData = await fetch(url);\n      this.result = await logoData.json();\n      console.log(this.result);\n    } catch (error) {}\n  }\n\n} // createCanvasOneLine(\n//   data.logo,\n//   150,\n//   100,\n//   \"canvas__logo\",\n//   main,\n//   70,\n//   70,\n//   1.1,\n//   1.1,\n//   18,\n//   24,\n//   0.3\n// );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9kZWxzL0xvZ28uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9qcy9tb2RlbHMvTG9nby5qcz9jNTEzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ28ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzLmxvZ29GaWxlID0gbG9nb0ZpbGU7XG4gIH1cbiAgYXN5bmMgZ2V0TG9nb0RhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9ICcvanNvbi9sb2dvLmpzb24nO1xuICAgICAgY29uc3QgbG9nb0RhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgdGhpcy5yZXN1bHQgPSBhd2FpdCBsb2dvRGF0YS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cbn1cblxuLy8gY3JlYXRlQ2FudmFzT25lTGluZShcbi8vICAgZGF0YS5sb2dvLFxuLy8gICAxNTAsXG4vLyAgIDEwMCxcbi8vICAgXCJjYW52YXNfX2xvZ29cIixcbi8vICAgbWFpbixcbi8vICAgNzAsXG4vLyAgIDcwLFxuLy8gICAxLjEsXG4vLyAgIDEuMSxcbi8vICAgMTgsXG4vLyAgIDI0LFxuLy8gICAwLjNcbi8vICk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/models/Logo.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFirstLogo\": () => /* binding */ addFirstLogo,\n/* harmony export */   \"addAnimation\": () => /* binding */ addAnimation,\n/* harmony export */   \"removeFirstScreen\": () => /* binding */ removeFirstScreen\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nconst addFirstLogo = () => {\n  const logo = `<div class=\"first-screen\"><div class=\"first-screen__circle\"><div class=\"first-screen__one first-screen__vertical\"></div><div class=\"first-screen__two first-screen__vertical\"></div><div class=\"first-screen__three first-screen__vertical\"></div></div></div>`;\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.root.insertAdjacentHTML('beforeend', logo);\n};\nconst addAnimation = () => {\n  const logoBorder = document.querySelector('.first-screen__circle');\n  setTimeout(() => {\n    logoBorder.classList.add('first-screen__circle-anim');\n  }, 1000);\n};\nconst removeFirstScreen = () => {\n  const firstScreen = document.querySelector('.first-screen');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvZmlyc3RTY3JlZW5WaWV3cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpY19odG1sLy4vc3JjL2pzL3ZpZXdzL2ZpcnN0U2NyZWVuVmlld3MuanM/N2QzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY29uc3QgYWRkRmlyc3RMb2dvID0gKCkgPT4ge1xuICBjb25zdCBsb2dvID0gYDxkaXYgY2xhc3M9XCJmaXJzdC1zY3JlZW5cIj48ZGl2IGNsYXNzPVwiZmlyc3Qtc2NyZWVuX19jaXJjbGVcIj48ZGl2IGNsYXNzPVwiZmlyc3Qtc2NyZWVuX19vbmUgZmlyc3Qtc2NyZWVuX192ZXJ0aWNhbFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmaXJzdC1zY3JlZW5fX3R3byBmaXJzdC1zY3JlZW5fX3ZlcnRpY2FsXCI+PC9kaXY+PGRpdiBjbGFzcz1cImZpcnN0LXNjcmVlbl9fdGhyZWUgZmlyc3Qtc2NyZWVuX192ZXJ0aWNhbFwiPjwvZGl2PjwvZGl2PjwvZGl2PmA7XG4gIGVsZW1lbnRzLnJvb3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsb2dvKTtcbn07XG5leHBvcnQgY29uc3QgYWRkQW5pbWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBsb2dvQm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0LXNjcmVlbl9fY2lyY2xlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxvZ29Cb3JkZXIuY2xhc3NMaXN0LmFkZCgnZmlyc3Qtc2NyZWVuX19jaXJjbGUtYW5pbScpO1xuICB9LCAxMDAwKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlRmlyc3RTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGZpcnN0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0LXNjcmVlbicpO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/firstScreenViews.js\n");

/***/ }),

/***/ "./src/js/views/secondScreenViews.js":
/*!*******************************************!*\
  !*** ./src/js/views/secondScreenViews.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addSecondScreen\": () => /* binding */ addSecondScreen\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nconst addSecondScreen = () => {\n  const secondScreen = document.createElement('div');\n  secondScreen.className = 'second-screen visually-hidden';\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.root.appendChild(secondScreen);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3Mvc2Vjb25kU2NyZWVuVmlld3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9qcy92aWV3cy9zZWNvbmRTY3JlZW5WaWV3cy5qcz9iNzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjb25zdCBhZGRTZWNvbmRTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY29uZFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWNvbmRTY3JlZW4uY2xhc3NOYW1lID0gJ3NlY29uZC1zY3JlZW4gdmlzdWFsbHktaGlkZGVuJztcbiAgZWxlbWVudHMucm9vdC5hcHBlbmRDaGlsZChzZWNvbmRTY3JlZW4pO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/secondScreenViews.js\n");

/***/ }),

/***/ "./src/js/views/utils.js":
/*!*******************************!*\
  !*** ./src/js/views/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addVisuallyHidden\": () => /* binding */ addVisuallyHidden,\n/* harmony export */   \"removeVisuallyHidden\": () => /* binding */ removeVisuallyHidden\n/* harmony export */ });\nconst addVisuallyHidden = oldClass => {\n  document.querySelector(oldClass).classList.add('visually-hidden');\n};\nconst removeVisuallyHidden = oldClass => {\n  document.querySelector(oldClass).classList.remove('visually-hidden');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWNfaHRtbC8uL3NyYy9qcy92aWV3cy91dGlscy5qcz84ZWY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGRWaXN1YWxseUhpZGRlbiA9IChvbGRDbGFzcykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9sZENsYXNzKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlVmlzdWFsbHlIaWRkZW4gPSAob2xkQ2xhc3MpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvbGRDbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/views/utils.js\n");

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