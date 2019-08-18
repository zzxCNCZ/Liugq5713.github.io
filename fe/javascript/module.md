# 模块化

## 重新导出一个绑定

```js
import { sum } from "./example.js";
export { sum };
```

但是实际上一条语句就足够

```js
export {sum} from './example.js
```

因为之前不想让我每一个编辑的文件的都叫`index.vue`，所以我会专门新建一个 index.js 文件来

## 一下子导出很多文件

我想每一个大型项目都会有一个 utils 文件夹，放着常用的工具函数，我之前是按照功能分成了好几个 js 文件，比如有 `date.js`，`validate.js`，每一次我想去使用的话，可需要引入对应 js 文件的工具函数，很麻烦，需要这样写`import {parseTime} from '@/utils/date.js`。今天看 vue 源码的时候，陡然醒悟，我可以把 utils 文件夹下面所有的工具函数导入到入口文件 index.js 里面，然后全部导出。接下来我使用的话，只要`import {parseTime} from '@/util'`即可。

```js
// 其实就等于
// import * from 'shared/util'
// export *
export * from "shared/util";
export * from "./lang";
export * from "./env";
```
