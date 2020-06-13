import { Cast } from './../utils/Cast';
import { Concat } from './../tuple/Concat';
import { LastUnion, PopUnion } from './../utils/Union';
import { AnyTuple } from './../tuple/Tuple';


/**
 * @description
 * Return any function
 * @example
 * @author xfy
 */
export type AnyFunction = (...args: any) => any;

/**
 * @description
 * Return composed parameters type
 * @example
 * @author xfy
 */
export type ComposeParams<T extends AnyFunction[]> = ____ComposeParams<T extends (infer R)[] ? R : never> extends infer R ? Cast<R, any[]> : never;
type ____ComposeParams<U, T extends AnyTuple = []> = {
    0: ____ComposeParams<PopUnion<U>, Concat<LastUnion<U> extends (...arg: infer P) => any ? P : never, T>>;
    1: T;
}[LastUnion<U> extends never ? 1 : 0];





// let fn1 = (arg1: 1, arg2: 2, args3: number) => arg1 + arg2;
// let fn2 = (arg2: string) => [arg2];
// let fn3 = (arg3: string[]) => arg3.toString();
// let fns = [fn1, fn2, fn3];
// type Test = ComposeParams<typeof fns>;         //[1, 2, number, string, string[]]