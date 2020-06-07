import { Cast } from './../utils/Cast';
import { AnyTuple } from './Tuple';
import { Unshift } from './Unshift';
import { Length } from './../object/Length';

/**
 * @description
 * Return a descending Tuple `T`
 * @param `T` The `length` of the Tuple `T`
 * @example
 * type Test = Counter<41>;    // [40, 39, 38, 37, ...36, more..., 2, 1, 0]
 * @author xfy
 */
export type Counter<T extends number> = ____Counter<T> extends infer R ? Cast<R, AnyTuple> : never;
type ____Counter<T extends number, U extends AnyTuple = []> = {
    0: ____Counter<T, Unshift<U, Length<U>>>;
    1: U;
}[Length<U> extends T ? 1 : 0];