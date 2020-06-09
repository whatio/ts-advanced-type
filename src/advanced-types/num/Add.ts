import { Length } from './../object/Length';
import { Counter } from './../tuple/Counter';


/**
 * @description
 * Return number `N1` + `N2`
 * @example
 *type Test = Add<40, 37>;   //77
 * @author xfy
 */
export type Add<N1 extends number, N2 extends number> = Length<Counter<N1, N2>>;


