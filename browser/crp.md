# 关键渲染路径

::: tip 解释

关键渲染路径(Critical Rendering Path)：是指浏览器呈现网页要经历的一系列步骤
:::

PS： Google 的[关键渲染路径文档](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=zh-cn)写的是真的好

## HTML -> DOM

字节 → 字符 → 令牌 → 节点 → 对象模型，生成了文档对象模型

HTML response > Tokens > Nodes > DOM Tree

浏览器会**逐步构建 DOM**,通过这一点来优化生成网页的速度。即不用等所有 HTML 的都好了之后在处理，返回部分 HTML 是个很好的性能优化策略

## CSS -> CSSOM

不能使用 CSS 部分树，因为 CSS 会依据层级关系重新定义和优化样式属性，这个规则是我们能够更改 CSS 树。

如果使用 CSS 部分树，会导致网页的样式渲染不正常。所以浏览器会组织呈现，直到收到并处理了所有的 CSS 内容。即 CSS 为一种渲染阻塞资源(render blocking resource)

**CSS 是阻塞渲染的资源。需要将它尽早、尽快地下载到客户端，以便缩短首次渲染的时间**

## Render Tree

渲染树(CSSOM 树和 DOM 树合并)最重要的特性就是仅捕获可见内容。渲染树是 DOM 和 CSSOM 的结合，是最终能渲染到页面的元素的树形结构表示。也就是说，它包含能在**页面中最终呈现的元素**，而不包含那些用 CSS 样式隐藏的元素，比如带有 display: none;属性的元素。

## Layout

根据渲染树来布局，以计算每个节点的几何信息,将各个节点绘制到屏幕上

`<meta name="viewport" content="width=device-width, initial-scale=1">`

告诉浏览器布局视口的宽度应该等于设备的宽度，如果没有设置，浏览器就会使用默认视口宽度 980px

---

## JavaScript

JavaScript 允许我们修改网页的方方面面：内容、样式以及它如何响应用户交互。 不过，**JavaScript 也会阻止 DOM 构建和延缓网页渲染**

- JavaScript 可以查询和修改 DOM 与 CSSOM
- JavaScript 执行会阻止 CSSOM。
- 除非将 JavaScript 显式声明为异步，否则它会阻止构建 DOM

### Javascript 为什么放在页面底部

我们的脚本在文档的何处插入，就在何处执行。当 HTML 解析器遇到一个 script 标记时，它会暂停构建 DOM，将控制权移交给 JavaScript 引擎；等 JavaScript 引擎运行完毕，浏览器会从中断的地方恢复 DOM 构建。

换言之，我们的脚本块找不到网页中任何靠后的元素，因为它们尚未接受处理！或者，稍微换个说法：执行我们的内联脚本会阻止 DOM 构建，也就延缓了首次渲染。

::: tip 如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，会怎样？

答案很简单，对性能不利：浏览器将延迟脚本执行和 DOM 构建，直至其完成 CSSOM 的下载和构建

向 script 标记添加异步关键字可以指示浏览器在等待脚本可用期间不阻止 DOM 构建，这样可以显著提升性能，eg: `<script src="app.js" async></script>`

:::
