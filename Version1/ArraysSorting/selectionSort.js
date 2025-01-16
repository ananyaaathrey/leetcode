function swap(arr, ind1, ind2) {
  return ([arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]])
}

function selectionSort(arr) {
  let min,
    i,
    j,
    n = arr.length

  for (i = 0; i < n - 1; i++) {
    min = i
    for (j = i; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      ;[arr[i], arr[min]] = [arr[min], arr[i]]

      //   swap(arr, min, i);
    }
  }
  return arr
}

const array = [64, 25, 12, 22, 11]
console.log('Sorted array:', selectionSort(array))
// Time complexity :  O(n^2)
// space : O(1)
