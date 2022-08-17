Function.prototype.myBind = function (target, ...outArgs) {
  target = target || {};
  const symbolKey = Symbol();
  target[symbolKey] = this;
  return function (...innerArgs) {
    const res = target[symbolKey](...outArgs, ...innerArgs);
    delete target[symbolKey];
    return res;
  };
};
Function.prototype.myCall = function (target, ...args) {
  target = target || window;
  const symbolKey = Symbol();
  target[symbolKey] = this;
  const res = target[symbolKey](...args);
  delete target[symbolKey];
  return res;
};
Function.prototype.myApply = function (target, args) {
  target = target || window;
  const symbolKey = Symbol();
  target[symbolKey] = this;
  const res = target[symbolKey](args);
  delete target[symbolKey];
  return res;
};
