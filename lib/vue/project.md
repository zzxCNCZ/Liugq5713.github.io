# 项目

## 组件命名

> 这里推荐遵循 [vue 官方指南](https://cn.vuejs.org/v2/style-guide/)，值得一看

我们构建组件的时候通常会将其入口命名为 index.vue ，引入的时候，直接引入该组件的文件夹即可。

但是这样做会有一个问题，当你编辑多个组件的时候，所有的组件入口都叫做`index.vue`，容易糊涂

vscode 显然意识到了这个问题，所以当文件名相同的文件被打开时，它会在文件名旁边显示文件夹名

如何解决呢，我们可以把 index.js 当作一个单纯的入口，不承担任何逻辑。仅仅负责引入`component-name-container`以及`export default component-name-container`

```text
my-app
└── src
        └── components
                └── component-name
                    ├── component-name.css
                    ├── component-name-container.vue
                    └── index.js
```

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
