# 收集

## 更新 fork 下来别人的仓库

git romote -v

会显示一个 origin ，和一个 upstream

```shell
// 获取原仓库最新的内容
git fetch upstream
// 切换到master分支，把upstream/master分支上的内容合入到master分支
git merge upstream/master
```

这种方法有问题，就是如果你对这个项目已经有 commit 了，然后你又要对项目做贡献，那么第二次你又把你第一次的 commit 提交上去了。

推荐做法，直接切原作者仓库的远程分支

```shell
git checkout upstream/master
// 然后新建一个分支
git checkout -b devTodo
```

## git 提交规范

- [Angular 项目规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
