# 基本类型 Number

## 常量

> 有些时候你会面临给一个变量初始化的情况，比起直接赋值一个具体的数，调用 js 本身的 API 我就觉得更好

- Number.NaN `Not-A-Number`
- Number.MAX_SAFE_INTEGER `2^53 - 1`
- Number.MAX_VALUE `approximately 1.79E+308`
- Number.POSITIVE_INFINITY `无穷大`

## toFixed

> 一个 Number 方法返回的是 String，理所当然的以为还是 Number，结果就失手了

The toFixed() method formats a number using fixed-point notation and _return a string_ representing the given number using fixed-point notation.
