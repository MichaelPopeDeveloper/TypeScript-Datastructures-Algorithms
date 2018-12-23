"use strict";
exports.__esModule = true;
var HashTableLinkedList_1 = require("./HashTableLinkedList");
var HashTableArrayNode = (function () {
    function HashTableArrayNode() {
        this._items = new HashTableLinkedList_1.HashTableLinkedList();
    }
    HashTableArrayNode.prototype.Add = function (key, value) {
        this._items.Hash_Add(key, value);
    };
    HashTableArrayNode.prototype.Update = function (key, value) {
        this._items.Hash_Update(key, value);
    };
    HashTableArrayNode.prototype.Get = function (key) {
        console.log('HTAN');
        console.log(key);
        this._items.Hash_Get(key);
    };
    return HashTableArrayNode;
}());
exports.HashTableArrayNode = HashTableArrayNode;
//# sourceMappingURL=HashTableArrayNode.js.map