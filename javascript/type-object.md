# 引用类型 Object

[[toc]]

## 创建对象

> Use computed property names when creating objects with dynamic property names.Why? They allow you to define all the properties of an object in one place.

```js
// 充分利用好对象的计算属性
const test = "123";
const obj = {
  test,
  id: 5,
  name: "San Francisco",
  [getKey("enabled")]: true
};
```

## 对象属性的键名

对象属性的键名必须是字符串

```js
var map = Object.create(null);
map[5] = "foo";
console.log(map["5"]);
("foo");
```

## 共享对象结构

> 最近一直遇到对象里面还有数组的 data，总是会触发莫名其妙的 bug，比如多个输入框同步修改（就问你怕不怕）

```js
// 缺点：对象嵌套，仍然有引用的问题（不是深拷贝，最多算深拷贝一层吧）
const new_obj = Object.assign({}, obj);
```

可以使用 ES6 的扩展运算符，解决这个问题

```js
const person = {
  name: "Lucy",
  friends: {
    name: "Jack",
    age: "Allen"
  }
};
// 其实就是personWithOtherFriends 对象浅拷贝了person，然后又将friends指针指向了新的引用
const personWithOtherFriends = {
  ...person,
  friends: {
    name: "Eleen"
  }
};
```

## 判断空对象

- Object.keys({}).length===0
- JSON.stringfy({})==='{}'
- 通过 for in 遍历一个对象的属性，如果没有，那么就说明它是一个空对象
