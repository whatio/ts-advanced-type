import { Reverse } from './Reverse';
import { Unshift } from './Unshift';
import { Shift } from './Shift';
import { Length } from './../object/Length';
import { Push } from './Push';
import { Next } from './../num/Next';
import { Prev } from './../num/Prev';
import { NumberSubscripts, Subscript } from './Subscript';
import { Counter } from './Counter';
import { AnyTuple } from './Tuple';

/**
 * @description
 * Return a section of the Tuple `T`
 * @param `start` The beginning of the specified portion of the Tuple `T`
 * @param `end` The end of the specified portion of the Tuple `T`, exclusive of the type at the index `End`
 * @example
 * type test = Slice<Counter<40>, 2, 10>;         // [37, 36, 35, 34, 33, 32, 31, 30]
 * @author xfy
 */
export type Slice<T extends AnyTuple, start extends NumberSubscripts<T>, end extends NumberSubscripts<T>, U extends AnyTuple = []> = {

};



// type Cut<T extends AnyTuple, len extends number> = {
//     0: Cut<Shift<T>, Prev<len>>;
//     1: T;
// }[len extends 0 ? 1 : 0];


// type Ct = Reverse<Counter<40>>;


// type Test = Cut<Ct, 38>;

