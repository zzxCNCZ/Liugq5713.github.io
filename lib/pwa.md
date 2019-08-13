---
title: PWA
date: 2019-04-12T07:28:49.006Z

categories: ['lib']
tags: ['pwa']
---

## 启用 Desktop PWAs

chrome 访问`chrome://flags/`，将`Desktop PWAs`设置为`Enabled`

## 理论

### 缓存时机

- install 时
- 用户交互时
- 网络响应时

### 缓存策略

无论您缓存多少内容 ServiceWorker 都不会使用缓存，除非您指示它在何时使用缓存以及如何使用

- 全部来自缓存
- 全部来自网络
- 取缓存的内容失败了再去请求网络
- 请求网络失败了去请求缓存
- 两个一起请求看谁快
- 先去取缓存，然后再去请求网络
- 两个都失败了，就只好做一个错误处理，叫 Generic fallback

### Service Workers

Service Worker 提供了丰富的离线体验。但是技术的发展从来都不是孤立的。在 SW 出现之前，HTML5 也提供了页面缓存方案，开发者们使用  [Application Cache (AppCache)](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache)接口缓存资源，由于它有很多[缺点](https://www.zhihu.com/question/29876535),不过已经不推荐使用了

Service Workers 就是浏览器在后台运行的脚本,你可以把它看作是至于浏览器和服务器之间的中间件

其[生命周期](https://blog.bitsrc.io/understanding-service-workers-and-caching-strategies-a6c1e1cbde03)如下图：
![生命周期](https://developers.google.com/web/fundamentals/primers/service-workers/images/sw-lifecycle.png)

### [Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)

然后修改 Manifest 文件，注意一定要有 **144x144**或者以上大小 的 PNG 图标（我就是犯了这个错误），如果你不知道你的`Manifest`文件哪里有问题，可以通过`chrome`的 `DevTool -> Application -> Manifest` 查看情况

## 基础

### [安装和卸载 PWA 应用](https://www.howtogeek.com/fyi/how-to-install-progressive-web-apps-pwas-in-chrome/)

PS: 为啥说这个，因为`beforeinstallprompt`事件在 PWA 应用已经安装的情况下不触发

### [引导用户安装 PWA 应用](https://love2dev.com/blog/beforeinstallprompt/)

需要监听`BeforeInstallPromptEvent`事件，但是这个
[事件触发时机要求](https://stackoverflow.com/questions/50762626/pwa-beforeinstallprompt-not-called)很多

- 你的 PWA APP 没有被安装
- 用户至少和你的网站交互了 30 秒以上
- 你的网站包含`manifest`文件
- 你的网站是 HTTPS 连接的
- 你已经注册了 SW

## [用 React 开发 PWA](<(https://blog.bitsrc.io/build-progressive-web-apps-with-react-part-1-63f1fbc564a6)>)

### 开发 SW

create-react-app 生成的 service-worker.js 文件仅仅在生产模式可以使用。[原因是](https://github.com/facebook/create-react-app/issues/2396)service-worker.js 在生产环境下会导致很多不可意料的错误

react 仅在 production 模式注册 sw。所以通过`yarn build`，进入生产模式然后通过`serve -s build`来开发的。（如果你没有安装 serve，可以安装一下或者起一个别的静态服务器）

### 更新 Service Worker

- 谷歌控制台 application 里面勾选 Update on Reload
- 移除 service worker，然后让 sw 重新安装

### 复写 create-react-app 配置而不是 eject

create-react-app(CRA) 默认的 sw 配置是缓存静态资源，但是很显然不满足我的需要

为什么要复写配置，完全可以重新写一个 service-worker-custom.js 文件然后注册它不就可以了？

答案是最好不要，因为`workbox-webpack-plugin`已经集成到`react-create-app`的[生产配置里面了](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)，你可以通过修改配置的方式，来使用 google 提供的[`Workbox`](https://developers.google.com/web/tools/workbox/modules/workbox-sw)，帮助你实现自定义的 sw

推荐一个工具[react-app-rewired](https://github.com/timarney/react-app-rewired)

### 使用 google 的工具[workbox](<(https://developers.google.com/web/tools/workbox/modules/workbox-strategies)>)

还是要在强调一点，`workbox-webpack-plugin`已经内置，所以你可能需要配置一下 eslint，防止报错
