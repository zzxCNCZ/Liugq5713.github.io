# 关键渲染路径

可以从网页渲染的过程作答，但是优化要有一个思路：即先衡量，再优化。花上你几个小时优化几毫秒也不是很值得。

关键渲染路径：是指浏览器呈现网页要经历的一系列步骤

PS： Google 的[关键渲染路径文档](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=zh-cn)写的是真的好

## HTML -> DOM

字节 → 字符 → 令牌 → 节点 → 对象模型，生成了文档对象模型

HTML response > Tokens > Nodes > DOM Tree

浏览器会逐步构建 DOM,通过这一点来优化生成网页的速度。即不用等所有 HTML 的都好了之后在处理，返回部分 HTML 是个很好的性能优化策略

## CSS -> CSSOM

不能使用 CSS 部分树，因为 CSS 会依据层级关系重新定义和优化样式属性，这个规则是我们能够更改 CSS 树。

如果使用 CSS 部分树，会导致网页的样式渲染不正常。所以浏览器会组织呈现，直到收到并处理了所有的 CSS 内容。即 CSS 为一种渲染阻塞资源(render blocking resource)

## 渲染树

渲染树最重要的特性就是仅捕获可见内容。渲染树是 DOM 和 CSSOM 的结合，是最终能渲染到页面的元素的树形结构表示。也就是说，它包含能在页面中最终呈现的元素，而不包含那些用 CSS 样式隐藏的元素，比如带有 display: none;属性的元素。

## Layout

`<meta name="viewport" content="width=device-width, initial-scale=1">`

告诉浏览器布局视口的宽度应该等于设备的宽度，如果没有设置，浏览器就会使用默认视口宽度 980px
