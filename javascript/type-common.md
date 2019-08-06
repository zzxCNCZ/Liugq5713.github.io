# 基本类型

[[toc]]

## 数字

## 字符串

### 字符串不可变

::: tip 字符串不可变

字符串 的值是 不可变的，这意味着一旦字符串被创建就不能被改变。这并不意味着字符串的值永远不能被改变，只是字符串字面量 string literal 的各个字符不能被改变。改变字符串的唯一方法是重新给它赋一个值

:::

```js
const str = "Jello World";
// 报错：TypeError: Cannot assign to read only property '0' of string 'Jello World'
myStr[0] = "H";
```

曾经遇到一个给字符串排序的需求，想使用 Array 的 sort 方法给字符串排序。

借用方法是可行的，比如借用 Array 的 map 方法

```js
Array.prototype.map.call("test", function(res) {
  console.log(res);
});
```

但是 sort 方法不行，为什么呢？

The sort() method sorts the elements of an array **in place** and returns the array.即 sort 方法会修改原来的数组，即它会修改原来的 string ,所以不能使用

### 字符串的存储方式

### 字符串 汉字和英文

::: tip dddd
dafdsf
:::

<<< @/javascript/code/type-common-string-substring.js
