---
title: React
date: 2019-02-14T06:08:07.442Z

categories: ['lib']
tags: ['react']
---

## React Hooks

什么是 Hooks？Hooks 是一个 React 函数组件内一类特殊的函数（通常以 "use" 开头，比如 "useState"），使开发者能够在 function component 里依旧使用 state 和 life-cycles，以及使用 custom hook 复用业务逻辑。

## setState()

```js
setState((prevState, props) => stateChange[, callback])

直接传入一个对象
this.setState({quantity: 2})
```

## React 写类简化

import React, { Component } from "react";

这样子，你写类的时候，可以直接写

```js
class test extend Component{

}
```

## 修改数组

## [How do I add an element to array in reducer of React native redux?](http://stackoverflow.link/question/40911194)

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

## 循环的时候使用 key

You should add a key to each child as well as each element inside children.

This way React can handle the minimal DOM change.

**React uses the `key` prop to understand the component-to-DOM Element relation**, which is then used for the [reconciliation process](https://facebook.github.io/react/docs/reconciliation.html). It is therefore very important that the key _always_ remains _unique_, otherwise there is a good chance React will mix up the elements and mutate the incorrect one. It is also important that these keys _remain static_ throughout all re-renders in order to maintain best performance.

That being said, one does not _always_ need to apply the above, provided it is _known_ that the array is completely static. However, applying best practices is encouraged whenever possible.

A React developer said in [this GitHub issue](https://github.com/facebook/react/issues/1342#issuecomment-39230939):

> - key is not really about performance, it's more about identity (which in turn leads to better performance). randomly assigned and changing values are not identity
> - We can't realistically provide keys without knowing how your data is modeled. I would suggest maybe using some sort of hashing function if you don't have ids
> - We already have internal keys when we use arrays, but they are the index in the array. When you insert a new element, those keys are wrong.

In short, a `key` should be:

## react 如何向组件里面的函数传递参数

> 果然 react 需要一个前端工程师有点水平之后才能写，[教程](https://segmentfault.com/q/1010000008136261)

- 使用匿名函数包装一下
- 使用 bind，传递参数

## 函数方法也可以不用绑定 this

> 每次写函数都要在构造函数里面绑定一个 this，实在是有点烦，可以尝试这样的写法

```js
doSomething = (id, e) => {
  // 这里写代码
}
```

## [render props](https://reactjs.org/docs/render-props.html)

看了好几遍，说到底就是解决了一个问题，就是 props 的我是谁，我从那里来，我会不会和其他兄弟们冲突的问题

## react & ts

### create-react-app 创建

```shell
npx create-react-app my-app --typescript
```

### [如何使用](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

### [how-why-a-guide-to-using-typescript-with-react](https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614)

---

### react test

### snapshots

快照，和之前的进行比对，如果自己无意间进行修改了，那么就是有问题的。但是这个肯定是有问题的，因为 UI 本身就不是静态的，咱们前端工程师很少改动不改 UI 的。

快照测试很容易失败，因为我们前端就是来写页面的啊。快照测试跟不上前端开发的速度。

更新你的快照

jest --update-snapshots

---

测试的关键四点

- validity
- reliability
- objectivity
- usability

Finally, the line **expect(tree).toMatchSnapshot()** does one of these two things

- If a snapshot already exists on disk, it compares the new snapshot in tree to the one on disk. If they match, the test passes.
- If they don't, the test fails.If a snapshot does not already exist, it creates one, and the test passes.

---

Shallow rendering will only render one level, that's part of the specs for it.
