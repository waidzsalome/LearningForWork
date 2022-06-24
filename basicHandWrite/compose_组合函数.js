/**
 * 将复杂过程分解 抽象复杂的函数位颗粒度更小，功能单一的函数；
 *
 * eg
 */
const step1 = (val) => val + 1;
const step2 = (val) => val + 2;
const step3 = (val) => val + 3;
/**
 * 借助reduceRight
 * reduceRight方法
 */
function composeReduceRight(...args) {
  return (result) => {
    console.log(result);
    return args.reduceRight((result, fn) => {
      console.log(result);
      return fn(result);
    }, result);
  };
}
const composeRes_1 = composeReduceRight(step1, step2, step3);
console.log(composeRes_1(1));
/**
 * pipe方法
 */
function pipe(...args) {
  return (result) => {
    return args.reduce((result, fn) => {
      return fn(result);
    }, result);
  };
}
/**
 * point-free 没有形参的编程方式
 */
/**
 * 柯里化实现
 */

/**
 * 部分应用
 */
