# 基础

项目越来越大，必须遵循一些代码的规范，像 vue 就有官方推荐的一些做法，[vue 官方指南](https://vuejs.org/v2/style-guide/)

## [v-for 比 v-if ](https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)

v-for 比 v-if 有更高的优先级

## watch

当*数据变化*的时候，你自定义的侦听器才会被触发，当然你可以加上`immediate:true`，让他立即侦听

## computed

computed 计算出来的值，他只会响应 data 里面的数据。即在 data 里面的数据变化后，他才会重新计算

## props 生命周期

一个组件的生命周期，在 created 的时候，data 被初始化，接下来数据更新，发生在生命周期 mounted 里面，也就是说 data 里面的数据不会随着 props 更新而更新

如果和 react 类比，那么 data 函数就相当于 react 里面的 construct，templete 就是相当于 render 方法里面的 jsx

其实，一些[解决方案](https://github.com/ChenPt/dailyNote/issues/28)无非就是通过给 data 重新赋值，比如说使用 watch，computed 等属性检测 props 变化，并且重新给 data 赋值

## v-model

> 要记住这是语法糖，看一下下面的代码示例，就能懂这句话了。v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值

```js
<input v-model="searchText">

<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>

// 当把v-model用在组件上

<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>

为了让它正常工作，这个组件内的 <input> 必须：将其 value 特性绑定到一个名叫 value 的 prop 上在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
```

## [自定义 v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

> 为啥要自定义组件的 v-model 呢，因为不符合要求呗。你的输入值不可能总是 value ，你的输入事件不可能总是 input

## sync（双向绑定）

> vue 真的是方便了开发者很多，其实需求再多，也就那么几种，站在开发者的角度考虑，可以很大的提升开发效率。虽然这样取巧的方式可能会导致有点不太灵活

emitting events in the pattern of `update:my-prop-name`

## [attrs](https://vuejs.org/v2/api/#vm-attrs)

this essentially contains all parent-scope bindings (except for class and style), and can be passed down to an inner component via `v-bind="$attrs"` - useful when creating higher-order components.

## [ref](https://vuejs.org/v2/api/#ref)

```js
<!-- vm.$refs.p will be the DOM node -->
<p ref="p">hello</p>

<!-- vm.$refs.child will be the child component instance -->
// 拿到了实例，不就可以调用实例的方法了，为所欲为，为所欲为，哦哈哈哈哈哈
<child-component ref="child"></child-component>
```

\$refs are only populated after the component has been rendered, and they are not reactive.

## [slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)

> 写大型的项目，使用组件是不可避免的。vue slot 属性特别好用
