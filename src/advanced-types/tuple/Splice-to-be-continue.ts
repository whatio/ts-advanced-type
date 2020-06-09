import { Reverse } from './Reverse';
import { Counter } from './Counter';
import { Prev } from './../num/Prev';
import { Next } from './../num/Next';
import { First } from './First';
import { Push } from './Push';
import { Length } from './../object/Length';
import { NumberSubscripts, StringSubscripts } from './Subscript';
import { AnyTuple } from './Tuple';
import { Shift } from './Shift';



/**
 * @description
 * Removes types from an tuple and, if necessary, inserts new types in their place, returning the Tuple `T`
 * @param start The zero-based location in the tuple from which to start removing types.
 * @param deleteCount The number of types to remove.
 * @param types Types to insert into the tuple in place of the deleted types.
 */
export type Splice<T extends AnyTuple, start extends NumberSubscripts<T>, deleteCount extends number = 0, types extends AnyTuple = []> = {};