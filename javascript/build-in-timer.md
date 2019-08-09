# 内置对象 定时器

## setTimeout

### 参数

- function/code

function 是你想要在 delay 毫秒之后执行的函数
code 是一个替代语法，你可以使用字符串代替 function ，在 delay 毫秒之后执行字符串 (使用该语法是不推荐的, 原因和使用 eval()一样，有安全风险)

- delay 可选

延迟的毫秒数 (一秒等于 1000 毫秒)，函数的调用会在该延迟之后发生。**如果省略该参数，delay 取默认值 0**。实际的延迟时间可能会比 delay 值长，原因请查看 Reasons for delays longer than specified

- param1, ..., paramN 可选

附加参数，一旦定时器到期，它们会作为参数传递给 function 或 执行字符串（setTimeout 参数中的 code）
定时器的第一个参数 字符串（不推荐，会造成 JS 二次解析）/函数

### 返回值

返回值 timeoutID 是一个正整数，表示定时器的编号。这个值可以传递给 clearTimeout()来取消该定时。需要注意的是 **setTimeout()和 setInterval()共用一个编号池**

### 注意事项

- 定时器的销毁你要注意，不仅仅是你不使用的时候，当这个组件销毁的时候（比如路由切换的时候，要在其生命周期里面手动销毁）

- 定时器都有最短的时间间隔，setTimeout 最短时间间隔是 4 毫秒，setInterval 最短时间间隔是 10 毫秒

### Recursive setTimeout

```js
let timerId = setTimeout(function tick() {
  alert("tick");
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

优点：

- more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.
- Recursive setTimeout guarantees a delay between the executions, setInterval – does not.

## setInterval

> 网上一些文章说 setInterval 在进程繁忙的时候，会跳过，这个说对了一半

其运行过程 应该是 setNextTimer(),然后 doJob()。

举个例子，就像一列有时刻表的列车，如果被延时了，那么被延时的列车会发车。（延时期间该发的车不会再次发了）。正常之后还是按着原有的时刻表发车
[查看示例](https://jsfiddle.net/liugq/n9Ljq1cw/)
