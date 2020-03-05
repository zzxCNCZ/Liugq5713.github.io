# React

## 同构

同构：同构这个概念存在于 Vue，React 这些新型的前端框架中，同构实际上是客户端渲染和服务器端渲染的一个整合。我们把页面的展示内容和交互写在一起，让代码执行两次。在服务器端执行一次，用于实现服务器端渲染，在客户端再执行一次，用于接管页面交互

## react & ts

### create-react-app 创建

```shell
npx create-react-app my-app --typescript
```

### [如何使用](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

### [how-why-a-guide-to-using-typescript-with-react](https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614)

## 文章

- [官方推荐文章](https://reactjs.org/community/articles.html)

## react 学习需要了解的库

- [immer](https://github.com/immerjs/immer)
- [immer docs](https://immerjs.github.io/immer/docs/produce)
- [v8-profiler-next](https://github.com/hyj1991/v8-profiler-next#readme)

## PureComponent 减少组件重新渲染

很基础的使用 PureComponent ，减少组件重新渲染的次数，当然纯组件仅仅是浅比较

- 不要使用内联函数定义

  如果用的话，那么每次调用 render 函数都会创建一个新的函数实例

## 懒加载

- 懒加载 import React, { lazy, Suspense } from "react";

  const GuestComponent = lazy(() => import("./guestComponent"))

  当组件加载不确定的时候，可以这么搞

## 记忆

- 使用 React.memo 进行组件记忆，与纯组件类似，如果输入相同的 props，那么就跳过组件渲染

当然他比较优秀的一点就是，你可以自定义函数去做比较这个过程

## 使用数组的 index 作为 key 的缺点

首先明白 key 是做什么的，react 使用 key 辨别 DOM 元素

如果一个列表有删除操作，排序操作，活着数组是计算出来的

使用数组的 index，那么就百分百有问题，因为 index 随着你增删数据是一直在变的。

作者推荐使用 ID

```js
todoCounter = 1;
function createNewTodo(text) {
  return {
    completed: false,
    id: todoCounter++,
    text
  };
}
```

这里使用全局的 todoCounter,方便如果其他元素也使用这个函数，那么可以生成唯一的 id

当然你也可以使用别人写的库，比如 shortid

https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318

react 小技巧

## use prop-types

type check.

这个我们用 ts 也能做到很好的检查

## use displayName

你可以手动去检查

Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component.

## There are many patterns which are yours to explore:

Compound Components
High Order Components
Render Props
Smart/Dumb Components
many others (try out Profiling)

## 容器组件和展示组件

容器组件： 提供数据和行为 ， 并不会包含 DOM 标签和 CSS 样式，然后渲染对应的子组件

展示组件：

- 关注页面的展示效果（外观）
- 内部可以包含展示组件和容器组件，通常会包含一些自己的 DOM 标记和样式(style)
- 通常允许通过 this.props.children 方式来包含其他组件。
  对应用程序的其他部分没有依赖关系，例如 Flux 操作或 store。
- 不用关心数据是怎么加载和变动的。
- 只能通过 props 的方式接收数据和进行回调(callback)操作。
  很少拥有自己的状态，即使有也是用于展示 UI 状态的。
- 会被写成函数式组件除非该组件需要自己的状态，生命周期或者做一些性能优化。

容器组件（Container Component）

- 关注应用的是如何工作的
- 内部可以包含容器组件和展示组件，但通常没有任何自己的 DOM 标记，除了一些包装 divs，并且从不具有任何样式。
- 提供数据和行为给其他的展示组件或容器组件。
- 调用 Flux 操作并将它们作为回调函数提供给展示组件。往往是有状态的，因为它们倾向于作为数据源
- 通常使用高阶组件生成，例如 React Redux 的 connect（），Relay 的 createContainer（）或 Flux Utils 的 Container.create（），而不是手工编写。

## 什么时候引入容器？

我的建议是，你最好先做展示组件。当你意识到，有一些中间组件传递了过多的 props，有一些组件并不使用它们继承的 props 而只是将这些 props 传递给他们的子级，而且每次子级组件需要更多数据时，你都需要重新调整或编写这些中间组件，那么，这时候你可以考虑引入容器组件了。

## https://reactjs.org/docs/concurrent-mode-suspense.html

suspense 可以让你等待数据加载指定 loading

## React.memo

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.

记忆函数，记忆组件，通常他是在你入参、props 完全相同的时候，返回给你相同的东西

vue 里面有一个 keep-alive 组件，但是 react 没有，也有过一点相关[讨论](https://github.com/facebook/react/issues/12039)

如何实现 keep-alive,两个方法

- Keep data cached separately from the component. For example, you can lift state up to an ancestor that doesn't get mounted, or put it in a sideways cache like Redux. We're also working on a first-class API support for this.
- Don't unmount the views you want to “keep alive”, just hide them with style display: 'none'.

## q：preform a react state update on an unmounted component

```js
componentWillUnmount = () => {
  this.setState = (state, callback) => {
    return;
  };
};
```

## Q: React does not recognize the `voiceId` prop on a DOM element.

遇到这种错误,[文档上写的也是十分的清楚](https://reactjs.org/warnings/unknown-prop.html)

1. 使用 {...this.props} 或者 cloneElement(element, this.props)，把 props 转发给子组件的时候，你不会误把父组件要用到的 props 也传给了子组件
2. 你使用了非标准的的 DOM 属性在原生的 DOM 节点上
3. React 不能识别你指定的属性，目前 react 的操作是跳过它不认识的属性
4. 你使用组件的时候用了小写，react 把小写的标签当做 dom 标签

## 参考

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [react 小书](http://huziketang.mangojuice.top/books/react/)
