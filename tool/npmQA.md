---
title: NPM 常见问题
date: 2019-02-21T10:55:58.868Z

categories: ["tool"]
---

## 如何发布自己的 NPM 包

::: tip 你已经是个成熟的前端了，该自己写包了

- 在[npm 官网](https://www.npmjs.com/)注册一个 npm 账号
- 控制台添加 npm 用户：`npm adduser`
- 控制台登陆 npm：`npm login`
- 发布：`npm publish version`

:::

## [NPM 版本相关问题](https://blog.xcatliu.com/2015/04/14/semantic_versioning_and_npm/)

npm 基本遵守 [semver](http://semver.org/) 语义化版本号的规则，使用 node-semver 来解析版本号。

一般来说，一个版本号包含三个部分：

MAJOR MINOR PATCH

MAJOR 表示主版本号，通常有重大改变或者达到里程碑才改变
MINOR 表示次版本号，在保证主体功能基本不变的情况下,如果适当增加了新功能可以更新此版本号
PATCH 表示修订号：一些小范围的修修补补就可以更新补丁号
它们的取值为非负整数，若大于零，不能在前方补零

### [安装固定版本的 npm 包](https://loveky.github.io/2017/03/27/lock-npm-package-version-in-js-project/)

::: tip 安装时加个参数即可

`npm i -E packageName`

:::

### 如何正确的定义依赖的版本号

- ^ 表示同一主版本号中，不小于指定版本号的版本号
- ~ 表示同一主版本号和次版本号中，不小于指定版本号的版本号
- || 表示或
- `> 、<、=、>=、<=、-` 用来指定一个版本号范围
- `x、X、*` 表示通配符

### 如何控制你的 npm 包版本

- nvm node 版本控制( 独立的软件包 )
- nrm npm 源控制( npm 包)
  npm 的源控制可以通过 npm config 来设置， 也可以直接写进 .npmrc
