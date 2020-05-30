# 常见开发英语 word

- PRD （Product Requirement Document) ： 产品需求文档
- MRD （Market Requirement Document）：市场需求文档
- BRD （Business Requirement Document）： 商业需求描述
- RD Department (research and development ): 研发部门
- PR Department（ public relations）：公共关系

- ANR：Application Not Responding 应用无响应
- OTA：Over-the-Air Technology 空间下载技术

- aka: also known as
- PTAL: please take another look

---

- CI: continuous integration
- CD: continuous delivery

---

- SCM（Software Configuration Management)：软件配置管理

- CMS 是"Content Management System"的缩写，意为"内容管理系统"。

* TBD To Be Discussed / Determined 的缩写,中文含义“待讨论”

* TTS： text to speech 从文本到语音

* OSS (Object Storage Service) 对象存储，可以提供图片、文档、音视频等二进制的海量存储功能。TOS 就是一个例子。TOS 文件存储

* CGI 公共网关接口（Common Gateway Interface，CGI）是 Web 服务器运行时外部程序的规范，按 CGI 编写的程序可以扩展服务器功能。CGI 应用程序能与浏览器进行交互，还可通过数据 API 与数据库服务器等外部数据源进行通信，从数据库服务器中获取数据。格式化为 HTML 文档后，发送给浏览器，也可以将从浏览器获得的数据放到数据库中。

- nlp Natural language processing 自然语言处理

- PPE stands for Pre-Production Environment (software development)

## 回流页和落地页

回流页特指从 APP 内分享至第三方渠道（微信、微博、易信等），并在这些渠道中打开内容的页面。

落地页也称“着陆页”，是指访问者在其他地方看到发出的某个具有明确主题的特定营销活动，点击后被链接到你网站上的第一个页面。

## 常见的技术常见问题

monkey 问题 ： 自动化测试，比如让猴子随机操作

需求倒排：先给定你上线时间

压测： 对于服务端可以高并发，客户端做一下好性能的事情，长时间使用啥的

## ORM

对象关系映射（Object Relational Mapping，简称 ORM）模式是一种为了解决面向对象与关系数据库存在的互不匹配的现象的技术。简单来说，将程序中的兑现自动持久化到关系数据库中。那么，到底如何实现持久化呢？一种简单的反感是采用硬编码的方式（jdbc 操作 sql 方式），

## tips

- 问题的出现，不能毫无头绪，查看源码是有效的方式，但是不能一通瞎看，看源码的过程就是理清楚你代码运行逻辑的过程，所以尽量先理清楚你的代码的运行过程，越是棘手对你帮助越大

* 为什么要理解业务，可以帮你学习到一些同行的经验，可以少走一些坑，可以用来怼产品，方便你使用

- 当你的工作上，有依赖的上下游时，我们需要看一下你的同学的 okr，确保自己的 ok 在其他的同学的 ok 里面

* 聊天的目的： 关键工作进展，个人发展困惑，团队问题反馈等相关问题的准备

- 线上出现问题，应该先回滚，保证线上的服务稳定性。然后在处理问题。 线上出了问题，要疯狂联系同学。保证线上服务稳定第一

* 如果你的提供者不是很成熟，那么你需要把控过程

## 求助的方式

学会使用 codesandbox 给问问题的人更多地信息，学会提问

eg: `https://codesandbox.io/s/jolly-brook-p24vu`

## 学会查看 log

> 学会查看 log ，捕获异常

TCE

- TCE: /opt/tiger/toutiao/log/app/xxx 查 access 和 error log
- TCE: pm2 logs
