"use strict";
exports.__esModule = true;
var BinarySearch_1 = require("../Searching/BinarySearch");
var DataSet_1 = require("../utility/DataSet");
var orderedNumberSet = DataSet_1.createOrderedNumberArray();
console.log(BinarySearch_1.binarySearch(orderedNumberSet, 9003, undefined, orderedNumberSet.length - 1));
console.time('Binary Search: ');
BinarySearch_1.binarySearch(orderedNumberSet, 9003, undefined, orderedNumberSet.length - 1);
console.timeEnd('Binary Search: ');
//# sourceMappingURL=BinarySearch.test.js.map