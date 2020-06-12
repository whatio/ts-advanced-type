import { Counter } from './Counter';
import { AnyTuple } from './Tuple';
import { Cast } from './../utils/Cast';
import { First } from './First';
import { Unshift } from './Unshift';
import { Shift } from './Shift';
import { Length } from './../object/Length';

/**
 * @description    
 * Reverse the types in the Tuple `T`.
 * Return [...reversed<`T`>, ...`Tails`];
 * @example
type Test = Counter<40>;              // [0, 1, 2, ... , 38, 39]
type Test1 = Reverse<Test>;         // [39, 38, ... , 2, 1, 0]
 * @author xfy
 */
export type Reverse<T extends AnyTuple> = ____Reverse<T> extends infer R ? Cast<R, AnyTuple> : never;
type ____Reverse<T extends AnyTuple, U extends AnyTuple = []> = {
    0: ____Reverse<Shift<T>, Unshift<U, First<T>>>,
    1: U
}[Length<T> extends 0 ? 1 : 0];