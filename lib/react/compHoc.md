# 高阶组件

a function that takes a component and returns a new component

// 对修改封闭，对继承开放

重用组件逻辑，比较常见的应用就是 redux 的 connect 的应用

## 高阶组件解决了什么问题

- 代码复用，通过高阶组件扩展，增删改 props，可达到组件可复用的目的
- 条件渲染，常见 case: 鉴权
- 生命周期捕获/劫持

## 返回新组件的方式

### 直接返回一个 stateless component

```js
function EnhanceWrapper(WrappedComponent) {
  const newProps = {
    source: "app"
  };
  return props => <WrappedComponent {...props} {...newProps} />;
}
```

### 返回 class component

```js
function EnhanceWrapper(WrappedComponent) {
  return class WrappedComponent extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
```

### 继承（extends）原组件后返回一个新的 class component

这种方法对你要包装的组件控制最强

```js
function EnhanceWrapper(WrappedComponent) {
  return class WrappedComponent extends WrappedComponent {
    render() {
      return super.render();
    }
  };
}
```

### Function as Child Components

优点：
1、代码结构上少掉了一层（返回高阶组件的）函数封装。
2、调试时组件结构更加清晰；
3、从组件复用角度来看，父组件和子组件之间通过 children 连接，两个组件其实又完全可以单独使用，内部耦合较小。当然单独使用意义并不大，而且高阶组件也可以通过组合两个组件来做到

```js
class StudentWithAge extends React.Component {
  componentWillMount() {
    this.setState({
      name: "小红",
      age: 25
    });
  }
  render() {
    return <div>{this.props.children(this.state.name, this.state.age)}</div>;
  }
}
```

使用：

```js
<StudentWithAge>
  {(name, age) => {
    let studentName = name;
    if (age > 22) {
      studentName = `大学毕业的${studentName}`;
    }
    return <Student name={studentName} />;
  }}
</StudentWithAge>
```

## Caveats

### Don’t Use HOCs Inside the render Method

react 的 diff 算法使用组件 identity 去决定是否需要更新

如果你在 render 函数里面渲染高阶组件

```js
render() {
  // 每次调用 render 函数都会创建一个新的 EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
  return <EnhancedComponent />;
}
```

这样每次重新渲染的时候，组件及所有的子组件的状态都会丢失

### Static Methods Must Be Copied Over

需要复制静态方法

原始组件将使用容器组件进行包装。这意味着新组件没有原始组件的任何静态方法

### Refs 不会被传递

虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用。那是因为 ref 实际上并不是一个 prop - 就像 key 一样，它是由 React 专门处理的。如果将 ref 添加到 HOC 的返回组件中，则 ref 引用指向容器组件，而不是被包装组件。

这个问题的解决方案是通过使用 React.forwardRef API（React 16.3 中引入）。前往 ref 转发章节了解更多。

## 参考

- [React 高阶组件实践](https://juejin.im/post/59b36b416fb9a00a636a207e#heading-0)
- [Refs 转发](https://zh-hans.reactjs.org/docs/forwarding-refs.html)
- [React 101 - Composition vs Inheritance](http://blog.brew.com.hk/react-101-composition-vs-inheritance/?utm_source=hashnode.com)
