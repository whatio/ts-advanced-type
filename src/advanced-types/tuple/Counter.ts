import { Push } from './Push';
import { Cast } from './../utils/Cast';
import { AnyTuple } from './Tuple';
import { Length } from './../object/Length';

/**
 * @description
 * Return a descending Tuple `T`
 * @param `Len` The `length` of an tuple. support tuple size of 40 at most
 * @param `From` Start number
 * @example
type Test = Counter<40>;            // [0, 1, 2, ... , 38, 39]
type Test2 = Counter<40, 38>;     // [0, 1, 2, ... , 76, 77]
 * @author xfy
 */
export type Counter<Len extends number, From extends number = 0> = ____CounterFrom<Len
    , ____Counter<From> extends infer R ? Cast<R, AnyTuple> : never
> extends infer R ? Cast<R, AnyTuple> : never;

type ____CounterFrom<Len extends number, From extends AnyTuple = [], U extends AnyTuple = []> = {
    0: ____CounterFrom<Len, Push<From, Length<From>>, Push<U, any>>;
    1: From;
}[Length<U> extends Len ? 1 : 0];

type ____Counter<Len extends number, U extends AnyTuple = []> = {
    0: ____Counter<Len, Push<U, Length<U>>>;
    1: U;
}[Length<U> extends Len ? 1 : 0];








// type AnyCounter = AnyTuple & {
//     prev: AnyCounter;
//     next: AnyCounter;
// };

// type Next<T extends AnyCounter> = T["next"];
// type Prev<T extends AnyCounter> = T["prev"];

// type TupleCounter<U extends AnyTuple> = U & {
//     next: TupleCounter<Unshift<U, Length<U>>>;
//     prev: TupleCounter<Shift<U>>;
// };

// type ZeroCounter = TupleCounter<[]>;

// type TupleCounterOf<Len extends number> = ____TupleCounterOf<Len> extends infer R ? Cast<R, AnyCounter> : never;
// type ____TupleCounterOf<Len extends number, T extends AnyCounter = ZeroCounter> = {
//     0: ____TupleCounterOf<Len, Next<T>>;
//     1: T;
// }[Length<T> extends Len ? 1 : 0];

// type T1 = TupleCounterOf<39>;


// type ____Add<T1 extends AnyCounter, T2 extends AnyCounter> = {
//     0: ____Add<Next<T1>, Prev<T2>>;
//     1: T1;
// }[Length<T2> extends 0 ? 1 : 0];


// type ____CounterOf<Len extends number, From extends number = 0> = ____Add<TupleCounterOf<Len>, TupleCounterOf<From>>;

// type Test = ____CounterOf<37, 40>;


