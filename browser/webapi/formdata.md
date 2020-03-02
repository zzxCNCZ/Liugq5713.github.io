# FormData

起因是因为我要做一个合成水印，并且上传到七牛的需求。我需要把`canvas`生成的`blob`上传到七牛。我直接调用的 API，的时候一直报错`content-type isn't multipart/form-data`，估计要设置一下`content-type`

搜索一下七牛的官方文档，上面很简单的说：

开发者只要组装一个符合 HTML 文件上传表单规范（参考 RFC1867）的 HTTP 请求，并以 POST 方式向域名 upload.qiniup.com 发起这个请求，即可将指定文件上传到服务端。详细使用方法请参考表单上传 API

怎么组合啊，wtf，这里就需要了解一下前端基础知识，

[FormData 官方文档说明](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses **the same format a form would use if the encoding type were set to "multipart/form-data"**

它这个说明，可真是太符合我的心意了。用 FormData 来创建与表单格式相同的数据

```js
const formData = new FormData()
formData.append('token', .qiniu_token)
formData.append('key', qiniu_key)
```

更让我眼前一亮的是，它自带的一些方法。很强很方便的`map`方法合集

```js
// 列举几个，想看自己去查
FormData.append();
FormData.entries();
FormData.get();
FormData.getAll();
FormData.has();
```

## 为啥 submit 要阻止默认事件

表单的默认事件：表单一点击提交按钮(submit)必然跳转页面，如果表单的 action 为空也会跳转到自己的页面，即效果为刷新当前页。
