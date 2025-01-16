function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = mergeSort(arr.slice(0, mid))
  const rightArr = mergeSort(arr.slice(mid))
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
console.log("Sorted array:", mergeSort(array))
// Time complexity :  O(n^2)
// space : O(1)
