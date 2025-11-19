// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++
    } else {
      hash[nums[i]] = 1
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i]
    }
  }
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))

var singleNumberOptimised = function (nums) {
  let xor = 0
  for (let i = 0; i < nums.length; i++) {
    xor = nums[i] ^ xor
  }
  return xor
}

console.log(singleNumberOptimised([2, 2, 1]))
console.log(singleNumberOptimised([4, 1, 2, 1, 2]))
