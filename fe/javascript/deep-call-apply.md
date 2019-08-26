# Call

`function.call(thisArg, arg1, arg2, ...)`

## 模拟

::: tip 常见面试题 call 的模拟实现

将函数设为对象的属性（this 参数可以传 null，当为 null 的时候，视为指向 window）

执行该函数(注意函数可以传参且个数不定，函数执行后可能有返回值)

删除该函数

:::

<<< @/fe/javascript/code/simulation-call.js

## 参考

- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
