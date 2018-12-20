"use strict";
exports.__esModule = true;
var DoublyLinkedListNode_1 = require("./DoublyLinkedListNode");
var DoublyLinkedList = (function () {
    function DoublyLinkedList() {
        this.Count = 0;
    }
    DoublyLinkedList.prototype.AddFirst = function (value) {
        var node = new DoublyLinkedListNode_1.LinkedListNode(value);
        var temp = this.Head;
        this.Head = node;
        this.Head.Next = temp;
        if (this.Count == 0) {
            this.Tail = this.Head;
        }
        else {
            temp.Prev = this.Head;
        }
        this.Count++;
    };
    DoublyLinkedList.prototype.AddLast = function (value) {
        var node = new DoublyLinkedListNode_1.LinkedListNode(value);
        if (this.Count == 0) {
            this.Head = node;
        }
        else {
            this.Tail.Next = node;
            node.Prev = this.Tail;
        }
        this.Tail = node;
        this.Count++;
    };
    DoublyLinkedList.prototype.RemoveFirst = function () {
        if (this.Count != 0) {
            this.Head = this.Head.Next;
            this.Count--;
            if (this.Count == 0) {
                this.Tail = null;
            }
            else {
                this.Head.Prev = null;
            }
        }
    };
    DoublyLinkedList.prototype.RemoveLast = function () {
        if (this.Count != 0) {
            if (this.Count == 1) {
                this.Head = null;
                this.Tail = null;
            }
            else {
                this.Tail.Prev.Next = null;
                this.Tail = this.Tail.Prev;
            }
            this.Count--;
        }
    };
    DoublyLinkedList.prototype.Add = function (item) {
        this.AddFirst(item);
    };
    DoublyLinkedList.prototype.Contains = function (item) {
        var current = this.Head;
        while (current != null) {
            if (current.Value === item) {
                return true;
            }
            current = current.Next;
        }
        return false;
    };
    DoublyLinkedList.prototype.Find = function (item) {
        var current = this.Head;
        while (current != null) {
            if (current.Value === item) {
                return current;
            }
            current = current.Next;
        }
        return false;
    };
    DoublyLinkedList.prototype.CopyToArray = function (array, arrayIndex) {
        if (arrayIndex === void 0) { arrayIndex = 0; }
        var current = this.Head;
        while (current != null) {
            array[arrayIndex++] = current.Value;
            current = current.Next;
        }
        return array;
    };
    DoublyLinkedList.prototype.Remove = function (item) {
        var previous = null;
        var current = this.Head;
        while (current != null) {
            if (current.Value === item) {
                if (previous != null) {
                    previous.Next = current.Next;
                    if (current.Next === null) {
                        this.Tail = previous;
                    }
                    else {
                        current.Next.Prev = previous;
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
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DataStructures.js.map