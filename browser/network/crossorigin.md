# 跨域

## TL;DR

`iframe,script,image`主要函数利用了 html 里面标签没有跨域的限制（他们仅仅能发送 get 请求），跨域限制是浏览器行为，限制的是脚本， html 标签没有限制。CORS 和 windows.postMessage 则是新提出来的方法，另外也可以利用服务器的转发

## AJAX

是一种能够向服务器请求额外的数据而无需卸载页面(无刷新)的技术，是对 Asynchronous Javascript + XML 的简写

```js
let xhr = new XMLHttpRequest()
xhr.open("POST", "/xxx")
xhr.onreadystatechange = e => {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("请求成功")
    } else {
      console.log("请求失败")
    }
  }
}
xhr.send("hi")
```

### XMLHttpRequest（不能跨域）

属性

readyState（通过 onReadyStateChange 来监听它的变化）

- 0 UNSENT (未打开) open()方法还未被调用.
- 1 OPENED (未发送) open()方法已经被调用.
- 2 HEADERS_RECEIVED (已获取响应头) send()方法已经被调用, 响应头和响应状态已经返回.
- 3 LOADING (正在下载响应体) 响应体下载中; responseText 中已经获取了部分数据.
- 4 DONE (请求完成) 整个请求过程已经完毕.

responseXML：对请求的响应，解析为 XML 并作为 Document 对象返回。

responseText：响应体（不包括头部）

status：由服务器返回的 HTTP 状态代码，如 200 表示成功

statusText：这个属性用名称而不是数字指定了请求的 HTTP 的状态代码。

方法

abort() : 取消当前响应，关闭连接并且结束任何未决的网络活动。
getAllResponseHeaders()：把 HTTP 响应头部作为未解析的字符串返回。
getResponseHeader()：返回指定的 HTTP 响应头部的值。
open()：初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求。
send()：发送 HTTP 请求，使用传递给 open() 方法的参数，以及传递给该方法的可选请求体。
setRequestHeader()：向一个打开但未发送的请求设置或添加一个 HTTP 请求。

## 跨域方法

浏览器限制从脚本内发起的跨域 HTTP 请求（也可能是返回结果被浏览器拦截了）

只要协议，域名，端口有任何一个不同，都会被当成一个不同的域，跨域限制是浏览器行为

### iframe

首先需要把发送给 web 服务器的数据编码到 URL 中,然后设置 iframe 的 src 属性为该 URL，服务器能创建一个包含响应内容的 HTML 文档

### 图像 Ping

image 标签

就是发送一个 get 请求

### JSONP( JSON with padding )

动态添加`<script>`标签来调用服务器提供的 js 脚本

首先要明确的是 JSONP 就是一个 get 请求，请求类型这样:`http://www.example.net/sample.aspx?callback=mycallback`

如果不是 JSONP，他可能就是返回这样的数据：`{ foo: 'bar' }`

JOSNP 的请求，服务端会获取 url 里面的 callback，把 JSON 放在这个 callback 里面，然后返回类似这样`mycallback({ foo: 'bar' });`，然后开发者在自己的页面里面定义 mycallback 函数，当这个脚本加载之后，这个函数就会执行

手写一个 JSONP

```js
function suggest_so(val) {
  console.log("val", val)
}
var script_el = document.createElement("script")
var word = "中国"
script_el.src = `https://sug.so.360.cn/suggest?word=${word}&callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word`
document.body.insertBefore(script_el, document.body.firstChild)
// todo:错误处理 和 超时处理
// 通过监听script元素的load事件来监听请求是否完成，以及给script添加了error事件
// script_el.onload = function(val) {
//   console.log("val", val)
// }
```

### CORS

首部字段 `Access-Control-Allow-Methods` 表明服务器允许客户端使用 POST, GET 和 OPTIONS 方法发起请求。该字段与 HTTP/1.1 Allow: response header 类似，但仅限于在需要访问控制的场景中使用。

首部字段 `Access-Control-Allow-Headers` 表明服务器允许请求中携带字段 X-PINGOTHER 与 Content-Type。与 Access-Control-Allow-Methods 一样，Access-Control-Allow-Headers 的值为逗号分割的列表。

最后，首部字段 `Access-Control-Max-Age` 表明该响应的有效时间为 86400 秒，也就是 24 小时。在有效时间内，浏览器无须为同一请求再次发起预检请求。请注意，浏览器自身维护了一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效。

CORS 需要客户端和服务器同时支持。目前，所有浏览器都支持该机制。

跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。

#### CORS 请求如何带上 cookie

> 默认情况下，跨源请求不提供凭据(cookie、HTTP 认证及客户端 SSL 证明等)
> 如果发送的是带凭据的请求，但服务器的相应中没有相关的头部，那么浏览器就不会把相应内容交给 JavaScript,请求就无法得到结果的数据（浏览器得到了，但是我们请求的方法得不到，因为被浏览器拦截了）

客户端代码，设置 withCredentials 为 true 即可让该跨域请求携带 Cookie。 注意携带的是目标页面所在域的 Cookie。

还需要让目标服务器接受你跨域发送的 cookie，设置 Access-Control-Allow-Credentials 响应头为"true"

PS:如果设置 `Access-Control-Allow-Origin: *`，不管 withCredentials 有没有设置，cookie 也带不过去

#### cors 请求

cors 的请求分为两类，简单请求（simple request）和非简单请求（not-so-simple request）

- 简单请求

简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个 Origin 字段。Origin 字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。

- 非简单请求

> 配置 nginx 跨域的时候，要判断浏览器发过来的是不是预检请求，如果是，返回 204

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json

"预检"请求用的请求方法是 OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是 Origin，表示请求来自哪个源。除了 Origin 字段，"预检"请求的头信息包括两个特殊字段。

### window.postMessage()

只有当执行它们的页面位于具有相同的协议（通常为 https），端口号（443 为 https 的默认值），以及主机 (两个页面的模数 Document.domain 设置为相同的值) 时，这两个脚本才能相互通信。

## 参考

- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [What is JSONP, and why was it created?](https://stackoverflow.com/questions/2067472/what-is-jsonp-and-why-was-it-created)
