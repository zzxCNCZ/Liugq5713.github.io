# 类型别名(Type Aliases)

## type aliases vs interface

- type aliases 可以声明基本类型，联合类型，元祖等类型

## 关键字

使用类型别名可以实现很多复杂的类型，很多复杂的类型别名都需要借助关键字，我们先来了解一下几个常用的关键字

### extends

extends 可以用来继承一个类，也可以用来继承一个 interface，但还可以用来判断有条件类型

原理是令 T' 和 U' 分别为 T 和 U 的实例，并将所有类型参数替换为 any，如果 T' 能赋值给 U'，则将有条件的类型解析成 X，否则为 Y。

```ts
type Words = "a" | "b" | "c";

type W<T> = T extends Words ? true : false;

type WA = W<"a">; // -> true
type WD = W<"d">; // -> false
```

### typeof

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

const jack: Person = { name: "jack", age: 100 };
type Jack = typeof jack; // -> Person

function foo(x: number): Array<number> {
  return [x];
}

type F = typeof foo; // -> (x: number) => number[]
```

### keyof

keyof 可以用来取得一个对象接口的所有 key 值

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat"
type K3 = keyof { [x: string]: Person }; // string | number
```

### in

in 可以遍历枚举类型

```ts
type Keys = "a" | "b";
type Obj = {
  [p in Keys]: any;
}; // -> { a: any, b: any }
```

### infer

举个例子

先说一个简单的例子，判断一个类型是否是 Promise

`type isPromisify<T> = T extends Promise<any> ? T : never`

```ts
type Unpromisify<T> = T extends Promise<infer R> ? R : T;
```

判断一个类型是否是继承 Primise,如果是的话，就从 Promise 提取这个类型，如果不是的话就仅仅保持原样

```ts
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number
```

## 参考

- [TypeScript Tutorial - 'infer' keyword](https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn)
