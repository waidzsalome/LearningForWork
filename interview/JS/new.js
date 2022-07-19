function create(cstr, ...args) {
  const newObj = {};
  newObj.__proto__ = cstr.prototype;
  const res = cstr.apply(newObj, args);
  // 如果构造函数没有显示的返回对象，就是用步骤1创建的对象
  console.log(res instanceof Object);
  return res instanceof Object ? res : newObj;
}
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  // return this.make;
  return { make: this.make };
  // return 1;
}
// class Polygon {
//   constructor(height, width) {
//     this.area = height * width;
//   }
// }
const a = create(Car, "a", "b", "c");
// create(Polygon, 12, 13);
console.log(a, a.make);
