import { Counter } from './Counter';
import { Shift } from './Shift';
import { AnyTuple } from './Tuple';

/**
 * @description    
 * Return the last type from the Tuple `T`
 * @example
 * type Test = Last<Counter<40>>;    //39
 * @author xfy
 */
export type Last<T extends AnyTuple> = T["length"] extends 0 ? never : T[Shift<T>["length"]];