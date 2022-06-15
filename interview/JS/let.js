/**
 * let var const 的区别
 */

function Test(status) {
  if (status) {
    var value = "a";
  } else {
    console.log(value);
  }
  console.log(value);
}
/**相当于 */

function Test2(status) {
  var value;
  if (status) {
    value = "a";
  } else {
    console.log(value);
  }
  console.log(value);
}
Test(false);

/**
 * 变量提升
 */
var value;
if (true) {
  value = "a";
}
console.log(value);
var value2;
if (false) {
  value2 = "a";
}
console.log(value2);

/**
 * 循环中的块级作用域
 */

var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log(i);
  };
}
funcs[0](); // 3

/**
 * 按顺序打印 1\2\3
 * 解决方法 1
 */
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = (function (i) {
    return function () {
      console.log(i);
    };
  })(i);
}
funcs[0](); // 0

/**
 * 解决方法 2
 */
