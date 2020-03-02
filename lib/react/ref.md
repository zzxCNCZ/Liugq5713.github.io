# Ref

## 解决了什么问题

让你可以修改子组件或者组件内部的 DOM 元素

## 使用

- react.createRef

在 16.3 之后，react 推荐使用 react.createRef()。推荐你使用 callback refs 模式。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

- callback refs

给 ref 属性添加 回调，在回调函数里面做赋值的操作

```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

## 获取元素

```js
const node = this.myRef.current;
```

## 注意事项

- 不该在 函数式组件上使用 ref，因为函数式组件没有实例，但是你可以在函数式组件内部去使用 ref 去获取 DOM 元素

```js
function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return <MyFunctionComponent ref={this.textInput} />;
  }
}
```

- 如果 callback ref 通过内联函数定义在函数里面，在更新过程中，这个回调函数将会调用两次，第一次将会是 null 值，第二次是 DOM 元素。这是因为在更新过程中，新的组件实例生成，旧的 ref 要被清空

## Ref

React.forwardRef()? 应用，访问在父组件访问子组件内部的 DOM 元素

```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

[wrappedcomponentref](https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140)

## Ref

[ref](https://stackoverflow.com/questions/53200784/react-context-consumer-how-to-access-ref-on-to-the-consuming-component)
[React ref 基础使用、转发](https://www.codenong.com/js0837f0576006/)

## 参考

- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
