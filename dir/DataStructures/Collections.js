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
var BinaryTree_1 = require("./Trees/BinaryTree/BinaryTree");
var SingleLinkedList_1 = require("./SingleLinkedList/SingleLinkedList");
var DoublyLinkedList_1 = require("./DoublyLinkedList/DoublyLinkedList");
var Queue_1 = require("./Queue/Queue");
var Stack_1 = require("./Stack/Stack");
var BinaryTree = (function (_super) {
    __extends(BinaryTree, _super);
    function BinaryTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BinaryTree;
}(BinaryTree_1.BinaryTree));
exports.BinaryTree = BinaryTree;
;
var LinkedList = (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LinkedList;
}(SingleLinkedList_1.LinkedList));
exports.LinkedList = LinkedList;
;
var DoublyLinkedList = (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DoublyLinkedList;
}(DoublyLinkedList_1.DoublyLinkedList));
exports.DoublyLinkedList = DoublyLinkedList;
;
var Queue = (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Queue;
}(Queue_1.Queue));
exports.Queue = Queue;
;
var Stack = (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stack;
}(Stack_1.Stack));
exports.Stack = Stack;
;
//# sourceMappingURL=Collections.js.map