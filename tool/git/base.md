# 基础操作

## TL;DR

我们日常使用 git 也就三个命令，`git add .` `git commit -m 'xxx'` `git push`，了解一下这三个命令干了啥，以及如何更好的使用这三个命令

## git flow

- working tree：持有实际文件
- 暂存区（stage 或者 index）：临时保存你的改动

stage 在英文中除了有舞台、阶段之意外，还有作为动词的准备、筹划之意，所谓的暂存区就是一个为提交到版本库做准备的地方。那它为什么又被称作 index 呢？因为暂存区在物理上仅仅是.git 目录下的 index 二进制文件。它就是一个索引文件，将工作区中的文件和暂存区中的备份一一对应起来。

- 提交历史（Commit history），保存你 commit 提交上来的信息

## git add vs git stage

git stage 和 git add 一模一样，stage 相对语义化一点。

添加到暂存区其实包含两种操作。一种是将还未被 git 跟踪过的文件放入暂存区；一种是已经被 git 跟踪的文件，将有改动的内容放入暂存区。

`git add -u`

复制代码它和 git add -A 命令的区别在于，它只能将已加入暂存区文件的改动放入暂存区，而 git add -A 通吃两种情况。

你甚至可以将加入暂存区和提交一并做了

`git commit -am "commit for nothing"`

复制代码但是要注意，和 git add -u 命令一样，未跟踪的文件是无法提交上去的。

### git 暂存区的意义

- 便于 track
- 选择性提交文件
- 提交历史更加的清晰

## 克隆一个带子模块的项目

git clone 的下来的仓库含有子仓库怎么把子仓库拉取下来

这里你将克隆一个带子模块的项目。当你接收到这样一个项目，你将得到了包含子项目的目录，但里面没有文件：

必须要运行两个命令

git submodule init 来初始化你的本地配置文件，git submodule update 来从那个项目拉取所有数据并检出你上层项目里所列的合适的提交

## git commit

### 书写良好的 Git 提交信息

- feat (new feature)
- fix (bug fix)
- docs (changes to documentation)
- style (formatting, missing semi colons, etc; no code change)
- refactor (refactoring production code)
- test (adding missing tests, refactoring tests; no production code change)
- chore (updating grunt tasks etc; no production code change)

常见的项目规范

- [Angular 项目规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## git 工作流

一个大的项目 可能对一个功能有大量的修改。可以新建一个分支名为 someFeature , 然后将所有的更改分支都合并到这个分支上，最后将该分支合并到主分支
