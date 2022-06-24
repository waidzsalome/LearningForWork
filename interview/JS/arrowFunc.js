function foo() {
  var _this = this;
  console.log(this);
  setTimeout(function () {
    console.log("id:", _this.id);
  }, 100);
}
foo();

let a,
  barObj = { msg: "bar的this指向" };
fooObj = { msg: "foo的this指向" };
bar.call(barObj); // 将bar的this指向barObj
foo.call(fooObj); // 将foo的this指向fooObj
function foo() {
  a(); // 结果：{ msg: 'bar的this指向' }
}
function bar() {
  a = () => {
    console.log(this, "this指向定义的时候外层第一个普通函数"); //
  }; // 在bar中定义 this继承于bar函数的this指向
}

function bar() {
  console.log(arguments); // ['外层第二个普通函数的参数']
  bb("外层第一个普通函数的参数");
  function bb() {
    console.log(arguments); // ["外层第一个普通函数的参数"]
    let a = () => {
      console.log(arguments, "arguments继承this指向的那个普通函数"); // ["外层第一个普通函数的参数"]
    };
    a("箭头函数的参数"); // this指向bb
  }
}
bar("外层第二个普通函数的参数");
