import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";
function createCycleListNode(listNode: ListNode, pos: number) {
  let i = 0;
  let tail: ListNode | null = listNode;
  let cycelNode;
  while (tail.next !== null) {
    if (i === pos) {
      cycelNode = tail;
    }
    i++;
    tail = tail.next;
  }
  if (cycelNode) {
    tail.next = cycelNode;
  }
  console.log(i, cycelNode);
  console.log(tail);
}
function hasCycle(head: ListNode | null): boolean {
  const set = new Set();
  let node = head;
  while (node !== null) {
    if (set.has(node)) {
      set.add(node);
      node = node.next;
    } else {
      return true;
    }
  }
  return false;
}
let head = [3, 2, 0, -4],
  pos = 1;
// console.log(createCycleListNode(array2ListNode(head), pos));
