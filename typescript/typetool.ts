export {};
/**
 * Partial
 */
type MyPartial<T> = { [P in keyof T]?: T[P] };
/**
 * Required
 */
type MyRequired<T> = { [P in keyof T]-?: T[P] };
/**
 * readonly
 */
type Myreadonly<T> = { readonly [P in keyof T]: T[P] };

/**
 * record
 * keyof any represents the type of any value that can be used as an index to an object
 * so the type of keyof any is string | number | symbol
 */
type MyRecord<K extends keyof any, T> = { [P in K]: T };

/**
 * Pick
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
/**
 * exclude
 * extends有两种作用，接口继承和条件判断
 * When conditional types act on a generic type, they become distributive when given a union type.
 */
type MyExclude<T, E> = T extends E ? never : T;
/**
 * Omit
 */
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Extract
 */
type MyExtract<T, U> = U extends T ? U : never;

/**
 * NonNullable
 */
type MyNonNullable<T> = T extends null | undefined ? never : T;
