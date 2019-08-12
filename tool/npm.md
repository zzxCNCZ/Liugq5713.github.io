---
title: 包管理 Npm
date: 2019-02-21T10:42:49.991Z

categories: ["tool"]
---

## 基础知识

### npm 钩子

- npm 脚本有`pre`和`post`两个钩子。执行`npm run build`的时候，会自动按照下面的顺序执行。

```javascript
npm run prebuild && npm run build && npm run postbuild
```

## [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

a tool intended to help round out the experience of using packages from the npm registry

- Using locally-installed tools without npm run-script
- Executing one-off commands
- Run commands with different Node.js versions

## npm rebuild

> 我司升上了 webpack4，我个人版本的 `node`，`npm` 版本低了，需要升级

This command runs the npm build command on the matched folders. This is useful when you install a new version of node, and must recompile all your C++ addons with the new binary.

## npm upgrade

```js
npm update [-g] [<pkg>...]
```

也可以使用 npm 包来管理它的升级。（npm-check）

npm-check 直接运行这个命令就可以了。然后根据提示进行升级。

## npm 发包

## npm script

> 参考教程：https://css-tricks.com/why-npm-scripts/

构建工具可能存在的问题：

- 因为一些构建工具可能不存在对应的插件
- 插件可能会使用一些旧的版本，不是很匹配当前文档
- 错误不容易被处理

## 设置环境变量 process.env(包含用户环境信息的对象)

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

### npm-config

Any environment variables that start with npm_config\_ will be interpreted as a configuration parameter.

`local": "npm run webpack-serve --config=test`

可以通过 process.env.NPM_CONFIG_CONFIG 访问到值 test

### npm 版本控制

### 更新

> 你不能手动更新你的 npm 包的版本号，npm 提供了一些命令让你更新版本号，记得用

## npm config

npm 的配置文件 .npmrc
我们工作中经常用到的是就是设置一下 npm 的仓库了。

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

## package.json bootstrap

> 这个意思非常好

"bootstrap": "yarn || npm i --registry=https://registry.npm.taobao.org"

## npm ls

该命令可以展示你所有的依赖，特别好用
