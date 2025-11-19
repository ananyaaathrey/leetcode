// https://leetcode.com/problems/max-consecutive-ones/submissions/1834452558/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentMax = 0,
    max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax++
    } else {
      if (currentMax > max) {
        max = currentMax
      }
      currentMax = 0
    }
  }
  return currentMax > max ? currentMax : max
}

console.log(
  'expected : 5; ',
  findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 1, 1])
)

console.log('expected : 4; ', findMaxConsecutiveOnes([1, 1, 1, 1]))
console.log('expected : 1; ', findMaxConsecutiveOnes([1]))
console.log('expected : 0; ', findMaxConsecutiveOnes([0]))
console.log('expected : 0; ', findMaxConsecutiveOnes([0, 0]))
console.log('expected : 1; ', findMaxConsecutiveOnes([0, 1]))
console.log('expected : 1; ', findMaxConsecutiveOnes([1, 0]))
console.log('expected : 2; ', findMaxConsecutiveOnes([1, 1]))
