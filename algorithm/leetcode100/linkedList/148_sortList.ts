import {
  array2ListNode,
  ListNode,
  listNode2Array,
} from "../../definition/listDefinition";
// 合并有序列表
function merge(
  listA: ListNode | null,
  listB: ListNode | null
): ListNode | null {
  let resultNode: ListNode = new ListNode(-1);
  let head: ListNode = resultNode;
  resultNode = head;
  while (listA !== null && listB !== null) {
    if (listA.val >= listB.val) {
      head.next = listB;
      listB = listB.next;
    } else {
      head.next = listA;
      listA = listA.next;
    }
    head = head.next;
  }
  head.next = listA === null ? listB : listA;
  return resultNode.next;
}
function toSortList(
  head: ListNode | null,
  tail: ListNode | null
): ListNode | null {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow: ListNode | null = head,
    fast: ListNode | null = head;
  while (
    fast !== tail &&
    slow !== null &&
    fast !== null &&
    fast.next !== null
  ) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(toSortList(head, mid), toSortList(mid, tail));
}
function sortList(head: ListNode | null): ListNode | null {
  return toSortList(head, null);
}
let head = [-1, 5, 3, 4, 0];
// console.log(listNode2Array(sortList(array2ListNode(head)) as ListNode));
console.log(sortList(null));
