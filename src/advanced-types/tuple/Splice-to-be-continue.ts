import { AnyTuple } from './Tuple';



/**
 * @description
 * Removes types from an tuple and, if necessary, inserts new types in their place, returning the Tuple `T`
 * @param start The zero-based location in the tuple from which to start removing types.
 * @param deleteCount The number of types to remove.
 * @param types Types to insert into the tuple in place of the deleted types.
 */
type Splice<T extends AnyTuple, start extends number, deleteCount extends number = 0, types extends AnyTuple = []> = {};