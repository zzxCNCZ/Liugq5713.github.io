# vue

> 补充一些没什么暖用，但是面试官爱问的内容

## 虚拟 DOM 的好处

对于开发而言，不用去操作 DOM

它减少了同一时间内的页面多处内容修改所触发的浏览器 reflow 和 repaint 的次数，可能把多个不同的 DOM 操作集中减少到了几次甚至一次，优化了触发浏览器 reflow 和 repaint 的次数

dom 本身在 js 中就是一种数据结构，console.dir(document.body)，在控制台可以看到 body 的数据结构。然而，dom 相关的数据丰富而且复杂，我们其实只关心少数元素的少数属性。建立一个 javascript plain object，非常轻量，用它保存我们真正关心的与 dom 相关的少数数据；对它进行操作，然后对比操作前后的差异，再根据映射关系去操作真正的 dom，无疑能提高性能。这就是虚拟 DOM 的理念

## vue diff 算法

比较只会在同层级进行, 不会跨层级比较

设置 key 和不设置 key 的区别：

不设 key，newCh 和 oldCh 只会进行头尾两端的相互比较，设 key 后，除了头尾两端的比较外，还会从用 key 生成的对象 oldKeyToIdx 中查找匹配的节点，所以为节点设置 key 可以更高效的利用 dom。

## 参考

- [如何理解虚拟 DOM?](https://www.zhihu.com/question/29504639)
