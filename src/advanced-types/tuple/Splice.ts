import { Concat } from './Concat';
import { Counter } from './Counter';
import { NumberSubscripts } from './Subscript';
import { AnyTuple } from './Tuple';
import { SliceFrom } from './Slice';



/**
 * @description
 * Removes types from an tuple and, if necessary, inserts new types in their place, returning the Tuple `T`
 * @example
type Test = Counter<40>;           //[0, 1, 2, ... , 38, 39]
type TestStart = Splice<Test, 30>;              // [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
type TestDelete = Splice<Test, 30, 3>;                          //[33, 34, 35, 36, 37, 38, 39]
type TestSplice = Splice<Test, 30, 3, ["a", "b", "c"]>;       // [33, 34, 35, 36, 37, 38, 39, "a", "b", "c"]
 * @param start The zero-based location in the tuple from which to start removing types.
 * @param deleteCount The number of types to remove.
 * @param types Types to insert into the tuple in place of the deleted types.
 */
export type Splice<T extends AnyTuple
    , start extends NumberSubscripts<T>
    , deleteCount extends number = 0
    , types extends AnyTuple = []> = Concat<SliceFrom<SliceFrom<T, start>, deleteCount>, types>;