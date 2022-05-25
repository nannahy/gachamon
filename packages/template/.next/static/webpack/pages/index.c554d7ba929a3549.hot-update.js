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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"getPokemonData\": function() { return /* binding */ getPokemonData; },\n/* harmony export */   \"getPokemonDataDetail\": function() { return /* binding */ getPokemonDataDetail; },\n/* harmony export */   \"getRandomPokemonId\": function() { return /* binding */ getRandomPokemonId; }\n/* harmony export */ });\nconst baseURL = \"https://pokeapi.co/api/v2/\";\n\nconst getPokemon = async (pokemon) => {\n  const res = await (await fetch(`${baseURL}/pokemon/${pokemon}`)).json();\n  return res;\n};\n\nconst getPokemonData = (pokeData) => {\n  const { name, height, weight, sprites } = pokeData;\n  return { name, height, weight, sprites };\n};\n\nconst getPokemonDataDetail = (pokeData) => {\n  const { name, height, weight, sprites, stats } = pokeData;\n  const parsedStat = stats.map((stat) => [stat.stat.name, stat.base_stat]);\n  return { name, height, weight, sprites, stats: parsedStat };\n};\n\nconst getRandomPokemonId = () => Math.floor(Math.random() * 100);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29udHJvbGxlci9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPO0FBQ1Asb0NBQW9DLFFBQVEsV0FBVyxRQUFRO0FBQy9EO0FBQ0E7O0FBRU87QUFDUCxVQUFVLGdDQUFnQztBQUMxQyxXQUFXO0FBQ1g7O0FBRU87QUFDUCxVQUFVLHVDQUF1QztBQUNqRDtBQUNBLFdBQVc7QUFDWDs7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vY29udHJvbGxlci9hcGkuanM/MjMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVVJMID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbiA9IGFzeW5jIChwb2tlbW9uKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9wb2tlbW9uLyR7cG9rZW1vbn1gKSkuanNvbigpO1xuICByZXR1cm4gcmVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb25EYXRhID0gKHBva2VEYXRhKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaGVpZ2h0LCB3ZWlnaHQsIHNwcml0ZXMgfSA9IHBva2VEYXRhO1xuICByZXR1cm4geyBuYW1lLCBoZWlnaHQsIHdlaWdodCwgc3ByaXRlcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb25EYXRhRGV0YWlsID0gKHBva2VEYXRhKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaGVpZ2h0LCB3ZWlnaHQsIHNwcml0ZXMsIHN0YXRzIH0gPSBwb2tlRGF0YTtcbiAgY29uc3QgcGFyc2VkU3RhdCA9IHN0YXRzLm1hcCgoc3RhdCkgPT4gW3N0YXQuc3RhdC5uYW1lLCBzdGF0LmJhc2Vfc3RhdF0pO1xuICByZXR1cm4geyBuYW1lLCBoZWlnaHQsIHdlaWdodCwgc3ByaXRlcywgc3RhdHM6IHBhcnNlZFN0YXQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Qb2tlbW9uSWQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../controller/api.js\n");

/***/ })

});