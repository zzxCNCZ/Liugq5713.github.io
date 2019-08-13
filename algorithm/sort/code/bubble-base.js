const bubble = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.count("bubble");
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

console.log("res", bubble([11, 5, 6, 1, 7, 3]));
console.log("res", bubble([4, 11, 9, 12, 13, 7, 5, 6, 8, 20]));
