---
title: webpack QA
date: 2019-02-14T10:04:15.142Z

categories: ["tool"]
---

## 如何利用 webpack 写一个 icon component

::: tip 应该善用配置，将各个模块予以抽离，使得相互间不存强依赖，如此开发环节也大大的避免代码冲突。譬如，了解 JavaScript 特性，即可做如下写法：

```js
const files = require.context('.', true, /\.svg$/)

const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.svg)/g, '')] = files(key)
})
export default modules
```

这样即可写出便捷的 Icon Component，使用时只需添加新 Svg 入 assets，然后引用 icon 时填写对应 Svg 名字即可，十分方便；推此及它，我们可借助这样配置，去分解、组合各个模块，甚是方便。
:::

## 在项目中如何定义一些全局环境变量

::: tip 代码判断不同开发环境

- Webpack : DefinePlugin : create global constants which can be configured at compile time
  在原始的源码中执行查找和替换操作

- NPM：npm*config*

```js
// 然后可以通过npm_config_config可以访问到‘local’的值
"local": "npm run webpack-serve --config=local"
```

- Node 运行环境：process.env（ 返回一个包含用户环境信息的对象）

```js
// BABEL_ENV NODE_ENV env_config npm_config_preview npm_config_report都被赋值给process.env对象
// 环境变量赋值的能力是cross_env提供的

"build:sit-preview": "cross-env BABEL_ENV=production NODE_ENV=production env_config=sit npm_config_preview=true npm_config_report=true node build/build.js"
```

:::
