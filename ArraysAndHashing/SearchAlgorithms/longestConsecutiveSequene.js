// Problem: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4], which has a length of 4.

function findLongestSequence(nums) {
  const numSet = new Set(nums)
  let maxLength = 0

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1
      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentStreak++
      }
      maxLength = Math.max(maxLength, currentStreak)
    }
  }
  return maxLength
}

const nums = [100, 4, 200, 1, 3, 2]
console.log('findLongestSequence: ', findLongestSequence(nums))
