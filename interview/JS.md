# ES6

### let const var 的区别

- var 会作用域提升。全局或者局部作用域中使用 var 变量，都会被提升到该作用域的最顶部。var 在全局作用域中声明的变量会挂载到 window 对象上（创建一个新的全局变量作为全局对象的属性）。
- let 没有变量提升，只作用于当前作用域；不能重复声明；
- const 声明常量，一旦定义就不能修改；必须初始化值；const 不能修改指针，可以修改值，例如修改一个对象中的某个属性值；
- 总结来说，let 和 const 的特点
  - 不会被提升
  - 重复声明报错
  - 不绑定全局作用域
- 暂时性死区：JS 引擎在扫描代码时发现变量声明时，遇到 var 会将他们提升到当前作用域的顶端，如果遇到 let 和 const 会将声明放进 TDZ，如果访问 TDZ 中的变量就会抛出错误，只有执行完 TDZ 的变量后才会将它移出，这种机制只在当前作用域生效。

#### 什么是块级作用域

- 块级作用域存在于 函数内部 块中（字符{ 和 }之间）
- if 不构成块级作用域

#### 暂时性死区的原理是什么？为什么提前访问 let 定义的变量会抛错？讲讲其中的过程？

- 程序控制流程在新的作用域进行实例话的时候，次作用域中 let/const 会先被创建出来，但是未进行词法绑定；所以不能被访问
- 在变量创建到词法绑定的这个过程被称作暂时性死区

#### 循环中的块级作用域

- let 在循环在的声明内部的行为是标准中单独定义的
- 使用`for(let i = 0; i < 3; i++)`中，会在圆括号内建立一个隐藏的作用域

### const 对象的属性可以修改吗

- 可以，const 只是不允许修改值的绑定，值是可以修改的

### 箭头函数和普通函数的区别

- this 指向
  - 箭头函数没有 prototype，所以箭头函数本身没有 this
  - 箭头函数的 this 指向它定义时外层的第一个普通函数；如果外层没有普通函数，严格模式和非严格模式都指向 window；
    - 普通函数的默认绑定规则：非严格模式下指向 window，严格模式下指向 undefined
  - 箭头函数本身的 this 不能改变，但可以改变它继承的对象的 this 指向；
- arguments
  - 箭头函数的 this 指向全局，使用 arguments 会报错；指向普通函数时，argumens 继承于该普通函数
- new
  - 箭头函数使用 new 会报错，因为箭头函数没有 construtor;
  - 箭头函数也不支持 new.target
- 其他
  - 箭头参数不支持重命名，普通函数可以重名名
  - 更优雅

### 如果 new 一个箭头函数会怎么样

- 会报错，因为箭头函数没有 construtor

### 箭头函数的 this 指向哪里

- 箭头函数的 this 指向定义时所在的外层第一个普通函数，跟使用位置没有关系。
- 被继承的普通函数的 this 指向改变，箭头函数的 this 指向会跟着改变

#### 怎么修改箭头函数 this 的指向

- 修改被继承的普通函数的 this 指向

```javascript
bar.call(barObj);
```

### 如何获取箭头函数的不定量参数

- rest 参数（优点如下）
  - 箭头函数和普通函数都可以使用
  - 更加灵活，接收参数的数量完全自定义
  - 可读性更好
  - rest 是真正的数组，可以使用数组 API
  - ps：函数的 length 属性不包括 rest 参数

### 扩展运算符的作用及使用场景

- 作用：展开可迭代的对象

- 拷贝数组对象
  - 严格来讲，扩展运算符不执行深拷贝；对于一维数组是深拷贝；
- 合并数组
- 参数传递
- 与 set 一起去重
- 字符串转字符数组
- nodeList 转数组
- 解构变量

### proxy 可以实现什么功能

- 自定义对象的操作
- 常用于数据的监听，比如对象的 set、get 操作

### 对对象和数组的结构的理解

- 数组：以元素位置作为匹配条件
- 对象：以属性名称为匹配条件

### 如何提取高度嵌套的对象里的指定属性

```javascript
const school = {
  classes: {
    stu: {
      name: "bob",
      age: 24,
    },
  },
};
const {
  classes: {
    stu: { name, age },
  },
} = school;
```

### 对于 rest 参数的理解

把函数的多个入参收敛到一个数组；用在获取函数的多余参数，或者处理参数个数不确定的情况

### ES6 中模版语法与字符串处理

- 模版
- 字符串处理: includes startsWith endsWith repeat

# 原型

### 对原型、原型链的理解

### 原型修改、重写

### 原型链指向

### 原型链的终点是什么？如何打印出原型链的终点

### 如何获得对象非原型链上的属性

# 异步

### 异步编程的实现方式

### setTimeout Promise Async/Await 的区别

### 对 Promise 的理解

### Promise 的基本用法

### Promise 解决了什么问题

### Promise.all 和 Promise.race 的区别和使用场景

### 对 async/await 的理解

### await 到底在等什么

### async/await 的优势

### async/await 对比 Promise 的优势

### async/await 如何捕获异常

### 并发与并行的区别

### 什么是回调函数？回调函数有什么缺点？如何解决回调地狱的问题？

### setTimeout、setInterval、requestAnimationFrame 各有什么特点

# 执行上下文

### 对闭包的理解

### 对作用域、作用域链的理解

### 对执行上下文的理解

# this/call/apply/bind

### 对 this 对象的理解

### call 和 apply 的区别

### 实现 call apply 及 bind 函数

# 面向对象

### 对象的创建方式有哪些

### 对象继承的方式有哪些

# 垃圾回收与内存泄露

### 浏览器的垃圾回收机制

### 哪些情况回导致内存泄露

# Javascript 基础

### new 操作符的实现原理

### map 和 Object 的区别

### map 和 weakMap 的区别

### JavaScript 有哪些内置的对象

### 常用的正则表达式有哪些

### 对 JSON 的理解

### JavaScript 脚本延迟家在的方法有哪些

### Javascript 类数组对象的定义

### 数组有哪些原生方法

### unicode、UTF-8、UTF-16、UTF-32 的区别

### 常见的位运算符有哪些？其计算规则是什么？

### 为什么函数的 arguements 参数是类数组而不是数组？如何遍历类数组？

### 什么是 DOM 和 BOM

### 对类数组对象的理解，如何转化为数组？

### escape、encodeURI、encodeURIComponent 的区别

### 对 AJAX 的理解、实现一个 AJAX 的请求

### JavaScript 为什么要进行变量提升、它导致了什么问题

### 什么是尾调用、使用尾调用有什么好处？

### ES6 模块与 CommonJS 模块有什么异同

### 常见的 DOM 操作有哪些？

### use strict 是什么意思？使用它区别是什么？

### 如何判断一个对象是否属于某个类

### 强类型语言和弱类型语言的区别

### 解释型语言和编译型语言的区别

### for in 和 for of 的区别

### 如何使用 for of 遍历对象

### ajax axios fetch 的区别

### 数组遍历方法有哪些

### forEach 和 map 方法有什么区别

# 数据类型

### JavaScript 有些哪些数据类型、它们的区别？

- Undefined Null Boolean Number String Object Symbol BigInt
- 栈：原始数据类型(undefined null boolean number string)：占据空间小、大小固定
  - 数据结构中：先进后出
  - 操作系统：栈区内内存由编译器自动分配释放，存放函数的参数值，局部变量的值。操作方式类似于数据结构中的栈；
- 堆：引用数据类型(对象、数组、函数)：占据空间大、大小不固定；引用数据类型在栈中存储了指针；该指针指向该实体中的起始地址，当解释器寻找引用值，会首先检索其在栈中的地址，取得地址后从堆中获得实体；
  - 数据结构：优先队列
  - 操作系统：堆区内存由开发者分配释放，若开发者不释放，程序结束时由垃圾回收机制回收；

### 数据类型检测的方式有哪些

- typeof
  - 数组、对象、null 都会被判断为 object
- instanceof
  - 内部运行机制是判断在其原型链中能否找到该类型的原型；
  - 只能判断引用数据类型，不能判断基本数据类型；
- construtor
  - 判断数据的类型
  ```javascript
  function Fn() {}
  Fn.prototype = new Array();
  let f = new Fn();
  console.log(f.constructor === fn); //false
  console.log(f.constructor === Array); // true
  // --------
  function Fn() {}
  let f = new Fn();
  console.log(f.constructor === fn); // true
  ```
  - 对象实例通过 constructor 对象访问他的构造函数
- Object.prototype.toString.call()
  - 使用 Object 对象的原型方法 toString 判断数据类型
  - `obj.string()`不能得到其对象类型，只能将 obj 转换为字符串

### 判断数组的方式有哪些

- Object.prototype.toString.call()
  - slice 第二个参数 endIndex 负数相当于`str.length + endIndex`

```javascript
Object.prototype.toString.call(obj).slice(8, -1);
```

- 通过原型链

```javascript
obj.__prote__ === Array.prototype;
```

- isArray

```javascript
Array.isArray(obj);
```

- instanceof

```javascript
obj instanceof Array;
```

- Array.prototype.isPrototypeOf

```javascript
Array.prototype.isPrototypeOf(obj);
```

### null undefined 区别

- undefined 表示未定义，null 表示空对象
- undefined 不是保留字，可以用`void 0`获得安全的 undefined 值

### typeof null 的结果是什么？为什么

- 结果是 Object
- 原因：在 JS 的第一个版本中，所有值都存在 32 位的单元中；每个单元包含一个类型标签；类型标签存储在每个单元的低位

```js
000 Object
1 int
010 double
100 string
110 boolean
```

- 如果低位是 1，则类型标签长度只有一位；如果低位是 0，则类型标签标志位的长度 3 位；为存储其他 4 种数据类型提供了额外的的两个 bit 长度；
- 两种特殊的数据类型
  - undefined
  - null 的值是机器码 NULL 指针（null 指针的值全是 0）；null 的类型标签也是 000，和 Object 一样，所以会被判定为 Object

### instanceof 操作符的实现原理及实现

- 见 myInstanceof.js

### 为什么 0.1+0.2!==0.3 如何让其相等

#### 为什么？

- 双精度存储展 64 位
  - sign 区分正负数 1 位
  - 指数 11 位
  - 小数 52 位
- 加上科学记数法整数部分的 1，有 53 位有效数字
- 0.1 的二进制:0.00011001100...101（1100 循环）
- 0.2 的二进制:0.00110011001...101 (1100 循环)
- 相加的时 0.2 的二进制后补零得到结果 0.0100110011001100110011001100110011001100110011001100111

#### 怎么相等

- 设置一个误差范围，JS 提供了`Number.EPSILON`属性，它的值是 2^-52

```javascript
function numberepsilon(arg1, arg2) {
  return Math.abs(arg1 - arg2) < Number.EPSILON;
}
```

### 如何获取安全的 undefined 值

- void 0

### typeof NaN 结果是什么

- number
- NaN 是一个特殊值，唯一一个非自反的值即,`NaN === NaN`的结果为 false

### isNaN 和 Number.isNaN 函数的区别

- `isNaN` 不能被转换成数值的值都会返回 true
- `Number.isNaN` 首先判断是否为数字，再判断是否为 NaN；使用这个判断是否是数字更准确

### == 操作符的强制类型转换规则

如果对比双方类型不同，就会强制类型转换，以 x、y 为例

- 判断类型是否相同，相同的话比较两者大小；类型不同，比较大小；
- 是否在比较 null 和 undefined，是的话返回 true；
- 判断是否为 string 和 number，是的话字符串转换为 number；
- 判断其中一方是否为 boolean，是的话 boolean 转换成 number；

```javascript
"1" == true;
"1" == 1;
1 == 1;
```

- 判断一方是否为 Object 且另一方为 string、number、symbol

```javascript
"1" == { name: "js" };
"1" == "[object Object]";
```

### 其他值到字符串的规则转换

- null -> 'null' undefined -> undefined
- Boolean: true->'true' false-> 'false'
- Number 直接转换 极大极小用指数形式
- Symbol 直接转换 只允许强制类型转换

```javascript
let s = Symbol(1);
String(s); // 'Symbol 1'
```

- 普通对象 调用 Object.prototype.toString()来返回内部属性[[class]]的值；如果自定义 toString()方法，字符串化时就会调用该方法；

### 其他值到数字值的规则转换

- undefined -> NaN null -> 0
- Boolean: true -> 1 false -> 0
- String 类型的转换相当于`Number()` 包含非数值 NaN，空字符串 0；
- Symbol 类型的值不能转换为数字
- 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，再遵循上面的规则
  - toPrimitive 作为一个属性表示"一个方法，该方法将对象转换为相应的原始值。由 ToPrimitive 抽象操作使用" 会首先检查是否有 valueOf 方法，如果有并且返回基本类型值；如果没有就使用 toString()的返回值；如果都没有 TypeError；

```javascript
class Bar {
  constructor() {
    this[Symbol.toPrimitive] = function (hint) {
      switch (hint) {
        case "number":
          return 3;
        case "string":
          return "string bar";
        case "default":
        default:
          return "default bar";
      }
    };
  }
}
let bar = new Bar();
// 这里 只有+可以被用作字符串拼接
console.log(3 + bar); // "3default bar"
console.log(3 - bar); // 0
console.log(String(bar)); // "string bar"
```

### 其他值到布尔类型值的转换规则

- undefined null false +0 -0 NaN ''都是 false

### || 和 && 操作符的返回值

- || 第一个值 true，返回第一个值；第一个值 false，返回第二个值
- && 第一个值 true 返回第二个值，第一个值 false 返回第一个值
- || 和 && 返回的都是值而不是操作结果

### Object.is() 与比较操作符'===' '=='的区别

- Object.is() 判断两个值是否为同一个

```javascript
Object.is(+0, -0); // false
Objecet.is(NaN, NaN); //true
```

### 什么 javascript 中的包装类型

- js 基本类型没有属性和方法，为了便于操作基本类型的值，在调用基本类型的属性或方法时，js 会在后台隐式地将基本类型的值转换为对象

```js
let a = 'abc
Object(a) // String {'abc}
```

- `valueof` 方法将包装类型倒转成基本类型

```js
var a = "abc";
var b = Object(a);
var c = b.valueOf(); // 'abc'
```

- 下面代码触发不到 if 内的；false 被包装成包装类型后就成了对象，所以其非值为 false

```js
var a = new Boolean(false);
if (!a) {
  console.log("ops"); // never returns
}
```

### JavaScript 中如何进行隐式类型转换

- `ToPrimitive(input [, PreferredType])` 用来把 input 转换成原始值；
  - 如果没有传入 PreferredType，则 hint 是 default
  - PreferredType 是为 String 则 hint 是 string
  - PreferredType 是为 Number 则 hint 是 number
  - 如果 input 对象有@@toPrimitive 方法，则让 exoticToPrim 的值为这个方法，否则 exoticToPrim 为 undefined
  - 如果 exoticToPrim 的值不为 undefined，则
    - 让 result 的值为调用 exoticToPrim 后得到的值
    - 如果 result 是原值，则返回
    - 抛出 TypeError 错误
  - 否则，如果 hint 的值为'default'，则把 hint 的值重新赋为'number'
  - 返回`OrdinaryToPrimitive(input,hint)`
    - 如果 hint 值为 string 则
      - 调用 input 对象的 toString()方法，如果值是原值则返回
      - 否则，调用 input 对象的 valueOf()方法，如果值是原值则返回
      - 否则，抛出 TypeError 错误
    - 如果 hint 值为 number 则
      - 调用 input 对象的 valueOf()方法，如果值是原值则返回
      - 否则，调用 input 对象的 toString()方法，如果值是原值则返回
      - 否则，抛出 TypeError 错误
- 隐式类型转换主要发生在`+ - * / == > <`运算符之间
  - `+`
  - `- * /`
  ```js
  1 * "23"; //23
  ```
  - `==`
  ```js
  3 == true; //false
  "0" == false; // true
  "0" == 0; //true;
  ```
  - `< >`
  ```js
  "ca" < "bd"; // false
  "a" < "b"; // true
  "12" < 13; // true
  false > -1; //true
  let a = {};
  a > 2; // false
  /* 过程
   * a.valueOf
   * a.toString
   * Number(a.toString())
   * NaN > 2 //false
   */
  let b = { name: "Jack" };
  let c = { age: 18 };
  a + b; // "[object Object][object Object]"
  ```

### + 操作符什么时候用于字符串的拼接

- 如果其中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作，该抽象操作再调用 [[DefaultValue]]，以数字作为上下文。如果不能转换为字符串，则会将其转换为数字类型进行计算
- 如果+的其中一个操作符是字符串（或通过以上步骤最终得到字符串），则执行字符串拼接，否则执行数字加法；
- 对于除了+的运算符来说，只要其中一方是数字，那么另一方就会被转成数字

```js
1 + "23"; //'123
1 + false; //1
1 + Symbol(); //TypeError
"1" + false; // '1false'
false + true; //1
// Symbole不能隐式类型转换
"1" + Symbol(); // TypeError
```

### 为什么会有 BigInt 的提案

- js 中超过最大安全数字(Number.MAX_SAFE_INTEGER)的返回，就会精度丢失，出现计算不准确的问题；

### Object.assign 和扩展运算符是深拷贝还是浅拷贝、两者区别

都是浅拷贝

- Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。
- 扩展操作符，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制 ES6 的 symbols 属性。
