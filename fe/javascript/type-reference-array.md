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

- splice : `var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
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
  var _array = array.concat();
  for (var i = _array.length; i--; ) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }
  return _array;
}
```

## JavaScript 怎么快速声明一个数组，长度为 100，元素全是 0？

new Int8Array(100);

// 创建 10 个 undefined 的数组
Array.from({ length: 10 })

## Range 的左闭右开原则

比如 Array.prototype.slice(begin,end)，包含 begin，不包含 end

这样做的好处如下：

- 上下界之差等于元素的数量
- 易于表示两个相邻子序列，一个子序列的上界就是另一个子序列的下界序列
- 从零（最小自然数）开始计数时，下界的下标不是 -1（非自然数）
- 表达空集时，不会使得上界小于下界

## 代码优化小细节

> 这是我再看 ElementUI 源码看到的

工作中我们经常使用数组操作，但是众所周知，后端数据不可信。你以为是个数组很可能是个`null`值，因此我们可以这样写数组操作，eg:

```ts
(arr || []).map((item) => {
  // some code
});
```

## foreach

当你使用 foreach 循环数组的时候，如果你此时修改原数组里面的元素

- 如果是给原数组添加元素，访问不到
- 如果是给原数组删除元素，也访问不到咯

The range of elements processed by forEach() is set before the first invocation of callback. Elements that are appended to the array after the call to forEach() begins will not be visited by callback. If the values of existing elements of the array are changed, the value passed to callback will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited.

```js
let nums = [1, 2, 3, 4];
nums.forEach((num, index) => {
  console.log(num, index, nums);
  nums.splice(index, 0, 5);
});
```

## 查找数组的方法

find 和 findIndex

find 返回符合条件的元素，如果没有的话，则返回 undefined

indexOf 和 findIndex 的区别

findIndex 更加的强大，当你的数组里面的元素是非原始类型的时候，肯定是使用 findIndex

当然数组里面的元素如果是简单类型，当然你可以使用 indexOf

## [洗牌算法](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?utm_source=caibaojian.com)

最简单的打散数组的方式

```js
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
```

洗牌算法

```js
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
```

## 数组解构

这样就拿到数组第三个元素了

```js
const [, , test] = [1, 2, 3];
```
