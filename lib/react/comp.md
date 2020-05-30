# 组件

## [use displayName](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)

通常情况下，你不需要手动去指定 displayName , 因为 react 可以从组件名中推测出来 DisplayName 属性。

但是推荐在高阶组件中，使用 DisplayName 方便你调试，eg:

```js
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {
    /* ... */
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;
  return WithSubscription;
}
```

## [给一个数组添加元素](http://stackoverflow.link/question/40911194)

Two different options to add item to an array without mutation

```js
case ADD_ITEM :
    return {
        ...state,
        arr: [...state.arr, action.newItem]
    }
```

OR

```js
case ADD_ITEM :
    return {
        ...state,
        arr: state.arr.concat(action.newItem)
    }
```

## 容器组件和展示组件

容器组件： 提供数据和行为 ， 并不会包含 DOM 标签和 CSS 样式，然后渲染对应的子组件

### 展示组件/无状态组件：

- 关注页面的展示效果（外观）
- 内部可以包含展示组件和容器组件，通常会包含一些自己的 DOM 标记和样式(style)
- 通常允许通过 this.props.children 方式来包含其他组件。
  对应用程序的其他部分没有依赖关系，例如 Flux 操作或 store。
- 不用关心数据是怎么加载和变动的。
- 只能通过 props 的方式接收数据和进行回调(callback)操作。
  很少拥有自己的状态，即使有也是用于展示 UI 状态的。
- 会被写成函数式组件除非该组件需要自己的状态，生命周期或者做一些性能优化。

```js
import * as React from 'react'

interface IProps {
  // ... props interface
}

// NEW syntax for typing function components
const MyNewComponent: React.FC<IProps> = (props) => {...};
```

容器组件（Container Component）

- 关注应用的是如何工作的
- 内部可以包含容器组件和展示组件，但通常没有任何自己的 DOM 标记，除了一些包装 divs，并且从不具有任何样式。
- 提供数据和行为给其他的展示组件或容器组件。
- 调用 Flux 操作并将它们作为回调函数提供给展示组件。往往是有状态的，因为它们倾向于作为数据源
- 通常使用高阶组件生成，例如 React Redux 的 connect（），Relay 的 createContainer（）或 Flux Utils 的 Container.create（），而不是手工编写。

## 什么时候引入容器？

我的建议是，你最好先做展示组件。当你意识到，有一些中间组件传递了过多的 props，有一些组件并不使用它们继承的 props 而只是将这些 props 传递给他们的子级，而且每次子级组件需要更多数据时，你都需要重新调整或编写这些中间组件，那么，这时候你可以考虑引入容器组件了。

## 有状态组件

## 受控组件和非受控组件

https://reactjs.org/docs/forms.html#controlled-components

了解一下 react 的受控组件和非受控组件

## 一些原则

有状态的组件没有渲染，有渲染的组件没有状态。 这个思路可以用作写组件的指导思想。

eg：自己的代码里有不下 30 个的 isShow、isOpen、isVisible 和对应一个 toggle 方法，而没有人去想过可以有 withToggle 这样的 HoC 解决问题。并不是不想去抽象，而是当 isShow、isOpen 和其它的逻辑混在一起，比如{isShow, username}和{isOpen, validationErrors}的时候，普通的人无法从这 2 个大集合中挑出 isShow 和 isOpen 并准确地认知到他们是可以复用的

React Hooks 要解决的问题是状态共享,注意重点是状态共享而不是 ui 复用。

## 为什么 setState 不设计成返回一个 promise

1. 解决异步带来的困扰方案其实很多。比如，我们可以在合适的生命周期 hook 函数中完成相关逻辑。在这个场景里，就是在行组件的 componentDidMount 里调用 focus，自然就完成了自动聚焦。
2. 任何需要使用 setState 第二个参数 callback 的场景，都可以使用生命周期函数 componentDidUpdate (and/or componentDidMount) 来复写。

- [github 讨论：Make setState return a promise](https://github.com/facebook/react/issues/2642)
- [从 setState promise 化的探讨 体会 React 团队设计思想](https://zhuanlan.zhihu.com/p/28905707)

## react 写法声明 state

这样做有一个好处，只是声明了一处。声明了初始值，通过类型推断判断出类型。这样就不用分开写了。之前我是先声明类型，然后在类里面定义初始值。

```jsx
const initialState = Object.freeze({
  optionWords: [] as h.dictation_comm.Word[],
  words: [] as string[],
  bizType: BizType.ShengZi
});

type StateType = typeof initialState;
/**
 * 添加生词弹窗
 */
class WordModal extends React.PureComponent<PropsType, StateType> {
     public state = initialState;
}
```
