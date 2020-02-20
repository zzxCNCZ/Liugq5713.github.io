# CSS 传参给 JS 的方法

## content 伪元素内容传参

例如：

```css
@media (any-hover: none) {
  body::before {
    content: "hoverNone";
    display: none;
  }
}
```

此时就可以通过 JS 代码获取 body 伪元素传递的信息是什么了：

```js
var strContent = getComputedStyle(document.body, "::before").content;
// strContent 结果是'none'则表示支持 hover
// strContent 结果是'"hoverNone"'则表示不支持 hover 经过，需要换成 click 事件
```

## CSS 自定义属性（CSS 变量）传参

```css
:root {
  --mode: "unknown";
}
@media (prefers-color-scheme: dark) {
  /* 黑暗模式 */
  :root {
    --mode: "dark";
    --colorLink: #bfdbff;
    --colorMark: #cc0000;
    --colorText: #ffffff;
    --colorLight: #777777;
  }
}
@media (prefers-color-scheme: light) {
  /* 浅色主题 */
  :root {
    --mode: "light";
    --colorLink: #34538b;
    --colorMark: #cc0000;
    --colorText: #000000;
    --colorLight: #cccccc;
  }
}
```

```js
var mode = getComputedStyle(document.documentElement)
  .getPropertyValue("--mode")
  .trim();
// mode结果是'"dark"'则表示黑夜主题，深色模式，黑暗风格，护眼模式。
// mode结果是其他表示默认模式
```

## 参考

- [我是如何通过 CSS 向 JS 传参的](https://www.zhangxinxu.com/wordpress/2020/02/css-params-to-js/)
- [小 tips:了解 CSS 变量 var](https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/)
