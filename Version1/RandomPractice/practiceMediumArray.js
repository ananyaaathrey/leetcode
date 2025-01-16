// Merge Intervals
// Problem Statement:
// Given a collection of intervals, merge all overlapping intervals.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// function mergeIntervals2(nums) {
//   if (nums.length === 0) return []
//   nums.sort((a, b) => a[0] - b[0])
//   const merged = []
//   let left = nums[0][0],
//     right = nums[0][1]
//   for (let i = 1; i < nums.length; i++) {
//     if (right >= nums[i][0]) {
//       // overlap for single
//       merged.push([left, Math.max(nums[i][1], right)])
//     } else {
//       merged.push(nums[i])
//     }
//     left = nums[i][0]
//     right = nums[i][1]
//   }
//   return merged
// }

// function mergeIntervals2(nums) {
//   if (nums.length === 0) return []
//   nums.sort((a, b) => a[0] - b[0])
//   const merged = []
//   let left = nums[0][0],
//     right = nums[0][1]
//   for (let i = 1; i < nums.length; i++) {
//     if (right >= nums[i][0]) {
//       // overlap for single
//       // merged.push([left, Math.max(nums[i][1], right)])
//       right = Math.max(nums[i][1], right)
//     } else {
//       merged.push([left, right])
//       left = nums[i][0]
//       right = nums[i][1]
//     }
//   }
//   merged.push([left, right])
//   return merged
// }
// console.log(
//   '---mergeIntervals2(): ',
//   mergeIntervals2([
//     [1, 5],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// )
// console.log(
//   '---mergeIntervals2(): ',
//   mergeIntervals2([
//     [1, 5],
//     [2, 6],
//     [5, 10],
//     [15, 18],
//     [44, 56],
//   ])
// )
// // function mergeIntervals(nums) {
// //   nums.sort((a, b) => a[0] - b[0])
// //   const merged = []
// //   for (let i = 0; i < nums.length; i++) {
// //     if (merged.length === 0 || merged[merged.length - 1][1] < nums[i][0]) {
// //       merged.push(nums[i])
// //     } else {
// //       merged[merged.length - 1][1] = nums[i][1]
// //     }
// //   }
// //   return merged
// // }
// // console.log(
// //   'mergeIntervals([[1,3],[2,6],[8,10],[15,18]]): ',
// //   mergeIntervals([
// //     [1, 5],
// //     [2, 6],
// //     [8, 10],
// //     [15, 18],
// //   ])
// // )

// // // Three Sum
// // // Problem Statement:
// // // Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such
// // // that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// // // Input: nums = [-1,0,1,2,-1,-4]
// // // Output: [[-1,-1,2],[-1,0,1]]
// // // Explanation: The solution set is [[-1,-1,2],[-1,0,1]].

// // function threeSum(arr) {
// //   let sum

// //   let i = 0,
// //     j = 1,
// //     k
// //   const result = []
// //   while (i < arr.length) {
// //     while (j < arr.length) {
// //       sum = arr[i] + arr[j]
// //       for (let x = j; x < arr.length; x++) {
// //         if (arr[x] === sum * -1) {
// //           result.push([arr[i], arr[j], arr[x]])
// //         }
// //       }
// //       j++
// //     }
// //     i++
// //   }
// //   return result
// // }
// // console.log('threeSum(arr): ', threeSum([-1, 0, 1, 2, -1, -4]))

// // // using hash
// // function findPairs(arr, newTarget, start, currentElement) {
// //   const set = new Set()
// //   const result = []

// //   for (let i = start; i < arr.length; i++) {
// //     const complement = newTarget - arr[i]
// //     if (set.has(complement)) {
// //       result.push([currentElement, arr[i], complement])
// //     } else {
// //       set.add(arr[i])
// //     }
// //   }
// //   return result
// // }
// // function findTriplets(arr, target) {
// //   const result = []
// //   for (let i = 0; i < arr.length; i++) {
// //     newTarget = target - arr[i]
// //     const pairs = findPairs(arr, newTarget, i, arr[i])
// //     result.push(...pairs)
// //   }
// //   return result
// // }
// // console.log('findTriplets(arr): ', findTriplets([-1, 0, 1, 2, -1, -4], 0))

// function arrayEvenAndOdd(arr) {
//   let i = 0,
//     j = arr.length - 1
//   while (j >= i) {
//     if (arr[j] % 2 === 0 && arr[i] % 2 !== 0) {
//       ;[arr[j], arr[i]] = [arr[i], arr[j]]
//       i++
//       j--
//     } else if (arr[j] % 2 === 0) {
//       i++
//     } else {
//       j--
//     }
//   }
//   return arr
// }
// console.log('arrayEvenAndOdd(arr): ', arrayEvenAndOdd([7, 2, 9, 4, 6, 5]))

// function findCountOf1s(arr) {
//   let low = 0,
//     high = arr.length - 1,
//     mid
//   if (arr.length === 1 && arr[0] === 1) {
//     return 1
//   }
//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)

//     if (arr[mid] === 1 && arr[mid + 1] !== 1) {
//       return mid + 1
//     }
//     if (arr[mid] === 0 && arr[mid - 1] === 1) {
//       return mid
//     }
//     if (arr[mid] === 0 && arr[mid - 1] === 0) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return 0
// }
// let arr = [1, 1, 1, 0, 0]
// let n = arr.length
// console.log("Count of 1's in given array is " + findCountOf1s(arr))

// function minAbsSumPair(arr) {
//   arr.sort((a, b) => a - b) // sort in ascending

//   let low = 0,
//     high = arr.length - 1,
//     sum,
//     min = Infinity,
//     abs,
//     pair

//   while (low < high) {
//     sum = arr[low] + arr[high]
//     abs = Math.abs(sum)
//     if (abs < min) {
//       min = abs
//       pair = [arr[low], arr[high]]
//     }

//     if (sum < 0) {
//       low++
//     } else {
//       high--
//     }
//   }
//   return pair
// }
// const arr = [-8, 5, 2, -6]
// //  [1, 60, -10, 70, -80, 85]
// console.log(minAbsSumPair(arr))

function findPair(arr, diff) {
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    const complement1 = arr[i] + diff
    const complement2 = arr[i] - diff

    if (set.has(complement1)) {
      return [arr[i], complement1]
    }
    if (set.has(complement2)) {
      return [arr[i], complement2]
    }
  }
  return []
}
const arr = [1, 8, 30, 40, 100]
const diff = -60
console.log('findPair(arr, diff): ', findPair(arr, diff))
