const bubbleWithPos = arr => {
  let i = arr.length - 1;
  while (i > 0) {
    let pos;
    for (let j = 0; j < i; j++) {
      console.count("bubble");
      if (arr[j] > arr[j + 1]) {
        pos = j;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    i = pos;
  }
  return arr;
};

console.log("res", bubbleWithPos([11, 5, 6, 1, 7, 3]));
console.log("res", bubbleWithPos([4, 11, 9, 12, 13, 7, 5, 6, 8, 20]));
