// 不需要动态规划
function maxProfit(prices: number[]): number {
  let minPrice = 10000;
  let l = prices.length;
  if (l === 1) {
    return 0;
  } else {
    let res = 0;
    for (let i = 0; i < l; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
      res = Math.max(prices[i] - minPrice, res);
    }
    return res;
  }
}
let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
