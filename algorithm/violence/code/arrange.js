function permutate (str) {
  // 保存每一轮递归的排列结果
  var result = []
  // 初始条件：长度为1
  if (str.length == 1) {
    return [str]
  } else {
    // 求剩余子串的全排列,对每个排列进行遍历
    var preResult = permutate(str.slice(1))
    console.log('preResult', preResult)
    for (var j = 0; j < preResult.length; j++) {
      for (var k = 0; k < preResult[j].length + 1; k++) {
        // 将首字母插入k位置
        var temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k)
        result.push(temp)
      }
    }
    return result
  }
}

console.log(permutate('123'))
