# 收集

## 单页面应用

单页应用（英语：single-page application，缩写 SPA）是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法避免了页面之间切换打断用户体验，使应用程序更像一个桌面应用程序

## 按需加载

- 动态创建标签
- [动态 import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)，以这种方式调用将返回一个 promise

## vue 里面`data`数据为啥可以直接使用 `this` 访问

现在大家使用 vue 可能都习惯这样访问 data 里面的数据了，this.xx，但是有没有想过为啥，不应该是`this.data.xxx`

起初，刚学 vux 的时候，虽然我有扎实的 JavaScript 基础，我始终搞不懂为啥通过 this 就可以访问到 data 里面的对象。今天看源码的时候，就了解了原来 vue 是做了一点点优化。通过 proxy 函数

```js
// src/shared/util.js
export function noop(a?: any, b?: any, c?: any) {}

// src/core/instance/state.js
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function proxy(target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

proxy 方法的实现很简单，通过 Object.defineProperty 把 target[sourceKey][key] 的读写变成了对 target[key] 的读写。拿一段代码试验一下，

```js
const obj = {
  data: {
    a: 1,
    b: 2
  }
}
for (key in obj.data) {
  proxy(obj, 'data', key)
}
// 输出 proxy a 1
console.log('proxy a', obj.a)
```

果然可以，vue 厉害啊，虽然这种做法对于初学者可能造成了一定的困扰，但是的确写代码的时候方便了很多。

## vue-cli 已经默认设置了 alias

[源代码位置](https://github.com/vuejs/vue-cli/blob/8f0673a93f87c1724d26dd405d3b1278ab179ae3/packages/%40vue/cli-service/lib/config/base.js)

我们用 cli 的方式，就可以直接使用@别名

`import Header from "@/components/Header"`

## 组件

## mutation 如何做到对你的操作进行检测

```js
function enableStrictMode(store) {
  store._vm.$watch(
    function() {
      return this._data.$$state
    },
    () => {
      if (process.env.NODE_ENV !== 'production') {
        assert(store._committing, `do not mutate vuex store state outside mutation handlers.`)
      }
    },
    { deep: true, sync: true }
  )
}
```

## vuex

```js
  _withCommit (fn) {
    const committing = this._committing
    this._committing = true
    fn()
    this._committing = committing
  }
```

总所周知，vuex 严格模式下是不能直接修改 vuex 里面的 state 的，只能够通过 mutation 或者 commit 修改，那我就好奇了，vuex 是如何监听对象的修改的呢?

### enableStrictMode

```js
function enableStrictMode(store) {
  store._vm.$watch(
    function() {
      return this._data.$$state
    },
    () => {
      if (process.env.NODE_ENV !== 'production') {
        assert(store._committing, `do not mutate vuex store state outside mutation handlers.`)
      }
    },
    { deep: true, sync: true }
  )
}
```

## vue

通过 prop 传递一个值给组件，组件把这个值在传递给子组件

且该值都是 sync

那么处理的时候要小心了，要在组件中，给这个 props 的值换成 计算属性

## vuex

> [Vuex、Flux、Redux、Redux-saga、Dva、MobX](https://zhuanlan.zhihu.com/p/53599723)

## vue 源码

- 检测是否是 promise

```js
export function isDef(v: any): boolean %checks {
  return v !== undefined && v !== null
}

export function isPromise(val: any): boolean {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function'
}
```

- 检测一个对象自身是否含有某个属性

```js
/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn(obj: Object | Array<*>, key: string): boolean {
  return hasOwnProperty.call(obj, key)
}
```

https://juejin.im/post/5d267dcdf265da1b957081a3
