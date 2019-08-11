# 13. Roman to Integer

第一次拿 go 写 leetcode，有那么一点点不熟练

```go
func romanToInt(s string) int {
	romanMap := map[rune]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	res := 0
	for i := 0; i <len(s); i++ {
		fmt.Println(string(s[i]))
		if i == 0 {
			res = romanMap[rune(s[i])]
			continue
		}
		lastNum := romanMap[rune(s[i-1])]
		num := romanMap[rune(s[i])]
		fmt.Println("lastNum",lastNum,num,res)
		if lastNum < num {
			res = res - lastNum*2 + num
		} else {
			res = res + num
		}
	}
	return res
}
```

看一看别人怎么写的

就像 JavaScript 里面数据的循环，我一般会使用数组的循环方法，map 或者 forEach , go 语言提供了 range iterates over elements in a variety of data structures.

另外别人借助了 buffer 变量，保存上一个字符串所代表的值，这样的确省了一点点运算上的开销，值得借鉴学习

单个字符的 type 是 rune

```go
func romanToInt(s string) int {
    buffer := make([]int, 0)
    result := 0
    for _, b := range s {
        v := mapping[b]
        if len(buffer) == 0 {
            buffer = append(buffer, v)
        } else if buffer[0] >= v {
            result += buffer[0]
            buffer[0] = v
        } else {
            result += v - buffer[0]
            buffer = buffer[:0]
        }
    }
    if len(buffer) == 1 {
        result += buffer[0]
    }
    return result
}

var mapping map[rune] int = map[rune] int {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
```
