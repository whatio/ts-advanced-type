

/**
 * @description
 * {Key: Value} => {Key: Key}
 * @author xfy
 */
export type ValueToBeKey<T> = { [Key in keyof T]: Key; };

// type Test = ValueToBeKey<{ a: 0; 1: boolean }>;         //{a: "a" ; 1: 1;}