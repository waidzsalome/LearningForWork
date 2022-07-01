function myInstanceof(left, right) {
  console.log(left, right);
  let proto = Object.getPrototypeOf(left);
  console.log(proto);
  let prototype = right.prototype;
  console.log(prototype);
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof([1, 2], Array));
function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  console.log(rightProto);
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  console.log(leftVaule);
  while (true) {
    if (leftVaule === null) {
      return false;
    }
    if (leftVaule === rightProto) {
      return true;
    }
    leftVaule = leftVaule.__proto__;
  }
}
console.log(new_instance_of([1, 2], Array));
