# 三种级别的配置

## 前言

我下定决心研究它的原因，是因为我在我司的仓库的贡献记录上有三个人，真的是见了鬼了

![contribute](https://wpimg.wallstcn.com/ff636a96-3cb3-43ed-b507-4f101d070bc7.png)

## 配置

config 配置有三种级别

- system 级别，位于`/etc/gitconfig`
- global（用户级别），位于`~/.gitconfig` (或者`~/.config/git/config`)
- local（当前仓库）

设置优先级，从`local > global > system`

## git config 配置

很多人对于 git config 的配置止步于这两个命令，我也是，我也不打算看，等用到的时候再去了解

```shell
git config --global user.name "myname"
git config --global user.email  "test@gmail.com"
```

我挨个查看了我三个级别的 git config，发现仅 global 设置了用户名和邮箱，讲道理，应该提交记录都是一个人啊。我陷入了困惑，难道是因为我使用了 github 客户端的原因？

## GITHUB 的配置

实测，github 的配置修改的是 global 的配置

看来不是这个原因，我决定看一下我的提交记录，看一下这几个我，分别是什么会提交，这一看，结果就出来了。

## GITLAB 的配置

我 GITLAB 的配置是用的全名，邮箱也是公司邮箱，然而我本地是我 GITHUB 的配置。我常会在 GITLAB 上进行合并分支操作，因此 GITLAB 的配置就会被记录下来
