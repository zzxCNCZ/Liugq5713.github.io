# 函数 Async 和 Await

如何实现一个函数，使得 repeat(() => {console.log('1')}, 5, 2000) 每两秒执行一次打印，总共五次?

> 请大家在处理异步操作时，使用 async function，这样能够写出简洁的，让人非常容易阅读和理解的代码来。

```js
function wait(millisecond) {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond)
  })
}

async function repeat(task, count = 1, millisecond = 0) {
  while (count--) {
    await wait(millisecond)
    task()
  }
}
```

使用起来也很方便

```js
;(async () => {
  await repeat(taskA, 3, 1000)
  taskB()
})()

// 重要： 如果你想让函数同步执行，去掉await
repeat(taskA, 3, 1000)
taskB()
```

## async 函数的实现原理

async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里

```js
function fn(args) {
  return spawn(function*() {
    // ...
  })
}
```

Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象(遍历器对象)

spawn 函数就是自动执行器。下面给出 spawn 函数的实现，基本就是前文自动执行器的翻版。简单来说就是使用 Promise 实现函数控制权的转移

```js
function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF()
    function step(nextF) {
      let next
      try {
        next = nextF()
      } catch (e) {
        return reject(e)
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(
        v => {
          step(function() {
            return gen.next(v)
          })
        },
        e => {
          step(function() {
            return gen.throw(e)
          })
        }
      )
    }
    step(function() {
      return gen.next(undefined)
    })
  })
}
```

## 使用技巧

- 多个 await 命令后面的异步操作，如果不存在继发关系，最好让它们同时触发

```js
let foo = await getFoo()
let bar = await getBar()
```

上面代码中，getFoo 和 getBar 是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有 getFoo 完成以后，才会执行 getBar，完全可以让它们同时触发。

```js
let [foo, bar] = await Promise.all([getFoo(), getBar()])
```

### Iterating Sequential Asynchronous Operations

```js
function doAsyncToAllSequentially(values) {
  return values.reduce((previousOperation, val) => {
    return previousOperation.then(() => doSomethingAsync(val))
  }, Promise.resolve())
}
```

## 参考

- [ES6 入门](https://es6.ruanyifeng.com/#docs/async)
- [JS 之最佳实践（1）](https://github.com/akira-cn/FE_You_dont_know/issues/15)
- [Patterns for Asynchronous Operations with async](https://careersjs.com/magazine/async-patterns/)
