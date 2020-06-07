import { Reverse } from './Reverse';
import { Counter } from './Counter';
import { AnyTuple } from './Tuple';
import { Prev } from './../num/Prev';
import { Length } from './../object/Length';

/**
 * @description    
 * Return the last type from the Tuple `T`
 * @example
 * type Test = Last<Reverse<Counter<41>>>;    //40
 * @author xfy
 */
export type Last<T extends AnyTuple> = T extends [] ? never : T[Prev<Length<T>>];