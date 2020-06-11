# Ref

## 解决了什么问题

让你可以修改子组件或者组件内部的 DOM 元素

## 获取 ref

::: warning 通过字符串形式获取 ref
这种形式以后会被废弃掉，不推荐
:::

类组件和函数组件内部都可以使用 React.createRef()，callback

### react.createRef

Remember that Refs require class instance targets
Stateless Functional components don't have instances
Stateless Functional components can use refs however

在 16.3 之后，react 推荐使用 react.createRef()。

记住 Refs 需要类组件实例目标，你可以通过 ref 获取类组件的实例。但是函数组件没有实例，只有方法调用。

```js
function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />

      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
```

### callback refs

给 ref 属性添加 回调，在回调函数里面做赋值的操作

- Alternative to using React.createRef()
- Allows for arbitrary JavaScript logic for Ref binding

::: danger 注意事项
React 调用 这个回调发生在在 componentDidMount and componentDidUpdate 生命周期里。如果 callback ref 通过内联函数定义在函数里面，在更新过程中，这个回调函数将会调用两次，第一次将会是 null 值，第二次是 DOM 元素。这是因为在更新过程中，新的组件实例生成，旧的 ref 要被清空，在 ComponentWillUnmount 生命周期内 Ref 会被设置为 null
:::

```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element) => {};
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={() => (this.textInput = element)} />
      </div>
    );
  }
}
```

### 获取 ref

通过 current 属性可以获取到 node 节点

React.createRef() will not work with Stateless Functional components because they do not have instances

```js
const node = this.myRef.current;
```

## 父组件获取函数子组件的 ref

### Refs - Forwarding Refs 获取函数组件的 ref

父组件访问函数组件内部的 DOM 元素

为啥无状态组件没有 ref，因为无状态组件挂载时，只是方法调用，没有新建实例

```js
// React component that can receive a Ref
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

### Refs - 传递一个 ref callback 函数

```js
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

// Parent instance this.inputElement will be
// equal to the CustomTextInput <input> element
class Parent extends React.Component {
  render() {
    return <CustomTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}
```

## 参考

- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
- [React ref 基础使用、转发](https://www.codenong.com/js0837f0576006/)
- [React context consumer how to access ref on to the consuming component](https://stackoverflow.com/questions/53200784/react-context-consumer-how-to-access-ref-on-to-the-consuming-component)
- [react form wrappedcomponentref](https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140)
- [Code Like This. Using Refs](https://codelikethis.com/lessons/react/using-refs)
