import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let pointA = head,
    pointB = head;
  let prev: ListNode | null = null;
  let i = 1;
  while (pointB !== null && pointA !== null) {
    i++;
    if (i - 1 > n) {
      prev = pointA;
      pointA = pointA.next;
      pointB = pointB.next;
    } else {
      pointB = pointB.next;
    }
  }
  console.log(prev, pointA);
  if (prev === null && head !== null) {
    head = head.next;
  } else if (prev !== null && prev.next !== null) {
    let tmp = prev.next;
    prev.next = tmp.next;
  }
  console.log(listNode2Array(head as ListNode));
  return head;
}
let head = [1, 2],
  n = 2;
console.log(
  listNode2Array(removeNthFromEnd(array2ListNode(head), n) as ListNode)
);
