/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
// free API key
const API_KEY = '1ea5dd769f80aec18e48a9cb93379a09'; 

// get current weather data 
// take in city name 
// return data 
async function getCurrentWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

// get forecast weather data 
// take in current weather obj
// return data 
async function getForecast(obj) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
  console.log(url);
  /*
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
  */
}



// get weather from city name input 
// take in city name 
// return data
async function getWeather(cityName) {
  const currentWeather = await getCurrentWeather(cityName);
  const forecast = await getForecast(currentWeather);

  return forecast;
}



/*
// get geolocation data by location name 
// take in city name
// return data 
async function getGeocoding(city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data[0];
  } catch(err) {
    console.log(err);
  }
}

// get current and forecast weather data 
// take in geocoding object
// return data 
async function getOneCall(obj) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

// extract required data from onecall data 
// take in oncecall object 
// return new object
function extractOneCall(obj) {
  return;
} 

// get weather from city name input 
// take in city name 
// return json 
async function getWeather(cityName) {
  const rawGeocoding = await getGeocoding(cityName);
  const geocoding = extractGeocoding(rawGeocoding);
  const rawWeather = await getOneCall(rawGeocoding);
  return rawWeather;
}

export { getWeather };
*/

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ "./src/weather-api.js");


(0,_weather_api__WEBPACK_IMPORTED_MODULE_0__.getWeather)('London').then(data => console.log(data));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSyxTQUFTLFFBQVE7QUFDekY7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxRQUFRLE9BQU8sUUFBUSx3Q0FBd0MsUUFBUTtBQUM1STtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLEtBQUssaUJBQWlCLFFBQVE7QUFDOUY7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxRQUFRLE9BQU8sUUFBUSx3Q0FBd0MsUUFBUTtBQUM1STtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOzs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0Msd0RBQVUsMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyZWUgQVBJIGtleVxuY29uc3QgQVBJX0tFWSA9ICcxZWE1ZGQ3NjlmODBhZWMxOGU0OGE5Y2I5MzM3OWEwOSc7IFxuXG4vLyBnZXQgY3VycmVudCB3ZWF0aGVyIGRhdGEgXG4vLyB0YWtlIGluIGNpdHkgbmFtZSBcbi8vIHJldHVybiBkYXRhIFxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7QVBJX0tFWX1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuLy8gZ2V0IGZvcmVjYXN0IHdlYXRoZXIgZGF0YSBcbi8vIHRha2UgaW4gY3VycmVudCB3ZWF0aGVyIG9ialxuLy8gcmV0dXJuIGRhdGEgXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChvYmopIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke29iai5sYXR9Jmxvbj0ke29iai5sb259JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgY29uc29sZS5sb2codXJsKTtcbiAgLypcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG4gICovXG59XG5cblxuXG4vLyBnZXQgd2VhdGhlciBmcm9tIGNpdHkgbmFtZSBpbnB1dCBcbi8vIHRha2UgaW4gY2l0eSBuYW1lIFxuLy8gcmV0dXJuIGRhdGFcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eU5hbWUpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcihjaXR5TmFtZSk7XG4gIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY3VycmVudFdlYXRoZXIpO1xuXG4gIHJldHVybiBmb3JlY2FzdDtcbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuXG4vKlxuLy8gZ2V0IGdlb2xvY2F0aW9uIGRhdGEgYnkgbG9jYXRpb24gbmFtZSBcbi8vIHRha2UgaW4gY2l0eSBuYW1lXG4vLyByZXR1cm4gZGF0YSBcbmFzeW5jIGZ1bmN0aW9uIGdldEdlb2NvZGluZyhjaXR5KSB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YVswXTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIGdldCBjdXJyZW50IGFuZCBmb3JlY2FzdCB3ZWF0aGVyIGRhdGEgXG4vLyB0YWtlIGluIGdlb2NvZGluZyBvYmplY3Rcbi8vIHJldHVybiBkYXRhIFxuYXN5bmMgZnVuY3Rpb24gZ2V0T25lQ2FsbChvYmopIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke29iai5sYXR9Jmxvbj0ke29iai5sb259JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIGV4dHJhY3QgcmVxdWlyZWQgZGF0YSBmcm9tIG9uZWNhbGwgZGF0YSBcbi8vIHRha2UgaW4gb25jZWNhbGwgb2JqZWN0IFxuLy8gcmV0dXJuIG5ldyBvYmplY3RcbmZ1bmN0aW9uIGV4dHJhY3RPbmVDYWxsKG9iaikge1xuICByZXR1cm47XG59IFxuXG4vLyBnZXQgd2VhdGhlciBmcm9tIGNpdHkgbmFtZSBpbnB1dCBcbi8vIHRha2UgaW4gY2l0eSBuYW1lIFxuLy8gcmV0dXJuIGpzb24gXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHlOYW1lKSB7XG4gIGNvbnN0IHJhd0dlb2NvZGluZyA9IGF3YWl0IGdldEdlb2NvZGluZyhjaXR5TmFtZSk7XG4gIGNvbnN0IGdlb2NvZGluZyA9IGV4dHJhY3RHZW9jb2RpbmcocmF3R2VvY29kaW5nKTtcbiAgY29uc3QgcmF3V2VhdGhlciA9IGF3YWl0IGdldE9uZUNhbGwocmF3R2VvY29kaW5nKTtcbiAgcmV0dXJuIHJhd1dlYXRoZXI7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyLWFwaSc7XG5cbmdldFdlYXRoZXIoJ0xvbmRvbicpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9