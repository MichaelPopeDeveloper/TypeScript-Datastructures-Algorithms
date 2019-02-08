"use strict";
exports.__esModule = true;
var DataSet_1 = require("../utility/DataSet");
var mergeSort = function (arr) {
    var l = 0;
    var r = arr.length - 1;
    var merge = function (arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;
        var L = [];
        var R = [];
        for (var i_1 = 0; i_1 < n1; i_1 += 1) {
            L[i_1] = arr[l + i_1];
        }
        for (var j_1 = 0; j_1 < n2; j_1 += 1) {
            R[j_1] = arr[m + 1 + j_1];
        }
        var i = 0;
        var j = 0;
        var k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i += 1;
            }
            else {
                arr[k] = R[j];
                j += 1;
            }
            k += 1;
        }
        while (i < n1) {
            arr[k] = L[i];
            i += 1;
            k += 1;
        }
        while (j < n2) {
            arr[k] = R[j];
            j += 1;
            k += 1;
        }
        return arr;
    };
    var sort = function (arr, l, r) {
        if (l < r) {
            var m = Math.floor((l + r) / 2);
            sort(arr, l, m);
            sort(arr, m + 1, r);
            return merge(arr, l, m, r);
        }
    };
    return sort(arr, l, r);
};
var NumberSet = DataSet_1.createDataSet();
console.time('Merge Sort: ');
mergeSort(NumberSet);
console.timeEnd('Merge Sort: ');
//# sourceMappingURL=MergeSort.js.map