/**
 * Definition for singly-linked list.
 */
export class ListNode {
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  val: number;
  next: ListNode | null;
}
export const array2ListNode = (arr: number[]) => {
  const l = arr.length;
  const nodeList: ListNode = new ListNode(arr[0], null);
  let node = nodeList;
  for (let i = 1; i < l; i++) {
    node.next = new ListNode(arr[i], null);
    node = node.next;
  }
  return nodeList;
};
export const listNode2Array = (listNode: ListNode): number[] => {
  const resArr = [];
  let node: ListNode | null = listNode;
  // console.log(node);
  while (node?.val !== null && node?.val !== undefined) {
    resArr.push(node.val);
    node = node.next;
  }
  return resArr;
};
