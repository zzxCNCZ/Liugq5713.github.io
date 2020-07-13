## 在 node 环境里面使用 import 语法

ps: 有的方法我没有试过，看的别人的写法

### 方法一

When using ES6 modules from node environment use the extension .mjs in your files and use this command to run file node --experimental-modules filename.mjs.

文件名后缀使用`mjs` ， 并且加上启动 modules 的标识

## 方法二 package.json "type" field

Files ending with .js will be loaded as ES modules when the nearest parent package.json file contains a top-level field "type" with a value of "module".

The nearest parent package.json is defined as the first package.json found when searching in the current folder, that folder’s parent, and so on up until the root of the volume is reached.

```js
// package.json
{
  "type": "module"
}
```

## 使用 babel 转化

安装依赖

```js
npm install @babel/core @babel/register @babel/preset-env --save-dev
```

```js
// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
  presets: ["@babel/preset-env"],
})

// Import the rest of our application.
module.exports = require("./server.js")
```

## npm install --save esm

`node -r esm server.js`

nodemon 同样也是可以使用的 `nodemon -r esm server.js`

这个和 babel 的做法相比，这种做法无需改动你的代码，更加的优秀

## ts + koa

### Q ：SyntaxError: Cannot use import statement outside a module

修改一下 typescript 的配置

```js
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "jsx": "react",
    "esModuleInterop": true
  },
  "exclude": ["node_modules"]
}
```

### 不能识别 css 文件

这里，我们可以通过包直接把 css 文件忽略掉

```js
import "ignore-styles"
```

### 不能识别 react 组件

因为我一开始，文件名是 server.ts 将它修改为 server.tsx 就可以了

## 使用 create-react-app

常见的命令要会打

`create-react-app --template typescript`

## base64

Base64 是一种基于 64 个可打印字符来表示二进制数据的表示方法。由于{\displaystyle 2^{6}=64}![af2dc5fed3018c6a26762193cc98dbe5.svg](evernotecid://FD0B7556-CCCC-424F-9AA9-EA1B9F5E1590/appyinxiangcom/17869775/ENNote/p556?hash=af2dc5fed3018c6a26762193cc98dbe5)
，所以每 6 个比特为一个单元，对应某个可打印字符。3 个字节有 24 个比特，对应于 4 个 Base64 单元，即 3 个字节可由 4 个可打印字符来表示。它可用来作为电子邮件的传输编码。

使用 64 个字符来表示二进制，大小写的英文 26 字母，数字 0-9，加号+和斜杠/，共 64 个字符，等号=用来作为后缀用途。

## 5 种方式在 node 端发请求

[5 Ways to Make HTTP Requests in Node.js](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)

- HTTP – the Standard Library
- npm install request@2.81.0
- npm install axios@0.16.2
- npm install superagent@3.5.2
- npm install got@7.1.0

## [node-gyp 安装不下来](https://github.com/nodejs/node-gyp/issues/1927)

maybe this is a trouble with mac

```js
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
```
