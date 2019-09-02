# 希尔排序

::: tip 核心概念

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

1. 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到 O(n) 的效率；
2. 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位 ；

其中 gap（增量）的选择是希尔排序的重要部分。只要最终 gap 为 1 任何 gap 序列都可以工作。算法最开始以一定的 gap 进行排序。然后会继续以一定 gap 进行排序，直到 gap = 1 时，算法变为插入排序。
:::

<<< @/algorithm/sort/code/shell.js