# 生成文件

### Blob

> 前端生成文件要用到的啊

A Blob object represents a file-like object of immutable, raw data.

### [构造函数](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)

```js
var aBlob = new Blob(array [, options]);

// 示例
var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
```

## blob

定义:Blob 对象表示一个不可变，原始数据的类文件对象

- Blob 表示的不一定是 JavaScript 原生格式的数据
- File 接口基于 Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件

HTMLCanvasElement.toBlob() 方法创造 Blob 对象，用以展示 canvas 上的图片

```js
//callback必须（可获得一个单独的Blob对象参数），其余为可选
void canvas.toBlob(callback, type, encoderOptions)
```

## [读取文件 FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

读取文件，将文件转化成这种格式

- FileReader.readAsDataURL()
- FileReader.readAsText()
- FileReader.readAsArrayBuffer()

### 将 base64 转为 blob

来自[davoclavo]的 gist(https://gist.github.com/davoclavo/4424731)

```js
 dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs
    var byteString = atob(dataURI.split(',')[1])

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length)

    // create a view into the buffer
    var ia = new Uint8Array(ab)

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString })
    return blob
}
```

## 参考

- [Base64 encoding and decoding](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
