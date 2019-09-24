/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-shu-b/
// 我这个解法是错误的

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2)
  let median
  arr.sort((a, b) => a - b)
  console.log(arr)
  if (arr.length % 2 === 1) {
    median = arr[Math.floor((arr.length - 1) / 2)]
  } else {
    median = (arr[Math.floor(arr.length / 2 - 1)] + arr[Math.ceil(arr.length) / 2]) / 2
  }
  return median
};


console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
