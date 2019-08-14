# 函数

## 箭头函数

## 异步函数

### promise

Promise 不能返回值，因为这是异步操作返回个毛啊。

但是可以写成类似同步的写法，async,await

### async/await

await 要在 async 里面使用

## 类

### 静态方法

不可以在实例中访问静态成员，必须要直接在类中访问静态成员

```js
class Foo {
  static classMethod() {
    return "hello";
  }
}
Foo.classMethod();
var foo = new Foo();
foo.classMethod();
```