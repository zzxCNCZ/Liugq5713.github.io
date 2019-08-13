# 逻辑语句

## 条件判断

### 逻辑运算符

> 有时候，你可能会有 的操作，但是其实用逻辑运算符就可以妥妥的解决

- `expr1 && expr2`，Returns expr1 if it can be converted to false; otherwise, returns expr2.

- `expr1 || expr2`， Returns expr1 if it can be converted to true; otherwise, returns expr2.

### 三元运算符

`someValue ? 'boom' : 'null'`适用于简单的判断,太长也不便于理解

### 条件语句

#### 条件语句中参数的顺序

比较的左侧，被问询的值，它的值倾向于不断的变化
比较的右侧，它的值倾向于常量

举个例子： “如果你的年收入至少是 10 万美元”或者“如果你不小于 18 岁。”这种说法很常见，但是“如果 18 岁小于或等于你的年龄”这样的说法却很少见。

#### if/else 语句块的顺序

> 倾向性之间会有冲突，那么你就要自己判断了

- 首先处理正逻辑而不是负逻辑的情况
- 先处理掉简单的情况
- 先处理有趣的或者是可疑的情况

## 循环

JavaScript 里面涉及到遍历元素的方法都介绍一下

- for
- while
- do while
- for in : loop through `properties of an object`
- for of : for `iterating collections`
