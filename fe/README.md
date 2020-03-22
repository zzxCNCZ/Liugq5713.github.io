# 其他

## 前后端分离再分离

你会发现前端开发的体系化、正规化，其实伴随着前后端分离逐步深化:

- 盘古开天：没有前后端之分
- 模板时代: 按照 MVC 架构，后端负责 MC, 实现业务，给前端提供数据。前端负责 V, 即写模板。前端后在项目结构上并没有分离，但是职责开始了分化。
- 接口时代：后端提供 HTTP/WS 接口，前端负责请求接口和实现页面渲染。CSR(客户端渲染)技术开始爆发，Backbone、Angular、React... 前端在项目结构上已经从后端脱离。开发效率进一步提高。接口就是一个约定，按照约定先行的原则，前后端可以实现并行开发。但是这个阶段后端接口实现还是需要关心页面的呈现，必须提供能够满足 UI 渲染的接口。
- BFF 时代：BFF 即 Backends for Frontend。伴随着阵痛，前后端进一步分离。主要有两个原因：终端多样性，桌面端、iOS、Android、前端、小程序... 不同的客户端对接口有不同的需求、而且这些需求是多变的。另外后端业务也向微服务演化, 于是后端的接口会趋向原子化、功能更加单一、更加通用。
  但是这对于前端开发来说也是比较痛苦的，实现一个页面需要调用很多接口、随之页面性能也会降低。分层架构又派上用场，那就多加一层呗，这一层就是 BFF，它让客户端开发者根据的自己需求在服务端来粘合后端的通用服务。这会后端再也不用关心 UI 了。BFF 时代，GraphQL 和 NodeJS 备受瞩目。
- Serverless 时代：BFF 推行需要良好的基础设施和研发流程支撑，架构难度也比较高，因此通常只有大厂搞得起来。Serverless 借助云平台, 降低了对基础设施的依赖，以及开发和维护的难度。 所以基于 Serverless 的 BFF 门槛更低。Serverless 对前端开发的意义不止于此，强烈推荐 《Serverless 掀起新的前端技术变革》 这篇文章。

## 模块化应用

- 代码文件的组织结构
- 确定模块的边界
- Store 的状态树的设计

## 有必要去学习 BFF

https://samnewman.io/patterns/architectural/bff/

## 参考

- [33-js-concepts](https://github.com/leonardomso/33-js-concepts)
- [中文版 33-js-concepts](https://github.com/stephentian/33-js-concepts)
- [七个对我最重要的职业建议（译文）](http://www.ruanyifeng.com/blog/2015/09/career-advice.html)
- [前端部署演化史](https://mp.weixin.qq.com/s/bfZkqgr0JAy_oxcqc4ULFw)

## 名词

### 回流页和落地页

回流页特指从 APP 内分享至第三方渠道（微信、微博、易信等），并在这些渠道中打开内容的页面。

落地页也称“着陆页”，是指访问者在其他地方看到发出的某个具有明确主题的特定营销活动，点击后被链接到你网站上的第一个页面。

## 求助的方式

学会使用 codesandbox 给问问题的人更多地信息，学会提问

eg:
`https://codesandbox.io/s/jolly-brook-p24vu`
