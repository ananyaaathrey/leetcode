// https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/
// Input:  arr[] = {{1, 3}, {5, 7}, {2, 4}, {6, 8}}
// Output: true
// The intervals {1, 3} and {2, 4} overlap

// Input:  arr[] = {{1, 3}, {7, 9}, {4, 6}, {10, 13}}
// Output: false
// No pair of intervals overlap.

function checkOverlap(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const start = arr[i][0]
        const mid1 = arr[i][1]
        const mid2 = arr[j][0]
        const last = arr[j][1]
        if (start < mid2 && mid2 < mid1 && mid1 < last) {
          return [
            [start, mid1],
            [mid2, last],
          ]
        }
      }
    }
  }
  return false
}
const arr = [
  [1, 3],
  [5, 7],
  [2, 4],
  [6, 8],
]
console.log('checkOverlap: ', checkOverlap(arr))

//  solution 2 : sorting 2 dimensional array

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivot = arr.length - 1
  let left = [],
    right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] < arr[pivot][0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)]
}

function sorting2DArray(arr) {
  const sorted = quickSort(arr)
  console.log('sorted: ', sorted)

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] > sorted[i + 1][0]) {
      return [sorted[i], sorted[i + 1]]
    }
  }
  return false
}

console.log('sorting2DArray: ', sorting2DArray(arr))
