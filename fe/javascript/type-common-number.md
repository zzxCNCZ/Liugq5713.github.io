# 基本类型 Number

> 永远不要去判断某个特定的浮点数的值

## 存储方式

数字类型是双精度浮点型([double-precision 64-bit binary format IEEE 754 value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type))，其值的范围在 -(2 的 53 次方-1) 和 2 的 53 次方-1 之间

数字类型有三个 symbolic 值:+Infinity, -Infinity 和 NaN (not-a-number)

`typeof NaN //'number'` `typeof -Infinity // 'number'`

## 类型转化

- praseInt 最好提供基底 ps: ES3 引擎将 070 解释为八进制，但是 ES5 是直接解释为十进制的

::: tip parseInt(string, radix)
parseInt(string, radix) 这个方法是一个将字符串转换为整数的方法，它有两个参数，第一个参数表示要转换的字符串，如果参数不是一个字符串，则将其转换为字符串。第二个参数是基数即进制，默认为 10

:::

- parseFloat
- Number

## 取整

- parseInt

::: warning
parseInt 方法取整数，有两个不好的地方，

1.  parseInt 这个函数名，看起来就是将字符串转整数的，用在这里不是很适合
2.  转字符串有点多此一举，而且肯定会带来性能开销，所以使用 parseInt 虽然方便，但不是最好的办法。

这个 toString 不仅仅是“多此一举”，还可能导致严重的问题，比如：

```js
console.log(parseInt(0.00000001)); // 1
console.log(parseInt(1000000000000000000000)); // 1
```

这是因为，`0.00000001.toString() === 1e-8` 而 `1000000000000000000000..toString() === 1e+21`。

:::

- 使用 Math 方法

  达到 parseInt 的结果，我们需要判断数值的符号，如果是负数，要使用 Math.ceil，如果是正数，则使用 Math.floor

  在 ES2015 之后，还提供了原生的 [Math.trunc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

- 位运算

  `～～1.1 将会被转化为1`

::: tip 位运算

按位操作符（Bitwise operators） 将其操作数（operands）当作 32 位的比特序列（由 0 和 1 组成）,即经位运算的数字将会转为最小位 -Math.pow(2,31),最大为 Math.pow(2,31)-1 的整数(-32768 到 32767),那么这种方法的缺陷就是它不能处理超过 32 位的数值取整

:::

## 取小数

- 先用 Math.trunc(num)取整，然后再与原数相减，就得到了小数部分
- 将原数对 1 取模，即可获得小数部分
- 字符串 split 方法

::: tip 取模运算%

JavaScript 的取模运算%并不限于整数运算，可以对浮点数取模。

:::

## 判断数字极端情况下的方法

- isNaN 判断该参数是否为数字

- isFinite 检验参数是否是位于最大值和最小值之间

- 判断浮点数时候相等

```js
function floatEqual(num, dest) {
  return Math.abs(num - dest) < Number.EPSILON;
}
```

## 常量

> 有些时候你会面临给一个变量初始化的情况，比起直接赋值一个具体的数，调用 js 本身的 API 我就觉得更好

- Number.NaN `Not-A-Number`
- Number.MAX_SAFE_INTEGER `2^53 - 1`
- Number.MAX_VALUE `approximately 1.79E+308`
- Number.POSITIVE_INFINITY `无穷大`

## toFixed

> 一个 Number 方法返回的是 String，理所当然的以为还是 Number，结果就失手了

The toFixed() method formats a number using fixed-point notation and _return a string_ representing the given number using fixed-point notation.

## 参考

- [如何优雅地取数值的整数和小数部分](https://github.com/akira-cn/FE_You_dont_know/issues/5)
