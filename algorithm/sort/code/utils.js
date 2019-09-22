export const swap = (arr, i, j) => {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}
