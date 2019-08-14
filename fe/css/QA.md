---
title: QA
date: 2019-01-31T03:28:11.815Z

categories: ['fe']
tags: ['css']
---

## 解决 a 在 hover/active 状态下文字加粗后发生偏移的 2 个办法

> 因为我们通常都不会给 a 设置固定的宽度，所以这里当用户鼠标移动到 a 上面的时候将发生文字偏移现象。当然这个现象的发生是因为 a 在 hover 状态下文字加粗导致的宽度变化。

- 给元素加上固定的宽度（不推荐）
- 利用 text-shadow 属性，模拟 font-bold

```css
a:hover {
  text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
}
```

> 由于本人都是写后台项目，不用自己写样式

## 如何让背景全屏

不是通过背景图片，而是在 HTML 里面放置一张图片，通过 fixed 实现

```css
.bg {
  position: fixed;
  bottom: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
}
```

## position 为 absolute ，如何居中元素

这个还是挺简单的

```css
.element-position {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
```
