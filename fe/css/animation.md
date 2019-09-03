# 动画

> CSS 动画我自己了解过一点，但是没有真真的写过。

## [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)（变形）

lets you rotate, scale, skew, or translate a given element.

## [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)（过渡）

a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay

Transitions enable you to **define the transition between two states of an element.**

CSS transitions allows you to change property values smoothly, over a given duration.

`transition: property duration timing-function delay;`

## [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)（动画）

> 是 transition 属性的扩展，弥补了 transition 的很多不足

a shorthand property for the various animation properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.

`animation: name duration timing-function delay iteration-count direction play-state fill-mode;`

### [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.
