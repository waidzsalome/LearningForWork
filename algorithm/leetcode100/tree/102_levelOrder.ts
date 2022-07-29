import { TreeNode, array2treeNode } from "../../definition/treeNodeDefinition";

// 层序遍历stack
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  } else if (root.left === null && root.right === null && root.val !== null) {
    return [[root.val]];
  } else {
    let stack = [root];
    // let head = root;
    let list: number[][] = [];
    while (stack.length !== 0) {
      let curSize = stack.length;
      list.push([]);
      for (let i = 0; i < curSize; i++) {
        let curTop = stack.shift();
        if (curTop) {
          list[list.length - 1].push(curTop.val);
          if (curTop.left) {
            stack.push(curTop.left);
          }
          if (curTop.right) {
            stack.push(curTop.right);
          }
        }
      }
    }
    return list;
  }
}
let root = [3, 9, 20, null, null, 15, 7];
console.log(levelOrder(array2treeNode(root)));
