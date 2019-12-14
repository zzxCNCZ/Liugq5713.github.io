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

## 参考

- [前端程序员的 macOS 搭建指南](https://github.com/phodal/setup.guide)
