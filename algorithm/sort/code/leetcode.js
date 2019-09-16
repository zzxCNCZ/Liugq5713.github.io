const heapify = (arr) => {
  function swap(i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  const max_heapify = (start, end) => {
    let dad = start
    let son = start * 2 + 1
    if (son > end) {
      return
    }
    if (son + 1 < end && arr[son + 1] > arr[son]) {
      son++
    }
    if (arr[son] > arr[dad]) {
      swap(dad, son)
      max_heapify(son, end)
    }
  }
  var len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i > 0; i--) {
    max_heapify(i, len)
  }
  return arr
}

console.log(heapify([4, 6, 8, 5, 9]))
