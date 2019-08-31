# 在线交友 GitHub

## Archive dead repositories

我有一点点洁癖，所以有时候会去整理 github，一般不用仓库直接删除就好了，但是有的仓库食之无味弃之可惜，毕竟也是自己一点一点写的。所以可以使用它的归档功能

## 常用缩写

- WIP (Work In Progress) 开发中
- LGTM (Looks Good To Me Riview) 看完别人的 PR ，没有问题
- PTAL (Please Take A Look) 帮我看下，一般都是请别人 review 自己的 PR
- TL;DR (Too Long;Didn;t Read)

## github 项目优化

### README

README 是用户点进你项目的第一印象，值得你好好写。当然我们自己可能考虑的不是很完全，不如使用工具来生成。推荐[readme-md-generator](https://github.com/kefranabg/readme-md-generator)。生成的 README 如下图：

![项目readme预览](https://user-images.githubusercontent.com/9840435/60266090-9cf9e180-98e7-11e9-9cac-3afeec349bbc.jpg)

### Logo

好的项目第一步就要找一个比较好看得 logo，现在 AI 自动生成 logo 非常火爆。推荐几个网站

- [brandmark](http://brandmark.io/)
- [looka](https://looka.com/)
- [launchaco](https://www.launchaco.com/logo/)，这个是完全免费的，虽然 logo 感觉不太好看
- [designevo](https://www.designevo.com/logo-maker/)，会给你生成一张基础的 logo 图（jpg，和 png），如果你想要更定制的，就要收费了

### Badge

在 README 里面，我们可以添加 [Badge(徽章)](https://shields.io/)，常用的徽标主要有持续集成状态、项目版本信息、代码测试覆盖率、项目支持平台、项目语言、代码分析等，想得到这些徽章的话，知道自己该做些什么了吧。

### GITHUB PAGE

用户如果感兴趣，或许会想真切地感受一下项目。咱们前端项目不需要后台，真的非常合适部署在[github page](https://pages.github.com/)上。

### Github 彩带

在你的 GITHUB PAGE 上可以添加 [Github 彩带](https://github.blog/2008-12-19-github-ribbons/)，或者 [Github Corner](http://tholman.com/github-corners/)

### GIT COMMIT

如果你的用户对你的项目特别感兴趣，可能他会看看你的 commit，看看你写代码的过程。如果 commit 信息里面都是 fix , add 甚至 aa,dd 这种无意义的信息，你肯定会觉得这个项目的作者不是特别的用心。当然作为项目的作者，可能有时候真的懒。。。。，为了解决这个问题，推荐大家几个工具。

- [Commitizen](https://github.com/commitizen/cz-cli) 是一个撰写合格 Commit message 的工具。
- [commitlint](https://github.com/conventional-changelog/commitlint) 用于检查 Node 项目的 Commit message 是否符合格式。

如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成，conventional-changelog 就是生成 Change log 的工具。

## 参考

- [GitHub 项目徽章的添加和设置](https://lpd-ios.github.io/2017/05/03/GitHub-Badge-Introduction/)
- [awesome-bookmarks](https://panjiachen.github.io/awesome-bookmarks/website/#%E5%BC%80%E5%8F%91)
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
