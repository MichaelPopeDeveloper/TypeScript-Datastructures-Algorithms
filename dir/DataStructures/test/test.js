"use strict";
exports.__esModule = true;
var Collections = require("../Collections");
var HashTable_1 = require("../HashTable/HashTable");
var myList = new Collections.DoublyLinkedList();
var myStack = new Collections.Stack();
var myHashTable = new HashTable_1.HashTable(26);
myHashTable.Add('First Value', 'this is the first stored value');
myHashTable.Add('Second Value', 'this is the second stored value');
console.log(myHashTable);
//# sourceMappingURL=test.js.map