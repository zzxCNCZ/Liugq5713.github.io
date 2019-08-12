# 历史记录

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

## git 工作流

一个大的项目 可能对一个功能有大量的修改。可以新建一个分支名为 someFeature , 然后将所有的更改分支都合并到这个分支上，最后将该分支合并到主分支

## git 暂存区的意义

- 便于 track
- 选择性提交文件
- 提交历史更加的清晰

## diff

git diff 命令可以显示两个主体之间的差异。工作区与暂存区的差异单纯的 git diff 命令显示工作区与暂存区之间的差异。

git diff --staged 命令显示暂存区与当前 commit 的差异。

## 前端社区中使用较多的 Git Commit 提交规范是 Angular 规范  

[google 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)
