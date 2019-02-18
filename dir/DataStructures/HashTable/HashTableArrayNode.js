"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("../SingleLinkedList/SingleLinkedList");
var HashTableNodePair_1 = require("./HashTableNodePair");
var HashTableArrayNode = (function () {
    function HashTableArrayNode() {
    }
    HashTableArrayNode.prototype.Add = function (key, value) {
        if (this._items == null) {
            this._items = new SingleLinkedList_1.LinkedList();
        }
        else {
        }
        this._items.AddFirst(new HashTableNodePair_1.HashTableNodePair(key, value));
    };
    HashTableArrayNode.prototype.Update = function (key, value) {
        var update = false;
        if (this._items != null) {
        }
    };
    HashTableArrayNode.prototype.Remove = function (key) {
        var removed = false;
        if (this._items != null) {
            var current = this._items.Head;
            while (current != null) {
                if (current.Value.Key === key) {
                    removed = true;
                    break;
                }
                current = current.Next;
            }
        }
        return removed;
    };
    return HashTableArrayNode;
}());
exports.HashTableArrayNode = HashTableArrayNode;
//# sourceMappingURL=HashTableArrayNode.js.map