function backdate(n) {
  var arr = [];
  var k = 1; // 第n的皇后
  arr[0] = 1;

  while (k > 0) {

    arr[k - 1] = arr[k - 1] + 1;
    while ((arr[k - 1] <= n) && (!check2(arr, k - 1))) {
      arr[k - 1] = arr[k - 1] + 1;
    }
    // 这个皇后满足了约束条件，进行下一步判断

    if (arr[k - 1] <= n) {
      if (k == n) { // 第n个皇后
        console.log(arr);
      } else {
        k = k + 1; // 下一个皇后
        arr[k - 1] = 0;
      }
    } else {
      k = k - 1; // 回溯，上一个皇后
    }
  }
}
