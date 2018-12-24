import { HashTableArray } from './HashTableArray';

export class HashTable<TKey, TValue> {
  public _array: HashTableArray<TKey, TValue>;

  constructor(initialCapacity: number) {
    if (initialCapacity < 1) {
      throw new Error('initialCapacity must be larger than 0');
    }

    this._array = new HashTableArray<TKey, TValue>(initialCapacity);

    // Finish whats here
  }

  public Add(key: TKey, value: TValue) {
    this._array.Add(key, value);
  }
}
