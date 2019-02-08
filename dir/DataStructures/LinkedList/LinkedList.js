"use strict";
exports.__esModule = true;
var LinkedListNode_1 = require("./LinkedListNode");
var LinkedList = (function () {
    function LinkedList() {
        this.Count = 0;
    }
    LinkedList.prototype.AddFirst = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        var temp = this.Head;
        this.Head = node;
        this.Head.Next = temp;
        this.Count += 1;
        if (this.Count === 1) {
            this.Tail = this.Head;
        }
    };
    LinkedList.prototype.AddLast = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        if (this.Count === 0) {
            this.Head = node;
        }
        else {
            this.Tail.Next = node;
        }
        this.Tail = node;
        this.Count += 1;
    };
    LinkedList.prototype.RemoveFirst = function () {
        if (this.Count !== 0) {
            this.Head = this.Head.Next;
            this.Count -= 1;
            if (this.Count === 0) {
                this.Tail = null;
            }
        }
    };
    LinkedList.prototype.RemoveLast = function () {
        if (this.Count !== 0) {
            if (this.Count === 1) {
                this.Head = null;
                this.Tail = null;
            }
            else {
                var current = this.Head;
                while (current.Next !== this.Tail) {
                    current = current.Next;
                }
                current.Next = null;
                this.Tail = current;
            }
            this.Count -= 1;
        }
    };
    LinkedList.prototype.Add = function (item) {
        this.AddFirst(item);
    };
    LinkedList.prototype.Contains = function (item) {
        var current = this.Head;
        while (current !== null) {
            if (current.Value === item) {
                return true;
            }
            current = current.Next;
        }
        return false;
    };
    LinkedList.prototype.update = function () {
        var current = this.Head;
        while (current !== null) {
        }
    };
    LinkedList.prototype.CopyTo = function (array, Index) {
        if (Index === void 0) { Index = 0; }
        var arrayIndex = Index;
        var current = this.Head;
        while (current != null) {
            array[arrayIndex += 1] = current.Value;
            current = current.Next;
        }
        return array;
    };
    LinkedList.prototype.Remove = function (item) {
        var previous = null;
        var current = this.Head;
        while (current !== null) {
            if (current.Value === item) {
                if (previous !== null) {
                    previous.Next = current.Next;
                    if (current.Next === null) {
                        this.Tail = previous;
                    }
                    this.Count -= 1;
                }
                else {
                    this.RemoveFirst();
                }
                return true;
            }
            previous = current;
            current = current.Next;
        }
        return false;
    };
    LinkedList.prototype.Find = function () {
    };
    LinkedList.prototype.Clear = function () {
        this.Head = null;
        this.Tail = null;
        this.Count = 0;
    };
    LinkedList.prototype.Enumerator = function (cb) {
        var current = this.Head;
        while (current != null) {
            cb(current);
            current = current.Next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map