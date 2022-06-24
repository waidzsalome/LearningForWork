/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  val: number;
  next: ListNode | null;
}
const array2ListNode = (arr: number[]) => {
  const l = arr.length;
  const nodeList: ListNode = new ListNode(arr[0], null);
  let node = nodeList;
  for (let i = 1; i < l; i++) {
    node.next = new ListNode(arr[i], null);
    node = node.next;
  }
  return nodeList;
};
const listNode2Array = (listNode: ListNode): number[] => {
  const resArr = [];
  let node = listNode;
  while (node.next !== null) {
    resArr.push(node.val);
    node = node.next;
  }
  return resArr;
};
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const newL = new ListNode(0, null);
  let node = newL;
  while (l1.next || l2.next) {
    let keep = l1.val + l2.val / 10;
    node.val = l1.val + l2.val;
  }
  return newL;
}

let l1 = [9, 9, 5, 9, 8, 9, 9];
// console.log(array2ListNode(l1));
console.log(listNode2Array(array2ListNode(l1)));
