export class LinkedListNode<T>
{
  public Value: T;
  public Next: LinkedListNode<T>;
  public Key: T;

  constructor(value: T) {
    this.Value = value;
  }
}
