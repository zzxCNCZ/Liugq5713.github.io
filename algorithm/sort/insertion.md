# 插入排序

## TL;DR

默认 a[0] 为已排序数组中的元素，从 arr[1] 开始逐渐往已排序数组中插入元素，从后往前一个个比较，如果待插入元素小于已排序元素，则已排序元素往后移动一位，直到待插入元素找到合适的位置并插入已排序数组。

## 基本实现

<<< @/algorithm/sort/code/insertion.js

## 二分查找版

使用二分查找快速找到插入的位置

<<< @/algorithm/sort/code/insertion-binary-search.js
