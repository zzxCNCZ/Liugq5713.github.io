# HTTP

## HTTPS（加密，认证，完整性保护） (进化)

::: tips HTTP 缺点

- 通信使用明文，可以被监听
- 不验证通信方的身份，可能遭遇伪装
- 无法证明报文的完整性

:::

https: 是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。

## HTTP 2.0

- 提升访问速度（请求资源所需时间更少，访问速度更快，相比 http1.0）
- 允许多路复用：多路复用允许同时通过单一的 HTTP/2 连接发送多重请求-响应信息。改善了：在 http1.1 中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞。

## 状态码

### 3XX 重定向

- 301 Moved Permanently，该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在所指的 URI。也就是说，如果已经把资源对应的 URI 保存为书签了，这时应该按 Location 首部字段提示的 URI 重新保存
- 302 Found，表示请求的资源已经分配到新的 URI，希望本次能使用新的 URI 访问
- 303 See Other，由于请求对应的资源存在着另一个 URI，应该使用 GET 方法定向的获取请求的资源
- 304 Not Modified，客户端发送附带条件的请求时，服务器允许请求访问资源，但是未满足情况的条件

### 4XX 客户端错误

- 400 Bad Request，请求报文中存在语法错误
- 401 Unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息，之前若进行过一次请求，那么表示用户认证失败
- 403 Forbidden，对请求资源的访问被禁止
- 404 Not Found，服务器上无法找到请求的资源

### 5XX 服务器错误

- 500 Internal Serval Error，表示服务器端在执行请求时发生了错误,通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。没有给出具体错误信息
- 503 Service Unavailable，表明服务器暂时处于超负载或者正在进行停机维护，现在无法处理请求

---

## [204 No Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)

The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page. A 204 response is cacheable by default. An ETag header is included in such a response.

所以对于一些提交到服务器处理的数据，只需要返回是否成功的情况下，可以考虑使用状态码 204 来作为返回信息，从而省掉多余的数据传输。

## [304 Not Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)

The HTTP 304 Not Modified client redirection response code indicates that there is **no need to retransmit the requested resources**. It is an implicit redirection to **a cached resource**. This happens when the request method is safe, like a GET or a HEAD request, or when the request is conditional and uses a If-None-Match or a If-Modified-Since header.

## 301 302 303 307

- [301 Moved Permanently](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301):表示永久重定向
- [302 Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302):表示临时重定向
- [303 See Other](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)
- [307 Temporary Redirect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)

301 比较常用的场景是使用域名跳转。302 用来做临时跳转 比如未登陆的用户访问用户中心重定向到登录页面

303 和 307 是 HTTP1.1 新加的服务器响应文档的状态码，它们是对 HTTP1.0 中的 302 状态码的细化

##　参考

- [Nginx/Tengine 服务器安装 SSL 证书](https://help.aliyun.com/knowledge_detail/95491.html?spm=5176.2020520163.cas.28.7d4556a7qbV98s)
