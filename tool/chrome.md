---
title: "浏览器 chrome"
date: 2019-03-15T10:23:33.895Z

categories: ["tool"]
---

> chrome 面板还是很有用的，了解一下

## chrome pannel

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
