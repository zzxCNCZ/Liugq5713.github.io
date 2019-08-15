# 源码 v-for

最近在阅读 element 源码的，但是 element 内部有很多`this._l`方法，`element`源码里面也找不到，查了一下，原来是 vue 的内部渲染列表的方法

[源码位置](https://github.com/vuejs/vue/blob/6fe07ebf5ab3fea1860c59fe7cdd2ec1b760f9b0/src/core/instance/render-helpers/render-list.js)，代码不长，可以一读

## 三个工具函数

### isDef

isDef 是 isDefined 的缩写，反过来就是 isUndefined，反正就是看它是不是 undefined

```js
function isDef(v) {
  return v !== undefined && v !== null;
}
```

### isObject

isObject，主要区分原始值和对象

```js
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
```

### hasSymbol

用来判断当前宿主环境是否支持原生 Symbol 和 Reflect.ownKeys。首先判断 Symbol 和 Reflect 是否存在，并使用 isNative 函数保证 Symbol 与 Reflect.ownKeys 全部是原生定义

```js
var hasSymbol =
  typeof Symbol !== "undefined" &&
  isNative(Symbol) &&
  typeof Reflect !== "undefined" &&
  isNative(Reflect.ownKeys);

/* 判断是否是内置方法 */
function isNative(Ctor) {
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}
```

## renderList

在`src/core/instance/render-helpers/index.js` 的 installRenderHelpers 方法中，renderList 方法复制给了`target._l` ，即`this._l = renderList`

代码逻辑很清晰，分四种情况（你可以把 val 看作被 v-for 的那个值）

### val 为 Array，或者 String

```js
ret = new Array(val.length);
for (i = 0, l = val.length; i < l; i++) {
  ret[i] = render(val[i], i);
}
```

### val 为 number

竟然还支持 number ！！

```js
ret = new Array(val);
for (i = 0; i < val; i++) {
  ret[i] = render(i + 1, i);
}
```

### val 为 Object

- 支持 Symbol,且含有迭代器的情况

为啥要去判断一下有迭代器的情况，感觉不是多此一举么？理由在官方文档上写着：在遍历对象时，是按  Object.keys()  的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。所以为了一致性，你可以自定义一个迭代器。

Symbol.iterator  为每一个对象定义了默认的迭代器，内置类型中，Array，String，Map，Set，TypedArray 而 Object 没有

所以为了能够使用迭代器，我们可以自己定义一个迭代器，示例代码：

```js
const obj = {
  age: 1,
  name: "liu",
  [Symbol.iterator]: function*() {
    let properties = Object.keys(this);
    for (let i of properties) {
      yield [i, this[i]];
    }
  }
};

const res = obj[Symbol.iterator]();
console.log("res", res.next());
```

所以，如果你有自定义列表顺序的需求的话，可以自定义一个迭代器，定义遍历的值的顺序

```js
ret = [];
const iterator: Iterator<any> = val[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  ret.push(render(result.value, ret.length));
  result = iterator.next();
}
```

- 不支持 Symbol 的情况

这种情况比较简单，通过 Object.key 生成对象的属性数组，然后遍历一下

```js
keys = Object.keys(val);
ret = new Array(keys.length);
for (i = 0, l = keys.length; i < l; i++) {
  key = keys[i];
  ret[i] = render(val[key], key, i);
}
```

### val 没有被定义的情况

返回一个空数组

```js
if (!isDef(ret)) {
  ret = [];
}
```

PS: 虽然我觉得这种异常情况应该置于最前，属于个人编码习惯，问题不大

## 总结

- v-for 可以对数字，字符串进行遍历
- 可以自定义对象的迭代器，实现自定义列表顺序，解决了按  Object.keys()  的结果遍历，不同 js 引擎下渲染顺序不一致的情况
- TypeArray 是有迭代器的，即 v-for 可以渲染类数组
- v-for 里面做了异常处理，所以当你传入了不属于 Array，String，Number，Object 的值时，v-for 渲染一个空数组
