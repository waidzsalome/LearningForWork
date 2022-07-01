export {};
/**
 * Partial 所有类型变成可选
 */
type MyPartial<T> = { [P in keyof T]?: T[P] };

/**
 * Required 所有类型必填
 */
type MyRequired<T> = { [P in keyof T]-?: T[P] };

/**
 * readonly 所有类型只读
 */
type Myreadonly<T> = { readonly [P in keyof T]: T[P] };

/**
 * record 以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
 * keyof any represents the type of any value that can be used as an index to an object
 * so the type of keyof any is string | number | symbol
 */
type MyRecord<K extends keyof any, T> = { [P in K]: T };

/**
 * Pick 取出类型
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

/**
 * exclude 排除联合类型中的子类型
 * extends有两种作用，接口继承和条件判断
 * When conditional types act on a generic type, they become distributive when given a union type.
 */
type MyExclude<T, E> = T extends E ? never : T;

/**
 * Omit 从接口中剔除类型
 */
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Extract 提取指定的联合类型
 */
type MyExtract<T, U> = U extends T ? U : never;

/**
 * NonNullable 过滤掉null和 undefined
 */
type MyNonNullable<T> = T extends null | undefined ? never : T;

/**
 * 以下 严格模式下会报错
 */
let s: string = "foo";
s = null;

/**
 * Parameters，获取函数的参数类型、以元组的形式返回
 * 类型推断infer 是extends的子语句
 */
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * constructor 获取构造函数的参数类型，以元组的形式返回
 */
type MyConstructor<T extends new (...args: any) => any> = T extends new (
  ...args: infer P
) => any
  ? P
  : never;
/**
 * Flatten 展开类型
 */

type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...(First extends any[] ? Flatten<First> : [First]), ...Flatten<Rest>]
  : T;

interface Get {
  host_group?: {
    name: string;
    mapped: boolean;
  }[];
  limit?: number;
}
type a = NonNullable<Get["host_group"]>[number]["name"];
