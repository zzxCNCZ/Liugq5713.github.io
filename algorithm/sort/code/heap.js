const heap_sort = function (array) {
  var arr = array.slice(0);
  function swap(i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  function max_heapify(start, end) {
    //建立父节点指标和子节点指标
    var dad = start;
    var son = dad * 2 + 1;
    //若子节点指标超過范围直接跳出函數
    if (son >= end)
      return;
    //先比較兩個子节点大小，選擇最大的
    if (son + 1 < end && arr[son] < arr[son + 1])
      son++;
    //如果父節點小於子節點時，交換父子內容再繼續子節點和孫節點比較
    if (arr[dad] <= arr[son]) {
      swap(dad, son);
      max_heapify(son, end);
    }
  }

  var len = arr.length;
  //初始化，i从最后一个父节点开始调整
  for (var i = Math.floor(len / 2) - 1; i >= 0; i--)
    max_heapify(i, len);
  //先將第一個元素和已排好元素前一位做交換，再從新調整，直到排序完畢
  for (var i = len - 1; i > 0; i--) {
    swap(0, i);
    max_heapify(0, i);
  }

  return arr;
};
var a = [3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6];
console.log(heap_sort(a));
