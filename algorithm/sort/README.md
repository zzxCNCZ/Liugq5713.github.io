# 排序算法

## 稳定性

保证排序前 2 个相等的数其在序列的前后位置顺序和排序后它们两个的前后位置顺序相同。在简单形式化一下，如果 Ai = Aj，Ai 原来在位置前，排序后 Ai 还是要在 Aj 位置前

## 比较

|          | 稳定性 | 时间复杂度 | 时间复杂度(最好情况) |
| -------: | -----: | ---------: | -------------------: |
| 冒泡排序 |   稳定 |     O(n^2) |  O(n) `通过记录 POS` |
|          |        |            |                      |
|          |        |            |                      |

## 参考

- [Sorting Algorithms visualization (English)，强烈推荐看，对理解排序算法运行的过程很有帮助](https://www.toptal.com/developers/sorting-algorithms)
- [优雅的 JavaScript 排序算法（ES6）代码仓库](https://github.com/RayJune/Elegant-JavaScript-Sorting-Algorithms)
