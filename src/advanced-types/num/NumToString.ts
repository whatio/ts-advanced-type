import { Counter } from './../tuple/Counter';
import { Unshift } from './../tuple/Unshift';

/**
 * @description
 * Return string of number `T`
 * @param
 * T number
 * @example
 * type Test = NumToString<20>;   //"20"
 * @author xfy
 */
export type NumToString<T extends number> = Exclude<keyof Unshift<Counter<T>, T>, keyof Counter<T>>;