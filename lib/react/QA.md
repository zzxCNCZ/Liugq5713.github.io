# 常见问题

## React does not recognize the `staticContext` prop on a DOM element？

[common question](https://reactjs.org/warnings/unknown-prop.html)

The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property. You should ensure that your DOM elements do not have spurious props floating around.

The spread operator can be used to pull variables off props, and put the remaining props into a variable.

## Q: Too many re-renders. React limits the number of renders to prevent an infinite loop

这个问题发生在函数组件内部，组件立即设置了 state,初始组件重新渲染，组件内部又设置了 state,于是组件又开始重新渲染

## Q: React does not recognize the `voiceId` prop on a DOM element.

遇到这种错误,[文档上写的也是十分的清楚](https://reactjs.org/warnings/unknown-prop.html)

1. 使用 {...this.props} 或者 cloneElement(element, this.props)，把 props 转发给子组件的时候，你不会误把父组件要用到的 props 也传给了子组件
2. 你使用了非标准的的 DOM 属性在原生的 DOM 节点上
3. React 不能识别你指定的属性，目前 react 的操作是跳过它不认识的属性
4. 你使用组件的时候用了小写，react 把小写的标签当做 dom 标签
