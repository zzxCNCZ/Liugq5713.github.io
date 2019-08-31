# image

## 图片懒加载

如果你的系统是一个偏展示的项目需要给用户展示大量图片，是否启用图片懒加载可能是你需要考虑的一个点，不在用户视野中的图片是没有必要加载的，图片懒加载通过让图片先加载成一张统一的图片，再给进入用户视野的图片替换真正的图片地址，可以同一时间减少 http 请求开销，避免显示图片导致的画面抖动，提高用户体验

### getBoundingClientRect

下面我提供 2 种图片懒加载的思路，这 2 个方案最终都是用将占位的图片替换成真正的图片，然后给 img 标签设置一个自定义属性 data-src 存放真正的图片地址，src 存放占位图片的地址

DOM 元素包含一个 getBoundingClientRect 方法，执行该方法返回当前 DOM 节点相关的 CSS 边框集合

其中有一个 top 属性代表当前 DOM 节点距离浏览器窗口顶部的高度，只需判断 top 值是否小于当前浏览器窗口的高度（window.innerHeight），若小于说明已经进入用户视野，然后替换为真正的图片即可
另外使用 getBoundingClientRect 作图片懒加载需要注意 3 点

因为需要监听 scroll 事件，不停的判断 top 的值和浏览器高度的关系，请对监听事件进行函数节流
当屏幕首次渲染时，不会触发 scroll 事件，请主动调用一次事件处理程序，否则若用户不滚动则首屏的图片会一直使用懒加载的默认图片
当所有需要懒加载的图片都被加载完，需要移除事件监听，避免不必要的内存占用

### IntersectionObserver

IntersectionObserver 作为一个构造函数，传入一个回调函数作为参数，生成一个实例 observer，这个实例有一个 observe 方法用来观察指定元素是否进入了用户的可视范围，随即触发传入构造函数中的回调函数
同时给回调函数传入一个 entries 的参数，记录着这个实例观察的所有元素的一些阈值信息（对象），其中 intersectionRatio 属性表示图片进入可视范围的百分比，大于 0 表示已经有部分进入了用户视野

此时替换为真实的图片，并且调用实例的 unobserve 将这个 img 元素从这个实例的观察列表的去除

### getBoundingClientRect vs IntersectionObserver

这 2 种的区别在于监听的方式，我个人更推荐使用 Intersection Observer，因为通过监听 scroll 事件开销比较大，而让将这个工作交给另一个线程异步的去监听开销会小很多，但是它的缺点是一些老版本的浏览器可能支持率不高，好在社区有 [polyfill](https://www.npmjs.com/package/intersection-observer) 的方案
或者可以直接使用第三方的组件库 [vue-lazyload](https://www.npmjs.com/package/vue-lazyload)

## 参考

- [图片懒加载](https://juejin.im/post/5c76843af265da2ddd4a6dd0#heading-22)
