"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("../SingleLinkedList/SingleLinkedList");
var Stack = (function () {
    function Stack() {
        this._list = new SingleLinkedList_1.LinkedList();
        this.Count = this._list.Count;
    }
    Stack.prototype.Push = function (item) {
        this._list.AddFirst(item);
    };
    Stack.prototype.Pop = function () {
        if (this._list.Count == 0) {
            throw new Error("The stack is empty");
        }
        var value = this._list.Head.Value;
        this._list.RemoveFirst();
        return false;
    };
    Stack.prototype.Peek = function () {
        if (this._list.Count == 0) {
            throw new Error('The stack is empty');
        }
        return this._list.Head.Value;
    };
    Stack.prototype.Clear = function () {
        this._list.Clear();
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map