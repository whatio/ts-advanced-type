import { AnyTuple } from './Tuple';
import { Cast } from './../utils/Cast';
import { Reverse, ____Reverse } from './Reverse';

/**
 * @description
 * Combines two `Tuple`s
 * @example
 * type Test = Concat<[1, 2], [3, 4]>;     //[1, 2, 3, 4]
 * @author xfy
 */
export type Concat<T1 extends AnyTuple, T2 extends AnyTuple> = ____Reverse<Reverse<T1>, T2> extends infer R ? Cast<R, AnyTuple> : never;