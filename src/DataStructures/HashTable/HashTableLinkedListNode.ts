import { LinkedListNode } from '../LinkedList/LinkedListNode';

export class HashTableLinkedListNode<T> extends LinkedListNode<T> {
  // Maybe remove this, as you can store the whole node in the value section
  public Key: T;
}
