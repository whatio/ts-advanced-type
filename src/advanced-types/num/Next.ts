import { Add } from './Add';

/**
 * @description
 * Return number `N` + `1`
 * @param
 * N number
 * @example
 * type Test = Next<40>;   //41
 * @author xfy
 */
export type Next<N extends number> = Add<N, 1>;

