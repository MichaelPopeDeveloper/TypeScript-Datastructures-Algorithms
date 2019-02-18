"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("../SingleLinkedList/SingleLinkedList");
var Queue = (function () {
    function Queue() {
        this._list = new SingleLinkedList_1.LinkedList();
        this.Count = this._list.Count;
    }
    Queue.prototype.Enqueue = function (item) {
        this._list.AddLast(item);
    };
    Queue.prototype.Dequeue = function () {
        if (this._list.Count == 0) {
            throw new Error('The queue is empty');
        }
        var value = this._list.Head.Value;
        this._list.RemoveFirst();
        return value;
    };
    Queue.prototype.Peek = function () {
        if (this._list.Count == 0) {
            throw new Error('The queue is empty');
        }
        return this._list.Head.Value;
    };
    Queue.prototype.Clear = function () {
        this._list.Clear();
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map