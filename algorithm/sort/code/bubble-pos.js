export const bubbleWithPos = arr => {
  let i = arr.length - 1;
  while (i > 0) {
    let pos;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    i = pos;
  }
  return arr;
};
