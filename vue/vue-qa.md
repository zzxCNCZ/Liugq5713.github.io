# Vue常见问题

### 为什么 vue 打包后的项目不能直接打开？

是因为 run build 出来的静态文件的路径是绝对路径，方便你放到服务器根目录下，你如果直接打开会访问路径如`file:///C:/css/app.e2713bb0.css`这样的资源，这当然访问不到了。如果改成相对路径也是可以直接跑的。

笔者也是通过 vue-cli 创建了一个项目实验了一下，的确是可以的。方法很简单：

在项目的根目录新建`vue.config.js`修改为如下配置：

```js
module.exports = {
  publicPath: './'
}
```

关于路径，我们把项目把项目托管在 Github Page 上的时候，就要去设置一下路径。因为你实际访问的路径是 /xxx/你的仓库名/，而打包的话，默认只会是根路径。

- vue 通过在`vue.config.js`[设置 publicPath 为你的仓库名](https://cli.vuejs.org/guide/deployment.html#github-pages)
- react 可以在 package.json 设置[homepage 属性](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

## Action vs Mutation

ActionAction 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

## 路由里面 query 和 params 有什么区别

"query vs params"
注意:params 传参，push 里面只能是 name:'xxxx',不能是 path:'/xxx',因为 params 只能用 name 来引入路由，如果这里写成了 path，接收参数页面会是 undefined！！！

// 可以在地址栏里面看到

```js
this.$router.push({ path: '/xxx', query: { id } })
this.$router.push({ name: 'xxx', params: { id } })
```

## 路由如何做权限判断

"钩子函数 beforeEach()对路由进行判断"

## 如何处理组件中使用了路由参数

"在组件中使用 \$route 会使之与其对应路由形成高度耦合,通过 props 解耦"

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

## 输入文字或者选择选项的时候页面重新渲染

"key 的变化会导致组件强制更新"

v-for 其 key 绑定了一个 title,但是这个 title 值和一个输入框绑定，所以在你一输入东西，页面就重新渲染了。

v-for，需要绑定 key，但是有的时候 item 没有合适的东西做键，这种情况下比较好的做法是使用 时间戳，或者 uuid 做键。

key 的选用，需要满足两个条件:

- Unique: A key cannot be identical to that of a sibling component
- Static: A key should not ever change between renders

## 如何给 vue 添加全局方法

"不推荐，全局的东西尽量少用，除非每个地方都用到了"

给 vue 的原型上添加方法

Vue.prototype.\$axios = Axios;

## vue 父组件如何从子组件拿数据

"You can use the special attribute ref"

```js
<child-comp ref='child' />
// vm.$refs.child.YOUR_DATA
```

## Vue Router open a new link in a new tab

"Vue Router 3.0.1 以上版本"

```html
<router-link :to="{ name: 'fooRoute'}" target="_blank"> Link Text </router-link>
```

## 动态路由匹配

"组件实例会被复用,组件的生命周期钩子不会再被调用"

提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path
