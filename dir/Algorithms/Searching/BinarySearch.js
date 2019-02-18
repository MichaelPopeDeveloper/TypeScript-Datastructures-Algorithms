"use strict";
exports.__esModule = true;
exports.binarySearch = function (arr, x, l, r) {
    if (l === void 0) { l = 0; }
    if (r >= l) {
        var mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] > x) {
            return exports.binarySearch(arr, x, l, mid - 1);
        }
        if (arr[mid] < x) {
            return exports.binarySearch(arr, x, mid + 1, r);
        }
    }
    return -1;
};
//# sourceMappingURL=BinarySearch.js.map