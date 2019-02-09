export class BinaryTreeNode<TNode> {
    public Value: TNode;
    public Left: BinaryTreeNode<TNode>;
    public Right: BinaryTreeNode<TNode>;
    
    constructor(value: BinaryTreeNode) {
        this.Value = value;
    }
    
    public CompareTo(other: TNode): boolean {
        return this.Value === other.Value;
    }
}