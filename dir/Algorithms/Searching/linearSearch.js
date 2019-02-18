"use strict";
exports.__esModule = true;
exports.linearSearch = function (arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
};
//# sourceMappingURL=linearSearch.js.map