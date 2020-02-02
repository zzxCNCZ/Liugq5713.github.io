# Redux

## Provider

store 不光是一个 object ， 而且是必须包含三个函数的 project

- subscribe
- dispatch
- getState

## connect

`connect(mapStateToProps,mapDispatchToProps)(Counter)`

connect 是 react-redux 提供的方法，这个方法接受两个参数，执行结果依然是一个函数。

connect 做的工作：

- 把 Store 上的状态转化为内层傻瓜组件的 prop
- 把内层傻瓜组件中的用户动作转化为派送给 Store 的动作

## Redux

redux 是一个单独的库

如何整合 redux

- 创建 UI store
- 订阅更新
- 在订阅回调内部：
  - 获取当前的 store
  - 提取当前 UI 需要的数据
  - 更新 UI
- 如果有必要的话，可以基于初始状态渲染 UI
- 基于 redux 的 action，使得页面相应

## 参考

- [Redesigning Redux](https://hackernoon.com/redesigning-redux-b2baee8b8a38)
