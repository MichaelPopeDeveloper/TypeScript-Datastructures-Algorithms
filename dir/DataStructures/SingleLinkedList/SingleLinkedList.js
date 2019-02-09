"use strict";
exports.__esModule = true;
var SingleLinkedListNode_1 = require("./SingleLinkedListNode");
var LinkedList = (function () {
    function LinkedList() {
        this.Count = 0;
    }
    LinkedList.prototype.AddFirst = function (value) {
        var node = new SingleLinkedListNode_1.LinkedListNode(value);
        var temp = this.Head;
        this.Head = node;
        this.Head.Next = temp;
        this.Count++;
        if (this.Count === 1) {
            this.Tail = this.Head;
        }
    };
    LinkedList.prototype.AddLast = function (value) {
        var node = new SingleLinkedListNode_1.LinkedListNode(value);
        if (this.Count == 0) {
            this.Head = node;
        }
        else {
            this.Tail.Next = node;
        }
        this.Tail = node;
        this.Count++;
    };
    LinkedList.prototype.RemoveFirst = function () {
        if (this.Count != 0) {
            this.Head = this.Head.Next;
            this.Count--;
            if (this.Count == 0) {
                this.Tail == null;
            }
        }
    };
    LinkedList.prototype.RemoveLast = function () {
        if (this.Count != 0) {
            if (this.Count == 1) {
                this.Head = null;
                this.Tail = null;
            }
            else {
                var current = this.Head;
                while (current.Next != this.Tail) {
                    current = current.Next;
                }
                current.Next = null;
                this.Tail = current;
            }
            this.Count--;
        }
    };
    LinkedList.prototype.Add = function (item) {
        this.AddFirst(item);
    };
    LinkedList.prototype.Contains = function (item) {
        var current = this.Head;
        while (current != null) {
            if (current.Value === item) {
                return true;
            }
            current = current.Next;
        }
        return false;
    };
    LinkedList.prototype.CopyToArray = function () {
        var current = this.Head;
        var newArray = [];
        var arrayIndex = 0;
        while (current != null) {
            newArray[arrayIndex++] = current.Value;
            current = current.Next;
        }
        return newArray;
    };
    LinkedList.prototype.Remove = function (item) {
        var previous = null;
        var current = this.Head;
        while (current != null) {
            if (current.Value === item) {
                if (previous != null) {
                    previous.Next = current.Next;
                    if (current.Next == null) {
                        this.Tail = previous;
                    }
                    this.Count--;
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
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=SingleLinkedList.js.map