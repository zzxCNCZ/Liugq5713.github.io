# 引用类型 Object

## 创建对象

> Use computed property names when creating objects with dynamic property names.Why? They allow you to define all the properties of an object in one place.

```js
// 充分利用好对象的计算属性
const test = '123'
const obj = {
  test,
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true
}
```

## 对象属性的键名

对象属性的键名必须是字符串

```js
var map = Object.create(null)
map[5] = 'foo'
console.log(map['5'])
;('foo')
```

## 共享对象结构

> 最近一直遇到对象里面还有数组的 data，总是会触发莫名其妙的 bug，比如多个输入框同步修改（就问你怕不怕）

```js
// 缺点：对象嵌套，仍然有引用的问题（不是深拷贝，最多算深拷贝一层吧）
const new_obj = Object.assign({}, obj)
```

可以使用 ES6 的扩展运算符，解决这个问题

```js
const person = {
  name: 'Lucy',
  friends: {
    name: 'Jack',
    age: 'Allen'
  }
}
// 其实就是personWithOtherFriends 对象浅拷贝了person，然后又将friends指针指向了新的引用
const personWithOtherFriends = {
  ...person,
  friends: {
    name: 'Eleen'
  }
}
```

## 判断空对象

- Object.keys({}).length===0
- JSON.stringfy({})==='{}'
- 通过 for in 遍历一个对象的属性，如果没有，那么就说明它是一个空对象

## 判断对象的类型

> 原始类型的数据大多可以直接使用 typeof，除了 typeof null 返回"object"之外，其他的都返回对应类型名的小写字母。
> 注意 instanceof 是能匹配类型的父类的，所以 arr instanceof Array 和 arr instanceof Object 都是 true，因为 Object 是 Array 的父类。

### instanceof

```js
const arr = []
const obj = {}

console.log(arr instanceof Array) // true
console.log(arr instanceof Object) // true
console.log(obj instanceof Array) // false
console.log(obj instanceof Object) // true
```

注意 instanceof 是能匹配类型的父类的，所以 arr instanceof Array 和 arr instanceof Object 都是 true，因为 Object 是 Array 的父类。满足 class extends 和原型链规则的父子类关系的对象都能被匹配,但是如果我们修改 obj 的原型链能改变 instanceof 的结果：

```js
function Other() {}
obj.__proto__ = new Other()

console.log(obj instanceof Other) // true
console.log(obj instanceof Foo) // false
```

#### instanceof 的局限性

如果在 realm 的情况下，比如页面上包含 iframe，将当前页面上的对象传给 iframe 执行，使用 instanceof 判断就会出问题，我们看一个简单的例子：

```js
var arr = [1, 2, 3]

console.log(arr instanceof Array) // true

var sandbox = document.createElement('iframe')
document.body.append(sandbox)

sandbox.contentDocument.open()
sandbox.contentDocument.write(`<script>
console.log(parent.arr);  // 1,2,3
console.log(parent.arr instanceof Array); // false
</script>`)
sandbox.contentDocument.close()
```

上面的例子里，在当前 window 中，arr instanceof Array 是 true，但是到了 sandbox 里面，parent.arr instanceof Array 变成 false。这是因为，两个 Array 类型在不同的 realm 中，实际上要使用：parent.arr instanceof parent.Array，这样返回的就是 true。

### constructor

有时候我们不希望匹配父类型，只希望匹配当前类型，那么我们可以用 constructor 来判断

```js
console.log(arr.constructor === Array) // true
console.log(arr.constructor === Object) // false
```

::: tip constructor 属性
JavaScript 对象还有一个 constructor 属性（除了某些内置的对象，如 window，document 之外都有），它指向对象的构造器（constructor），而对象的构造器名字与对象的类型名是一样的，而构造器的名字又可以从 constructor 属性的字符串中被解析出来。下面的代码就是使用了这种机制，来获得一个现有对象的类名称，返回值为已定义的类名或 undefined
:::

对象的 constructor 会返回它的类型，而类型在定义的时候，会创建一个 name 只读属性，值为类型的名字

```js
class Foo {}
console.log(Foo.name) // Foo

const foo = new Foo()
console.log(foo.constructor === Foo) // true
console.log(foo.constructor.name === 'Foo') // true
```

---

::: danger constructor.name 有非常大的限制，

如果使用定义匿名的 class，那么 name 就变成空的,另外如果使用 es-modules，我们 import 的类名不一定是包里面的类名。

再者，如果我们使用脚本压缩工具，那么文件中的类名会被替换为短名，那样的话，name 属性的名字也随着改变了。

所以依赖 constructor.name 来判断不是一个好的方案。
:::

```js
const MyClass = (function() {
  return class {}
})()

console.log(MyClass.name) // ''
```

### stringTag

如果你看过一些库的早期实现，你会发现使用 Object.prototype.toString 来做类型判断的方式：

```js
var ostring = Object.prototype.toString
function isArray(it) {
  return ostring.call(it) === '[object Array]'
}
```

::: danger 注意不要使用 stringTag 判断 Number、Boolean 等 primitive 类型
因为它没法区分装箱的类型
:::

```js
const ostring = Object.prototype.toString
console.log(ostring.call(1.0)) // [object Number]
console.log(ostring.call(new Number(1.0))) // [object Number]
```

在 ES2015 之前，我们不能自定义类型的 stringTag，我们自己定义的任何类型实例的 stringTag 都返回[object Object]。

但是现在，我们可以通过实现 Symbol.toStringTag 的 getter 来自定义类型的 stringTag：

```js
class Foo {
  get [Symbol.toStringTag]() {
    return 'Foo'
  }
}

const foo = new Foo()
console.log(Object.prototype.toString.call(f)) // [object Foo]
```

## [Cannot convert undefined or null to object](https://stackoverflow.com/questions/29721205/how-to-resolve-typeerror-cannot-convert-undefined-or-null-to-object/29721434)

::: tip

This error is caused when you call a function that expects an Object as its argument, but pass undefined or null instead, like for example

:::

```js
Object.keys(null)
Object.assign(window.UndefinedVariable, {})
// As that is usually by mistake, the solution is to check your code
// and fix the null/undefined condition
// so that the function either gets a proper Object,
// or does not get called at all.

Object.keys({ key: 'value' })
if (window.UndefinedVariable) {
  Object.assign(window.UndefinedVariable, {})
}
```

### js 函数传递参数的方式 按值传递

```js
function setName(obj) {
  obj.name = 'Nicholas'
  obj = new Object()
  obj.name = 'Greg'
}
var person = new Object()
setName(person)
alert(person.name) //"Nicholas"
```

如果 person 是按引用传递的，那么 person 就会自动被修改为指向其 name 属性值为"Greg"的新对象。但是，当接下来再访问 person.name 时，显示的值仍然是"Nicholas"。

这说明即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，当在函数内部重写 obj 时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。

## Object.defineProtery

::: tip 如何让一个对象的属性不被改变？

通过 Object.defineProperty 定义对象的属性

:::

```js
let constance = {
  foo: '我是不会改变的',
  boo: 'test'
}
Object.defineProperty(constance, 'foo', {
  get() {
    return '我是不会改变的'
  }
})
constance.foo = 'sss'

Object.defineProperty(constance, 'boo', {
  writable: false
})

constance.boo = 'sss'

console.log('foo', constance.foo, constance.boo)
```

## 参考

- [如何准确判断一个对象的类型?](https://github.com/akira-cn/FE_You_dont_know/issues/11)
- [MDN Symbol.toStringTag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
