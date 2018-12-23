"use strict";
exports.__esModule = true;
var HashTableArrayNode_1 = require("./HashTableArrayNode");
var HashTableArray = (function () {
    function HashTableArray() {
        this._HashMap = new Map();
    }
    HashTableArray.prototype.Add = function (key, value) {
        if (this._HashMap.get(key) === undefined) {
            this._HashMap.set(key, new HashTableArrayNode_1.HashTableArrayNode());
        }
        this._HashMap.get(key).Add(key, value);
    };
    HashTableArray.prototype.Update = function (key, value) {
        this._HashMap.get(key).Update(key, value);
    };
    HashTableArray.prototype.Get = function (key) {
        console.log('HTA');
        console.log(key);
        this._HashMap.get(key).Get(key);
    };
    return HashTableArray;
}());
exports.HashTableArray = HashTableArray;
//# sourceMappingURL=HashTableArray.js.map