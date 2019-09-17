
const check = (arr, n) => {
  for (var i = 0; i <= n - 1; i++) {
    // 判断位置 不在对角线位置 不在同一列
    if ((Math.abs(arr[i] - arr[n]) == n - i) || (arr[i] == arr[n])) {
      return false;
    }
  }
  return true;
}
// 在适当节点判断是否符合，不符合就不再进行这条支路上的探索
const queen = () => {
  var arr = [];
  for (arr[0] = 1; arr[0] <= 4; arr[0]++) {
    for (arr[1] = 1; arr[1] <= 4; arr[1]++) {
      if (!check(arr, 1)) continue; //摆两个皇后产生冲突的情况
      for (arr[2] = 1; arr[2] <= 4; arr[2]++) {
        if (!check(arr, 2)) continue; //摆三个皇后产生冲突的情况
        for (arr[3] = 1; arr[3] <= 4; arr[3]++) {
          if (!check(arr, 3)) {
            continue;
          } else {
            console.log(arr);
          }
        }
      }
    }
  }
}

queen()
