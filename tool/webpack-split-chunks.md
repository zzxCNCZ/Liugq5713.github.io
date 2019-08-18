# [拆包](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)

根据 [Webpack glossary](https://webpack.js.org/glossary/)，有两种拆包策略

- Bundle Splitting：创建更多的较小的文件，方便缓存

::: tip Bundle
Produced from a number of distinct modules, bundles contain the final versions of source files that have already undergone the loading and compilation process.
:::

- Code Splitting：动态加载代码，用户访问时仅需加载需要的代码

::: tip Chunks

This webpack-specific term is used internally to manage the bundling process. Bundles are composed out of chunks, of which there are several types (e.g. entry and child). Typically, chunks directly correspond with the output bundles however, there are some configurations that don't yield a one-to-one relationship.

:::

## Bundle Splitting

这里主要是和缓存有关，如果你有一个巨大的文件，改动了一行代码，整个文件就必须要更新，但是如果你将他拆分成两个文件，你仅仅需要更新修改了的文件。Bundle Splitting 对于缓存十分的有用

::: tip from memory cache vs from disk cache
from memory cache 代表使用内存中的缓存，from disk cache 则代表使用的是硬盘中的缓存，浏览器读取缓存的顺序为 memory –> disk。在浏览器中，浏览器会在 js 和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而 css 文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。
:::

### 防止重复打包

- 启用拆分

```javascript
optimization: {
  splitChunks: {
    chunks: 'all',
  },
},
```

::: tip optimization.splitChunks.chunks = 'all'
put everything in node_modules into a file called vendors~main.js
:::

- 拆分每个 npm 包

我们的 vendors.js 遇到了与我们原来的 main.js 文件相同的问题 - 对其中一部分的更改意味着重新下载它的所有部分。
那么为什么不为每个 npm 包提供单独的文件呢？这很容易做到。

## Code Splitting

### 路由懒加载

### 资源预加载

`import(/* webpackPrefetch: true */ 'LoginModal');`

这种写法将会被 webpack 转为`<link rel="prefetch" href="login-modal-chunk.js">`，并添加到 head 标签里面。

Prefetch 专注于下一个页面将要加载的资源并以低优先级加载
