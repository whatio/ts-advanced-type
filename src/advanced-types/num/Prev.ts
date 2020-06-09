import { AnyTuple } from './../tuple/Tuple';
import { Length } from './../object/Length';
import { Shift } from './../tuple/Shift';
import { Counter } from './../tuple/Counter';

/**
 * @description
 * Return number `N` - `1` 
 * @param
 * N number
 * @example
 *type Test = Prev<39>;   //38
 * @author xfy
 */
export type Prev<T extends number> = Length<Shift<Counter<T>>>;
type ____Prev<T extends AnyTuple> = Shift<T>;