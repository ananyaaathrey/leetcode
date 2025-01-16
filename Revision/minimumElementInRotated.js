// Question:
// Given a rotated sorted array that may contain duplicates, find the minimum element.

// Examples:

// Input: [3, 4, 5, 1, 2]
// Output: 1

// Input: [2, 2, 2, 0, 1, 2]
// Output: 0

// Input: [1, 1, 1, 1, 1]
// Output: 1

// Input: [10, 1, 10, 10, 10]
// Output: 1

// function minimumInRotated(arr) {
//   let min = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   return min
// }
// console.log('minimumInRotated: ', minimumInRotated([3, 4, 5, 1, 2]))

function minimumInRotated(arr) {
  let l = 0,
    r = arr.length - 1
  let mid
  while (l <= r) {
    mid = Math.floor((l + r) / 2)
    // console.log('mid: ', mid)

    if (arr[mid] > arr[mid + 1]) {
      //   console.log('1')

      return arr[mid + 1]
    }
    if (arr[mid] < arr[mid - 1]) {
      //   console.log('2')

      return arr[mid]
    }
    // console.log('mid: ', mid, ' left:', l)

    if (arr[mid] > arr[l]) {
      //   console.log('left')

      l = mid + 1
    } else {
      //   console.log('right')

      r = mid - 1
    }
  }
  return arr[0]
}
console.log('minimumInRotated: ', minimumInRotated([3, 4, 5, 1, 2]))
console.log('minimumInRotated: ', minimumInRotated([2, 2, 2, 0, 1, 2]))
console.log('minimumInRotated: ', minimumInRotated([1, 1, 1, 1, 1]))
console.log('minimumInRotated: ', minimumInRotated([10, 1, 10, 10, 10]))

function msearchInRotated(arr, target) {
  let l = 0,
    r = arr.length - 1
  let mid
  while (l <= r) {
    mid = Math.floor((l + r) / 2)

    if (arr[mid] === target) {
      return mid
      //   return arr[mid + 1]
    }
    // if (arr[mid] < arr[mid - 1]) {
    //   //   return arr[mid]
    // }

    if (arr[mid] > arr[mid - 1]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}
