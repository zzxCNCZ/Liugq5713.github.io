# 基本类型 Number

> 永远不要去判断某个特定的浮点数的值

## 存储方式

数字类型是双精度浮点型([double-precision 64-bit binary format IEEE 754 value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type))，其值的范围在 -(2 的 53 次方-1) 和 2 的 53 次方-1 之间

数字类型有三个 symbolic values:+Infinity, -Infinity 和 NaN (not-a-number).

## 位运算

按位操作符（Bitwise operators） 将其操作数（operands）当作 32 位的比特序列（由 0 和 1 组成）,即经位运算的数字将会转为最小位 -Math.pow(2,31),最大为 Math.pow(2,31)-1 的整数

`～～1.1 将会被转化为1`

## 类型转化

转为数字类型的方法

### praseInt

    	最好提供基底
    		ps:  ES3引擎将070解释为八进制，但是ES5是直接解释为十进制的

### parseFloat

### Number

## 判断数字极端情况下的方法

### isNaN

判断该参数是否为数字

### isFinite

检验参数是否是位于最大值和最小值之间

## 常量

> 有些时候你会面临给一个变量初始化的情况，比起直接赋值一个具体的数，调用 js 本身的 API 我就觉得更好

- Number.NaN `Not-A-Number`
- Number.MAX_SAFE_INTEGER `2^53 - 1`
- Number.MAX_VALUE `approximately 1.79E+308`
- Number.POSITIVE_INFINITY `无穷大`

## toFixed

> 一个 Number 方法返回的是 String，理所当然的以为还是 Number，结果就失手了

The toFixed() method formats a number using fixed-point notation and _return a string_ representing the given number using fixed-point notation.
