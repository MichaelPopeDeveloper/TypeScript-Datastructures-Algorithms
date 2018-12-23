"use strict";
exports.__esModule = true;
var HashTableArray_1 = require("./HashTableArray");
var HashTable = (function () {
    function HashTable() {
        this._HashTableMap = new HashTableArray_1.HashTableArray();
    }
    HashTable.prototype.Add = function (key, value) {
        this._HashTableMap.Add(key, value);
    };
    HashTable.prototype.Get = function (key) {
        console.log(key);
        this._HashTableMap.Get(key);
    };
    return HashTable;
}());
exports.HashTable = HashTable;
//# sourceMappingURL=HashTable.js.map