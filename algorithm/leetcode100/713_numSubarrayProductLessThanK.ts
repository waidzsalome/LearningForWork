function plus(nums: number[], startIndex: number, endIndex: number): number {
  // console.log("plus", startIndex, endIndex);
  let res = 1;
  for (let i = startIndex; i <= endIndex; i++) {
    res = res * nums[i];
  }
  // console.log("res", res);
  return res;
}
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const l = nums.length;
  let res = 0;
  const map = new Map()
  for (let i = 0; i < l; i++) {
    // 本身小于+1
    if (nums[i] < k) {
      res++;
    }
    if(map.has(`${},${}`))
  }
  return res;
}
let nums = [10, 5, 2, 6],
  k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
