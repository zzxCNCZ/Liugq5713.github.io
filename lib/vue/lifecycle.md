# 生命周期

![生命周期](./imgs/lifecycle.png)

> activited 和 deadctivated，keep-alive 专属，组件被激活时调用，组件被销毁时调用

| 生命周期钩子  | 组件状态                                                                                                                   |
| :------------ | :------------------------------------------------------------------------------------------------------------------------- |
| beforeCreate  | 实例初始化之后，this 指向创建的实例，不能访问到 data、computed、watch、methods 上的方法和数据                              |
| created       | 实例创建完成，可访问 data、computed、watch、methods 上的方法和数据，未挂载到 DOM，不能访问到$el属性，$ref 属性内容为空数组 |
| beforeMount   | 在挂载开始之前被调用，beforeMount 之前，会找到对应的 template，并编译成 render 函数                                        |
| mounted       | 实例挂载到 DOM 上，此时可以通过 DOM API 获取到 DOM 节点，\$ref 属性可以访问                                                |
| beforeupdate  | 响应式数据更新时调用，发生在虚拟 DOM 打补丁之前                                                                            |
| updated       | 虚拟 DOM 重新渲染和打补丁之后调用，组件 DOM 已经更新，可执行依赖于 DOM 的操作                                              |
| beforeDestroy | 实例销毁之前调用。这一步，实例仍然完全可用，this 仍能获取到实例                                                            |
| destroyed     | 实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁                 |

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
