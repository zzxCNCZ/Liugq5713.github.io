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

如果你不大写，react 将会把这个标签当作 html 的标签

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

## [How to concatenate two JSX fragment or variables or string and component (in Reactjs)?](https://stackoverflow.com/questions/36912179/how-to-concatenate-two-jsx-fragment-or-variables-or-string-and-component-in-rea)

## 参考

- [JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html)
