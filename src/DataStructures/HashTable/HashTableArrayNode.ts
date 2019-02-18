import { LinkedList } from '../SingleLinkedList/SingleLinkedList';
import { LinkedListNode } from '../SingleLinkedList/SingleLinkedListNode';
import { HashTableNodePair } from './HashTableNodePair';
import { HashTableLinkedList } from './HashTableLinkedList';

export class HashTableArrayNode<TKey, TValue>
{
  public _items: LinkedList<HashTableNodePair<TKey, TValue>>;

  public Add(key: TKey, value: TValue) {
    // lazy init the linked list
    if (this._items == null) {
      this._items = new LinkedList<HashTableNodePair<TKey, TValue>>();
    } else {
      // Multiple items might collide and exist in this list - but each
      // key should only be in thee list once.
      /**
       * Set up iterable in Linked List
       */
    }

    // if we make it this far - add the item
    this._items.AddFirst(new HashTableNodePair<TKey, TValue>(key, value));
  }

  public Update(key: TKey, value: TValue) {
    let update: boolean = false;

    if (this._items != null) {
      // chech each item in the list for the specified key
      /**
       * Set up Itterable
       */
    }
  }

  public Remove(key: TKey) {
    let removed: boolean = false;
    if (this._items != null) {
      let current: LinkedListNode<HashTableNodePair<TKey, TValue>> = this._items.Head;
      while (current != null) {
        if (current.Value.Key === key) {
          //TODO: Check errors on this  this._items.Remove(current);
          removed = true;
          break;
        }

        current = current.Next;
      }
    }
    return removed;
  }
}
