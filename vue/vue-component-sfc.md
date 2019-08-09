# 如何写好`vue`单文件

> 写`vue`已经有半年多了。从一个只是写过一点点 `React` 的毕业生，到现在熟练写`vue`的搬砖工。心里也是有些感慨。仅以此文，纪念我每天搬的砖。 本文仅仅讨论`vue`单文件组件，

## [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

我参加工作的时候，由于对`vue`一无所知。看了几天文档就直接上手写代码了。当初，写`react`的时候，`react`会强迫你把页面上的元素拆成很多小组件，然后拼接起来。写`vue`的时候，我也照着`react`方式，将`vue`拆成很多个组件。但是由于当时不太懂组件之间的通信，结果写的一团糟。指导我的导师拿着我的代码告诉我不用拆分那么细，或者说没有必要拆分。当时我的犹如醍醐灌顶，恍然大悟。然后把所有的代码写在了一个单文件组件里面了(可能是当时我的页面功能其实不是很多)，真的是方便快捷。

`vue`的单文件组件十分的优秀，对新手十分的友好。在你刚开始接触`vue`的时候，完全不用考虑父子组件通信。你愿意，可以把代码逻辑全部放在一个文件里。有一些祖传代码就是这样写的，我也是非常无语。

### vue 单文件组织

vue 文件如果条理清楚一点的话，还是可以阅读的。整理出了几条经验，如下：

## 如何把一个 vue 文件拆分？

## [props](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-camelCase-vs-kebab-case)

`vue`和`react`组件传递值的方式类似，都是通过 props。且都不建议在子组件里面直接修改`props`的值。但是`vue`和`react`子组件父组件通信的方式却有点不同，这里我就不详诉了，文档写的很好。

## 父子组件通讯

> 简单说一下，方便理解 v-model .sync 的语法糖

首先，我们有两个组件，一个父组件，一个子组件。vue 是单向数据流的，也就是说 父组件变化后，父组件通过 props 向子组件传递新数据。但是子组件如何通知父组件，子组件本身变化了呢？

也十分的简单，子组件通过 `emit`手动触发一个事件，父组件监听子组件触发的事件以及它传过来的数据

### [v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

相对于普通的方式，这种方式让你不用写父组件的监听函数，以及`props`

学过`vue`的都知道，`v-model`是语法糖。

一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件。在子组件里甚至可以不用显式的声明 `props:['value']`，就可以直接修改 `v-model` 的值

```html
// 在父组件上的data方法上声明一个single变量，并且通过v-model传入Child组件
<Child v-model="single" />
```

```js
// 子组件中，完全不必写props:['value']
// 通过emit一个input事件就可以直接修改父组件里面 single 的值。
// 但是如果你要使用 value 的值，那么你就需要申明了
this.$emit('input', 'i am change')
```

### [.sync](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

> 双向绑定的的需求十分的强烈，看看 vue 把。.sync 移除然后又移回来就知道了

相对于普通的方式，这种方式让你不用写父组件的监听函数

```js
// 更新从父组件来的 syncVar 变量

this.$emit('update:syncVar', 'i am change')
```

### props 传递对象

这是一个 hack 方式，也是真正的双向绑定。不过建议少用
