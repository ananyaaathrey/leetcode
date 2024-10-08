// Find the maximum and minimum element in an array
// Problem: Given an array of integers, write a function that returns the maximum and minimum element in the array.

// Input: [3, 5, 7, 2, 8, -1, 4, 10, 12]
// Output: Max = 12, Min = -1

function findMaxMin(nums) {
  if (nums.length === 0) {
    return null
  }
  let max = nums[0],
    min = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return { max, min }
}
console.log('findMaxMin(nums): ', findMaxMin([3, 5, 7, 2, 8, -1, 4, 10, 12]))

// Reverse an array
// Problem: Write a function that takes an array and reverses its elements in-place without using extra space.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function reverse(arr) {
  const mid = Math.floor(arr.length / 2)
  let j = arr.length - 1
  for (let i = 0; i < mid && j > 0; i++) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    j--
  }
  return arr
}

console.log('reverse(arr): ', reverse([1, 2, 3, 4, 5]))

// Find the sum of all elements in an array
// Problem: Write a function that returns the sum of all elements in an array.
// Input: [3, 2, 1, 4]
// Output: 10

function sumArrayElements(arr) {
  let sum = 0
  for (let num of arr) {
    sum += num
  }
  return sum
}
console.log('sumArrayElements(arr): ', sumArrayElements([3, 2, 1, 4]))

// Move all zeros to the end of an array
// Problem: Write a function that takes an array of integers and moves all zeros to the end, while maintaining the relative order of the non-zero elements.
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZerosToEnd(arr) {
  let nonZeroIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      if (i !== nonZeroIndex) {
        ;[arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]]
      }
      nonZeroIndex++
    }
  }
  return arr
}
console.log('moveZerosToEnd([0, 1, 0, 3, 12]): ', moveZerosToEnd([1, 0, 0, 0]))

// Find if an array contains duplicates
// Problem: Write a function that checks if any value appears at least twice in the array. The function should return true if any value is duplicated, and false otherwise.
// Input: [1, 2, 3, 1]
// Output: true
// Input: [1, 2, 3, 4]
// Output: false
function hasDuplicates(arr) {
  const set = new Set()
  for (let num of arr) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }
  return false
}
console.log('hasDuplicates([1, 2, 3, 1]): ', hasDuplicates([1, 2, 3, 1]))
console.log('hasDuplicates([1, 2, 3, 4]): ', hasDuplicates([1, 2, 3, 4]))

// Find the second largest element in an array
// Problem: Write a function to return the second largest element in a given array of integers.
// Input: [10, 5, 9, 12]
// Output: 10

function findSecondLargestElement(arr) {
  if (arr.length < 2) {
    return 'Array should have at least two elements'
  }
  let largest, secondLargest
  if (arr[0] > arr[1]) {
    largest = arr[0]
    secondLargest = arr[1]
  } else {
    largest = arr[1]
    secondLargest = arr[0]
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]
    }
  }
  return { largest, secondLargest }
}
console.log(
  'findSecondLargestElement([10, 5, 9, 12]): ',
  findSecondLargestElement([10, 5, 9, 12])
)

// Rotate an array by k positions
// Problem: Write a function that rotates an array by k positions to the right. You may assume that k is non-negative.
// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

function rotateByKPositions(arr, k) {
  if (k > arr.length) {
    k = k % arr.length
  }
  if (k === 0) return arr
  let final = []
  for (let i = arr.length - k; i < arr.length; i++) {
    final.push(arr[i])
  }
  for (let j = 0; j < arr.length - k; j++) {
    final.push(arr[j])
  }
  return final
}

console.log('rotateByKPositions(arr): ', rotateByKPositions([1, 2, 3], 10))

// Merge two sorted arrays
// Problem: Write a function that merges two sorted arrays into one sorted array.
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
function mergeSortedArray(a1, a2) {
  let i = 0,
    j = 0
  const sortedArr = []
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      sortedArr.push(a1[i])

      i++
    } else {
      sortedArr.push(a2[j])
      j++
    }
  }
  while (i < a1.length) {
    sortedArr.push(a1[i])
    i++
  }

  while (j < a2.length) {
    sortedArr.push(a2[j])
    j++
  }
  return sortedArr
}
console.log('mergeSortedArray(a1, a2): ', mergeSortedArray([], [-2, 0, 4]))

// Find the missing number in an array
// Problem: You are given an array containing n distinct numbers taken from the range 0 to n. Write a function to find the missing number.
// Input: [3, 0, 1]
// Output: 2
function findMissingNumber(arr) {
  const set = new Set(arr)
  let min = arr[0],
    max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i])
    }
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }

  const missing = []
  for (let j = min; j <= max; j++) {
    if (!set.has(j)) {
      missing.push(j)
    }
  }
  return missing
}
console.log('findMissingNumber([3, 0, 1]): ', findMissingNumber([0, -2, 2]))

function findMissingNumbers2(arr) {
  const set = new Set(arr)
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  const missing = []
  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      missing.push(i)
    }
  }
  return missing
}

console.log('findMissingNumbers([0, -2, 2]):', findMissingNumbers2([0, -2, 2]))

// Check if an array is a palindrome
// Problem: Write a function that checks if an array is a palindrome. An array is a palindrome if it reads the same forward and backward.
// Input: [1, 2, 3, 2, 1]
// Output: true

// Input: [1, 2, 3, 4, 5]
// Output: false

function checkArrayIsPallindrome(arr) {
  const n = arr.length - 1
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[n - i]) {
      return false
    }
  }
  return true
}
console.log(
  'checkArrayIsPallindrome([1, 2, 3, 2, 1]): ',
  checkArrayIsPallindrome([1, 2, 3, 2, 1])
)
console.log(
  'checkArrayIsPallindrome([1, 2, 3, 4, 5]): ',
  checkArrayIsPallindrome([1, 2, 3, 4, 5])
)

// Find the intersection of two arrays
// Problem: Given two arrays, write a function to return their intersection. Each element in the result should appear as many times as it shows in both arrays.
// Input: [1, 2, 2, 1], [2, 2]
// Output: [2, 2]

function findIntersection(a1, a2) {
  const map1 = new Map()
  const map2 = new Map()

  for (let i = 0; i < a1.length; i++) {
    if (map1.has(a1[i])) {
      let val = map1.get(a1[i])
      map1.set(a1[i], ++val)
    } else {
      map1.set(a1[i], 1)
    }
  }
  for (let j = 0; j < a2.length; j++) {
    if (map2.has(a2[j])) {
      let val = map2.get(a2[j])
      map2.set(a2[j], ++val)
    } else {
      map2.set(a2[j], 1)
    }
  }

  const result = []
  for (let [key, value] of map1) {
    if (map2.has(key)) {
      const count = Math.min(value, map2.get(key))
      for (let i = 0; i < count; i++) {
        result.push(key)
      }
    }
  }
  return result
}
console.log(
  'findIntersection(a1, a2): ',
  findIntersection([1, 2, 2, 1, 3], [2, 2])
)

console.log(
  'findIntersection([4, 9, 5, 4], [9, 4, 9, 8, 4]): ',
  findIntersection([4, 9, 5, 4], [9, 4, 9, 8, 4])
)

function findIntersection2(a1, a2) {
  const map = new Map()

  // Count elements in the first array
  for (let num of a1) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  const result = []

  // Find intersection using the second array
  for (let num of a2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num)
      map.set(num, map.get(num) - 1) // Decrement the count
    }
  }

  return result
}

// Find the longest contiguous subarray sum
// Problem: Write a function to find the maximum sum of a contiguous subarray (Kadane’s Algorithm).
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function maxSubArray(nums) {
  let sum = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // Either continue the current subarray or start a new one
    sum = Math.max(nums[i], sum + nums[i])
    if (sum > max) {
      max = sum
    }
  }
  return max
}
console.log('maxSubArray(nums): ', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

function maxSubArrayWithElements(nums) {
  let sum = nums[0]
  let max = nums[0]
  let tempStart = 0,
    start = 0,
    end = 0
  for (let i = 1; i < nums.length; i++) {
    // Either continue the current subarray or start a new one
    if (nums[i] > sum + nums[i]) {
      sum = nums[i]
      tempStart = i
    } else {
      sum += nums[i]
    }
    if (sum > max) {
      max = sum
      start = tempStart
      end = i
    }
  }
  return { max, array: nums.slice(start, end + 1) }
}
console.log(
  'maxSubArrayWithElements(nums): ',
  maxSubArrayWithElements([-2, 1, -3, 4, -1, 2, 1, -5, 4])
)
