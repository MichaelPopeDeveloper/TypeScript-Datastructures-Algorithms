import { HashTableArray } from './HashTableArray';

export class HashTable<TKey, TValue> {
  public _HashTableMap = new HashTableArray();

  constructor() {

  }

  public Add(key: TKey, value: TValue) {
    this._HashTableMap.Add(key, value);
  }

  public Get(key: TKey) {
    console.log(key);
    this._HashTableMap.Get(key);
  }
}
