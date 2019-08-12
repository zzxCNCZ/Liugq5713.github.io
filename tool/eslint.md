---
title: 代码检测 Eslint
date: 2019-04-01T07:28:58.483Z

categories: ["tool"]
---

## [eslint 配置](https://gist.github.com/Liugq5713/4a13d1d1f89ffaadf925bbbeac2cdf8b)

### 在 package.json 文件中配置

```js
 "eslintConfig": {
    "extends": 'airbnb-base',
    "env": {
      "browser": true,
      "node": true,
      "jest": true
    },
    "globals": {
      "CONFIG": false,
    }
  },
```

### eslint 自动修复

> eslint 保存时自动修复可以配在 vscode 编辑器里面，但是多人协作，你让人家也要改编辑器配置真的是太麻烦了

[eslint](https://github.com/webpack-contrib/eslint-loader)

### 忽略 eslint

> eslint 很有用，但是有时候又显得不近人情，所以了解一下忽略它的方法

#### [Inline configuration comments](https://eslint.org/docs/user-guide/command-line-interface#inline-configuration-comments)

- /\* eslint-disable \*/
- // eslint-disable-next-line

#### [Ignoring files](https://eslint.org/docs/user-guide/command-line-interface#ignoring-files-from-linting)

.eslintignore

#### [Specifying Globals](https://eslint.org/docs/user-guide/configuring#specifying-globals)

> 当你在一个 js 文件里面使用全局变量的时候，就会报 undefined 的错误。这个十分的常用

在 config 文件里面定义 globals 字段，并且在其中声明你所定义的全局变量。ture 代表其可以被覆写，false 代表其不可以

```js
{
    "globals": {
        "var1": true,
        "var2": false
    }
}
```

### [与 prettier 进行配合](https://blog.shenfq.com/2018/06/18/%E4%BD%BF%E7%94%A8ESLint+Prettier%E6%9D%A5%E7%BB%9F%E4%B8%80%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC/)

> prettier 和 eslint 都有代码格式化的功能，但是有的时候，两者是冲突的。但是为了团队代码风格的统一，代码更加的规范，这两个工具我都要，解决方案只能是一方服从另一方

### [prettier 与 eslint 工具配合]

安装插件：

```js
npm i -D prettier
//eslint 的prettier插件，对比格式化前和用 Prettier 格式化后的代码，有不一致的地方就会报错
npm i -D eslint-plugin-prettier
//eslint 的prettier配置,[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#special-rules)
npm i -D eslint-config-prettier
```

```js
//.eslintrc.js
{
  extends: [
    'standard', //使用 standard 做代码规范
    "prettier",
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## vscode 的 eslint 设置

```js
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.options": {
    "plugins": ["vue"]
  },
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true
```

## eslint: error Parsing error: The keyword 'const' is reserved

::: tip ESLint defaults to ES5 syntax-checking.

You'll want to override to the latest well-supported version of JavaScript.Try adding a .eslintrc file to your project. Inside it:

```js
{
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "env": {
    "es6": true
  }
}
```

:::
