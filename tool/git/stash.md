# 内容检出

## git stash

> 忘记切换分支直接在 master 分支上干活，但是代码还没有提交的补救方式

```js
// 将当前未提交到本地（和服务器）的代码推入到 Git 的栈中：
$ git stash
// 查看状态
$ git status
// 切换到干活的分支
$ git branch dev
// 还原代码
$ git stash apply
```

```js
// 将以前存放的代码应用回来
git stash apply
// pop会删除栈里面的数据
// 显示stash
git stash list
// 将你指定版本号为stash@{1}的工作取出来
git stash apply stash@{1}
git stash pop
// 将栈清空
git stash clear
```

## [git checkout](https://git-scm.com/docs/git-checkout#git-checkout-emgitcheckoutemlttree-ishgt--ltpathspecgt82308203)

> 忘记切换分支，在错误的分支 A 上工作，并且提交了你的代码，现在想切换至正确的分支 B，并把之前在错误分支修改的地方应用到正确的分支上

```git
// 切到git分支
git checkout B
// 将 A 分支修改的文件检出
git checkout A ./somefiles
```

检出文件

`git checkout [<tree-ish>][--] <pathspec>`

独立的--参数在 Linux 命令行中指的是：视后面的参数为文件名。当后面跟的是文件名的时候，最好加上独立的--参数，以免有歧义。

```shell
git checkout -- <file>
```

暂存区的文件被检出了，然后覆盖了工作区。

如果你想撤销自己所有的还未提交到暂存区的改动， 那么 `git checkout -- .`

运行 git checkout 命令作用于文件时，即便覆盖内容与被覆盖内容有冲突，也会直接覆盖，所以这真的是闷声打雷式的 git 命令，一定要抽自己几个耳刮子方可放心食用。

## [git cherry-pick](https://git-scm.com/docs/git-cherry-pick)

> 工作中，提交 PR 后，我以为代码已经合进 master 了（但是其实没有）。把本地分支和远程分支都删了。虽然这个 pr 被自动关闭了，但是提交的 commit 信息还在。所以新建一个分支，把几个 cimmit 内容放到这个新的分支上

Given one or more existing commits, apply the change each one introduces, recording a new commit for each. This requires your **working tree to be clean**

有没有发现操作连续 commit 的 git cherry-pick 和 git rebase 的功能已经非常接近了？所以呀，git cherry-pick 也是变基，只不过一边变基一边喂樱桃给你吃。
