import { AnyTuple } from './Tuple';
import { Shift } from './Shift';
import { Reverse } from './Reverse';
/**
 * @description
 * Remove the last type from the Tuple `T` and return the Tuple
 * @example
 * type Test = Pop<[1, 2, 3]>;       // [1, 2]
 * @author xfy
 */
export type Pop<T extends AnyTuple> = Reverse<Shift<Reverse<T>>>;