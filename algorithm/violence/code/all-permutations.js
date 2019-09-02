/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  if (nums.length === 1) {
    return [nums]
  }
  let preNums = permute(nums.slice(1))
  for (let i = 0; i < preNums.length; i++) {
    for (let j = 0; j <= preNums[i].length; j++) {
      let p = preNums[i].slice(0)
      p.splice(j, 0, nums[0])
      res.push(p)
    }
  }
  return res
};
console.log(permutate([1, 2, 3]))


var permute = function (nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if (remaining.length <= 0) results.push(current.slice());
    else {
      // Loop through remaining elements
      for (let i = 0; i < remaining.length; i++) {
        // Insert the iTH element onto the end of current
        current.push(remaining[i]);
        // Recurse with inserted element removed
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1)));
        // Remove last inserted element for next iteration
        current.pop();
      }
    }
  };

  permutations([], nums);
  return results;
};
