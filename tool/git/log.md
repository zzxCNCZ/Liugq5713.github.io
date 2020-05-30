# 历史记录

## git plugin

glol 命令查看 log 特别好用，查看 log 特别的清晰

`alias glol="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'"`

## git show

Shows one or more objects (blobs, trees, tags and commits).

- 如果知道一个文件的 sha-1 值，`git show 215ded5`
- 比如查看 v1 标签： `git show tagLearn`
- 查看 commit 对象：`git show 5a97a20`

## 查看 git 记录

> git 比较优秀的地方就是可以一切操作都是有记录的，除了部分操作，都是有补救措施的，所以查看操作记录也是必须的

- git log(shows the commit logs)
- git reflog(manage reflog information)

## git tag

`git tag -a v1.4 -m 'my version 1.4'` -a 指定标签得名字 -m 指定了对应的标签说明

## [修改远程仓库 origin](https://help.github.com/articles/changing-a-remote-s-url/)

```git
git remote -v
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

### 先删除再添加

> 这个也算是一种折中的方法了

```git
git remote rm origin
git remote add origin git@github.com:Liutos/foobar.git
```

## diff

git diff 命令可以显示两个主体之间的差异。工作区与暂存区的差异单纯的 git diff 命令显示工作区与暂存区之间的差异。

git diff --staged 命令显示暂存区与当前 commit 的差异。
