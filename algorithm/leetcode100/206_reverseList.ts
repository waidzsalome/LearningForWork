import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../definition/listDefinition";
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  // 第一个节点
  let prev = null;
  // 当前节点
  let cur: ListNode | null = head;
  // 临时变量

  while (cur !== null) {
    let next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
let head = [1, 2, 3, 4, 5];
console.log(listNode2Array(reverseList(array2ListNode(head)) as ListNode));
