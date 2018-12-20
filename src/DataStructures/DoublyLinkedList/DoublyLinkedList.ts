import * as interfaces from "../../@types/DataStructures";
import { IDoublyLinkedList } from "../../@types/DataStructures";
import { LinkedListNode } from "./DoublyLinkedListNode";

/***
 * Class implementation for a Doubly Linked List;
 */
export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
    private Count: number = 0;

    public Head: LinkedListNode<T>;
    public Tail: LinkedListNode<T>;

    /** Add values */
    public AddFirst(value: T): void {
        let node = new LinkedListNode<T>(value);

        // Save the head node so that it is ont lost
        let temp: LinkedListNode<T> = this.Head;

        // Make the head the new added value
        this.Head = node;

        // Attach the head to the rest of the Doubly linked list
        this.Head.Next = temp;

        if (this.Count == 0) {
            // if the list was empty, the Head and tail should both point to the new node
            this.Tail = this.Head;
        }
        else {
            temp.Prev = this.Head;
        }

        this.Count++;
    }

    // Add a value to the end of the list
    public AddLast(value: T): void {
        // Store new value in node
        let node = new LinkedListNode<T>(value);

        if (this.Count == 0) {
            this.Head = node;
        }
        else {
            this.Tail.Next = node;
            node.Prev = this.Tail;
        }

        this.Tail = node;
        this.Count++;
    }

    // Removes the first node from the list
    public RemoveFirst(): void {
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
    }

    // Removes the last node from the list
    public RemoveLast() {
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
    }

    public Add(item: T): void {
        this.AddFirst(item);
    }

    public Contains(item: T): boolean {
        let current: LinkedListNode<T> = this.Head;
        while (current != null) {
            if (current.Value === item) {
                return true;
            }

            current = current.Next;
        }

        return false;
    }

    public Find(item: T): any /**TODO: Change this to appropriate union return type */ {
        let current: LinkedListNode<T> = this.Head;
        while (current != null) {
            if (current.Value === item) {
                return current;
            }

            current = current.Next;
        }

        return false;
    }

    public CopyToArray(array: T[], arrayIndex: number = 0): T[] {
        let current: LinkedListNode<T> = this.Head;
        while (current != null) {
            array[arrayIndex++] = current.Value;
            current = current.Next;
        }
        return array;
    }

    public Remove(item: T): boolean {
        let previous: LinkedListNode<T> = null;
        let current: LinkedListNode<T> = this.Head;

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
    }

}