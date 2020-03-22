# 组件

## use displayName

你可以手动去检查

Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component.

## react 如何向组件里面的函数传递参数

> 果然 react 需要一个前端工程师有点水平之后才能写，[教程](https://segmentfault.com/q/1010000008136261)

- 使用匿名函数包装一下
- 使用 bind，传递参数

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

## 函数方法也可以不用绑定 this

> 每次写函数都要在构造函数里面绑定一个 this，实在是有点烦，可以尝试这样的写法

```js
doSomething = (id, e) => {
  // 这里写代码
};
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

## 展示原始的 HTML

```js
function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

## 受控组件和非受控组件

https://reactjs.org/docs/forms.html#controlled-components

了解一下 react 的受控组件和非受控组件
