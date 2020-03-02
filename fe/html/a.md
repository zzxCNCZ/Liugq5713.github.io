# a 标签

## a 标签的安全隐患

今天被 eslint 提醒了一个安全隐患（以前无知，打开新窗口我都是这么用的）

`<a href='xxx' target='_black' ></a>`

您的页面链接至使用 `target="_blank"` 的另一个页面时，新页面将与您的页面在同一个进程上运行。 如果新页面正在执行开销极大的 JavaScript，您的页面性能可能会受影响。此外，`target="_blank"` 也是一个安全漏洞。新的页面可以通过 window.opener 访问您的窗口对象，并且它可以使用 `window.opener.location = newURL` 将您的页面导航至不同的网址。

因此需要添加一个属性

`<a href='xxx' target='_black' rel='noopener' ></a>`

## 下载文件

[How to trigger a file download when clicking an HTML button or JavaScript](https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript)

可以使用 HTML 新属性 download

`<a href="path_to_file" download="proposed_file_name">Download</a>`
