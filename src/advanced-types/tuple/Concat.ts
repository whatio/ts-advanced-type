import { Counter } from './Counter';
import { AnyTuple } from './Tuple';
import { Reverse } from './Reverse';

/**
 * @description
 * Combines two `Tuple`s
 * @example
 * type Test = Concat<Counter<40>, Counter<41>>;     //[39, 38, ... 2, 1, 0, 40, 39, ..., 2, 1, 0]
 * @author xfy
 */
export type Concat<T1 extends AnyTuple, T2 extends AnyTuple> = Reverse<Reverse<T1>, T2>;