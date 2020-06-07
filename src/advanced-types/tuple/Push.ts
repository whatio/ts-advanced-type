import { AnyTuple } from './Tuple';
import { Concat } from './Concat';
/**
 * @description
 * Appends the new type `T`  to `Tuple`
 * @example
 *type Test = Push<[1, 2, 3], 4>;      //[1, 2, 3, 4]
 * @author xfy
 */
export type Push<Tuple extends AnyTuple, T> = Concat<Tuple, [T]>;