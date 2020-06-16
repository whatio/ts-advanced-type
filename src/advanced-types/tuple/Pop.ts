import { AnyTuple } from './Tuple'
import { Shift } from './Shift'
import { Counter } from './Counter'
import { Overwrite } from '../object/Overwrite'
/**
 * @description
 * Remove the last type from the Tuple `T` and return the Tuple
 * @example
 * type C = Counter<40>;  //[0, 1, 2, 3, ... , 37, 38, 39]
 * type Test = Pop<C>;       //[0, 1, 2, 3, ... , 37, 38]
 * @author xfy
 */
export type Pop<T extends AnyTuple> = Overwrite<Shift<T>, T>
