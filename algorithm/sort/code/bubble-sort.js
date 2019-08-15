export const bubble = (arr, compareFunc) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (compareFunc(arr[j], arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};