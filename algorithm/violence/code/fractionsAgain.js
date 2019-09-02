const findFractionsAgain = k => {
  let x = 1
  let y = 1
  let arr = []

  for (let y = 1; y <= 2 * k; y++) {
    if (y === k) {
      continue
    }
    x = (k * y) / (y - k)
    if (Number.isInteger(x) && x > 0 && x >= y) {
      arr.push({ x, y })
    }
  }
  return arr
}
