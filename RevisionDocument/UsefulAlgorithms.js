// 1. Kadane’s Algorithm
function maxSubArray(nums) {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

// Example usage
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // Output: 6

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

// 2. Two-Pointer Technique (Finding Pairs that Sum to Target)
function twoSum(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      return [nums[left], nums[right]]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return null // Return null if no pair is found
}

// Example usage
const arr = [1, 2, 3, 4, 6]
console.log(twoSum(arr, 5)) // Output: [2, 3]

// 3. Binary Search
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid // Return index of target
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1 // Return -1 if target not found
}

// Example usage
const sortedArr = [1, 2, 3, 4, 5]
console.log(binarySearch(sortedArr, 4)) // Output: 3

// 4. Sliding Window Technique (Maximum Sum Subarray of Size K)
function maxSumSubArray(arr, k) {
  let maxSum = 0
  let currentSum = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentSum)
      currentSum -= arr[i - (k - 1)]
    }
  }
  return maxSum
}

// Example usage
const slidingArray = [2, 1, 5, 1, 3, 2]
console.log(maxSumSubArray(slidingArray, 3)) // Output: 9

// 5. Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  const result = []
  let i = 0,
    j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10]
console.log(mergeSort(unsortedArray)) // Output: [3, 9, 10, 27, 38, 43, 82]

// OR

function divide(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = divide(arr.slice(0, mid))
  const rightArr = divide(arr.slice(mid))
  return merge(leftArr, rightArr)
}

function merge(left, right) {
  const sortedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

const array = [64, 25, 12, 22, 11]
console.log('Sorted array:', divide(array))
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// 6. Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr

  const pivot = arr[arr.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// Example usage
const arrayToSort = [10, 7, 8, 9, 1, 5]
console.log(quickSort(arrayToSort)) // Output: [1, 5, 7, 8, 9, 10]

// 7. Heap Sort
function heapSort(arr) {
  const n = arr.length

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  for (let i = n - 1; i > 0; i--) {
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, i, 0)
  }
  return arr
}

function heapify(arr, n, i) {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right
  }
  if (largest !== i) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, n, largest)
  }
}

// Example usage
const heapArray = [12, 11, 13, 5, 6, 7]
console.log(heapSort(heapArray)) // Output: [5, 6, 7, 11, 12, 13]

// 8. Count Sort
function countSort(arr) {
  const max = Math.max(...arr)
  const count = new Array(max + 1).fill(0)
  const output = new Array(arr.length)

  // Store the count of each element
  for (let num of arr) {
    count[num]++
  }

  // Update the count array to store actual positions
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1]
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i]
    count[arr[i]]--
  }

  return output
}

// Example usage
const countArray = [4, 2, 2, 8, 3, 3, 1]
console.log(countSort(countArray)) // Output: [1, 2, 2, 3, 3, 4, 8]

// 10. Longest Increasing Subsequence (LIS)
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

// Example usage
const lisArray = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(lisArray)) // Output: 4

// 11. Two Sum Problem
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i] // Return the indices
    }
    map.set(nums[i], i)
  }
  return [] // Return an empty array if no solution
}

// Example usage
const twoSumArray = [2, 7, 11, 15]
console.log(twoSum(twoSumArray, 9)) // Output: [0, 1]

// 12. Majority Element
function majorityElement(nums) {
  let candidate = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++
    } else {
      count--
      if (count === 0) {
        candidate = nums[i]
        count = 1
      }
    }
  }

  return candidate // Assuming the majority element always exists
}

// Example usage
const majorityArray = [3, 2, 3]
console.log(majorityElement(majorityArray)) // Output: 3

// 13. Subarray Product Less Than K
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0
  let product = 1
  let left = 0
  let count = 0

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right]

    while (product >= k) {
      product /= nums[left]
      left++
    }
    count += right - left + 1
  }
  return count
}

// Example usage
const productArray = [10, 5, 2, 6]
console.log(numSubarrayProductLessThanK(productArray, 100)) // Output: 8

// 14. Intersection of Two Arrays
function intersection(nums1, nums2) {
  const set1 = new Set(nums1)
  const result = new Set()

  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num)
    }
  }
  return Array.from(result)
}

// Example usage
const array1 = [1, 2, 2, 1]
const array2 = [2, 2]
console.log(intersection(array1, array2)) // Output: [2]
