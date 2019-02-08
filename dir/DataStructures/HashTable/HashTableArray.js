"use strict";
exports.__esModule = true;
var HashTableArrayNode_1 = require("./HashTableArrayNode");
var HashTableArray = (function () {
    function HashTableArray(capacity) {
        this.Capacity = 0;
        this.Capacity = capacity;
        this._array = Array(capacity).fill(null).map(function () { return new HashTableArrayNode_1.HashTableArrayNode(); });
    }
    HashTableArray.prototype.Add = function (key, value) {
        this._array[this.GetIndex(key)].Add(key, value);
        console.log('First value');
        console.log(this._array[this.GetIndex(key)]._items.Head.Value);
        console.log(this._array[this.GetIndex(key)]._items);
    };
    HashTableArray.prototype.Update = function (key, value) {
        this._array[this.GetIndex(key)].Update(key, value);
    };
    HashTableArray.prototype.GetIndex = function (key) {
        return (25);
    };
    return HashTableArray;
}());
exports.HashTableArray = HashTableArray;
//# sourceMappingURL=HashTableArray.js.map