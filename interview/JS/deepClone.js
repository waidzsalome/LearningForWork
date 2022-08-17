//可继续遍历的类型
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";
const argsTag = "[object Arguments]";
// 不可继续遍历
const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const numberTag = "[object Number]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const errorTag = "[object Error]";
const regexpTag = "[object RegExp]";
const funcTag = "[object Function]";
const deepCloneTag = [mapTag, setTag, arrayTag, objectTag, argsTag];
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}
function getType(target) {
  return Object.prototype.toString.call(target);
}
function getInit(target) {
  const constr = target.constructor;
  return new constr();
}
function cloneSymbol(target) {}
function cloneReg(target) {}
// 克隆函数没有意义
function cloneFn(target) {}
//克隆其他类型(不可遍历)
function cloneOtherType(target, type) {
  const Constr = target.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Constr(target);
    case regexpTag:
      return cloneReg(target);
    case symbolTag:
      return cloneSymbol(target);
    case funcTag:
      return cloneFn(target);
    default:
      return null;
  }
}
function clone(target, map = new WeakMap()) {
  if (!isObject(target)) {
    return target;
  }
  const type = getType(target);
  let cloneTarget;
  if (deepCloneTag.includes(type)) {
    cloneTarget = getInit(target, type);
  } else {
    return cloneOtherType(target, type);
  }
  if (map.get(target)) {
    return target;
  }
  map.set(target, cloneTarget);
  if (type === setTag) {
    for (const key in target) {
      cloneTarget.add(clone(key));
    }
    return cloneTarget;
  }
  if (type === mapTag) {
    for (const key in target) {
      cloneTarget.set(key, clone(key));
    }
    return cloneTarget;
  }
  for (const key in target) {
    cloneTarget[key] = clone(target[key], map);
  }
  return cloneTarget;
}
function easyclone(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};
target.target = target;
// console.log(clone(target));
console.log(easyclone(target));
