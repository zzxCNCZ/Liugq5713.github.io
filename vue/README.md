# vueee
## 强制更新

`this.$forceUpdate();`

addons.getChannel().emit(Events.FORCE_RE_RENDER);

## vue-cli 已经默认设置了 alias

[源代码位置](https://github.com/vuejs/vue-cli/blob/8f0673a93f87c1724d26dd405d3b1278ab179ae3/packages/%40vue/cli-service/lib/config/base.js)

我们用 cli 的方式，就可以直接使用@别名

`import Header from "@/components/Header"`

## 组件

写组件的两个目的：

一是为了复用，复用的话写组件要考虑多一些，各种情况都要考虑
二是为了拆分代码逻辑，使得一个文件不要太大，这种好用就行

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

### 为什么 vue 打包后的项目不能直接打开？

是因为 run build 出来的静态文件的路径是绝对路径，方便你放到服务器根目录下，你如果直接打开会访问路径如`file:///C:/css/app.e2713bb0.css`这样的资源，这当然访问不到了。如果改成相对路径也是可以直接跑的。

笔者也是通过 vue-cli 创建了一个项目实验了一下，的确是可以的。方法很简单：

在项目的根目录新建`vue.config.js`修改为如下配置：

```js
module.exports = {
  publicPath: "./"
};
```

关于路径，我们把项目把项目托管在 Github Page 上的时候，就要去设置一下路径。因为你实际访问的路径是 /xxx/你的仓库名/，而打包的话，默认只会是根路径。

- vue 通过在`vue.config.js`[设置 publicPath 为你的仓库名](https://cli.vuejs.org/guide/deployment.html#github-pages)
- react 可以在 package.json 设置[homepage 属性](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

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
