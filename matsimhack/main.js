(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: summaryOfMaterials, summaryOfServants, numMaterialsForSkillMax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"summaryOfMaterials\", function() { return summaryOfMaterials; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"summaryOfServants\", function() { return summaryOfServants; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numMaterialsForSkillMax\", function() { return numMaterialsForSkillMax; });\n/* harmony import */ var _matsim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matsim */ \"./src/matsim.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar summaryOfMaterials = function summaryOfMaterials(inventoryNum, myServantdb, Servantdb) {\n  var summaryWithName = [];\n  var summaryWithName2 = [];\n  var required = Object(_matsim__WEBPACK_IMPORTED_MODULE_0__[\"materialsFromMS\"])(inventoryNum, myServantdb, Servantdb);\n\n  for (var materialId in _matsim__WEBPACK_IMPORTED_MODULE_0__[\"materialNames\"]) {\n    summaryWithName.push({\n      name: _matsim__WEBPACK_IMPORTED_MODULE_0__[\"materialNames\"][materialId],\n      total: required[materialId].totalRequired,\n      summoned: required[materialId].summonedRequired,\n      used: required[materialId].used,\n      stock: required[materialId].stock,\n      reserved: required[materialId].reserved\n    });\n  }\n\n  for (var _materialId in _matsim__WEBPACK_IMPORTED_MODULE_0__[\"materialNames2\"]) {\n    summaryWithName2.push({\n      name: _matsim__WEBPACK_IMPORTED_MODULE_0__[\"materialNames2\"][_materialId],\n      total: required[_materialId].totalRequired,\n      summoned: required[_materialId].summonedRequired,\n      used: required[_materialId].used,\n      stock: required[_materialId].stock,\n      reserved: required[_materialId].reserved\n    });\n  }\n\n  var result = \"名称\\t必要数\\t必要数(召喚済み)\\t使用済み\\t使用予定\\t所持\\n\";\n\n  for (var _i = 0, _summaryWithName = summaryWithName; _i < _summaryWithName.length; _i++) {\n    var item = _summaryWithName[_i];\n    result += \"\".concat(item.name, \"\\t\").concat(item.total, \"\\t\").concat(item.summoned, \"\\t\").concat(item.used, \"\\t\").concat(item.reserved, \"\\t\").concat(item.stock, \"\\n\");\n  }\n\n  result += \"\\n\";\n\n  for (var _i2 = 0, _summaryWithName2 = summaryWithName2; _i2 < _summaryWithName2.length; _i2++) {\n    var _item = _summaryWithName2[_i2];\n    result += \"\".concat(_item.name, \"\\t\").concat(_item.total, \"\\t\").concat(_item.summoned, \"\\t\").concat(_item.used, \"\\t\").concat(_item.reserved, \"\\t\").concat(_item.stock, \"\\n\");\n  }\n\n  return result;\n};\nvar summaryOfServants = function summaryOfServants(myServantdb, Servantdb) {\n  var statistics = Object(_matsim__WEBPACK_IMPORTED_MODULE_0__[\"servantsStatistics\"])(myServantdb, Servantdb);\n  var result = \"\\u5B9F\\u88C5\\u6E08\\u307F: \".concat(statistics.total, \" \\u53EC\\u559A\\u6E08\\u307F: \").concat(statistics.summoned, \" \\u6700\\u7D42\\u518D\\u81E8: \").concat(statistics.maxAscension, \" \\u30B9\\u30AD\\u30EB\\u30DE: \").concat(statistics.skillMax.length, \"\\n\");\n  result += '\\nスキルマ\\n';\n\n  var _iterator = _createForOfIteratorHelper(statistics.skillMax),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      result += \"\".concat(item.name.replace('\\n', ' '), \"\\n\");\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return result;\n};\nvar numMaterialsForSkillMax = function numMaterialsForSkillMax(inventoryNum, myServantdb, Servantdb, useAllMaterials) {\n  var servants = Object(_matsim__WEBPACK_IMPORTED_MODULE_0__[\"materialsForSkillMax\"])(inventoryNum, myServantdb, Servantdb, useAllMaterials).sort(function (a, b) {\n    return a.materials - b.materials;\n  });\n  var result = \"\\u30B5\\u30FC\\u30F4\\u30A1\\u30F3\\u30C8\\t\\u2606\\t\\u6B8B\\u7D20\\u6750\\u6570\\n\";\n\n  var _iterator2 = _createForOfIteratorHelper(servants),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var servant = _step2.value;\n      result += \"\".concat(servant.name.replace('\\n', ' '), \"\\t\").concat(servant.rank, \"\\t\").concat(servant.materials, \"\\n\");\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/material.js":
/*!*************************!*\
  !*** ./src/material.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  totalRequired: 0,\n  summonedRequired: 0,\n  used: 0,\n  usedForAscension: 0,\n  usedForSkill: 0,\n  stock: 0,\n  reserved: 0,\n  reservedForAscension: 0,\n  reservedForSkill: 0,\n  free: 0,\n  freeForSkill: 0,\n  requiredForAscension: 0,\n  requiredForSkill: 0\n});\n\n//# sourceURL=webpack:///./src/material.js?");

/***/ }),

/***/ "./src/matsim.js":
/*!***********************!*\
  !*** ./src/matsim.js ***!
  \***********************/
/*! exports provided: materialsFromMS, servantsStatistics, materialsForSkillMax, materialNames, materialNames2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialsFromMS\", function() { return materialsFromMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"servantsStatistics\", function() { return servantsStatistics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialsForSkillMax\", function() { return materialsForSkillMax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialNames\", function() { return materialNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialNames2\", function() { return materialNames2; });\n/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ \"./src/material.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar materialsFromMS = function materialsFromMS(inventory, summonedServants, servantDB) {\n  var materials = servantDB.map(function (servant, index) {\n    return materialsForServant(servant, summonedServants[index]);\n  }).reduce(function (acc, current) {\n    for (var materialId in current) {\n      acc[materialId] = acc[materialId] || _objectSpread({}, _material__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n      for (var key in current[materialId]) {\n        acc[materialId][key] += current[materialId][key];\n      }\n    }\n\n    return acc;\n  }, {});\n\n  for (var materialId in inventory) {\n    materials[materialId].stock = inventory[materialId];\n    materials[materialId].free = materials[materialId].stock - materials[materialId].reserved;\n    materials[materialId].freeForSkill = materials[materialId].stock - materials[materialId].reservedForAscension;\n  }\n\n  return materials;\n};\nvar servantsStatistics = function servantsStatistics(myServantdb, Servantdb) {\n  var result = {\n    total: 0,\n    summoned: 0,\n    maxAscension: 0,\n    skillMax: []\n  };\n\n  for (var servantId = 0; servantId < myServantdb.length; servantId++) {\n    result.total++;\n\n    if (myServantdb[servantId][0]) {\n      result.summoned++;\n\n      if (myServantdb[servantId][3] >= 9 && myServantdb[servantId][5] >= 9 && myServantdb[servantId][7] >= 9) {\n        result.skillMax.push({\n          name: Servantdb[servantId].text,\n          skillLevel: [myServantdb[servantId][3], myServantdb[servantId][5], myServantdb[servantId][7]]\n        });\n      }\n\n      if (myServantdb[servantId][1] == 4) {\n        result.maxAscension++;\n      }\n    }\n  }\n\n  result.total--; // ignore Solomon\n\n  return result;\n};\nvar materialsForSkillMax = function materialsForSkillMax(inventoryNum, myServantdb, Servantdb, useAllMaterials) {\n  var materials = materialsFromMS(inventoryNum, myServantdb, Servantdb);\n  var servants = [];\n\n  for (var servantIdx = 0; servantIdx < Servantdb.length; servantIdx++) {\n    var servantMaterial = materialsForServant(Servantdb[servantIdx], myServantdb[servantIdx]);\n    delete servantMaterial[800];\n    var _materialsForSkillMax = 0;\n    var needCheck = false;\n\n    for (var materialId in servantMaterial) {\n      if (servantMaterial[materialId].summonedRequired > 0) {\n        var num = servantMaterial[materialId].requiredForSkill;\n\n        if (num > 0) {\n          needCheck = true;\n\n          if (useAllMaterials) {\n            _materialsForSkillMax += Math.max(0, num - materials[materialId].stock);\n          } else {\n            _materialsForSkillMax += Math.max(0, num - materials[materialId].freeForSkill);\n          }\n        }\n      }\n    }\n\n    if (needCheck) {\n      servants.push({\n        idx: servantIdx,\n        name: Servantdb[servantIdx].text,\n        rank: Servantdb[servantIdx].value + 1,\n        materials: _materialsForSkillMax\n      });\n    }\n  }\n\n  return servants;\n};\nvar materialNames = {\n  300: \"英雄の証\",\n  301: \"凶骨\",\n  302: \"竜の牙\",\n  303: \"虚陰の塵\",\n  304: \"愚者の鎖\",\n  305: \"万死の毒針\",\n  306: \"魔術髄液\",\n  307: \"宵哭きの鉄杭\",\n  308: \"励振火薬\",\n  400: \"世界樹の種\",\n  401: \"ゴーストランタン\",\n  402: \"八連双晶\",\n  403: \"蛇の宝玉\",\n  404: \"鳳凰の羽\",\n  405: \"無間の歯車\",\n  406: \"禁断の頁\",\n  407: \"ホムンクルスベピー\",\n  408: \"隕蹄鉄\",\n  409: \"大騎士勲章\",\n  410: \"追憶の貝殻\",\n  411: \"枯淡勾玉\",\n  412: \"永遠結氷\",\n  413: \"巨人の指輪\",\n  414: \"オーロラ鋼\",\n  415: \"閑古鈴\",\n  416: \"禍罪の矢尻\",\n  417: \"光銀の冠\",\n  418: \"神脈霊子\",\n  500: \"混沌の爪\",\n  501: \"蛮神の心臓\",\n  502: \"竜の逆鱗\",\n  503: \"精霊根\",\n  504: \"戦馬の幼角\",\n  505: \"血の涙石\",\n  506: \"黒獣脂\",\n  507: \"封魔のランプ\",\n  508: \"智慧のスカラベ\",\n  509: \"原初の産毛\",\n  510: \"呪獣胆石\",\n  511: \"奇奇神酒\",\n  512: \"暁光炉心\",\n  513: \"九十九鏡\",\n  514: \"真理の卵\",\n  515: \"煌星のカケラ\",\n  516: \"悠久の実\"\n};\nvar materialNames2 = {\n  200: \"剣の輝石\",\n  201: \"弓の輝石\",\n  202: \"槍の輝石\",\n  203: \"騎の輝石\",\n  204: \"術の輝石\",\n  205: \"殺の輝石\",\n  206: \"狂の輝石\",\n  210: \"剣の魔石\",\n  211: \"弓の魔石\",\n  212: \"槍の魔石\",\n  213: \"騎の魔石\",\n  214: \"術の魔石\",\n  215: \"殺の魔石\",\n  216: \"狂の魔石\",\n  220: \"剣の秘石\",\n  221: \"弓の秘石\",\n  222: \"槍の秘石\",\n  223: \"騎の秘石\",\n  224: \"術の秘石\",\n  225: \"殺の秘石\",\n  226: \"狂の秘石\",\n  100: \"セイバーピース\",\n  101: \"アーチャーピース\",\n  102: \"ランサーピース\",\n  103: \"ライダーピース\",\n  104: \"キャスターピース\",\n  105: \"アサシンピース\",\n  106: \"バーサーカーピース\",\n  110: \"セイバーモニュメント\",\n  111: \"アーチャーモニュメント\",\n  112: \"ランサーモニュメント\",\n  113: \"ライダーモニュメント\",\n  114: \"キャスターモニュメント\",\n  115: \"アサシンモニュメント\",\n  116: \"バーサーカーモニュメント\"\n};\n\nvar materialsForServant = function materialsForServant(servant, servantStatus) {\n  var ascensionMaterialKeys = [\"AdAgain1\", \"AdAgain2\", \"AdAgain3\", \"AdAgain4\"];\n  var skillMaterialKeys = [\"skill1\", \"skill2\", \"skill3\", \"skill4\", \"skill5\", \"skill6\", \"skill7\", \"skill8\", \"skill9\"];\n  var isSummoned = servantStatus[0];\n  var currentAscensionLevel = servantStatus[1];\n  var resesrvedAscensionLevel = servantStatus[2];\n  var currentSkillLevel = [servantStatus[3], servantStatus[5], servantStatus[7]];\n  var reservedSkillLevel = [servantStatus[4], servantStatus[6], servantStatus[8]];\n  var servantMaterials = {};\n\n  for (var ascensionLevel = 0; ascensionLevel < ascensionMaterialKeys.length; ascensionLevel++) {\n    var materials = servant[ascensionMaterialKeys[ascensionLevel]];\n\n    for (var materialId in materials) {\n      servantMaterials[materialId] = servantMaterials[materialId] || _objectSpread({}, _material__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      var material = servantMaterials[materialId];\n      var num = materials[materialId];\n      material.totalRequired += num;\n\n      if (isSummoned) {\n        material.summonedRequired += num;\n\n        if (currentAscensionLevel > ascensionLevel) {\n          material.used += num;\n          material.usedForAscension += num;\n        } else {\n          material.requiredForAscension += num;\n\n          if (resesrvedAscensionLevel > ascensionLevel) {\n            material.reserved += num;\n            material.reservedForAscension += num;\n          }\n        }\n      }\n    }\n  }\n\n  for (var skillNo = 0; skillNo < 3; skillNo++) {\n    for (var skillLevel = 0; skillLevel < skillMaterialKeys.length; skillLevel++) {\n      var _materials = servant[skillMaterialKeys[skillLevel]];\n\n      for (var _materialId in _materials) {\n        servantMaterials[_materialId] = servantMaterials[_materialId] || _objectSpread({}, _material__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        var _material = servantMaterials[_materialId];\n        var _num = _materials[_materialId];\n        _material.totalRequired += _num;\n\n        if (isSummoned) {\n          _material.summonedRequired += _num;\n\n          if (currentSkillLevel[skillNo] - 1 > skillLevel) {\n            _material.used += _num;\n            _material.usedForSkill += _num;\n          } else {\n            _material.requiredForSkill += _num;\n\n            if (reservedSkillLevel[skillNo] - 1 > skillLevel) {\n              _material.reserved += _num;\n              _material.reservedForSkill += _num;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  return servantMaterials;\n};\n\n//# sourceURL=webpack:///./src/matsim.js?");

/***/ })

/******/ });
});