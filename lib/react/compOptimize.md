# 组件优化

## PureComponent 减少组件重新渲染

很基础的使用 PureComponent ，减少组件重新渲染的次数，当然纯组件仅仅是浅比较

- 不要使用内联函数定义

  如果用的话，那么每次调用 render 函数都会创建一个新的函数实例

## 懒加载

- 懒加载 import React, { lazy, Suspense } from "react";

  const GuestComponent = lazy(() => import("./guestComponent"))

  当组件加载不确定的时候，可以这么搞

vue 里面有一个 keep-alive 组件，但是 react 没有，也有过一点相关[讨论](https://github.com/facebook/react/issues/12039)

如何实现 keep-alive,两个方法

- Keep data cached separately from the component. For example, you can lift state up to an ancestor that doesn't get mounted, or put it in a sideways cache like Redux. We're also working on a first-class API support for this.
- Don't unmount the views you want to “keep alive”, just hide them with style display: 'none'.
