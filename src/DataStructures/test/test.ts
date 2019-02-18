import * as Collections from '../Collections';
import { HashTable } from '../HashTable/HashTable';

const myList = new Collections.DoublyLinkedList<any>();
const myStack = new Collections.Stack();
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
const myHashTable = new HashTable(26);


myHashTable.Add('First Value', 'this is the first stored value');
myHashTable.Add('Second Value', 'this is the second stored value');
console.log(myHashTable);
