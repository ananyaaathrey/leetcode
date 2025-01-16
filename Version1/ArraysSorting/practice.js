function findMissingNumberInSortedArray(arr) {
  for (let i = 1; i <= N; i++) {
    if (arr[i] !== i) return i
  }

  return 'not found'
}

function findMissingNumberInUnsortedArray(arr, N) {
  const set = new Set()

  for (let i = 0; i < N; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i])
    }
  }

  for (let i = 1; i < N; i++) {
    if (!set.has(i)) {
      return i
    }
  }

  return 'all are present'
}
console.log(
  'missing : ',
  findMissingNumberInUnsortedArray([1, 2, 4, 6, 3, 7, 8], 8)
)

function findMissingAndRepeating(arr) {
  const n = arr.length
  const set = new Array(n).fill(false)
  let repeat = 0,
    missing = 0
  for (let i = 1; i < arr.length; i++) {
    if (set[arr[i]]) {
      repeat = arr[i]
    }
    set[arr[i]] = true
  }
  for (let i = 1; i < arr.length + 1; i++) {
    if (set[i] === false) {
      missing = i
    }
  }

  return { missing, repeat }
}
console.log(
  'findMissingAndRepeating: ',
  findMissingAndRepeating([4, 3, 6, 2, 1, 1])
)
//   [ F, F, F, F, F, F, F]
//   [ 0, 1, 2, 3, 4, 5, 6]
//   [ F, T, T, T, T, F, T]

function binarySearch(arr, low, high, key) {
  if (high < low) {
    return -1
  }
  while (low < high) {
    let mid = Math.floor(high + low / 2)
    if (arr[mid] === key) {
      return mid
    }
    if (key < arr[mid]) {
      // move high
      return binarySearch(arr, low, arr[mid - 1], key)
    }
    return binarySearch(arr, arr[mid + 1], high, key)
  }
}
const arr = [5, 6, 7, 8, 9, 10]
console.log('binarySearch: ', binarySearch(arr, 0, arr.length - 1, 10))
