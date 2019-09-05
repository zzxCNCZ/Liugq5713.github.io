(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{359:function(t,a,e){"use strict";e.r(a);var r=e(38),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分支操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),e("h2",{attrs:{id:"tl-dr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr","aria-hidden":"true"}},[t._v("#")]),t._v(" TL;DR")]),t._v(" "),e("p",[t._v("常见的分支操作有增删分支，切换分支，合并分支，以及更新分支")]),t._v(" "),e("h2",{attrs:{id:"新增分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 新增分支")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch newBranch\n\n# 从远程新建分支\ngit branch master origin/master\n")])])]),e("h2",{attrs:{id:"删除分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),e("h3",{attrs:{id:"本地分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地分支")]),t._v(" "),e("div",{staticClass:"language-git extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git branch -d <branch_name>\n\n// -D is shortcut for --delete --force.\ngit branch -D <branch_name>\n")])])]),e("h3",{attrs:{id:"远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程分支","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely",target:"_blank",rel:"noopener noreferrer"}},[t._v("远程分支"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("git push --delete <remote_name> <branch_name>")]),t._v(" Note that in most cases the remote name is origin.")]),t._v(" "),e("h2",{attrs:{id:"切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 切换分支\ngit checkout master\n\n// 新建并切换到分支\ngit checkout -b newBranch\n\n// 强制切分支\ngit checkout -f master\n")])])]),e("h2",{attrs:{id:"合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),e("h3",{attrs:{id:"git-merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://git-scm.com/docs/git-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("git merge"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("了解一下 merge 操作到底干了啥，然后才方便了解 rebase。"),e("a",{attrs:{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/rebase",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇教程讲的不错"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("合并操作之前必须保证暂存区内没有待提交内容，否则 git 会阻止合并。这是因为合并之后，git 会将合并后的版本覆盖暂存区。所以会有丢失工作成果的危险。")])]),t._v(" "),e("p",[t._v("至于工作区有待添加到暂存区的内容，git 倒不会阻止你。可能 git 觉得它不重要吧。")]),t._v(" "),e("p",[t._v("Git 执行一个合并时，它实际上会查找三个提交：")]),t._v(" "),e("p",[t._v("(1)共同的原始提交\n如果你在项目中查看两个分支的历史，它们总是会出自于一次共同的提交，那么在当时的时间点上，这两个分支还是拥有相同的内容。之后它们就开始有了差别。\n(2) + (3) 两个分支的最终点\n合并操作的目的就是把两个分支的最新状态结合起来。因此他们各自的最新版本是有特殊含义的。\n结合这三个提交后得到的结果就是我们整合的目标。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("快进（fast-forward）合并：一个分支 A 没变，另一个基于分支 A 的分支 B 合并到分支 A（这两个分支的历史相同时间点还是分支 A）")]),t._v(" "),e("p",[t._v("如果你遇到冲突以后不知道如何解决，因为你要去询问你的合作伙伴为什么这样改。这时你肯定想回到合并以前的状态。这对 git 来说很容易。只需要运行 git merge --abort 命令即可。")]),t._v(" "),e("p",[e("code",[t._v("git merge --abort")])]),t._v(" "),e("p",[e("code",[t._v("git rebase --abort")])]),t._v(" "),e("p",[e("code",[t._v("git cherry-pick --abort")])]),t._v(" "),e("p",[e("code",[t._v("git revert --abort")])]),t._v(" "),e("h3",{attrs:{id:"git-merge-your-branch-name-squash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-your-branch-name-squash","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://gist.github.com/patik/b8a9dc5cd356f9f6f980",target:"_blank",rel:"noopener noreferrer"}},[t._v("git merge your-branch-name --squash"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("痛点：当你把分支 merge 到 master 时，分支上的 commit 信息都会合并到 master 分支上，团队成员可能不关心你的你分支上那么多提交信息，你只需要告诉他们你这个分支做了什么事情就行。即你需要将你的分支上的 commit 信息合并为一个 commit 信息。但是注意的是，这个被合入的分支的原本的 commit 信息就被丢掉了")]),t._v(" "),e("h3",{attrs:{id:"git-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://git-scm.com/docs/git-rebase",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("我开发的时候在我的本地一顿操作，然后不能自动 rebase 了，需要我在本地 rebase，一脸懵逼。需要好好了解一下，毕竟变基比 merge 更好一点\n变基也是有准则的：不要对在你的仓库外有副本的分支执行变基。因为这样会对和你合作的小伙伴造成困扰")])]),t._v(" "),e("p",[t._v("Reapply commits on top of another base tip")]),t._v(" "),e("h2",{attrs:{id:"从远程分支获取内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从远程分支获取内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 从远程分支获取内容")]),t._v(" "),e("blockquote",[e("p",[t._v("similarities: both are used to download new data from a remote repository.")])]),t._v(" "),e("h3",{attrs:{id:"git-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch","aria-hidden":"true"}},[t._v("#")]),t._v(" git fetch")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//git fetch: only download new from a remote reposity")]),t._v("\ngit fetch origin\n")])])]),e("h3",{attrs:{id:"git-pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-pull","aria-hidden":"true"}},[t._v("#")]),t._v(" git pull")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//git pull: to update your current HEAD branch with the lastest changes from the remote server\ngit pull origin master\n\n")])])]),e("h3",{attrs:{id:"更新-sit-分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新-sit-分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新 sit 分支")]),t._v(" "),e("blockquote",[e("p",[t._v("sit 分支经常合并不稳定的代码，久了之后，sit 分支上就很脏了，需要重新往 master 分支拉取")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("git checkout master "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" git branch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" sit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("git branch sit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("git push "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("upstream origin sit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f\n")])])]),e("h2",{attrs:{id:"更新-fork-下来别人的仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新-fork-下来别人的仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新 fork 下来别人的仓库")]),t._v(" "),e("p",[t._v("git romote -v")]),t._v(" "),e("p",[t._v("会显示一个 origin ，和一个 upstream")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 获取原仓库最新的内容\ngit fetch upstream\n// 切换到master分支，把upstream/master分支上的内容合入到master分支\ngit merge upstream/master\n")])])]),e("p",[t._v("这种方法有问题，就是如果你对这个项目已经有 commit 了，然后你又要对项目做贡献，那么第二次你又把你第一次的 commit 提交上去了。")]),t._v(" "),e("p",[t._v("推荐做法，直接切原作者仓库的远程分支")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout upstream/master\n// 然后新建一个分支\ngit checkout -b devTodo\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);