import * as Collections from '../DoublyLinkedList/DoublyLinkedList';
import { HashTable } from '../HashTable/HashTable';

const myList = new Collections.DoublyLinkedList<any>();

// myList.AddFirst('This should be the middle value!');
// myList.AddLast('This should be the last value!');
// myList.AddFirst('This should be the first value!');

// console.log('List: ');
// console.log(myList);

// // myList.Remove('This should be the middle value!');
// console.log(myList);

// myList.AddFirst('new value');
// console.log(myList.Head.Prev);

// const myArray: any[] = [];
// console.log('List to array: ');
// console.log(myList.CopyToArray(myArray));
const myHashTable = new HashTable();

myHashTable.Add('First Value', 'this is the first stored value');
console.log(myHashTable);
myHashTable.Get('First Value');
