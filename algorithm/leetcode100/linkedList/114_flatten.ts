import { TreeNode, array2treeNode } from "../../definition/treeNodeDefinition";
function flatten(root: TreeNode | null): void {
  const list: TreeNode[] = [];
  if (root !== null) {
    preorderTraversal(root, list);
    const size = list.length;
    for (let i = 1; i < size; i++) {
      let prev = list[i - 1],
        curr = list[i];
      prev.left = null;
      prev.right = curr;
    }
    console.log(root);
  }
}
function preorderTraversal(node: TreeNode | null, list: TreeNode[]): void {
  if (node !== null) {
    list.push(node);
    preorderTraversal(node.left, list);
    preorderTraversal(node.right, list);
  }
}

let root = [1, 2, 5, 3, 4, null, 6];
console.log(flatten(array2treeNode(root)));
