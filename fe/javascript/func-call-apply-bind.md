# 函数 Call Apply Bind

`function.call(thisArg, arg1, arg2, ...)`

## TL;DR

这三个方法用于改变函数执行的上下文（改变 this 的指向），实现函数的复用.

call 和 apply 的传参不同，call 接收逗号分隔的参数，apply 接收数组（如何记不清这两个方法的区别的话，可以记 **apply 接收 array，都是 a 开头的**，这样比较好记），调用都会立即执行。而 bind 调用完返回的是一个函数，需要再次调用才会执行

## 模拟 call

::: tip 常见面试题 call 的模拟实现

将函数设为对象的属性（this 参数可以传 null，当为 null 的时候，视为指向 window）

执行该函数(注意函数可以传参且个数不定，函数执行后可能有返回值)

删除该函数

:::

<<< @/fe/javascript/code/simulation-call.js

## [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

> The bind() function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function

```js
function log(...args) {
  console.log(this, args)
}

log.bind({ name: "a" }, 1, 2).bind({ name: "b" }, 3, 4)()
// 输出的结果： {name:'a'}  [1,2,3,4]
```

bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

::: tip bind 的特点

- 返回函数
- bind 的时候可以传参
- 一个绑定函数也能使用 new 操作符创建对象

:::

<<< @/fe/javascript/code/simulation-bind.js

## 参考

- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
- [JavaScript 深入之 bind 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
- [“寒冬”三年经验前端面试总结（含头条、百度、饿了么、滴滴等）之手写题（一）](https://juejin.im/post/5d9eef20e51d45781332e961#heading-8)
