function majorityElement(nums: number[]): number {
  let major: number = -1,
    count = 0;
  nums.forEach((item) => {
    if (count === 0) {
      major = item;
      count = 1;
    } else {
      if (item === major) {
        count++;
      } else {
        count--;
      }
    }
  });
  return major;
}

let nums = [3, 3, 4];
console.log(majorityElement(nums));
