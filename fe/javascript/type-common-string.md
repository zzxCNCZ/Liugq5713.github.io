# 基本类型 String

## 存储方式

字符串经常被当成字符数组。字符串的内部实现究竟有没有使用数组并不好说，但 JavaScript 中的字符串和字符数组并不是一回事，最多只是看上去相似而已。所以数组的很多方法字符串也有，比如 includes

ES6 之前，JavaScript 字符串基于 16 位字符编码（UTF-16）进行构建，每 16 位的序列是一个编码单元，代表一个字符。**length 和 charAt 方法等字符串属性和方法都是基于这种编码单元构建的**

但 Unicode 引入扩展字符集，编码规则进行了变更

UTF-16 引入了代理对，规定了用两个 16 位编码单元表示一个码位，也就是说字符串有两种，一种是由编码单元 16 位表示的 BMP 字符。另一种是由两个编码单元 32 位表示的辅助平面字符

```js
console.log("16位表示", "汉".length); // 1
console.log("32位表示", "𠮷".length); // 2
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

一个变通（破解）的办法是先将字符串转换为数组，待处理完后再将结果转换回字符串

### 获取单个字符

- charAt(),'string'.charAt(0)
- 将其看作为类数组对象,'string'[0]

### 获取字符的 Unicode 值

charCodeAt()

## indexOf 和 includes 方法

> 这两个方法数组也有，虽然我以前只是数组这样用

```js
//includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
str.includes(searchString[, position])
```

## 类型转化

### toString

如果值有 toString 方法，那么就调用该方法
可以传入进制的基数

## 汉字和英文

<<< @/fe/javascript/code/type-common-string-substring.js

## 截取字符串

// 因为字符串是不可修改的，所以这些方法不会修改原先的字符串

- substring

```js
// 取两个参数中较小的为起点，较大的为终点
str.substring(a, b);
```

- substr()

第一个参数代表开始位置,第二个参数代表截取的长度

- `str.slice(beginIndex[, endIndex])`

// 如果参数是负数，都会给参数加上数组的宽度使其变为正数

## localeCompare

用户排列字符串

The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

## String 模式匹配

### search

参数是一个正则表达式，返回第一个与之匹配的子串的起始位置
不支持全局检索

### replace

第一个参数是正则表达式
第二个参数要替换的字符串
执行检索和替换操作

- [手机号隐藏中间四位数](#hidden-phone-number)
- [高亮文本](#highlightText)

### match

返回一个一个由匹配结果组成的数组

### split

将调用他的字符串拆分为一个子串组成的数组

## replace 应用

> replace 结合正则表达式，真的很强大

### hidden-phone-number

**当一个参数为正则表达式，可以通过 `$n` (n 小于 100，n 从 1)访问圆括号匹配到的子字符串**，这个知识还是很有用的

```javascript
const hidePhone = phoneNumber => {
  return phoneNumber.replace(/^(\d{3})\d{4}/, "$1****");
};
```

### highlightText

```javascript
export const highlightText = (content, words) => {
  if (typeof content !== "string") {
    console.error("please make sure the type of content is string");
    return content;
  }

  if (Array.isArray(words)) {
    const word_group = words
      .map(word => {
        return `${word}`;
      })
      .join("|");
    const reg = new RegExp(`(${word_group})`, "g");
    return content.replace(reg, "<span class='highlight'>$&</span>");
  }

  if (typeof words === "string") {
    const reg = new RegExp(words, "g");
    return content.replace(reg, "<span class='highlight'>$&</span>");
  }
  return content;
};
```
