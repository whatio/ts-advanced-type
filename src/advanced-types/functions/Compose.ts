import { Assert } from './../utils/Assert';
import { LastUnion } from './../utils/Union';
import { ComposeParams, AnyFunction } from './Functions';

/**
 * @description
 * Return composed function type
 * @example
 * @author xfy
 */
export type Compose<T extends AnyFunction[]> = (...args: ComposeParams<T>) => ReturnType<Assert<LastUnion<T extends (infer R)[] ? R : never>, AnyFunction>>;



// let fn1 = (arg3: string[]) => arg3.toString();
// let fn2 = (arg2: string) => [arg2];
// let fn3 = (arg1: 1, arg2: 2, args3: number) => arg1 + arg2;
// let fns = [fn1, fn2, fn3];
// type Test = Compose<typeof fns>;         // (_: string[], _: string, _: 1, _: 2, arg3: number) => number