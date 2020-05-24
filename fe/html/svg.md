# svg

::: tip SVG
SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真
:::

## image / background-image

直接使用，但是缺点就是没有办法使用 css 控制.

## svg 转为 component 组件

`"build:icons": "./node_modules/.bin/svgr --icon --typescript -d src/app/components/Icons ./src/app/assets/icons "`

Svgr 把 svg 转为 组件

## 参考

- [SVG 图像入门教程](https://www.ruanyifeng.com/blog/2018/08/svg.html)
- [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
