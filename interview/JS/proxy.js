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

var proxy = new Proxy(
  {},
  {
    get: function (obj, prop) {
      console.log("设置get操作");
      return obj[prop];
    },
    set: function (obj, prop, value) {
      console.log("设置set操作");
      obj[prop] = value;
    },
  }
);
proxy.time = 35;
console.log(proxy.time);
