import { BinaryTreeNode } from './BinaryTreeNode';

export class BinaryTree<T> {
    public _head: BinaryTreeNode<T>;
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
                node.Left = new BinaryTreeNode<T>(value);
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
        while (current != null) {
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
        let parent: BinaryTreeNode<T>;

        current = this.FindWithParent(value, parent);

        if (current == null) {
            return false;
        }

        this._count--;

        // Case 1: If current has no right child, then current's left replaces current
        if (current.Right == null) {
            if (parent == null) {
                this._head = current.Left;
            } else {
                let result = parent.Value > current.Value;
                if (result) {
                    // if parent value id greater than the current value
                    // make the current left child a left child of parent
                    parent.Left = current.Left;
                } else if (!result) {
                    // if parent value is less than current value
                    // make the current left child a right child of parent
                    parent.Right = current.Left;
                }
            }
        }

        // Case 2 If current's right child has no left child, 
        // then currents right child replaces currrent
        else if (current.Right.Left == null) {
            current.Right.Left = current.Left;

            if (parent == null) {
                this._head = current.Right;
            } else {
                let result: boolean = parent.Value > current.Value;
                if (result) {
                    // if parent value is greater than current value
                    // make the current right child a left child of parent
                    parent.Left = current.Right;
                } else if (!result) {
                    // if parent value is less than current value
                    // make the current right child a right child of parent
                    parent.Right = current.Right;
                }
            }
        }
        // Case 3: If current's right child has a left child, replave current with
        // current's right child's elft-most child
        else {
            // find the right's left-most child
            let leftmost = current.Right.Left;
            let leftmostParent = current.Right;

            while (leftmost.Left != null) {
                leftmostParent = leftmost;
                leftmost = leftmost.Left;
            }

            // the parent;'s left subtree becomes the leftmost's right right dubtree
            leftmostParent.Left = leftmost.Right;

            // assign leftmost's left and right to current's left and right children
            leftmost.Left = current.Left;
            leftmost.Right = current.Right;

            if (parent == null) {
                this._head = leftmost;
            } else {
                let result: boolean = parent.Value > current.Value;

                if (result) {
                    // if parent value is greater than current value
                    // make leftmost the parent's left child
                    parent.Left = leftmost;
                } else if (!result) {
                    //if parent value is less than current value
                    // make leftmost the parent's right child
                    parent.Right = leftmost;
                }
            }
        }

        return true;
    }
}