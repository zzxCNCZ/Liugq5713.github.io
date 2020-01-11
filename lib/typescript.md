## 基础

仅仅需要安装 typescript，然后就可以使用 tsc 命令去将 ts 文件转为 js 文件了

`npm install -g typescript`

不过基于项目驱动学习的方法，我是新建了一个使用 ts 的 react 项目

`npx create-react-app my-app --typescript`

一般问题，查一下文档基本就可以解决。我把花时间较多解决的问题记录一下。

## Type Operations & Runtime

Type Operations Cannot Affect Runtime Values

You can think of all TypeScript errors as being similar to warnings in those languages: it’s likely that they indicate a problem and are worth investigating, but they won’t stop the build.

The instanceof check happens at runtime, but Rectangle is a type and so it cannot affect the runtime behavior of the code.

```typescript
function asNumber(val: number | string): number {
  return val as number;
}
```

Looking at the generated JavaScript makes it clear what this function really does:

```js
function asNumber(val) {
  return val;
}
```

TypeScript can get quite confusing when your runtime types don’t match the declared types, and this is a situation you should avoid whenever you can.

You can provide multiple declarations for a function, but only a single implementation:

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a, b) {
  return a + b;
}
const three = add(1, 2); // Type is number const twelve = add('1', '2'); // Type is string
```

## Duck Type

To ascertain the type of shape you’re dealing with, you’ll need some way to reconstruct its type at runtime. In this case you can check for the presence of a height property

This works because the property check only involves values available at runtime, but still allows the type checker to refine shape’s type to Rectangle.

Some constructs introduce both a type (which is not available at runtime) and a value (which is). The class keyword is one of these

(“If it walks like a duck and talks like a duck…”) TypeScript models this behavior, and it can sometimes lead to surprising results because the type checker’s understanding of a type may be broader than what you had in mind.

## TypeScript 配置

`strictNullChecks` controls whether null and undefined are permissible values in every type.

For new projects, you should start with noImplicitAny on, so that you write the types as you write your code.

If you want to disable output on errors, you can use the `noEmitOnError` option in tsconfig.json, or the equivalent in your build tool.

## Cannot compile namespaces when the '--isolatedModules' flag is provided

```ts
const obj = {
  name: "lily",
  age: 12
};

Object.keys(obj).map(item => {
  console.log(obj[item]);
  return item;
});
```

这个报错

Turns out A global file cannot be compiled using '--isolatedModules'. Ensure your file contains imports, exports, or an 'export {}' statement.
