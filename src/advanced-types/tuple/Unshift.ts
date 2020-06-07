import { AnyTuple } from './Tuple';

/**
 * @description    
 * Inserts the new type `T` at the start of the `Tuple` and return the Tuple
 * @example
 * type Test = Unshift<[1, 2, 3, 4], 0>;          //[0, 1, 2, 3, 4]
 * @author xfy
 */
export type Unshift<Tuple extends AnyTuple, T> = ((_: T, ...tails: Tuple) => void) extends ((...args: infer P) => void) ? P : never;