"use strict";
exports.__esModule = true;
exports.createDataSet = function () {
    var NumberSet = new Array(10000);
    for (var i = 0; i < NumberSet.length; i++) {
        NumberSet[i] = Math.floor(Math.random() * 2000);
    }
    return NumberSet;
};
exports.createOrderedNumberArray = function () {
    var NumberSet = new Array(10000);
    for (var i = 0; i < NumberSet.length; i++) {
        NumberSet[i] = i;
    }
    console.log(NumberSet);
    return NumberSet;
};
//# sourceMappingURL=DataSet.js.map