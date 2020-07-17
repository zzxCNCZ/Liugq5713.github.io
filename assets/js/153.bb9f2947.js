(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{509:function(e,s,t){"use strict";t.r(s);var a=t(42),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[e._v("#")]),e._v(" 项目")]),e._v(" "),t("h2",{attrs:{id:"组件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件命名"}},[e._v("#")]),e._v(" 组件命名")]),e._v(" "),t("blockquote",[t("p",[e._v("这里推荐遵循 "),t("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 官方指南"),t("OutboundLink")],1),e._v("，值得一看")])]),e._v(" "),t("p",[e._v("我们构建组件的时候通常会将其入口命名为 index.vue ，引入的时候，直接引入该组件的文件夹即可。")]),e._v(" "),t("p",[e._v("但是这样做会有一个问题，当你编辑多个组件的时候，所有的组件入口都叫做"),t("code",[e._v("index.vue")]),e._v("，容易糊涂")]),e._v(" "),t("p",[e._v("vscode 显然意识到了这个问题，所以当文件名相同的文件被打开时，它会在文件名旁边显示文件夹名")]),e._v(" "),t("p",[e._v("如何解决呢，我们可以把 index.js 当作一个单纯的入口，不承担任何逻辑。仅仅负责引入"),t("code",[e._v("component-name-container")]),e._v("以及"),t("code",[e._v("export default component-name-container")])]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("my-app\n└── src\n        └── components\n                └── component-name\n                    ├── component-name.css\n                    ├── component-name-container.vue\n                    └── index.js\n")])])]),t("h2",{attrs:{id:"项目组织"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目组织"}},[e._v("#")]),e._v(" 项目组织")]),e._v(" "),t("p",[e._v("一般三种风格 "),t("code",[e._v("Rails-style")]),e._v(","),t("code",[e._v("Domain-style")]),e._v(","),t("code",[e._v("Ducks-style")]),e._v("，一般是混用，但是边界要清楚。个人是全局的使用"),t("code",[e._v("Rails-style")]),e._v("，业务相关或者局部使用到的使用"),t("code",[e._v("Domain-style")])]),e._v(" "),t("h3",{attrs:{id:"rails-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-style"}},[e._v("#")]),e._v(" Rails-style")]),e._v(" "),t("p",[e._v("按照文件的类型划分为不同的目录，例如 components、constants、 typings、views. 这个来源于 Ruby-on-Rails 框架，它按照 MVC 架构来划分不同的目录类型，典型的目录结构如下:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("app\n  models "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 模型")]),e._v("\n  views "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 视图")]),e._v("\n  controllers "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 控制器")]),e._v("\n  helpers "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 帮助程序")]),e._v("\n  assets  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 静态资源")]),e._v("\nconfig     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 配置")]),e._v("\n  application.rb\n  database.yml\n  routes.rb      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 路由控制")]),e._v("\n  locales        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 国际化配置")]),e._v("\n  environments/\ndb        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 数据库相关")]),e._v("\n\n")])])]),t("h3",{attrs:{id:"domain-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain-style"}},[e._v("#")]),e._v(" Domain-style")]),e._v(" "),t("p",[e._v("按照一个功能特性或业务创建单独的目录，这个目录就近包含多种类型的文件或目录. 比如一个典型的 Redux 项目，所有项目的文件就近放置在同一个目录下:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("Users/\nHome/\n  components/\n  actions.js\n  actionTypes.js\n  constants.js\n  index.js\n  model.js\n  reducer.js\n  selectors.js\n  style.css\nindex.js\nrootReducer.js\n")])])]),t("h3",{attrs:{id:"ducks-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ducks-style"}},[e._v("#")]),e._v(" Ducks-style")]),e._v(" "),t("p",[e._v("优点类似于 Domain-style，不过更彻底, 它通常将相关联的元素定义在一个文件下。Vue 的单文件组件就是一个典型的例子，除此之外 Vuex 也是使用这种风格:")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5d3a7134f265da1b5d57f1ed#heading-17",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目目录组织"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);