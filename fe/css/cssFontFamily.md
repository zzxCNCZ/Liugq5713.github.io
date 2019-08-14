# font-family 设置解释

最近在做一个编辑器，原因就是因为微信公众号不能插外链，所以需要一个工具，把外链作为参考链接放在底部。功能我做的差不多了，但是不同的人需求是不一样，审美也不一样。所以需要给这个工具添加一个自定义的功能。所以就从自定义字体开始

但是真的当我想去了解的时候，啊，这么多知识的嘛，打扰了。我们就记住一点点基础的好了

## [无衬线字体 vs 衬线字体](https://www.chrafz.com/3250.html)

衬线体的笔画在开始和结束处有额外的修饰，并且笔画横竖粗细不一。这种装饰线的笔画设计多认为来源于古罗马纪念碑上的拉丁字母

非衬线体则是所有笔画粗细一致，并且在笔画的开始和结束处没有额外的修饰线条。在同等字号下，无衬线的字体看上去要比有衬线的更大，结构也更清晰，所以电子设备的屏幕上也偏好使用无衬线字体。

在中文字体界，两个有代表性的分类——宋体和黑体，分别对应着衬线字体和无衬线字体。

PS：查阅的过程中还了解到一个[小知识](https://www.zhihu.com/question/60211703)。chrome 限制了最小字号 12px，小于 12px 的字号显示为 12px。但是我自己试了下，应该最小是 `9px`不知道是不是后来 chrome 修改了限制

还有一篇[字体基础课](https://cdc.tencent.com/2015/07/20/%E7%BB%99%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AD%97%E4%BD%93%E8%AF%BE%EF%BC%88%E4%B8%80%EF%BC%89-%E8%8B%B1%E6%96%87%E5%AD%97%E4%BD%93%E5%9F%BA%E7%A1%80/)，看了就忘记的那种，有需要的读者可以自己去看

## [网页安全字体](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

font-family 属性应该包含多个字体名称供浏览器筛选，以确保浏览器/操作系统之间的最大兼容性。如果浏览器不支持第一种字体，它会尝试下一种字体。从您想要的字体开始，以一般的字体结束，让浏览器在通用系列中选择类似的字体

`materialize.css`里面`font-family`为 `$font-stack`，其值为`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;`

嗯，`materialize.css`和上面说的是不是不太一样，`-apple-system`是什么东西？我查了一下，有[相关文章解释](https://css-tricks.com/snippets/css/system-font-stack/)，这种做法还是挺高明的，尽量去[使用系统的字体库](https://wptavern.com/wordpress-4-6-to-drop-open-sans-in-the-admin-in-favor-of-system-fonts)。毕竟 Windows，Android，OS X，iOS，Firefox OS 和各种版本的 Linux 都拥有自己的（好的）系统 UI 字体

Chrome 和 Safari  发布了  “system-ui”，这是一个通用字体系列，可用于代替`$font-stack`中的“-apple-system”和“BlinkMacSystemFont”

这样你就可以通过`font-family`属性，对每一个元素进行这样子的字体定义。很不错的方法。缺点就是每次都要写这么一长串，非常麻烦

同样的，`$font-stack`里面的`Oxygen Sans` (for GNU+Linux 操作系统) and `Cantarell` (created for the GNOME  操作系统)

`$font-stack` 最后使用`sans-serif;`保底。我个人真的很喜欢无衬线字体，看起来比较舒适

PS: 此方法仅应用于 font-family 属性而不适用于 font 简写

PS: 我自己使用的前端 css 库是`materialize.css`，我之前还非常贴心的又引入了`normalize.css`，后来我发现`materialize.css`已经引入了`normalize.css v7.0.0`。真的是画蛇添足，写代码不过脑子
