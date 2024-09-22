// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}
// Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
// Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

// Solution 1
function sortZerosOnesAndTwos(arr) {
  let c0 = 0,
    c1 = 0,
    c2 = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c0++
    } else if (arr[i] === 1) {
      c1++
    } else {
      c2++
    }
  }

  console.log(c0, c1, c2)
  let index = 0
  for (let i = 0; i < c0; i++) {
    arr[index++] = 0
  }
  for (let i = 0; i < c1; i++) {
    arr[index++] = 1
  }
  for (let i = 0; i < c2; i++) {
    arr[index++] = 2
  }
  return arr
}

console.log('result : ', sortZerosOnesAndTwos([0, 1, 2, 0, 1, 2]))
// time complexity : O(N)
// space complexity : O(1)

// Solution 2 - using One pass
function onePassSorting(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1
  while (mid <= high) {
    if (arr[mid] === 0) {
      ;[arr[low], arr[mid]] = [arr[mid], arr[low]]
      low++
      mid++
    } else if (arr[mid] === 1) {
      mid++
    } else {
      ;[arr[high], arr[mid]] = [arr[mid], arr[high]]
      high--
    }
  }
  return arr
}

console.log('onePassSorting result : ', onePassSorting([0, 1, 2, 0, 1, 2]))
