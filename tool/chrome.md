# 浏览器 chrome

## 浏览器的多进程

Chrome 浏览器使用多个进程来隔离不同的网页。因此在 Chrome 中打开一个网页相当于起了一个进程

### GUI 渲染线程

负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等

当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行

注意，GUI 渲染线程与 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了），GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行

### JS 引擎线程

也称为 JS 内核，负责处理 Javascript 脚本程序。（例如 V8 引擎）

JS 引擎线程负责解析 Javascript 脚本，运行代码。

JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序

同样注意，GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

### load 事件与 DOMContentLoaded 事件的先后

上面提到，渲染完毕后会触发 load 事件，那么你能分清楚 load 事件与 DOMContentLoaded 事件的先后么？
很简单，知道它们的定义就可以了：

当 DOMContentLoaded 事件触发时，仅当 DOM 加载完成，不包括样式表，图片。
(譬如如果有 async 加载的脚本就不一定完成)

当 onload 事件触发时，页面上所有的 DOM，样式表，脚本，图片都已经加载完成了。
（渲染完毕了）

所以，顺序是：DOMContentLoaded -> load

## chrome pannel

> chrome 面板还是很有用的，了解一下

### Memory

- head snapshot(堆快照)
- allocation instrumentation(仪表化) on timeline
- allocation sampling(抽样)

### [JS Debugging](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)

## [step into vs step over](https://stackoverflow.com/questions/3580715/what-is-the-difference-between-step-into-and-step-over-in-the-eclipse-debugger)

- Step Into：A method is about to be invoked, and you want to debug into the code of that method, so the next step is to go into that method and continue debugging step-by-step.
- Step Over：A method is about to be invoked, but you're not interested in debugging this particular invocation, so you want the debugger to execute that method completely as one entire step.
- Resume：You want the debugger to resume "normal" execution instead of step-by-step

### chrome 控制台 console

可以选择执行环境

其他框架和扩展程序在其自身的环境中运行。 要使用这些其他环境，您需要从下拉菜单中选中它们。 例如，如果您要查看  `<iframe>`  元素的日志输出，并修改该环境中存在的某个变量，您需要从 Execution Context Selector 下拉菜单中选中该元素。控制台默认设置为  top  环境，除非您通过检查其他环境中的某个元素来访问 DevTools。 例如，如果您检查  `<iframe>`中的一个  `<p>`  元素，那么，DevTools 将 Execution Context Selector 设置为该  `<iframe>`  的环境。当您在  top  以外的环境中操作时，DevTools 将 Execution Context Selector 突出显示为红色，如下面的屏幕截图中所示。 这是因为开发者很少需要在  top  以外的任意环境中操作。 输入一个变量，期待返回一个值，只是为了查看该变量是否为  undefined（因为该变量是在不同环境中定义的），这会非常令人困惑。

## 控制台

> 看大佬调试，经常使用$0，$1，来使用标签

$0 is the last selected DOM node index. Chrome assigns an index to each DOM node you select. So $0 will always point to the last node you selected, while \$1 will point to the node you selected before that. Think of it like a stack of most recently selected nodes

## `$0`

Your most recent selection (in the elements inspector, or on the page with 'Inspect Element') is stored in $0. Your second-most-recent is $1, and so on, up through \$4.

点击一下 element，便可以使用`$0` 来访问了

## `element.__vue__`

这个属性，一般会在组件的根元素上有

## 参考

- [从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)
- [掘金小册：你不知道的 Chrome 调试技巧](https://juejin.im/book/5c526902e51d4543805ef35e)
