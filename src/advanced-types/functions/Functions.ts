/**
 * @description
 * Return any function
 * @author xfy
 */
export type AnyFunction<P extends any[] = any, R extends any = any> = (...args: P) => R
