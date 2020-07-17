(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{431:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),s("h2",{attrs:{id:"element-closest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-closest"}},[t._v("#")]),t._v(" Element.closest")]),t._v(" "),s("p",[t._v("Element.closest()  方法用来获取：匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回  null。")]),t._v(" "),s("h2",{attrs:{id:"childnode-remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childnode-remove"}},[t._v("#")]),t._v(" ChildNode.remove()")]),t._v(" "),s("p",[t._v("The ChildNode.remove() method removes the object from the tree it belongs to.")]),t._v(" "),s("h2",{attrs:{id:"元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素"}},[t._v("#")]),t._v(" 元素")]),t._v(" "),s("h3",{attrs:{id:"link-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-标签"}},[t._v("#")]),t._v(" link 标签")]),t._v(" "),s("p",[s("code",[t._v("<a href='xxx' target='_black' ></a>")])]),t._v(" "),s("p",[t._v('您的页面链接至使用 target="_blank" 的另一个页面时，新页面将与您的页面在同一个进程上运行。 如果新页面正在执行开销极大的 JavaScript，您的页面性能可能会受影响。此外，target="_blank" 也是一个安全漏洞。新的页面可以通过 window.opener 访问您的窗口对象，并且它可以使用 window.opener.location = newURL 将您的页面导航至不同的网址。')]),t._v(" "),s("p",[t._v("因此需要添加一个属性")]),t._v(" "),s("p",[s("code",[t._v("<a href='xxx' target='_black' rel='noopener' ></a>")])]),t._v(" "),s("p",[t._v("具体的性能分析"),s("a",{attrs:{href:"https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"radio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#radio"}},[t._v("#")]),t._v(" radio")]),t._v(" "),s("p",[s("code",[t._v("input")]),t._v(" elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.")]),t._v(" "),s("h3",{attrs:{id:"label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[t._v("#")]),t._v(" label")]),t._v(" "),s("p",[t._v("label 的 for 属性和 input 的 id 属性相同，点击 label 的时候选择对应的选项")]),t._v(" "),s("p",[t._v("如果其被选中，那么 input.checked 的属性为 false")]),t._v(" "),s("h3",{attrs:{id:"利用-html-form-属性做验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-html-form-属性做验证"}},[t._v("#")]),t._v(" 利用 HTML FORM 属性做验证")]),t._v(" "),s("blockquote",[s("p",[t._v("能用 html 解决的事情就不要取用 js")])]),t._v(" "),s("h3",{attrs:{id:"form-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-validation"}},[t._v("#")]),t._v(" form validation")]),t._v(" "),s("ul",[s("li",[t._v("get the right data, in the right format")]),t._v(" "),s("li",[t._v("protect our users")]),t._v(" "),s("li",[t._v("protect ourselves")])]),t._v(" "),s("h3",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" input")]),t._v(" "),s("h4",{attrs:{id:"type-hidden"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-hidden"}},[t._v("#")]),t._v(" type=hidden")]),t._v(" "),s("p",[t._v("输入框不会显示，但是数据还是可以提交到移动端。（不要用类来隐藏表单）")]),t._v(" "),s("h3",{attrs:{id:"pre"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre"}},[t._v("#")]),t._v(" pre")]),t._v(" "),s("p",[t._v("The HTML "),s("code",[t._v("<pre>")]),t._v(" element represents preformatted text which is to be presented exactly as written in the HTML file.")]),t._v(" "),s("h2",{attrs:{id:"宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宽高"}},[t._v("#")]),t._v(" 宽高")]),t._v(" "),s("h3",{attrs:{id:"窗口的高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#窗口的高度"}},[t._v("#")]),t._v(" 窗口的高度")]),t._v(" "),s("ul",[s("li",[t._v("innerHeight")]),t._v(" "),s("li",[t._v("clientHeight")])]),t._v(" "),s("p",[t._v("为了兼容的写法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"滚动高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滚动高度"}},[t._v("#")]),t._v(" 滚动高度")]),t._v(" "),s("p",[t._v("涉及到 4 个 DOM 属性，clientHeight, offsetHeight, scrollHeight, scrollTop,所有 DOM 元素都有上述 4 各属性，只需要给它固定大小并设置 overflow:scroll 即可表现出来。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("clientHeight: 内部可视区域大小。")]),t._v(" "),s("p",[t._v("returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin")])]),t._v(" "),s("li",[s("p",[t._v("offsetHeight：整个可视区域大小，包括 border 和 scrollbar 在内。")]),t._v(" "),s("p",[t._v("is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.")])]),t._v(" "),s("li",[s("p",[t._v("scrollHeight：元素内容的高度，包括溢出部分。")]),t._v(" "),s("p",[t._v("is a measurement of the height of an element’s content including content not visible on the screen due to overflow")])]),t._v(" "),s("li",[s("p",[t._v("scrollTop：元素内容向上滚动了多少像素，如果没有滚动则为 0。")]),t._v(" "),s("p",[t._v("the number of pixels that the content of an element is scrolled upward.")])])]),t._v(" "),s("h3",{attrs:{id:"获取宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取宽高"}},[t._v("#")]),t._v(" 获取宽高")]),t._v(" "),s("p",[s("code",[t._v("Element.getBoundingClientRect")]),t._v(":returns the size of an element and its position relative to the viewport.Properties other than width and height are relative to the top-left of the viewport.")]),t._v(" "),s("h2",{attrs:{id:"前端搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端搜索"}},[t._v("#")]),t._v(" 前端搜索")]),t._v(" "),s("h3",{attrs:{id:"原生实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生实现"}},[t._v("#")]),t._v(" 原生实现")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("<datalist> element")]),s("OutboundLink")],1),t._v("，不需要 JavaScript 就能实现的本地搜索，可以看一下 MDN ,自己去试一下")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ice-cream-flavors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ice-cream-choice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ice-cream-choice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("datalist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ice-cream-flavors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Chocolate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Coconut"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Strawberry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Vanilla"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("datalist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("通过给 input 添加新的属性，还能有滑块的效果，惊了个呆")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("donation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("donation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("donation_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("step")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("datalist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("donation_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("25"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("50"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("100"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("200"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("datalist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),s("p",[t._v("通过正则表达式进行匹配，筛选出匹配的项即可")]),t._v(" "),s("p",[s("code",[t._v("new RegExp(escapeRegexpString(query), 'i').test(xxx)")])])])}),[],!1,null,null,null);a.default=e.exports}}]);