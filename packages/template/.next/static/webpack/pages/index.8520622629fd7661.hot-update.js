"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../controller/api.js":
/*!****************************!*\
  !*** ../controller/api.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"getRandomPokemonId\": function() { return /* binding */ getRandomPokemonId; }\n/* harmony export */ });\nconst baseURL = \"https://pokeapi.co/api/v2/\";\n\nconst getPokemon = async (pokemon) => {\n  const res = await (await fetch(`${baseURL}/pokemon/${pokemon}`)).json();\n  const {\n    name,\n    height,\n    weight,\n    sprites: { front_default: picURL },\n  } = res;\n  return { name, height, weight, picURL };\n};\n\nconst getRandomPokemonId = () => Math.floor(Math.random() * 100);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29udHJvbGxlci9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFTztBQUNQLG9DQUFvQyxRQUFRLFdBQVcsUUFBUTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDLElBQUk7QUFDSixXQUFXO0FBQ1g7O0FBRU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NvbnRyb2xsZXIvYXBpLmpzPzIzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9cIjtcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb24gPSBhc3luYyAocG9rZW1vbikgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0vcG9rZW1vbi8ke3Bva2Vtb259YCkpLmpzb24oKTtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgaGVpZ2h0LFxuICAgIHdlaWdodCxcbiAgICBzcHJpdGVzOiB7IGZyb250X2RlZmF1bHQ6IHBpY1VSTCB9LFxuICB9ID0gcmVzO1xuICByZXR1cm4geyBuYW1lLCBoZWlnaHQsIHdlaWdodCwgcGljVVJMIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tUG9rZW1vbklkID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../controller/api.js\n");

/***/ })

});