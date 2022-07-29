import { TreeNode, array2treeNode } from "../../definition/treeNodeDefinition";
const inOrder = (root: TreeNode | null, list: number[]): void => {
  if (root !== null) {
    inOrder(root.left, list);
    list.push(root.val);
    inOrder(root.right, list);
  }
};
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  } else if (root.left === null && root.right === null && root.val !== null) {
    return [root.val];
  } else {
    let list: number[] = [];
    inOrder(root, list);
    return list;
  }
}
let root = [1, 2, 3];
console.log(inorderTraversal(array2treeNode(root)));
