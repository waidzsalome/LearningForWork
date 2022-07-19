// 双向链表
export class ListNode {
  val: number;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(val?: number, prev?: ListNode, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}
