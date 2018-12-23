export interface IDoublyLinkedList<T> {
  Head: ILinkedListNode<T>;
  Tail: ILinkedListNode<T>;

  AddFirst(value: T): void;
  AddLast(value: T): void;
  Contains(value: T): boolean;
  Find(value: T): any;
  CopyToArray(array: T[], arrayIndex: number): T[];
  Remove(value: T): boolean;
}

interface ILinkedListNode<T> {
  Value: T;
  Next: ILinkedListNode<T>;
  Prev: ILinkedListNode<T>;
}

interface IHashTableNodePair<TKey, TValue> {
  Value: TValue;
  Key: TKey;
}
