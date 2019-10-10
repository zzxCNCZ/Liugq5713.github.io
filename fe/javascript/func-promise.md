# 函数 Promise

## Promise 状态

> promise 相当于状态的占位符

- Pending
- Fulfilled
- Rejected
- Settled

## 创建 Promise

```js
new Promise((resolve, reject) => {
  if (true) {
    resolve("hello world")
  } else {
    reject("woring")
  }
})
```

## 串联 Promise

每次调用 then()方法或 catch()方法时，实际上**创建并返回了另一个 Promise**,只有当第一个 promise 完成或者被拒绝后，第二个才会解决

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42)
})

p1.then(function(value) {
  console.log(value)
}).then(function() {
  console.log(finished)
})
```

### Promise 链的返回值

### 在 Promise 链中返回 Promise

## 错误处理

- “then”接受两个参数，一个处理成功，一个处理失败
- catch : catch 并无任何特殊之处，只是 then(undefined, func) 的语法糖

## Promise.all & Promise.race

- Promise.all
  创建一个 Promise，当且仅当传入数组中的所有 Promise 都确认之后才确认，如果遇到数组中的任何一个 Promise 以否定结束，则抛出否定结果。
- Promise.race
  创建一个 Promise，当数组中的任意对象确认时将其结果作为确认结束，或者当数组中任意对象否定时将其结果作为否定结束。

::: tip 使用场景: 比如我们可以用 race 给某个异步请求设置超时时间，并且在超时后执行相应的操作

写一个超时函数，比如限制 5 秒，如果 5 秒之内请求成功，返回 requestImg(）的内容，如果失败了，返回的就是 timeout 的内容

:::

`Promise .race([requestImg(), timeout()])`

## 参考

- [大白话讲解 Promise（一）](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)
