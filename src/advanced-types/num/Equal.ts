

/**
 * @description
 * Return `N1` equals `N2` ? true : false;
 * @example
type Test1 = Equal<1, 2>;   //false;
type Test2 = Equal<2, 2>; //true;
 * @author xfy
 */
export type Equal<N1 extends number, N2 extends number> = N1 extends N2 ? true : false;