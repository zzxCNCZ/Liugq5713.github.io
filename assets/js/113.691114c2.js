(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{371:function(a,t,s){"use strict";s.r(t);var e=s(38),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("更改 webpack 配置之后，一定要记得重新编译一下")])]),a._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),s("h2",{attrs:{id:"webpack-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 打包")]),a._v(" "),s("p",[a._v("webpack 构建过程")]),a._v(" "),s("p",[a._v("从 entry 里配置的 module 开始递归解析 entry 依赖的所有 module")]),a._v(" "),s("p",[a._v("每找到一个 module，就会根据配置的 loader 去找对应的转换规则\n对 module 进行转换后，再解析出当前 module 依赖的 module\n这些模块会以 entry 为单位分组，一个 entry 和其所有依赖的 module 被分到一个组 Chunk\n最后 webpack 会把所有 Chunk 转换成文件输出\n在整个流程中 webpack 会在恰当的时机执行 plugin 里定义的逻辑")]),a._v(" "),s("h3",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash","aria-hidden":"true"}},[a._v("#")]),a._v(" hash")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("hash")]),a._v(" "),s("p",[a._v("hash 是整个编译过程产生的一个总的 hash 值，而不是单个文件的 hash 值，项目中任何一个文件的改动，都会造成这个 hash 值的改变")])]),a._v(" "),s("li",[s("p",[a._v("chunkhash")]),a._v(" "),s("p",[a._v("代码中引用的文件（js、css、图片等）会根据配置合并为一个或多个包，我们称一个包为 chunk。 每个 chunk 包含多个 modules。无论是否是 js，webpack 都将引入的文件视为一个 module")]),a._v(" "),s("p",[a._v("[chunkhash]：这个 chunk 的 hash 值，文件发生变化时该值也会变。使用 [chunkhash] 作为文件名可以防止浏览器读取旧的缓存文件")])]),a._v(" "),s("li",[s("p",[a._v("contenthash")]),a._v(" "),s("p",[a._v("[contenthash] 你可以简单理解为 moduleId + content 生成的 hash 因此一个 chunk 中的多个 module 有自己的 [contenthash].")])])]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("chunkhash 和 contenthash 的主要应用场景是什么呢？")]),a._v(" "),s("p",[a._v("在实际在项目中，我们一般会把项目中的 css 都抽离出对应的 css 文件来加以引用。如果我们使用 chunkhash，当我们改了 css 代码之后，会发现 css 文件 hash 值改变的同时，js 文件的 hash 值也会改变。这时候，contenthash 就派上用场了")])]),a._v(" "),s("h2",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本配置")]),a._v(" "),s("h3",{attrs:{id:"entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry","aria-hidden":"true"}},[a._v("#")]),a._v(" entry")]),a._v(" "),s("p",[a._v('学习 webpack 的 entry 和 output 一个是相对路径的写法，一个类似是 path.join("**dirname","public")的写法。我就是好奇为啥 output 不采用相对路径的写法，感觉不是更简单吗？\n其实不然，entry is not a relative path, it\'s a module request。webpack 应该是执行了类似 require("./index.js")的操作。 output 采用 path.join("**dirname","public") 的写法，可以解决在不同操作系统下，路径写法不同的问题。\n且也顺便了解了一下 **dirname 与 ./ 的区别： - ./ refers to the current working directory - **dirname is always the directory of the current file.')]),a._v(" "),s("h3",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader","aria-hidden":"true"}},[a._v("#")]),a._v(" loader")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("loader")]),a._v("的顺序是从右至左的，应该是函数式的写法，你可以和"),s("code",[a._v("JavaScript")]),a._v("的"),s("code",[a._v("reduce")]),a._v("函数类比")])]),a._v(" "),s("h4",{attrs:{id:"file-loader-vs-url-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-loader-vs-url-loader","aria-hidden":"true"}},[a._v("#")]),a._v(" file-loader vs url-loader")]),a._v(" "),s("p",[a._v("file-loader 和 url-loader ，url-loader 是对 file-loader 的一层封装，小图片就可以直接转化成 base64 编码了，大一点的图片呢，便是和 file-loader 一样，给它哈希一个字符串作为文件名（ 这个作用是保证项目中的资源都是新的 ）")]),a._v(" "),s("h4",{attrs:{id:"css-里面的-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-里面的-loader","aria-hidden":"true"}},[a._v("#")]),a._v(" css 里面的 loader")]),a._v(" "),s("ol",[s("li",[a._v("sass-loader - Transforms Sass to CSS. (Input: Sass, Output: CSS)")]),a._v(" "),s("li",[a._v("css-loader - Transforms CSS to a JavaScript module. (Input: CSS, Output: JavaScript)")]),a._v(" "),s("li",[a._v("style-loader - Injects the CSS, that is exported by the JavaScript module, into a "),s("code",[a._v("<style>")]),a._v("tag at runtime. (Input: JavaScript, Output: JavaScript).")])]),a._v(" "),s("h3",{attrs:{id:"resolve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve","aria-hidden":"true"}},[a._v("#")]),a._v(" resolve")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/",target:"_blank",rel:"noopener noreferrer"}},[a._v("webpack resolve"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("该配置帮你处理模块如何被解析的问题。\n在项目比较复杂的时候，可以很方便的添加路径别名。")]),a._v(" "),s("h3",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias","aria-hidden":"true"}},[a._v("#")]),a._v(" alias")]),a._v(" "),s("blockquote",[s("p",[a._v("webpack 别名在 eslint 中不能解析，有个报错信息杵在那里，怎么看怎么不舒服。")])]),a._v(" "),s("p",[a._v("使用 eslint-import-resolver-webpack，告诉 eslint，使用 webpack 的 resolver 来检查 package 是否引用正确")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//在eslint配置文件里面添加")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"import/resolver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./build/webpack.common.js"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化","aria-hidden":"true"}},[a._v("#")]),a._v(" 优化")]),a._v(" "),s("h3",{attrs:{id:"hashedmoduleidsplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashedmoduleidsplugin","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://webpack.js.org/plugins/hashed-module-ids-plugin/",target:"_blank",rel:"noopener noreferrer"}},[a._v("HashedModuleIdsPlugin"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("This plugin will cause hashes to be based on the relative path of the module, generating a four character string as the module id. Suggested for use in production.")]),a._v(" "),s("h3",{attrs:{id:"将-css-抽出来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将-css-抽出来","aria-hidden":"true"}},[a._v("#")]),a._v(" 将 css 抽出来")]),a._v(" "),s("blockquote",[s("p",[a._v("图标加载过慢，不能将 CSS 打包到一个 bundle 上，另外，antd,fontawesome 都是固定，基本不变的，可以做缓存嘛，这些都是静态资源，所以我打算将其打出来。")])]),a._v(" "),s("p",[a._v("网上查到的教程都是 基于 extract-text-webpack-plugin 这个插件，但是 webpack4 已经为 css 单独准备了一个插件。")]),a._v(" "),s("h3",{attrs:{id:"es6-模块处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块处理","aria-hidden":"true"}},[a._v("#")]),a._v(" ES6 模块处理")]),a._v(" "),s("p",[a._v("我们目前的配置，babel 会把 ES6 模块定义转为 CommonJS 定义，但 webpack 自己可以处理 import 和 export， 而且 webpack 处理 import 时会做代码优化，把没用到的部分代码删除掉。因此我们通过 babel 提供的 modules: false 选项把 ES6 模块转为 CommonJS 模块的功能给关闭掉。")]),a._v(" "),s("h3",{attrs:{id:"控制台修饰插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制台修饰插件","aria-hidden":"true"}},[a._v("#")]),a._v(" 控制台修饰插件")]),a._v(" "),s("ul",[s("li",[a._v("webpack-dashboard")]),a._v(" "),s("li",[a._v("nyan-progress-webpack-plugin")])]),a._v(" "),s("h2",{attrs:{id:"webpack-配置问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置问题","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 配置问题")]),a._v(" "),s("h3",{attrs:{id:"resolve-后缀没有填好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-后缀没有填好","aria-hidden":"true"}},[a._v("#")]),a._v(" resolve 后缀没有填好")]),a._v(" "),s("blockquote",[s("p",[a._v("webpack 遇到了一个 bug,就是各种模块解析不出来")])]),a._v(" "),s("p",[a._v("我 "),s("code",[a._v("webpack")]),a._v(" 的配置有问题，配置 "),s("code",[a._v("resolve")]),a._v(" 的时候脑抽了")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 配置这个的时候，我忘记在后缀前面加点了。将 js ===> .js")]),a._v("\nextensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.jsx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"进阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶","aria-hidden":"true"}},[a._v("#")]),a._v(" 进阶")]),a._v(" "),s("h3",{attrs:{id:"如何实现模块的动态加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现模块的动态加载","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何实现模块的动态加载")]),a._v(" "),s("p",[a._v("很简单，"),s("code",[a._v("import()")]),a._v("操作返回一个 promise，你用一个函数包装一下,配合 async/await，动态加载妥妥的")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("getModule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./wait.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" load "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("isNeed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" module"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("import()")]),a._v("还没有正式进入标准, 需要使用"),s("a",{attrs:{href:"https://babeljs.io/docs/plugins/preset-stage-2/",target:"_blank",rel:"noopener noreferrer"}},[a._v("babel-preset-stage-2"),s("OutboundLink")],1),a._v("来支持")]),a._v(" "),s("h2",{attrs:{id:"webpack-配置文件将-host-设置为-0-0-0-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置文件将-host-设置为-0-0-0-0","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 配置文件将 host 设置为 0.0.0.0")]),a._v(" "),s("p",[a._v("其作用是就是你不仅可以在电脑上看到你的网页，你也可以在手机上访问你的网页")]),a._v(" "),s("p",[a._v("eg:\n电脑访问 localhost:8080 手机访问 192.168.134.138:8080（192.168.134.138 为你电脑的 IP）查看相同的页面")]),a._v(" "),s("p",[a._v("IPv4 中，0.0.0.0 被设计用来指定一个无效的未知的不可用的目标，在不同的上下文中有不同的含义。")]),a._v(" "),s("ul",[s("li",[a._v("作为主机地址\n"),s("ul",[s("li",[a._v("当一台主机还没有被分配一个 IP 地址的时候，用于表示主机本身")]),a._v(" "),s("li",[a._v("用作服务端，表示本机上的任意 IPV4 地址")]),a._v(" "),s("li",[a._v("可表示目标机器不可用。")])])]),a._v(" "),s("li",[a._v("作为默认的路由\n"),s("ul",[s("li",[a._v("0.0.0.0 表示的是默认路由，即当路由表中没有找到完全匹配的路由的时候所对应的路由。")])])])]),a._v(" "),s("h2",{attrs:{id:"exports-vs-module-exports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exports-vs-module-exports","aria-hidden":"true"}},[a._v("#")]),a._v(" exports vs module.exports")]),a._v(" "),s("ul",[s("li",[a._v("module.exports 初始值为一个空对象 {}")]),a._v(" "),s("li",[a._v("exports 是指向的 module.exports 的引用")]),a._v(" "),s("li",[a._v("require() 返回的是 module.exports 而不是 exports")])]),a._v(" "),s("h2",{attrs:{id:"webpack-别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-别名","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 别名")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/",target:"_blank",rel:"noopener noreferrer"}},[a._v("webpack resolve"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("该配置帮你处理模块如何被解析的问题。在项目比较复杂的时候，可以很方便的添加路径别名。")]),a._v(" "),s("p",[a._v("别名个人感觉还是用特殊符号或者一些共识的 alias 。如果是一个单词，不熟悉的可能直接就懵了（一些情况下和直接引用一个库非常像）")]),a._v(" "),s("p",[a._v("比如我司的神作:\n"),s("code",[a._v("import { something } from 'router'")]),a._v("十分的让人误解。其实他引入的是 "),s("code",[a._v("@/router/index.js")]),a._v("里面的内容")]),a._v(" "),s("h2",{attrs:{id:"拆包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆包","aria-hidden":"true"}},[a._v("#")]),a._v(" 拆包")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("optimization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  splitChunks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    cacheGroups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("cacheGroups: 我们用于定义规则，把多个 chunks 打进一个文件里面")])])},[],!1,null,null,null);t.default=r.exports}}]);