/**
 * @description
 * Union-Type to Union-Function-type
 * @example
type UF = ____UnionFunction<1 | 2>; // ((arg: 1) => void) | ((arg: 2) => void)
 * @author xfy
 */
type ____UnionFunction<U> = U extends any ? (arg: U) => void : never;

/**
 * @description
 * Union-Type to Intersection-Function-type
 * @example
type Test1 = Intersection<1 | true | string>;                               // ((arg: string) => void) & ((arg: true) => void) & ((arg: 1) => void)
type Test2 = Intersection<[1] | [2]>;                                           // ((arg: [1]) => void) & ((arg: [2]) => void)
 * @author xfy
 */
export type Intersection<U> = ____UnionFunction<____UnionFunction<U>> extends (arg: infer R) => void ? R : never;