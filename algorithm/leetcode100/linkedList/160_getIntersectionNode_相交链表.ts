import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../../definition/listDefinition";
/**
 * 双指针法
 * @param headA
 * @param headB
 * @returns newList
 * 原题目中判断headA和headB相等可以通过指针地址是否相等判断，本地无法模拟
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }
  let ponitA: ListNode | null = headA;
  let ponitB: ListNode | null = headB;
  while (ponitA || ponitB) {
    if (ponitA === ponitB) {
      console.log("-----------A,B相同", ponitA, ponitB);
      return ponitA;
    }
    if (ponitA === null) {
      ponitA = headB;
    } else if (ponitB === null) {
      ponitB = headA;
    } else {
      ponitA = ponitA.next;
      ponitB = ponitB.next;
    }
  }
  return null;
}

let listA = [4, 1, 8, 4, 5],
  listB = [5, 6, 1, 8, 4, 5];
console.log(
  listNode2Array(
    getIntersectionNode(
      array2ListNode(listA),
      array2ListNode(listB)
    ) as ListNode
  )
);
/**
 * 哈希集合法
 * @param headA
 * @param headB
 * @returns newList
 */
function getIntersectionNodeSet(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let set = new Set();
  let temp: ListNode | null = headA;
  while (temp !== null) {
    set.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (set.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
}

console.log(
  listNode2Array(
    getIntersectionNodeSet(
      array2ListNode(listA),
      array2ListNode(listB)
    ) as ListNode
  )
);
