# JSX

## Specifying The React Element Type

### React Must Be in Scope

这就是为什么我需要在每一个 jsx 文件里面引入 react 的原因

```js
import React from ‘react’;
import CustomButton from ‘./CustomButton’;

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

### Using Dot Notation for JSX Type

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

### User-Defined Components Must Be Capitalized

React 将大写的标签当做组件，小写的话会当做 html 的标签

## Choosing the Type at Runtime

这个不就是相当于 vue 里面的动态组件么，非常好！

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

## Props in JSX

### JavaScript Expressions as Props

### String Literals

这两种写法是相等的

```jsx
<MyComponent message=“hello world” />

<MyComponent message={‘hello world’} />
```

### Props Default to “True”

这两种写法相等的

```js
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

### Spread Attributes

```js
function App1() {
  return <Greeting firstName=“Ben” lastName=“Hector” />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

## Children in JSX

### String Literals

JSX 移除字符串首尾的空格，包括首尾的空行

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

## 列表渲染实在没有 key

如果使用 index 作为列表渲染的 key,且列表有增删操作，就会出现异常。如果使用 uid 随机生成，如果有 input，每次输入，uid 变化，input 失去焦点

【添加选项】数据的时候伪造一个 ID，渲染的时候 key 设置为 ID，这样才是最好的办法。

## 参考

- [JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html)
- [How to concatenate two JSX fragment or variables or string and component (in Reactjs)?](https://stackoverflow.com/questions/36912179/how-to-concatenate-two-jsx-fragment-or-variables-or-string-and-component-in-rea)
