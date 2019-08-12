# Git 基本知识

- commit：HEAD，指向你最近一次提交后的结果

### HEAD

You can think of the HEAD as the "current branch". When you switch branches with git checkout, the HEAD revision changes to point to the tip of the new branch.

HEAD^ means the first parent of the tip of the current branch,HEAD^ is short for HEAD^1

master~2 means the grandparent of the tip of the master branch, favoring the first parent in cases of ambiguity.

```js
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A

A =      = A^0
B = A^   = A^1     = A~1
C = A^2  = A^2
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
H = D^2  = B^^2    = A^^^2  = A~2^2
I = F^   = B^3^    = A^^3^
J = F^2  = B^3^2   = A^^3^2
```

我有一个小需求，就是看一个项目的时候，从第一个 commit 开始看起。然后一个一个添加 commit。但是我现在没有找到这个功能。可以做到的是从 master 分支，直接跳转到某一个分支 `git checkout HEAD~Num`
