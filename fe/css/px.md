# CSS 长度计量单位

## TL;DR

px 在缩放页面时无法调整那些使用它作为单位的字体、按钮等的大小；

em 的值并不是固定的，会继承父级元素的字体大小，代表倍数；

rem 的值并不是固定的，始终是基于根元素 `<html>` 的，也代表倍数。

## Absolute length units

| Unit | Name                | Equivalent to       |
| :--- | :------------------ | :------------------ |
| cm   | Centimeters         | 1cm = 96px/2.54     |
| mm   | Millimeters         | 1mm = 1/10th of 1cm |
| Q    | Quarter-millimeters | 1Q = 1/40th of 1cm  |
| in   | Inches              | 1in = 2.54cm = 96px |
| pc   | Picas               | 1pc = 1/16th of 1in |
| pt   | Points              | 1pt = 1/72th of 1in |
| px   | Pixels              | 1px = 1/96th of 1in |

## Relative length units

| Unit | Relative to                             |
| :--- | :-------------------------------------- |
| em   | Font size of the parent element.        |
| ex   | x-height of the element's font.         |
| rem  | Font size of the root element.          |
| lh   | Line height of the element.             |
| vw   | 1% of the viewport's width.             |
| vh   | 1% of the viewport's height.            |
| vmin | 1% of the viewport's smaller dimension. |
| vmax | 1% of the viewport's larger dimension.  |

### em vs rem

the em unit means "my parent element's font-size".eg: 1.3em — 1.3 times its parent's font size.

实际使用中，em 计算不是很方便

the rem unit means "The root element's font-size".

简化 font-size 的换算，我们在根元素 html 中加入 font-size: 62.5%;`html {font-size: 62.5%; } /* 公式 16px*62.5%=10px */`

## 模板页面

我司活动页面通过 rem 实现自适应布局 1rem = 4vw

1rem = 4vw
viewport >= 750px 时，1rem = 750px / 100 \* 4 = 30px（因为我们限制了 #app 的 max-width 为 750px）
25rem = #app 的 100% 宽

px 转 rem：

假设设计稿宽度为 375px，则设计稿标注的 1px 转换成 rem 为：

`1/375*100/4 = 1/15 ~= 0.0666rem`（保留小数后 4 位）

`viewport = 375px 时，1rem = 15px`

```css
html {
  font-size: 4vw;
}

@media (min-width: 750px) {
  html {
    font-size: 30px;
  }
}
body {
  font-size: 16px;
}

// 设置一个容器
.mobile-wrapper {
  max-width: 750px;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff;

  /* 建立 BFC，防止第一个子元素的 margin-top collapsing */
  overflow: hidden;

  /* 使 absolute 子元素基于此容器定位 */
  position: relative;
}
```

## 参考

- [MDN:CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [rem 兼容性](https://caniuse.com/#feat=rem)
