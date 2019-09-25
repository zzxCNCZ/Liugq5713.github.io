/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode-cn.com/problems/binary-search/
// 需要自己好好反思下为什么没有理解二分查找
// 这道题的重点就是 二分查找的边界
var search = function (nums, target) {
  let len = nums.length
  if (len === 0) {
    return -1
  }
  let start = 0;
  let end = len - 1
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] > target) {
      end = mid - 1
    } if (nums[mid] < target) {
      start = mid + 1
    }
  }
  return -1

};


console.log(search([-1, 0, 3, 5, 9, 12], 2))
console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([5], 5))
console.log(search([-1, 0, 3, 5, 9, 12], 3))

