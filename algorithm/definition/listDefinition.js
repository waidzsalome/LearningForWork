"use strict";
exports.__esModule = true;
exports.listNode2Array = exports.array2ListNode = exports.ListNode = void 0;
/**
 * Definition for singly-linked list.
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var array2ListNode = function (arr) {
    var l = arr.length;
    var nodeList = new ListNode(arr[0], null);
    var node = nodeList;
    for (var i = 1; i < l; i++) {
        node.next = new ListNode(arr[i], null);
        node = node.next;
    }
    return nodeList;
};
exports.array2ListNode = array2ListNode;
var listNode2Array = function (listNode) {
    var resArr = [];
    var node = listNode;
    // console.log(node);
    while ((node === null || node === void 0 ? void 0 : node.val) !== null && (node === null || node === void 0 ? void 0 : node.val) !== undefined) {
        resArr.push(node.val);
        node = node.next;
    }
    return resArr;
};
exports.listNode2Array = listNode2Array;
