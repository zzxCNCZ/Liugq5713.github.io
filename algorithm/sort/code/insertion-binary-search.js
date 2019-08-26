const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (value >= arr[mid]) {
      min = mid + 1;
    }

    if (value < arr[mid]) {
      max = mid - 1;
    }
  }

  return min;
};

export const insertByBinarySearch = arr => {
  for (let i = 1; i < arr.length; i++) {
    const arr_find = arr.slice(0, i);
    const idx = binarySearch(arr_find, arr[i]);
    if (idx !== i) {
      arr.splice(idx, 0, arr[i]);
      arr.splice(i + 1, 1);
    }
  }
  return arr;
};
