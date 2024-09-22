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
