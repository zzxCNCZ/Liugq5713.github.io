# MAC 使用指南

## 安装必要的软件

第一步安装 HomeBrew，这是一个包管理软件

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
brew cask install google-chrome
brew cask install iterm2 sourcetree alfred
```

## VS Code

```
brew cask install visual-studio-code
```

```
brew install postman
```

## ZSH

change shell

```
brew install zsh
chsh -s /bin/zsh
```

### Oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### Zsh AutoSuggestions

1.clone

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
```

2.source

```
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## Git Config

```
git config --global user.email "liugq5713@gmail.com"
git config --global user.name "liuguangqi"
```

## Image

图片转换

```
brew install imagemagick gs
```

## mac

修改文件的使用者

`chown [username] [file]`

## 退出 tmux

`ctrl + d`

## 学习 scp 命令

- 把这个文件上传到远程机器上 `scp file.txt username@to_host:/remote/directory/`
- 把远程机器的文件下载到本地 `scp username@from_host:file.txt /local/directory/`
- 加上 -r 的命令就可以把目录也上传上去啦

## linux

1. 如何从 ssh 客户端退出 ？ `exit`

2. 如何设置 root 密码？

   有的机器可能一开始不是 root，可以运行 `sudo passed` ，设置新的 root 密码

3. linux 基于文件名查找文件
   `find . -name "*.c"`

## mac 打开 chrome 的历史记录

`cmd + y`

## 获取 ip

`ipconfig getifaddr en0`

## ifconfig 的输出

```js
lo0 = loopback
gif0 = Software Network Interface
stf0 = 6to4 tunnel interface
en0 = Ethernet 0
fw0 = Firewire
en1 = Ethernet 1
vmnet8 = Virtual Interface
vmnet1 = Virtual Interface
```

## 查看文件

cat

head 默认显示前 10 行，`- n` 显示行数

tail 也是显示默认 10 行，tail 有一个不错的功能，可以动态查看文件尾部。`tail -f xxx`

## 参考

- [前端程序员的 macOS 搭建指南](https://github.com/phodal/setup.guide)
- [命令行](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
