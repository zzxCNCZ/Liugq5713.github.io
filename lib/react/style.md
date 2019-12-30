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
