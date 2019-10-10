# 引用类型 Array

## 检测是否是数组

- instanceof
- Array.isArray
- Object.prototype.toString.call

## 对数组本身进行处理

- Array.of
  创建数组，传入希望你在数组中包含的值
- Array.from 将可迭代对象或类数组对象转变为真正的数组
  可以添加一个映射函数来加工数组

## 转换方法

- join
- toString
- toLocaleString

## 栈方法

- push / pop

## 队列方法

- unshift / shift
- push

## 重排序

- sort
- reverse

## 位置方法

- indexOf / lastIndexOf
  局限：每次只能查找一个值
- find / findIndex
  接受两个参数
  第一个是回调函数
  第二个参数是可选参数，用于指定回调函数里面 this 的值

## 操作方法

- concat

### [slice 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

将所有**可枚举属性**的值从一个或多个源对象复制到目标对象（拷贝过程中将调用源对象的 getter 方法，并在 target 对象上使用 setter 方法实现目标对象的拷贝

- splice
- copyWithin
  param : 该方法开始填充值得索引位置
  param : 开始复制值得索引位置
  param : 限制重写值得数量
- fill
  用指定的值填充一至多个数组元素
  eg : nums.fill(0,1,2) ,将数至 2 下标的元素填充

## 迭代

- map : `create a new array` with the results of calling a provided function on every element in the calling array
- foreach : executes a provided function once for `each array element`
- every : test whether `all elements` in the array pass the test implemented by the provided function
- some : test whether `at least` one element in the array passes the test implemented by the provided function
- filter : `create a new array` with all elements that pass the test implemented by the provided function
- reduce : executes a reducer function (that you provide) on each member of the array resulting in a single output value.

::: tip map 和 forEach 无法跳出循环
解决方法就是使用数组的两个方法 some()与 every()：

1. some()当内部 return true 时跳出整个循环
2. every()当内部 return false 时跳出整个循环

:::

<<< @/fe/javascript/code/array-map-foreach.js

## 归并方法

- reduce / reduceRight

## [数组乱序](https://github.com/lessfish/underscore-analysis/issues/15)

```js
function shuffle(array) {
  var _array = array.concat()
  for (var i = _array.length; i--; ) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = _array[i]
    _array[i] = _array[j]
    _array[j] = temp
  }
  return _array
}
```

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
;(arr || []).map(item => {
  // some code
})
```
