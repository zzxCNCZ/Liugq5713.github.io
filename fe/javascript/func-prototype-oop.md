# 函数 构造和继承

## js new 操作

- 创建一个空的简单 JavaScript 对象（即{}）；
- 链接该对象（即设置该对象的构造函数）到另一个对象 ；
- 将步骤 1 新创建的对象作为 this 的上下文 ；
- 如果**该函数没有返回对象**，则返回 this。

## 原型链

![原型链](./imgs/prototype5.png)

如果试图查找引用对象(实例 instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性.如果让原型对象指向另一个类型的实例，这样的话就会去搜索这个原型的属性，找不到之后就会去找这个实例的原型，这种搜索的轨迹形似一条长链, 又因 prototype 在这个游戏规则中充当链接的作用,于是我们把这种实例与原型的链条称作 原型链

每个函数都有一个 prototype 属性，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型

每个原型都有一个 constructor 属性指向关联的构造函数。

每个 JavaScript 对象(除了 null )都具有的一个属性，叫`__proto__`，这个属性会指向该对象的原型

## 创建

通过 Object 或者对象字面量可以用来创建单个对象，但是要创建很多个对象就不适合

## 继承

### 类式继承

::: danger

1. 父类过早地被创建，导致无法接受子类的动态参数；
2. 仍然在原型上创建了属性，此时，多个子类的实例将共享同一个父类的属性，完蛋, 会互相影响!

:::

```js
function GithubUser(username) {
  this.username = "Unknown"
}

function JuejinUser(username, password) {}

JuejinUser.prototype = new GithubUser()
const juejinUser1 = new JuejinUser("ulivz", "xxx", 3)
const juejinUser2 = new JuejinUser("egoist", "xxx", 0)

//  这就是把属性定义在原型链上的致命缺点，你可以直接访问，但修改就是一件难事了！
console.log(juejinUser1.username) // 'Unknown'
juejinUser1.__proto__.username = "U"
console.log(juejinUser1.username) // 'U'

// 卧槽，无情地影响了另一个实例!!!
console.log(juejinUser2.username) // 'U'
```

### 借用构造函数(constructor stealing)

> 可以在子类型构造函数中向超类型构造函数传递参数

::: danger
构造函数式继承并没有继承父类原型上的方法
:::

```js
function Father() {
  this.colors = ["red", "blue", "green"]
}
function Son() {
  Father.call(this) //继承了Father,且向父类型传递参数
}
var instance1 = new Son()
```

### 组合继承

> 将原型链和借用构造函数的技术组合到一块,从而发挥两者之长的一种继承模式.

```js
function Father(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}
Father.prototype.sayName = function() {
  alert(this.name)
}
function Son(name, age) {
  Father.call(this, name) //继承实例属性，第一次调用Father()
  this.age = age
}
Son.prototype = new Father() //继承父类方法,第二次调用Father()
```

### 原型式继承

### 寄生式继承

### 寄生组合式继承

### 原型模式

将信息添加到原型对象中，可以共享属性和方法

组合使用构造函数模式和原型模式

构造函数模式定义实例属性

原型模式定义共享的属性与方法

### 动态原型的模式

将原型也放在了构造函数里面

### 创建的函数与构造函数之间没有什么关系

- 寄生构造函数模式

创建一个函数，这个函数的作用仅仅是封装创建对象的代码

- 稳妥构造函数模式

### 面向对象的程序设计

## 参考

- [JS 原型链与继承别再被问倒了](https://juejin.im/post/58f94c9bb123db411953691b)
- [JavaScript 深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)
- [深入 JavaScript 继承原理](https://juejin.im/post/5a96d78ef265da4e9311b4d8#heading-0)
