import { Cast } from './../utils/Cast';
import { Shift } from './Shift';
import { First } from './First';
import { Counter } from './Counter';
import { AnyTuple } from './Tuple';
import { Push } from './Push';

/**
 * @description
 * Combines two `Tuple`s
 * @example
 * type Test = Concat<Counter<40>, Counter<40>>;     //[0, 1, ... , 38, 39, 0, 1, ... , 38, 39];
 * @author xfy
 */
export type Concat<T1 extends AnyTuple, T2 extends AnyTuple> = ____Concat<T1, T2> extends infer R ? Cast<R, AnyTuple> : never;
type ____Concat<T1 extends AnyTuple, T2 extends AnyTuple> = {
    0: ____Concat<Push<T1, First<T2>>, Shift<T2>>;
    1: T1;
}[T2["length"] extends 0 ? 1 : 0];