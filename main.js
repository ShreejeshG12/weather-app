/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js"
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n\nasync function getData(city) {\n    if (!city) {\n        console.error(\"Please enter a valid city name\")\n        return;\n    }\n    //change url to take value from city variable\n    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&key=E7H7GP2QWNQUZCD3QHKF4X7MD&contentType=json`\n\n    try {\n        const response = await fetch(url);\n\n        if (!response.ok) {\n            throw new Error(`Check your city name`)\n        }\n\n\n        const result = await response.json()\n\n        const weatherData = {\n            city: result.address,\n            date: result.days[0].datetime,\n            max: result.days[0].tempmax,\n            min: result.days[0].tempmin,\n            precipetationType: result.days[0].preciptype[0].toUpperCase()\n        }\n\n        console.log(weatherData)\n        return weatherData;\n\n    } catch (error) {\n        console.error(error.message);\n    }\n\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?\n}");

/***/ },

/***/ "./src/card.js"
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeWeatherCard: () => (/* binding */ makeWeatherCard)\n/* harmony export */ });\nconst card = document.querySelector(\".card\")\n\n\n\nfunction makeWeatherCard(weatherData) {\n\n    card.textContent = \"\";\n    const cityName = document.createElement(\"h2\")\n    cityName.classList.add(\"city\")\n    cityName.textContent = `City: ${weatherData.city}`;\n\n\n    const date = document.createElement(\"div\")\n    date.classList.add(\"date\")\n    date.textContent = `Date: ${weatherData.date}`;\n\n\n    const maxTemp = document.createElement(\"div\")\n    maxTemp.classList.add(\"max\")\n    maxTemp.textContent = `Maximum Temperature: ${Number(weatherData.max)}`;\n\n\n    const minTemp = document.createElement(\"div\")\n    minTemp.classList.add(\"min\")\n    minTemp.textContent = `Minimum Temperature: ${Number(weatherData.min)}`;\n\n\n    const percipitation = document.createElement(\"div\")\n    percipitation.classList.add(\"percip\")\n    percipitation.textContent = `Percepitation: ${weatherData.precipetationType}`;\n\n    const celsiusBtn = document.createElement(\"button\")\n    celsiusBtn.type = \"button\";\n    celsiusBtn.textContent = \"°C\"\n    celsiusBtn.classList.add(\"C\")\n\n    const farenheitBtn = document.createElement(\"button\")\n    farenheitBtn.type = \"button\";\n    farenheitBtn.textContent = \"°F\"\n    farenheitBtn.classList.add(\"F\")\n\n\n    card.append(cityName, date, maxTemp, minTemp, percipitation, celsiusBtn, farenheitBtn)\n\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/card.js?\n}");

/***/ },

/***/ "./src/events.js"
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\n/* harmony import */ var _tempratureConvert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tempratureConvert.js */ \"./src/tempratureConvert.js\");\n\n\n\n\nconst form = document.querySelector(\"form\")\nconst inputCity = document.querySelector(\".search-bar\");\nconst card = document.querySelector(\".card\")\n\nlet weatherData;\nlet currentTempUnit = \"C\"\n\nform.addEventListener(\"submit\", async (event) => {\n\n    event.preventDefault()\n    if (inputCity.validity.valueMissing) {\n        inputCity.setCustomValidity(\"Enter a city name\")\n    } else {\n        inputCity.setCustomValidity(\"\")\n    }\n\n\n    if (!inputCity.checkValidity()) {\n        return\n    }\n\n    const city = inputCity.value.trim()\n\n    weatherData = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getData)(city);\n    currentTempUnit = \"C\";\n\n    (0,_card_js__WEBPACK_IMPORTED_MODULE_1__.makeWeatherCard)(weatherData)\n})\n\n\n\ncard.addEventListener(\"click\", (event) => {\n    if (!weatherData) return;\n\n    if (event.target.classList.contains(\"C\")) {\n        if (currentTempUnit === \"F\") {\n            weatherData.max = (0,_tempratureConvert_js__WEBPACK_IMPORTED_MODULE_2__.farenheitToCelsius)(weatherData.max)\n            weatherData.min = (0,_tempratureConvert_js__WEBPACK_IMPORTED_MODULE_2__.farenheitToCelsius)(weatherData.min)\n\n            currentTempUnit = \"C\"\n            ;(0,_card_js__WEBPACK_IMPORTED_MODULE_1__.makeWeatherCard)(weatherData)\n        }\n    }\n\n    else if (event.target.classList.contains(\"F\")) {\n        if (currentTempUnit === \"C\") {\n            weatherData.max = (0,_tempratureConvert_js__WEBPACK_IMPORTED_MODULE_2__.celsiusToFarenheit)(weatherData.max)\n            weatherData.min = (0,_tempratureConvert_js__WEBPACK_IMPORTED_MODULE_2__.celsiusToFarenheit)(weatherData.min)\n\n            currentTempUnit = \"F\"\n\n            ;(0,_card_js__WEBPACK_IMPORTED_MODULE_1__.makeWeatherCard)(weatherData)\n        }\n    }\n})\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/events.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?\n}");

/***/ },

/***/ "./src/tempratureConvert.js"
/*!**********************************!*\
  !*** ./src/tempratureConvert.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFarenheit: () => (/* binding */ celsiusToFarenheit),\n/* harmony export */   farenheitToCelsius: () => (/* binding */ farenheitToCelsius)\n/* harmony export */ });\nfunction celsiusToFarenheit(celsius) {\n    return ((celsius * 9 / 5) + 32).toFixed(3)\n}\n\nfunction farenheitToCelsius(farenheit) {\n    return ((farenheit - 32) * 5 / 9).toFixed(3)\n}\n\n//# sourceURL=webpack://weather-app/./src/tempratureConvert.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;