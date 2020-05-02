# 收集

## Git 生成 SSH Key

" 每次新电脑都要在 github 上添加自己的 key，总是忘记"

`ssh-keygen -t rsa -C "liugq5713@gmail.com"`

## 实践经验

要在自己想实施想法的时候，把目前的工作 commit，这样万一自己试验失败了，回退也方便一点

## Q：[Another git process seems to be running in this repository](https://stackoverflow.com/questions/38004148/another-git-process-seems-to-be-running-in-this-repository)

Try deleting index.lock file in your .git directory.

rm -f .git/index.lock

Such problems generally occur when you execute two git commands simultaneously; maybe one from the command prompt and one from an IDE.
