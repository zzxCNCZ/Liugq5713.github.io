# 组件

JSX 使用组件的时候，组件的标签大写

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
