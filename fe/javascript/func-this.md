# 函数 this

## test()形式

直接不带任何引用形式去调用函数，则 this 会指向全局对象，因为没有其他影响去改变 this，this 默认就是指向全局对象（浏览器是 window，Node 中是 global）的。这个结论是在非严格模式的情况下，严格模式下这个 this 其实是 undefined 的。

```js
var a = 1
function test() {
  console.log(this.a)
}
test()
```

## “xxx.test()”形式

```js
var a = 1
function test() {
  console.log(this.a)
}
var obj = {
  a: 2,
  test
}
obj.test()
```

## “test.call(xxx) / test.apply(xxx) / test.bind()”形式

## "new test()"形式

```js
var a = 1
function test(a) {
  this.a = a
}
var b = new test(2)
console.log(b.a)
```

## 参考

- [不要再问我 this 的指向问题了](https://segmentfault.com/a/1190000015438195)