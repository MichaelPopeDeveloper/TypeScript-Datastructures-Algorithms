"use strict";
exports.__esModule = true;
var BinaryTreeNode_1 = require("./BinaryTreeNode");
var BinaryTree = (function () {
    function BinaryTree() {
    }
    BinaryTree.prototype.Add = function (value) {
        if (this._head == null) {
            this._head = new BinaryTreeNode_1.BinaryTreeNode(value);
        }
        else {
            this.AddTo(this._head, value);
        }
    };
    BinaryTree.prototype.AddTo = function (node, value) {
        if (value < node.Value) {
            if (node.Left == null) {
                node.Left = new BinaryTreeNode_1.BinaryTreeNode(value);
            }
            else {
                this.AddTo(node.Left, value);
            }
        }
        else {
            if (node.Right == null) {
                node.Right = new BinaryTreeNode_1.BinaryTreeNode(value);
            }
            else {
                this.AddTo(node.Right, value);
            }
        }
    };
    BinaryTree.prototype.Contains = function (value) {
        var parent;
        return this.FindWithParent(value, parent) != null;
    };
    BinaryTree.prototype.FindWithParent = function (value, parent) {
        var current = this._head;
        parent = null;
        while (current != null) {
            var result = current.Value > value;
            if (result) {
                parent = current;
                current = current.Left;
            }
            else if (!result) {
                parent = current;
                current = current.Right;
            }
            else {
                break;
            }
        }
        return current;
    };
    BinaryTree.prototype.Remove = function (value) {
        var current;
        var parent;
        current = this.FindWithParent(value, parent);
        if (current == null) {
            return false;
        }
        this._count--;
        if (current.Right == null) {
            if (parent == null) {
                this._head = current.Left;
            }
            else {
                var result = parent.Value > current.Value;
                if (result) {
                    parent.Left = current.Left;
                }
                else if (!result) {
                    parent.Right = current.Left;
                }
            }
        }
        else if (current.Right.Left == null) {
            current.Right.Left = current.Left;
            if (parent == null) {
                this._head = current.Right;
            }
            else {
                var result = parent.Value > current.Value;
                if (result) {
                    parent.Left = current.Right;
                }
                else if (!result) {
                    parent.Right = current.Right;
                }
            }
        }
        else {
            var leftmost = current.Right.Left;
            var leftmostParent = current.Right;
            while (leftmost.Left != null) {
                leftmostParent = leftmost;
                leftmost = leftmost.Left;
            }
            leftmostParent.Left = leftmost.Right;
            leftmost.Left = current.Left;
            leftmost.Right = current.Right;
            if (parent == null) {
                this._head = leftmost;
            }
            else {
                var result = parent.Value > current.Value;
                if (result) {
                    parent.Left = leftmost;
                }
                else if (!result) {
                    parent.Right = leftmost;
                }
            }
        }
        return true;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=BinaryTree.js.map