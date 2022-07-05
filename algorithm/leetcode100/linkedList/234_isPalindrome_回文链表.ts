import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  // 找到中间
  let slow: ListNode = head;
  let fast: ListNode | null = head;
  // n/2
  while (fast.next !== null && fast.next.next !== null && slow.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  console.log("链表中点", slow);
  //反转一次
  let tail: ListNode | null = null;
  let cur: ListNode | null = slow.next;
  console.log("需要被反转的", cur);
  while (cur !== null) {
    // 保存下一个节点
    let next: ListNode | null = cur.next;
    // 改变当前节点的next指向
    cur.next = tail;
    // 移动tail的位置
    tail = cur;
    // 移动cur的位置
    cur = next;
  }
  console.log("被反转过的", tail);
  slow = head;
  fast = tail;
  // 比较
  while (fast !== null && slow !== null && slow.next !== null) {
    if (slow.val !== fast.val) {
      return false;
    }
    // 移动head 和tail
    slow = slow.next;
    fast = fast.next;
  }
  return true;
}
let head = [1, 2, 3, 3, 1];
console.log(isPalindrome(array2ListNode(head)));
