/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) {
//     return 0
//   }
//   const numsSet = new Set(nums)
//   let consecutive = 1,
//     consecutiveNumber = null

//   for (let num of numsSet) {
//     let nextNum = num
//     if (consecutiveNumber) {
//       nextNum = consecutiveNumber
//     }

//     let less = nextNum - 1,
//       more = nextNum + 1

//     if (numsSet.has(less)) {
//       consecutive++
//       consecutiveNumber = less
//     } else if (
//       numsSet.has(more) &&
//       consecutiveNumber &&
//       consecutiveNumber > more
//     ) {
//       consecutive++
//       consecutiveNumber = more
//     }
//   }
//   return consecutive
// }

// console.log('longestConsecutive: ', longestConsecutive([100, 4, 200, 1, 3, 2]))
// console.log(
//   '2 longestConsecutive: ',
//   longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
// )
// console.log('2 longestConsecutive: ', longestConsecutive([1, 2, 0, 1]))

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0

  const numsSet = new Set(nums)
  let longestStreak = 0

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1

      while (numsSet.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}

console.log('longestConsecutive: ', longestConsecutive([100, 4, 200, 1, 3, 2]))
// console.log(
//   '2 longestConsecutive: ',
//   longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
// )
// console.log('2 longestConsecutive: ', longestConsecutive([1, 2, 0, 1]))
