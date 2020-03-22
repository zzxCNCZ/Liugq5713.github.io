# 函数组件

## https://reactjs.org/docs/concurrent-mode-suspense.html

suspense 可以让你等待数据加载指定 loading

## React.memo

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.

记忆函数，记忆组件，通常他是在你入参、props 完全相同的时候，返回给你相同的东西

使用 React.memo 进行组件记忆，与纯组件类似，如果输入相同的 props，那么就跳过组件渲染

当然他比较优秀的一点就是，你可以自定义函数去做比较这个过程
