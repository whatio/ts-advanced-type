/**
 * @description 
 * T extends U ? T : U;
 * @example
 * type Test1 = Cast<string, number>;  //number
 * type Test2 = Cast<true, boolean>;  //true
 * @author xfy
 */
export type Cast<T, U> = T extends U ? T : U;