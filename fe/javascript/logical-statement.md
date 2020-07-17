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

- [for...of vs for...in Loops in JavaScript](https://alligator.io/js/for-of-for-in-loops/)

JavaScript 里面涉及到遍历元素的方法都介绍一下

- for
- while
- do while
- for in : loop through `properties of an object`,The for...in statement iterates over all non-Symbol, enumerable properties of an object.

```js
for (variable in object) {
  statement
}
```

- for of : The for...of statement creates a loop iterating over iterable objects, including:**built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables**.

```js
for (variable of iterable) {
  statement
}
```

## 优化 if else 面条代码

面条代码其实容易出现在不加思考的【糙快猛】式开发中。很多简单粗暴地【在这里加个 if，在那里多个 return】的 bug 修复方式，再加上注释的匮乏，很容易让代码可读性越来越差，复杂度越来越高。

```js
//判断语句优化
//适用于if else...if else 这样的判断
//方法一：使用查找表
//方法二：职责链模式

//普通代码
function win(x){
    if(x>=5){
        console.log('gt');
    }else if(x<0){
        console.log('lt')
    }else{
        console.log('middle')
    }
}
//查找表,这种只是把判断的逻辑放在了这个determineAction这个函数里面
function determineAction(x){
    if(x>=5){
        return 'gt';
    }else if(x<0){
        return 'lt';
    }else{
        return 'middle';
    }
}
const rules={
    'gt':function(){
        console.log('gt find');
    },
    'lt':function(){
        console.log('lt find');
    },
    'middle':function(){
        console.log('middle find');
    }
}
function find_win(x){
    var x=determineAction(x);
    return rules[x]();
}

//职责链的形式
const match_rule=[
    {
        match:function(x){
            return x>=5 ? true :false;
        },
        action:function(){
            console.log('gt duty');
        }
    },
    {
        match:function(x){
            return x<0 ? true :false;
        },
        action:function(){
            console.log('lt duty');
        }
    },
    {
        match:function(x){
            return (x<5&&x>=0) ? true :false;
        },
        action:function(){
            console.log('middle duty');
        }
    }
]
function duty_win(x){
    for(var i=0;i<match_rule.length;i++){
        if(match_rule[i].match(x)){
            return match_rule[i].action();
        }
    }
}

//测试结果
function getResult(){
    var x=Math.ceil(Math.random()*20)-10;
    console.log('----'+x+'----');

    win(x);
    find_win(x);
    duty_win(x);
};
setInterval(getResult,100)；
```

## 参考

- [for...of vs for...in Loops in JavaScript](https://alligator.io/js/for-of-for-in-loops/)
- [如何无痛降低 if else 面条代码复杂度](http://ewind.us/2017/refactor-if-else/)
