let arr = [1, [2, [3, 4, 5]]];
//递归
function FlatternRecursion(arr) {
  let res = [];
  let l = res.length;
  for (let i = 0; i < l; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(FlatternRecursion(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(FlatternRecursion(arr));
// reduce
function FlatternReduce(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? FlatternReduce(next) : next);
  }, []);
}
console.log(FlatternReduce(arr));
// 扩展运算符
function FlatternSpread(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(FlatternSpread(arr));
// split toString
function FlatternSplit(arr) {}
//es6 flat
console.log(arr.flat(3));
//正则和JSON方法
