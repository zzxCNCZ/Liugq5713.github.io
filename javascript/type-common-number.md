# 基本类型 Number

## 存储方式

数字类型是双精度浮点型([double-precision 64-bit binary format IEEE 754 value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type))，其值的范围在 -(2 的 53 次方-1) 和 2 的 53 次方-1 之间

数字类型有三个 symbolic values:+Infinity, -Infinity 和 NaN (not-a-number).

## 位运算

按位操作符（Bitwise operators） 将其操作数（operands）当作 32 位的比特序列（由 0 和 1 组成）

## 常量

> 有些时候你会面临给一个变量初始化的情况，比起直接赋值一个具体的数，调用 js 本身的 API 我就觉得更好

- Number.NaN `Not-A-Number`
- Number.MAX_SAFE_INTEGER `2^53 - 1`
- Number.MAX_VALUE `approximately 1.79E+308`
- Number.POSITIVE_INFINITY `无穷大`

## toFixed

> 一个 Number 方法返回的是 String，理所当然的以为还是 Number，结果就失手了

The toFixed() method formats a number using fixed-point notation and _return a string_ representing the given number using fixed-point notation.
