import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";

/**
 *
 * 分治 时间复杂度： 空间复杂度：
 * 这里js适合用迭代 不用递归
 */
// 两个链表比大小
function compare(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  console.log("被分治的listNode", l1, l2);
  if (l1 === null || l2 === null) {
    //l1或l2为空
    return l1 ? l1 : l2;
  } else {
    let resultNode: ListNode | null = new ListNode(-1);
    let head: ListNode | null = resultNode;
    resultNode = head;
    while (l1 !== null && l2 !== null) {
      if (l1.val >= l2.val) {
        head.next = l2;
        l2 = l2.next;
      } else {
        head.next = l1;
        l1 = l1.next;
      }
      head = head.next;
    }
    // 还有一个链表没合并完，直接指向未合并完的链表
    head.next = l1 === null ? l2 : l1;
    return resultNode.next;
  }
}
// 递归
function merge(lists: Array<ListNode | null>): ListNode | null {
  const { length } = lists;
  let orderedList: ListNode | null = null;
  if (length === 1) {
    return lists[0];
  }
  // 可以拆分
  if (length > 1) {
    let middle = Math.floor(length / 2);
    let left = merge(lists.slice(0, middle));
    let right = merge(lists.slice(middle, length));
    console.log("修改orderList的值");
    orderedList = compare(left, right);
  }
  console.log("orderedList", orderedList);
  return orderedList;
}
// 迭代
//合并函数
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  console.log(lists);
  // 传入参数ok
  if (lists.length === 0 || (lists.length === 1 && lists[1] === null)) {
    // 没触发到
    return null;
  } else {
    // 分治
    return merge(lists);
  }
}
let lists = [[]];
console.log(
  // listNode2Array(
  //   mergeKLists(lists.map((item) => array2ListNode(item))) as ListNode
  // )
  mergeKLists([null])
);
