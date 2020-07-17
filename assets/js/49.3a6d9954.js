(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{400:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-攻击"}},[t._v("#")]),t._v(" WEB 攻击")]),t._v(" "),s("h2",{attrs:{id:"xss（-cross-site-scripting-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss（-cross-site-scripting-）"}},[t._v("#")]),t._v(" XSS（ Cross-site scripting ）")]),t._v(" "),s("p",[t._v("代码注入的一种")]),t._v(" "),s("ul",[s("li",[t._v("存储型\n恶意脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器传回并执行，影响范围比反射型和 DOM 型 XSS 更大。存储型 XSS 攻击的原因仍然是没有做好数据过滤：前端提交数据至服务端时，没有做好过滤；服务端在接受到数据时，在存储之前，没有做过滤；前端从服务端请求到数据，没有过滤输出。")]),t._v(" "),s("li",[t._v("反射型 Reflected XSS\n当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web 服务器将注入脚本，比如一个错误信息，搜索结果等，未进行过滤直接返回到用户的浏览器上。")]),t._v(" "),s("li",[t._v("DOM 型\n前端 JavaScript 代码不够严谨，把不可信的内容插入到了页面。在使用 .innerHTML、.outerHTML、.appendChild、document.write()等 API 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，尽量使用 .innerText、.textContent、.setAttribute() 等")])]),t._v(" "),s("p",[t._v("如何防范")]),t._v(" "),s("ul",[s("li",[t._v("HTML 转义")]),t._v(" "),s("li",[t._v("在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等")]),t._v(" "),s("li",[t._v("HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。")])]),t._v(" "),s("h2",{attrs:{id:"csrf-cross-site-request-forgery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-cross-site-request-forgery"}},[t._v("#")]),t._v(" CSRF( Cross-site request forgery )")]),t._v(" "),s("p",[t._v("是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法，如他的名字：伪造请求")]),t._v(" "),s("p",[t._v("如何防范")]),t._v(" "),s("p",[t._v("可以从两点出发，一是 保证 get 请求没有副作用，二是确保非 GET 的请求仅仅来自你的客户端")]),t._v(" "),s("ul",[s("li",[t._v("检查 Referer 字段,HTTP 头中有一个 Referer 字段，这个字段用以标明请求来源于哪个地址。通常来讲，用户提交的请求，referer 应该是来来自站内地址，所以如果发现 referer 中地址异常，那么很可能是遭到了 CSRF 攻击")]),t._v(" "),s("li",[t._v("避免登录的 session 长时间存储在客户端中")]),t._v(" "),s("li",[t._v("关键请求使用验证码或者 token 机制。在一些十分关键的操作，比如交易付款环节。这种请求中，加入验证码，可以防止被恶意用户攻击。")])]),t._v(" "),s("h2",{attrs:{id:"点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),s("p",[t._v("点击劫持是指在一个 Web 页面中隐藏了一个透明的 iframe，用外层假页面诱导用户点击，实际上是在隐藏的 frame 上触发了点击事件进行一些用户不知情的操作")]),t._v(" "),s("p",[t._v("如何防御")]),t._v(" "),s("h3",{attrs:{id:"frame-busting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frame-busting"}},[t._v("#")]),t._v(" frame busting")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("需要注意的是: HTML5 中 iframe 的 sandbox 属性、IE 中 iframe 的 security 属性等，都可以限制 iframe 页面中的 JavaScript 脚本执行，从而可以使得 frame busting 失效")]),t._v(" "),s("h3",{attrs:{id:"x-frame-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options"}},[t._v("#")]),t._v(" X-Frame-Options")]),t._v(" "),s("p",[t._v("X-FRAME-OPTIONS 是微软提出的一个 http 头，专门用来防御利用 iframe 嵌套的点击劫持攻击。并且在 IE8、Firefox3.6、Chrome4 以上的版本均能很好的支持。\n可以设置为以下值:")]),t._v(" "),s("ul",[s("li",[t._v("DENY: 拒绝任何域加载")]),t._v(" "),s("li",[t._v("SAMEORIGIN: 允许同源域下加载")]),t._v(" "),s("li",[t._v("ALLOW-FROM: 可以定义允许 frame 加载的页面地址")])]),t._v(" "),s("h3",{attrs:{id:"content-security-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[t._v("#")]),t._v(" Content Security Policy")]),t._v(" "),s("p",[t._v("It is designed in such a way that website authors can whitelist individual domains from which resources (like scripts, stylesheets, and fonts) can be loaded, and also domains that are permitted to embed a page.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The page cannot be displayed in a frame, regardless of the site attempting to do so.")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" frame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ancestors "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The page can only be displayed in a frame on the same origin as the page itself.")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" frame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ancestors "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'self'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The page can only be displayed in a frame on the specified origins.")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" frame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ancestors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("uri"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tech.meituan.com/2018/09/27/fe-security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（一）：如何防止 XSS 攻击？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（二）：如何防止 CSRF 攻击？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.hacksplaining.com/lessons",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络安全的教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5cd6ad7a51882568d3670a8e",target:"_blank",rel:"noopener noreferrer"}},[t._v("寒冬求职之你必须要懂的 Web 安全"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);