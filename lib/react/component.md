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
