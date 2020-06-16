import { Concat } from './../tuple/Concat'
import { AnyTuple } from './../tuple/Tuple'
import { Cast } from './../utils/Cast'
import { LastUnion, PopUnion } from './../utils/Union'
import { AnyFunction } from './Functions'

/**
 * @description
 * Return composed parameters type
 * @example
 * @author xfy
 */
export type ComposeParams<T extends AnyFunction[]> = ____ComposeParams<
  T extends (infer R)[] ? R : never
> extends infer R
  ? Cast<R, any[]>
  : never
type ____ComposeParams<U, T extends AnyTuple = []> = {
  0: ____ComposeParams<
    PopUnion<U>,
    Concat<LastUnion<U> extends (...arg: infer P) => any ? P : never, T>
  >
  1: T
}[LastUnion<U> extends never ? 1 : 0]

/**
 * @description
 * Return composed function type
 * @example
 * @author xfy
 */
export type Compose<T extends AnyFunction[]> = (
  ...args: ComposeParams<T>
) => ReturnType<Cast<LastUnion<T extends (infer R)[] ? R : never>, AnyFunction>>

// let fn1 = (arg3: string[]) => arg3.toString();
// let fn2 = (arg2: string) => [arg2];
// let fn3 = (arg1: 1, arg2: 2, args3: number) => arg1 + arg2;
// let fns = [fn1, fn2, fn3];
// type Test = Compose<typeof fns>;         // (_: string[], _: string, _: 1, _: 2, arg3: number) => number
