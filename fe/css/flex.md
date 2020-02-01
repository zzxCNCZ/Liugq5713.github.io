# flex box

## 背景

flexbox 旨在提供一个有效的方式对元素进行布局，排列，在一个容器里面分配空间，尽管它的尺寸不确定

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

## 容器的属性

- flex-direction: row | row-reverse | column | column-reverse;
- flex-wrap: nowrap | wrap | wrap-reverse;
- justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
- align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
- align-self: auto | flex-start | flex-end | center | baseline | stretch;

## 项目的属性

## 常见属性

首先，需要明白 flex 布局两个常见单词的意思。

- justification：对齐 （水平方向）
- alignment : 队列 ( 竖直方向 )

有 x 轴线和 y 轴线

Properties that control alignmentThe properties we will look at in this guide are as follows.

- justify-content : controls alignment of all items on the main axis.
- align-items : controls alignment of all items on the cross axis.
- align-self : controls alignment of an individual flex item on the cross axis.
- align-content : described in the spec as for “packing flex lines”; controls space between flex lines on the cross axis.
