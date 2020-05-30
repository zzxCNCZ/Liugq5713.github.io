# 命令行

## 常用工具

1. babel-cli/babel-env: 语法转换
2. [commander](https://github.com/tj/commander.js#readme): 命令行工具
3. [download-git-repo](https://github.com/flipxfx/download-git-repo#readme): 用来下载远程模板
4. [ini](https://github.com/npm/ini#readme): 格式转换
5. [inquirer](https://github.com/SBoudrias/Inquirer.js#readme): 交互式命令行工具
6. [ora](https://github.com/sindresorhus/ora#readme): 显示 loading 动画
7. [chalk](https://github.com/chalk/chalk#readme): 修改控制台输出内容样式
8. [log-symbols](https://github.com/sindresorhus/log-symbols#readme): 显示出 √ 或 × 等的图标

## [shell 命令](https://aotu.io/notes/2015/12/23/building-command-line-tools-with-node-js/index.html)

这第一行的注释是告诉 shell 如何解析这个脚本

```js
#!/usr/bin/env node
console.log("Hello, world!");
```

接下来我们需要在我们 package.json 里面的最顶级增加 bin 部分。设置的属性（在我们的例子中是 snippet）将会变成用户在他们的终端处理脚本使用的命令，属性值就是相对于 package.json 的脚本位置。

```js
"license": "Apache-2.0",
"bin": {
    "snippet": "./index.js"
}
```

现在我们已经有一个可以工作的 shell 命令了！让我们安装它并且测试结果。

```js
$ npm install -g
$ snippet
Hello, world!
```

真整洁！ npm install -g 实际上是将我们脚本链接到 path 变量的位置，所以我们能够在任何地方使用它。

```js
$ which snippet
/usr/local/bin/snippet
$ readlink /usr/local/bin/snippet
../lib/node_modules/bitbucket-snippet/index.js
```

在开发环境中我们实际上使用 npm link 便利地将我们的 index.js 软链接到 path 变量的位置。

```js
$ npm link
/usr/local/bin/snippet -> /usr/local/lib/node_modules/bitbucket-snippet/index.js
/usr/local/lib/node_modules/bitbucket-snippet -> /Users/kannonboy/src/bitbucket-snippet
```
