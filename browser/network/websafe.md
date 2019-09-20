# WEB 攻击

## XSS（ Cross-site scripting ）

代码注入的一种

- 反射型
  当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web 服务器将注入脚本，比如一个错误信息，搜索结果等，未进行过滤直接返回到用户的浏览器上。
- DOM 型
  前端 JavaScript 代码不够严谨，把不可信的内容插入到了页面。在使用 .innerHTML、.outerHTML、.appendChild、document.write()等 API 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，尽量使用 .innerText、.textContent、.setAttribute() 等
- 存储型
  恶意脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器传回并执行，影响范围比反射型和 DOM 型 XSS 更大。存储型 XSS 攻击的原因仍然是没有做好数据过滤：前端提交数据至服务端时，没有做好过滤；服务端在接受到数据时，在存储之前，没有做过滤；前端从服务端请求到数据，没有过滤输出。

如何防范

- HTML 转义
- 在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等
- HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。

## CSRF( Cross-site request forgery )

是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。

如何防范

- 检查 Referer 字段,HTTP 头中有一个 Referer 字段，这个字段用以标明请求来源于哪个地址。通常来讲，用户提交的请求，referer 应该是来来自站内地址，所以如果发现 referer 中地址异常，那么很可能是遭到了 CSRF 攻击
- 避免登录的 session 长时间存储在客户端中
- 关键请求使用验证码或者 token 机制。在一些十分关键的操作，比如交易付款环节。这种请求中，加入验证码，可以防止被恶意用户攻击。

## 点击劫持

点击劫持是指在一个 Web 页面中隐藏了一个透明的 iframe，用外层假页面诱导用户点击，实际上是在隐藏的 frame 上触发了点击事件进行一些用户不知情的操作

如何防御

- frame busting

```js
if (top.location != window.location) {
  top.location = window.location
}
```

需要注意的是: HTML5 中 iframe 的 sandbox 属性、IE 中 iframe 的 security 属性等，都可以限制 iframe 页面中的 JavaScript 脚本执行，从而可以使得 frame busting 失效

- X-Frame-Options

X-FRAME-OPTIONS 是微软提出的一个 http 头，专门用来防御利用 iframe 嵌套的点击劫持攻击。并且在 IE8、Firefox3.6、Chrome4 以上的版本均能很好的支持。
可以设置为以下值:

- DENY: 拒绝任何域加载
- SAMEORIGIN: 允许同源域下加载
- ALLOW-FROM: 可以定义允许 frame 加载的页面地址

## 参考

- [前端安全系列（一）：如何防止 XSS 攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
- [前端安全系列（二）：如何防止 CSRF 攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
- [网络安全的教程](https://www.hacksplaining.com/lessons)
- [寒冬求职之你必须要懂的 Web 安全](https://juejin.im/post/5cd6ad7a51882568d3670a8e)
