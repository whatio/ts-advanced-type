import { Cast } from './Cast';
import { Intersection } from './Intersection';
import { AnyTuple } from '../tuple/Tuple';
import { Unshift } from '../tuple/Unshift';

/**
 * @description
 * Return Last type from Union-Type;
 * @example
type Test = LastUnion<1 | 2 | 3>;                                                        //3
type Test2 = LastUnion<{ 0: 0 } | { true: true } | { "a": "a" }>;               //{ "a": "a" }
 * @author xfy
 */
export type LastUnion<U> = Intersection<U> extends { (arg: infer P): any; } ? P : never;

/**
 * @description
 * Return Union-type `U`, exclusive of the type at last.
 * @example
type Test = PopUnion<1 | 2 | 3>;                                                        //1 | 2
type Test2 = PopUnion<{ 0: 0 } | { true: true } | { "a": "a" }>;               //{ 0: 0 } | { true: true }
 * @author xfy
 */
export type PopUnion<U> = Exclude<U, LastUnion<U>>;

/**
 * @description
 * Union-type to Tuple
 * @example
type Test = UnionToTuple<1 | 2 | 3>;                                                        //[1, 2, 3]
type Test2 = UnionToTuple<1 | 2 | 3 | number>;                                      //[number], not good
type Test3 = UnionToTuple<{ 0: 0 } | { true: true } | { "a": "a" }>;               //[{ 0: 0 } , { true: true } , { "a": "a" }]
 * @author xfy
 */
export type UnionToTuple<U> = ____UnionToTuple<U> extends infer R ? Cast<R, AnyTuple> : never;
type ____UnionToTuple<U, T extends AnyTuple = []> = {
    0: ____UnionToTuple<PopUnion<U>, Unshift<T, LastUnion<U>>>;
    1: T;
}[LastUnion<U> extends never ? 1 : 0];







