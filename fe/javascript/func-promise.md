# 函数 Promise

异步，发出异步请求的线程不用等待异步操作完成，就接着执行下面的代码，异步操作的结果通过其他方式通知给发出异步请求的线程。

Promise 是一个代理对象，它与原先的异步操作没有什么关系。它接受一个“执行器 executor”作为参数，执行器在 Promise 实例创建后立刻开始执行。

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
    resolve("hello world");
  } else {
    reject("woring");
  }
});
```

## 检验是否是 Promise

```js
export function isDef{
  return v !== undefined && v !== null
}

export function isPromise {
  return (
    isDef(val) &&
    typeof val.then === "function" &&
    typeof val.catch === "function"
  )
}
```

## Promise.resolve()

这里必须插入介绍一下 Promise.resolve()。它是 Promise 的静态方法，可以返回一个状态为 fulfilled 的 Promise 实例。这个方法非常重要，其它方法都需要用它处理参数。它可以接受四种不同类型的参数，并且返回不同的值：

1. 参数为空，返回一个 fulfilled 实例，响应函数的参数也为空。
2. 参数不为空、也不是 Promise 实例，返回 fulfilled 实例，只不过响应函数能得到这个参数。
3. 参数为 Promise 实例，直接原样返回。
4. 参数为 thenable 对象，立刻执行它的 .then()

## 串联 Promise

每次调用 then()方法或 catch()方法时，实际上**创建并返回了另一个 Promise**,只有当第一个 promise 完成或者被拒绝后，第二个才会解决

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

p1.then(function(value) {
  console.log(value);
}).then(function() {
  console.log(finished);
});
```

### Promise 链的返回值

### 在 Promise 链中返回 Promise

.then() 其实接受两个函数作为参数，分别代表 fulfilled 状态时的处理函数和 rejected 状态时的处理函数。只不过通常情况下，我会建议大家使用 .catch() 捕获 rejected 状态。这个后面还会说到，暂时按下不表。
.then() 会返回一个新的 Promise 实例，所以它可以链式调用

## finally

> finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作，这样的话，同样的代码不用在 then 和 catch 里面写两遍

The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

模拟实现

```js
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (reason) =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};
```

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

## Promise.allSettled()

> returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise

如何使用 promise.all 模拟也很简单，把传入的 promise 的 catch 都 resolve 出来，即正确的结果和错误的结果都 resolve 出来

## 实现一个 promisfy

[nodejs util promisify 实现](https://github.com/nodejs/node/blob/v12.x/lib/internal/util.js#L277)

即一个函数，能够将异步函数传给

```js
function promisfy(fn, ctx) {
  return function() {
    let args = arguments;

    return new Promise(function(resolve, reject) {
      function callback(e, ...result) {
        if (e) {
          reject(e);
        } else {
          if (result.length == 1) {
            resolve(result[0]);
          } else {
            resolve(result);
          }
        }
      }

      let fnArgs = [];
      for (let i of args) {
        fnArgs.push(i);
      }
      fnArgs.push(callback);

      fn.apply(ctx, fnArgs);
    });
  };
}
```

## 参考

- [Promises/A+规范](https://promisesaplus.com/)
- [大白话讲解 Promise（一）](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)
