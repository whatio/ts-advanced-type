import { Cast } from './Cast'
import { AnyTuple } from '../tuple/Tuple'

/**
 * @description
 * Union-Type to Intersection-Function-type
 * @example
 * type Test1 = IntersectionFunction<1 | true | string>;                               // ((_: string) => void) & ((_: true) => void) & ((_: 1) => void)
 * type Test2 = IntersectionFunction<[1] | [2]>;                                           // ((_: [1]) => void) & ((_: [2]) => void)
 * type Test3 = IntersectionFunction<1 | 2 | 3 | number>;                           // (_: number) => void
 * @author xfy
 */
export type IntersectionFunction<U> = (U extends any
? (_: (_: U) => void) => void
: never) extends (_: infer R) => void
  ? R
  : never

/**
 * @description
 * Return Last type from Union-Type;
 * @example
 * type Test1 = LastUnion<1 | 2 | 3>;                                                        // 3
 * type Test2 = LastUnion<{ 0: 0 } | { true: true } | { "a": "a" }>;               // { "a": "a" }
 * @author xfy
 */
export type LastUnion<U> = IntersectionFunction<U> extends { (arg: infer P): any } ? P : never

/**
 * @description
 * Return Union-type `U`, exclusive of the type at last.
 * @example
 * type Test = PopUnion<1 | 2 | 3>;                                                        // 1 | 2
 * type Test2 = PopUnion<{ 0: 0 } | { true: true } | { "a": "a" }>;               // { 0: 0 } | { true: true }
 * @author xfy
 */
export type PopUnion<U> = Exclude<U, LastUnion<U>>

/**
 * @description
 * Union-type to Tuple
 * @example
 * type Test = UnionToTuple<1 | 2 | 3>;                                                        // [1, 2, 3]
 * type Test2 = UnionToTuple<1 | 2 | 3 | number>;                                      // [number], not good
 * type Test3 = UnionToTuple<{ 0: 0 } | { true: true } | { "a": "a" }>;               // [{ 0: 0 } , { true: true } , { "a": "a" }]
 * @author xfy
 */
export type UnionToTuple<U> = ____UnionToTuple<U> extends infer R ? Cast<R, AnyTuple> : never
type ____UnionToTuple<U, T extends any[] = []> = {
  0: ____UnionToTuple<
    PopUnion<U>,
    ((_: LastUnion<U>, ...tails: T) => void) extends (...args: infer P) => void ? P : never
  >
  1: T
}[LastUnion<U> extends never ? 1 : 0]
