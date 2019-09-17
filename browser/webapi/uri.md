# URI

## URI

统一资源定位符 标准格式

协议类型:`[//服务器地址[:端口号]][/资源层级unix文件路径]文件名[?查询][#片段id]`

### URL interface

URL is used to parse, construct, normalise, and encode URLs

所以这边值得注意的是，传入 URL 构造函数的字符串必须带协议（`http://www.123.com`，注意如果是`www.123.com`这样的网址，需要给他处理一下，再传入这个构造函数）

```js
// Parameters:

// url
// A USVString representing an absolute or relative URL. If url is a relative URL, base is required, and will be used as the base URL. If url is an absolute URL, a given base will be ignored.

// base Optional
// A USVString representing the base URL to use in case url is a relative URL. If not specified, it defaults to ''.
url = new URL(url, [base])
```

### URL.createObjectURL()

URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的 URL
这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的 URL 对象表示指定的 File 对象或 Blob 对象

这个 API 已经不推荐使用，使用[HTMLMediaElement.srcObject
](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject)代替

```js
// object
// A File, Blob, MediaStream, or MediaSource object to create an object URL for.
objectURL = URL.createObjectURL(object)
```

#### 上传图片预览

有时我们通过 input 上传图片文件之前，会希望可以预览一下图片，这个时候就可以通过前面所学到的东西实现，而且非常简单。[demo](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images)

```html
<input id="upload" type="file" /> <img id="preview" src="" alt="预览" />
```

```js
const upload = document.querySelector("#upload")
const preview = document.querySelector("#preview")

upload.onchange = function() {
  const file = upload.files[0] //File对象
  const src = URL.createObjectURL(file)
  preview.src = src
}
```

video 标签，audio 标签还是 img 标签的 src 属性，不管是相对路径，绝对路径，或者一个网络地址，归根结底都是指向一个文件资源的地址。那我们生成一个指向我们上传的文件的地址然后添加到 src 属性上，不就能实现预览了嘛。

通过[`URL.createObjectURL()`](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)创建一个新的 URL 对象，表示指定的  File  对象或  Blob  对象。

### URL.revokeObjectURL()

Revokes an object URL previously created using URL.createObjectURL().

### 获取 URL 的查询参数的值

eg: `const url =http://www.123.com?id=123&name=kuchcy'`

我应该如何获取到 URL 里面的 id 的值呢？
一行代码的事情(但是此方法慎用，兼容性不太好) :
`new URL(url).searchParams.get('id')`

### 相对路径转绝对路径

```js
var a = document.createElement("a")
a.href = url // url 为相对路径
a.href // 相对路径已经变成绝对路径
```

### URI vs URL

了解了一下 URI 和 URL 的区别。
URI 的英文 Uniform Resource Identify , URL 的英文 Uniform Resource Location。其实还有 URN ( Uniform Resouce Name ) 。指定一个资源我们可以通过他的名字，他的地址。所以 URL,URN are all types of URI.

## Navigator.sendBeacon()

> 可以用于记录用户信息，防止突然关闭浏览器记录不到的情况

`navigator.sendBeacon(url, data);`

The navigator.sendBeacon() method can be used to asynchronously transfer a small amount of data over HTTP to a web server.

## 参考

[为什么视频网站的视频链接地址是 blob？](https://juejin.im/post/5d1ea7a8e51d454fd8057bea)
