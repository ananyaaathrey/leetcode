function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length - 1]
  let left = [],
    right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [64, 25, 12, 22, 11]
console.log('Sorted array:', quickSort(array))
// Time Complexity: O(n log n)
// Space Complexity: O(n)
