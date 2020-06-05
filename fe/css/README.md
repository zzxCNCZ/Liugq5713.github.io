# CSS 方法演变

## 描述功能

```css
<p class="text-center">
    Hello there!
</p>
```

## 描述语义

```css
<style>
.greeting {
    text-align: center;
}
</style>

<p class="greeting">
    Hello there!
</p>
```

## 交互

一个卡片的交互 首先它是一个普普通通的卡片，悬浮上去会有阴影效果，并且出现关闭按钮，出现的时候都带有动画，当你鼠标移动到关闭按钮上面的时候，按钮也会变颜色。这样的交互感觉就很不错

当数据过多的时候，要想到把隐藏部分数据，要想到优化展现数据的形式，可以参考[展开收起的动画](https://www.zhangxinxu.com/wordpress/2012/10/more-display-show-hide-tranisition/)

## calc

> 注意这里，calc 的计算符号左右都要有空格

```css
const SiderWrapper = styled.div`
  height: calc(100% - 162px);
  max-height: 100vh;
  overflow: scroll;
`;
```

## [z-index](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

1.  z-index 只有在 position 为 absolute | fixed | relative | sticky 时才生效.
2.  当父元素设置了 z-index 后，其子元素所设置的 z-index 都将在父元素内进行排列，这种情况下的子元素不会与父元素外部其他元素出现渲染层次交叉的情况。

## 参考

- [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
- [Using Helper Classes to DRY and Scale CSS](https://www.sitepoint.com/using-helper-classes-dry-scale-css/)
