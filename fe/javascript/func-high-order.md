# 函数 高阶函数

函数在 JavaScript 里面属于第一公民

## Taking Functions as Arguments

常见的使用比如 回调函数

## Returning Functions as Results

不同的字符串替换，我们需要写不同的函数 eg：

```js
var snakify = function(text) {
  return text.replace(/millenials/gi, "Snake People")
}
console.log(snakify("The Millenials are always up to something."))
// The Snake People are always up to something.
```

```js
var hippify = function(text) {
  return text.replace(/baby boomers/gi, "Aging Hippies")
}
console.log(hippify("The Baby Boomers just look the other way."))
// The Aging Hippies just look the other way.
```

我们通过返回一个 replace 函数，来实现基础函数的复用，类似一个工厂函数

```js
var attitude = function(original, replacement, source) {
  return function(source) {
    return source.replace(original, replacement)
  }
}

var snakify = attitude(/millenials/gi, "Snake People")
var hippify = attitude(/baby boomers/gi, "Aging Hippies")
```

## 参考

- [Higher-Order Functions in JavaScript](https://www.sitepoint.com/higher-order-functions-javascript/)
