# 基本类型 String

## 存储方式

ES6 之前，JavaScript 字符串基于 16 位字符编码（UTF-16）进行构建，每 16 位的序列是一个编码单元，代表一个字符。**length 和 charAt 方法等字符串属性和方法都是基于这种编码单元构建的**

但 Unicode 引入扩展字符集，编码规则进行了变更

UTF-16 引入了代理对，规定了用两个 16 位编码单元表示一个码位，也就是说字符串有两种，一种是由编码单元 16 位表示的 BMP 字符。另一种是由两个编码单元 32 位表示的辅助平面字符

```js
console.log("16位表示", "汉".length);

console.log("32位表示", "𠮷".length);
```

## 值不可变

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

## 汉字和英文

::: tip dddd
dafdsf
:::

<<< @/javascript/code/type-common-string-substring.js
