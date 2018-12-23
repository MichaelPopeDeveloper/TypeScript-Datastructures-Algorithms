"use strict";
exports.__esModule = true;
var Collections = require("../DoublyLinkedList/DoublyLinkedList");
var HashTable_1 = require("../HashTable/HashTable");
var myList = new Collections.DoublyLinkedList();
var myHashTable = new HashTable_1.HashTable();
myHashTable.Add('First Value', 'this is the first stored value');
console.log(myHashTable);
myHashTable.Get('First Value');
//# sourceMappingURL=test.js.map