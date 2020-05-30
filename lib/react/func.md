# 组件里面的函数

## Class Porperties Proposal

在 react 里面，可以在类里面直接写 state
之前：

```js
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xxx,
    };
  }
}
```

现在你可以这么写了

```js
class Greeting extends Component {
  state = {
    xxx,
  };
}
```

这项技术被广泛的使用在 react 里面，用于处理事件的绑定

```js
class ComponentA extends Component {
  handleClick = () => {
    // ...
  };
  render() {
    // ...
  }
}
```

---

那么我就有点好奇，箭头函数和 class 里面的方法两者有什么区别呢？

问出来这个问题，可以看出来，我基础没有学好

重新翻看了一下 react 的文档

https://reactjs.org/docs/handling-events.html

在 JavaScript 里面，类方法默认没有绑定 this

react 文档上面说，这是 JavaScript 的行为，ok，一开始我还以为他说的是 JavaScript 的类，但是其实是函数呀。（class 只是 function 的语法糖）

看下面的代码就明白了，如果想要 Ha 实例里面有 say 函数，得手动 bind this。

```js
function Ha(name) {
  this.name = name;
  this.say = say.bind(this);
  function say() {
    console.log("this", this);
  }
}
```

如果你不想手动绑定 this 值，在 react 里面有两种方式

### 箭头函数

```js
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

### 事件处理函数的时候调用

但是这样做也会有缺点，就是每次重新渲染的时候都会创建一个新的函数

```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log(‘this is:’, this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick.bind(this,e)}>
        Click me
      </button>
    );
  }
}

```

## 给事件处理函数传递参数

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

## 那么在组件里面使用箭头函数有什么问题呢

[Arrow Functions in Class Properties Might Not Be As Great As We Think](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)

我们一般这么写

```js
class A {
  static color = “red”;
  counter = 0;
  handleClick = () => {
    this.counter++;
  }

  handleLongClick() {
    this.counter++;
  }
}
```

A.prototype.handleLongClick is defined.
A.prototype.handleClick is not a function.

总结来说，类的属性的箭头函数最后会被放到类的构造函数里面。类属性的箭头函数不会在原型上，所以我们不能使用 super 调用他

Arrow functions in class properties are much slower than bound functions, and both are much slower than usual function.

## 参考

- [精读《Function Component 入门》](https://github.com/dt-fe/weekly/blob/v2/104.%E7%B2%BE%E8%AF%BB%E3%80%8AFunction%20Component%20%E5%85%A5%E9%97%A8%E3%80%8B.md)
