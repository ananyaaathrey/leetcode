// Find First and Last Position of Element in Sorted Array:
// Locate the first and last positions of a target value using binary search.
function findPositionNew(arr, target) {
  let l = 0,
    r = arr.length - 1,
    mid,
    newMidLow = -1,
    newMidHigh = -1
  while (l <= r) {
    mid = Math.floor((l + r) / 2)

    if (arr[mid] === target) {
      newMidLow = mid
      newMidHigh = mid

      while (newMidLow > 0 && arr[newMidLow - 1] === target) {
        newMidLow--
      }

      while (newMidHigh < arr.length - 1 && arr[newMidHigh + 1] === target) {
        newMidHigh++
      }
      break
    }

    if (arr[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return [newMidLow, newMidHigh]
}

// console.log('findPosition 222: ', findPosition([5, 7, 7, 8, 8, 8, 10], 8))
// console.log(
//   'findPosition222: ',
//   findPositionNew([5, 5, , 5, 5, 7, 7, 8, 8, 8, 10], 5)
// )
console.log(
  'findPositionNew : ',
  findPositionNew([5, 5, 5, 5, 5, 7, 7, 8, 8, 8, 10], 5)
) // Output: [0, 4]

console.log(findPositionNew([5, 5, 5, 5, 5, 7, 7, 8, 8, 8, 10], 5)) // Output: [0, 4]
console.log(findPositionNew([5, 7, 7, 8, 8, 10], 8)) // Output: [3, 4]
console.log(findPositionNew([5, 7, 7, 8, 8, 10], 6)) // Output: [-1, -1]
