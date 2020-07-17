# Typescript

## tsconfig

可以通过 tsc --init 帮助你快速生成 ts 配置文件

## 三斜线

`/// <reference path="..." />`指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。
三斜线引用告诉编译器在编译过程中要引入的额外的文件。

## enum

[ss](https://stackoverflow.com/questions/50365598/typescript-runtime-error-cannot-read-property-of-undefined-enum)

[ss](https://stackoverflow.com/questions/50183529/why-does-typescript-think-my-enum-is-undefined/50185219)

[get a list of keys from an enumerator](https://stackoverflow.com/questions/48413651/is-there-a-simple-way-to-get-a-list-of-keys-numbers-from-enum-in-typescript)

In this generated code, an enum is compiled into an object that stores both forward (name -> value) and reverse (value -> name) mappings. References to other enum members are always emitted as property accesses and never inlined.

## ts 将枚举转为数组

A tricky bit is that TypeScript will 'double' map the enum in the emitted object, so it can be accessed both by key and value.

```js
enum MyEnum {
    Part1 = 0,
    Part2 = 1
}
```

`Object.values()` will be emitted as

```js
{
   Part1: 0,
   Part2: 1,
   0: 'Part1',
   1: 'Part2'
}
```

`Object.values(MyEnum).filter(val => !isNaN(Number(val)))`

## typescript style plygin 会报错

- [相关 issue](https://github.com/microsoft/typescript-styled-plugin/issues/100)

If you have the same issue, you can work around it like this:

```js
const elem = styled.div`
  border-radius: 10px;
  background-image: url(${(p) =>
    p.available ? availableIcon : unavailableIcon});
`
```

becomes:

```js
const elem = styled.div`
  border-radius: 10px;
  ${(p) =>
    p.available
      ? `background-image: ${availableIcon};`
      : `background-image: ${unavailableIcon};`}
`
```

## 双重断言

那么我们是不是可以使用双重断言 as any as Foo 来将任何一个类型断言为任何另一个类型呢？

```js
interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}
```

在上面的例子中，若直接使用 cat as Fish 肯定会报错，因为 Cat 和 Fish 互相都不兼容。
但是若使用双重断言，则可以打破「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」的规则，将任何一个类型断言为任何另一个类型。
若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。

## [Typescript make one parameter type depend on the other parameter](https://stackoverflow.com/questions/48232339/typescript-make-one-parameter-type-depend-on-the-other-parameter)

assignAction<K extends keyof T>(key: K, value: T[K]): void;

## Using the in operator

The in operator now acts as a narrowing expression for types.

## 泛型约束

我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：

```js
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```
