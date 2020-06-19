# Union Types & Intersection Types

## 内容概要

- 交叉类型和联合类型的特征介绍  
- 条件类型的特征以及分配规则  
- 联合类型如何转换成交叉类型  
- 函数交叉类型的特征  
- 应用实例
  - 获取联合类型的最后一个类型
  - 删除联合类型的最后一个类型

## 交叉类型(Intersection-Types)  

- 合并多个类型组成一个新类型，新类型具有合成类型的所有特征
- 对于`A & B`, 如果某类型不能同时为`A`和`B`，则最终得到的交叉类型为`never`
- 对于`A & B`, 如果类型`A`和`B`是包含关系，则最终得到`A`和`B`的交集类型

```ts
type A = 1 & 2;                               // never, B类型不能同时为1和2
type B = 1 & number;                    // 1, number和1的交集为1
type C = 1 & never;                        //never, never和任何类型的交集都是never
```

## 联合类型(Union-Types)

- 对于`A | B`, 如果类型`A`和`B`是包含关系，则最终得到`A`和`B`的并集

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
type Test = Distributive<1 | 2>;
// Test = { key: 1; } | { key: 2; }
```

> Note：根据条件类型的分配规则 `Test = { key: 1; } | { key: 2; } 而不是 { key: 1 | 2; };`

## 联合类型转换成交叉类型

- 根据条件类型的分配规则，把联合类型转换成联合函数类型

```ts
type UnionFn<T> = T extends any ? (_: T) => void : T;
type Test = UnionFn<1 | 2>;         //type Test = ((_: 1) => void) | ((_: 2) => void)
```

- 函数类型转换成交叉类型

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

- 联合类型转换成函数交叉类型

```ts
// 联合类型转换成函数交叉类型
type IntersectionFn<T> = Intersection<UnionFn<T>>;
 // ((_: 1) => void) & ((_: 2) => void)
type Test4 = IntersectionFn<1 | 2>;
```

- 交叉类型函数类型特征
  
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

## 应用实例

- 获取联合类型的最后一个

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