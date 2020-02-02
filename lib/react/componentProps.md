# 组件 props

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

## 参考

- [React children composition patterns with TypeScript](https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64)
