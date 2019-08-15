export const bubbleWithTwoWay = arr => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    for (let j = end; j > start; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
    start++;
    end--;
  }
  return arr;
};
