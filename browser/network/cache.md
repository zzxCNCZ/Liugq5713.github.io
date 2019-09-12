# 优化

## 缓存

### 浏览器缓存

- Cache-Control

max-age（单位为 s）指定设置缓存最大的有效时间，定义的是时间长短。当浏览器向服务器发送请求后，在 max-age 这段时间里浏览器就不会再向服务器发送请求了。

s-maxage（单位为 s）同 max-age，只用于共享缓存（比如 CDN 缓存）。

public 指定响应会被缓存，并且在多用户间共享。也就是下图的意思。如果没有指定 public 还是 private，则默认为 public。

private 响应只作为私有的缓存，不能在用户间共享。如果要求 HTTP 认证，响应会自动设置为 private。

- no-cache 指定不缓存响应，表明资源不进行缓存

- no-store 绝对禁止缓存，

### Expires

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点

### Last-modified

务器端文件的最后修改时间，需要和 cache-control 共同使用，是检查服务器端资源是否更新的一种方式

### ETag

根据实体内容生成一段 hash 字符串，标识资源的状态，由服务端产生。浏览器会将这串字符串传回服务器，验证资源是否已经修改

## LocalStorage

一种本地存储的公共资源，域名下很多应用共享这份资源会有风险；LocalStorage 是以页面域名划分的，如果有多个等价域名之间的 LocalStorage 不互通，则会造成缓存多份浪费

## SessionStorage

SessionStorage 的数据只存储到特定的会话中，不属于持久化的存储，所以关闭浏览器会清除数据

## 参考

- [前端缓存最佳实践](https://juejin.im/post/5c136bd16fb9a049d37efc47)
