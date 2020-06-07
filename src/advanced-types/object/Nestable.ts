/**
 * @description    
 * Nestable Type
 * @example
 * let val: Nestable<number> = 100;
 * val = [1, 2];
 * val = [[1, 2], [3, 4], [5, 6]];
 * val = [1, [2, 3], 4, [5, [6, 7]], 8];
 * @author xfy
 */
export type Nestable<T> = T | Nestable<T>[];

/**
 * @description    
 * NestableArray Type
 * @example
 * let val: NestableArray<number> = [10];
 * val = [[1, 2], [3, 4], [5]]
 * val = [1, [2, 3]]                                     //error
 * val = [[1, 2], [3, 4], [5, 6, [7]]]               //error
 * @author xfy
 */
export type NestableArray<T> = Nestable<T[]>;