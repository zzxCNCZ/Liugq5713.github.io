# 编码

## ASCII 码

美国制定了一套字符编码，对英语字符与二进制位之间的关系，做了统一规定。这被称为 ASCII 码。ASCII 码一共规定了 128 个字符的编码

## 非 ASCII 编码

比如汉字很多，需要使用多个字节表达一个符号

## Unicode

如果有一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，那么乱码问题就会消失。这就是 Unicode

### Unicode 问题

Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储

导致了两个问题：

- 出现了 Unicode 的多种存储方式，也就是说有许多种不同的二进制格式，可以用来表示 Unicode
- Unicode 在很长一段时间内无法推广，直到互联网的出现

## UTF-8

UTF-8 就是在互联网上使用最广的一种 **Unicode 的实现方式**

UTF-8 的编码规则很简单，只有二条：

- 对于单字节的符号，字节的第一位设为 0，后面 7 位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的
- 对于 n 字节的符号（n > 1），第一个字节的前 n 位都设为 1，第 n + 1 位设为 0，后面字节的前两位一律设为 10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码

## 前端应用

### URL 编码

> URL 不允许一些特殊的字符，比如空格和斜线，因此就需要这些函数，空格将被转换为 `%20`，!将会被转化为`%21`。三对函数的安全字符（即不需要编码的字符）范围也不同

- escape/unescape

  针对宽字符做 unicode 编码，并针对码值做十六进制编码

- encodeURI/decodeURI
  针对宽字节字符进行 UTF-8 编码，然后针对编码后的结果进行 ％ 替换，得到结果（encodeURIComponent 也一样）

  encodeURI 是针对整个 URI 进行编码，encodeURI 所针对的是整个 URI，并不会对分隔符如/,?,=符号进行编码，否则破坏了 URI 的原有含义

- encodeURIComponent/decodeURIComponent

  encodeURIComponent 则是针对 URI 的某一部分进行编码，如查询字符串部分的&会被转义

The escape() function computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.

### base64 编码

base64 编码在前端通常用于图片和 icon 的编码，它将每 3 个 8 位字节为一组，分成 4 组 6 位字节，并且每个字节的高位补零，形成 4 个 8 位的字节，由此可看出 base64 编码是可逆推的。在大多数浏览器中，提供了 ASCII 字符的 base64 编码函数，即 window.btoa()。该函数无法针对宽字节进行 base64 编码，若针对中文编码，则需现转换位 UTF-8 编码，然后进行 base64 编码

- base64 编码步骤

1. 将每三个字节作为一组，一共是 24 个二进制位。
2. 第二步，将这 24 个二进制位分为四组，每个组有 6 个二进制位。
3. 在每组前面加两个 00，扩展成 32 个二进制位，即四个字节。
4. 根据下表，得到扩展后的每个字节的对应符号，这就是 Base64 的编码值。

```js
function unicodeToBase64(s) {
  return window.btoa(unescape(encodeURIComponent(s)));
}
```

## 参考文章

- [字符编码笔记：ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
- [前端开发中的字符编码](https://segmentfault.com/a/1190000005078371)
- [Base64 笔记](http://www.ruanyifeng.com/blog/2008/06/base64.html)
