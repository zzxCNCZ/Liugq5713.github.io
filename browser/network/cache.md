# 缓存

- 缓存从三个功能来分： 是否缓存资源，是否使用本地缓存资源 ，向服务器验证过期资源

## 强缓存

> 强缓存主要是通过 http 请求头中的 Cache-Control 和 Expire 两个字段控制。Expire 是 HTTP1.0 标准下的字段

### Cache-Control

- max-age（单位为 s）指定设置缓存最大的有效时间，定义的是时间长短。当浏览器向服务器发送请求后，在 max-age 这段时间里浏览器就不会再向服务器发送请求了。

- s-maxage（单位为 s）同 max-age，只用于共享缓存（比如 CDN 缓存）。

- public 指定响应会被缓存，并且在多用户间共享。也就是下图的意思。如果没有指定 public 还是 private，则默认为 public。

- private 响应只作为私有的缓存，不能在用户间共享。如果要求 HTTP 认证，响应会自动设置为 private。

- no-cache(他的意思不是说不使用缓存) ，他的意思是： revalidate with server 。 即在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证， 如果资源没有改变则会响应 304 并使用缓存副本

- no-store 绝对禁止缓存

### Expires

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点

## 协商缓存

协商缓存一定会发请求到服务器，通过资源的请求首部字段验证资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的实体，而是通知客户端可以从缓存中加载这个资源（304 not modified）

### Last-Modified/If-Modified-Since

服务器端文件的最后修改时间，需要和 cache-control 共同使用，是检查服务器端资源是否更新的一种方式

### ETag/If-None-Match

ETag 是一个响应首部字段，它是根据实体内容生成的一段 hash 字符串，标识资源的状态，由服务端产生。浏览器会将这串字符串传回服务器，验证资源是否已经修改

## 前端实践

在更新版本的时候，顺便把静态资源的路径改了，这样，就相当于第一次访问这些资源，就不会存在缓存的问题了

- hash：跟整个项目的构建相关，构建生成的文件 hash 值都是一样的，只要项目里有文件更改，整个项目构建的 hash 值都会更改
- chunkhash：根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的 hash 值
- contenthash：由文件内容产生的 hash 值，内容不同产生的 contenthash 值也不一样

## LocalStorage

一种本地存储的公共资源，域名下很多应用共享这份资源会有风险；LocalStorage 是以页面域名划分的，如果有多个等价域名之间的 LocalStorage 不互通，则会造成缓存多份浪费

## SessionStorage

SessionStorage 的数据只存储到特定的会话中，不属于持久化的存储，所以关闭浏览器会清除数据

## 'Cache-Control': 'no-store,private'

[cache-control 参考](https://www.imperva.com/learn/performance/cache-control/)

- private

Indicates that all or part of the response message is intended for a single user and MUST NOT be cached by a shared cache, such as a proxy server.

- no-store

The no-store directive means browsers aren’t allowed to cache a response and must pull it from the server each time it’s requested. This setting is usually used for sensitive data, such as personal banking details.

## 参考

- [前端缓存最佳实践](https://juejin.im/post/5c136bd16fb9a049d37efc47)
- [浏览器 HTTP 缓存机制](https://juejin.im/post/5a673af06fb9a01c927ed880)
- [Why both no-cache and no-store should be used in HTTP response?](https://stackoverflow.com/questions/866822/why-both-no-cache-and-no-store-should-be-used-in-http-response)
