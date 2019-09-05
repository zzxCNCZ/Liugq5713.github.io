(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{314:function(a,t,e){"use strict";e.r(t);var v=e(38),_=Object(v.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"内置对象-正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置对象-正则表达式","aria-hidden":"true"}},[a._v("#")]),a._v(" 内置对象 正则表达式")]),a._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),e("h3",{attrs:{id:"元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元字符","aria-hidden":"true"}},[a._v("#")]),a._v(" 元字符")]),a._v(" "),e("ul",[e("li",[a._v(". 匹配除换行符以外的任意字符")]),a._v(" "),e("li",[a._v("\\w 匹配字母或数字或下划线或汉字")]),a._v(" "),e("li",[a._v("\\s 匹配任意的空白符")]),a._v(" "),e("li",[a._v("\\d 匹配数字")]),a._v(" "),e("li",[a._v("\\b 匹配单词的开始或结束")]),a._v(" "),e("li",[a._v("^ 匹配字符串的开始")]),a._v(" "),e("li",[a._v("$ 匹配字符串的结束")])]),a._v(" "),e("h3",{attrs:{id:"重复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重复","aria-hidden":"true"}},[a._v("#")]),a._v(" 重复")]),a._v(" "),e("ul",[e("li",[e("ul",[e("li",[a._v("重复零次或更多次")])])]),a._v(" "),e("li",[e("ul",[e("li",[a._v("重复一次或更多次")])])]),a._v(" "),e("li",[a._v("? 重复零次或一次")]),a._v(" "),e("li",[a._v("{n} 重复 n 次")]),a._v(" "),e("li",[a._v("{n,} 重复 n 次或更多次")]),a._v(" "),e("li",[a._v("{n,m} 重复 n 到 m 次")])]),a._v(" "),e("h3",{attrs:{id:"字符集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符集","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符集")]),a._v(" "),e("p",[a._v("字符集也叫做字符类. 方括号用来指定一个字符集. 在方括号中使用连字符来指定字符集的范围. 在方括号中的字符集不关心顺序. 例如, 表达式[Tt]he 匹配 the 和 The")]),a._v(" "),e("h3",{attrs:{id:"分枝条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分枝条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 分枝条件")]),a._v(" "),e("p",[a._v("具体方法是用|把不同的规则分隔开")]),a._v(" "),e("h3",{attrs:{id:"特征标群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征标群","aria-hidden":"true"}},[a._v("#")]),a._v(" (...) 特征标群")]),a._v(" "),e("p",[a._v("特征标群是一组写在 (...) 中的子模式. 例如之前说的 {} 是用来表示前面一个字符出现指定次数. 但如果在 {} 前加入特征标群则表示整个标群内的字符重复 N 次. 例如, 表达式 (ab)* 匹配连续出现 0 或更多个 ab.")]),a._v(" "),e("h3",{attrs:{id:"反义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反义","aria-hidden":"true"}},[a._v("#")]),a._v(" 反义")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("\\W")]),a._v(" 匹配任意不是字母，数字，下划线，汉字的字符")]),a._v(" "),e("li",[e("code",[a._v("\\S")]),a._v(" 匹配任意不是空白符的字符")]),a._v(" "),e("li",[e("code",[a._v("\\D")]),a._v(" 匹配任意非数字的字符")]),a._v(" "),e("li",[e("code",[a._v("\\B")]),a._v(" 匹配不是单词开头或结束的位置")]),a._v(" "),e("li",[a._v("[^x] 匹配除了 x 以外的任意字符")]),a._v(" "),e("li",[a._v("[^aeiou] 匹配除了 aeiou 这几个字母以外的任意字符")])]),a._v(" "),e("h2",{attrs:{id:"后向引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后向引用","aria-hidden":"true"}},[a._v("#")]),a._v(" 后向引用")]),a._v(" "),e("p",[a._v("使用小括号指定一个子表达式后，匹配这个子表达式的文本(也就是此分组捕获的内容)可以在表达式或其它程序中作进一步的处理。")]),a._v(" "),e("h2",{attrs:{id:"特殊字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符","aria-hidden":"true"}},[a._v("#")]),a._v(" 特殊字符")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("\\b")]),a._v(" 通常是单词分界位置，但如果在字符类里使用代表退格")]),a._v(" "),e("li",[e("code",[a._v("\\t")]),a._v(" 制表符，Tab")]),a._v(" "),e("li",[e("code",[a._v("\\r")]),a._v(" 回车")]),a._v(" "),e("li",[e("code",[a._v("\\v")]),a._v(" 竖向制表符")]),a._v(" "),e("li",[e("code",[a._v("\\f")]),a._v(" 换页符")]),a._v(" "),e("li",[e("code",[a._v("\\n")]),a._v(" 换行符")]),a._v(" "),e("li",[e("code",[a._v("\\e")]),a._v(" Escape")])]),a._v(" "),e("h2",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 方法")]),a._v(" "),e("h3",{attrs:{id:"regexp-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp-test","aria-hidden":"true"}},[a._v("#")]),a._v(" RegExp.test()")]),a._v(" "),e("p",[a._v("know if a string matches a regular expression RegExp")]),a._v(" "),e("h3",{attrs:{id:"regexp-exec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp-exec","aria-hidden":"true"}},[a._v("#")]),a._v(" RegExp.exec()")]),a._v(" "),e("p",[a._v("only want the first match found")]),a._v(" "),e("p",[a._v("obtain capture groups and the global flag is set")])])},[],!1,null,null,null);t.default=_.exports}}]);