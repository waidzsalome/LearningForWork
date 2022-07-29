// New-initialization
function foo() {}
// 这种做法修改proto构造函数的指向，即
// proto.constructor === foo
foo.prototype = {
  foo_prop: "foo val",
};
function bar() {}
var proto = new foo();
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar();
console.log(inst.foo_prop);
console.log(inst.bar_prop);
console.log("inst", proto);

//Object.create
function foo() {}
foo.prototype = {
  foo_prop: "foo val",
};
function bar() {}
var proto = Object.create(foo.prototype);
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar();
console.log(inst.foo_prop);
console.log(inst.bar_prop);

function foo() {}
foo.prototype = {
  foo_prop: "foo val",
};
function bar() {}
var proto = Object.create(foo.prototype, {
  bar_prop: {
    value: "bar val",
  },
});
bar.prototype = proto;
var inst = new bar();
console.log(inst.foo_prop);
console.log(inst.bar_prop);
