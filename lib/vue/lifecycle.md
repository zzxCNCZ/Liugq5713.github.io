# 生命周期

mounted

el 被新创建的 vm.\$el 替换，并挂载到实例上去之后调用该钩子

activited 和 deadctivated，keep-alive 专属，组件被激活时调用，组件被销毁时调用

## QA

通过这些问题，可以对生命周期理解的更加深刻

### 监听 vue.js 中 v-for 全部渲染完成

::: tip
[`Vue.$nextTick`](https://vuejs.org/v2/api/?#vm-nextTick)

当 dom 发生变化，更新后执行的回调，如果数据是异步的，可以在数据获取完之后，调用`this.$nextTick`

:::

### 为什么在 created 请求数据

因为本着获取数据越早越好的原则，如果不需要对 DOM 进行操作，在 created 周期内获取数据，因为此时实例已经完成了数据观测，属性和方法的运算

::: tip

[created](https://vuejs.org/v2/api/#created)

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，\$el 属性目前不可见

:::
