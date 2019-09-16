# HTTP

HTTPS（加密，认证，完整性保护） (进化)

## 缺点

- 通信使用明文，可以被监听
- 不验证通信方的身份，可能遭遇伪装
- 无法证明报文的完整性

## 状态码

### 3XX 重定向

- 301 Moved Permanently，表示请求的资源已经被分配了新的 URI

- 302 Found，表示请求的资源已经分配到新的 URI，希望本次能使用新的 URI 访问
- 303 See Other，由于请求对应的资源存在着另一个 URI，应该使用 GET 方法定向的获取请求的资源
- 304 Not Modified，客户端发送附带条件的请求时，服务器允许请求访问资源，但是未满足情况的条件

### 4XX 客户端错误

- 400 Bad Request，请求报文中存在语法错误
- 401 Unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息，之前若进行过一次请求，那么表示用户认证失败
- 403 Forbidden，对请求资源的访问被禁止
- 404 Not Found，服务器上无法找到请求的资源

### 5XX 服务器错误

- 500 Internal Serval Error，表示服务器端在执行请求时发生了错误
- 503 Service Unavailable，表明服务器暂时处于超负载或者正在进行停机维护，现在无法处理请求

## 控制缓存

Cache-Control

控制缓存的行为

HTTPS（加密，认证，完整性保护）

# 给自己的网站上 https

步骤其实还挺简单的

##　参考

- [Nginx/Tengine 服务器安装 SSL 证书](https://help.aliyun.com/knowledge_detail/95491.html?spm=5176.2020520163.cas.28.7d4556a7qbV98s)