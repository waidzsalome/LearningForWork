/**
 * defineProperty
 */
function Archiver() {
  var value = null;
  var archive = [];
  Object.defineProperty(this, "num", {
    get: function () {
      console.log("执行了get操作");
      return value;
    },
    set: function (value) {
      console.log("执行了set操作");
      value = value;
      archive.push({ val: value });
    },
  });
  this.getArchive = function () {
    return archive;
  };
}
var arc = new Archiver();
arc.num;
arc.num = 11;
arc.num = 13;
console.log(arc.getArchive());

/**
 * proxy可以拦截13种操作
 */

/**
 * proxy代理一个对象字面量
 */
const target = {};
const handler = {
  set: (obj, prop, value) => {
    obj[prop] = 2 * value;
  },
  get: (obj, prop) => {
    return obj[prop] * 2;
  },
};
const p1 = new Proxy(target, handler);
p1.x = 1;
console.log(p1.x);
/**
 * 代理一个数组
 */
const p2 = new Proxy(["Adela", "Melyna", "Lesley"], {
  get: (obj, prop) => {
    if (prop === "length") return `Length is ${obj[prop]}`;
    return `hello,${obj[prop]}`;
  },
});
/**
 * 代理一个普通函数
 */
const foo = (a, b, c) => {
  return a + b + c;
};
const pFoo = new Proxy(foo, {
  // Proxy中的apply 三个参数
  apply: (target, thisArg, argsList) => {
    const grow = argsList.map((x) => x * 2);
    const inter = Reflect.apply(target, thisArg, grow);
    return inter * 3;
  },
});
console.log("pFoo", pFoo(1, 2, 3));
/**
 * 代理构造函数 暂时没懂
 */
class Bar {
  constructor(x) {
    this.x = x;
  }
  say() {
    console.log(`Hello, x = ${this.x}`);
  }
}
const PBar = new Proxy(Bar, {
  construct: (target, args) => {
    const obj = new Bar(args[0] * 2);
    return obj;
  },
});
const p3 = new PBar(1);
p3.say();
// 以下是代理模式的实际应用
/**
 * 缓存代理
 */
const createCacheProxy = (fn, cache = new Map()) => {
  return new Proxy(fn, {
    apply(target, context, args) {
      const argsProp = args.join(" ");
      if (cache.has(argsProp)) {
        console.log("using old data...");
        return cache.get(argsProp);
      }
      const result = fn(...args);
      cache.set(argsProp, result);
      return result;
    },
  });
};
const mult = (...args) => args.reduce((a, b) => a * b);
const multProxy = createCacheProxy(mult);
multProxy(2, 3, 4);
multProxy(2, 3, 4);
/**
 * 节流，因为闭包的原因 不适合react
 */
const handlerThrottle = () => console.log("Do something...");
const createThrottleProxy = (fn, rate) => {
  let lastClick = Date.now() - rate;
  console.log("outerLastClick");
  return new Proxy(fn, {
    apply(target, context, args) {
      if (Date.now() - lastClick >= rate) {
        fn(args);
        lastClick = Date.now();
      }
    },
  });
};
const handleThrottleProxy = createThrottleProxy(handlerThrottle, 2000);
document.getElementById("test").addEventListener("click", handleThrottleProxy);
/**
 * 图片懒加载
 */
/**
 * 数据响应式
 */
const onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value, property);
      return Reflect.set(target, property, value);
    },
  };
  return new Proxy(obj, handler);
};
let obj = { a: 1 };
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`);
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
  }
);
p.a = 2;
p.a;
