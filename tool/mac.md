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

## sudo

有时候，sudo command 都需要输入代码，可以通过 visudo，然后添加 NOPASSWD 参数，这样就不用输入密码了。

## linux 命令 cd

直接输入 `cd` ,将会进入用户的家目录

## scp 上传文件

新开一个窗口 使用 scp 命令
scp 是 secure copy 的缩写，scp 是 linux 系统下基于 ssh 登录进行安全的远程文件拷贝命令。
介绍一个命令：

scp [-r][-p port] local_file_address username@ip:remote_file_address
命令解释：
-r: 递归复制整个目录
-P port: 注意是大写的 P，port 是指定的端口号。
local_file_address: 本地文件地址。[地址是根据当前命令所在目录来编写的]
remote_file_address: 远程服务器地址。
输入完以上命令，回车，之后会让你输入服务器密码。成功之后，就开始复制了。以下是我的一个操作。

## 查看 8080 端口

```js
netstat -tulpn | grep 8080
```

你可以使用 lsof 命令来查看某一端口是否开放。查看端口可以这样来使用，我就以 80 端口为例：
lsof -i:80
如果有显示说明已经开放了，如果没有显示说明没有开放。

## 连上安卓设备快速输入

```js
adb shell input text "sometext"
```

## 权限

1 ：执行
2：写
4： 读

所以会看到 777

## mac 删除应用的方法

打开访达，选择应用程序，然后将你想删除的应用程序拖到废纸篓里面去即可。

## cp 命令如何不覆盖当前目录已经存在的文件

-n, --no-clobber 不要覆盖已存在的文件(使前面的 -i 选项失效)

## mkdir

- 创建多个目录

`mkdir aa bb cc`

- 创建多级目录

`mkdir -p aaa/bbb/ccc` //建立 aaa/bbb/ccc 这样的层级目录
`mkdir -p src/{a,b,c,d}/img` //建立目录 src，其中含有 4 个文件夹 a, b, c, d，且这 4 个文件都含有一个 img 文件夹

## [如何禁止 mac 更换工作区](https://www.zhihu.com/question/49530172)

System Preference > Mission Control，禁用掉 rearrange workspace

## 参考

- [mac 通过自带的 ssh 连接 Linux 服务器并上传解压文件](http://weiqinl.com/2018/01/27/mac%E9%80%9A%E8%BF%87%E8%87%AA%E5%B8%A6%E7%9A%84ssh%E8%BF%9E%E6%8E%A5Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B9%B6%E4%B8%8A%E4%BC%A0%E8%A7%A3%E5%8E%8B%E6%96%87%E4%BB%B6/)
- [前端程序员的 macOS 搭建指南](https://github.com/phodal/setup.guide)
- [命令行](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
- [20 Sed (Stream Editor) Command Examples for Linux Users](https://www.linuxtechi.com/20-sed-command-examples-linux-users/)
- [Sed Command in Linux/Unix with examples](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/)
