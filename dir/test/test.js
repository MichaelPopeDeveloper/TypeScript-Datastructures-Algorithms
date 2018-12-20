"use strict";
exports.__esModule = true;
var Collections = require("../DoublyLinkedList/DoublyLinkedList");
var myList = new Collections.DoublyLinkedList();
myList.AddFirst("This should be the middle value!");
myList.AddLast("This should be the last value!");
myList.AddFirst("This should be the first value!");
console.log("List: ");
console.log(myList);
console.log("Found: ");
console.log(myList.Find("This is the middle value!"));
var myArray = [];
console.log("List to array: ");
console.log(myList.CopyToArray(myArray));
//# sourceMappingURL=test.js.map