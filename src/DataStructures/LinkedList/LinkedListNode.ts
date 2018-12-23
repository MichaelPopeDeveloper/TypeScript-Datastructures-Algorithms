export class LinkedListNode<T>
{
  public Value: T;
  public Next: LinkedListNode<T>;
  public Key: T = null;

  constructor(value: T) {
    this.Value = value;
  }
}
