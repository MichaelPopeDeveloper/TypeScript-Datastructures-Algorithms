"use strict";
exports.__esModule = true;
var linearSearch_1 = require("../Searching/linearSearch");
var DataSet_1 = require("../utility/DataSet");
var orderedNumberSet = DataSet_1.createOrderedNumberArray();
console.log(linearSearch_1.linearSearch(orderedNumberSet, 9000));
console.time('Linear Search: ');
linearSearch_1.linearSearch(orderedNumberSet, 9000);
console.timeEnd('Linear Search: ');
//# sourceMappingURL=LinearSearch.test.js.map