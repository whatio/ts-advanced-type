import { AnyTuple } from './../tuple/Tuple';
import { Unshift } from './../tuple/Unshift';
import { Counter } from './../tuple/Counter';
import { Length } from './../object/Length';

/**
 * @description
 * Return number `T` + `1`
 * @param
 * T number
 * @example
 * type Test = Next<20>;   //21
 * @author xfy
 */
export type Next<N extends number> = Length<____Next<Counter<N>>>;
type ____Next<T extends AnyTuple> = Unshift<T, Length<T>>;

