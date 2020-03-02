# 样式方案

## inline styles

They have roughly the same properties as the CSSStyleDeclaration interface.

```js
import CSS from "csstype";

const h1Styles: CSS.Properties = {
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  position: "absolute",
  right: 0,
  bottom: "2rem",
  padding: "0.5rem",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
};
```

## Style-components

Style-components 解决了什么问题

- no class name bug
- easier deletion of css
- simple dynamic styling
- Painless maintenance. 因为 css 和 js 都在一个文件里面
- automatic vendor prefixing: styled-components 会对你的 css 有预处理

处理 hover 事件

```js
const ss = styled.div`
  &.hover{ xxx }
`;
```

## styled-component

写 styled components 的时候没有智能提示，安装以下 vscode 插件就可以了 `vscode-styled-components`

## styled-components

父组件修改子组件的方式

&&& 是什么？

代替 inportant 的方式

## Override Props Dependent Subcomponent styles

[issue](https://github.com/styled-components/styled-components/issues/330)
[how-can-i-override-styles-with-higher-specificity](https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity)

[https://github.com/styled-components/babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)

子组件

```js
import React from "react";
import styled from "styled-components";

const Sub: React.FC = () => {
  return <Title>Sub hello world</Title>;
};

export default Sub;

export const Title = styled.div`
  font-size: 16px;
  color: red;
  width: 400px;
  height: 400px;
  background-color: red;
`;
```

父组件

```js
import React from "react";
import styled from "styled-components";

import Sub, { Title } from "./sub";
class Helo extends React.Component {
  render() {
    return (
      <Box>
        hello world
        <Sub></Sub>
      </Box>
    );
  }
}

export default Helo;

// 很方便的修改了样式
const Box = styled.div`
  > ${Title} {
    font-size: 16px;
    color: blue;
    width: 400px;
    height: 400px;
    background-color: blue;
  }
`;
```
