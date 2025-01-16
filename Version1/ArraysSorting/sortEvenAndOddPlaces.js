// Input:  arr[] = {0, 1, 2, 3, 4, 5, 6, 7}
// Output: arr[] = {0, 2, 4, 6, 7, 5, 3, 1}
// Even-place elements : 0, 2, 4, 6
// Odd-place elements : 1, 3, 5, 7
// Even-place elements in increasing order :
// 0, 2, 4, 6
// Odd-Place elements in decreasing order :
// 7, 5, 3, 1

function divide(arr, sortAscending = true) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  const left = divide(arr.slice(0, mid), sortAscending)
  const right = divide(arr.slice(mid), sortAscending)
  return merge(left, right, sortAscending)
}

function merge(left, right, sortAscending = true) {
  const sortedArr = []
  while (left.length && right.length) {
    if (sortAscending ? left[0] < right[0] : right[0] < left[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

function sortEvenAndOdd(arr) {
  const evenArr = [],
    oddArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(arr[i])
    } else {
      evenArr.push(arr[i])
    }
  }
  console.log('oddArr: ', oddArr)
  console.log('evenArr: ', evenArr)

  return [...divide(evenArr), ...divide(oddArr, false)]
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7]
console.log('sortEvenAndOdd: ', sortEvenAndOdd(arr))

//  Solution 2
// swap even index of first half with odd index of second half
// sort left half in des and right in asc
// swap left half with right half

function sortEvenAndOddUsingSwap(arr) {
  const n = arr.length
  const mid = Math.floor(arr.length / 2)
  let leftHalf = arr.slice(0, mid)
  let rightHalf = arr.slice(mid)

  for (let i = 0; i < leftHalf.length; i++) {
    if (i % 2 === 0) {
      ;[leftHalf[i], rightHalf[i + 1]] = [rightHalf[i + 1], leftHalf[i]]
    }
  }

  leftHalf = divide(leftHalf, false)
  rightHalf = divide(rightHalf, true)

  return [...rightHalf, ...leftHalf]
}

console.log('sortEvenAndOddUsingSwap: ', sortEvenAndOddUsingSwap(arr))
