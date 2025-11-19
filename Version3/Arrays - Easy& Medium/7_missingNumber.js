// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length
  const totalSum = (n * (n + 1)) / 2
  let currentSum = 0
  for (let i = 0; i < n; i++) {
    currentSum = currentSum + nums[i]
  }
  return totalSum - currentSum
}

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
