## crossorigin 属性

最近一直在做水印的功能，把原先上传到七牛云上的图片绘制到`canvas`上，叠加水印之后在上传到七牛云上，但是出现了图片跨域的错误

在没有 CORS 批准的情况下从另一个来源加载任何数据而将画布绘制到画布中，画布就会受到污染。

在受污染的画布上调用以下任何一项将导致错误：

- 调用 getImageData()画布的上下文
- 调用 toBlob()上的`<canvas>`元素本身
- toDataURL()在画布上调用

所以当你碰到图片跨域的情况的时候，设置`image`标签的`crossorigin`属性为`anonymous`试试

## `image`标签的`crossorigin`属性

此枚举属性指示是否必须使用 CORS 完成相关图像的提取。支持 CORS 的图像可以在`<canvas>`元素中重复使用而不会被“  污染”

[anonymous](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/comment-page-1/)

执行跨源请求（即，使用 Origin:HTTP 头），但不发送凭证（即，没有 cookie，X.509 证书或 HTTP 基本认证）。如果服务器未向源站点提供凭据（通过不设置 Access-Control-Allow-Origin HTTP 标头），则图像将受到污染并且其使用受到限制。

PS: 注意服务器也要设置`Access-Control-Allow-Origin`标头，我今天调用启信宝的 API 获取图片使用的时候，就怎么都是跨域失败，可能它就是没有设置这个 HTTP 标头

## `script` 标签的`crossorigin`的属性

Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.

[解释](https://github.com/rainjay/blog/issues/1)

crossorigin 的属性值可以是 anonymous、use-credentials，如果没有属性值或者非法属性值，会被浏览器默认做 anonymous。crossorigin 的作用有三个：

crossorigin 会让浏览器启用 CORS 访问检查，检查 http 相应头的`Access-Control-Allow-Origin`，对于传统 script 需要跨域获取的 js 资源，控制暴露出其报错的详细信息。

对于 module script，控制用于跨域请求的凭据模式。我们在收集错误日志的时候，通常会在 window 上注册一个方法来监测所有代码抛出的异常：

```js
window.addEventListener("error", function(msg, url, lineno, colno, error) {
  var string = msg.toLowerCase()
  var substring = "script error"
  if (string.indexOf(substring) > -1) {
    alert("Script Error: See Browser Console for Detail")
  } else {
    var message = {
      Message: msg,
      URL: url,
      Line: lineNo,
      Column: columnNo,
      "Error object": JSON.stringify(error)
    }
    // send error log to server
    record(message)
  }
  return false
})
```

但是对于跨域 js 来说，只会给出很少的报错信息：'error: script error'，通过使用 crossorigin 属性可以使跨域 js 暴露出跟同域 js 同样的报错信息。但是，资源服务器必须返回一个 Access-Control-Allow-Origin 的 header，否则资源无法访问。
