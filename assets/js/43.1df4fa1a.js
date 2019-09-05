(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{304:function(e,t,r){"use strict";r.r(t);var a=r(38),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"font-family-设置解释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#font-family-设置解释","aria-hidden":"true"}},[e._v("#")]),e._v(" font-family 设置解释")]),e._v(" "),r("p",[e._v("最近在做一个编辑器，原因就是因为微信公众号不能插外链，所以需要一个工具，把外链作为参考链接放在底部。功能我做的差不多了，但是不同的人需求是不一样，审美也不一样。所以需要给这个工具添加一个自定义的功能。所以就从自定义字体开始")]),e._v(" "),r("p",[e._v("但是真的当我想去了解的时候，啊，这么多知识的嘛，打扰了。我们就记住一点点基础的好了")]),e._v(" "),r("h2",{attrs:{id:"无衬线字体-vs-衬线字体"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无衬线字体-vs-衬线字体","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.chrafz.com/3250.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("无衬线字体 vs 衬线字体"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("衬线体的笔画在开始和结束处有额外的修饰，并且笔画横竖粗细不一。这种装饰线的笔画设计多认为来源于古罗马纪念碑上的拉丁字母")]),e._v(" "),r("p",[e._v("非衬线体则是所有笔画粗细一致，并且在笔画的开始和结束处没有额外的修饰线条。在同等字号下，无衬线的字体看上去要比有衬线的更大，结构也更清晰，所以电子设备的屏幕上也偏好使用无衬线字体。")]),e._v(" "),r("p",[e._v("在中文字体界，两个有代表性的分类——宋体和黑体，分别对应着衬线字体和无衬线字体。")]),e._v(" "),r("p",[e._v("PS：查阅的过程中还了解到一个"),r("a",{attrs:{href:"https://www.zhihu.com/question/60211703",target:"_blank",rel:"noopener noreferrer"}},[e._v("小知识"),r("OutboundLink")],1),e._v("。chrome 限制了最小字号 12px，小于 12px 的字号显示为 12px。但是我自己试了下，应该最小是 "),r("code",[e._v("9px")]),e._v("不知道是不是后来 chrome 修改了限制")]),e._v(" "),r("p",[e._v("还有一篇"),r("a",{attrs:{href:"https://cdc.tencent.com/2015/07/20/%E7%BB%99%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AD%97%E4%BD%93%E8%AF%BE%EF%BC%88%E4%B8%80%EF%BC%89-%E8%8B%B1%E6%96%87%E5%AD%97%E4%BD%93%E5%9F%BA%E7%A1%80/",target:"_blank",rel:"noopener noreferrer"}},[e._v("字体基础课"),r("OutboundLink")],1),e._v("，看了就忘记的那种，有需要的读者可以自己去看")]),e._v(" "),r("h2",{attrs:{id:"网页安全字体"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网页安全字体","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.w3schools.com/cssref/css_websafe_fonts.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("网页安全字体"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("font-family 属性应该包含多个字体名称供浏览器筛选，以确保浏览器/操作系统之间的最大兼容性。如果浏览器不支持第一种字体，它会尝试下一种字体。从您想要的字体开始，以一般的字体结束，让浏览器在通用系列中选择类似的字体")]),e._v(" "),r("p",[r("code",[e._v("materialize.css")]),e._v("里面"),r("code",[e._v("font-family")]),e._v("为 "),r("code",[e._v("$font-stack")]),e._v("，其值为"),r("code",[e._v('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;')])]),e._v(" "),r("p",[e._v("嗯，"),r("code",[e._v("materialize.css")]),e._v("和上面说的是不是不太一样，"),r("code",[e._v("-apple-system")]),e._v("是什么东西？我查了一下，有"),r("a",{attrs:{href:"https://css-tricks.com/snippets/css/system-font-stack/",target:"_blank",rel:"noopener noreferrer"}},[e._v("相关文章解释"),r("OutboundLink")],1),e._v("，这种做法还是挺高明的，尽量去"),r("a",{attrs:{href:"https://wptavern.com/wordpress-4-6-to-drop-open-sans-in-the-admin-in-favor-of-system-fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用系统的字体库"),r("OutboundLink")],1),e._v("。毕竟 Windows，Android，OS X，iOS，Firefox OS 和各种版本的 Linux 都拥有自己的（好的）系统 UI 字体")]),e._v(" "),r("p",[e._v("Chrome 和 Safari  发布了  “system-ui”，这是一个通用字体系列，可用于代替"),r("code",[e._v("$font-stack")]),e._v("中的“-apple-system”和“BlinkMacSystemFont”")]),e._v(" "),r("p",[e._v("这样你就可以通过"),r("code",[e._v("font-family")]),e._v("属性，对每一个元素进行这样子的字体定义。很不错的方法。缺点就是每次都要写这么一长串，非常麻烦")]),e._v(" "),r("p",[e._v("同样的，"),r("code",[e._v("$font-stack")]),e._v("里面的"),r("code",[e._v("Oxygen Sans")]),e._v(" (for GNU+Linux 操作系统) and "),r("code",[e._v("Cantarell")]),e._v(" (created for the GNOME  操作系统)")]),e._v(" "),r("p",[r("code",[e._v("$font-stack")]),e._v(" 最后使用"),r("code",[e._v("sans-serif;")]),e._v("保底。我个人真的很喜欢无衬线字体，看起来比较舒适")]),e._v(" "),r("p",[e._v("PS: 此方法仅应用于 font-family 属性而不适用于 font 简写")]),e._v(" "),r("p",[e._v("PS: 我自己使用的前端 css 库是"),r("code",[e._v("materialize.css")]),e._v("，我之前还非常贴心的又引入了"),r("code",[e._v("normalize.css")]),e._v("，后来我发现"),r("code",[e._v("materialize.css")]),e._v("已经引入了"),r("code",[e._v("normalize.css v7.0.0")]),e._v("。真的是画蛇添足，写代码不过脑子")])])},[],!1,null,null,null);t.default=s.exports}}]);