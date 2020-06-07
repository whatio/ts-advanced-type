import { Counter } from './Counter';
import { AnyTuple } from './Tuple';
import { At } from './At';
import { Next } from './../num/Next';
import { Length } from './../object/Length';
import { Push } from './Push';

/**
 * @description
 * Return a section of the Tuple `T`
 * @param `Start` The beginning of the specified portion of the Tuple `T`
 * @param `End` The end of the specified portion of the Tuple `T`, exclusive of the type at the index `End`
 * @example
 * type test = Slice<Counter<40>, 2, 10>;         // [37, 36, 35, 34, 33, 32, 31, 30]
 * @author xfy
 */
export type Slice<T extends AnyTuple, Start extends number, End extends number = Length<T>, U extends AnyTuple = []> = {
    0: Slice<T, Next<Start>, End, Push<U, At<T, Start>>>;
    1: U
}[
    Start extends Length<T>
    ? 1
    : Start extends End ? 1 : 0
];