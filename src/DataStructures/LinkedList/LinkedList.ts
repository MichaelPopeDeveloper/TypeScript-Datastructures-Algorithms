import { LinkedListNode } from './LinkedListNode';

export class LinkedList<T>
{

  public Head: LinkedListNode<T>;
  public Tail: LinkedListNode<T>;
  public Count = 0;

  public AddFirst(value: any): void {
    const node = new LinkedListNode<T>(value);
    const temp: LinkedListNode<T> = this.Head;

    this.Head = node;

    this.Head.Next = temp;

    this.Count += 1;

    if (this.Count === 1) {

      this.Tail = this.Head;
    }
  }

  public AddLast(value: T): void {
    const node = new LinkedListNode(value);

    if (this.Count === 0) {
      this.Head = node;
    } else {
      this.Tail.Next = node;
    }

    this.Tail = node;

    this.Count += 1;
  }

  public RemoveFirst(): void {

    if (this.Count !== 0) {
      this.Head = this.Head.Next;
      this.Count -= 1;

      if (this.Count === 0) {
        this.Tail = null;
      }
    }
  }

  public RemoveLast(): void {
    if (this.Count !== 0) {
      if (this.Count === 1) {
        this.Head = null;
        this.Tail = null;
      } else {
        let current: LinkedListNode<T> = this.Head;
        while (current.Next !== this.Tail) {
          current = current.Next;
        }

        current.Next = null;
        this.Tail = current;
      }

      this.Count -= 1;
    }
  }

  public Add(item: T) {
    this.AddFirst(item);
  }

  public Contains(item: T): boolean {
    let current: LinkedListNode<T> = this.Head;

    while (current !== null) {
      if (current.Value === item) {
        return true;
      }

      current = current.Next;
    }
    return false;
  }

  public update() {
    let current: LinkedListNode<T> = this.Head;
    while (current !== null) {

    }
  }

  public CopyTo(array: T[], Index: number = 0): T[] {
    let arrayIndex: number = Index;
    let current: LinkedListNode<T> = this.Head;
    while (current != null) {
      array[arrayIndex += 1] = current.Value;
      current = current.Next;
    }
    return array;
  }

  public Remove(item: T) {
    let previous: LinkedListNode<T> = null;
    let current: LinkedListNode<T> = this.Head;

    while (current !== null) {
      if (current.Value === item) {
        if (previous !== null) {
          previous.Next = current.Next;

          if (current.Next === null) {
            this.Tail = previous;
          }

          this.Count -= 1;
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

  // TODO: Finish creating find method
  public Find() {

  }

  public Clear(): void {
    this.Head = null;
    this.Tail = null;
    this.Count = 0;
  }

  public Enumerator(cb: Function): any {
    let current: LinkedListNode<T> = this.Head;
    while (current != null) {
      cb(current);
      current = current.Next;
    }
  }
}
