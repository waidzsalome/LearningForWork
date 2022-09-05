// 存储计算结果
function climbStairs(n: number): number {
  return climb(n, {});
}
function climb(n: number, map: { [key: number]: number } = {}): number {
  if (map[n] > 1) {
    return map[n];
  } else {
    if (n === 1) {
      map[1] = 1;
      return 1;
    } else if (n === 2) {
      map[2] = 2;
      return 2;
    } else {
      map[n] = climb(n - 1, map) + climb(n - 2, map);
      return climb(n - 1, map) + climb(n - 2, map);
    }
  }
}
// 滚动数组
function climbStairsArray(n: number): number {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 0; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}

console.log(climbStairsArray(6));
