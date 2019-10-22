# CSS

## 控制页面文字不能被选中

> 来自我导航站项目的一个小需求，我发现，我点击快了，文字会被选中，非常的丑陋。也可以用于 html 中可能有些地方不想让用户复制文字

一个 CSS 属性就可以了。

```css
user-select: auto | text | none | contain | all;
```

- none 表示不能选中文本
- text 表示可以选择文本
- all ，这个属性，可以实现点击就选中文本哦。其定义
  In an HTML editor, if a double-click or context-click occurred in sub-elements, the highest ancestor with this value will be selected.

## 元素

### inline 元素

image 为啥只是 inline 元素而不是 inline-block 元素？ （来自于张鑫旭的《CSS 世界》）
这里需要引入一个新的概念，替换元素（通过修改某个属性值呈现的内容就可以被替换的元素）和非替换元素。那么由定义 image 标签就是典型的替换元素，image 标签可以设置宽高式是替换元素的尺寸计算规则决定的。
替换元素与非替换元素之间的只是隔了" src " 或 " content " 属性。单独使用 image 标签，不添加 src 属性的话，它的表现就是一个内联元素。

## 布局

### BFC

就是 block formatting context 的缩写，BFC 在计算高度时，内部浮动元素的高度也要计算在内，也就是说技术 BFC 区域内只有一个浮动元素，BFC 的高度也不会发生塌缩，所以达到了清除浮动的目的，

#### BFC 特性

1. 内部的 Box 会在垂直方向，从顶部开始一个接一个地放置。
2. Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生叠加
3. 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC 的区域不会与 float box 叠加。
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
6. 计算 BFC 的高度时，浮动元素也参与计算。

#### 触发 BFC

1. float 除了 none 以外的值
2. overflow 除了 visible 以外的值（hidden，auto，scroll ）
3. display (table-cell，table-caption，inline-block, flex, inline-flex)
4. position 值为（absolute，fixed）
5. fieldset 元素

#### 运用 BFC

1. 解决 margin 叠加问题
2. 用于布局
3. 用于清除浮动，计算 BFC 高度.

## 属性

### pointer-events

今天写水印组件的时候了解到 CSS 的一个属性，pointer-events，因为水印都是添加在元素上方的，会影响元素的操作，给它添加个 pointer-event:none 那么水印层就完全不 care 鼠标事件了。（有种穿透的效果）

## 效果

### [视差滚动效果](http://www.alloyteam.com/2014/01/parallax-scrolling-love-story/)

background-attach

## image 底部有白边

因为 img 默认是按基线(baseline)对齐

要去掉空格可以使用 vertical-align: bottom 或将 img 标签变为块级元素。
