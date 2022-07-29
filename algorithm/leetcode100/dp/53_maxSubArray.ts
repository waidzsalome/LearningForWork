// 动态规划，首先要写出动态转移方程
function maxSubArray(nums: number[]): number {
  const l = nums.length;
  if (l <= 1) {
    return nums[0];
  } else {
    const resArray = [nums[0]];
    for (let i = 1; i < l; i++) {
      resArray[i] = Math.max(resArray[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...resArray);
  }
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
