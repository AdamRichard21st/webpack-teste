/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Validator"] = factory();
	else
		root["Validator"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator/validator */ \"./src/validator/validator.js\");\n// src/index.js\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_validator_validator__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://Validator/./src/index.js?");

/***/ }),

/***/ "./src/validator/classes/field.js":
/*!****************************************!*\
  !*** ./src/validator/classes/field.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Field)\n/* harmony export */ });\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules */ \"./src/validator/rules.js\");\n// /src/validator/classes/field.js\n\n\n\n\nclass Field\n{\n    constructor(nodes, name, rules)\n    {\n        this.nodes = nodes;\n        this.key = name;\n\n\n        // interpreta cada regra individualmente\n        this.rules = rules.split('|').map(argument => {\n\n            // regex separador dos parâmetros\n            const pattern = /([a-zA-Z_]+)(?:\\:([a-zA-Z0-9,]+)?)/;\n\n\n            // lê o nome da regra e os parâmetros se disponíveis\n            let params = argument.split(pattern).filter(value => {\n\n                return value.length;\n            });\n\n\n            // verifica se essa regra existe\n            if ( _rules__WEBPACK_IMPORTED_MODULE_0__.RulesMap[params[0]] === undefined )\n            {\n                console.error(`Rule '${params[0]}' is not defined`);\n\n                return null;\n            }\n\n\n            // adiciona uma nova regra ao array de regras\n            return new _rules__WEBPACK_IMPORTED_MODULE_0__.RulesMap[params[0]](params.slice(1, 0));\n\n        }).filter(rule => {\n\n            return rule != null;\n        });\n    }\n}\n\n//# sourceURL=webpack://Validator/./src/validator/classes/field.js?");

/***/ }),

/***/ "./src/validator/classes/rules/min.js":
/*!********************************************!*\
  !*** ./src/validator/classes/rules/min.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RuleMininum)\n/* harmony export */ });\n/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule */ \"./src/validator/classes/rules/rule.js\");\n// /src/classes/rules/min.js\n\n\n\n\n// Validação de campos numéricos.\nclass RuleMininum extends _rule__WEBPACK_IMPORTED_MODULE_0__.default\n{\n    constructor()\n    {\n        super();\n\n        this.key = 'min';\n    }\n\n\n    onChange(value)\n    {\n        return value;\n    }\n}\n\n//# sourceURL=webpack://Validator/./src/validator/classes/rules/min.js?");

/***/ }),

/***/ "./src/validator/classes/rules/required.js":
/*!*************************************************!*\
  !*** ./src/validator/classes/rules/required.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RuleRequired)\n/* harmony export */ });\n/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule */ \"./src/validator/classes/rules/rule.js\");\n// /src/classes/rules/required.js\n\n\n\n\n// Validação de campos numéricos.\nclass RuleRequired extends _rule__WEBPACK_IMPORTED_MODULE_0__.default\n{\n    constructor()\n    {\n        super();\n\n        this.key = 'required';\n    }\n\n\n    onSubmit(value)\n    {\n        return value && value.length > 0;\n    }\n}\n\n//# sourceURL=webpack://Validator/./src/validator/classes/rules/required.js?");

/***/ }),

/***/ "./src/validator/classes/rules/rule.js":
/*!*********************************************!*\
  !*** ./src/validator/classes/rules/rule.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rule)\n/* harmony export */ });\n// /src/classes/rules/rule.js\n\n\n/**\n * Classe template das para criação\n * de novas regras de validação.\n */\nclass Rule\n{\n    constructor()\n    {\n        this.key = 'rule';\n    }\n\n\n    /**\n     * Funçao acionada quando o valor do campo\n     * é atualizado.\n     * \n     * @param {string} value Valor do campo sendo validado.\n     * \n     * @return {string} Valor com validação aplicada.\n     */\n    onChange(value)\n    {\n        return value;\n    }\n\n\n    /**\n     * Funçao acionada quando o formulário está\n     * prestes a ser enviado e seus campos\n     * precisam ser validados. \n     * \n     * @param {string} value    Campo sendo validado.\n     * \n     * @return {bool}   Retorna `true` se o campo foi validado.\n     *                 `false` caso contrário.\n     */\n    onSubmit(value)\n    {\n        return true;\n    }\n}\n\n//# sourceURL=webpack://Validator/./src/validator/classes/rules/rule.js?");

/***/ }),

/***/ "./src/validator/rules.js":
/*!********************************!*\
  !*** ./src/validator/rules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RuleMininum\": () => (/* reexport safe */ _classes_rules_min__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"RuleRequired\": () => (/* reexport safe */ _classes_rules_required__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"RulesMap\": () => (/* binding */ RulesMap)\n/* harmony export */ });\n/* harmony import */ var _classes_rules_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/rules/min */ \"./src/validator/classes/rules/min.js\");\n/* harmony import */ var _classes_rules_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/rules/required */ \"./src/validator/classes/rules/required.js\");\n// /src/validator/rules.js\n\n\n// lista de regras registradas\n\n\n\n\nconst RulesMap = {\n    'min': _classes_rules_min__WEBPACK_IMPORTED_MODULE_0__.default,\n    'required': _classes_rules_required__WEBPACK_IMPORTED_MODULE_1__.default,\n};\n\n\n\n\n//# sourceURL=webpack://Validator/./src/validator/rules.js?");

/***/ }),

/***/ "./src/validator/validator.js":
/*!************************************!*\
  !*** ./src/validator/validator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Validator)\n/* harmony export */ });\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules */ \"./src/validator/rules.js\");\n/* harmony import */ var _classes_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/field */ \"./src/validator/classes/field.js\");\n// /src/validator/validator.js\n\n\n\n\n\n\n\nclass Validator\n{\n    constructor(selector, params)\n    {\n        // lista de nodes encontrados a partir do seletor\n        this.nodes = document.querySelectorAll(selector);\n\n\n        // percorre por todos nodes de formulários encontrados\n        this.nodes.forEach(form => {\n\n            // percorre por cada propriedade\n            for (let [key, value] of Object.entries(params))\n            {\n                // seletor que será utilizado para consultar\n                // todos elementos condizentes com a chave\n                // percorrida atualmente\n                let selector = key == '*' ? '*[name]' : `*[name=\"${key}\"]`;\n\n\n                // percorre por cada input encontrada de acordo\n                // com a chave atualmente percorrida\n                let inputs = form.querySelectorAll(selector);\n\n\n                // valida se alguma input foi encontrada\n                if ( inputs.length )\n                {\n                    // instancia um novo Field a partir da\n                    // NodeList encontrada\n                    this[key] = new _classes_field__WEBPACK_IMPORTED_MODULE_1__.default(inputs, key, value);\n                }\n            }\n\n        }, this);\n    }\n}\n\n\n//# sourceURL=webpack://Validator/./src/validator/validator.js?");

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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
.default;
});