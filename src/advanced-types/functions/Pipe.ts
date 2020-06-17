import { Last } from './../tuple/Last'
import { First } from './../tuple/First'
import { UnionToTuple } from './../utils/Union'

/**
 * @description
 * Return piped function type
 * @param T: Function[]
 * @example
 * @author xfy
 */
export type Pipe<T extends Function[]> = T extends (infer R)[]
  ? [First<UnionToTuple<R>>, Last<UnionToTuple<R>>] extends [
      (...args: infer P) => any,
      (...args: any) => infer R
    ]
    ? (...args: P) => R
    : never
  : never

// let fn1 = (arg3: string[]) => arg3;
// let fn2 = (arg2: string) => [arg2];
// let fn3 = (arg1: 1, arg2: 2, arg3: number) => arg1 + arg2 + arg3 + "";
// let fns = [fn1, fn2, fn3];
// type FNT = typeof fns;
// type Test = Pipe<FNT>;
