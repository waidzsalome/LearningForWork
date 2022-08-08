function BinarySearch(
  nums: number[],
  target: number,
  flag: "left" | "right"
): number {
  let low = 0,
    high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    // 被拆分的index
    let middle = Math.floor((low + high) / 2);
    if (
      (flag === "left" && nums[middle] >= target) ||
      (flag === "right" && nums[middle] > target)
    ) {
      high = middle - 1;
      ans = middle;
    } else {
      low = middle + 1;
    }
  }
  console.log(ans);
  return ans;
}
function searchRange(nums: number[], target: number): number[] {
  let left = BinarySearch(nums, target, "left"),
    right = BinarySearch(nums, target, "right") - 1;
  if (
    left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    return [left, right];
  }
  return [-1, -1];
}
let nums = [1],
  target = 1;
searchRange(nums, target);
