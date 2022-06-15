/**
 * 例子
 */

/**
 * 一种奇怪的是实现方式，只能实现加法
 */
let curryAdd = () => {
  let result = [];
  let add = (...args) => {
    result = result.concat(args);
    return add;
  };
  add.valueOf = add.toString = () => {
    return result.reduce((pre, cur) => pre + cur, 0);
  };
  return add;
};
let add = curryAdd();
console.log(+add(1)(2));
/**
 * 通用的实现方法
 */

const curry = (fn, curryArgs) => {
  console.log("curryArgs", curryArgs);
  return function () {
    let args = [].slice.call(arguments);
    if (curryArgs !== undefined) {
      args = args.concat(curryArgs);
    }
    console.log("args", args);
    console.log("fn.length", fn.length);
    if (args.length < fn.length) {
      return curry(fn, args);
    }
    return fn.apply(null, args);
  };
};
function sum(a, b, c, d, e, f, g, h) {
  console.log(a + b + c + d + e + f + g + h);
}
// const fn = curry(sum, 67);
// fn(3)(4);
// fn(2)(3)(4);

/**
 * 柯里化ES6实现
 */
const curryES6 = (fn) => {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      // return (...rest) => curriedFn(...args.concat(Array.from(rest)));
      // 这里不需要Array.from:创建类数组的浅拷贝
      console.log(args);
      return (...rest) => curriedFn(...args.concat(rest));
    }
    return fn(...args);
  };
};
const fn2 = curryES6(sum);
// fn2(3)(7)(9);
fn2(1, 2)(3, 4)(5, 6)(7, 8);
/**
 *  curry with placeholder
 */

function curryWithPlaceholder(func) {
  return function curried(...args) {
    console.log(args);

    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curryWithPlaceholder.placeholder);
    console.log(complete);
    // 这里绑定的this 还是函数执行时候的this 所以没必要绑定
    // if (complete) return func.apply(this, args);
    if (complete) return func(...args);
    return function (...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map((arg) =>
        arg === curryWithPlaceholder.placeholder && newArgs.length
          ? newArgs.shift()
          : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

curryWithPlaceholder.placeholder = Symbol();

function MyCurriedWithPlaceholder(fn) {
  return function curried(...args) {
    if (
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(MyCurriedWithPlaceholder.placeholder)
    ) {
      return fn(...args);
    }
    return (...rest) =>
      curried(
        ...args.map((arg) =>
          arg === MyCurriedWithPlaceholder.placeholder && rest.length
            ? rest.shift()
            : arg
        ),
        ...rest
      );
  };
}
MyCurriedWithPlaceholder.placeholder = Symbol();

const join = (a, b, c) => {
  console.log(a, b, c);
  return `${a}_${b}_${c}`;
};

const curriedJoin = curryWithPlaceholder(join);
// const _ = curryWithPlaceholder.placeholder;
// console.log(curriedJoin(_, _, _)(1)(_, 3)(2));
// curriedJoin(_, _, _)(1)(_, 3)(2);
const myCurriedJoin = MyCurriedWithPlaceholder(join);
const _ = MyCurriedWithPlaceholder.placeholder;
console.log(myCurriedJoin(_, _, _)(1)(_, 3)(2));
