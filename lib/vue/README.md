# 收集

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
  set: noop,
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
    b: 2,
  },
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

# 收集

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
  set: noop,
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
    b: 2,
  },
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

## 项目组织

终于能够把目录组织说清楚了，一般三种`Rails-style`,`Domain-style`,`Ducks-style`，一般是混用，但是边界要清楚。个人是全局的使用`Rails-style`，业务相关或者局部使用到的使用`Domain-style`

### Rails-style

按照文件的类型划分为不同的目录，例如 components、constants、 typings、views. 这个来源于 Ruby-on-Rails 框架，它按照 MVC 架构来划分不同的目录类型，典型的目录结构如下:

```shell
app
  models # 模型
  views # 视图
  controllers # 控制器
  helpers # 帮助程序
  assets  # 静态资源
config     # 配置
  application.rb
  database.yml
  routes.rb      # 路由控制
  locales        # 国际化配置
  environments/
db        # 数据库相关

```

### Domain-style

按照一个功能特性或业务创建单独的目录，这个目录就近包含多种类型的文件或目录. 比如一个典型的 Redux 项目，所有项目的文件就近放置在同一个目录下:

```shell
Users/
Home/
  components/
  actions.js
  actionTypes.js
  constants.js
  index.js
  model.js
  reducer.js
  selectors.js
  style.css
index.js
rootReducer.js
```

### Ducks-style

优点类似于 Domain-style，不过更彻底, 它通常将相关联的元素定义在一个文件下。Vue 的单文件组件就是一个典型的例子，除此之外 Vuex 也是使用这种风格:

## 参考

- [项目目录组织](https://juejin.im/post/5d3a7134f265da1b5d57f1ed#heading-17)
