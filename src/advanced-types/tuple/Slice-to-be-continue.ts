import { NumberSubscripts } from './Subscript';
import { Counter } from './Counter';
import { AnyTuple } from './Tuple';

/**
 * @description
 * Return a section of the Tuple `T`
 * @param `Start` The beginning of the specified portion of the Tuple `T`
 * @param `End` The end of the specified portion of the Tuple `T`, exclusive of the type at the index `End`
 * @example
 * type test = Slice<Counter<40>, 2, 10>;         // [37, 36, 35, 34, 33, 32, 31, 30]
 * @author xfy
 */
export type Slice<T extends AnyTuple, Start extends NumberSubscripts<T>, End extends NumberSubscripts<T>, U extends AnyTuple = []> = {};