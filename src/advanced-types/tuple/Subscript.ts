import { Length } from './../object/Length';
import { Cast } from './../utils/Cast';
import { AnyTuple } from './Tuple';
import { Shift } from './Shift';

/**
 * @description
 * Return the `Union-Type` string-subscripts of the Tuple T
 * @example
 * type Test = StringSubscripts<[string, true, false, boolean]>;   // "0" | "1" | "2" | "3"
 * @author xfy
 */
export type StringSubscripts<T extends AnyTuple> = Exclude<keyof T, keyof any[]>;

/**
 * @description
 * Return the `Union-Type` number-subscripts of the Tuple T
 * @example
 * type Test = NumberSubscripts<[string, true, false, boolean]>;   // 0 | 1 | 2 | 3
 * @author xfy
 */
export type NumberSubscripts<T extends AnyTuple> = ____NumberSubscripts<T> extends infer R ? Cast<R, number> : never;
type ____NumberSubscripts<T extends AnyTuple, U extends number = 0> = {
    0: ____NumberSubscripts<Shift<T>, U | Length<Shift<T>>>;
    1: U;
}[Length<T> extends 0 ? 1 : 0];

/**
 * @description
 * Return type at the location `Index` from the Tuple `T`
 * @example
type Test = Subscript<[0, 1, 2, 3], 1>;   // 1
type Test2 = Subscript<[0, 1, 2, 3], "1">;   // 1
 * @author xfy
 */
export type Subscript<T extends AnyTuple, Index extends NumberSubscripts<T> | StringSubscripts<T>> = T[Index];