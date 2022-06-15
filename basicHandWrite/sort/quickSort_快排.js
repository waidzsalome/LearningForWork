/**
 * quickSort O(nlog(n))
 */
// 交换
const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};
// 比较函数
const compareFn = (a, b) => a < b;
// 划分函数
const partition = (array, left, right, comFn) => {
  // 主元
  const povit = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    // array[i] > povit
    while (comFn(array[i], povit)) {
      i++;
    }
    // array[j] < povit
    while (comFn(povit, array[j])) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  // 返回左指针的索引
  return i;
};
// 反复划分
const quick = (array, left, right, comFn) => {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, comFn);
    if (left < index - 1) {
      quick(array, left, index - 1, comFn);
    }
    if (index < right) {
      quick(array, index, right, comFn);
    }
  }
  return array;
};
// 递归
const quickSort = (array, comFn) => {
  console.log("递归");
  return quick(array, 0, array.length - 1, comFn);
};
const unsortarr = [8, 7, 6, 5, 4, 3, 2, 1];

console.log("结果", quickSort(unsortarr, compareFn));
