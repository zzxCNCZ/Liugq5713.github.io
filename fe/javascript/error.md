# 错误处理

[try catch 教程](https://javascript.info/try-catch)，有代码示例，自己可以跟着一步一步的做，本文基于此

错误处理真的很必要，它强迫我们站在用户的角度去思考问题，如果这段代码就是出了问题怎么办？

我最近就遇到了这样的问题，我司的图片需要生成水印，但是生成水印的过程有点长，我给它加上了 loading 效果。等水印完成的时候取消 loading 状态。当时目测这样没什么问题，但我们的图片是放在七牛上的，请求图片的时候可能会失败（虽然这个概率很小），如果我没有做错误处理，很可能就一直的 loading 下去，用户可能就傻傻的等着。解决方法也很简单，捕获到这个错误，取消 loading 状态，让用户重新上传图片，或者我再去请求一下放在七牛上面的图片

## try..catch 如何起作用

有朋友可能觉得这个问题很简单，当然是代码里面有错的时候起作用啊。emm，有道理，但是不够深入，具体有两点

- try..catch 仅仅能捕获运行时的错误

你一个不能运行的代码估计 eslint 都通不过，例如下面的代码

```js
try {
  {{{{{{{{{{{{
} catch(e) {
  alert("The engine can't understand this code, it's invalid");
}
```

- try..catch  捕获同步代码的错误

比如这样，他就捕获不到错误，但是也许现在浏览器智能了，谷歌浏览器会在控制台里面贴心的显示`Uncaught Error: test`

```js
try {
  setTimeout(function() {
    throw new Error("test");
  }, 1000);
} catch (e) {
  alert("catch a error");
}
```

## 想[自定义错误](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)抛出

通过 `Error` 构造函数（当然基于 Error 还有其他的错误构造函数），在把它 [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) 出去即可，如果`throw`出去的错误没有被`catch`，那么程序就会被终止

## 如果 try 语句里发生了多个错误

我们可以通过`Error`的`name`来判断是那个错误

`Catch should only process errors that it knows and “rethrow” all others.`

The “rethrowing” technique can be explained in more detail as:

- Catch gets all errors.
- In catch(err) {...} block we analyze the error object err.
- If we don’t know how to handle it, then we do throw err.

## try…catch…finally

finally 运行有几条规则

- after try, if there were no errors
- after catch, if there were errors
- The finally clause works for any exit from try..catch. That includes an explicit return. （这一条也挺有用的，如果 try 语句块里面有 return，finally 语句会在 return 之前执行）

## 几种写法都是可以的

```js
try {
  // ...
} catch {
  // error object omitted
}

try {
  // ...
} finally {
  // complete that thing even if all dies
}
```

## try catch 可以捕获 async 代码

<<< @/fe/javascript/code/error-try-catch-async.js
