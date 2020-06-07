import { LengthObject } from './LengthObject';


/**
 * @description
 * Return the `length` of `T`
 * @author xfy
 */
export type Length<T extends LengthObject> = T["length"];


// type Test = Length<[1, 2, 3]>;          //3