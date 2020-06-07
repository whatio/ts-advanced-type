import { AnyTuple } from './Tuple';

/**
 * @description    
 * Remove the first type from the Tuple `T` and return the Tuple
 * @example
 * type Test = Shift<[1, 2, 3, 4]>;          //[2, 3, 4]
 * @author xfy
 */
export type Shift<T extends AnyTuple> = ((...args: T) => any) extends ((_: any, ...rest: infer P) => any) ? P : never;