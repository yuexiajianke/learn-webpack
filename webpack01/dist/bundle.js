/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/fengbaihua/Desktop/webpack01/src/index.tsx: Unexpected reserved word 'interface' (4:0)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReactDOM\\u001b[39m from \\u001b[32m'react-dom'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39minterface \\u001b[33mIProps\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m    num\\u001b[33m:\\u001b[39m number\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:6975:17)\\n    at Object.checkReservedWord (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:10373:14)\\n    at Object.parseIdentifierName (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:10333:12)\\n    at Object.parseIdentifier (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:10305:23)\\n    at Object.parseExprAtom (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:9487:27)\\n    at Object.parseExprAtom (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:4097:20)\\n    at Object.parseExprSubscripts (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:9210:23)\\n    at Object.parseMaybeUnary (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:9190:21)\\n    at Object.parseExprOps (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Object.parseMaybeConditional (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:9029:23)\\n    at Object.parseMaybeAssign (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:8975:21)\\n    at Object.parseExpression (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:8925:23)\\n    at Object.parseStatementContent (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:10785:23)\\n    at Object.parseStatement (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:10656:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:11232:25)\\n    at Object.parseBlockBody (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:11219:10)\\n    at Object.parseTopLevel (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:10587:10)\\n    at Object.parse (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:12097:10)\\n    at parse (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/parser/lib/index.js:12148:38)\\n    at parser (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\\n    at normalizeFile (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\\n    at runSync (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/fengbaihua/Desktop/webpack01/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

/******/ });