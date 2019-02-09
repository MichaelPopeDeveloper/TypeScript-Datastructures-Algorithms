import {LinkedListNode} from './SingleLinkedListNode';
import { ISingleLinkedList } from '../../@types/DataStructures';

export class LinkedList<T> implements ISingleLinkedList<T> {
    public Head: LinkedListNode<T>;
    public Tail: LinkedListNode<T>;
    public Count: number = 0;
    
    // Adding Values to the singly linked list
    public AddFirst(value: T) {
        let node: LinkedListNode<T> = new LinkedListNode<T>(value);
        
        // Save head node in temp value so its not lost
        let temp: LinkedListNode<T> = this.Head;
        
        // Point head to the new node
        this.Head = node;
        
        // Insert the rest of the list begind the head node
        this.Head.Next = temp;
        
        this.Count++;
        
        if (this.Count === 1) {
            this.Tail = this.Head;
        }
    }
    
    public AddLast (value: T) {
        let node: LinkedListNode<T> = new LinkedListNode<T>(value);
        
        if (this.Count == 0) {
            this.Head = node;
        } else {
            this.Tail.Next = node;
        }
        this.Tail = node;
        
        this.Count++;
    }
    
    public RemoveFirst() {
        if (this.Count != 0) {
            this.Head = this.Head.Next;
            this.Count--;
            
            if (this.Count == 0) {
                this.Tail == null;
            }
        }
    }
    
    public RemoveLast() {
        if (this.Count != 0) {
            if (this.Count == 1) {
                this.Head = null;
                this.Tail = null;
            } else {
                let current: LinkedListNode<T> = this.Head;
                while (current.Next != this.Tail) {
                    current = current.Next;
                }
                
                current.Next = null;
                this.Tail = current;
            }
            
            this.Count--;
        }
    }
    
    public Add(item: T) {
        this.AddFirst(item);
    }
    
    public Contains(item: T) {
        let current: LinkedListNode<T> = this.Head;
        while (current != null) {
            if (current.Value === item) {
                return true;
            }
            
            current = current.Next;
        }
        
        return false;
    }
    
    public CopyToArray() {
        let current: LinkedListNode<T> = this.Head;
        let newArray = [];
        let arrayIndex = 0;
        while (current != null) {
            newArray[arrayIndex++] = current.Value;
            current = current.Next;
        }
        return newArray;
    }
    
    public Remove(item: T) {
        let previous: LinkedListNode<T> = null;
        let current: LinkedListNode<T> = this.Head;
        
        while (current != null) {
            if (current.Value === item) {
                if (previous != null) {
                    previous.Next = current.Next;
                    
                    if (current.Next == null) {
                        this.Tail = previous;
                    }
                    
                    this.Count--;
                } else {
                    this.RemoveFirst();
                }
                
                return true;
            }
            
            previous = current;
            current = current.Next;
        }
        
        return false;
    }
    
    // TODO: Finish this method
    public Find() 
    {
        
    }
    
    public Clear() {
        this.Head = null;
        this.Tail = null;
        this.Count = 0;
    }
}