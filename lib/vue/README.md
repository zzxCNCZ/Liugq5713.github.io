# 收集

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
      return this._data.$$state;
    },
    () => {
      if (process.env.NODE_ENV !== "production") {
        assert(
          store._committing,
          `do not mutate vuex store state outside mutation handlers.`
        );
      }
    },
    { deep: true, sync: true }
  );
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
      return this._data.$$state;
    },
    () => {
      if (process.env.NODE_ENV !== "production") {
        assert(
          store._committing,
          `do not mutate vuex store state outside mutation handlers.`
        );
      }
    },
    { deep: true, sync: true }
  );
}
```
