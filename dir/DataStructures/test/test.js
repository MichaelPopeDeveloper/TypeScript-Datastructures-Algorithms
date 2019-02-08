"use strict";
exports.__esModule = true;
var Collections = require("../DoublyLinkedList/DoublyLinkedList");
var HashTable_1 = require("../HashTable/HashTable");
var myList = new Collections.DoublyLinkedList();
var myHashTable = new HashTable_1.HashTable(26);
myHashTable.Add('First Value', 'this is the first stored value');
myHashTable.Add('Second Value', 'this is the second stored value');
console.log(myHashTable);
//# sourceMappingURL=test.js.map