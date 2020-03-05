# 组件

JSX 使用组件的时候，组件的标签大写

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

## 无状态组件

```js
import * as React from 'react'

interface IProps {
  // ... props interface
}

// NEW syntax for typing function components
const MyNewComponent: React.FC<IProps> = (props) => {...};
```

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
