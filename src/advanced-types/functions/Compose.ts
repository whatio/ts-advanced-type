import { First } from './../tuple/First'
import { Last } from './../tuple/Last'
import { Unshift } from './../tuple/Unshift'
import { Concat } from './../tuple/Concat'
import { AnyTuple } from './../tuple/Tuple'
import { Cast } from './../utils/Cast'
import { LastUnion, PopUnion } from './../utils/Union'
import { AnyFunction } from './Functions'

/**
 * @description
 * Return composed function type
 * @param T: Function[]
 * @param LTR: left to right
 * @example
 * @author xfy
 */
export type Compose<T extends AnyFunction[], LTR extends boolean = true> = ____Compose<
  T extends (infer U)[] ? U : never,
  LTR
>
type ____Compose<
  T,
  LTR extends boolean = true,
  Params extends AnyTuple = [],
  Returns extends AnyTuple = []
> = {
  0: ____Compose<
    PopUnion<T>,
    LTR,
    Concat<LastUnion<T> extends (...arg: infer P) => any ? P : never, Params>,
    Unshift<Returns, LastUnion<T> extends (...args: any[]) => infer R ? R : never>
  >
  1: (
    ...args: Params extends infer R ? Cast<R, any[]> : never
  ) => LTR extends true ? Last<Returns> : First<Returns>
}[LastUnion<T> extends never ? 1 : 0]

// let fn1 = (arg3: string[]) => arg3.toString();
// let fn2 = (arg2: string) => [arg2];
// let fn3 = (arg1: 1, arg2: 2, args3: number) => arg1 + arg2;
// let fns = [fn1, fn2, fn3];
// type Test = Compose<typeof fns>;         // (_: string[], _: string, _: 1, _: 2, arg3: number) => number
// type Test2 = Compose<typeof fns, false>;         // (_: string[], _: string, _: 1, _: 2, arg3: number) => number
