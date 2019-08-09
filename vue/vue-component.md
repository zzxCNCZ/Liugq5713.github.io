# Vue 组件

## 动态组件

通过 Vue 的 `<component>` 元素加一个特殊的 is 特性`<component v-bind:is="currentTabComponent"></component>`

`<keep-alive>`元素将其动态组件包裹起来,将组件第一次被创建的时候缓存下来

```js
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

## [异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

```js
Vue.component('async-webpack-example', function(resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
```

### [单文件组件使用异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)

使用异步组件很简单，和路由懒加载是一样的。

## 递归组件

组件可以通过 name 选项在自己的模板中调用自身

会无限循环，所以确保递归调用的条件是条件性的

### 防止组件之间的循环引用（A 依赖 B，B 依赖 A）

给模块系统一个点，在那里 **A 反正是需要 B 的，但是我们不需要先解析 B**

即在生命周期钩子 beforeCreate 时，去注册它

```js
beforeCreate: function () {
  this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue').default
}
```

或者在本地注册组件的时候，webpack 异步 import:

```js
components: {
  TreeFolderContents: () => import('./tree-folder-contents.vue')
}
```

## transtion 组件

其动态效果只是局限在 Enter/Leave & List Transitions。（但是好像也没有其他很多的需求）

## 组件样式

## 父组件修改子组件的样式

父组件改变子组件样式 深度选择器
当你子组件使用了 scoped 但在父组件又想修改子组件的样式可以 通过 >>> 来实现：

```css
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

将会编译成

```css
.a[data-v-f3f3eg9] .b { /_ ... _/ }
```

## 子组件的根元素

使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

## [Mixin](https://vuejs.org/v2/guide/mixins.html#Option-Merging)

> 在 mixin 中最好写一个 这个 mixin 用于哪里，不然找起来太麻烦了

vue 里面的 Mixin 主要是 Option Merge

Mixin hooks will be called before the component's own hooks.

The component’s options will take priority when there are conflicting keys in these objects

## [Event Bus](https://medium.com/easyread/vue-as-event-bus-life-is-happier-7a04fe5231e1)

其实就是新建一个 vue 实例，然后通过这个实例 emit 和 on 事件

## [vue 的 @hook:mounted 写法](https://vuedose.tips/tips/10/)

在一些情景下，你可能需要让父组件了解到你的组件什么时候被创建，挂载，更新，特别是当你构建组件库的时候

举个例子，如果你想在第三方库，`v-runtime-template`渲染的时候做点什么，你可以这样监听它的 `updated`钩子,[点我验证](https://codesandbox.io/s/18r05pkmn7)

```js
<v-runtime-template @hook:updated="doSomething" :template="template" />
```
