# 跨域

只要协议，端口，域名有任何一个不同，都会被当成一个不同的域，跨域限制是浏览器行为

## AJAX

是一种能够向服务器请求额外的数据而无需卸载页面(无刷新)的技术，是对 Asynchronous Javascript + XML 的简写

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

## 解决方法

## TL;DR

`iframe,script,image`主要函数利用了 html 里面标签没有跨域的限制（他们仅仅能发送 get 请求），跨域限制是浏览器行为，但是 html 标签没有限制。CORS 和 windows.postMessage 则是新提出来的方法

### iframe

首先需要把发送给 web 服务器的数据编码到 URL 中,然后设置 iframe 的 src 属性为该 URL，服务器能创建一个包含响应内容的 HTML 文档

### 图像 Ping

image 标签

就是发送一个 get 请求

### JSONP( JSON with padding )

script 标签

动态添加`<script>`标签来调用服务器提供的 js 脚本

### CORS

首部字段 `Access-Control-Allow-Methods` 表明服务器允许客户端使用 POST, GET 和 OPTIONS 方法发起请求。该字段与 HTTP/1.1 Allow: response header 类似，但仅限于在需要访问控制的场景中使用。

首部字段 `Access-Control-Allow-Headers` 表明服务器允许请求中携带字段 X-PINGOTHER 与 Content-Type。与 Access-Control-Allow-Methods 一样，Access-Control-Allow-Headers 的值为逗号分割的列表。

最后，首部字段 `Access-Control-Max-Age` 表明该响应的有效时间为 86400 秒，也就是 24 小时。在有效时间内，浏览器无须为同一请求再次发起预检请求。请注意，浏览器自身维护了一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效。

CORS 需要客户端和服务器同时支持。目前，所有浏览器都支持该机制。

跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。

### window.postMessage()

只有当执行它们的页面位于具有相同的协议（通常为 https），端口号（443 为 https 的默认值），以及主机 (两个页面的模数 Document.domain 设置为相同的值) 时，这两个脚本才能相互通信。

## 原因

浏览器限制从脚本内发起的跨域 HTTP 请求（也可能是返回结果被浏览器拦截了）

同源策略：为通信设置了相同的域，相同的端口，相同的协议

## 参考

- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
