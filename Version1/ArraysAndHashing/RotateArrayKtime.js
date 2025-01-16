// Input: arr[] = {15, 18, 2, 3, 6, 12} // [15,16] // [7, 9, 11, 12, 5] //[] //[1]
// Output: 2
function findKRotations(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1
    }
  }
  return 0
}
// Input: arr[] = {15, 18, 2, 3, 6, 12} // [15,16] // [7, 9, 11, 12, 5] //[] //[1]
// Output: 2 [15, 18, 19, 20, 3, 6, 12] [17, 9, 11, 12, 15]
function binarySearch2(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let high = arr.length - 1,
    low = 0,
    mid

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    // console.log('obj: ', { low, mid, high })
    if (arr[mid - 1] > arr[mid]) {
      //&& arr[mid + 1] && arr[mid] < arr[mid + 1]
      return mid
    }
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1
    }

    if (arr[mid + 1] > arr[mid] && arr[mid] > arr[low]) {
      // move low
      low = mid + 1
    } else {
      // if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid - 1]) {
      // if (arr[mid] < arr[high]) {
      high = mid - 1
    }
  }
}

// console.log('binarySearch: ', binarySearch2([15, 18, 2, 3, 6, 12]))
// console.log('binarySearch: ', binarySearch2([7, 9, 11, 12, 5]))
// console.log('binarySearch: ', binarySearch2([17, 9, 11, 12, 15]))

console.log('binarySearch: ', binarySearch2([2, 1]))
