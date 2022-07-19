function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const l = nums.length;
  let res = 0;
  let product = [1];
  for (let i = 0; i < l; i++) {
    for (let j = i; j >= 0; j--) {
      if (j === 0) {
        product[0] = nums[i];
      } else {
        product[j] = nums[i] * product[j - 1];
      }
      if (product[j] < k) {
        res++;
      }
      console.log(j, product[j]);
    }
  }
  return res;
}
function numSubarrayProductLessThanKN(nums: number[], k: number): number {
  const l = nums.length;
  let res = 0;
  let i = 0;
  let prod = 1;
  for (let j = 0; j < l; j++) {
    prod *= nums[j];
    // 移动i指针
    while (i <= j && prod >= k) {
      prod /= nums[i];
      i++;
    }
    //计算数量
    res += j - i + 1;
  }
  return res;
}
let nums = [10, 5, 2, 6],
  k = 100;
// console.log(numSubarrayProductLessThanK(nums, k));
console.log(numSubarrayProductLessThanKN(nums, k));
