/**
 * @description
 * Overwrite
 * @example
 * type Test = Overwrite<{ a: 1, b: 2 }, { a: 40 }>;   //{ a: 40, b: 2 }
 * @author xfy
 */
export type Overwrite<T, U> = {
    [K in keyof T]: K extends keyof U ? U[K] : T[K];
};