const heapify = (arr) => {
  function swap(i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  const max_heapify = (start, end) => {
    let dad = start
    let son = start * 2 + 1
    if (son >= end) {
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
  // 初始化堆 ，i从最后一个父节点开始调整
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(i, len)
  }
  // 先将第一个元素和已经排好的元素的前一位做交换，然后重新调整
  for (let i = len - 1; i > 0; i--) {
    swap(0, i)
    max_heapify(0, i)
  }
  return arr
}

console.log(heapify([4, 6, 8, 5, 9]))
