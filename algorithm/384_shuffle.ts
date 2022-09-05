class Solution {
  nums: number[];
  original: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.original = nums.slice();
  }

  reset(): number[] {
    this.nums = this.original.slice();
    return this.nums;
  }

  shuffle(): number[] {
    const length = this.nums.length;
    for (let i = 0; i < length; i++) {
      let j = parseInt((Math.random() * (length - i)).toString(), 10) + i;
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }
    return this.nums;
  }
}
let nums = [1, 2, 3];
const solution = new Solution(nums);
console.log(solution.shuffle());

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
