# hook

## hook 是个什么玩意

什么是 Hooks？Hooks 是一个 React 函数组件内一类特殊的函数（通常以 "use" 开头，比如 "useState"），使开发者能够在 function component 里依旧使用 state 和 life-cycles，以及使用 custom hook 复用业务逻辑。

准确的定义

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

Hook 让函数式组件即以前的无状态组件 让他变成了有状态的了

解决了什么问题？

- hard to reuse stateful logic between components
- Complex components become hard to understand
- Classes confuse both people and machine

注意项

1. 必须保证 hook 在 Function 中的调用顺序是始终一致的，不要在条件分支，循环中调用 hook；
2. 只能在 React Function（如 FunctionComponent 或 CustomHook）中调用，不能在 ClassComponent 中调用；
3. 共享带状态的逻辑不等于共享状态，并不能取代 Redux 等状态管理程序；

## useState

useState 可以推断出默认的函数类型

useState 如果是用来使用数据，使用 concat 返回新的数组

## useEffect 的问题

1. useEffect 获取到的是当次渲染的 state,并不能像 class 中使用 this 永远获取到最新的

2. useEffect 像 componentDidMount + componentDidUpdate + componentDidUnMount 它会在第一次渲染时会调用。监听依赖的 props 和 state，更新时调用。数据更新后会调用 return 的函数

## useState

[useState undefined behavior when state is function](https://github.com/facebook/react/issues/15279)

会直接调用

## 解决的方法

### 使用依赖

```js
function Counter() {
  const [count, setCount] = useState(0);
  // 这个useEffect依赖于 count ,每次运行的时候会区到count的最新值
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [count]);

  return <h1>{count}</h1>;
}
```

### 使用 ref 获取到最新的值

```js
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const syncIM = () => {
    console.log(countRef.current);
  };

  useEffect(() => {
    const id = setInterval(syncIM, 1000);

    setTimeout(() => {
      setCount(count + 1);
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

### 使用 callback

```js
function Counter() {
  const [count, setCount] = useState(0);

  const syncIM = useCallback(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    const id = setInterval(syncIM, 1000);
    setTimeout(() => setCount(count + 1), 2000);
    return () => clearInterval(id);
  }, [syncIM]);

  return <h1>{count}</h1>;
}
```

### 使用 reducer

useReducer 用于一些比较复杂的操作

## 之前使用 useRef，获取他的 current 的值总是空的，为什么呢？

因为新建 useRef 的时候，没有给它新建类型

每一个渲染都有它自己的 props and state

这里关键的点在于任意一次渲染中的 count 常量都不会随着时间改变。渲染输出会变是因为我们的组件被一次次调用，而每一次调用引起的渲染中，它包含的 count 值独立于其他渲染。

当封闭的值始终不会变的情况下闭包是非常棒的。这使它们非常容易思考因为你本质上在引用常量。

### useEffect

用于防治一些副作用的代码

- 副作用不需要清理
- 副作用需要清理，useEffect 需要返回一个函数

## 参考

- [深入理解 react](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
