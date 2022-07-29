import { TreeNode, array2treeNode } from "../../definition/treeNodeDefinition";

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  } else {
    let res = 0;
    const stack = [root];
    while (stack.length !== 0) {
      let curSize = stack.length;
      while (curSize) {
        const curNode = stack.shift();
        curNode?.left && stack.push(curNode.left);
        curNode?.right && stack.push(curNode.right);
        curSize--;
      }
      res++;
    }
    return res;
  }
}
let root = [3, 9, 20, null, null, 15, 7];
console.log(maxDepth(array2treeNode(root)));
