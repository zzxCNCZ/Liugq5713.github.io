# 事件模型

> 事件流：从页面中接受事件的顺序，事件处理程序以 on 开头

DOM Level 2 Events(事件模型)：捕获阶段-目标阶段-冒泡阶段

```js
/*
 *event: 字符串，指定事件名
 *function: 指定要事件触发时执行的函数
 *useCapture: 布尔值，指定事件是否在捕获或冒泡阶段执行
 */
element.addEventListener(event, function, useCapture)
```

## 事件处理程序

### HTML 事件处理程序

`<button onclick="alert('success')">点我</button>`

::: danger 不推荐使用，问题：

- 时差问题，html 加载之后，用户触发了事件，但是 js 未加载
- HTML 和 JS 耦合

:::

### DOM0 级事件处理程序

eg:如何取消点击事件，可以将 DOM 元素的 onClick 属性设置为 null

::: danger 缺点

只能绑定一个事件，如果绑定多个，后面的会覆盖前面的

不能控制元素的事件流

:::

### DOM2 级事件处理程序

[EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

> 事件监听其实非常的常用，但是它的第三个参数不是很了解

- capture: A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
- once: A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
- passive: A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more.

#### passive

> vue 的事件处理有一个 passive 的修饰符，好奇就查了一下，原来和移动端有关。使用这个属性可以优化页面滚动

移动端页面很多监听了 touch 事件，由于 touchstart 事件对象的 cancelable 属性为 true，也就是说它的默认行为可以被监听器通过 preventDefault() 方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 preventDefault()，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。

所以，passive 监听器诞生了，passive 的意思是“顺从的”，表示它不会对事件的默认行为说 no，浏览器知道了一个监听器是 passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了

#### useCapture

A Boolean indicating whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.

默认是 false,即事件默认在冒泡阶段被触发

### IE 事件处理程序

IE 只支持事件冒泡

### 事件处理器属性 onclick vs addEventListener 添加的点击事件

onclick 是一种覆盖绑定操作，而 addEventListener 是增加更多回调绑定，要有用得多，因为有时候一个元素的同一个事件需要作不同响应。

### 事件对象

有时候在事件处理函数内部，您可能会看到一个固定指定名称的参数，例如 event，evt 或简单的 e。 这被称为事件对象，它被自动传递给事件处理函数，以提供额外的功能和信息。

- target 属性
  事件对象 e 的 target 属性始终是事件刚刚发生的元素的引用

::: tip 阻止默认行为
有时，你会遇到一些情况，你希望事件不执行它的默认行为。 最常见的例子是 Web 表单，例如自定义注册表单。 当你填写详细信息并按提交按钮时，自然行为是将数据提交到服务器上的指定页面进行处理，并将浏览器重定向到某种“成功消息”页面
:::

```js
form.onsubmit = function(e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault()
    para.textContent = "You need to fill in both names!"
  }
}
```

### 事件冒泡和捕获

在现代浏览器中，默认情况下，所有事件处理程序都在冒泡阶段进行注册。

举个例子：浏览器检查实际点击的元素是否在冒泡阶段中注册了一个 onclick 事件处理程序，如果是，则运行它，然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达`<html>`元素

::: tip 用 stopPropagation()修复问题

标准事件对象具有可用的名为 stopPropagation()的函数, 当在事件对象上调用该函数时，它只会让当前事件处理程序运行，但事件不会在冒泡链上进一步扩大，因此将不会有更多事件处理器被运行(不会向上冒泡)。所以，我们可以通过改变前面代码块中的第二个处理函数来解决当前的问题
:::

```js
div.onclick = function(e) {
  e.stopPropagation()
  // do something
}
```

::: tip 冒泡还允许我们利用事件委托
这个概念依赖于这样一个事实,如果你想要在大量子元素中单击任何一个都可以运行一段代码，您可以将事件监听器设置在其父节点上，并将事件监听器气泡的影响设置为每个子节点，而不是每个子节点单独设置事件监听器。
:::

## 常用事件

### beforeunload 用户离开或者刷新时提示保存

custom messages in onbeforeunload dialogs are deprecated since chrome-51

[取消自定义消息的原因](https://stackoverflow.com/questions/37782104/javascript-onbeforeunload-not-showing-custom-message)：To avoid scamming, chromium and hence chrome have decided to remove the ability to set a custom message in the onbeforeunload dialog.

```js
window.addEventListener("beforeunload", event => {
  // Cancel the event as stated by the standard.
  event.preventDefault()
  // Chrome requires returnValue to be set.
  event.returnValue = ""
})
```

### mouseover vs mouseenter

和 mouseover 不同的是，mouseenter 不支持事件冒泡

## 事件广播

```js
var event= new Event('build');

// listener for the event
element.addEvenetListener('build', function(e) {...}, false);

//Dispatch the event
element.dispatchEvent(event);
```

## 参考

- [MDN 事件介绍](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- [移动端 300ms 点击延迟和点击穿透](https://juejin.im/post/5b3cc9836fb9a04f9a5cb0e0)
