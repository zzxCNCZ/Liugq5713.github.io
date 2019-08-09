# 浏览器

浏览器博大精深

## [如何检测控制台是否打开](https://imjad.cn/archives/lab/check-browser-devtools-open)

> 这部分内容之前没有了解过，具体的应用比如前端反调试？

- 在控制台打开的时候, 打印 html 元素会去取 id 属性的值, 只要覆盖 id 属性的 get 方法, 就可以判断是否开启控制台
- 通过检测窗口尺寸大小间接判断
- 重写 toString 方法,打印普通对象的日志会调用该对象的 toString 方法。

```js
var re = /x/;
re.toString = function() {
  /* TODO */
  alert();
  return "";
};
console.log(re);
```

## 防抖 vs 节流

防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

节流的原理很简单：如果你持续触发事件，每隔一段时间，只执行一次事件。

## url 里面可以执行 JavaScript

这样的就可以自己用 JavaScript 写一串代码，然后保存在书签栏里面，点击就执行了

[转化地址](https://mrcoles.com/bookmarklet/)
