# hook

## function vs class

当你的应用里同时存在 Functional 组件和 class 组件时，你就面临着 UI 的不一致性，虽然 react 官方说 function 组件是为了保障 UI 的一致性，但这是建立在所有组件都是 functional 组件，事实上这假设几乎不成立，如果你都采用 class 组件也可能保证 UI 的一致性（都显示最新值），一旦你页面里混用了 class 组件和 functional 组件（使用 useref 暂存状态也视为 class 组件），就存在的 UI 不一致性的可能

- 在异步函数执行前可以对闭包访问的自由变量进行快照捕获：实现快照功能
- 在异步函数执行中可以通过 ref 读取最新的值

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log("val:", i)) // 拿到的是最新值
}
for (var i = 0; i < 10; i++) {
  setTimeout(((val) => console.log("val:", val)).bind(null, i)) // 拿到的是快照
}
const ref = { current: null }
for (var i = 0; i < 10; i++) {
  ref.current = i
  setTimeout(((val) => console.log("val:", ref.current)).bind(null, ref)) // 拿到的是最新值
}
for (var i = 0; i < 10; i++) {
  // 拿到的是快照
  let t = i
  setTimeout(() => {
    console.log("t:", t)
  })
}
```

## [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)

想明白 react hooks，首先你要明白为啥 hook 有使用的原则

### [hook rules](https://reactjs.org/docs/hooks-rules.html)

- 不在循环语句，条件语句中使用 hook
- 仅在函数组件内使用 hooks

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

## useState 中传入函数会怎么样

[useState undefined behavior when state is function](https://github.com/facebook/react/issues/15279)

会直接调用

## 如果 effect 内部获取不到最新值，怎么办？

### 使用依赖

```js
function Counter() {
  const [count, setCount] = useState(0)
  // 这个useEffect依赖于 count ,每次运行的时候会区到count的最新值
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [count])

  return <h1>{count}</h1>
}
```

### 使用 ref 获取到最新的值

```js
function Counter() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  countRef.current = count

  const syncIM = () => {
    console.log(countRef.current)
  }

  useEffect(() => {
    const id = setInterval(syncIM, 1000)

    setTimeout(() => {
      setCount(count + 1)
    }, 2000)

    return () => clearInterval(id)
  }, [])

  return <h1>{count}</h1>
}
```

### [使用 callback](https://zhuanlan.zhihu.com/p/98554943)

```js
function Counter() {
  const [count, setCount] = useState(0)

  const syncIM = useCallback(() => {
    console.log(count)
  }, [count])

  useEffect(() => {
    const id = setInterval(syncIM, 1000)
    setTimeout(() => setCount(count + 1), 2000)
    return () => clearInterval(id)
  }, [syncIM])

  return <h1>{count}</h1>
}
```

### 使用 reducer

useReducer 用于一些比较复杂的操作

## 之前使用 useRef，获取他的 current 的值总是空的，为什么呢？

因为新建 useRef 的时候，没有给它新建类型

每一个渲染都有它自己的 props and state

这里关键的点在于任意一次渲染中的 count 常量都不会随着时间改变。渲染输出会变是因为我们的组件被一次次调用，而每一次调用引起的渲染中，它包含的 count 值独立于其他渲染。

当封闭的值始终不会变的情况下闭包是非常棒的。这使它们非常容易思考因为你本质上在引用常量。

### useState

- Lazy initial state

这个 initialState 仅仅使用在初次渲染中，如果 initialState 的值是由某些值算出来的，那么你就可以传入一个函数，仅在初次渲染的时候会执行。

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

- Bailing out of a state update

如果 setState 是相同的值，那么 react 就不会更新。但是 react 仍然会渲染某一个写特殊的组件。但是不会深入组件树。如果你在 render 的时候做昂贵的计算，你可以使用 useMemo

### useEffect

用于防治一些副作用的代码

- 副作用不需要清理
- 副作用需要清理，useEffect 需要返回一个函数

## [useReducer](https://www.sumologic.com/blog/react-hook-typescript/)

如何给 reducer 添加类型，给 state 和 action 添加类型就可以

```js
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "failure":
      return { isLoading: false, error: action.error }
  }
}
```

## 参考

- [深入理解 react](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
- [Five common mistakes writing react components (with hooks) in 2020](https://www.lorenzweiss.de/common_mistakes_react_hooks/)
