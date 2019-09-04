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
