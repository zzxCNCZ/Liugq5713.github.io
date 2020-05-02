# 生命周期

## TLDR

react 组件挂载和更新时候触发的生命周期，以及为什么 react 的生命周期会发生变化，以及 pureComponent 为什么能够提升性能，以及注意点

## Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM，执行顺序如下：

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

render 并不做实际的渲染动作，它只是返回一个 JSX 描述的结构，render 函数应该是一个纯函数，完全根据 this.state 和 this.props 来决定返回的结果

## Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate(nextProps,nextState)
- render()
- getSnapshotBeforeUpdate(prevProps, prevState)
- componentDidUpdate(prevProps,prevState,value)

注意点：

getSnapshotBeforeUpdate 返回一个值，作为 componentDidUpdate 的第三个参数

React 更新 DOM 和 refs 之后，运行 componentDidUpdate
props 更改引发的可视变化（副作用,比如 log,ga），在 componentDidUpdate 中处理

## demo

比如我这个子组件，父组件传入的 clock 总是在改变，但是这个子组件却不会在重新渲染了。

因为这个 props 虽然发生了一点改变，但是没有触发 state 的更新，update 的时候触发的生命周期，组件更新的时候，先触发静态方法 static getDerivedStateFromProps, 然后触发 shouldComponentUpdate,接着渲染组件，然后触发 getSnapshotBeforeUpdate() , 最后确认更新

```js
import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: props.clock,
    };
  }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return { now: nextProps.clock, patch: "patch" };
  //   }

  render() {
    const { now } = this.state;
    return <div>hello {now.toLocaleString()}</div>;
  }
}

export default LifeCycle;
```

## 生命周期详解

### shouldComponentUpdate(nextProps, nextState)

props 和 state 改变后，会触发这个生命周期。默认返回 true。

这个钩子不会被调用的情况：

- initial render
- when forceUpdate() is used

注意点：

不要依赖这个方法去阻止组件更新，如果你有这个优化的需求，可以使用 PureComponent 组件。且这个方法返回 false， UNSAFE_componentWillUpdate(), render(), and componentDidUpdate()等生命周期不会被调用，且不会阻止子组件重新渲染。

#### Component VS PureComponent

这两个组件唯一的区别就是 shouldComponentUpdate 。PureComponent 会对 state 和 props 进行一层浅比较

写组件的注意点

- Don’t bind values in functions in render

不要这么做，`<CommentItem likeComment={() => this.likeComment(user.id)} />`，因为父组件重新渲染时，会生成新的函数（引用也是新的），导致子组件是新的

建议这样：`<CommentItem likeComment={this.likeComment} userID={user.id} />`

- Don’t derive data in the render method

不要这样做：

```js
render() {
  const { posts } = this.props
  const topTen = [...posts].sort((a, b) =>
    b.likes - a.likes).slice(0, 9)
  return //...
}
```

因为 topTen 每次都会是一个新的引用，就会导致重新渲染。

## 为什么要改

旧的生命周期十分完整，基本可以捕捉到组件更新的每一个 state/props/ref，没有什从逻辑上的毛病。
但是架不住官方自己搞事情，react 打算在 17 版本推出新的 Async Rendering，提出一种可被打断的生命周期，而可以被打断的阶段正是实际 dom 挂载之前的虚拟 dom 构建阶段，也就是要被去掉的三个生命周期。
生命周期一旦被打断，下次恢复的时候又会再跑一次之前的生命周期，因此 componentWillMount，componentWillReceiveProps， componentWillUpdate 都不能保证只在挂载/拿到 props/状态变化的时候刷新一次了，所以这三个方法被标记为不安全。

https://juejin.im/post/5aca20c96fb9a028d700e1ce

## 生命周期

[生命周期 demo](https://codesandbox.io/s/quirky-water-xj6og?file=/src/children.js)

## 参考

- [When to use Component or PureComponent](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)
