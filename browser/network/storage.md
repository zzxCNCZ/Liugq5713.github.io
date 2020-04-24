# 数据存储

## [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

cookies are small files which are located on a user’s computer. They are designed to hold a generous amount of data specific to a client and website, and they can accessed either by the web server or the client computer.

cookie 实质上是 键值对

- 大小 4KB
- 每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题

### Cookie 的 HttpOnly 和 Secure 的属性作用

`Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly`

#### secure

Secure 属性 ，意味着 Cookie 通信只限于加密传输，指示浏览器仅仅在通过安全/加密连接才能使用该 Cookie。如果一个 Web 服务器从一个非安全连接里设置了一个带有 secure 属性的 Cookie，当 Cookie 被发送到客户端时，它仍然能通过中间人攻击来拦截。

#### HttpOnly

Cookie 的 HttpOnly 属性，指示浏览器不要在除 HTTP（和 HTTPS)请求之外暴露 Cookie。一个有 HttpOnly 属性的 Cookie，不能通过非 HTTP 方式来访问，例如通过调用 JavaScript(例如，引用 document.cookie），因此，不可能通过跨域脚本（一种非常普通的攻击技术）来偷走这种 Cookie。尤其是 Facebook 和 Google 正在广泛地使用 HttpOnly 属性。

## Web 存储

### localStorage

- 大小 5M
- 没有过期时间的设定

### sessionStorage

## cookie vs localStorage

- 目的不同： cookie 主要是给服务端读取，localStorage 只能客户端读取
- 时效不同：cookie 有过期时间的设定，localStorage 为了存储而生(接口好用，cookie 需要分装)，只能通过 Javascript 或者浏览器清除存储的数据
- 大小不同：cookie 大小 4kb，localStorage 大小 5M

## localStorage vs sessionStorage

sessionStorage 基本和 localStorage 相同，区别仅仅是

### IndexDB

结构化数据存储机制
