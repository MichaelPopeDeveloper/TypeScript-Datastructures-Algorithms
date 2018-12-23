import { LinkedList } from '../LinkedList/LinkedList';
import { HashTableNodePair } from './HashTableNodePair';
import { HashTableLinkedListNode } from './HashTableLinkedListNode';

export class HashTableLinkedList<T> extends LinkedList<T> {

  public Hash_Add(key: any, value: any) {
    let current: HashTableLinkedListNode<T> = this.Head;
    let keyAlreadyExists: boolean = false;
    while (current != null) {
      if (current.Key === key) {
        keyAlreadyExists = true;
        throw new Error('The collection already contains the key');
        // return false;
      }
      current = current.Next;
    }
    this.AddFirst(new HashTableNodePair(key, value));
  }

  public Hash_Update(key: any, value: any) {
    let updated: boolean = false;
    let current: HashTableLinkedListNode<T> = this.Head;
    if (this.Count !== 0) {
      while (current != null) {
        if (current.Key === key) {
          current.Value = value;
          updated = true;
          break;
        }
        current = current.Next;
      }
    }
    if (!updated) {
      throw new Error('The collection does not contain the value');
    } else {
      return true;
    }
  }

  public Hash_Get(key: T): any {
    let current: HashTableLinkedListNode<T> = this.Head;
    while (current != null) {
      if (current.Key === key) {
        console.log('HTll');
        console.log('Hash_Get');
        console.log(current);
        return current;
      }
      current = current.Next;
    }
    console.log(key);
    throw new Error('The key was not founf in the collection');
  }

  public Enumerator(cb: Function): any {
    let current: HashTableLinkedListNode<T> = this.Head;
    while (current != null) {
      cb(current.Key, current.Value);
      current = current.Next;
    }
  }
}
