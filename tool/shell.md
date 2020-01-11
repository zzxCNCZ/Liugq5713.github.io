# shell 脚本

## shell 脚本变量

```shell
#!/bin/sh
MY_MESSAGE="Hello World"
echo $MY_MESSAGE
```

手动输入变量

```shell
#!/bin/sh
echo What is your name?
read MY_NAME
echo "Hello $MY_NAME - hope you're well."
```

### ${} and $()

### 快速运行脚本

1. 我们一般会将本地的 shell 放在/usr/local/sbin/目录下
2. 需要修改该本地的 shell 文件为可执行文件
   sudo chmod 755 boot_sublime.sh
3. 生成系统软链接`sudo ln -s /usr/local/sbin/boot_sublime_text /usr/bin/sublime`
4. 通过 sublime 即可启动 sublime

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

## 修改文件名，去除特定的字符

```shell
#!/bin/bash

path=$1

echo $path

files=$(ls $path)
for filename in $files
do
  newfile=$(echo $filename | sed 's/this-is-family-//')
  mv $filename $newfile
done
```

这里使用 sed 进行标准输出的字符串替换，其通用格式如下：

`stdout | sed 's/pattern/replace/'`

## 参考

aka: also known as

- [Bash Scripting: Everything you need to know about Bash-shell programming](https://itnext.io/bash-scripting-everything-you-need-to-know-about-bash-shell-programming-cd08595f2fba)
- [15 Basic ‘ls’ Command Examples in Linux](https://www.tecmint.com/15-basic-ls-command-examples-in-linux/)
- [Shell Scripting TutorialVariables ](https://www.shellscript.sh/variables1.html)
