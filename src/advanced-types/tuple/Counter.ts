import { Shift } from './Shift';
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






type AnyCounter = AnyTuple & {
    prev: AnyCounter;
    next: AnyCounter;
};

type Next<T extends AnyCounter> = T["next"];
type Prev<T extends AnyCounter> = T["prev"];

type TupleCounter<U extends AnyTuple> = U & {
    next: TupleCounter<Unshift<U, Length<U>>>;
    prev: TupleCounter<Shift<U>>;
};

type ZeroCounter = TupleCounter<[]>;

type TupleCounterOf<Len extends number> = ____TupleCounterOf<Len> extends infer R ? Cast<R, AnyCounter> : never;
type ____TupleCounterOf<Len extends number, T extends AnyCounter = ZeroCounter> = {
    0: ____TupleCounterOf<Len, Next<T>>;
    1: T;
}[Length<T> extends Len ? 1 : 0];

type T1 = TupleCounterOf<39>;


type ____Add<T1 extends AnyCounter, T2 extends AnyCounter> = {
    0: ____Add<Next<T1>, Prev<T2>>;
    1: T1;
}[Length<T2> extends 0 ? 1 : 0];


type ____CounterOf<Len extends number, From extends number = 0> = ____Add<TupleCounterOf<Len>, TupleCounterOf<From>>;

type Test = ____CounterOf<37, 40>;


