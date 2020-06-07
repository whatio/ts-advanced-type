import { AnyTuple } from './Tuple';
import { Prev } from './../num/Prev';
import { Length } from './../object/Length';

/**
 * @description    
 * Get the last type of the Tuple `T`
 * @example
 * type Test = Last<[string, number, true]>;    //true;
 * @author xfy
 */
export type Last<T extends AnyTuple> = T extends [] ? never : T[Prev<Length<T>>];