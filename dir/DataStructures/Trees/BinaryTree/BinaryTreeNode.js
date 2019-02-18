"use strict";
exports.__esModule = true;
var BinaryTreeNode = (function () {
    function BinaryTreeNode(value) {
        this.Value = value;
    }
    BinaryTreeNode.prototype.CompareTo = function (other) {
        return this.Value === other.Value;
    };
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
//# sourceMappingURL=BinaryTreeNode.js.map