import { BinaryTreeNode } from './BinaryTreeNode';

export class BinaryTree<T> {
    private _head: BinaryTreeNode<T>;
    private _count: number;
    
    // Add value to the Binary Tree
    public Add(value: T) {
        if (this._head == null) {
            this._head = new BinaryTreeNode<T>(value);
        } else {
            this.AddTo(this._head, value)
        }
    }
    
    private AddTo(node: BinaryTreeNode<T>, value: T) {
        // Case 1: The value is less than the current node value
        if (value < node.Value) {
            // if there is no left child make this the new left child
            if (node.Left == null) {
                node.Left = new BinaryTreenode<T>(value);
            } else {
                this.AddTo(node.Left, value);
            }
        }
        // Case 2: Value is equal to or greater than the current node Value
        else {
            // If there is no right, add it to the right
            if (node.Right == null) {
                node.Right = new BinaryTreeNode<T>(value);
            } else {
                // else add it to the right node
                this.AddTo(node.Right, value);
            }
        }
    }
    
    public Contains(value: T): boolean {
        let parent: BinaryTreeNode<T>;
        return this.FindWithParent(value, parent) != null;
    }
    
    private FindWithParent(value: T, parent: BinaryTreeNode<T>) {
        // try to find data in the tree
        let current = this._head;
        parent = null;
        
        // while there is no match
        while (curernt != null) {
            let result: boolean = current.Value > value;
            
            if (result) {
                // if the value is less than current, go left.
                parent = current;
                current = current.Left;
            } else if (!result) {
                // if the value is more than current, go right.
                parent = current;
                current = current.Right;
            } else {
                // we found a match!
                break;
            }
        }
        return current;
    }
    
    public Remove(value: T): boolean {
        let current: BinaryTreeNode<T>;
        const parent: BinaryTreeNode<T>;
        
        curernt = this.FindWithParent(value, parent);
        
        if (current == null) {
            return false;
        }
        
        this._count--;
        
        // Case 1: If current has no right child, then current's left replaces current
    }
}