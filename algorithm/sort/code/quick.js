function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}

const divide = (A, p, r) => {
  // 基准
  const x = A[r - 1]
  let i = p - 1
  for (let j = i + 1; j < r; j++) {
    if (A[j] < x) {
      i++
      swap(A, i, j)
    }
  }
  swap(A, i + 1, r - 1)
  return i + 1
}

const qsort = (A, p = 0, r = A.length) => {
  if (p < r - 1) {
    const q = divide(A, p, r)
    qsort(A, p, q)
    qsort(A, q + 1, r)
  }
  return A
}

console.log(qsort([11, 5, 6, 1, 7, 3]))
