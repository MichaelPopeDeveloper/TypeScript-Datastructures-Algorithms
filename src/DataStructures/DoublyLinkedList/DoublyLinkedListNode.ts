import { ILinkedListNode } from '../../@types/DataStructures';

export class LinkedListNode<T> implements ILinkedListNode<T> {
  public Value: T;
  public Next: ILinkedListNode<T> = null;
  public Prev: ILinkedListNode<T> = null;

  constructor(value: T) {
    this.Value = value;
  }

}
