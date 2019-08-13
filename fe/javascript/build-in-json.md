# 内置对象 JSON

> 一直不是很清楚 JSON.parse 是把字符串转成 JSON,还是将 JSON 转成字符串。后来我就记起来了，JSON.parse 就是 parse json

## [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

parses a JSON string, constructing the JavaScript value or object described by the string

## [JSON.stringify](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

::: warning
如果数据有循环引用的情况，那么使用 `JSON.stringify` 会报错
:::

The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

### 使用

可能很少有人关注它的第二个和第三个参数吧

- 筛选数据

这个非常好用，尤其是它筛选数据还是递归得

- 处理格式
