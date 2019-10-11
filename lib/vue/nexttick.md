# nextTick

nextTick 函数其实做了两件事情，一是生成一个 timerFunc，把回调作为 microTask 或 macroTask 参与到事件循环中来。二是把回调函数放入一个 callbacks 队列，等待适当的时机执行。

### 监听 vue.js 中 v-for 全部渲染完成

::: tip
[`Vue.$nextTick`](https://vuejs.org/v2/api/?#vm-nextTick)

当 dom 发生变化，更新后执行的回调，如果数据是异步的，可以在数据获取完之后，调用`this.$nextTick`

`$nextTick` 全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
:::

## 参考

- [nextTick 源码](https://github.com/vuejs/vue/blob/ba0ebd4771ddb5c56c1261f82c842b57ca7163a6/src/core/util/next-tick.js)
- [全面解析 Vue.nextTick 实现原理](https://juejin.im/entry/5aced80b518825482e39441e)
