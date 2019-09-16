# Babel

::: tip babel
babel 是一个 Javascript 编译器，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境。
:::

## 配置方式

1. 在 package.json 中设置 babel 字段。
2. `.babelrc` 文件或`.babelrc.js`
3. `babel.config.js` 文件

[babel 可以放在 package.json 文件里面的](https://babeljs.io/docs/en/babelrc#use-via-packagejson),但是个人觉得放在一个文件(eg:`.babelrc`)里面比较好，比较清楚。

```js
{
    "presets": [
        ["env", {
            "targets": { //指定要转译到哪个环境
                //浏览器环境
                "browsers": ["last 2 versions", "safari >= 7"],
                //node环境
                "node": "6.10", //"current"  使用当前版本的node
            },
             //是否将ES6的模块化语法转译成其他类型
             //参数："amd" | "umd" | "systemjs" | "commonjs" | false，默认为'commonjs'
            "modules": 'commonjs',
            //是否进行debug操作，会在控制台打印出所有插件中的log，已经插件的版本
            "debug": false,
            //强制开启某些模块，默认为[]
            "include": ["transform-es2015-arrow-functions"],
            //禁用某些模块，默认为[]
            "exclude": ["transform-es2015-for-of"],
            //是否自动引入polyfill，开启此选项必须保证已经安装了babel-polyfill
            //参数：Boolean，默认为false.
            "useBuiltIns": false
        }]
    ]
}

```

### presets

预设其实就是一个预先设定的插件列表，官方现在推荐[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env),这是一个智能预设，只要安装这一个 preset，就会根据你设置的目标浏览器，自动将代码中的新特性转换成目标浏览器支持的代码。

### plugins

- plugin-transform-runtime

当我在用 babel 编译时，有些功能需要一些工具函数来辅助实现，比如 class 的编译。如果多个文件中都用到了 class，每一个文件编译后都生成一个工具函数，最后就会产生大量重复代码，平白增加文件体积。而 plugin-transform-runtime 就是为了解决这个问题，这个插件会将这些工具函数转换成引入的形式。

可以看到工具函数是从@babel/runtime 这个包中引入，所以要安装@babel/runtime 这个依赖包，在项目打包的时候才不会报错。

编译时使用了 plugin-transform-runtime，你的项目就要依赖于 babel/runtime，所以这两个东西是一起使用的。

- babel-polyfill

babel 可以转化一些新的特性，但是对于新的内置函数（Promise,Set,Map），静态方法（Array.from,Object.assign），实例方法（Array.prototype.includes）这些就需要 babel-polyfill 来解决，babel-polyfill 会完整模拟一个 ES2015+环境。

## 参考

- [Babel 快速上手使用指南](https://juejin.im/post/5cf45f9f5188254032204df1#heading-0)
- [babel 到底该如何配置？](https://juejin.im/post/59ec657ef265da431b6c5b03#heading-0)
