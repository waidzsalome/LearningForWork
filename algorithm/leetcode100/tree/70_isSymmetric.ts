import { TreeNode, array2treeNode } from "../../definition/treeNodeDefinition";
const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
};
function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root);
}
let root = [1, 2, 2, 3, 4, 4, 3];
console.log(isSymmetric(array2treeNode(root)));
