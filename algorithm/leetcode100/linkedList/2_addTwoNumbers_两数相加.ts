import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const newL = new ListNode(0, null);
  let node = newL;
  let res = 0,
    l1Node: ListNode | null,
    l2Node: ListNode | null;
  l1Node = l1 ? l1 : new ListNode(0, null);
  l2Node = l2 ? l2 : new ListNode(0, null);
  // 没有next就说明到最后一个了
  while (
    (l1Node?.val !== null && l1Node?.val !== undefined) ||
    (l2Node?.val !== null && l2Node?.val !== undefined)
  ) {
    if (
      (l1Node?.val == null || l1Node === null) &&
      l2Node?.val !== null &&
      l2Node?.val !== undefined
    ) {
      console.log("l1遍历完了");
      // l1遍历完了
      res = res + l2Node?.val;
      l2Node = l2Node?.next;
    } else if (
      (l2Node?.val === null || l2Node === null) &&
      l1Node?.val !== null &&
      l1Node?.val !== undefined
    ) {
      // l2遍历完了
      console.log("l2遍历完了");
      res = res + l1Node?.val;
      l1Node = l1Node?.next;
    } else if (
      l2Node?.val !== null &&
      l2Node?.val !== undefined &&
      l1Node?.val !== null &&
      l1Node?.val !== undefined
    ) {
      console.log("同时");
      res = l1Node?.val + l2Node?.val + res;
      l1Node = l1Node?.next;
      l2Node = l2Node?.next;
    }
    node.val = res % 10;
    console.log("node.val", node.val);
    res = Math.floor(res / 10);
    console.log("test", l1Node, l2Node, l1Node !== null && l2Node !== null);
    if (l1Node !== null || l2Node !== null) {
      console.log("挪动指针");
      // 不是末尾才挪动指针
      node.next = new ListNode(0, null);
      node = node.next;
    }
  }
  console.log(newL, node);
  if (res > 0) {
    node.next = new ListNode(1, null);
  }
  console.log(newL);
  return newL;
}
// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];
let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
// let l1 = [0];
// let l2 = [1];
// console.log(array2ListNode(l1));
// console.log(listNosde2Array(array2ListNode(l1)));
console.log(
  "res",
  listNode2Array(
    addTwoNumbers(array2ListNode(l1), array2ListNode(l2)) as ListNode
  )
);
// let test = [0, 1, 2, 3, 4];
let test = [0];
console.log(array2ListNode(test));
// console.log(listNode2Array(array2ListNode(test)));
