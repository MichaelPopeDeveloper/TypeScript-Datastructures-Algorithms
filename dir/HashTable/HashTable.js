"use strict";
exports.__esModule = true;
var HashTableArray_1 = require("./HashTableArray");
var HashTable = (function () {
    function HashTable(initialCapacity) {
        if (initialCapacity < 1) {
            throw new Error('initialCapacity must be larger than 0');
        }
        this._array = new HashTableArray_1.HashTableArray(initialCapacity);
    }
    HashTable.prototype.Add = function (key, value) {
        this._array.Add(key, value);
    };
    return HashTable;
}());
exports.HashTable = HashTable;
//# sourceMappingURL=HashTable.js.map