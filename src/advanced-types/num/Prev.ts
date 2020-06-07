import { AnyTuple } from './../tuple/Tuple';
import { Length } from './../object/Length';
import { Shift } from './../tuple/Shift';
import { Counter } from './../tuple/Counter';
/**
 * @description
 * Return number `T` - `1` 
 * @param
 * T number
 * @example
 *type Test = Prev<39>;   //38
 * @author xfy
 */
export type Prev<T extends number> = Length<Shift<Counter<T>>>;
type ____Prev<T extends AnyTuple> = Shift<T>;