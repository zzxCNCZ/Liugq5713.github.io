# diff 算法

## 虚拟 DOM 和 真实 DOM

虚拟 DOM 是对复杂 DOM 对象的提取，用对象的形式模拟其树状的结构，代码示例：

```html
<div>
  <p>JS Daily Question</p>
</div>
```

```js
// Converting to VNode is similar to the following
const Vnode = {
  tag: "div",
  children: [{ tag: "p", text: "JS Daily Question" }]
}
```

### 虚拟 DOM 优点

- 可以自己控制虚拟 DOM 何时渲染
- 允许你最小化 DOM 更新次数来优化网页应用的性能，保证性能的下限
- 无需手动操作 DOM
- 跨平台

## 如何比较

vnode 的简单属性

```js
// body下的 <div id="v" class="classA"><div> 对应的 oldVnode 就是

{
  el:  div  //对真实的节点的引用，本例中就是document.querySelector('#id.classA')
  tagName: 'DIV',   //节点的标签
  sel: 'div#v.classA'  //节点的选择器
  data: null,       // 一个存储节点属性的对象，对应节点的el[prop]属性，例如onclick , style
  children: [], //存储子节点的数组，每个子节点也是vnode结构
  text: null,    //如果是文本节点，对应文本节点的textContent，否则为null
}
```

先判断是否相同

```js
// key相同，节点选择器也要相同，才能算完全相等的一个节点
function sameVnode(oldVnode, vnode) {
  return vnode.key === oldVnode.key && vnode.sel === oldVnode.sel
}
```

### 特征

- 仅仅同级比较，不是跨层比较
- 比较的情况
  - if (oldVnode === vnode) Their quotations are consistent and can be considered unchanged.
  - if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text)Comparisons of text nodes that need to be modified will be invokedNode.textContent = vnode.text。
  - if( oldCh && ch && oldCh !== ch )Both nodes have child nodes, and they are different, so we call themupdateChildrenFunction comparison sub-nodes, which is the core of diff
  - else if (ch) Only new nodes have child nodes. CallcreateEle(vnode)，vnode.elOld DOM nodes have been referenced.createEleThe function adds child nodes to the old DOM node.
  - else if (oldCh) The new node has no sub-nodes and the old node has sub-nodes, so the old node can be deleted directly.

### key 的作用

没有 key 的情况，vue 将会从头

如果有 key，将会生成 key 的对象，oldKeyToIdx

// same key but different element. treat as new element
