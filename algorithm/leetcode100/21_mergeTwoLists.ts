import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../definition/listDefinition";
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  } else if (list1 !== null && list2 === null) {
    return list1;
  } else if (list2 !== null && list1 === null) {
    return list2;
  } else if (list1 !== null && list2 !== null) {
    let l1: ListNode | null = list1;
    let l2: ListNode | null = list2;
    let newL = new ListNode(0, null);
    let node = newL;
    // 合并
    while (l1 !== null || l2 !== null) {
      if (
        (l1 === null ||
          l1.val === null ||
          l1.val === undefined ||
          l1.next === undefined) &&
        l2
      ) {
        //l1遍历完了
        node.val = l2.val;
        node.next = l2.next;
        return newL;
      } else if (
        (l2 === null ||
          l2.val === null ||
          l2.val === undefined ||
          l2.next === undefined) &&
        l1
      ) {
        // l2遍历完了
        node.val = l1.val;
        node.next = l1.next;
        return newL;
      } else if (
        l1 &&
        l2 &&
        l1?.val !== null &&
        l2?.val !== null &&
        l1.val !== undefined &&
        l2.val !== undefined &&
        l1?.val <= l2?.val
      ) {
        // 链表1的值小
        node.val = l1.val;
        node.next = new ListNode(0, null);
        // if (l1.next || l2.next) {
        // console.log("l1<=l2指针变动");
        node = node.next;
        // }
        l1 = l1.next;
      } else if (
        l1 &&
        l2 &&
        l1?.val !== null &&
        l2?.val !== null &&
        l1.val !== undefined &&
        l2.val !== undefined &&
        l1?.val > l2?.val
      ) {
        // 链表2的值小
        node.val = l2.val;
        node.next = new ListNode(0, null);
        // if (l1.next || l2.next) {
        // console.log("l>l2指针变动");
        node = node.next;
        // }
        l2 = l2.next;
      }
    }
    return newL;
  } else {
    return null;
  }
}
// let l1 = [1, 2, 4],
//   l2 = [1, 3, 4];
let l1 = [-9, 3],
  l2 = [5, 7];
console.log(
  listNode2Array(
    mergeTwoLists(array2ListNode(l1), array2ListNode(l2)) as ListNode
  )
);
