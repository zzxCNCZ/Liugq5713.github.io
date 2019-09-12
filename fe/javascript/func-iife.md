# 函数 IIFE＆闭包

##　函数定义

### 普通定义

```js
function sayHi() {
  alert("Hello, World!")
}

sayHi()
```

### 函数表达式

```js
var msg = "Hello, World!"
var sayHi = function() {
  alert(msg)
}
```

###　命名函数表达式

```js
var fibo = function fibonacci() {
  // you can use "fibonacci()" here as this funciton expression has a name.
}

// fibonacci() here fails, but fibo() works.
```

## IIFE

示例开头为一元操作符 `!` (使用其他的一元操作符也是可以的，比如`+-~`)，让 JavaScript 将其后的代码解释为一个表达式，而不是声明

```js
!(function() {
  alert("Hello from IIFE!")
})()
// Shows the alert "Hello from IIFE!"
```

### 经典的 IIFE

```txt
// Variation 1
(function() {
    alert("I am an IIFE!");
}());

// Variation 2
(function() {
    alert("I am an IIFE, too!");
})();
```

### IIFE 应用

- private variables

```js
;(function IIFE_initGame() {
  // Private variables that no one has access to outside this IIFE
  var lives
  var weapons

  init()

  // Private function that no one has access to outside this IIFE
  function init() {
    lives = 5
    weapons = 10
  }
})()
```

- IIFEs with a return value

```js
var result = (function() {
  return "From IIFE"
})()

alert(result) // alerts "From IIFE"
```

- IIFEs with parameters

```js
// jquery的使用实例
;(function($, global, document) {
  // use $ for jQuery, global for window
})(jQuery, window, document)
```

## 参考

- [Essential JavaScript: Mastering Immediately-invoked Function Expressions](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)
