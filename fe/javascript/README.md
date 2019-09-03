# 收集

> 重学前端

## JSDoc

> 这样写函数的时候添加注释，编辑器能够给出非常优秀的提示

add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.

类似这样

```js
/** * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b
}
```

## [接口异常](https://segmentfault.com/a/1190000017525152)

写程序的时候的确没有怎么考虑接口异常的情况

- CGI 逻辑出错。如调用方入参缺失类业务逻辑报错；
- 服务不稳定。如服务器不稳定导致 nginx 各类 500、502，cgi 路径调整导致的 404
- 用户网络环境差。如，网络不稳定、网速慢、运营商劫持等
