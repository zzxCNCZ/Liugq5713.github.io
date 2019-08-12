---
title: "打包工具 Webpack"
date: 2019-02-11T10:38:35.202Z

categories: ["tool"]
---

> 更改 webpack 配置之后，一定要记得重新编译一下

## 基本概念

### hash

- hash

hash 是整个编译过程产生的一个总的 hash 值，而不是单个文件的 hash 值，项目中任何一个文件的改动，都会造成这个 hash 值的改变

- chunkhash

代码中引用的文件（js、css、图片等）会根据配置合并为一个或多个包，我们称一个包为 chunk。 每个 chunk 包含多个 modules。无论是否是 js，webpack 都将引入的文件视为一个 module
[chunkhash]：这个 chunk 的 hash 值，文件发生变化时该值也会变。使用 [chunkhash] 作为文件名可以防止浏览器读取旧的缓存文件

- contenthash

[contenthash] 你可以简单理解为 moduleId + content 生成的 hash 因此一个 chunk 中的多个 module 有自己的 [contenthash]

## 基本配置

### entry

学习 webpack 的 entry 和 output 一个是相对路径的写法，一个类似是 path.join("**dirname","public")的写法。我就是好奇为啥 output 不采用相对路径的写法，感觉不是更简单吗？
其实不然，entry is not a relative path, it's a module request。webpack 应该是执行了类似 require("./index.js")的操作。 output 采用 path.join("**dirname","public") 的写法，可以解决在不同操作系统下，路径写法不同的问题。
且也顺便了解了一下 **dirname 与 ./ 的区别： - ./ refers to the current working directory - **dirname is always the directory of the current file.

### loader

> `loader`的顺序是从右至左的，应该是函数式的写法，你可以和`JavaScript`的`reduce`函数类比

#### file-loader vs url-loader

file-loader 和 url-loader ，url-loader 是对 file-loader 的一层封装，小图片就可以直接转化成 base64 编码了，大一点的图片呢，便是和 file-loader 一样，给它哈希一个字符串作为文件名（ 这个作用是保证项目中的资源都是新的 ）

#### css 里面的 loader

1. sass-loader - Transforms Sass to CSS. (Input: Sass, Output: CSS)
2. css-loader - Transforms CSS to a JavaScript module. (Input: CSS, Output: JavaScript)
3. style-loader - Injects the CSS, that is exported by the JavaScript module, into a `<style>`tag at runtime. (Input: JavaScript, Output: JavaScript).

### resolve

[webpack resolve](https://webpack.js.org/configuration/resolve/)

该配置帮你处理模块如何被解析的问题。
在项目比较复杂的时候，可以很方便的添加路径别名。

### alias

> webpack 别名在 eslint 中不能解析，有个报错信息杵在那里，怎么看怎么不舒服。

使用 eslint-import-resolver-webpack，告诉 eslint，使用 webpack 的 resolver 来检查 package 是否引用正确

```js
//在eslint配置文件里面添加
"settings": {
  "import/resolver": {
    "webpack": {
      "config": "./build/webpack.common.js"
    }
  }
}
```

## 优化

### [HashedModuleIdsPlugin](https://webpack.js.org/plugins/hashed-module-ids-plugin/)

This plugin will cause hashes to be based on the relative path of the module, generating a four character string as the module id. Suggested for use in production.

### 将 css 抽出来

> 图标加载过慢，不能将 CSS 打包到一个 bundle 上，另外，antd,fontawesome 都是固定，基本不变的，可以做缓存嘛，这些都是静态资源，所以我打算将其打出来。

网上查到的教程都是 基于 extract-text-webpack-plugin 这个插件，但是 webpack4 已经为 css 单独准备了一个插件。

### ES6 模块处理

我们目前的配置，babel 会把 ES6 模块定义转为 CommonJS 定义，但 webpack 自己可以处理 import 和 export， 而且 webpack 处理 import 时会做代码优化，把没用到的部分代码删除掉。因此我们通过 babel 提供的 modules: false 选项把 ES6 模块转为 CommonJS 模块的功能给关闭掉。

### 控制台修饰插件

- webpack-dashboard
- nyan-progress-webpack-plugin

## webpack 配置问题

### resolve 后缀没有填好

> webpack 遇到了一个 bug,就是各种模块解析不出来

我 `webpack` 的配置有问题，配置 `resolve` 的时候脑抽了

```js
// 配置这个的时候，我忘记在后缀前面加点了。将 js ===> .js
extensions: [".js", ".jsx"];
```

## 进阶

### 如何实现模块的动态加载

很简单，`import()`操作返回一个 promise，你用一个函数包装一下,配合 async/await，动态加载妥妥的

```js
const getModule=()=> import('./wait.js')

const load = async (){
  if(isNeed){
    const module=await getModule()
  }
}
```

`import()`还没有正式进入标准, 需要使用[babel-preset-stage-2](https://babeljs.io/docs/plugins/preset-stage-2/)来支持

## webpack 配置文件将 host 设置为 0.0.0.0

其作用是就是你不仅可以在电脑上看到你的网页，你也可以在手机上访问你的网页

eg:
电脑访问 localhost:8080 手机访问 192.168.134.138:8080（192.168.134.138 为你电脑的 IP）查看相同的页面

IPv4 中，0.0.0.0 被设计用来指定一个无效的未知的不可用的目标，在不同的上下文中有不同的含义。

- 作为主机地址
  - 当一台主机还没有被分配一个 IP 地址的时候，用于表示主机本身
  - 用作服务端，表示本机上的任意 IPV4 地址
  - 可表示目标机器不可用。
- 作为默认的路由
  - 0.0.0.0 表示的是默认路由，即当路由表中没有找到完全匹配的路由的时候所对应的路由。

## exports vs module.exports

- module.exports 初始值为一个空对象 {}
- exports 是指向的 module.exports 的引用
- require() 返回的是 module.exports 而不是 exports

## webpack 别名

[webpack resolve](https://webpack.js.org/configuration/resolve/)

该配置帮你处理模块如何被解析的问题。在项目比较复杂的时候，可以很方便的添加路径别名。

别名个人感觉还是用特殊符号或者一些共识的 alias 。如果是一个单词，不熟悉的可能直接就懵了（一些情况下和直接引用一个库非常像）

比如我司的神作:
`import { something } from 'router'`十分的让人误解。其实他引入的是 `@/router/index.js`里面的内容
