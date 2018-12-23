"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
var HashTableNodePair_1 = require("./HashTableNodePair");
var HashTableLinkedList = (function (_super) {
    __extends(HashTableLinkedList, _super);
    function HashTableLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HashTableLinkedList.prototype.Hash_Add = function (key, value) {
        var current = this.Head;
        var keyAlreadyExists = false;
        while (current != null) {
            if (current.Key === key) {
                keyAlreadyExists = true;
                throw new Error('The collection already contains the key');
            }
            current = current.Next;
        }
        this.AddFirst(new HashTableNodePair_1.HashTableNodePair(key, value));
    };
    HashTableLinkedList.prototype.Hash_Update = function (key, value) {
        var updated = false;
        var current = this.Head;
        if (this.Count !== 0) {
            while (current != null) {
                if (current.Key === key) {
                    current.Value = value;
                    updated = true;
                    break;
                }
                current = current.Next;
            }
        }
        if (!updated) {
            throw new Error('The collection does not contain the value');
        }
        else {
            return true;
        }
    };
    HashTableLinkedList.prototype.Hash_Get = function (key) {
        var current = this.Head;
        while (current != null) {
            if (current.Key === key) {
                console.log('HTll');
                console.log('Hash_Get');
                console.log(current);
                return current;
            }
            current = current.Next;
        }
        throw new Error('The key was not founf in the collection');
    };
    HashTableLinkedList.prototype.Enumerator = function (cb) {
        var current = this.Head;
        while (current != null) {
            cb(current.Key, current.Value);
            current = current.Next;
        }
    };
    return HashTableLinkedList;
}(LinkedList_1.LinkedList));
exports.HashTableLinkedList = HashTableLinkedList;
//# sourceMappingURL=HashTableLinkedList.js.map