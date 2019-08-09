# Storage

## cookie

cookies are small files which are located on a user’s computer. They are designed to hold a generous amount of data specific to a client and website, and they can accessed either by the web server or the client computer.

cookie 实质上是 键值对

- 大小 4KB
- 每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题

## localStorage

- 大小 5M
- 没有过期时间的设定

## sessionStorage

## cookie vs localStorage

- 目的不同： cookie 主要是给服务端读取，localStorage 只能客户端读取
- 时效不同：cookie 有过期时间的设定，localStorage 为了存储而生(接口好用，cookie 需要分装)，只能通过 Javascript 或者浏览器清除存储的数据
- 大小不同：cookie 大小 4kb，localStorage 大小 5M

## localStorage vs sessionStorage

sessionStorage 基本和 localStorage 相同，区别仅仅是
