# Event

## onclick vs addEventListener 添加的点击事件

onclick 是一种覆盖绑定操作，而 addEventListener 是增加更多回调绑定，要有用得多，因为有时候一个元素的同一个事件需要作不同响应。

## [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

> 事件监听其实非常的常用，但是它的第三个参数不是很了解

### options

- capture: A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
- once: A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
- passive: A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more.

#### passive

> vue 的事件处理有一个 passive 的修饰符，好奇就查了一下，原来和移动端有关。使用这个属性可以优化页面滚动

移动端页面很多监听了 touch 事件，由于 touchstart 事件对象的 cancelable 属性为 true，也就是说它的默认行为可以被监听器通过 preventDefault() 方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 preventDefault()，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。

所以，passive 监听器诞生了，passive 的意思是“顺从的”，表示它不会对事件的默认行为说 no，浏览器知道了一个监听器是 passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了

### useCapture

A Boolean indicating whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.

useCapture defaults to false.

## 点击穿透

click 事件什么时候触发？

浏览器在 touchend 之后会等待约 300ms ，如果没有 tap 行为，则触发 click 事件。

## tips

用 tab 键移动到某个链接然后按下回车键的动作也会触发 onclick 事件

## 常用事件

### beforeunload 用户离开或者刷新时提示保存

custom messages in onbeforeunload dialogs are deprecated since chrome-51

[取消自定义消息的原因](https://stackoverflow.com/questions/37782104/javascript-onbeforeunload-not-showing-custom-message)：To avoid scamming, chromium and hence chrome have decided to remove the ability to set a custom message in the onbeforeunload dialog.

```js
window.addEventListener("beforeunload", event => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = "";
});
```

### mouseover vs mouseenter

和 mouseover 不同的是，mouseenter 不支持事件冒泡
