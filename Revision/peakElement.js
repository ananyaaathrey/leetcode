function peakElement(arr, n) {
  let greatest = arr[0]

  if (arr.length === 1) {
    return arr[0]
  } else if (arr.length === 2) {
    return arr[0]
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] >= greatest && arr[i] >= arr[i + 1]) {
      return arr[i]
    }
  }
  return -1
}

const arr = [1, 1]
const n = arr.length
console.log('peakElement(arr,n): ', peakElement(arr, n))
