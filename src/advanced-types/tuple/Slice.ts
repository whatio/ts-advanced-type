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
export type Slice<T extends AnyTuple, start extends NumberSubscripts<T>, end extends NumberSubscripts<T> | Length<T> = Length<T>> = Cut<Keep<T, end>, start>;

/**
 * @description
 * Return a tail section of the Tuple `T`
 * @param `From` The beginning of the specified portion of the Tuple `T`
 * @example
type Test = Reverse<Counter<41>>;   //[0, 1, 2, ... , 38, 39, 40]
type Test1 = Cut<Test, 5>;
 * @author xfy
 */
export type Cut<T extends AnyTuple, From extends NumberSubscripts<T> | Length<T>> = (____Cut<T, From> extends infer R ? Cast<R, AnyTuple> : never)[1];
type ____Cut<T extends AnyTuple, From extends number, U extends AnyTuple = []> = {
    0: ____Cut<Shift<T>, From, Unshift<U, First<T>>>;
    1: T
    2: [U, T]
}[Length<U> extends From ? 2 : 0];

/**
 * @description
 * @param `Len` The number of types to keep.
 * @example
type Test = Reverse<Counter<41>>;   //[0, 1, 2, ... , 38, 39, 40]
type Test1 = Keep<Test, 40>;                //[0, 1, 2, ... , 38, 39]
 * @author xfy
 */
export type Keep<T extends AnyTuple, Len extends NumberSubscripts<T> | Length<T>> = Reverse<(____Cut<T, Len> extends infer R ? Cast<R, AnyTuple> : never)[0]>;