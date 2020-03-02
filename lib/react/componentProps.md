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
    label: "Button Text"
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
  price: PropTypes.number.isRequired
};
```

## children

JSX 元素可以被嵌套。在 jsx 里面可以直接使用`this.props.children`，不需要声明什么其他的东西

函数式组件，使用解构，使用 children

```js
export const Card: FunctionComponent<CardProps> = ({
  title,
  paragraph,
  children
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
  theme: "dark"
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
        theme: "light"
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
