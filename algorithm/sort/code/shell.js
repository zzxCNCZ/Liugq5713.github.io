function shellSort(arr) {
  var gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (i = gap; i < arr.length; i++) {
      var j = i;
      var temp = arr[i];
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }

      arr[j] = temp;
    }

    if (gap == 2) {
      gap = 1;
    } else {
      gap = parseInt((gap * 5) / 11);
    }
  }
  return arr;
}

console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));
