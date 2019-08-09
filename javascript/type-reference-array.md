# 引用类型 Array

## [slice 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

将所有**可枚举属性**的值从一个或多个源对象复制到目标对象（拷贝过程中将调用源对象的 getter 方法，并在 target 对象上使用 setter 方法实现目标对象的拷贝

## Range 的左闭右开原则

比如 Array.prototype.slice(begin,end)，包含 begin，不包含 end

这样做的好处如下：

- 上下界之差等于元素的数量
- 易于表示两个相邻子序列，一个子序列的上界就是另一个子序列的下界序列
- 从零（最小自然数）开始计数时，下界的下标不是 -1（非自然数）
- 表达空集时，不会使得上界小于下界

## 代码优化小细节

> 这是我再看 ElementUI 源码看到的

工作中我们经常使用数组操作，但是众所周知，后端数据不可信。你以为是个数组很可能是个`null`值

因此我们可以这样写数组操作，eg:

```js
(arr || []).map(item => {
  // some code
});
```
