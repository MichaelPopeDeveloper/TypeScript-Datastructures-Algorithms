import * as Collections from "../DoublyLinkedList/DoublyLinkedList";

const myList = new Collections.DoublyLinkedList<any>();

myList.AddFirst("This should be the middle value!");
myList.AddLast("This should be the last value!");
myList.AddFirst("This should be the first value!");

console.log("List: ");
console.log(myList);
console.log("Found: ");
console.log(myList.Find("This is the middle value!"));

let myArray: any[] = [];
console.log("List to array: ");
console.log(myList.CopyToArray(myArray))