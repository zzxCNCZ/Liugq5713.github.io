---
title: CSS 扩大可点击区域的 2 种方法
date: 2019-04-03T02:17:03.781Z

categories: ['fe']
tags: ['css']
---

[扩大目标大小](https://www.atjiang.com/css-extending-clickable-area/)

## 使用 border，padding 属性扩大可点击区域

```css
.extend-via-border {
  border: 20px solid transparent;
  background-clip: padding-box;
}
```

这里一开始我其实是有疑惑的，为啥 transparent 不是透明的么，不就看不见了么，为啥还要一个 background-clip 属性，但是自己写了一下代码，是这样的

博文中的代码是这样子的，没有了解过[background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)（css 写的少，赶快来看一下）

定义：
The background-clip CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.

If the element has no background-image or background-color, this property will only have a visual effect when the border has transparent regions or partially opaque regions (due to border-style or border-image); otherwise, the border masks the difference.

## 使用伪元素

伪元素能为其父元素捕获鼠标交互动作
