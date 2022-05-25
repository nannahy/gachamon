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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"getRandomPokemonId\": function() { return /* binding */ getRandomPokemonId; }\n/* harmony export */ });\nconst baseURL = \"https://pokeapi.co/api/v2/\";\n\nconst getPokemon = async (pokemon) => {\n  const res = await fetch(`${baseURL}/pokemon/${pokemon}`);\n  const resJson = await res.json();\n  return resJson;\n};\n\nconst getRandomPokemonId = () => Math.floor(Math.random() * 100);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29udHJvbGxlci9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFTztBQUNQLDZCQUE2QixRQUFRLFdBQVcsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7O0FBRU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NvbnRyb2xsZXIvYXBpLmpzPzIzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9cIjtcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb24gPSBhc3luYyAocG9rZW1vbikgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9wb2tlbW9uLyR7cG9rZW1vbn1gKTtcbiAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiByZXNKc29uO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbVBva2Vtb25JZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../controller/api.js\n");

/***/ })

});