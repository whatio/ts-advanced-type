# Union Types & Intersection Types

## 内容概要

- 交叉类型和联合类型的特征介绍  
- 条件类型的特征以及分配规则  
- 联合类型转换成交叉类型  
- 应用实例
  - 函数交叉类型的特征  
  - 获取联合类型的最后一个类型
  - 删除联合类型的最后一个类型

## 交叉类型(Intersection-Types)  

- 交叉类型具有所有参与合并的类型的全部成员;
- `不同成员`取成员`并集`;
- `相同成员`的类型取`成员的类型A和B`的`交集`: `A&B` = `A∩B`:
  - `A⊆B`（类型A是类型B的子集），则`A&B` = `A∩B` = `A`;
  - `A∩B=Φ`（类型A和类型B没有交集），则`A&B` = `A∩B` = `Φ` = `never`;

> NOTE:  
> `不同成员`取`并集`  
> `相同成员`的`成员类型`取`交集`

```ts
// 相同成员，不同类型，1∩2=Φ， 1和2的交集为空集
type A = 1 & 2;                               // never,
//  {a: 1}∩{a: 2}=Φ, a的类型1和2的交集为空集
type A1 = { a: 1 } & { a: 2 };               // never
// 1⊆number，1是number的子集，它们的交集是1
type B = 1 & number;                    // 1
// never和任何类型的交集都是never
type C = 1 & never;                        // never
// 不同成员取并集
type D = {a: 1} & {b: 1};                   // {a: 1} & {b: 1}
```

## 联合类型(Union-Types)

- 联合多个类型类组成一个新类型，新类型为所有联合类型之一
- `相同成员`的类型取`成员的类型A和B`的`并集`: `A|B` = `A∪B`:
  - `A⊆B`（类型A是类型B的子集），则`A|B` = `A∪B` = `B`;

```ts
type A = 1 | 2                                   // 1 | 2
type B = 1 | number;                        // number, number和1的并集为number
```

## 条件类型: T extends U ? X : Y

- 条件类型分配规则:  

>Note：  
> ` (A | B | C) extends U ? X : Y `  
> 条件类型分配过程：  
> `(A extends U ? X  : Y) | (B extends U ? X  : Y) | (C extends U ? X  : Y)`

```ts
type Distributive<T> = T extends unknown ? { key: T } : T;
type Test = Distributive<1 | 2>;    // Test = { key: 1; } | { key: 2; }
```

> Note：根据条件类型的分配规则 `Test = { key: 1; } | { key: 2; } 而不是 { key: 1 | 2; };`

## 联合类型转换成交叉类型

- 根据条件类型的分配规则，把联合类型转换成联合函数类型

```ts
type UnionFn<T> = T extends any ? (_: T) => void : T;
type Test = UnionFn<1 | 2>;         //type Test = ((_: 1) => void) | ((_: 2) => void)
```

- 联合类型转换成交叉类型

```ts
// 联合类型转换成交叉类型
type Intersection<T> = UnionFn<T> extends (_: infer P) => any ? P : never;
// never, 实际为 1&2, 根据交叉类型特点 1&2 == never
type Test1 = Intersection<1 | 2>;
// never 实际为 { a: 1; } & { a: 2; }
type Test2 = Intersection<{ a: 1 } | { a: 2 }>;
// { a: string; } & { a: number; }
type Test3 = Intersection<{ a: string } | { a: number }>;
```

> Note:  
> `((arg: 1)=>any | (arg: 2) => any) extends  (_: infer P) => any ? P : never;`  
> 试想`extends`后面的函数的参数在什么情况下又能接收`1`又能接收`2`  
> 只能是 `((arg: 1 & 2)=>any`, 因此获得交叉类型 `1&2` 即 `never`

## 应用实例

- 联合类型转换成函数交叉类型

```ts
// 联合类型转换成函数交叉类型
type IntersectionFn<T> = Intersection<UnionFn<T>>;
 // ((_: 1) => void) & ((_: 2) => void)
type Test4 = IntersectionFn<1 | 2>;
```

- 获取联合类型的最后一个
  
```ts
type F1 = ((arg: 1) => any) & ((arg: 2) => any);
type F2 = {
    (arg: 1): any;
    (arg: 2): any;
};
type F3 = F1 extends F2 ? true : false;                 // true, 匹配
type F4 = F1 extends (arg: infer P) => any ? P : never;     // 2, 只匹配最后一个
```  

> Note：函数交叉类型匹配一个函数类型只会匹配最后一个

```ts
// 根据函数交叉类型的特征获取最后一个交叉函数类型的参数类型
type LastUnion<T> = IntersectionFn<T> extends (_: infer P) => any ? P : never;
type Test5 = LastUnion<1 | 2>;      //2
```

- 删除联合类型的最后一个类型

```ts
// 排除联合类型中的最后一个类型，获取剩余类型
type PopUnion<T> = Exclude<T, LastUnion<T>>;
type Test6 = PopUnion<1 | 2 | 3>;       // 1| 2
```

> Note:  
> 以上各种转换并不保证顺序比如：  

```ts
type Test7 = LastUnion<1 | true | string>;      // 1, 结果是1并不是期待的 string
```
