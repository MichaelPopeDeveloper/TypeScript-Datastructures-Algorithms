import { IHashTableNodePair } from '../../@types/DataStructures';

export class HashTableNodePair<TKey, TValue> implements IHashTableNodePair<TKey, TValue> {
  public Key: TKey;
  public Value: TValue;

  constructor(key: TKey, value: TValue) {
    this.Key = key;
    this.Value = value;
  }
}
