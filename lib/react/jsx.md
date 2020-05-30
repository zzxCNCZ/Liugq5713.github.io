# JSX

## 这就是为什么我需要在每一个 jsx 文件里面引入 react

JSX 只是一种语法糖。最后它会将类型 HTML 的结构转成 JavaScript

```js
import React from ‘react’;
import CustomButton from ‘./CustomButton’;

function WarningButton() {
  // 最后会被转成这样：
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

### 在 JSX 中使用点记法

```js
import React from ‘react’;

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

### 用户定义的组件必需要大写使用

React 将大写的标签当做组件，小写的话会当做 html 的标签

## 在运行的时候选定组件类型

这个不就是相当于 vue 里面的动态组件么，非常好！但是这样会对组件的的 props 有要求，最好动态切换的组件的 props 是相等的。

但是在实际工作中，我一般会在 render 函数里面使用条件判断来选择使用什么组件。

```js
import React from ‘react’;
import { PhotoStory, VideoStory } from ‘./stories’;

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

## 展示原始的 HTML

```js
function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

## Children in JSX

### String Literals

JSX 会自动移除字符串首尾的空格，包括首尾的空行

### JSX Children

非常适用于嵌套的组件

并且现在 React 可以返回数组元素了

```js
render() {
  // No need to wrap list items in an extra element!
  return [
    // Don’t forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
```

### Functions as Children

### Booleans, Null, and Undefined Are Ignored

`false ,null# ,undefined , and True`. 是有效的 children,但是他们通常不会被渲染。如果你非要想将它渲染，你可以将它们转化为 字符串

于是我们就可以这么使用

```js
<div>
  {showHeader && <Header />}
  <Content />
</div>
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

## [列表渲染实在没有 key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

如果使用 index 作为列表渲染的 key,且列表有增删操作，就会出现异常。如果使用 uid 随机生成，如果有 input，每次输入，uid 变化，input 失去焦点

【添加选项】数据的时候伪造一个 ID，渲染的时候 key 设置为 ID，这样才是最好的办法。

```js
todoCounter = 1;
function createNewTodo(text) {
  return {
    completed: false,
    id: todoCounter++,
    text,
  };
}
```

这里使用全局的 todoCounter,方便如果其他元素也使用这个函数，那么可以生成唯一的 id

当然你也可以使用别人写的库，比如 shortid

但是具体使用数组的 index 的 key 会有什么问题呢？

Reorders can also cause issues with component state when indexes are used as keys. Component instances are updated and reused based on their key. If the key is an index, moving an item changes it. As a result, component state for things like uncontrolled inputs can get mixed up and updated in unexpected ways.

翻译过来就是，如果你拿数组的 index 作为 key,那么在重排的时候，一些非受控组件将会出现不可预料的错误。

## 参考

- [JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html)
- [How to concatenate two JSX fragment or variables or string and component (in Reactjs)?](https://stackoverflow.com/questions/36912179/how-to-concatenate-two-jsx-fragment-or-variables-or-string-and-component-in-rea)
- [Keys](https://reactjs.org/docs/reconciliation.html#keys)
- [an example of the issues that can be caused by using indexes as keys](https://codepen.io/pen?editors=0010)
