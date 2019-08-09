# 引用类型 Object

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

## 如何判断 js 对象的类型

::: tip constructor 属性
JavaScript 对象还有一个 constructor 属性（除了某些内置的对象，如 window，document 之外都有），它指向对象的构造器（constructor），而对象的构造器名字与对象的类型名是一样的，而构造器的名字又可以从 constructor 属性的字符串中被解析出来。下面的代码就是使用了这种机制，来获得一个现有对象的类名称，返回值为已定义的类名或 undefined

```js
/* Returns the class name of the argument or undefined if  
    it's not a valid JavaScript object.  
*/

function getObjectClass(obj) {
  if (obj && obj.constructor && obj.constructor.toString) {
    var arr = obj.constructor.toString().match(/function\s*(\w+)/);

    if (arr && arr.length == 2) {
      return arr[1];
    }
  }

  return undefined;
}
```

:::

## [Cannot convert undefined or null to object](https://stackoverflow.com/questions/29721205/how-to-resolve-typeerror-cannot-convert-undefined-or-null-to-object/29721434)

::: tip This error is caused when you call a function that expects an Object as its argument, but pass undefined or null instead, like for example

```js
Object.keys(null);
Object.assign(window.UndefinedVariable, {});
// As that is usually by mistake, the solution is to check your code
// and fix the null/undefined condition so that the function either gets a proper Object,
// or does not get called at all.

Object.keys({ key: "value" });
if (window.UndefinedVariable) {
  Object.assign(window.UndefinedVariable, {});
}
```

:::
