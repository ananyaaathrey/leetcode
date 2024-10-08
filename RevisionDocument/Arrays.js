// 1. Easy: Find the maximum number in an array
function findMax(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

// 2. Medium: Two Sum Problem
// Given an array of integers and a target sum, find two numbers that add up to the target sum.
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

// 3. Medium: Move Zeroes
// Given an array nums, move all the zeroes to the end while maintaining the order of non-zero elements.
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

// 2. Medium: Contains Duplicate
// Problem Statement: Given an array of integers, determine if any value appears at least twice.
function containsDuplicate(nums) {
  const seen = new Set()

  for (let num of nums) {
    if (seen.has(num)) {
      return true // Duplicate found
    }
    seen.add(num)
  }

  return false // No duplicates
}
console.log(containsDuplicate([1, 2, 3, 1])) // Output: true

// Easy: Maximum Subarray
// Problem Statement: Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// Kadane’s algorithm
function maxSubArray(nums) {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // Output: 6

// 4. Hard: Find the K-th Largest Element
// Given an array, find the k-th largest element in it.
function findKthLargestEasy(nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}
function findKthLargest(nums, k) {
  const minHeap = []

  for (const num of nums) {
    minHeap.push(num) // Add the current number
    minHeap.sort((a, b) => a - b) // Sort to keep the smallest at the root

    if (minHeap.length > k) {
      minHeap.shift() // Remove the smallest if heap size exceeds k
    }
  }

  return minHeap[0] // The root is the k-th largest element
}

function findKthLargest3(nums, k) {
  const quickSelect = (left, right, kSmallest) => {
    if (left === right) return nums[left] // If the list contains only one element

    // Select a random pivot index
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
    const pivot = nums[pivotIndex]

    // Move pivot to the end
    ;[nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]

    // Partitioning
    let storeIndex = left
    for (let i = left; i < right; i++) {
      if (nums[i] > pivot) {
        ;[nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]]
        storeIndex++
      }
    }
    // Move pivot to its final place
    ;[nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]]

    // If the pivot is in its final sorted position
    if (kSmallest === storeIndex) {
      return nums[storeIndex]
    } else if (kSmallest < storeIndex) {
      return quickSelect(left, storeIndex - 1, kSmallest)
    } else {
      return quickSelect(storeIndex + 1, right, kSmallest)
    }
  }

  return quickSelect(0, nums.length - 1, k - 1)
}
