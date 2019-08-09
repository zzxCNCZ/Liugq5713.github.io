# 变量声明

---

title: 基本数据类型
date: 2019-03-13T10:26:20.198Z

categories: ["fe"]
tags: ["javascript"]
tags_weight: 1

---

## String

> string 不可以修改哦

### 获取单个字符

- charAt(),'string'.charAt(0)
- 将其看作为类数组对象,'string'[0]

### 获取字符的 Unicode 值

charCodeAt()

### String.replace

str.replace( ) ，括号称为匹配括号，可以记住匹配项。直接 initialTime.replace(timeSplitReg, "$1-$2-$3 $4:$5:$6")就 OK 了

### 截取字符串

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

## indexOf 和 include 方法

> 这两个方法数组也有，虽然我以前只是数组这样用

```js
//includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
str.includes(searchString[, position])
```

## 操作符

### 扩展运算符

> 扩展运算符是真的好用啊，我写业务的时候遇到一个问题，就是导出表单的时候，要数组里面增加两个，本来是可以用 push，但是要调用两次，但是不是很优雅，扩展运算符妥妥的

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

## 原型链

创建原型链对的最好的方式是：使用一个对象的实例作为另一个对象的原型

## js 的位运算

int 整型(32 位)的范围是-32768 到 32767
