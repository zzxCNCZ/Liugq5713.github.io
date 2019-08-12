# [Squash](https://gist.github.com/patik/b8a9dc5cd356f9f6f980)

痛点：当你把分支 merge 到 master 时，分支上的 commit 信息都会合并到 master 分支上，团队成员可能不关心你的你分支上那么多提交信息，你只需要告诉他们你这个分支做了什么事情就行。即你需要将你的分支上的 commit 信息合并为一个 commit 信息。

## [太长不看](https://gist.github.com/patik/b8a9dc5cd356f9f6f980)

本地命令行`git merge your-branch-name --squash` ，就可以直接做到了，之前没查过还真不了解。

## GitLab && Github

> 界面上都提供了 squash 操作，让你把分支上 commit 合并成一个，但是还是命令行好一点，更快

- Gitlab

当你要在 github 上合并分支的时候，merge 按钮边上有两个很方便的选项 Delete source branch 和 Squash commits

- Github

其合并 PR 的分支操作也是 `squash and commit`

## merge

`git merge your-branch-name --squash`

## 一种简单且灵活的方式

> 看一下这个操作，看看他是怎么实现 squash 的效果，更理解 git 了

1. 切换到主分支，确保主分支最新 `git checkout master && git pull`
2. 把你的分支合并到主分支上 `git merge feature_branch`
3. reset 掉你本地的修改 `git reset origin/master`，不懂可以看下面解释，这里的操作就是撤销你暂存区的修改，并将修改移动到工作区
4. 重新把所有的内容提交 `git add . --all` `git commit`

### [git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)

> 讲一下 reset 吧，我自己都忘了

要想明白 reset，就要懂得 git 的三个树（Three Trees of Git）

- 工作区（The working directory），这棵树和你的文件系统同步，你对文件的修改都会保存到这个树里面
- 暂存区（Staging index）,这里记录你工作区的更改，即你通过`git add` 提交上来的内容
- 提交历史（Commit history），保存你 commit 提交上来的信息

git reset 可以修改这三个 tree 的状态，其命令行变量--soft, --mixed, and --hard 分别对应

- --hard : 这个要慎用，这个是没有后悔药的。它会把三个树的内容都恢复到你指定的 comit 的状态
- --mixed: 这个是默认值，会重置你的暂存区，并且把修改移回工作区。
- --soft 仅改变提交历史

## [合并 PR 时慎用 squash 和 rebase](https://zhuanlan.zhihu.com/p/75210664)

> 看到饿了么推送的这个文章，我真的是惊了，他有啥问题，我就意译一下。

为了保持仓库的干净，我们会删除已经合并的分支，那么这样会有一个问题，被 squash 的分支的信息就彻底丢掉了。我无法去查看这个已经被合入的分支上的 commit 信息。

并且一个仓库可能有多人合作，每个人从哪个分支开的分支，这个信息也丢掉了。

但是我怎么觉得问题不太。。。可能我开发的项目比较小吧。有点的时候在自己的分支上容易放飞自我，所以还是 squash 合入主分支吧
