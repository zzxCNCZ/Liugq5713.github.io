# Node 包管理器 Npm

## npm 钩子

- npm 脚本有`pre`和`post`两个钩子。执行`npm run build`的时候，会自动按照下面的顺序执行。

```javascript
npm run prebuild && npm run build && npm run postbuild
```

## 常见命令

### npm rebuild

> 我司升上了 webpack4，我个人版本的 `node`，`npm` 版本低了，需要升级

This command runs the npm build command on the matched folders. This is useful when you install a new version of node, and must recompile all your C++ addons with the new binary.

### npm upgrade

```js
npm update [-g] [<pkg>...]
```

也可以使用 npm 包来管理它的升级。（npm-check）

npm-check 直接运行这个命令就可以了。然后根据提示进行升级。

### npm-config

Any environment variables that start with `npm_config_` will be interpreted as a configuration parameter.

`local": "npm run webpack-serve --config=test`

可以通过 process.env.NPM_CONFIG_CONFIG 访问到值 test

### npm 的配置文件 .npmrc

我们工作中经常用到的是就是设置一下 npm 的仓库了,有时候你可以在你的项目里面放置一个.npmrc 文件，设置 npm 源地址

```shell
// 获取
npm get registry
// 设置
npm config set registry  https://registry.npm.taobao.org
// 删除
npm config rm register
// 直接编辑配置文件
npm config edit
```

## npm ls

该命令可以展示你所有的依赖，特别好用

## 设置环境变量

process.env(包含用户环境信息的对象)

### cross-env

#### WINDOWS 配置

set NODE_ENV

#### LINUX 配置

export NODE_ENV=production

#### 跨平台配置

`cross-env` makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform.

```js
// Usage
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

## package.json bootstrap

> 这个意思非常好

"bootstrap": "yarn || npm i --registry=https://registry.npm.taobao.org"

## npm package

### [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

a tool intended to help round out the experience of using packages from the npm registry

- Using locally-installed tools without npm run-script
- Executing one-off commands
- Run commands with different Node.js versions

### npm-version

> 如果你有 npm 包，不应该手动升级他的版本，而是通过这个命令

`npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`

If run in a git repo, it will also `create a version commit and tag`. This behavior is controlled by git-tag-version

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

- npm-check-updates

这个包帮你检查包的版本情况，然后需手动升级

### 如何发布自己的 NPM 包

::: tip 你已经是个成熟的前端了，该自己写包了

- 在[npm 官网](https://www.npmjs.com/)注册一个 npm 账号
- 控制台添加 npm 用户：`npm adduser`
- 控制台登陆 npm：`npm login`
- 发布：`npm publish version`

:::

## npm script

> 参考教程：https://css-tricks.com/why-npm-scripts/

npm script 更加的灵活，构建工具可能存在的问题：

- 因为一些构建工具可能不存在对应的插件
- 插件可能会使用一些旧的版本，不是很匹配当前文档
- 错误不容易被处理

## 参考

- [npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)
- [NPM 版本相关问题](https://blog.xcatliu.com/2015/04/14/semantic_versioning_and_npm/)
