(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{517:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[t._v("#")]),t._v(" diff 算法")]),t._v(" "),a("h2",{attrs:{id:"虚拟-dom-和-真实-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-和-真实-dom"}},[t._v("#")]),t._v(" 虚拟 DOM 和 真实 DOM")]),t._v(" "),a("p",[t._v("虚拟 DOM 是对复杂 DOM 对象的提取，用对象的形式模拟其树状的结构，代码示例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("JS Daily Question"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Converting to VNode is similar to the following")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JS Daily Question"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"虚拟-dom-优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-优点"}},[t._v("#")]),t._v(" 虚拟 DOM 优点")]),t._v(" "),a("ul",[a("li",[t._v("可以自己控制虚拟 DOM 何时渲染")]),t._v(" "),a("li",[t._v("允许你最小化 DOM 更新次数来优化网页应用的性能，保证性能的下限")]),t._v(" "),a("li",[t._v("无需手动操作 DOM")]),t._v(" "),a("li",[t._v("跨平台")])]),t._v(" "),a("h2",{attrs:{id:"如何比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何比较"}},[t._v("#")]),t._v(" 如何比较")]),t._v(" "),a("p",[t._v("vnode 的简单属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// body下的 <div id="v" class="classA"><div> 对应的 oldVnode 就是')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  div  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对真实的节点的引用，本例中就是document.querySelector('#id.classA')")]),t._v("\n  tagName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DIV'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//节点的标签")]),t._v("\n  sel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div#v.classA'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//节点的选择器")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个存储节点属性的对象，对应节点的el[prop]属性，例如onclick , style")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存储子节点的数组，每个子节点也是vnode结构")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果是文本节点，对应文本节点的textContent，否则为null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("先判断是否相同")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// key相同，节点选择器也要相同，才能算完全相等的一个节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sel\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),a("ul",[a("li",[t._v("仅仅同级比较，不是跨层比较")]),t._v(" "),a("li",[t._v("比较的情况\n"),a("ul",[a("li",[t._v("if (oldVnode === vnode) Their quotations are consistent and can be considered unchanged.")]),t._v(" "),a("li",[t._v("if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text)Comparisons of text nodes that need to be modified will be invokedNode.textContent = vnode.text。")]),t._v(" "),a("li",[t._v("if( oldCh && ch && oldCh !== ch )Both nodes have child nodes, and they are different, so we call themupdateChildrenFunction comparison sub-nodes, which is the core of diff")]),t._v(" "),a("li",[t._v("else if (ch) Only new nodes have child nodes. CallcreateEle(vnode)，vnode.elOld DOM nodes have been referenced.createEleThe function adds child nodes to the old DOM node.")]),t._v(" "),a("li",[t._v("else if (oldCh) The new node has no sub-nodes and the old node has sub-nodes, so the old node can be deleted directly.")])])])]),t._v(" "),a("h3",{attrs:{id:"key-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-的作用"}},[t._v("#")]),t._v(" key 的作用")]),t._v(" "),a("p",[t._v("没有 key 的情况，vue 将会从头")]),t._v(" "),a("p",[t._v("如果有 key，将会生成 key 的对象，oldKeyToIdx")]),t._v(" "),a("p",[t._v("// same key but different element. treat as new element")])])}),[],!1,null,null,null);s.default=n.exports}}]);