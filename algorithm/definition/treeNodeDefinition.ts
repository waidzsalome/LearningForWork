export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// 先序遍历
// 后序遍历
// 中序遍历
// 普通二叉树的插入，不区分大小，适配leetcode，广度优先插入
export const array2treeNode = (
  nodeArr: Array<number | null>
): TreeNode | null => {
  let l = nodeArr.length;
  let newRoot: TreeNode = new TreeNode(nodeArr[0] as number);
  let point: TreeNode = newRoot;
  const stack: TreeNode[] = [];
  stack.push(point);
  let index = 1;
  while (index < l) {
    let cur = stack.shift();
    if (cur !== undefined) {
      let left = nodeArr[index++];
      if (left === null) {
        cur.left = null;
      } else {
        cur.left = new TreeNode(left);
        stack.push(cur.left);
      }
      let right = nodeArr[index++];
      if (right === null) {
        cur.right = null;
      } else {
        cur.right = new TreeNode(right);
        stack.push(cur.right);
      }
    }
  }
  return newRoot;
};
export const treeNode2array = () => {};
