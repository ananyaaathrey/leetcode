function bubbleSort(arr) {
  let i,
    j,
    swapped,
    n = arr.length

  for (i = 0; i < n - 1; i++) {
    swapped = false
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }
    if (!swapped) {
      break
    }
  }
  return arr
}

const array = [64, 25, 12, 22, 11]
console.log('Sorted array:', bubbleSort(array))
// Time complexity :  O(n^2)
// space : O(1)
