import {
  ListNode,
  array2ListNode,
  listNode2Array,
} from "../definition/listDefinition";
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  console.log(headA, headB);
  if (!headA || !headB) {
    return null;
  }
  let ponitA: ListNode | null = headA;
  let ponitB: ListNode | null = headB;
  console.log("ponitA,ponitB", ponitA, ponitB);
  while (ponitA || ponitB) {
    console.log(ponitA, ponitB);
    if (ponitA === null) {
      console.log("a指针是null");
      console.log(ponitA, headB);
      ponitA = headB;
      console.log(ponitA);
    } else if (ponitB === null) {
      console.log("b指针是null");
      ponitB = headA;
    } else {
      console.log("a,b指针都不是null");
      console.log(ponitA, ponitB);
      ponitA = ponitA.next;
      ponitB = ponitB.next;
      console.log(ponitA, ponitB);
    }
    console.log("ponitA B是否相等", ponitA !== ponitB);
    if (ponitA === ponitB) {
      console.log("-----------A,B相同");
      return ponitA;
    }
  }
  return null;
}

let listA = [4, 1, 8, 4, 5],
  listB = [5, 6, 1, 8, 4, 5];
let test1 = [1, 2, 3];
let test2 = [1, 2, 3];
// console.log(
//   listNode2Array(
//     getIntersectionNode(
//       array2ListNode(listA),
//       array2ListNode(listB)
//     ) as ListNode
//   )
// );
let a = array2ListNode(test1);
let b = array2ListNode(test2);
console.log(a, b, a === b);
