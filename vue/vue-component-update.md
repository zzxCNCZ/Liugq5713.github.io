# 组件 更新

## 为什么我的数据修改了，页面不更新

> 不知道这是不是 vue 初学者问的最多的问题，笔者刚学的时候碰到了好几次这样的情况

当出现页面不更新的情况，尽量先找找自己代码上的原因，别粗暴的强制更新页面

vue 的数据绑定是使用 Object.defineProterty，由于 JavaScript 本身的限制， vue 检测不到数组和对象的一些变化

- [数组更新](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)

- Vue 不能检测到对象属性的添加或删除
- 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
- 当你修改数组的长度时，例如：vm.items.length = newLength

Vue.set( target, key, value ),确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性

```js
push(), pop(), shift(), unshift(), splice(), sort(), reverse();
```

- [对象更新](https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E6%9B%B4%E6%94%B9%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

Vue 不能检测对象属性的添加或删除.你应该用两个对象的属性创建一个新的对象

## 响应式

- Computed props
- Watched props (sometimes)
- Not using a :key attribute with v-for

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
      const { params, query } = this.$route;
      const { path } = params;
      this.$router.replace({ path: "/" + path, query });
    },
    render: function(h) {
      return h(); // avoid warning message
    }
  };
</script>
```

```js
// 手动重定向页面到 '/redirect' 页面
const { fullPath } = this.$route;
this.$router.replace({
  path: "/redirect" + fullPath
});
```

当遇到你需要刷新页面的情况，你就手动重定向页面到 redirect 页面，它会将页面重新 redirect 重定向回来，由于页面的 key 发生了变化，从而间接实现了刷新页面组件的效果。
