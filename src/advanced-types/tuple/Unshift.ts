import { Counter } from './Counter';
import { AnyTuple } from './Tuple';

/**
 * @description    
 * Inserts the new type `U` at the start of the Tuple `T` and return the Tuple
 * @example
 * type Test = Unshift<[1, 2, 3, 4], 0>;          //[0, 1, 2, 3, 4]
 * @author xfy
 */
export type Unshift<T extends AnyTuple, U> = ((_: U, ...tails: T extends any[] ? T : never) => void) extends ((...args: infer P) => void) ? P : never;