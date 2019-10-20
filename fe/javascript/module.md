# 模块化

::: tip 好处
提高可维护性
前端性能优化
模块的版本管理
:::

## 简单封装：Namespace 模式

> 减少 Global 上的变量数目，但是本质上是对象，不安全

```js
var MYAPP = {
  foo: function() {},
  bar: function() {}
}

MYAPP.foo()
```

::: tip 匿名闭包 ：IIFE 模式
函数是 JavaScript 唯一的 Local Scope
:::

```js
var Module = (function($) {
  var _$body = $("body") // we can use jQuery now!
  var foo = function() {
    console.log(_$body) // 特权方法
  }

  // Revelation Pattern
  return {
    foo: foo
  }
})(jQuery)

Module.foo()
```

## 加载 Script Loader

```html
<!-- 页面上有多个脚本 -->
<!-- 难以维护，依赖模糊，请求过多 -->
<script src="zepto.js" />
<script src="jhash.js" />
<script src="fastClick.js" />
<script src="iScroll.js" />
<script src="underscore.js" />
<script src="handlebar.js" />
<script src="datacenter.js" />
<script src="deferred.js" />
```

[LABjs](https://github.com/getify/LABjs),Loading And Blocking JavaScript

## MODULE LOADER

> YUI3 Loader

```js
// hello.js
YUI.add(
  "hello",
  function(Y) {
    Y.sayHello = function(msg) {
      Y.DOM.set(el, "innerHTML", "Hello!")
    }
  },
  "3.0.0",
  {
    requires: ["dom"]
  }
)

// main.js
YUI().use("hello", function(Y) {
  Y.sayHello("hey yui loader")
})
```

这一时期的优化方案有 合并，压缩，混淆

## CommonJS - API Standard

同步/阻塞式加载,同步加载对服务器/本地环境并不是问题。浏览器才是问题

## AMD/CMD

浏览器环境模块化方案

- AMD(Async Module Definition):RequireJS 对模块定义的规范化产出
- CMD(Common Module Definition):SeaJS 对模块定义的规范化产出

## Webpack - Module Bundler

> NPM : Node Package Manger

## ES6 Module

### 重新导出一个绑定

```js
import { sum } from "./example.js"
export { sum }
```

但是实际上一条语句就足够

```js
export {sum} from './example.js
```

因为之前不想让我每一个编辑的文件的都叫`index.vue`，所以我会专门新建一个 index.js 文件来

### 一下子导出很多文件

我想每一个大型项目都会有一个 utils 文件夹，放着常用的工具函数，我之前是按照功能分成了好几个 js 文件，比如有 `date.js`，`validate.js`，每一次我想去使用的话，可需要引入对应 js 文件的工具函数，很麻烦，需要这样写`import {parseTime} from '@/utils/date.js`。今天看 vue 源码的时候，陡然醒悟，我可以把 utils 文件夹下面所有的工具函数导入到入口文件 index.js 里面，然后全部导出。接下来我使用的话，只要`import {parseTime} from '@/util'`即可。

```js
// 其实就等于
// import * from 'shared/util'
// export *
export * from "shared/util"
export * from "./lang"
export * from "./env"
```

## 参考

- [JavaScript 模块化七日谈](http://huangxuan.me/js-module-7day/#/)
- [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)
- [前端模块化开发的价值](https://github.com/seajs/seajs/issues/547)
