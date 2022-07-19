/**
 * 两数之和暴力
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums: number[], target: number): number[] {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
function twoSumHash(nums: number[], target: number): number[] {
  const l = nums.length;
  const map = new Map();
  map.set(nums[0], 0);
  for (let i = 1; i < l; i++) {
    const firstNum = target - nums[i];
    if (map.has(firstNum)) {
      return [map.get(firstNum), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
let num = [3, 3],
  target = 6;

console.log(twoSum(num, target));
console.log(twoSumHash(num, target));
