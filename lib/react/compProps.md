# 组件 props

## react props 支持 字符串和函数

`skip_uri_prefix?: string | genSkipUri;` 通过函数，能够达到更灵活的定制

## props 的默认值

### typescript 的写法

如果是函数式组件，则直接使用函数的默认值，如果是类组件，可以定义静态方法

```js
class ThemedButton extends React.Component {
  render() {}

  // Set default props
  static defaultProps = {
    theme: "secondary",
    label: "Button Text",
  };
}
```

## props 的类型约束

为了获取 prop types ，需要安装两个包

```js
npm install --save prop-types
npm install --save-dev @types/prop-types
```

安装之后，可以给组件添加一个 propTypes 字段

eg:

```js
Article.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
```

## Props in JSX

### 字符串字面量

这两种写法是相等的

```jsx
<MyComponent message=“hello world” />

<MyComponent message={'hello world'} />
```

### Props 默认为 true

这两种写法相等的

```js
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

### 扩展运算符

```js
function App1() {
  return <Greeting firstName=“Ben” lastName=“Hector” />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

### react 如何向组件里面的函数传递参数

> 果然 react 需要一个前端工程师有点水平之后才能写，[教程](https://segmentfault.com/q/1010000008136261)

- 使用匿名函数包装一下
- 使用 bind，传递参数

## props as render func

很方便，当你觉得 children 不够用的时候

render props 模式方便你抽取出不同组件中不同的代码,render Props 适合于当你渲染仅供展示不包含很多操作的时候，会非常的有用

```jsx
<DataProvider render={(data) => <h1>Hello {data.target}</h1>} />
```

组件实现

```js
import React from 'react';

const SharedComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    );
  }
}

export default SharedComponent;
```

this.props.render 就是由另一个组件传递的函数,返回的是 React Element

## children

JSX 元素可以被嵌套。在 jsx 里面可以直接使用`this.props.children`，不需要声明什么其他的东西

函数式组件，使用解构，使用 children

```js
export const Card: FunctionComponent<CardProps> = ({
  title,
  paragraph,
  children,
}) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
    {children}
  </aside>
);
```

## context

### Create a context

```js
import React from "react";

export const AppContext = React.createContext({
  authenticated: true,
  lang: "en",
  theme: "dark",
});
```

### Provide context

```js
const App = () => {
  return (
    <AppContext.Provider
      value={{
        lang: "de",
        authenticated: true,
        theme: "light",
      }}
    >
      <Header />
    </AppContext.Provider>
  );
};
```

### Consume context

```js
const Header = () => {
  return (
    <AppContext.Consumer>
      {({ authenticated }) => {
        if (authenticated) {
          return <h1>Logged in!</h1>;
        }
        return <h1>You need to sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};
```

## [Special Props Warning](https://reactjs.org/warnings/special-props.html)

key 和 ref 作为特殊的 props ，不能直接传递。

## react 组件

props 的类型定义一定要定义好，如果定义不好，后续重构就会很麻烦

有时候懒惰，直接写成这样了

```js
interface IProps {
    value?;
    onChange?;
}
```

这样真的很难看懂

## 学会使用 children func 的方式使用高阶组件

- 默认的方式，children 为 reactNode
- children 为对象的时候，类似于具名插槽
- children 为函数的时候

## 参考

- [React children composition patterns with TypeScript](https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64)
- [How to pass data to props.children](https://frontarm.com/james-k-nelson/passing-data-props-children/)