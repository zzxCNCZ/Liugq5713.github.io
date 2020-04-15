# vim

推荐使用移动方式

hjkl 代表 ⬅️⬇️⬆️➡️

x 代表删当前光标的所在的一个字符

## vim 对于行操作

gg 跳到文件第一行
G 跳到文件末尾

数字 0 跳转到行 头

符号\$ 跳转到行尾

撤销操作 u

撤销一个撤销 CTRL+R

## vim 换行

教程上说设置 set wrap 就可以了，但是没有效果。需要删除一些文件 `rm -rf ~/.vimviews`

- [set wrap in .vimrc.local not working](https://github.com/spf13/spf13-vim/issues/254)
