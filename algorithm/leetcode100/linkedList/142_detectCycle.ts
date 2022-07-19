import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";
function detectCycle(head: ListNode | null): ListNode | null {
  const set = new Set();
  let prev = head;
  while (prev !== null) {
    if (set.has(prev)) {
      return prev;
    } else {
      set.add(prev);
      prev = prev.next;
    }
  }
  return null;
}
