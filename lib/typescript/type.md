# 类型别名(Type Aliases)

- 条件冲突的参考 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html

## [infer](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)

## 条件类型

Conditional Types T extends U ? X ：Y 这个类型意味着当 T 可以声明给 U，那么类型就是 X 否则类型就是 Y

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

## TLDR

类型推断：发生在初始化变量和成员，设置默认参数值和决定函数返回值时，会选择最佳的通用类型。

兼容性：typesript 会根据结构来兼容类型

## 类型推断

简单的情况 `let x = 3`

这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。

### 最佳通用类型

`let x = [0, 1, null];` ts 会选择最通用的类型。

如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]。

eg: `let zoo = [new Rhino(), new Elephant(), new Snake()];`

### 上下文类型

按上下文归类会发生在表达式的类型与所处的位置相关时。比如：

```js
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button); //<- Error
};
```

## 类型兼容性

TypeScript 里的类型兼容性是基于结构子类型的。

结构类型是一种只使用其成员来描述类型的方式

```js
interface Named {
  name: string;
}

class Person {
  name: string;
}

// Person 和 Named 都有 name 属性
let p: Named;
// OK, because of structural typing
p = new Person();
```

TypeScript 结构化类型系统的基本规则是，如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性

### 如何比较两个函数相同

```js
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```

x 能够复制给 y

首先看他们的参数列表,要查看 x 是否能赋值给 y，首先看它们的参数列表。 x 的每个参数必须能在 y 里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型

### 为什么可以忽略参数

因为忽略参数对于 js 来说，是可以的。不如 forEach 函数，我们很可能就用到它第一个参数

## typescript 声明函数

```ts
let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

因为这定义了函数的类型，所以可能就会有重载的需求

## Omit vs Exclude

typescript 类型的变化，omit 和 exclude 的区别：https://stackoverflow.com/questions/56916532/difference-b-w-only-exclude-and-omit-pick-exclude-typescript

exclude 的底层实现： `type Exclude<T, U> = T extends U ? never : T;`

## 获取对象的 key 作为类型

```js
const createWay = {
  create: '创建新的词槽',
  reuse: '复用已有词槽'
}

type CreateWay = keyof typeof createWay;
```

## 参考

- [TypeScript Tutorial - 'infer' keyword](https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn)
