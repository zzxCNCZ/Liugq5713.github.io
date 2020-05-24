# HTML

把 DOM 元素转换为字符串
Element.outerHTML

## 基本概念

- Viewport: It is your device screen
- Window: It is your browser window. The window can be as big as viewport or smaller
- Document: It is the webpage. It can be bigger than viewport or even bigger than window

## 如何优化 DOM 操作

> 题目：在页面上输出 1 到 100 ,这段代码有什么问题

```js
for(var i = 1;i≤100;i++){
  document.getElementById('res').innerHTML += ' ' + i;
}

```

- 减少 DOM 访问次数，尽量使用 JavaScript 处理
- 使用局部变量存储 DOM 引用
- 减少重绘和重排

## 0.5px 的线

### scaleY

```css
.hr.scale-half {
  height: 1px;
  transform: scaleY(0.5);
  transform-origin: 50% 100%;
}
```

### svg

利用 SVG 的描边等属性的 1px 还是物理像素的 1px，而不是高清屏的 1px。

### 线性渐变 linear-gradient

```css
.hr.gradient {
  height: 1px;
  background: linear-gradient(0deg, #fff, #000);
}
```

## tabindex

The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
The tabindex attribute can be used on any HTML element (it will validate on any HTML element. However, it is not necessarily useful)

## 参考

- [怎么画一条 0.5px 的边](https://juejin.im/post/5ab65f40f265da2384408a95)
