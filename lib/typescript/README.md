# Typescript

## 三斜线

`/// <reference path="..." />`指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。
三斜线引用告诉编译器在编译过程中要引入的额外的文件。

## enum

[ss](https://stackoverflow.com/questions/50365598/typescript-runtime-error-cannot-read-property-of-undefined-enum)

[ss](https://stackoverflow.com/questions/50183529/why-does-typescript-think-my-enum-is-undefined/50185219)

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
`;
```

becomes:

```js
const elem = styled.div`
  border-radius: 10px;
  ${(p) =>
    p.available
      ? `background-image: ${availableIcon};`
      : `background-image: ${unavailableIcon};`}
`;
```
