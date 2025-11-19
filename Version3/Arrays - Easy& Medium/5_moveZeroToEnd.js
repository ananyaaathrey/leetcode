// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let x = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i]
      x++
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([1, 1, 0, 3, 0]))
console.log(moveZeroes([1, 0]))
console.log(moveZeroes([0, 1]))

console.log(moveZeroes([1]))
console.log(moveZeroes([0]))

console.log(moveZeroes([0, 0]))
console.log(moveZeroes([1, 1]))

console.log(moveZeroes([-1, -10, 0, -9, 0, 0, 0]))
