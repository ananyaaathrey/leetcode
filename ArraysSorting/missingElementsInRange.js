// Input: arr[] = {10, 12, 11, 15},
//        low = 10, high = 15
// Output: 13, 14
// Input: arr[] = {1, 14, 11, 51, 15},
//        low = 50, high = 55
// Output: 50, 52, 53, 54 55

function findMissingElements(arr, low, high) {
  const missingElements = []
  let present = false
  for (let i = low; i <= high; i++) {
    present = false

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        present = true
      }
    }
    if (!present) {
      missingElements.push(i)
    }
  }
  return missingElements
}
const arr = [1, 14, 11, 51, 15],
  low = 50,
  high = 55
// [10, 12, 11, 15]
// const low = 10,
//   high = 15
console.log('findMissingElements: ', findMissingElements(arr, low, high))

// solution 2

function findMissingElements2(arr, low, high) {
  const points_of_range = Array(high - low + 1).fill(0)
  const missingElements = []
  for (let i = low; i <= high; i++) {
    points_of_range.push(i)
  }

  for (let j = 0; j < arr.length; j++) {
    if (low <= arr[j] && arr[j] <= high) {
      points_of_range[arr[j] - low] = true
    }
  }

  for (let k = 0; k < points_of_range.length; k++) {
    if (!points_of_range[k]) {
      missingElements.push(low + k)
    }
  }
  return missingElements
}

console.log('findMissingElements2: ', findMissingElements2(arr, low, high))
// Time Complexity: O(n + (high-low+1))
// Auxiliary Space: O(n)
