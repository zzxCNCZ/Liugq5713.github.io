# CDN

> A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.

## 回源

当 cdn 缓存服务器中没有符合客户端要求的资源的时候，缓存服务器会请求上一级缓存服务器，以此类推，直到获取到。最后如果还是没有，就会回到我们自己的服务器去获取资源。 那都有哪些时候会回源呢？没有资源，资源过期，访问的资源是不缓存资源等都会导致回

## 参考

- [关于 cdn、回源等问题一网打尽](https://juejin.im/post/5af46498f265da0b8d41f6a3)
