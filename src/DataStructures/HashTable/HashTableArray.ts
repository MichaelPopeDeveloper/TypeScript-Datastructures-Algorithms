import { HashTableArrayNode } from './HashTableArrayNode';
export class HashTableArray<TKey, TValue> {
  public _array: HashTableArrayNode<TKey, TValue>[];

  public Capacity: number = 0;

  constructor(capacity: number) {
    this.Capacity = capacity;
    this._array = Array(capacity).fill(null).map(() => new HashTableArrayNode<TKey, TValue>());
  }

  public Add(key: TKey, value: TValue) {
    this._array[this.GetIndex(key)].Add(key, value);
    console.log('First value');
    console.log(this._array[this.GetIndex(key)]._items.Head.Value);
    // For testing the Linked list Structure
    // console.log('Second value');
    // console.log(this._array[this.GetIndex(key)]._items.Head.Next.Value);
    console.log(this._array[this.GetIndex(key)]._items);
  }

  public Update(key: TKey, value: TValue) {
    this._array[this.GetIndex(key)].Update(key, value);
  }

  private GetIndex(key: TKey) {
    // For test purposes
    return (25);
  }
}
