# 类型转换

> 这个知识其实我不想总结，但是还是有人问

## 加性运算符有大量的特殊行为

```txt
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
```

## 参考

- [w3schools js 类型](https://www.w3schools.com/js/js_type_conversion.asp)
