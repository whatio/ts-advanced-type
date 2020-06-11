import { First } from './First';
import { Cast } from '../utils/Cast';
import { Reverse } from './Reverse';
import { Unshift } from './Unshift';
import { Shift } from './Shift';
import { Length } from '../object/Length';
import { NumberSubscripts } from './Subscript';
import { Counter } from './Counter';
import { AnyTuple } from './Tuple';

/**
 * @description
 * Return a section of the Tuple `T`
 * @param `start` The beginning of the specified portion of the Tuple `T`
 * @param `end` The end of the specified portion of the Tuple `T`, exclusive of the type at the index `End`
 * @example
type Test = Reverse<Counter<41>>;   //[0, 1, 2, ... , 38, 39, 40]
type Test1 = Slice<Test, 30, 38>;           // [30, 31, 32, 33, 34, 35, 36, 37]
type Test2 = Slice<Reverse<Counter<38>>, 30>;               // [30, 31, 32, 33, 34, 35, 36, 37]
 * @author xfy
 */
export type Slice<T extends AnyTuple
    , start extends NumberSubscripts<T>
    , end extends NumberSubscripts<T> | Length<T> = Length<T>> = SliceFrom<SliceBefore<T, end>, start>;


type ____SliceInTwo<T extends AnyTuple, From extends number, U extends AnyTuple = []> = {
    0: ____SliceInTwo<Shift<T>, From, Unshift<U, First<T>>>;
    1: [U, T]
}[Length<U> extends From ? 1 : 0];
/**
 * @description
 * Return a section of the Tuple `T`. From index `I` to the end index of the Tuple `T`.
 * @param `I` The beginning of the specified portion of the Tuple `T`
 * @example
type Test = Reverse<Counter<41>>;   //[0, 1, 2, ... , 38, 39, 40]
type Test1 = SliceFrom<Test, 30>;                  // [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
 * @author xfy
 */
export type SliceFrom<T extends AnyTuple
    , I extends NumberSubscripts<T> | Length<T>> = (____SliceInTwo<T, I> extends infer R ? Cast<R, AnyTuple> : never)[1];

/**
 * @description
 * Return a section of the Tuple `T`. From index 0 to the index `I` of the Tuple `T`
 * @param `I` The end of the specified portion of the Tuple `T`, exclusive of the type at the index `End`
 * @example
type Test = Reverse<Counter<41>>;   //[0, 1, 2, ... , 38, 39, 40]
type Test1 = SliceBefore<Test, 40>;                //[0, 1, 2, ... , 38, 39]
 * @author xfy
 */
export type SliceBefore<T extends AnyTuple
    , I extends NumberSubscripts<T> | Length<T>> = Reverse<(____SliceInTwo<T, I> extends infer R ? Cast<R, AnyTuple> : never)[0]>;