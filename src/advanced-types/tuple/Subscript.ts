import { AnyTuple } from './Tuple';

/**
 * @description
 * Return the `Union-Type` keys of the Tuple T
 * @example
 * type Test = Subscripts<[string, true, false, boolean]>;   // "0" | "1" | "2" | "3"
 * @author xfy
 */
export type Subscripts<T extends AnyTuple> = Exclude<keyof T, keyof any[]>;