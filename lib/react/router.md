# Router

## withRouter

这个高阶组件让你有获取到路由对象，比如 history

```js
import React from “react”;
import PropTypes from “prop-types";
import { withRouter } from “react-router”;

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is “connected” (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
```

## react 可以在路由之间传递数据

history 是可以变的，因此土建你从 Route 获取 location 字段的值，而不是从 hostory.location

`history.push({pathname:'xxx',state:data})`

### history

history 对象有几个属性和方法

- length
- action
- location
  - pathname
  - search
  - hash
  - state 这个 state 通过 history.push 提供，仅供浏览器和 memory history
- push 终于来到我想说的的这个方法了，有什么我们想在路由之间传递比较大的数据，不可能放在 uri 上，我们就可以通过 push，把想要传递的对象放置在 state 上

## Prompt(提示)

- js 页面控制的页面显示隐藏
- 路由之间的跳转
- 页面被用户销毁的时候的提醒

[讨论过程](https://github.com/ReactTraining/react-router/issues/4635)

```js
useEffect(() => {
  const listener = ev => {
    ev.preventDefault();
    ev.returnValue = "文章要保存吼，确定离开吗？";
  };
  window.addEventListener("beforeunload", listener);
  return () => {
    window.removeEventListener("beforeunload", listener);
  };
}, []);
```

自定义 getUserConfirmation 方法，`<BrowserRouter getUserConfirmation={getConfirmation} />` ,覆盖了原生的 window.prompt

```js
 getUserConfirmation={(message, callback) => {
      ReactDOM.render((
        <Popup message={message} callback={callback} />
      ))
  }}
```

## react 可以监听路由的变化

这里还是有点坑，从 listen 里面的参数 localtion 是最新的，但是如果你是获取的 this.props.localtion （那么就要小心它更新不及时）

```js
this.unlisten = this.props.history.listen((location, action) => {})

 componentWillUnmount() {
    this.unlisten();
  }

```

## React Router: Optional Parameters

`<Route path="/Lyrics/:song/:line?" component={LyricSheet}/>`

注意这里的问号是写在后面的

如果 line 作为可选参数，用户没有传，那么就是该值就是 undefined

## react router 里面 push vs replace

这两个很相似，但是唯一的区别就是 push 会新增一条记录,replace 会替换掉这个记录， history.length 不变。

## 如何定义 this.props.location.state

xxx dont exist type 'PoorMansUnknown' , 这什么破报错，让人一头雾水。你的报错信息改为 RouteComponentProps location state property does not exists on type {} 这不也是挺好的么

看一眼 RouteComponentProps 的定义，它是可以对 state 进行定义的

```js
export interface RouteComponentProps<
    Params extends { [K in keyof Params]?: string } = {},
    C extends StaticContext = StaticContext,
    S = H.LocationState
> {
    history: H.History<S>;
    location: H.Location<S>;
    match: match<Params>;
    staticContext?: C;
}
```
