# Vue computed属性 
vue的computed属性默认是只读的，你可以提供一个 `setter`。

这个知识点有什么作用呢？

我发现它可以优化我写组件的逻辑。适用于父组件处理的值和子组件处理的值是同一个的情况。

```html
<template>
  <el-select v-model="email">
    <el-option v-for="item in adminUserOptions" :key="item.email" :label="item.email" :value="item.email"/>
  </el-select>
</template>
```

```js
export default {
  props: {
    value: {
    }
  },
  computed: {
    email: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  }
}
```