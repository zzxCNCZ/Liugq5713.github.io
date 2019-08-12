---
title: Babel
date: 2018-12-29T08:05:48.207Z

categories: ["tool"]
---

其实 [babel 也是可以放在 package.json 文件里面的](https://babeljs.io/docs/en/babelrc#use-via-packagejson),但是现在个人还是该绝放在一个文件里面比较好，比较清楚。

```js
 "babel": {
    "presets": [
      [
        "env",
        {
          "loose": true,
          "modules": false
        }
      ],
      "stage-2"
    ]
  },
```
