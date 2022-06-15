/**
 * eg. 一个foo函数，返回 首次 调用时的Date对象
 */

/**
 * 普通方法 全局污染、二次判断
 */

var t;
function fooNormal() {
  if (t) return t;
  t = new Date();
  return t;
}
/**
 * 闭包 二次判断
 */

var fooClosure = function () {
  var t;
  return function () {
    if (t) return t;
    t = new Date();
    return t;
  };
};

/**
 * 函数对象 二次判断
 */
var fooObj = function () {
  if (fooObj.t) return fooObj.t;
  fooObj.t = new Date();
  return fooObj.t;
};

/**
 * 惰性函数 重写函数 浏览器中可以运行出效果 需要执行一次才能重写
 * 原理： foo的指向发生改变
 */
var fooLazy = function () {
  var t = new Date();
  fooLazy = function () {
    return t;
  };
  return fooLazy();
};
console.log(fooLazy());

/**
 * 惰性函数实际应用 结合立即执行函数 立即执行之后函数就会被改变
 */
/**
 * 惰性函数在vue的应用
 */
const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();
