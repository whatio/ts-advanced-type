/**
 * @description
 * T extends U ? T : never;
 * @example
type Test1 = Assert<string, number>;  //never
type Test2 = Assert<true, boolean>;  //true
 * @author xfy
 */
export type Assert<T, U> = T extends U ? T : never;

