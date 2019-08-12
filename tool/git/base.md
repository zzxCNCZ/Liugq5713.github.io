# 基础操作

## git add vs git stage

git stage 和 git add 一模一样，stage 相对语义化一点。

添加到暂存区其实包含两种操作。一种是将还未被 git 跟踪过的文件放入暂存区；一种是已经被 git 跟踪的文件，将有改动的内容放入暂存区。

`git add -u`

复制代码它和 git add -A 命令的区别在于，它只能将已加入暂存区文件的改动放入暂存区，而 git add -A 通吃两种情况。

你甚至可以将加入暂存区和提交一并做了

`git commit -am "commit for nothing"`

复制代码但是要注意，和 git add -u 命令一样，未跟踪的文件是无法提交上去的。

## git flow

- working tree：持有实际文件
- 暂存区（stage 或者 index）：临时保存你的改动

stage 在英文中除了有舞台、阶段之意外，还有作为动词的准备、筹划之意，所谓的暂存区就是一个为提交到版本库做准备的地方。那它为什么又被称作 index 呢？因为暂存区在物理上仅仅是.git 目录下的 index 二进制文件。它就是一个索引文件，将工作区中的文件和暂存区中的备份一一对应起来。

## 书写良好的 Git 提交信息

- feat (new feature)
- fix (bug fix)
- docs (changes to documentation)
- style (formatting, missing semi colons, etc; no code change)
- refactor (refactoring production code)
- test (adding missing tests, refactoring tests; no production code change)
- chore (updating grunt tasks etc; no production code change)
