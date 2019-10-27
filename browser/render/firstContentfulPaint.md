# 白屏时间优化

## 白屏时间

是指浏览器从响应用户输入网址地址，到浏览器开始渲染内容的时间

反映的问题：从用户体验出发，可以直接的反映网站性能的优劣，在衡量网站性能的过程中更靠近用户。

计算方式：

- 通过 performance.getEntriesByType('paint') 获得 firstContentfulPaint
- 在 head 末尾插入一段获取时间戳的代码，然后用这个时间戳减去开始接收数据的那个时间戳，得出的结果为白屏时间

## 网站传输性能优化

### 浏览器缓存

- 强缓存（Cache-Control）
  注意要给文件加上 hash 后缀，防止服务器文件变化之后，浏览器无法得知
- 协商缓存(Last-Modified ETag)

### 资源打包压缩

- js 压缩，html 压缩
- 提取公共资源
- 提取 css 并压缩
- 将 webpack 开发环境修改为生产环境
- 在服务器上开启 gzip 压缩
- 图片资源优化(不要在 HTML 里缩放图像,使用雪碧图，使用字体图标 iconfont，使用 Webp，网络传输性能检测 Page Speed，使用 CDN)

## 页面渲染性能优化

- DOM 渲染层与 GPU 硬件加速
- 重排与重绘

## 负载均衡

- nginx 搭建反向代理

## 参考

- [「性能优化」首屏时间从 12.67s 到 1.06s，我是如何做到的？](https://zhuanlan.zhihu.com/p/46046242)
- [列出了哪些 CSS 属性在不同的渲染引擎中是否会触发重排或重绘](https://csstriggers.com/)
