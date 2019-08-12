# 常见问题

## Git 生成 SSH Key

" 每次新电脑都要在 github 上添加自己的 key，总是忘记"

`ssh-keygen -t rsa -C "liugq5713@gmail.com"`

## Git 如何统一换行符

" LF 和 CRLF"

不同平台上，换行符发生改变时，Git 会认为整个文件被修改，这就造成我们没法 diff，不能正确反映本次的修改。还好 Git 在设计时就考虑了这一点，其提供了一个 autocrlf 的配置项，用于在提交和检出时自动转换换行符。但是 eslint 会检查你的换行符。所以干脆统一 LF 好了，在你的文本编辑器上，将文件的换行符设为 LF

```js
// 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true

// 提交时转换为LF，检出时不转换
git config --global core.autocrlf input

// 提交检出均不转换
git config --global core.autocrlf false
```

### 手动将 CRLF 转化为 LF

dos2unix 转换工具。Windows 上 Git bash 客户端自带了该工具。其他系统上也可以安装该工具，随后输入该命令

```js
find . -type f -exec dos2unix {} +
```

## GIT 如何大小写敏感

"配置一下"
git config core.ignorecase false

## 系统根目录 git init 后如何处理

"把.git 文件删了就好了"

执行 rm -rf .git
