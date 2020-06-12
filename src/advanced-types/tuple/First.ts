import { Counter } from './Counter';
import { AnyTuple } from './Tuple';

/**
 * @description    
 * Get the first type of the Tuple `T`
 * @example
 * type Test = First<Counter<40>>;    //0;
 * @author xfy
 */
export type First<T extends AnyTuple> = T extends { 0: infer R } ? R : never;