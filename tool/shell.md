# shell 脚本

## 复制

复制一个文件夹里面所有的内容到另一个文件夹

cp -r dir1 dir2

如果 dir2 目录已存在，则需要使用
cp -r dir1/. dir2

## shell 脚本的流程控制

```shell
# 判断文件是否存在
if [ -f scm_build_resource.sh ]; then
  cp scm_build_resource.sh ../../
fi
# 判断文件夹是否存在
if [ -d output ]; then
  mv output ../../
fi
```

## ls

- -l shows file or directory, size, modified date and time, file or folder name and owner of file and its permission.
- -a list all files including hidden file
- -h show size human readable format
- -F add the / character at the end each directory
- -lS displays file size in order

## 参考

aka: also known as

- [Bash Scripting: Everything you need to know about Bash-shell programming](https://itnext.io/bash-scripting-everything-you-need-to-know-about-bash-shell-programming-cd08595f2fba)
- [15 Basic ‘ls’ Command Examples in Linux](https://www.tecmint.com/15-basic-ls-command-examples-in-linux/)
