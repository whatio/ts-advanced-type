import { AnyTuple } from './Tuple';
import { Shift } from './Shift';
import { Reverse } from './Reverse';
import { Counter } from './Counter';
/**
 * @description
 * Remove the last type from the Tuple `T` and return the Tuple
 * @example
 * type Test = Pop<Counter<39>>;       //[38, 37, ... 1]
 * @author xfy
 */
export type Pop<T extends AnyTuple> = Reverse<Shift<Reverse<T>>>;