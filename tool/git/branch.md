# 分支操作

## TL;DR

常见的分支操作有增删分支，切换分支，合并分支，以及更新分支

## 新增分支

```shell
git branch newBranch

# 从远程新建分支
git branch master origin/master
```

## 删除分支

### 本地分支

```git
git branch -d <branch_name>

// -D is shortcut for --delete --force.
git branch -D <branch_name>
```

### [远程分支](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely)

`git push --delete <remote_name> <branch_name>` Note that in most cases the remote name is origin.

## 切换分支

```
// 切换分支
git checkout master

// 新建并切换到分支
git checkout -b newBranch

// 强制切分支
git checkout -f master
```

## 合并分支

### [git merge](https://git-scm.com/docs/git-merge)

> 了解一下 merge 操作到底干了啥，然后才方便了解 rebase。[这篇教程讲的不错](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/rebase)

> 合并操作之前必须保证暂存区内没有待提交内容，否则 git 会阻止合并。这是因为合并之后，git 会将合并后的版本覆盖暂存区。所以会有丢失工作成果的危险。

至于工作区有待添加到暂存区的内容，git 倒不会阻止你。可能 git 觉得它不重要吧。

Git 执行一个合并时，它实际上会查找三个提交：

(1)共同的原始提交
如果你在项目中查看两个分支的历史，它们总是会出自于一次共同的提交，那么在当时的时间点上，这两个分支还是拥有相同的内容。之后它们就开始有了差别。
(2) + (3) 两个分支的最终点
合并操作的目的就是把两个分支的最新状态结合起来。因此他们各自的最新版本是有特殊含义的。
结合这三个提交后得到的结果就是我们整合的目标。

---

快进（fast-forward）合并：一个分支 A 没变，另一个基于分支 A 的分支 B 合并到分支 A（这两个分支的历史相同时间点还是分支 A）

如果你遇到冲突以后不知道如何解决，因为你要去询问你的合作伙伴为什么这样改。这时你肯定想回到合并以前的状态。这对 git 来说很容易。只需要运行 git merge --abort 命令即可。

`git merge --abort`

`git rebase --abort`

`git cherry-pick --abort`

`git revert --abort`

### [git merge your-branch-name --squash](https://gist.github.com/patik/b8a9dc5cd356f9f6f980)

痛点：当你把分支 merge 到 master 时，分支上的 commit 信息都会合并到 master 分支上，团队成员可能不关心你的你分支上那么多提交信息，你只需要告诉他们你这个分支做了什么事情就行。即你需要将你的分支上的 commit 信息合并为一个 commit 信息。但是注意的是，这个被合入的分支的原本的 commit 信息就被丢掉了

### [git rebase](https://git-scm.com/docs/git-rebase)

> 我开发的时候在我的本地一顿操作，然后不能自动 rebase 了，需要我在本地 rebase，一脸懵逼。需要好好了解一下，毕竟变基比 merge 更好一点
> 变基也是有准则的：不要对在你的仓库外有副本的分支执行变基。因为这样会对和你合作的小伙伴造成困扰

Reapply commits on top of another base tip

## 从远程分支获取内容

> similarities: both are used to download new data from a remote repository.

### git fetch

```js
//git fetch: only download new from a remote reposity
git fetch origin
```

### git pull

```
//git pull: to update your current HEAD branch with the lastest changes from the remote server
git pull origin master

```

### 更新 sit 分支

> sit 分支经常合并不稳定的代码，久了之后，sit 分支上就很脏了，需要重新往 master 分支拉取

```js
git checkout master && git branch -D sit&&git branch sit&&git push --set-upstream origin sit -f
```

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
