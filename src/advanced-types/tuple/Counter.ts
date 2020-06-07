import { Cast } from './../utils/Cast';
import { AnyTuple } from './Tuple';
import { Unshift } from './Unshift';
import { Length } from './../object/Length';

/**
 * @description
 * Return a descending Tuple `T`
 * @param `Len` The `length` of the Tuple `T`
 * @param `From` Start number
 * @example
type Test = Counter<41>;    // [40, 39, 38, ... , 2, 1, 0]
type Test2 = Counter<41, 38>;     // [78, 77, 76, ... , 2, 1, 0]
 * @author xfy
 */
export type Counter<Len extends number, From extends number = 0> = ____CounterFrom<Len
    , ____Counter<From> extends infer R ? Cast<R, AnyTuple> : never
> extends infer R ? Cast<R, AnyTuple> : never;

type ____CounterFrom<Len extends number, From extends AnyTuple = [], U extends AnyTuple = []> = {
    0: ____CounterFrom<Len, Unshift<From, Length<From>>, Unshift<U, any>>;
    1: From;
}[Length<U> extends Len ? 1 : 0];

type ____Counter<Len extends number, U extends AnyTuple = []> = {
    0: ____Counter<Len, Unshift<U, Length<U>>>;
    1: U;
}[Length<U> extends Len ? 1 : 0];