# 树

> 二叉树本身就是递归型数据结构，所以很多问题都可以用递归实现，刻意记一下

## Maximum Depth of Binary Tree

```js
var maxDepth = function(root) {
  if (!root) {
    return 0
  } else {
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}
```

## Binary Tree Level Order Traversal

```js
var levelOrder = function(root) {
  if (!root) return []

  let Row = []
  let res = []
  Row.push([root])

  for (let row of Row) {
    let nextLevel = []
    let current = []

    row.map(item => {
      current.push(item.val)
      if (item.left) nextLevel.push(item.left)
      if (item.right) nextLevel.push(item.right)
    })

    res.push(current)

    if (nextLevel.length > 0) {
      Row.push(nextLevel)
    }
  }
  return res
}
```
