const AllPermutationDict = arr => {
  let j = arr.length - 1
  // let j = 1
  let res = []
  res.push(arr.slice())
  while (((j = findSecondLargeRight(arr)), j >= 0)) {
    let arr_r = arr.slice(j + 1)
    arr_r = arr_r.filter(i => i > arr[j])
    if (Math.min(...arr_r) > arr[j]) {
      const k = arr.indexOf(Math.min(...arr_r))
      ;[arr[j], arr[k]] = [arr[k], arr[j]]
      arr = arr.slice(0, j + 1).concat(arr.slice(j + 1).reverse())
      res.push(arr.slice(0))
    } else {
      break
    }
  }
  return res
}

const findSecondLargeRight = arr => {
  let j = arr.length - 1
  for (j; j > 0; j--) {
    if (arr[j - 1] < arr[j]) {
      return j - 1
    }
  }
  return -1
}

console.log('AllPermutationDict', AllPermutationDict([1, 2, 3, 4]))
