# 浏览器

浏览器博大精深

## [如何检测控制台是否打开](https://imjad.cn/archives/lab/check-browser-devtools-open)

> 这部分内容之前没有了解过，具体的应用比如前端反调试？

- 在控制台打开的时候, 打印 html 元素会去取 id 属性的值, 只要覆盖 id 属性的 get 方法, 就可以判断是否开启控制台
- 通过检测窗口尺寸大小间接判断
- 重写 toString 方法,打印普通对象的日志会调用该对象的 toString 方法。

```js
var re = /x/
re.toString = function() {
  /* TODO */
  alert()
  return ""
}
console.log(re)
```

## 防抖 vs 节流

防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

节流的原理很简单：如果你持续触发事件，每隔一段时间，只执行一次事件。

### 防抖(最后一定会触发)

```js
function debounce(func, wait) {
  let timeout
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}
```

### 节流（一段事件内触发）

```js
function throttle(func, wait) {
  let timeout
  return function() {
    context = this
    args = arguments
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
```

## url 里面可以执行 JavaScript

这样的就可以自己用 JavaScript 写一串代码，然后保存在书签栏里面，点击就执行了

[转化地址](https://mrcoles.com/bookmarklet/)

## 手机应用里面的 webview 如何调试？

通过数据线将安卓手机连接，打开 PC 的 Chrome 浏览器，在地址栏输入 chrome://inspect/，并且在安卓应用里面打开一个嵌套在 webview 的网页，chrome 会检测到。
然后将你的项目启动，在 chrome 的调试界面的控制台下，通过 location，将网页重定向到你开发的网页。然后就可以舒舒服服的工作了。

## 手机端的控制台

> 这个软件可真是太帅了

[eruda](https://github.com/liriliri/eruda)

## [内存泄漏](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them//)

> JavaScript is one of garbage collected languages.

内存泄漏的几种方式

- Accidental global variables
- Forgotten timers or callbacks
- Out of DOM references
- Closures
