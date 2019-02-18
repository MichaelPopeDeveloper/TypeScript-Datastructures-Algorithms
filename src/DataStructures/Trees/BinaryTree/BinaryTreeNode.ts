export class BinaryTreeNode<TNode> {
    public Value: TNode;
    public Left: BinaryTreeNode<TNode>;
    public Right: BinaryTreeNode<TNode>;

    constructor(value: TNode) {
        this.Value = value;
    }

    public CompareTo(other: BinaryTreeNode<TNode>): boolean {
        return this.Value === other.Value;
    }
}