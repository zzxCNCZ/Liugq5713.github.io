# 路由

### 服务端路由

每跳转到不同的 URL，都是重新访问服务端，然后服务端返回页面，页面也可以是服务端获取数据，然后和模板组合，返回 HTML，也可以是直接返回模板 HTML，然后由前端 JS 再去请求数据，使用前端模板和数据进行组合，生成想要的 HTML。

### 前端路由

每跳转到不同的 URL 都是使用前端的锚点路由，实际上只是 JS 根据 URL 来操作 DOM 元素，根据每个页面需要的去服务端请求数据，返回数据后和模板进行组合，当然模板有可能是请求服务端返回的，这就是 SPA 单页程序。

#### 前端路由的实现

1. 是通过改变 hash 值，监听 onhashchange 事件，这种方式的优点是可以兼容低版本浏览器。Web 服务并不会解析 `hash`，也就是说 `#` 后的内容 Web 服务都会自动忽略，但是 JavaScript 是可以通过 `window.location.hash` 读取到的，读取到路径加以解析之后就可以响应不同路径的逻辑处理。
2. 是通过 historyAPI ,监听 popState 事件，用 pushState 和 replaceState 来实现

::: warning 使用路由。却返回 can't get /route
[问题详情](https://stackoverflow.com/questions/32098076/react-router-cannot-get-except-for-root-url)

http://10.0.0.1/about 这样的路由向服务器寻找资源，所以需设置 historyApiFallback 为 true 。当使用 [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History) 时，任意的 `404` 响应都可能需要被替代为 `index.html`。
:::
