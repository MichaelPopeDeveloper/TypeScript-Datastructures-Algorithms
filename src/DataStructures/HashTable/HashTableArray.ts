import { HashTableArrayNode } from './HashTableArrayNode';
export class HashTableArray<TKey, TValue> {
  public _HashMap: Map<TKey, HashTableArrayNode<TKey, TValue>>;

  constructor() {
    this._HashMap = new Map<TKey, HashTableArrayNode<TKey, TValue>>();
  }

  public Add(key: TKey, value: TValue) {
    if (this._HashMap.get(key) === undefined) {
      this._HashMap.set(key, new HashTableArrayNode());
    }
    this._HashMap.get(key).Add(key, value);
  }

  public Update(key: TKey, value: TValue) {
    this._HashMap.get(key).Update(key, value);
  }

  public Get(key: TKey) {
    console.log('HTA');
    console.log(key);
    this._HashMap.get(key).Get(key);
  }

}
