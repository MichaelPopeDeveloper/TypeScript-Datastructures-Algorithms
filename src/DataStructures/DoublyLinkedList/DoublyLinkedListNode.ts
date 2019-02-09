import { IDoublyLinkedListNode } from '../../@types/DataStructures';

export class LinkedListNode<T> implements IDoublyLinkedListNode<T> {
  public Value: T;
  public Next: IDoublyLinkedListNode<T> = null;
  public Prev: IDoublyLinkedListNode<T> = null;

  constructor(value: T) {
    this.Value = value;
  }

}
