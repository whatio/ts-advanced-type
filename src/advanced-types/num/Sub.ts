import { Prev } from './Prev';


/**
 * @description
 * Return number `N1` - `N2`
 * @example
 *type Test = Sub<35, 34>;   //1
 * @author xfy
 */
export type Sub<N1 extends number, N2 extends number> = {
    0: Sub<Prev<N1>, Prev<N2>>;
    1: N1;
}[N2 extends 0 ? 1 : 0];