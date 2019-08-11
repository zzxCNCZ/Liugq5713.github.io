---
title: 17. Letter Combinations of a Phone Number
---

```go
func getLetter(letters []string, phoneLetters []string) []string {
	fmt.Println(letters, phoneLetters)
	if len(letters) == 0 {
		return phoneLetters
	}
	res := []string{}
	for _, v1 := range letters {
		for _, v2 := range phoneLetters {
			res = append(res, v1+v2)
		}
	}

	return res
}

func letterCombinations(digits string) []string {
	phoneMap := map[int][]string{
		2: {"a", "b", "c"},
		3: {"d", "e", "f"},
		4: {"g", "h", "i"},
		5: {"j", "k", "l"},
		6: {"m", "n", "o"},
		7: {"p", "q", "r", "s"},
		8: {"t", "u", "v"},
		9: {"w", "x", "y", "z"},
	}
	res := []string{}
	for k, v := range digits {
		// digitsInt, nil := strconv.Atoi(v)
		digitsInt := int(v - '0')
		res = getLetter(res, phoneMap[digitsInt])
		fmt.Println(k, digitsInt)
	}
	return res
}
```
