# 设置 `iframe`

> 和前台的同事配合，实现预览页面

## iframe

### [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

> 碰到了后端返回一串 html 代码，然后让我展示的问题。没怎么用过 iframe 标签，直接使用其 src 属性，然后把代码赋值给他，但是没有用。查了下，应使用 html5 的新属性 srcdoc

- src
  The URL of the page to embed. Use "about:blank" to embed an empty page that conforms to the same-origin policy.
- srcdoc HTML5
  The content of the page that the embedded context is to contain. This attribute is expected to generally be used together with the sandbox attribute(secure).
  **override the content specified in the src attribute (if present)**

我和同事约定一个地址，设置`iframe`的`src`属性，通过`iframe`加载 PC 端的词条展示页面，获取到`iframe`的 window，通过`window.postMessage`方法与该页面通信，并将数据传递过去。同事在 PC 页面监听该消息，监听到了即不去请求后端数据，使用我传递给它的数据

但是这有一个问题，就是`iframe`的滚动条实在太丑了。但是我并不能知晓`iframe`内容，即不是到它有多高，无法设置`iframe`页面高度

虽然也可以通过两个页面互相通信，比如 PC 页面再告诉我它的高度有多少，我再去设置它。但是这样做未免太麻烦了

## [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

先复习一下基础知识，我 leader 跟我讲了这个方案的时候，我一脸蒙蔽，就是因为基础知识没学好啊

::: tip var window = window.open(url, windowName, [windowFeatures]);
`window.open`是有返回值的！！！它将返回新开的页面的窗口，如果页面不能被打开，它将返回`null`
:::

那么知道这一点，我们就可以通过`window.open`直接打开 PC 的词条展示页面，用它返回的这个新开的页面的 window，通过`window.postMessage`方法与该 PC 页面通信。

完美解决了`iframe`太丑的问题
