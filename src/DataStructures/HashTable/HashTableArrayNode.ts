import { LinkedList } from '../LinkedList/LinkedList';
import { LinkedListNode } from '../LinkedList/LinkedListNode';
import { HashTableNodePair } from './HashTableNodePair';
import { HashTableLinkedList } from './HashTableLinkedList';

export class HashTableArrayNode<TKey, TValue>
{
  constructor() { }
  public _items = new HashTableLinkedList<HashTableNodePair<TKey, TValue>>();

  public Add(key: TKey, value: TValue): void {
    this._items.Hash_Add(key, value);
  }

  public Update(key: TKey, value: TValue): void {
    this._items.Hash_Update(key, value);
  }

  public Get(key: any) {
    console.log('HTA');
    console.log(key);
    this._items.Hash_Get(key);
  }

  // public TryGetValue(key: TKey, value: TValue) {
  //   let found: boolean = false;

  //   if (this._items != null) {
  //     for (let pair in this._items) {
  //       if (pair.Key === key) {
  //         value = pair.valueOf;
  //       }
  //     }
  //   }

  //   return found;
  // }

  // public Remove(key: TKey): boolean {
  //   let removed: boolean = false;

  //   if (this._items !== null) {
  //     let current: LinkedListNode<HashTableNodePair<TKey, TValue>> = this._items.First;
  //     while (current !== null) {
  //       if (current.Value.Key === key) {
  //         this._items.Remove(current);
  //       }
  //     }
  //   }
  // }
}
