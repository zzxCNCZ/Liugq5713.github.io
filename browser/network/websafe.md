# WEB 安全

### XSS（ Cross-site scripting ）

代码注入的一种

如何防范

过滤特殊字符

使用 HTTP 头指定类型

使得输出内容防止被 HTML 解析

用户方面

让用户用户上最新的浏览器

### CSRF( Cross-site request forgery )

是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。

如何防范

- 检查 Referer 字段,HTTP 头中有一个 Referer 字段，这个字段用以标明请求来源于哪个地址。
- 添加校验 token
- 要求用户浏览器提供不保存在 cookie 中，并且攻击者无法伪造的数据作为校验，
