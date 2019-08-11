我们项目是用husky来做代码lint的钩子的。最近把两个子项目合到一起后，各自有package.json，原先在各自的package.json都配了husky。然后发现其中一放的钩子不起作用了。

翻官方文档发现如下描述：
Generally speaking, you should AVOID defining husky in multiple package.json, as each package would overwrite previous husky installations.

看来只能统一配一份了。
另外有需要多package.json管理的项目，业界都用lerna了。