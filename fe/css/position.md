# 定位 position

## 属性

- absolute 绝对定位，相对于 static 定位以外的第一个父元素进行定位。
- relative 相对定位，相对于其自身正常位置进行定位。
- fixed 固定定位，相对于浏览器窗口进行定位。
- static 默认值。没有定位，元素出现在正常的流中。
- inherit 规定应该从父元素继承 position 属性的值。

::: danger absolute 是相对于父元素的哪个属性进行定位的？

是相对于 static 定位以外的第一个父元素的 padding 来定位的

:::

## 垂直居中的方法

垂直居中的方法，如果全写出来，有 10 多种。面试的时候一般都会说比较常用的几种。flex、position + transform、position + 负 margin 是最常见的三种情况。

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

### flex

```css
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### position + transform, inner 宽高未知

```css
.outer {
  position: relative;
}
.inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

### position + 负 margin, inner 宽高已知

```css
.outer {
  position: relative;
}
.inner {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```

### 设置各个方向的距离都是 0，再将 margin 设为 auto，也可以实现，前提是 inner 宽高已知

```css
.outer {
  position: relative;
}
.inner {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

## 参考

- [“寒冬”三年经验前端面试总结之 CSS 篇](https://juejin.im/post/5da32d43e51d45781d5e4bdf)
