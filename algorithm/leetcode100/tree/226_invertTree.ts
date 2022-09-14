import { TreeNode, array2treeNode } from "../../definition/treeNodeDefinition";
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  let right = invertTree(root.right);
  let left = invertTree(root.left);
  root.right = left;
  root.left = right;
  return root;
}
let root = [4, 2, 7, 1, 3, 6, 9];
console.log(invertTree(array2treeNode(root)));
