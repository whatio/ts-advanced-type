# Tuple

## 内容概要

- Tuple类型特征介绍  
- Tuple类型操作

## 什么是Tuple

`Tuple`和`Array`解构很相似。区别在于`Array`存储的是`值`，`Tuple`存储的是`类型`。

```ts
let a1 = [0, 1, 2, 3];            // 存储的是具体值
type T1 = [0, 1, 2, 3];         // 存储的是字面量类型
type T2 = typeof a1;         // number[]
type IsNumTuple = T1 extends T2 ? true : false;     // true

const a2 = [0, 1, 2, 3] as const;
type T3 = typeof a2;         // readonly [0, 1, 2, 3]
```

> 我们知道字面量类型 `0, 1, 2, 3` 是类型`number`的子类型  
> 那么`类型[0, 1, 2, 3]` 也是 `类型number[]`的子类型, 所以 `IsNumTuple` 是`true`  
> 对`字面量类型`不熟悉的可以翻一下官方文档，里面有详细介绍
> 使用`const`转换可以把通用类型改成字面量类型

## length

和数组一样，Tuple也有`length`属性

```ts
type Length<T> = T extends { length: number } ? T["length"] : never;
type L1 = Length<T1>;        // 4, 这里的4是字面量类型4，而不是
type L2 = Length<T2>        // number
```

> 只有`字面量类型的Tuple`才能获取具体的`length`，否则`length`就是`number`

## Tuple[index]

和数组一样，Tuple也可以根据下标来访问其对应位置的元素类型

```ts
type Test = [0, 1, 2, 3][2];    // 2
type Test1 = [0, 1, 2, 3]["2"];    // 2
```

## Shift

`Tuple`可以利用函数参数类型特性实现类似数组的`shift`方法。
删除`Tuple`的第一个元素并返新的`Tuple`。

```ts
type Shift<T> = ((...args: T extends any[] ? T : never) => any) extends ((_: any, ...rest: infer P) => any) ? P : never;
type Test = Shift<[1, 2, 3, 4]>;          // [2, 3, 4]
```

## Pop

> 首先我们得知道TS的类型是一组类型特征的集合, 我们可以通过`Mapped-Type`来实现新的`Tuple`类型。

我们如果通过映射来把类型`U`的成员覆盖到类型`T`上呢

```ts
type Overwrite<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K];
};
type Test = Overwrite<[0, 1, 2, 3], ["a", "b", "c"]>;  // ["a", "b", "c", 3]
```

我们同样可以通过映射来实现`Tuple`的`pop`。
  
```ts
type Pop<T extends any[]> = Overwrite<Shift<T>, T>;
type Test = Pop<[0, 1, 2]>;   // [0, 1]

// Overwrite覆盖过程
// Shift<[0, 1, 2]>  => [1, 2]
// [1, 2][0] = [0, 1, 2][0] => [0, 2];
// [0, 2][1] = [0, 1, 2][1] => [0, 1];

```

> 首先我们可以通过`Shift<[0, 1, 2]>`获得一个长度减一的新`Tuple`类型`[1, 2]`  
> 我们把类型`[0, 1, 2]`的成员通过映射覆盖到`[1, 2]`上，这样就生成了新的类型`[0, 1]`了

## First

我们可以通过下标来获取tuple的第一个元素类型

```ts
type First<T extends any[]> = T extends [] ? never : T[0];
type Test = First<[0, 1, 2]>;     // 0
```

## Last

我们同样可以通过下标来获取tuple的最后一个元素类型`T[T.length-1]`  
> 我们知道类型是没有 `-` 运算符`的, 我们如何来获取最后一个下标index呢？

```ts
// 我们通过删除tuple的一个元素，来获取新tuple的长度
type EndIndex<T extends any[]> = Shift<T>["length"];
type IDX = EndIndex<["a", "b", "c"]>;     //  2

//让我们来实现Last
type Last<T extends any[]> = T extends [] ? never : T[Shift<T>["length"]];
type Test = Last<["a", "b", "c"]>;     //  c
```
