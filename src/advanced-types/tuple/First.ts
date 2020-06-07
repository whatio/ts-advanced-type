import { AnyTuple } from './Tuple';
/**
 * @description    
 * Get the first type of the Tuple `T`
 * @example
 * type Test = First<[string, number, true]>;    //string;
 * @author xfy
 */
export type First<T extends AnyTuple> = T extends [infer U, ...any[]] ? U : never;