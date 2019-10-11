# 响应式

## vue 如何做到响应式

### 如何追踪变化

当你把一个普通的 JavaScript 对象作为 data 选项传入 Vue 实例，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这些 getter/setter 对用户来说是不可见的，但是在内部它们让**Vue 能够追踪依赖**，在属性被访问和修改时通知变更。

每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

### 异步更新队列

可能你还没有注意到，Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替

## Object.defineProperty 的局限

::: warning 为什么我的数据修改了，页面不更新

不知道这是不是 vue 初学者问的最多的问题，笔者刚学的时候碰到了好几次这样的情况,当出现页面不更新的情况，尽量先找找自己代码上的原因，别粗暴的强制更新页面

:::

由于 JavaScript 本身的限制， vue 检测不到数组和对象的一些变化

- [数组更新](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)
- 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
- 当你修改数组的长度时，例如：vm.items.length = newLength

```js
// 这些方法都是可以检测到的
push(), pop(), shift(), unshift(), splice(), sort(), reverse()
```

- [对象更新](https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E6%9B%B4%E6%94%B9%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

Vue 不能检测对象属性的添加或删除.你应该用两个对象的属性创建一个新的对象

## 让数据变得响应式

### Vue.set( target, propertyName/index, value )

> 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')

### Vue.observable(object)

让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。

返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景

## 强制更新

- The horrible way: reloading the entire page
- The terrible way: using the v-if hack
- The better way: using Vue’s built-in `forceUpdate` method
- The best way: key-changing on your component

The [key](https://vuejs.org/v2/api/#key) special attribute is primarily used as a hint for Vue’s virtual DOM algorithm to identify VNodes when diffing the new list of nodes against the old list.

## 组件刷新而不是重新刷新页面

在不刷新页面的情况下，更新页面。

```html
// 先注册一个名为 `redirect` 的路由
<script>
  export default {
    beforeCreate() {
      const { params, query } = this.$route
      const { path } = params
      this.$router.replace({ path: "/" + path, query })
    },
    render: function(h) {
      return h() // avoid warning message
    }
  }
</script>
```

```js
// 手动重定向页面到 '/redirect' 页面
const { fullPath } = this.$route
this.$router.replace({
  path: "/redirect" + fullPath
})
```

当遇到你需要刷新页面的情况，你就手动重定向页面到 redirect 页面，它会将页面重新 redirect 重定向回来，由于页面的 key 发生了变化，从而间接实现了刷新页面组件的效果。

## 参考

- [Vue-observable](https://cn.vuejs.org/v2/api/#Vue-observable)
- [深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
