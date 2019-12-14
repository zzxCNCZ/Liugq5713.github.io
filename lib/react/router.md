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
