import { ISingleLinkedListNode } from '../../@types/DataStructures';

export class LinkedListNode<T> implements ISingleLinkedListNode<T> {
  public Value: T;
  public Next: ISingleLinkedListNode<T>;

  constructor(value: T) {
    this.Value = value;
  }
}