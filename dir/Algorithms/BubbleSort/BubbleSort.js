"use strict";
exports.__esModule = true;
var DataSet_1 = require("../utility/DataSet");
var BubbleSort = function (items) {
    var swapped;
    while (swapped != false) {
        swapped = false;
        for (var i = 1; i < items.length; i++) {
            if (items[i - 1] > items[i]) {
                var temp = items[i];
                items[i] = items[i - 1];
                items[i - 1] = temp;
                swapped = true;
            }
        }
    }
    return items;
};
var NumberSet = DataSet_1.createDataSet();
console.time('Bubble Sort: ');
BubbleSort(NumberSet);
console.timeEnd('Bubble Sort: ');
//# sourceMappingURL=BubbleSort.js.map