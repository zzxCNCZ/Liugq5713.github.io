# 回滚

## 回滚操作

> git 不熟悉，对于代码回滚什么的简直灾难。我又遇到坑了去了,简直心态爆炸，好好学习回滚技术，将来线上出问题也好有的救

### git reset

> 如果你的更改还没有共享给别人，git reset 是撤销这些更改的简单方法。当你开发一个功能的时候发现「糟糕，我做了什么？我应该重新来过！」时，reset 就像是 go-to 命令一样。就算已经提交到了远程分支，那么可以强制推送到远程分支 `git push -f`

Reset current HEAD to the specified state.

```git
git reset --hard commit ID
```

- --soft : Does not touch the index file or the working tree at all
- --mixed: Resets the index but not the working tree
- --hard : Resets the index and working tree

### git revert

Revert some existing commits.Given one or more existing commits, revert the changes that the related patches introduce, and record some new commits that record them.
