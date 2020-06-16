import { Cast } from './../utils/Cast'
import { AnyTuple } from './Tuple'
import { Overwrite } from '../object/Overwrite'
import { Unshift } from './Unshift'
/**
 * @description
 * Appends the new type `U`  to `T`
 * @example
 * type Test = Push<[1, 2, 3], 4>;      //[1, 2, 3, 4]
 * @author xfy
 */
export type Push<T extends AnyTuple, U> = Cast<
  Overwrite<Unshift<T, any>, T & { [idx: string]: U }>,
  AnyTuple
>
