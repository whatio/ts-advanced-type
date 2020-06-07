import { Counter } from './Counter';
import { NumToString } from './../num/NumToString';
import { Subscripts } from './Subscript';
import { AnyTuple } from './Tuple';

/**
 * @description
 * Return a type at the position `Index` of the Tuple `T`
 * @example
 * type Test = At<Counter<41>, 1>;      //39
 * @author xfy
 */
export type At<T extends AnyTuple, Index extends number> = AtKey<T, NumToString<Index>>;

/**
 * @description
 * Return a type at the key `K` of the Tuple `T`
 * @example
 * type Test = AtKey<Counter<41>, "1">;      //39
 * @author xfy
 */
export type AtKey<T extends AnyTuple, K extends string> = K extends Subscripts<T> ? T[K] : never;