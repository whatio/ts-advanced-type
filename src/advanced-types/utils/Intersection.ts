/**
 * @description
 * Union-Types to Intersection-Types
 * @example
 * type Test1 = Intersection<1 | 2>;                     // never,  (1 & 2 == never);
 * type Test2 = Intersection<{ a: 1 } | { b: 1 }>;     // { a: 1; } & { b: 1; }
 * @author xfy
 */
export type Intersection<U> = (U extends any
? (_: U) => any
: never) extends (_: infer P) => any
  ? P
  : never
