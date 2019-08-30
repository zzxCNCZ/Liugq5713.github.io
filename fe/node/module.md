# 模块化

## 模块解析

指编译器所要依据的一个流程，用它来找出某个导入操作所引用的具体值

## 导入方式

- 相对导入

相对于导入他的文件来的，并不能解析为一个外部模块声明（一般用于自己写的模块）

- 非相对导入

相对于 baseUrl 或者通过路径映射来进行解析

## 模块解析策略

### 服务端 CommonJS 规范( 同步 ，用于服务端)

NodeJS 使用的规范

#### 相对路径解析

相对路径很简单。 例如，假设有一个文件路径为 /root/src/moduleA.js，包含了一个导入 var x = require("./moduleB"); Node.js 以下面的顺序解析这个导入：

- 将/root/src/moduleB.js 视为文件，检查是否存在。

* 将/root/src/moduleB 视为目录，检查是否它包含 package.json 文件并且其指定了一个"main"模块。 在我们的例子里，如果 Node.js 发现文件 /root/src/moduleB/package.json 包含了{ "main": "lib/mainModule.js" }，那么 Node.js 会引用/root/src/moduleB/lib/mainModule.js。

- 将/root/src/moduleB 视为目录，检查它是否包含 index.js 文件。 这个文件会被隐式地当作那个文件夹下的"main"模块。

#### 非相对模块名解析

还是用上面例子，但假设/root/src/moduleA.js 里使用的是非相对路径导入 var x = require("moduleB");。 Node 则会以下面的顺序去解析 moduleB，直到有一个匹配上。

/root/src/node_modules/moduleB.js

/root/src/node_modules/moduleB/package.json (如果指定了"main"属性)

/root/src/node_modules/moduleB/index.js

/root/node_modules/moduleB.js（向上跳了一级目录）

/root/node_modules/moduleB/package.json (如果指定了"main"属性)

/root/node_modules/moduleB/index.js

/node_modules/moduleB.js（向上跳了一级目录）

/node_modules/moduleB/package.json (如果指定了"main"属性)

/node_modules/moduleB/index.js

Node 会在一个特殊的文件夹 node_modules 里查找你的模块。 node_modules 可能与当前文件在同一级目录下，或者在上层目录里。 Node 会向上级目录遍历，查找每个 node_modules 直到它找到要加载的模块。

### 定义

允许模块通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或 module.exports 来导出需要暴露的接口。

1、exports 是指向的 module.exports 的引用

2、module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}

3、require() 返回的是 module.exports 而不是 exports

## 浏览器端

### AMD（Asynchronous Module Definition）

require.js 基于此规范

对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。

提前执行

### CMD

SeaJS 基于此规范

二者区别

CMD 推崇依赖就近，AMD 推崇依赖前置。

### ES6 模块

尽可能的静态化（模块语法的限制）

export 和 import 的一个限制是 必须在其他语句和函数之外使用
