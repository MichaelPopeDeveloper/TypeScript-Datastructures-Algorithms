export interface IDoublyLinkedList<T> {
  Head: IDoublyLinkedListNode<T>;
  Tail: IDoublyLinkedListNode<T>;

  AddFirst(value: T): void;
  AddLast(value: T): void;
  Contains(value: T): boolean;
  Find(value: T): any;
  CopyToArray(array: T[], arrayIndex: number): T[];
  Remove(value: T): boolean;
}

export interface ISingleLinkedList<T> {
  Head: ISingleLinkedListNode<T>;
  Tail: ISingleLinkedListNode<T>;

  AddFirst(value: T): void;
  AddLast(value: T): void;
  Contains(value: T): boolean;
  Find(value: T): any;
  CopyToArray(): T[];
  Remove(value: T): boolean;
}

interface IDoublyLinkedListNode<T> {
  Value: T;
  Next: IDoublyLinkedListNode<T>;
  Prev: IDoublyLinkedListNode<T>;
}

interface ISingleLinkedListNode<T> {
  Value: T;
  Next: ISingleLinkedListNode<T>;
}

interface IHashTableNodePair<TKey, TValue> {
  Value: TValue;
  Key: TKey;
}
