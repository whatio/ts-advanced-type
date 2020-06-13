/**
 * @description
 * Union-Type to Union-Function-type
 * @example
type UF = UnionFunction<1 | 2>; // ((arg: 1) => void) | ((arg: 2) => void)
 * @author xfy
 */
type ____UnionFunction<U> = U extends any ? (arg: U) => void : never;

/**
 * @description
 * Union-Type to Intersection-type
 * @example
type Test = Intersection<{ 0: 0 } | { true: true } | { "a": "a" }>;      //{ 0: 0 } & { true: true } & { "a": "a" };
type Test2 = Intersection<1 | true | string>;                               // never; 1 & true & string = never
type Test3 = Intersection<[1] | [2]>;                                           //never; [1] & [2] = never;
 * @author xfy
 */
export type Intersection<U> = ____UnionFunction<U> extends (arg: infer R) => void ? R : never;


/**
 * @description
 * Union-Type to Intersection-type
 * @example
type Test1 = IntersectionFn<1 | true | string>;                               // ((arg: string) => void) & ((arg: true) => void) & ((arg: 1) => void)
type Test2 = IntersectionFn<[1] | [2]>;                                           // ((arg: [1]) => void) & ((arg: [2]) => void)
 * @author xfy
 */
export type IntersectionFn<U> = ____UnionFunction<____UnionFunction<U>> extends (arg: infer R) => void ? R : never;

